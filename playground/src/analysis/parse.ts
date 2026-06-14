/**
 * Parse Typed Japanese source with the real TypeScript Compiler API and turn the
 * nested type expression of a chosen type alias into a tree of grammar nodes.
 *
 * We only *parse* here (ts.createSourceFile) — no type checking, so no lib files
 * are needed. The resolved Japanese value of each node is filled in separately
 * by ../analysis/resolve.ts, which asks Monaco's TypeScript worker.
 *
 * `typescript` is loaded lazily so it lands in its own chunk.
 */
import type * as TS from "typescript";

let tsmod: typeof TS | null = null;
async function loadTs(): Promise<typeof TS> {
  tsmod ??= (await import("typescript")) as unknown as typeof TS;
  return tsmod;
}

export type GrammarCategory =
  | "phrase"
  | "conjugation"
  | "verb"
  | "adjective"
  | "noun"
  | "particle"
  | "form"
  | "demonstrative"
  | "interrogative"
  | "literal"
  | "other";

export interface CompositionNode {
  id: string;
  /** alias name, constructor name, or quoted literal */
  label: string;
  /** base/constructor type name shown as a sub-tag (null for plain literals) */
  ctor: string | null;
  category: GrammarCategory;
  /** exact source text of this type expression — used to resolve its value */
  text: string;
  /** offset span in the original source, for editor highlighting */
  start: number;
  end: number;
  children: CompositionNode[];
  /** filled by the resolver: the Japanese string this subtree evaluates to */
  resolved?: string | null;
}

export interface AliasSummary {
  name: string;
  start: number;
  end: number;
}

export interface Analysis {
  aliases: AliasSummary[];
  /** name of the alias we picked to visualise by default (the sentence) */
  defaultAlias: string | null;
}

// --- grammar vocabulary (mirrors the library's .d.ts unions) -----------------

const COMPOSITIONAL = new Set([
  "ConditionalPhrase",
  "ConnectedPhrases",
  "InterrogativePhrase",
  "PhraseWithParticle",
  "DemonstrativeAction",
  "ConjugateVerb",
  "ConjugateAdjective",
  "NounPhrase",
  "VerbPhrase",
  "AdjectivalPhrase",
]);

const CATEGORY_BY_NAME: Record<string, GrammarCategory> = {
  ConditionalPhrase: "phrase",
  ConnectedPhrases: "phrase",
  InterrogativePhrase: "phrase",
  PhraseWithParticle: "phrase",
  NounPhrase: "phrase",
  VerbPhrase: "phrase",
  AdjectivalPhrase: "phrase",
  DemonstrativeAction: "phrase",
  ConjugateVerb: "conjugation",
  ConjugateAdjective: "conjugation",
  GodanVerb: "verb",
  IchidanVerb: "verb",
  IrregularVerb: "verb",
  Verb: "verb",
  IAdjective: "adjective",
  NaAdjective: "adjective",
  Adjective: "adjective",
  ProperNoun: "noun",
};

const FORMS = new Set([
  "辞書形", "ます形", "て形", "た形", "ない形", "可能形", "受身形", "使役形",
  "意向形", "命令形", "条件形", "仮定形", "基本形", "丁寧形", "過去形", "否定形",
]);
const CONDITIONAL = new Set(["なら", "たら", "れば"]);
const DEMONSTRATIVE = new Set(["こう", "そう", "ああ", "どう"]);
const INTERROGATIVE = new Set([
  "なぜ", "なんで", "どうして", "いつ", "どこ", "だれ", "誰", "何", "なに", "どんな", "どれ",
]);
const PARTICLES = new Set([
  "は", "が", "を", "に", "へ", "で", "と", "から", "まで", "よ", "ね", "か", "よね", "の", "だ", "も",
]);

function classifyLiteral(value: string): GrammarCategory {
  if (FORMS.has(value)) return "form";
  if (DEMONSTRATIVE.has(value)) return "demonstrative";
  if (INTERROGATIVE.has(value)) return "interrogative";
  if (CONDITIONAL.has(value)) return "particle";
  if (PARTICLES.has(value)) return "particle";
  return "literal";
}

// --- parsing -----------------------------------------------------------------

