import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i11",
  level: "intermediate",
  order: 11,
  titleEn: "〜ながら / 〜まま / 〜つつ",
  titleZh: "〜ながら／〜まま／〜つつ",
  summaryEn:
    "Three ways to link one state or action to another. `〜ながら` says two actions happen at once (“while doing”); `〜まま` says a state is left unchanged while something else happens (“as is / still in that state”); `〜つつ` is a more written, often contrastive “while / even though”.",
  summaryZh:
    "三种把一个状态或动作连到另一个动作上的方式。`〜ながら` 表示两个动作同时进行(「一边…一边…」);`〜まま` 表示某个状态保持不变地做另一件事(「就那样/保持原状」);`〜つつ` 较书面,常带转折,意为「一边…」或「尽管…」。",
  points: [
    {
      id: "i11-1",
      titleEn: "〜ながら — doing two things at once",
      titleZh: "〜ながら ——「一边…一边…」",
      bodyEn:
        "`〜ながら` attaches to the **ます-stem** of a verb (drop the `ます`) and means two actions are performed by the same person at the same time: `Aながら B` = “do B while doing A”.\n\nThe main action is the second clause (B); the first clause (A) is the accompanying, simultaneous action. For example `食べる` → stem `食べ` → `食べながら`, “while eating”.",
      bodyZh:
        "`〜ながら` 接在动词的 **ます形词干**(去掉 `ます`)之后,表示同一个人同时进行两个动作:`Aながら B` =「一边 A 一边 B」。\n\n句子的重心在后一个分句(B),前一个分句(A)是伴随的、同时发生的动作。例如 `食べる` → 词干 `食べ` → `食べながら`,「一边吃」。",
      examples: [
        {
          jp: "音楽を聞きながら勉強します",
          reading: "おんがくをききながらべんきょうします",
          en: "I study while listening to music.",
          zh: "我一边听音乐一边学习。",
          code: `import type { GodanVerb, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 聞く = GodanVerb & { stem: "聞"; ending: "く" };
type する = IrregularVerb & { dictionary: "する" };

// 音楽を + 聞き(ます-stem) + ながら + 勉強し(ます-stem) + ます
type 音楽を聞きながら勉強します = \`音楽を\${ConjugateVerb<聞く, "ます形">}ながら勉強\${ConjugateVerb<する, "ます形">}ます\`;
`,
        },
        {
          jp: "歩きながら話しましょう",
          reading: "あるきながらはなしましょう",
          en: "Let's talk while walking.",
          zh: "我们一边走一边聊吧。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 歩く = GodanVerb & { stem: "歩"; ending: "く" };
type 話す = GodanVerb & { stem: "話"; ending: "す" };

// 歩き(ます-stem) + ながら + 話し(ます-stem) + ましょう
type 歩きながら話しましょう = \`\${ConjugateVerb<歩く, "ます形">}ながら\${ConjugateVerb<話す, "ます形">}ましょう\`;
`,
        },
      ],
    },
    {
      id: "i11-2",
      titleEn: "〜まま — leaving a state unchanged",
      titleZh: "〜まま ——「保持原状/就那样」",
      bodyEn:
        "`〜まま` describes doing something while a state is left unchanged. With verbs it follows the **た-form** (`立った` → `立ったまま`, “while still standing”). With nouns it follows `の` (`昔のまま`, “as it was in the past”).\n\nThe nuance is that the expected next step did *not* happen — you went out without changing, slept without turning off the light, and so on.",
      bodyZh:
        "`〜まま` 表示在某个状态保持不变的情况下做某事。接动词时用 **た形**(`立った` → `立ったまま`,「就那样站着」);接名词时用 `の`(`昔のまま`,「还是以前的样子」)。\n\n语感是该发生的下一步动作没有发生 —— 没换衣服就出去、没关灯就睡着,等等。",
      examples: [
        {
          jp: "靴を履いたまま入りました",
          reading: "くつをはいたままはいりました",
          en: "I came in with my shoes still on.",
          zh: "我穿着鞋就进来了。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 履く = GodanVerb & { stem: "履"; ending: "く" };
type 入る = GodanVerb & { stem: "入"; ending: "る" };

// 靴を + 履いた(た形) + まま + 入り(ます-stem) + ました
type 靴を履いたまま入りました = \`靴を\${ConjugateVerb<履く, "た形">}まま\${ConjugateVerb<入る, "ます形">}ました\`;
`,
        },
        {
          jp: "電気をつけたまま寝ました",
          reading: "でんきをつけたままねました",
          en: "I fell asleep with the light still on.",
          zh: "我开着灯就睡着了。",
          code: `import type { IchidanVerb, ConjugateVerb } from "typed-japanese";

type つける = IchidanVerb & { stem: "つけ"; ending: "る" };
type 寝る = IchidanVerb & { stem: "寝"; ending: "る" };

// 電気を + つけた(た形) + まま + 寝(ます-stem) + ました
type 電気をつけたまま寝ました = \`電気を\${ConjugateVerb<つける, "た形">}まま\${ConjugateVerb<寝る, "ます形">}ました\`;
`,
        },
      ],
    },
    {
      id: "i11-3",
      titleEn: "〜つつ — written “while / although”",
      titleZh: "〜つつ ——书面的「一边…/尽管…」",
      bodyEn:
        "`〜つつ` also attaches to the **ます-stem**. In plain use it is a more literary synonym of `〜ながら` (“while doing”). It very often appears as `〜つつも`, which adds a contrastive nuance: “even while / although”.\n\nUse `〜つつ` in writing and formal speech; in everyday conversation `〜ながら` is far more common.",
      bodyZh:
        "`〜つつ` 同样接 **ます形词干**。普通用法下它是 `〜ながら` 更书面的同义词(「一边…」)。它还常以 `〜つつも` 的形式出现,带转折语气:「虽然…却…/尽管…」。\n\n`〜つつ` 用于书面语和正式场合;日常会话中 `〜ながら` 更常用。",
      examples: [
        {
          jp: "未来を考えつつ歩きます",
          reading: "みらいをかんがえつつあるきます",
          en: "I walk while thinking about the future.",
          zh: "我一边思考未来一边走。",
          code: `import type { IchidanVerb, GodanVerb, ConjugateVerb } from "typed-japanese";

type 考える = IchidanVerb & { stem: "考え"; ending: "る" };
type 歩く = GodanVerb & { stem: "歩"; ending: "く" };

// 未来を + 考え(ます-stem) + つつ + 歩き(ます-stem) + ます
type 未来を考えつつ歩きます = \`未来を\${ConjugateVerb<考える, "ます形">}つつ\${ConjugateVerb<歩く, "ます形">}ます\`;
`,
        },
        {
          jp: "悪いと知りつつも飲みました",
          reading: "わるいとしりつつものみました",
          en: "Even though I knew it was bad, I drank it.",
          zh: "尽管知道不好,我还是喝了。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 知る = GodanVerb & { stem: "知"; ending: "る" };
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 悪いと + 知り(ます-stem) + つつも + 飲み(ます-stem) + ました
type 悪いと知りつつも飲みました = \`悪いと\${ConjugateVerb<知る, "ます形">}つつも\${ConjugateVerb<飲む, "ます形">}ました\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
