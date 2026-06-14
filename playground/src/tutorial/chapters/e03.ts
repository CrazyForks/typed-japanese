import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e03",
  level: "elementary",
  order: 3,
  titleEn: "Existence: あります / います, location に",
  titleZh: "存在句：あります／います，场所に",
  summaryEn:
    "This chapter is about saying what exists and where. You'll learn the location words `ここ / そこ / あそこ` (here / there / over there), the two verbs of existence — `あります` for non-living things and `います` for living things — and the pattern `Place に Thing があります` for placing something at a location.",
  summaryZh:
    "本章讲「在哪里有什么」。你将学到表示场所的指示词 `ここ / そこ / あそこ`(这里／那里／那边),两个表示存在的动词 ——「无生命物用 `あります`,有生命物用 `います`」—— 以及句型「场所 に 事物 があります」,用来表达某地有某物。",
  points: [
    {
      id: "e03-1",
      titleEn: "ここ / そこ / あそこ — here, there, over there",
      titleZh: "ここ / そこ / あそこ ——这里、那里、那边",
      bodyEn:
        "Japanese has a three-way set of place words based on distance from the speaker and listener. `ここ` is *here* (near the speaker), `そこ` is *there* (near the listener), and `あそこ` is *over there* (far from both). They are nouns, so they take particles just like any other noun — for example the topic particle `は`.\n\nA simple way to point something out is `ここ は Noun です` — “this place is …”.",
      bodyZh:
        "日语有一组按「离说话人／听话人远近」区分的场所词。`ここ` 表示离说话人近的「这里」,`そこ` 表示离听话人近的「那里」,`あそこ` 表示离双方都远的「那边」。它们是名词,因此和其他名词一样可以接助词,例如提示主题的 `は`。\n\n最简单的用法是「ここ は 名词 です」——「这里是……」。",
      examples: [
        {
          jp: "ここは図書館です",
          reading: "ここはとしょかんです",
          en: "This place is a library.",
          zh: "这里是图书馆。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type ここ = ProperNoun<"ここ">;
type 図書館 = ProperNoun<"図書館">;

// ここ + は (topic) + 図書館 + です
type ここは図書館です = \`\${PhraseWithParticle<ここ, "は">}\${図書館}です\`;
`,
        },
        {
          jp: "あそこは駅です",
          reading: "あそこはえきです",
          en: "Over there is the station.",
          zh: "那边是车站。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type あそこ = ProperNoun<"あそこ">;
type 駅 = ProperNoun<"駅">;

type あそこは駅です = \`\${PhraseWithParticle<あそこ, "は">}\${駅}です\`;
`,
        },
      ],
    },
    {
      id: "e03-2",
      titleEn: "あります (things) / います (people & animals)",
      titleZh: "あります(物)/ います(人和动物)",
      bodyEn:
        "Japanese uses two different verbs for “there is / there exists”. `あります` is for inanimate things — books, buildings, money — anything that doesn't move on its own. `います` is for animate beings — people and animals.\n\nThe thing that exists is marked with the subject particle `が`: `Noun があります` / `Noun がいます`. Both verbs are already in polite (ます) form here.",
      bodyZh:
        "日语用两个不同的动词表示「有、存在」。`あります` 用于无生命的事物 —— 书、建筑、钱等不能自己移动的东西。`います` 用于有生命的存在 —— 人和动物。\n\n存在的事物用主语助词 `が` 标记:「名词 があります」/「名词 がいます」。这里两个动词都已经是礼貌体(ます形)。",
      examples: [
        {
          jp: "本があります",
          reading: "ほんがあります",
          en: "There is a book.",
          zh: "有一本书。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 本 = ProperNoun<"本">;
// ある is a godan verb (stem あ, ending る); ます形 → あり, then + ます
type ある = GodanVerb & { stem: "あ"; ending: "る" };

type 本があります = \`\${PhraseWithParticle<本, "が">}\${ConjugateVerb<ある, "ます形">}ます\`;
`,
        },
        {
          jp: "猫がいます",
          reading: "ねこがいます",
          en: "There is a cat.",
          zh: "有一只猫。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 猫 = ProperNoun<"猫">;
// いる is an ichidan verb (stem い, ending る); ます形 → い, then + ます
type いる = IchidanVerb & { stem: "い"; ending: "る" };

type 猫がいます = \`\${PhraseWithParticle<猫, "が">}\${ConjugateVerb<いる, "ます形">}ます\`;
`,
        },
        {
          jp: "学生がいます",
          reading: "がくせいがいます",
          en: "There is a student.",
          zh: "有一名学生。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 学生 = ProperNoun<"学生">;
type いる = IchidanVerb & { stem: "い"; ending: "る" };

type 学生がいます = \`\${PhraseWithParticle<学生, "が">}\${ConjugateVerb<いる, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "e03-3",
      titleEn: "Place に Thing があります — “At PLACE there is THING”",
      titleZh: "场所 に 事物 があります ——「某地有某物」",
      bodyEn:
        "To say where something exists, name the place first, mark it with the location particle `に`, then state the thing with `が` and the existence verb: `Place に Thing があります / がいます`. The particle `に` here means “at / in”.\n\nLocation words combine naturally with this pattern, e.g. `ここ に Noun があります` — “here there is …”. Compound places like 机の上 (“on the desk”) work the same way.",
      bodyZh:
        "要说明某物存在的位置,先说场所,用场所助词 `に` 标记,再用 `が` 引出事物和存在动词:「场所 に 事物 があります / がいます」。这里的 `に` 表示「在……(里/上)」。\n\n场所词可以自然地用于这个句型,例如「ここ に 名词 があります」——「这里有……」。像 机の上(桌子上)这样的复合场所也同样适用。",
      examples: [
        {
          jp: "ここに本があります",
          reading: "ここにほんがあります",
          en: "There is a book here.",
          zh: "这里有一本书。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type ここ = ProperNoun<"ここ">;
type 本 = ProperNoun<"本">;
type ある = GodanVerb & { stem: "あ"; ending: "る" };

// ここ + に (place) + 本 + が + あり + ます
type ここに本があります = \`\${PhraseWithParticle<ここ, "に">}\${PhraseWithParticle<本, "が">}\${ConjugateVerb<ある, "ます形">}ます\`;
`,
        },
        {
          jp: "机の上に猫がいます",
          reading: "つくえのうえにねこがいます",
          en: "There is a cat on the desk.",
          zh: "桌子上有一只猫。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 机の上 = ProperNoun<"机の上">;
type 猫 = ProperNoun<"猫">;
type いる = IchidanVerb & { stem: "い"; ending: "る" };

// 机の上 + に + 猫 + が + い + ます
type 机の上に猫がいます = \`\${PhraseWithParticle<机の上, "に">}\${PhraseWithParticle<猫, "が">}\${ConjugateVerb<いる, "ます形">}ます\`;
`,
        },
        {
          jp: "あそこに駅があります",
          reading: "あそこにえきがあります",
          en: "There is a station over there.",
          zh: "那边有一个车站。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type あそこ = ProperNoun<"あそこ">;
type 駅 = ProperNoun<"駅">;
type ある = GodanVerb & { stem: "あ"; ending: "る" };

type あそこに駅があります = \`\${PhraseWithParticle<あそこ, "に">}\${PhraseWithParticle<駅, "が">}\${ConjugateVerb<ある, "ます形">}ます\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