export async function analyze(code: string): Promise<Analysis> {
  const ts = await loadTs();
  const sf = ts.createSourceFile("main.ts", code, ts.ScriptTarget.Latest, true);
  const aliases: AliasSummary[] = [];
  sf.forEachChild((node) => {
    if (ts.isTypeAliasDeclaration(node)) {
      aliases.push({
        name: node.name.text,
        start: node.name.getStart(sf),
        end: node.name.getEnd(),
      });
    }
  });
  // Heuristic: the "sentence" is the last declared alias.
  const defaultAlias = aliases.length ? aliases[aliases.length - 1]!.name : null;
  return { aliases, defaultAlias };
}

/** Build the composition tree for a single alias by name. */
export async function buildTree(
  code: string,
  aliasName: string
): Promise<CompositionNode | null> {
  const ts = await loadTs();
  const sf = ts.createSourceFile("main.ts", code, ts.ScriptTarget.Latest, true);

  const aliasMap = new Map<string, TS.TypeAliasDeclaration>();
  sf.forEachChild((node) => {
    if (ts.isTypeAliasDeclaration(node)) aliasMap.set(node.name.text, node);
  });

  const root = aliasMap.get(aliasName);
  if (!root) return null;

  function entityName(name: TS.EntityName): string {
    return ts.isIdentifier(name) ? name.text : name.right.text;
  }

  // Follow a bare alias reference (no type args) to its definition so the tree
  // shows the full composition, not an opaque alias name.
  function effective(node: TS.TypeNode): { node: TS.TypeNode; alias?: string } {
    if (ts.isTypeReferenceNode(node) && !node.typeArguments) {
      const nm = entityName(node.typeName);
      const decl = aliasMap.get(nm);
      if (decl) return { node: decl.type, alias: nm };
    }
    return { node };
  }

  function baseName(node: TS.TypeNode): string | null {
    if (ts.isTypeReferenceNode(node)) return entityName(node.typeName);
    if (ts.isIntersectionTypeNode(node)) {
      const ref = node.types.find((t) => ts.isTypeReferenceNode(t));
      return ref ? entityName((ref as TS.TypeReferenceNode).typeName) : null;
    }
    return null;
  }

  function build(node: TS.TypeNode, idPath: string): CompositionNode {
    // Unwrap parentheses so `(A & B)` etc. don't add a useless level.
    if (ts.isParenthesizedTypeNode(node)) return build(node.type, idPath);

    const start = node.getStart(sf);
    const end = node.getEnd();
    const text = node.getText(sf).trim();

    // String literal leaf.
    if (ts.isLiteralTypeNode(node) && ts.isStringLiteral(node.literal)) {
      const value = node.literal.text;
      return {
        id: idPath,
        label: `"${value}"`,
        ctor: null,
        category: classifyLiteral(value),
        text,
        start,
        end,
        children: [],
      };
    }

    // Template literal type: `${A}いる` — the glue most real sentences use.
    // Decompose into its literal chunks and embedded type expressions.
    if (ts.isTemplateLiteralTypeNode(node)) {
      const chunk = (value: string, k: number): CompositionNode => ({
        id: `${idPath}.c${k}`,
        label: `"${value}"`,
        ctor: null,
        category: classifyLiteral(value),
        text: `"${value}"`,
        start,
        end,
        children: [],
      });
      const kids: CompositionNode[] = [];
      let k = 0;
      if (node.head.text) kids.push(chunk(node.head.text, k++));
      node.templateSpans.forEach((span, i) => {
        kids.push(build(span.type, `${idPath}.${i}`));
        if (span.literal.text) kids.push(chunk(span.literal.text, k++));
      });
      return {
        id: idPath,
        label: "Template",
        ctor: "`…`",
        category: "phrase",
        text,
        start,
        end,
        children: kids,
      };
    }

    const eff = effective(node);
    const name = baseName(eff.node);
    const category: GrammarCategory =
      (name && CATEGORY_BY_NAME[name]) || "other";

    let children: CompositionNode[] = [];
    if (
      name &&
      COMPOSITIONAL.has(name) &&
      ts.isTypeReferenceNode(eff.node) &&
      eff.node.typeArguments
    ) {
      children = eff.node.typeArguments.map((arg, i) =>
        build(arg, `${idPath}.${i}`)
      );
    }

    const label = eff.alias ?? name ?? text;
    const ctor = name && name !== label ? name : null;

    return { id: idPath, label, ctor, category, text, start, end, children };
  }

  return build(root.type, "0");
}

/** Flatten a tree into the list of unique source-text fragments to resolve. */
export function collectTexts(node: CompositionNode, out: Set<string> = new Set()): Set<string> {
  out.add(node.text);
  for (const c of node.children) collectTexts(c, out);
  return out;
}
