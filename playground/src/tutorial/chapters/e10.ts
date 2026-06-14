import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e10",
  level: "elementary",
  order: 10,
  titleEn: "て-form & requests",
  titleZh: "て形与请求",
  summaryEn:
    "The て-form (て形) is one of the most useful conjugations in Japanese: it links actions together and powers many grammar patterns. This chapter covers how to build the て-form, how to make polite requests with 〜てください (“please do …”), and how to say “after doing …” with 〜てから.",
  summaryZh:
    "て形是日语中最有用的活用形之一:它能把动作连接起来,并支撑大量语法结构。本章介绍如何构成て形、如何用「〜てください」表达礼貌的请求(「请……」),以及如何用「〜てから」表达「做完……之后」。",
  points: [
    {
      id: "e10-1",
      titleEn: "Forming the て-form",
      titleZh: "て形的构成",
      bodyEn:
        "The て-form has no tense or politeness of its own — it is a connecting form. How you build it depends on the verb group.\n\n**Ichidan (る-verbs):** drop る, add て — `食べる → 食べて`.\n\n**Irregular:** `する → して`, `来る → 来て`.\n\n**Godan (う-verbs):** the ending changes by sound. `く → いて` (書く→書いて), `ぐ → いで`, `む・ぶ・ぬ → んで` (飲む→飲んで, 読む→読んで), `う・つ・る → って` (待つ→待って). Note the one exception 行く → 行って.",
      bodyZh:
        "て形本身没有时态和敬体之分 —— 它是一种连接形式。构成方式取决于动词的类别。\n\n**一段动词(る动词):** 去る加て —— `食べる → 食べて`。\n\n**不规则动词:** `する → して`,`来る → 来て`。\n\n**五段动词(う动词):** 词尾按读音变化。`く → いて`(書く→書いて)、`ぐ → いで`、`む・ぶ・ぬ → んで`(飲む→飲んで、読む→読んで)、`う・つ・る → って`(待つ→待って)。注意唯一的例外:行く → 行って。",
      examples: [
        {
          jp: "食べて",
          reading: "たべて",
          en: "eating / and eat (て-form of 食べる)",
          zh: "吃(食べる 的て形)",
          code: `import type { IchidanVerb, ConjugateVerb } from "typed-japanese";

type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// ichidan: drop る, add て
type 食べて = ConjugateVerb<食べる, "て形">;
`,
        },
        {
          jp: "飲んで",
          reading: "のんで",
          en: "drinking / and drink (て-form of 飲む)",
          zh: "喝(飲む 的て形)",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// godan む → んで
type 飲んで = ConjugateVerb<飲む, "て形">;
`,
        },
        {
          jp: "書いて",
          reading: "かいて",
          en: "writing / and write (て-form of 書く)",
          zh: "写(書く 的て形)",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 書く = GodanVerb & { stem: "書"; ending: "く" };

// godan く → いて
type 書いて = ConjugateVerb<書く, "て形">;
`,
        },
      ],
    },
    {
      id: "e10-2",
      titleEn: "〜てください — “please do …”",
      titleZh: "〜てください ——「请……」",
      bodyEn:
        "Add `ください` to a verb's て-form to make a polite request or instruction: “please do …”. The pattern is `[て-form] + ください`.\n\nMark the object with `を` as usual: `本を読んでください` = “Please read the book.” It is polite enough for everyday use, though for very formal asking you would soften it further.",
      bodyZh:
        "在动词的て形后面加上 `ください`,即可构成礼貌的请求或指示:「请……」。结构是「[て形] + ください」。\n\n宾语照常用 `を` 标记:`本を読んでください` =「请读这本书」。它在日常场合已足够礼貌,不过非常郑重的请求还会用更委婉的说法。",
      examples: [
        {
          jp: "本を読んでください",
          reading: "ほんをよんでください",
          en: "Please read the book.",
          zh: "请读这本书。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 本 = ProperNoun<"本">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };

// 本 + を + [読む て形] + ください
type 本を読んでください = \`\${PhraseWithParticle<本, "を">}\${ConjugateVerb<読む, "て形">}ください\`;
`,
        },
        {
          jp: "ここで待ってください",
          reading: "ここでまってください",
          en: "Please wait here.",
          zh: "请在这里等。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type ここ = ProperNoun<"ここ">;
type 待つ = GodanVerb & { stem: "待"; ending: "つ" };

// ここ + で + [待つ て形] + ください
type ここで待ってください = \`\${PhraseWithParticle<ここ, "で">}\${ConjugateVerb<待つ, "て形">}ください\`;
`,
        },
      ],
    },
    {
      id: "e10-3",
      titleEn: "〜てから — “after doing …”",
      titleZh: "〜てから ——「做完……之后」",
      bodyEn:
        "`[て-form] + から` means “after doing …”, emphasizing that one action is completed before the next begins. The whole `〜てから` clause comes first, then the main action.\n\nFor example `ご飯を食べてから、勉強します` = “After eating, I'll study.” Note that here `から` follows a て-form (sequence “after”), which is different from the `から` that attaches to a noun to mean “from”.",
      bodyZh:
        "「[て形] + から」表示「做完……之后」,强调一个动作完成后,下一个动作才开始。整个「〜てから」从句在前,主要动作在后。\n\n例如 `ご飯を食べてから、勉強します` =「吃完饭之后,我学习」。注意这里的 `から` 接在て形后(表示先后的「之后」),与接在名词后表示「从」的 `から` 不同。",
      examples: [
        {
          jp: "ご飯を食べてから、勉強します",
          reading: "ごはんをたべてから、べんきょうします",
          en: "After eating, I will study.",
          zh: "吃完饭之后,我学习。",
          code: `import type { ProperNoun, IchidanVerb, IrregularVerb, ConjugateVerb, PhraseWithParticle, ConnectedPhrases } from "typed-japanese";

type ご飯 = ProperNoun<"ご飯">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };
type する = IrregularVerb & { dictionary: "する" };

// ご飯を + [食べる て形] + から
type ご飯を食べてから = \`\${PhraseWithParticle<ご飯, "を">}\${ConjugateVerb<食べる, "て形">}から\`;
// 勉強 + [する ます形] + ます
type 勉強します = \`勉強\${ConjugateVerb<する, "ます形">}ます\`;

type ご飯を食べてから勉強します = ConnectedPhrases<ご飯を食べてから, 勉強します>;
`,
        },
        {
          jp: "手を洗ってから、食べます",
          reading: "てをあらってから、たべます",
          en: "After washing my hands, I eat.",
          zh: "洗完手之后,我吃饭。",
          code: `import type { ProperNoun, GodanVerb, IchidanVerb, ConjugateVerb, PhraseWithParticle, ConnectedPhrases } from "typed-japanese";

type 手 = ProperNoun<"手">;
type 洗う = GodanVerb & { stem: "洗"; ending: "う" };
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// 手を + [洗う て形] + から
type 手を洗ってから = \`\${PhraseWithParticle<手, "を">}\${ConjugateVerb<洗う, "て形">}から\`;
// [食べる ます形] + ます
type 食べます = \`\${ConjugateVerb<食べる, "ます形">}ます\`;

type 手を洗ってから食べます = ConnectedPhrases<手を洗ってから, 食べます>;
`,
        },
      ],
    },
  ],
};

export default chapter;
