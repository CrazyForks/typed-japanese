import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e08",
  level: "elementary",
  order: 8,
  titleEn: "Adjectives: い & な",
  titleZh: "形容词：い与な",
  summaryEn:
    "Japanese has two kinds of adjectives that behave differently: い-adjectives (which end in い, like 高い) and な-adjectives (which take な before a noun, like 静かな). This chapter shows how each modifies a noun, how to make them negative (〜くない / 〜ではない), and how to put them into the past (〜かった / 〜でした).",
  summaryZh:
    "日语有两类行为不同的形容词：以 い 结尾的 い形容词（如 高い）和修饰名词时需加 な 的 な形容词（如 静かな）。本章讲解两类形容词如何修饰名词、如何变否定（〜くない / 〜ではない），以及如何变过去式（〜かった / 〜でした）。",
  points: [
    {
      id: "e08-1",
      titleEn: "Attributive form: modifying a noun",
      titleZh: "连体形：修饰名词",
      bodyEn:
        "To place an adjective directly in front of a noun, use its basic (attributive) form.\n\nAn `い`-adjective is already in this form — just put it before the noun: `高い + 山 → 高い山` (a high mountain). A `な`-adjective, by contrast, needs `な` inserted between it and the noun: `静か + な + 部屋 → 静かな部屋` (a quiet room). That `な` is exactly why this class is called the “na-adjective”.",
      bodyZh:
        "要把形容词直接放在名词前面，使用它的基本形（连体形）。\n\n`い`形容词本身就是这个形式，直接放在名词前即可：`高い + 山 → 高い山`（高山）。而 `な`形容词需要在它和名词之间插入 `な`：`静か + な + 部屋 → 静かな部屋`（安静的房间）。正是这个 `な` 使这类词被称作「な形容词」。",
      examples: [
        {
          jp: "高い山",
          reading: "たかいやま",
          en: "a high mountain",
          zh: "高山",
          code: `import type { IAdjective, ConjugateAdjective, ProperNoun } from "typed-japanese";

type 高い = IAdjective & { stem: "高"; ending: "い" };
type 山 = ProperNoun<"山">;

// i-adjective in 基本形 sits directly before the noun
type 高い山 = \`\${ConjugateAdjective<高い, "基本形">}\${山}\`;
`,
        },
        {
          jp: "静かな部屋",
          reading: "しずかなへや",
          en: "a quiet room",
          zh: "安静的房间",
          code: `import type { NaAdjective, ConjugateAdjective, ProperNoun } from "typed-japanese";

type 静か = NaAdjective & { stem: "静か" };
type 部屋 = ProperNoun<"部屋">;

// na-adjective 基本形 already carries the linking な
type 静かな部屋 = \`\${ConjugateAdjective<静か, "基本形">}\${部屋}\`;
`,
        },
        {
          jp: "きれいな花です",
          reading: "きれいなはなです",
          en: "It is a pretty flower.",
          zh: "是漂亮的花。",
          code: `import type { NaAdjective, ConjugateAdjective, ProperNoun } from "typed-japanese";

type きれい = NaAdjective & { stem: "きれい" };
type 花 = ProperNoun<"花">;

// 静かな部屋 pattern, then close with です
type きれいな花です = \`\${ConjugateAdjective<きれい, "基本形">}\${花}です\`;
`,
        },
      ],
    },
    {
      id: "e08-2",
      titleEn: "Predicate adjectives: 〜です",
      titleZh: "形容词谓语：〜です",
      bodyEn:
        "An adjective can also be the predicate, at the very end of the sentence: `Topic は Adjective です`.\n\nFor an `い`-adjective, `です` is simply added after the plain form: `暑い → 暑いです`. (Note: the `です` here only adds politeness — the `い` itself already means “is hot”.) For a `な`-adjective, the bare stem takes `です` with no `な`: `元気 → 元気です`.",
      bodyZh:
        "形容词也可以作谓语，位于句末：`主题 は 形容词 です`。\n\n对 `い`形容词，直接在简体形后加 `です`：`暑い → 暑いです`。（注意：这里的 `です` 只是增加礼貌，`い` 本身已表示「（是）热的」。）对 `な`形容词，词干直接加 `です`，不带 `な`：`元気 → 元気です`。",
      examples: [
        {
          jp: "今日は暑いです",
          reading: "きょうはあついです",
          en: "Today is hot.",
          zh: "今天很热。",
          code: `import type { IAdjective, ConjugateAdjective, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 今日 = ProperNoun<"今日">;
type 暑い = IAdjective & { stem: "暑"; ending: "い" };

// 丁寧形 of an i-adjective = stem + いです
type 今日は暑いです = \`\${PhraseWithParticle<今日, "は">}\${ConjugateAdjective<暑い, "丁寧形">}\`;
`,
        },
        {
          jp: "父は元気です",
          reading: "ちちはげんきです",
          en: "My father is well.",
          zh: "我父亲很健康。",
          code: `import type { NaAdjective, ConjugateAdjective, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 父 = ProperNoun<"父">;
type 元気 = NaAdjective & { stem: "元気" };

// 丁寧形 of a na-adjective = stem + です (no な)
type 父は元気です = \`\${PhraseWithParticle<父, "は">}\${ConjugateAdjective<元気, "丁寧形">}\`;
`,
        },
      ],
    },
    {
      id: "e08-3",
      titleEn: "Negative: 〜くない / 〜ではない",
      titleZh: "否定：〜くない / 〜ではない",
      bodyEn:
        "The two adjective classes negate differently.\n\nAn `い`-adjective drops its final `い` and adds `くない`: `高い → 高くない` (not high). A `な`-adjective adds `ではない` to the stem: `静か → 静かではない` (not quiet); in casual speech `では` often shrinks to `じゃ`. For polite negation you can append `です` (e.g. `高くないです`).",
      bodyZh:
        "两类形容词的否定方式不同。\n\n`い`形容词去掉词尾 `い`，加 `くない`：`高い → 高くない`（不高）。`な`形容词在词干后加 `ではない`：`静か → 静かではない`（不安静）；口语中 `では` 常缩为 `じゃ`。要表达礼貌否定，可再加 `です`（如 `高くないです`）。",
      examples: [
        {
          jp: "この本は高くない",
          reading: "このほんはたかくない",
          en: "This book is not expensive.",
          zh: "这本书不贵。",
          code: `import type { IAdjective, ConjugateAdjective, ProperNoun, PhraseWithParticle } from "typed-japanese";

type この本 = ProperNoun<"この本">;
type 高い = IAdjective & { stem: "高"; ending: "い" };

// 否定形 of an i-adjective = stem + くない
type この本は高くない = \`\${PhraseWithParticle<この本, "は">}\${ConjugateAdjective<高い, "否定形">}\`;
`,
        },
        {
          jp: "この町は静かではない",
          reading: "このまちはしずかではない",
          en: "This town is not quiet.",
          zh: "这个城镇不安静。",
          code: `import type { NaAdjective, ConjugateAdjective, ProperNoun, PhraseWithParticle } from "typed-japanese";

type この町 = ProperNoun<"この町">;
type 静か = NaAdjective & { stem: "静か" };

// 否定形 of a na-adjective = stem + ではない
type この町は静かではない = \`\${PhraseWithParticle<この町, "は">}\${ConjugateAdjective<静か, "否定形">}\`;
`,
        },
      ],
    },
    {
      id: "e08-4",
      titleEn: "Past: 〜かった / 〜でした",
      titleZh: "过去：〜かった / 〜でした",
      bodyEn:
        "To put an adjective in the past tense:\n\nAn `い`-adjective drops `い` and adds `かった`: `高い → 高かった` (was high). Note that the copula does NOT become `でした` here — the past tense lives inside the adjective itself. A `な`-adjective, behaving more like a noun, uses `でした`: `静か → 静かでした` (was quiet).",
      bodyZh:
        "把形容词变成过去式：\n\n`い`形容词去掉 `い`，加 `かった`：`高い → 高かった`（（曾）很高）。注意这里系动词不用 `でした`——过去时含在形容词本身里。`な`形容词更像名词，使用 `でした`：`静か → 静かでした`（（曾）很安静）。",
      examples: [
        {
          jp: "昨日は寒かった",
          reading: "きのうはさむかった",
          en: "Yesterday was cold.",
          zh: "昨天很冷。",
          code: `import type { IAdjective, ConjugateAdjective, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 昨日 = ProperNoun<"昨日">;
type 寒い = IAdjective & { stem: "寒"; ending: "い" };

// 過去形 of an i-adjective = stem + かった
type 昨日は寒かった = \`\${PhraseWithParticle<昨日, "は">}\${ConjugateAdjective<寒い, "過去形">}\`;
`,
        },
        {
          jp: "旅行は楽しかった",
          reading: "りょこうはたのしかった",
          en: "The trip was fun.",
          zh: "旅行很开心。",
          code: `import type { IAdjective, ConjugateAdjective, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 旅行 = ProperNoun<"旅行">;
type 楽しい = IAdjective & { stem: "楽し"; ending: "い" };

type 旅行は楽しかった = \`\${PhraseWithParticle<旅行, "は">}\${ConjugateAdjective<楽しい, "過去形">}\`;
`,
        },
        {
          jp: "公園は静かでした",
          reading: "こうえんはしずかでした",
          en: "The park was quiet.",
          zh: "公园很安静。",
          code: `import type { NaAdjective, ConjugateAdjective, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 公園 = ProperNoun<"公園">;
type 静か = NaAdjective & { stem: "静か" };

// 過去形 of a na-adjective = stem + でした
type 公園は静かでした = \`\${PhraseWithParticle<公園, "は">}\${ConjugateAdjective<静か, "過去形">}\`;
`,
        },
      ],
    },
    {
      id: "e08-5",
      titleEn: "The irregular いい (good)",
      titleZh: "不规则形容词 いい（好）",
      bodyEn:
        "One very common `い`-adjective is irregular: `いい` (good). It is normal in the basic form, but when conjugating it reverts to its older stem `よ`.\n\nSo the negative is `よくない` (not `いくない`) and the past is `よかった` (not `いかった`). In Typed Japanese you mark it with `irregular: true` and `stem: \"い\"`.",
      bodyZh:
        "一个非常常见的 `い`形容词是不规则的：`いい`（好）。它在基本形时正常，但变形时会回到更古老的词干 `よ`。\n\n所以否定是 `よくない`（不是 `いくない`），过去是 `よかった`（不是 `いかった`）。在 Typed Japanese 中用 `irregular: true` 和 `stem: \"い\"` 来标记它。",
      examples: [
        {
          jp: "天気がよかった",
          reading: "てんきがよかった",
          en: "The weather was good.",
          zh: "天气很好。",
          code: `import type { IAdjective, ConjugateAdjective, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 天気 = ProperNoun<"天気">;
type いい = IAdjective & { stem: "い"; ending: "い"; irregular: true };

// irregular: 過去形 becomes よかった, not いかった
type 天気がよかった = \`\${PhraseWithParticle<天気, "が">}\${ConjugateAdjective<いい, "過去形">}\`;
`,
        },
        {
          jp: "気分がよくない",
          reading: "きぶんがよくない",
          en: "I don't feel well.",
          zh: "心情/身体不太好。",
          code: `import type { IAdjective, ConjugateAdjective, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 気分 = ProperNoun<"気分">;
type いい = IAdjective & { stem: "い"; ending: "い"; irregular: true };

// irregular: 否定形 becomes よくない, not いくない
type 気分がよくない = \`\${PhraseWithParticle<気分, "が">}\${ConjugateAdjective<いい, "否定形">}\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
