import type { CompositionNode, GrammarCategory } from "../analysis/parse";
import { lookup } from "../vocab/dictionary";
import { useLang } from "../context/lang";
import styles from "./CompositionTree.module.css";

export const CATEGORY_META: Record<
  GrammarCategory,
  { jp: string; en: string; varName: string }
> = {
  phrase: { jp: "句", en: "Phrase", varName: "--cat-phrase" },
  conjugation: { jp: "活用", en: "Conjugation", varName: "--cat-conjugation" },
  verb: { jp: "動詞", en: "Verb", varName: "--cat-verb" },
  adjective: { jp: "形容詞", en: "Adjective", varName: "--cat-adjective" },
  noun: { jp: "名詞", en: "Noun", varName: "--cat-noun" },
  particle: { jp: "助詞", en: "Particle", varName: "--cat-particle" },
  form: { jp: "活用形", en: "Form", varName: "--cat-form" },
  demonstrative: { jp: "指示詞", en: "Demonstrative", varName: "--cat-demonstrative" },
  interrogative: { jp: "疑問詞", en: "Interrogative", varName: "--cat-interrogative" },
  literal: { jp: "リテラル", en: "Literal", varName: "--cat-literal" },
  other: { jp: "型", en: "Type", varName: "--cat-other" },
};

interface Props {
  node: CompositionNode;
  selectedId: string | null;
  onSelect: (node: CompositionNode) => void;
  depth?: number;
}

export default function CompositionTree({
  node,
  selectedId,
  onSelect,
  depth = 0,
}: Props) {
  const { lang } = useLang();
  const meta = CATEGORY_META[node.category];
  const color = `var(${meta.varName})`;
  const isLiteral = node.ctor === null && node.children.length === 0;
  const selected = selectedId === node.id;

  // Hide a resolved value that is identical to the literal label (redundant).
  const literalValue = isLiteral ? node.label.replace(/^"|"$/g, "") : null;
  const showResolved =
    node.resolved != null && node.resolved !== "" && node.resolved !== literalValue;

  // Look the word up in the vocabulary table to show its reading + meaning.
  const lookupKey = node.label.replace(/^"|"$/g, "");
  const entry = lookup(lookupKey);

  return (
    <div className={styles.node} style={{ ["--cat" as string]: color }}>
      <button
        type="button"
        className={`${styles.row} ${selected ? styles.selected : ""}`}
        onClick={() => onSelect(node)}
        title={entry ? `${entry.reading} · ${lang === "zh" ? entry.zh : entry.en}` : node.text}
      >
        <span className={styles.tag} style={{ background: color }}>
          {meta.jp}
        </span>
        <span className={`jp ${styles.label}`}>{node.label}</span>
        {entry && <span className={`jp ${styles.reading}`}>{entry.reading}</span>}
        {node.ctor && <span className={styles.ctor}>{node.ctor}</span>}
        {showResolved && (
          <span className={`jp ${styles.resolved}`}>
            <span className={styles.arrow}>→</span>「{node.resolved}」
          </span>
        )}
      </button>

      {node.children.length > 0 && (
        <div className={styles.children}>
          {node.children.map((child) => (
            <CompositionTree
              key={child.id}
              node={child}
              selectedId={selectedId}
              onSelect={onSelect}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
