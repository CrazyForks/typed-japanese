import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e07",
  level: "elementary",
  order: 7,
  titleEn: "Past tense",
  titleZh: "过去时",
  summaryEn:
    "Japanese marks the past simply by changing the polite ending. Verbs go from `〜ます` to `〜ました` (and `〜ません` to `〜ませんでした`), while nouns and na-adjectives use `でした`. This chapter shows how to say what you did and what something was.",
  summaryZh:
    "日语只需替换礼貌体词尾即可表达过去。动词由 `〜ます` 变为 `〜ました`(否定 `〜ません` 变为 `〜ませんでした`),名词和形容动词则用 `でした`。本章介绍如何表达「做过什么」以及「曾经是什么」。",
  points: [
    {
      id: "e07-1",
      titleEn: "Verbs: 〜ました (polite past)",
      titleZh: "动词:〜ました(礼貌体过去)",
      bodyEn:
        "To put a polite verb into the past, replace the `ます` ending with `ました`. The verb stem itself does not change — only the ending. `飲みます` (drink) → `飲みました` (drank), `食べます` (eat) → `食べました` (ate).\n\nThis works the same way for every verb group, including irregulars: `します` → `しました`, `来ます` → `来ました`.",
      bodyZh:
        "要把礼貌体动词变为过去,只需把词尾 `ます` 换成 `ました`。动词词干本身不变,只改词尾。`飲みます`(喝)→ `飲みました`(喝了),`食べます`(吃)→ `食べました`(吃了)。\n\n所有动词类型的变化方式都相同,包括不规则动词:`します` → `しました`,`来ます` → `来ました`。",
      examples: [
        {
          jp: "私はコーヒーを飲みました",
          reading: "わたしはコーヒーをのみました",
          en: "I drank coffee.",
          zh: "我喝了咖啡。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 私 + は + コーヒー + を + 飲み(ます形) + ました
type 私はコーヒーを飲みました = \`\${PhraseWithParticle<私, "は">}コーヒーを\${ConjugateVerb<飲む, "ます形">}ました\`;
`,
        },
        {
          jp: "私はパンを食べました",
          reading: "わたしはパンをたべました",
          en: "I ate bread.",
          zh: "我吃了面包。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

type 私はパンを食べました = \`\${PhraseWithParticle<私, "は">}パンを\${ConjugateVerb<食べる, "ます形">}ました\`;
`,
        },
        {
          jp: "田中さんは来ました",
          reading: "たなかさんはきました",
          en: "Mr. Tanaka came.",
          zh: "田中先生来了。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 田中さん = ProperNoun<"田中さん">;
type 来る = IrregularVerb & { dictionary: "来る" };

type 田中さんは来ました = \`\${PhraseWithParticle<田中さん, "は">}\${ConjugateVerb<来る, "ます形">}ました\`;
`,
        },
      ],
    },
    {
      id: "e07-2",
      titleEn: "Verbs: 〜ませんでした (polite past negative)",
      titleZh: "动词:〜ませんでした(礼貌体过去否定)",
      bodyEn:
        "The negative past of a polite verb is `〜ませんでした` — literally the present negative `〜ません` plus `でした`. So `飲みません` (don't drink) becomes `飲みませんでした` (didn't drink).\n\nAgain the stem is unchanged; you simply attach the longer ending. `食べませんでした` = “did not eat”, `しませんでした` = “did not do”.",
      bodyZh:
        "礼貌体动词的过去否定是 `〜ませんでした` —— 即现在否定 `〜ません` 再加 `でした`。因此 `飲みません`(不喝)变为 `飲みませんでした`(没喝)。\n\n词干同样不变,只需接上更长的词尾。`食べませんでした` = 「没吃」,`しませんでした` = 「没做」。",
      examples: [
        {
          jp: "私はお酒を飲みませんでした",
          reading: "わたしはおさけをのみませんでした",
          en: "I didn't drink alcohol.",
          zh: "我没喝酒。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// ます形(飲み) + ませんでした
type 私はお酒を飲みませんでした = \`\${PhraseWithParticle<私, "は">}お酒を\${ConjugateVerb<飲む, "ます形">}ませんでした\`;
`,
        },
        {
          jp: "私は勉強しませんでした",
          reading: "わたしはべんきょうしませんでした",
          en: "I didn't study.",
          zh: "我没学习。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type する = IrregularVerb & { dictionary: "する" };

// 勉強 + し(ます形 of する) + ませんでした
type 私は勉強しませんでした = \`\${PhraseWithParticle<私, "は">}勉強\${ConjugateVerb<する, "ます形">}ませんでした\`;
`,
        },
      ],
    },
    {
      id: "e07-3",
      titleEn: "Nouns: 〜でした (was)",
      titleZh: "名词:〜でした(曾是)",
      bodyEn:
        "For noun sentences, the past of the polite copula `です` is `でした`. So `学生です` (is a student) becomes `学生でした` (was a student).\n\nThe negative past is `ではありませんでした` (formal) — “was not”. The topic particle `は` still marks the subject just as in the present tense.",
      bodyZh:
        "对于名词句,礼貌体系动词 `です` 的过去形是 `でした`。因此 `学生です`(是学生)变为 `学生でした`(曾是学生)。\n\n过去否定是 `ではありませんでした`(郑重)——「曾不是」。提示主题的助词 `は` 仍与现在时一样标记主语。",
      examples: [
        {
          jp: "田中さんは学生でした",
          reading: "たなかさんはがくせいでした",
          en: "Mr. Tanaka was a student.",
          zh: "田中先生曾是学生。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 田中さん = ProperNoun<"田中さん">;
type 学生 = ProperNoun<"学生">;

// です の過去形 → でした
type 田中さんは学生でした = \`\${PhraseWithParticle<田中さん, "は">}\${学生}でした\`;
`,
        },
        {
          jp: "私は医者ではありませんでした",
          reading: "わたしはいしゃではありませんでした",
          en: "I was not a doctor.",
          zh: "我曾经不是医生。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 医者 = ProperNoun<"医者">;

type 私は医者ではありませんでした = \`\${PhraseWithParticle<私, "は">}\${医者}ではありませんでした\`;
`,
        },
      ],
    },
    {
      id: "e07-4",
      titleEn: "Adjectives in the past",
      titleZh: "形容词的过去时",
      bodyEn:
        "i-adjectives have their own past form: drop the final `い` and add `かった`. `おいしい` (delicious) → `おいしかった` (was delicious). To make it polite, just add `です` after: `おいしかったです`.\n\nna-adjectives behave like nouns: they take `でした`. `静かです` (is quiet) → `静かでした` (was quiet).",
      bodyZh:
        "i 形容词有自己的过去形:去掉词尾 `い`,加上 `かった`。`おいしい`(好吃)→ `おいしかった`(曾好吃)。要变礼貌体,只需在后面加 `です`:`おいしかったです`。\n\nな形容词的变化与名词相同,使用 `でした`。`静かです`(安静)→ `静かでした`(曾安静)。",
      examples: [
        {
          jp: "映画はおもしろかったです",
          reading: "えいがはおもしろかったです",
          en: "The movie was interesting.",
          zh: "电影很有趣。",
          code: `import type { ProperNoun, IAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 映画 = ProperNoun<"映画">;
type おもしろい = IAdjective & { stem: "おもしろ"; ending: "い" };

// 過去形 → おもしろかった、丁寧に → +です
type 映画はおもしろかったです = \`\${PhraseWithParticle<映画, "は">}\${ConjugateAdjective<おもしろい, "過去形">}です\`;
`,
        },
        {
          jp: "町は静かでした",
          reading: "まちはしずかでした",
          en: "The town was quiet.",
          zh: "小镇曾经很安静。",
          code: `import type { ProperNoun, NaAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 町 = ProperNoun<"町">;
type 静か = NaAdjective & { stem: "静か" };

// na-adjective の過去形 → 静かでした
type 町は静かでした = \`\${PhraseWithParticle<町, "は">}\${ConjugateAdjective<静か, "過去形">}\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
