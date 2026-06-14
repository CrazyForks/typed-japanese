import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e02",
  level: "elementary",
  order: 2,
  titleEn: "Demonstratives & の",
  titleZh: "指示词与の",
  summaryEn:
    "Japanese points at things with a tidy こ/そ/あ system. Standing alone, これ/それ/あれ mean “this/that one”; before a noun, この/その/あの pick out a specific thing. This chapter also introduces the linking particle の, which joins two nouns as in possession (AのB, “A's B”).",
  summaryZh:
    "日语用整齐的 こ/そ/あ 体系来指示事物。单独使用时,これ/それ/あれ 表示「这个/那个」;放在名词前,この/その/あの 用来限定具体的事物。本章还会介绍连接助词 の,它把两个名词连在一起,表示所属关系(AのB,「A 的 B」)。",
  points: [
    {
      id: "e02-1",
      titleEn: "これ・それ・あれ — “this one / that one”",
      titleZh: "これ・それ・あれ ——「这个 / 那个」",
      bodyEn:
        "These three pronouns refer to a thing without naming it. `これ` (*kore*) is near the speaker — “this one”; `それ` (*sore*) is near the listener — “that one (by you)”; `あれ` (*are*) is far from both — “that one over there”.\n\nThey behave like nouns, so they slot straight into the `A は B です` pattern from chapter 1. The choice between これ／それ／あれ is about physical or psychological distance, not about which is “correct”.",
      bodyZh:
        "这三个代词在不说出名称的情况下指代某物。`これ`(*kore*)离说话人近 ——「这个」;`それ`(*sore*)离听话人近 ——「(你那边的)那个」;`あれ`(*are*)离双方都远 ——「(那边的)那个」。\n\n它们的用法和名词一样,可以直接套用第一章的「A は B です」句型。选用 これ／それ／あれ 取决于物理或心理上的距离,而不存在哪个「更正确」的问题。",
      examples: [
        {
          jp: "これは本です",
          reading: "これはほんです",
          en: "This is a book.",
          zh: "这是书。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type これ = ProperNoun<"これ">;
type 本 = ProperNoun<"本">;

// これ + は (topic) + 本 + です
type これは本です = \`\${PhraseWithParticle<これ, "は">}\${本}です\`;
`,
        },
        {
          jp: "それは私のかばんです",
          reading: "それはわたしのかばんです",
          en: "That (by you) is my bag.",
          zh: "那(你那边的)是我的包。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type それ = ProperNoun<"それ">;
type 私 = ProperNoun<"私">;
type かばん = ProperNoun<"かばん">;

// それ + は + 私 + の + かばん + です
type それは私のかばんです = \`\${PhraseWithParticle<それ, "は">}\${PhraseWithParticle<私, "の">}\${かばん}です\`;
`,
        },
        {
          jp: "あれは何ですか",
          reading: "あれはなんですか",
          en: "What is that over there?",
          zh: "那边的那个是什么?",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type あれ = ProperNoun<"あれ">;
type 何 = ProperNoun<"何">;

// あれ + は + 何 + ですか
type あれは何ですか = \`\${PhraseWithParticle<あれ, "は">}\${何}ですか\`;
`,
        },
      ],
    },
    {
      id: "e02-2",
      titleEn: "この・その・あの + noun",
      titleZh: "この・その・あの + 名词",
      bodyEn:
        "When you want to say “this book” rather than just “this one”, use the adjectival forms `この`・`その`・`あの` directly before a noun. The distance meanings are identical to これ／それ／あれ — only the grammar differs: これ stands alone, この must attach to a noun.\n\nA useful contrast: `これは本です` = “this is a book”, but `この本は…` = “this book is…”. Use the noun-modifying form whenever you keep talking about the noun itself.",
      bodyZh:
        "当你想说「这本书」而不只是「这个」时,要用连体形式 `この`・`その`・`あの` 直接放在名词前面。距离含义和 これ／それ／あれ 完全相同,只是语法不同:これ 可以单独使用,而 この 必须接在名词前。\n\n一个有用的对比:`これは本です` =「这是书」,而 `この本は…` =「这本书……」。当你要继续谈论这个名词本身时,就使用连体形式。",
      examples: [
        {
          jp: "この本は面白いです",
          reading: "このほんはおもしろいです",
          en: "This book is interesting.",
          zh: "这本书很有趣。",
          code: `import type { ProperNoun, IAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 本 = ProperNoun<"本">;
type 面白い = IAdjective & { stem: "面白"; ending: "い" };

// この + 本 + は + 面白い + です
type この本は面白いです = \`この\${PhraseWithParticle<本, "は">}\${ConjugateAdjective<面白い, "基本形">}です\`;
`,
        },
        {
          jp: "その人は田中さんです",
          reading: "そのひとはたなかさんです",
          en: "That person is Mr. Tanaka.",
          zh: "那个人是田中先生。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 人 = ProperNoun<"人">;
type 田中さん = ProperNoun<"田中さん">;

// その + 人 + は + 田中さん + です
type その人は田中さんです = \`その\${PhraseWithParticle<人, "は">}\${田中さん}です\`;
`,
        },
        {
          jp: "あの店は新しいです",
          reading: "あのみせはあたらしいです",
          en: "That shop over there is new.",
          zh: "那边那家店是新的。",
          code: `import type { ProperNoun, IAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 店 = ProperNoun<"店">;
type 新しい = IAdjective & { stem: "新し"; ending: "い" };

// あの + 店 + は + 新しい + です
type あの店は新しいです = \`あの\${PhraseWithParticle<店, "は">}\${ConjugateAdjective<新しい, "基本形">}です\`;
`,
        },
      ],
    },
    {
      id: "e02-3",
      titleEn: "Possessive の — AのB (“A's B”)",
      titleZh: "所属的 の —— AのB(「A 的 B」)",
      bodyEn:
        "The particle `の` links two nouns: `A の B` means “B of A” / “A's B”. The modifier comes first, so the order matches English possession reversed: `私の本` = “my book”, `日本の車` = “a Japanese car”.\n\n`の` covers more than ownership — it expresses origin, type, and belonging too (`大学の先生` = “a university teacher”). You can also chain it: `私の友達の本` = “my friend's book”.",
      bodyZh:
        "助词 `の` 连接两个名词:`A の B` 意思是「A 的 B」。修饰语在前,所以语序正好和英语的所有格相反:`私の本` =「我的书」,`日本の車` =「日本(产)的车」。\n\n`の` 不只表示所有,还能表示来源、种类和归属(`大学の先生` =「大学的老师」)。它也可以连用:`私の友達の本` =「我朋友的书」。",
      examples: [
        {
          jp: "これは私の傘です",
          reading: "これはわたしのかさです",
          en: "This is my umbrella.",
          zh: "这是我的伞。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type これ = ProperNoun<"これ">;
type 私 = ProperNoun<"私">;
type 傘 = ProperNoun<"傘">;

// これ + は + 私 + の + 傘 + です
type これは私の傘です = \`\${PhraseWithParticle<これ, "は">}\${PhraseWithParticle<私, "の">}\${傘}です\`;
`,
        },
        {
          jp: "田中さんの車は赤いです",
          reading: "たなかさんのくるまはあかいです",
          en: "Mr. Tanaka's car is red.",
          zh: "田中先生的车是红的。",
          code: `import type { ProperNoun, IAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 田中さん = ProperNoun<"田中さん">;
type 車 = ProperNoun<"車">;
type 赤い = IAdjective & { stem: "赤"; ending: "い" };

// 田中さん + の + 車 + は + 赤い + です
type 田中さんの車は赤いです = \`\${PhraseWithParticle<田中さん, "の">}\${PhraseWithParticle<車, "は">}\${ConjugateAdjective<赤い, "基本形">}です\`;
`,
        },
        {
          jp: "あれは日本の車です",
          reading: "あれはにほんのくるまです",
          en: "That over there is a Japanese car.",
          zh: "那边那辆是日本(产)的车。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type あれ = ProperNoun<"あれ">;
type 日本 = ProperNoun<"日本">;
type 車 = ProperNoun<"車">;

// あれ + は + 日本 + の + 車 + です
type あれは日本の車です = \`\${PhraseWithParticle<あれ, "は">}\${PhraseWithParticle<日本, "の">}\${車}です\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
