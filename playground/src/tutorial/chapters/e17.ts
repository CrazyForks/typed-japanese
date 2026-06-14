import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e17",
  level: "elementary",
  order: 17,
  titleEn: "Obligation",
  titleZh: "义务",
  summaryEn:
    "This chapter is about duty and permission. You'll learn `〜なければならない` (“must / have to”), built on a verb's negative stem, and its opposite `〜なくてもいい` (“don't have to / need not”). Both start from the ない-form, so once you can make a verb negative you already have most of what you need.",
  summaryZh:
    "本章讲「义务」与「许可」。你将学习 `〜なければならない`(「必须/不得不」),它建立在动词的否定词干之上;以及它的反义表达 `〜なくてもいい`(「不必/可以不」)。两者都从 ない 形出发,所以只要会把动词变否定,你就已经掌握了大部分内容。",
  points: [
    {
      id: "e17-1",
      titleEn: "〜なければならない — “must / have to”",
      titleZh: "〜なければならない ——「必须/不得不」",
      bodyEn:
        "To say that you *must* do something, take the verb's ない-form (negative stem) and replace the final `ない` with `なければならない`. Mechanically: from the negative base (e.g. 行か, 起き, し) add `なければならない`.\n\nThe polite ending is `〜なければなりません`. Literally it means “if (you) do not do it, it won't do”, i.e. there is no choice — so it expresses obligation.\n\nForming the base: godan verbs change the last sound to the あ-row (行く→行か), ichidan verbs just drop る (起きる→起き), and する becomes し, 来る becomes 来 (こ).",
      bodyZh:
        "要表达「必须」做某事,把动词变成 ない 形(否定词干),再把结尾的 `ない` 换成 `なければならない`。也就是说:从否定词干(如 行か、起き、し)后面接 `なければならない`。\n\n礼貌体结尾为 `〜なければなりません`。它的字面意思是「如果不做就不行」,即别无选择 —— 因此表示义务。\n\n词干的变化:五段动词把词尾变为 あ 段(行く→行か),一段动词去掉 る(起きる→起き),する 变 し,来る 变 来(こ)。",
      examples: [
        {
          jp: "毎日勉強しなければなりません",
          reading: "まいにちべんきょうしなければなりません",
          en: "I have to study every day.",
          zh: "我必须每天学习。",
          code: `import type { IrregularVerb, ConjugateVerb } from "typed-japanese";

// する → ない形 stem "し"; then + なければなりません
type 勉強する = IrregularVerb & { dictionary: "する" };

type 毎日勉強しなければなりません = \`毎日勉強\${ConjugateVerb<勉強する, "ない形">}なければなりません\`;
`,
        },
        {
          jp: "明日早く起きなければなりません",
          reading: "あしたはやくおきなければなりません",
          en: "I have to get up early tomorrow.",
          zh: "明天我必须早起。",
          code: `import type { IchidanVerb, ConjugateVerb } from "typed-japanese";

// ichidan 起きる → ない形 stem "起き"
type 起きる = IchidanVerb & { stem: "起き"; ending: "る" };

type 明日早く起きなければなりません = \`明日早く\${ConjugateVerb<起きる, "ない形">}なければなりません\`;
`,
        },
        {
          jp: "パスポートを見せなければなりません",
          reading: "パスポートをみせなければなりません",
          en: "You must show your passport.",
          zh: "必须出示护照。",
          code: `import type { IchidanVerb, ConjugateVerb } from "typed-japanese";

type 見せる = IchidanVerb & { stem: "見せ"; ending: "る" };

type パスポートを見せなければなりません = \`パスポートを\${ConjugateVerb<見せる, "ない形">}なければなりません\`;
`,
        },
      ],
    },
    {
      id: "e17-2",
      titleEn: "〜なくてもいい — “don't have to / need not”",
      titleZh: "〜なくてもいい ——「不必/可以不」",
      bodyEn:
        "To say that you *don't have to* do something, take the same ない-form base and add `なくてもいい`. Mechanically: from the negative base (行か, 来 (こ), 急が) add `なくてもいい`.\n\nThe pattern is the negative `〜なくて` (“without doing”) plus `もいい` (“is also fine”) — literally “it's fine even without doing it”, i.e. it isn't required. The polite version simply adds `です`: `〜なくてもいいです`.",
      bodyZh:
        "要表达「不必」做某事,用同样的 ない 形词干,后面接 `なくてもいい`。也就是说:从否定词干(行か、来(こ)、急が)后面接 `なくてもいい`。\n\n这个句型由否定的 `〜なくて`(「不做……而」)加上 `もいい`(「也可以」)构成 —— 字面意思是「即使不做也行」,即并非必须。礼貌体只需再加 `です`:`〜なくてもいいです`。",
      examples: [
        {
          jp: "今日は来なくてもいいです",
          reading: "きょうはこなくてもいいです",
          en: "You don't have to come today.",
          zh: "今天你可以不来。",
          code: `import type { IrregularVerb, ConjugateVerb } from "typed-japanese";

// 来る → ない形 stem "来" (こ); then + なくてもいいです
type 来る = IrregularVerb & { dictionary: "来る" };

type 今日は来なくてもいいです = \`今日は\${ConjugateVerb<来る, "ない形">}なくてもいいです\`;
`,
        },
        {
          jp: "靴を脱がなくてもいいです",
          reading: "くつをぬがなくてもいいです",
          en: "You don't have to take off your shoes.",
          zh: "不必脱鞋。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

// godan 脱ぐ → ない形 stem "脱が"
type 脱ぐ = GodanVerb & { stem: "脱"; ending: "ぐ" };

type 靴を脱がなくてもいいです = \`靴を\${ConjugateVerb<脱ぐ, "ない形">}なくてもいいです\`;
`,
        },
        {
          jp: "急がなくてもいいです",
          reading: "いそがなくてもいいです",
          en: "You don't have to hurry.",
          zh: "不必着急。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 急ぐ = GodanVerb & { stem: "急"; ending: "ぐ" };

type 急がなくてもいいです = \`\${ConjugateVerb<急ぐ, "ない形">}なくてもいいです\`;
`,
        },
      ],
    },
    {
      id: "e17-3",
      titleEn: "Contrasting must and need-not",
      titleZh: "「必须」与「不必」的对比",
      bodyEn:
        "These two patterns are natural opposites and often appear together. `〜なければなりません` closes off the choice (“you must”), while `〜なくてもいいです` opens it up (“you don't have to”). Both branch off the very same ない-form base, so it's worth practicing them side by side with the same verb.",
      bodyZh:
        "这两个句型是天然的反义,常常成对出现。`〜なければなりません` 取消了选择(「必须」),而 `〜なくてもいいです` 给出了余地(「不必」)。两者都从同一个 ない 形词干分出,因此值得用同一个动词并排练习。",
      examples: [
        {
          jp: "学校に行かなくてもいいです",
          reading: "がっこうにいかなくてもいいです",
          en: "You don't have to go to school.",
          zh: "你可以不去学校。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

// godan 行く → ない形 stem "行か"
type 行く = GodanVerb & { stem: "行"; ending: "く" };

type 学校に行かなくてもいいです = \`学校に\${ConjugateVerb<行く, "ない形">}なくてもいいです\`;
`,
        },
        {
          jp: "学校に行かなければなりません",
          reading: "がっこうにいかなければなりません",
          en: "You have to go to school.",
          zh: "你必须去学校。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

// same base 行か, now with the obligation ending
type 行く = GodanVerb & { stem: "行"; ending: "く" };

type 学校に行かなければなりません = \`学校に\${ConjugateVerb<行く, "ない形">}なければなりません\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
