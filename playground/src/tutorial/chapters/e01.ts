import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e01",
  level: "elementary",
  order: 1,
  titleEn: "Noun sentences: です / だ",
  titleZh: "名词谓语句：です / だ",
  summaryEn:
    "The most basic Japanese sentence states what something is: “A は B です” (A is B). You'll meet the topic particle は and the polite copula です, plus how to make such sentences negative and into questions.",
  summaryZh:
    "最基础的日语句子用来陈述「某物是什么」：「A は B です」(A 是 B)。本章介绍提示主题的助词 は、礼貌体系动词 です，以及如何把这种句子变成否定和疑问。",
  points: [
    {
      id: "e01-1",
      titleEn: "A は B です — “A is B”",
      titleZh: "A は B です ——「A 是 B」",
      bodyEn:
        "A Japanese noun sentence has the shape `Topic は Noun です`. The particle `は` (pronounced *wa*) marks the topic — what the sentence is about — and `です` is the polite copula, roughly “is/am/are”.\n\nThere is no verb “to be” conjugating for person or number; `です` simply follows the noun. Word order is fixed: the predicate noun and `です` come at the end.",
      bodyZh:
        "日语的名词句结构是「主题 は 名词 です」。助词 `は`(读作 *wa*)用来提示主题 —— 即句子谈论的对象;`です` 是礼貌体的系动词,相当于「是」。\n\n日语没有随人称、单复数变化的「be 动词」,`です` 直接跟在名词后面即可。语序固定:作谓语的名词和 `です` 位于句末。",
      examples: [
        {
          jp: "私は学生です",
          reading: "わたしはがくせいです",
          en: "I am a student.",
          zh: "我是学生。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 学生 = ProperNoun<"学生">;

// 私 + は (topic) + 学生 + です
type 私は学生です = \`\${PhraseWithParticle<私, "は">}\${学生}です\`;
`,
        },
        {
          jp: "田中さんは先生です",
          reading: "たなかさんはせんせいです",
          en: "Mr. Tanaka is a teacher.",
          zh: "田中先生是老师。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 田中さん = ProperNoun<"田中さん">;
type 先生 = ProperNoun<"先生">;

type 田中さんは先生です = \`\${PhraseWithParticle<田中さん, "は">}\${先生}です\`;
`,
        },
      ],
    },
    {
      id: "e01-2",
      titleEn: "Negation: では ありません",
      titleZh: "否定：では ありません",
      bodyEn:
        "To say “A is not B”, replace `です` with `ではありません` (formal) — in casual speech this becomes `じゃない`. The structure is otherwise identical: `Topic は Noun ではありません`.",
      bodyZh:
        "要表达「A 不是 B」,把 `です` 换成 `ではありません`(郑重)—— 口语里会说成 `じゃない`。其余结构不变:「主题 は 名词 ではありません」。",
      examples: [
        {
          jp: "私は医者ではありません",
          reading: "わたしはいしゃではありません",
          en: "I am not a doctor.",
          zh: "我不是医生。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 医者 = ProperNoun<"医者">;

type 私は医者ではありません = \`\${PhraseWithParticle<私, "は">}\${医者}ではありません\`;
`,
        },
      ],
    },
    {
      id: "e01-3",
      titleEn: "Questions: …か",
      titleZh: "疑问：…か",
      bodyEn:
        "Japanese forms yes/no questions by adding the particle `か` to the end of a statement — no change in word order, no rising punctuation required. `Topic は Noun ですか` asks “Is the topic B?”.",
      bodyZh:
        "日语通过在陈述句末尾加助词 `か` 来构成是非疑问句 —— 语序不变,也不需要问号。「主题 は 名词 ですか」即在问「主题是 B 吗?」。",
      examples: [
        {
          jp: "あなたは学生ですか",
          reading: "あなたはがくせいですか",
          en: "Are you a student?",
          zh: "你是学生吗?",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type あなた = ProperNoun<"あなた">;
type 学生 = ProperNoun<"学生">;

type あなたは学生ですか = \`\${PhraseWithParticle<あなた, "は">}\${学生}ですか\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
