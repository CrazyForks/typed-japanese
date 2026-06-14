/**
 * Starter sentences for the composer. Each snippet is real, self-contained
 * Typed Japanese: it type-checks against the library's .d.ts files loaded into
 * Monaco, and its *last* type alias is a sentence/phrase that resolves to a
 * concrete Japanese string the visualiser can decompose.
 */
export interface Snippet {
  id: string;
  title: string;
  jp: string;
  en: string;
  code: string;
}

export const SNIPPETS: ReadonlyArray<Snippet> = [
  {
    id: "verb",
    title: "Verb conjugation",
    jp: "話して",
    en: "“speaking” — conjugate a Godan verb to its て-form",
    code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

// 話す (to speak) — a Godan verb, split into stem + ending
type 話す = GodanVerb & { stem: "話"; ending: "す" };

// Conjugate it. Hover 話して in the editor — TypeScript computes "話して".
type 話して = ConjugateVerb<話す, "て形">;
`,
  },
  {
    id: "himmel",
    title: "Conditional · Himmel",
    jp: "ヒンメルならそうした",
    en: "“If it were Himmel, he would have done so.”",
    code: `import type {
  ProperNoun,
  IrregularVerb,
  DemonstrativeAction,
  ConditionalPhrase,
} from "typed-japanese";

type ヒンメル = ProperNoun<"ヒンメル">;
type する = IrregularVerb & { dictionary: "する" };

// そうした = "did so" (past form of そうする)
type そうした = DemonstrativeAction<"そう", する, "た形">;

type ヒンメルならそうした = ConditionalPhrase<ヒンメル, "なら", そうした>;
`,
  },
  {
    id: "connected",
    title: "Connected · いいよ来いよ",
    jp: "いいよ、来いよ",
    en: "“It's fine — come on!”",
    code: `import type {
  IAdjective,
  IrregularVerb,
  ConjugateAdjective,
  ConjugateVerb,
  PhraseWithParticle,
  ConnectedPhrases,
} from "typed-japanese";

type いい = IAdjective & { stem: "い"; ending: "い"; irregular: true };
type 来る = IrregularVerb & { dictionary: "来る" };

type いいよ = PhraseWithParticle<ConjugateAdjective<いい, "基本形">, "よ">;
type 来いよ = PhraseWithParticle<ConjugateVerb<来る, "命令形">, "よ">;

type いいよ来いよ = ConnectedPhrases<いいよ, 来いよ>;
`,
  },
  {
    id: "interrogative",
    title: "Interrogative",
    jp: "どうしてパンを食べるの",
    en: "“Why do you eat bread?”",
    code: `import type { IchidanVerb, InterrogativePhrase } from "typed-japanese";

type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// InterrogativePhrase<Adverb, Subject, Verb, VerbForm, QuestionParticle>
type どうしてパンを食べるの = InterrogativePhrase<
  "どうして",
  "パンを",
  食べる,
  "辞書形",
  "の"
>;
`,
  },
  {
    id: "na-adjective",
    title: "Na-adjective",
    jp: "綺麗ですね",
    en: "“It's pretty, isn't it?”",
    code: `import type {
  NaAdjective,
  ConjugateAdjective,
  PhraseWithParticle,
} from "typed-japanese";

type 綺麗 = NaAdjective & { stem: "綺麗" };

type 綺麗ですね = PhraseWithParticle<ConjugateAdjective<綺麗, "丁寧形">, "ね">;
`,
  },
];
