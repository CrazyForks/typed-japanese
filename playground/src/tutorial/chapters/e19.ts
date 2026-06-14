import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e19",
  level: "elementary",
  order: 19,
  titleEn: "Volitional, つもり, でしょう",
  titleZh: "意向形、つもり、でしょう",
  summaryEn:
    "Three ways to talk about what you will or might do. The volitional form (意向形) proposes “let's …” or expresses your own resolve; `〜つもり` states a firm intention; and `〜でしょう` softens a statement into “probably …” or invites agreement.",
  summaryZh:
    "三种谈论「将要做」或「可能做」的说法。意向形(意向形)用来提议「我们一起……吧」或表达自己的决心;`〜つもり` 陈述坚定的打算;`〜でしょう` 则把句子缓和成「大概……吧」,或用来征求对方认同。",
  points: [
    {
      id: "e19-1",
      titleEn: "Volitional form (意向形): “let's / I shall”",
      titleZh: "意向形:「一起……吧 / 我要……」",
      bodyEn:
        "The volitional form expresses a suggestion (“let's …”) or the speaker's own will (“I think I'll …”). The polite version is `ます形` minus `ます` plus `ましょう` (e.g. 行きます → 行きましょう). The plain version, the 意向形, is built differently per verb group:\n\n- **Godan**: change the final `-u` sound to its `-o` row + long `う`: 行く → 行こう, 飲む → 飲もう.\n- **Ichidan**: drop `る`, add `よう`: 食べる → 食べよう.\n- **Irregular**: する → しよう, 来る → 来よう.\n\nPlain volitional is casual and is also used for inner monologue (“I think I'll go”).",
      bodyZh:
        "意向形用来表示提议(「一起……吧」)或说话人自己的意志(「我想……」)。礼貌说法是 `ます形` 去掉 `ます` 再加 `ましょう`(如 行きます → 行きましょう)。普通体的意向形按动词类型变化:\n\n- **五段动词**:把词尾的 `-u` 音改成同行的 `-o` 音再加长音 `う`:行く → 行こう,飲む → 飲もう。\n- **一段动词**:去 `る` 加 `よう`:食べる → 食べよう。\n- **不规则动词**:する → しよう,来る → 来よう。\n\n普通体意向形较随意,也用于自言自语(「我看我去吧」)。",
      examples: [
        {
          jp: "一緒に行きましょう",
          reading: "いっしょにいきましょう",
          en: "Let's go together.",
          zh: "一起去吧。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 行く = GodanVerb & { stem: "行"; ending: "く" };

// ます形 of 行く is 行き; append ましょう for the polite volitional
type 一緒に行きましょう = \`一緒に\${ConjugateVerb<行く, "ます形">}ましょう\`;
`,
        },
        {
          jp: "コーヒーを飲もう",
          reading: "コーヒーをのもう",
          en: "I think I'll have some coffee.",
          zh: "喝杯咖啡吧。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 意向形 of 飲む returns 飲も; append う → 飲もう
type コーヒーを飲もう = \`コーヒーを\${ConjugateVerb<飲む, "意向形">}う\`;
`,
        },
        {
          jp: "明日また来よう",
          reading: "あしたまたこよう",
          en: "Let's come again tomorrow.",
          zh: "明天再来吧。",
          code: `import type { IrregularVerb, ConjugateVerb } from "typed-japanese";

type 来る = IrregularVerb & { dictionary: "来る" };

// 意向形 of 来る is already complete: 来よう
type 明日また来よう = \`明日また\${ConjugateVerb<来る, "意向形">}\`;
`,
        },
      ],
    },
    {
      id: "e19-2",
      titleEn: "〜つもり: “intend to / plan to”",
      titleZh: "〜つもり:「打算 / 计划」",
      bodyEn:
        "`Verb(dictionary form) + つもりです` states a firm intention or plan: “I intend to …”. It is stronger and more deliberate than the volitional; the decision has already been made.\n\nTo say you intend *not* to do something, use the `ない形`: 行かない + つもり = “I intend not to go”. Replace `です` with `だ` for casual speech.",
      bodyZh:
        "`动词(辞书形) + つもりです` 表示坚定的打算或计划:「我打算……」。它比意向形更慎重,表示决定已经做出。\n\n要表达「打算不做某事」,用 `ない形`:行かない + つもり =「我打算不去」。口语里把 `です` 换成 `だ`。",
      examples: [
        {
          jp: "日本へ行くつもりです",
          reading: "にほんへいくつもりです",
          en: "I intend to go to Japan.",
          zh: "我打算去日本。",
          code: `import type { GodanVerb, ConjugateVerb, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 日本 = ProperNoun<"日本">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 日本 + へ + 行く(辞書形) + つもりです
type 日本へ行くつもりです = \`\${PhraseWithParticle<日本, "へ">}\${ConjugateVerb<行く, "辞書形">}つもりです\`;
`,
        },
        {
          jp: "毎日勉強するつもりです",
          reading: "まいにちべんきょうするつもりです",
          en: "I intend to study every day.",
          zh: "我打算每天学习。",
          code: `import type { IrregularVerb, ConjugateVerb } from "typed-japanese";

type する = IrregularVerb & { dictionary: "する" };

// 辞書形 of する is する; add つもりです
type 毎日勉強するつもりです = \`毎日勉強\${ConjugateVerb<する, "辞書形">}つもりです\`;
`,
        },
        {
          jp: "今日は飲まないつもりです",
          reading: "きょうはのまないつもりです",
          en: "I intend not to drink today.",
          zh: "我今天打算不喝酒。",
          code: `import type { GodanVerb, ConjugateVerb, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 今日 = ProperNoun<"今日">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// ない形 of 飲む returns 飲ま; append ない, then つもりです
type 今日は飲まないつもりです = \`\${PhraseWithParticle<今日, "は">}\${ConjugateVerb<飲む, "ない形">}ないつもりです\`;
`,
        },
      ],
    },
    {
      id: "e19-3",
      titleEn: "〜でしょう: “probably / right?”",
      titleZh: "〜でしょう:「大概……吧 / 对吧?」",
      bodyEn:
        "`でしょう` is the tentative form of `です`. Placed after a noun, adjective, or plain verb, it means “probably …” or “… I suppose”. It expresses a guess rather than a fact.\n\nSaid with rising intonation it instead seeks agreement, like English “…, right?”. The casual form is `だろう`.",
      bodyZh:
        "`でしょう` 是 `です` 的推量形式。放在名词、形容词或动词普通形之后,表示「大概……吧」「我想……吧」,表达推测而非断定。\n\n用上升语调说时,则是在征求对方认同,相当于英语的「……,对吧?」。口语形式是 `だろう`。",
      examples: [
        {
          jp: "明日は雨でしょう",
          reading: "あしたはあめでしょう",
          en: "It will probably rain tomorrow.",
          zh: "明天大概会下雨吧。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 明日 = ProperNoun<"明日">;
type 雨 = ProperNoun<"雨">;

// 明日 + は + 雨 + でしょう
type 明日は雨でしょう = \`\${PhraseWithParticle<明日, "は">}\${雨}でしょう\`;
`,
        },
        {
          jp: "彼は来るでしょう",
          reading: "かれはくるでしょう",
          en: "He will probably come.",
          zh: "他大概会来吧。",
          code: `import type { IrregularVerb, ConjugateVerb, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 来る = IrregularVerb & { dictionary: "来る" };

// 彼 + は + 来る(辞書形) + でしょう
type 彼は来るでしょう = \`\${PhraseWithParticle<彼, "は">}\${ConjugateVerb<来る, "辞書形">}でしょう\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
