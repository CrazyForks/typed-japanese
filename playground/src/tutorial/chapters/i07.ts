import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i07",
  level: "intermediate",
  order: 7,
  titleEn: "〜ても / 〜のに",
  titleZh: "〜ても／〜のに",
  summaryEn:
    "Two connectives that both deal with the *unexpected*. `〜ても` is concessive — “even if / even though X, Y still holds” — and is open about whether X actually happens. `〜のに` reports that something turned out contrary to expectation — “although X, (surprisingly) Y” — and often carries a note of dissatisfaction or surprise. This chapter contrasts the two so you can pick the right one.",
  summaryZh:
    "两个都与「出乎意料」有关的连接表达。`〜ても` 是让步用法 ——「即使／就算 X,Y 也成立」—— 对 X 是否真的发生持开放态度;`〜のに` 则陈述结果与预期相反 ——「明明 X,却(出乎意料地)Y」—— 常带有不满或惊讶的语气。本章对比二者,帮你选对说法。",
  points: [
    {
      id: "i07-1",
      titleEn: "Verb 〜ても — “even if / even though”",
      titleZh: "动词 〜ても ——「即使／就算」",
      bodyEn:
        "Take the te-form of a verb and add `も`: `〜ても` means “even if X” or “even though X”. The second clause states what holds regardless of X.\n\nIt is *concessive* and hypothesis-friendly: `雨が降っても行きます` (“even if it rains, I'll go”) does not claim it is raining — it says the result is unaffected either way. The te-form is the only part that changes by verb type: `降る`→`降って`, `食べる`→`食べて`, `する`→`して`.",
      bodyZh:
        "取动词的「て形」再加 `も`:`〜ても` 表示「即使 X」或「就算 X」。后一句陈述无论 X 与否都成立的内容。\n\n它是*让步*用法,且适合假设:`雨が降っても行きます`(「就算下雨我也去」)并不断言现在在下雨 —— 而是说无论如何结果都不变。随动词类型变化的只有「て形」:`降る`→`降って`、`食べる`→`食べて`、`する`→`して`。",
      examples: [
        {
          jp: "雨が降っても行きます",
          reading: "あめがふってもいきます",
          en: "Even if it rains, I'll go.",
          zh: "就算下雨我也去。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 降る = GodanVerb & { stem: "降"; ending: "る" };

// 雨が + 降って (te-form) + も + 行きます
type 雨が降っても行きます = \`雨が\${ConjugateVerb<降る, "て形">}も行きます\`;
`,
        },
        {
          jp: "高くても買います",
          reading: "たかくてもかいます",
          en: "Even if it's expensive, I'll buy it.",
          zh: "就算贵我也买。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 買う = GodanVerb & { stem: "買"; ending: "う" };

// 高くて (i-adj te-form, literal) + も + 買います
type 高くても買います = \`高くても\${ConjugateVerb<買う, "ます形">}ます\`;
`,
        },
        {
          jp: "たくさん食べても太りません",
          reading: "たくさんたべてもふとりません",
          en: "Even if I eat a lot, I don't gain weight.",
          zh: "就算吃很多也不会胖。",
          code: `import type { IchidanVerb, ConjugateVerb } from "typed-japanese";

type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// たくさん + 食べて (te-form) + も太りません
type たくさん食べても太りません = \`たくさん\${ConjugateVerb<食べる, "て形">}も太りません\`;
`,
        },
      ],
    },
    {
      id: "i07-2",
      titleEn: "Question-word 〜ても — “no matter …”",
      titleZh: "疑问词 〜ても ——「无论……」",
      bodyEn:
        "Pair `〜ても` with a question word (`誰`, `何`, `いつ`, `どこ`, `いくら`…) to get the “no matter” pattern: `誰が来ても` (“no matter who comes”), `何を食べても` (“no matter what I eat”). The result clause holds across every case.\n\nThis is just `〜ても` with a question word in front; the verb still takes the plain te-form, so the mechanics are identical to the previous point.",
      bodyZh:
        "把 `〜ても` 和疑问词(`誰`、`何`、`いつ`、`どこ`、`いくら`……)搭配,就得到「无论……」句型:`誰が来ても`(「无论谁来」)、`何を食べても`(「无论吃什么」)。后句在每种情况下都成立。\n\n这其实就是在 `〜ても` 前加疑问词;动词仍取普通「て形」,机制与上一节完全相同。",
      examples: [
        {
          jp: "誰が来ても会いません",
          reading: "だれがきてもあいません",
          en: "No matter who comes, I won't see them.",
          zh: "无论谁来我都不见。",
          code: `import type { IrregularVerb, GodanVerb, ConjugateVerb } from "typed-japanese";

type 来る = IrregularVerb & { dictionary: "来る" };
type 会う = GodanVerb & { stem: "会"; ending: "う" };

// 誰が + 来て (te-form) + も + 会いません
type 誰が来ても会いません = \`誰が\${ConjugateVerb<来る, "て形">}も\${ConjugateVerb<会う, "ます形">}ません\`;
`,
        },
        {
          jp: "何を飲んでも眠れません",
          reading: "なにをのんでもねむれません",
          en: "No matter what I drink, I can't sleep.",
          zh: "无论喝什么都睡不着。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 何を + 飲んで (te-form) + も眠れません
type 何を飲んでも眠れません = \`何を\${ConjugateVerb<飲む, "て形">}も眠れません\`;
`,
        },
      ],
    },
    {
      id: "i07-3",
      titleEn: "〜のに — “although / even though (and yet)”",
      titleZh: "〜のに ——「明明……却」",
      bodyEn:
        "`〜のに` connects two clauses where the second is *contrary to what the first leads you to expect*: “although X, (surprisingly) Y”. Unlike `〜ても`, both clauses describe things that are actually true, and the speaker often feels surprise, complaint, or regret.\n\nIt attaches to the plain form. After verbs and i-adjectives, just add `のに` to the plain form (`勉強したのに` “even though I studied”); after nouns and na-adjectives, use `〜なのに` (`元気なのに` “even though (he)'s healthy”).",
      bodyZh:
        "`〜のに` 连接两个分句,后句*与前句让人预期的结果相反*:「明明 X,却(出乎意料地)Y」。与 `〜ても` 不同,两个分句描述的都是真实发生的事,说话人常带有惊讶、抱怨或惋惜的情绪。\n\n它接在普通形之后。动词和い形容词直接在普通形后加 `のに`(`勉強したのに`「明明学习了」);名词和な形容词用 `〜なのに`(`元気なのに`「明明很健康」)。",
      examples: [
        {
          jp: "勉強したのに分かりません",
          reading: "べんきょうしたのにわかりません",
          en: "Even though I studied, I don't understand.",
          zh: "明明学了却不懂。",
          code: `import type { IrregularVerb, GodanVerb, ConjugateVerb } from "typed-japanese";

type 勉強する = IrregularVerb & { dictionary: "する" };
type 分かる = GodanVerb & { stem: "分か"; ending: "る" };

// 勉強 + した (ta-form of する) + のに + 分かりません
type 勉強したのに分かりません = \`勉強\${ConjugateVerb<勉強する, "た形">}のに\${ConjugateVerb<分かる, "ます形">}ません\`;
`,
        },
        {
          jp: "薬を飲んだのに治りません",
          reading: "くすりをのんだのになおりません",
          en: "Even though I took medicine, I'm not getting better.",
          zh: "明明吃了药却没好。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 飲む = GodanVerb & { stem: "飲"; ending: "む" };
type 治る = GodanVerb & { stem: "治"; ending: "る" };

// 薬を + 飲んだ (ta-form) + のに + 治りません
type 薬を飲んだのに治りません = \`薬を\${ConjugateVerb<飲む, "た形">}のに\${ConjugateVerb<治る, "ます形">}ません\`;
`,
        },
        {
          jp: "日曜日なのに働きます",
          reading: "にちようびなのにはたらきます",
          en: "Even though it's Sunday, I work.",
          zh: "明明是星期天却要上班。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 働く = GodanVerb & { stem: "働"; ending: "く" };

// 日曜日 (noun) + なのに + 働きます
type 日曜日なのに働きます = \`日曜日なのに\${ConjugateVerb<働く, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "i07-4",
      titleEn: "〜ても vs 〜のに — choosing the right one",
      titleZh: "〜ても 与 〜のに 的区别",
      bodyEn:
        "Both translate loosely as “even though”, but they are not interchangeable.\n\n`〜ても` is *hypothetical/concessive*: the X clause may or may not happen, and Y holds regardless. `〜のに` is *factual/counter-expectation*: X really happened, yet Y came out against expectation, usually with a tinge of surprise or complaint. Compare `練習しても下手です` (“even if I practice, I'm bad” — practice won't help) with `練習したのに下手です` (“I practiced, and yet I'm still bad” — disappointment about a real result).",
      bodyZh:
        "两者都可大致译作「即使／明明」,但不能互换。\n\n`〜ても` 是*假设／让步*:X 分句可能发生也可能不发生,无论如何 Y 都成立。`〜のに` 是*事实／反预期*:X 确实发生了,Y 却与预期相反,通常带有惊讶或抱怨。比较 `練習しても下手です`(「就算练习我也很差」—— 练了也没用)与 `練習したのに下手です`(「明明练了却还是很差」—— 对真实结果的失望)。",
      examples: [
        {
          jp: "練習しても下手です",
          reading: "れんしゅうしてもへたです",
          en: "Even if I practice, I'm bad at it.",
          zh: "就算练习我也很差。",
          code: `import type { IrregularVerb, ConjugateVerb } from "typed-japanese";

type 練習する = IrregularVerb & { dictionary: "する" };

// 練習 + して (te-form of する) + も下手です
type 練習しても下手です = \`練習\${ConjugateVerb<練習する, "て形">}も下手です\`;
`,
        },
        {
          jp: "練習したのに下手です",
          reading: "れんしゅうしたのにへたです",
          en: "Even though I practiced, I'm still bad at it.",
          zh: "明明练习了却还是很差。",
          code: `import type { IrregularVerb, ConjugateVerb } from "typed-japanese";

type 練習する = IrregularVerb & { dictionary: "する" };

// 練習 + した (ta-form of する) + のに下手です
type 練習したのに下手です = \`練習\${ConjugateVerb<練習する, "た形">}のに下手です\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
