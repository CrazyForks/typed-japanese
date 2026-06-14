import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i04",
  level: "intermediate",
  order: 4,
  titleEn: "Respectful language 尊敬語",
  titleZh: "尊敬语",
  summaryEn:
    "Respectful language (尊敬語) raises up the person you are talking *about* — typically a customer, a superior, or anyone you wish to honor. This chapter covers the three main ways to make a verb respectful: the productive pattern お〜になる, the honorific use of the 〜（ら）れる form, and a handful of special replacement verbs such as いらっしゃる.",
  summaryZh:
    "尊敬语(尊敬語)用来抬高所谈论对象的地位 —— 通常是客人、上司,或任何你想表示敬意的人。本章介绍把动词变成尊敬语的三种主要方式:能产的句型 お〜になる、〜（ら）れる 形的尊敬用法,以及若干特殊替换动词,例如 いらっしゃる。",
  points: [
    {
      id: "i04-1",
      titleEn: "お + ます-stem + になる",
      titleZh: "お + ます形词干 + になる",
      bodyEn:
        "The most productive respectful pattern is `お` + the verb's `ます`-stem + `になる`. For example `読む` → ます-stem `読み` → `お読みになる` (“to read”, honorific). Conjugate `なる` normally at the end: `お読みになります`, `お読みになりました`.\n\nThis pattern works with most native Godan and Ichidan verbs. It does **not** combine with the special verbs in the last section (you use those replacements instead).",
      bodyZh:
        "最能产的尊敬句型是 `お` + 动词的 `ます` 形词干 + `になる`。例如 `読む` → ます形词干 `読み` → `お読みになる`(尊敬体的「读」)。句末照常活用 `なる`:`お読みになります`、`お読みになりました`。\n\n该句型适用于大多数固有的五段、一段动词。它**不能**与最后一节的特殊动词搭配(那些情况要用替换动词)。",
      examples: [
        {
          jp: "先生は本をお読みになります",
          reading: "せんせいはほんをおよみになります",
          en: "The teacher reads a book. (respectful)",
          zh: "老师在读书。(尊敬)",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 先生 = ProperNoun<"先生">;
type 本 = ProperNoun<"本">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };

// 読む ます形 → "読み";  お + 読み + になります
type 先生は本をお読みになります = \`\${PhraseWithParticle<先生, "は">}\${PhraseWithParticle<本, "を">}お\${ConjugateVerb<読む, "ます形">}になります\`;
`,
        },
        {
          jp: "社長はもうお帰りになりました",
          reading: "しゃちょうはもうおかえりになりました",
          en: "The company president has already gone home. (respectful)",
          zh: "社长已经回去了。(尊敬)",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 社長 = ProperNoun<"社長">;
type 帰る = GodanVerb & { stem: "帰"; ending: "る" };

// 帰る ます形 → "帰り";  お + 帰り + になりました
type 社長はもうお帰りになりました = \`\${PhraseWithParticle<社長, "は">}もうお\${ConjugateVerb<帰る, "ます形">}になりました\`;
`,
        },
      ],
    },
    {
      id: "i04-2",
      titleEn: "〜（ら）れる as an honorific",
      titleZh: "〜（ら）れる 的尊敬用法",
      bodyEn:
        "The same `（ら）れる` form used for the passive doubles as a lighter, easier respectful form. For Godan verbs it is identical to the passive: `書く` → `書かれる`, `飲む` → `飲まれる`. For Ichidan verbs it is `〜られる`.\n\nIt is less formal than `お〜になる` and very common in business speech because it attaches to almost any verb. Context (and politeness markers like `ます`) tells you it is honorific, not passive.",
      bodyZh:
        "与被动同形的 `（ら）れる` 同时也是一种较轻、较省力的尊敬形。五段动词与被动完全相同:`書く` → `書かれる`、`飲む` → `飲まれる`。一段动词为 `〜られる`。\n\n它比 `お〜になる` 随意一些,在商务场合非常常见,因为几乎可以接在任何动词后面。靠语境(以及 `ます` 等礼貌标记)来判断它是尊敬而非被动。",
      examples: [
        {
          jp: "部長は新聞を読まれます",
          reading: "ぶちょうはしんぶんをよまれます",
          en: "The department head reads the newspaper. (respectful)",
          zh: "部长在看报纸。(尊敬)",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 部長 = ProperNoun<"部長">;
type 新聞 = ProperNoun<"新聞">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };

// 読む 受身形 → "読ま";  読ま + れます
type 部長は新聞を読まれます = \`\${PhraseWithParticle<部長, "は">}\${PhraseWithParticle<新聞, "を">}\${ConjugateVerb<読む, "受身形">}れます\`;
`,
        },
        {
          jp: "先生はいつ書かれましたか",
          reading: "せんせいはいつかかれましたか",
          en: "When did the teacher write it? (respectful)",
          zh: "老师是什么时候写的?(尊敬)",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 先生 = ProperNoun<"先生">;
type 書く = GodanVerb & { stem: "書"; ending: "く" };

// 書く 受身形 → "書か";  書か + れましたか
type 先生はいつ書かれましたか = \`\${PhraseWithParticle<先生, "は">}いつ\${ConjugateVerb<書く, "受身形">}れましたか\`;
`,
        },
      ],
    },
    {
      id: "i04-3",
      titleEn: "Special respectful verbs: いらっしゃる",
      titleZh: "特殊尊敬动词:いらっしゃる",
      bodyEn:
        "Some everyday verbs have dedicated respectful replacements rather than using a pattern. The most important is `いらっしゃる`, which covers `いる` (to be/exist), `来る` (to come) and `行く` (to go) all at once. Its polite form is the irregular `いらっしゃいます`.\n\nOther common pairs: `言う` → `おっしゃる` (おっしゃいます), `する` → `なさる` (なさいます), `食べる`/`飲む` → `召し上がる` (召し上がります). These all take the irregular `〜います` ending in polite form.",
      bodyZh:
        "有些日常动词不用句型,而是有专门的尊敬替换词。最重要的是 `いらっしゃる`,它一并覆盖 `いる`(在/存在)、`来る`(来)和 `行く`(去)。其礼貌形是不规则的 `いらっしゃいます`。\n\n其他常见对应:`言う` → `おっしゃる`(おっしゃいます)、`する` → `なさる`(なさいます)、`食べる`/`飲む` → `召し上がる`(召し上がります)。这些在礼貌形时都采用不规则的 `〜います` 结尾。",
      examples: [
        {
          jp: "先生は教室にいらっしゃいます",
          reading: "せんせいはきょうしつにいらっしゃいます",
          en: "The teacher is in the classroom. (respectful)",
          zh: "老师在教室里。(尊敬)",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 先生 = ProperNoun<"先生">;
type 教室 = ProperNoun<"教室">;

// いらっしゃいます is the irregular honorific polite form of いる/来る/行く
type 先生は教室にいらっしゃいます = \`\${PhraseWithParticle<先生, "は">}\${PhraseWithParticle<教室, "に">}いらっしゃいます\`;
`,
        },
        {
          jp: "社長は何とおっしゃいましたか",
          reading: "しゃちょうはなんとおっしゃいましたか",
          en: "What did the president say? (respectful)",
          zh: "社长说了什么?(尊敬)",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 社長 = ProperNoun<"社長">;
type 何 = ProperNoun<"何">;

// おっしゃいました is the irregular honorific past polite form of 言う
type 社長は何とおっしゃいましたか = \`\${PhraseWithParticle<社長, "は">}\${PhraseWithParticle<何, "と">}おっしゃいましたか\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
