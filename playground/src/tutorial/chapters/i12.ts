import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i12",
  level: "intermediate",
  order: 12,
  titleEn: "Transitive & intransitive verbs",
  titleZh: "自动词与他动词",
  summaryEn:
    "Many Japanese verbs come in pairs: a transitive verb (someone does something to an object) and an intransitive verb (something happens by itself), like 開ける / 開く “open”. Choosing the right one decides which particle you use — を for the object of a transitive verb, が for the subject of an intransitive verb — and which resultative construction fits: 〜てある (a state someone set up) vs 〜ている (an ongoing or resulting state).",
  summaryZh:
    "日语里很多动词成对出现:他动词(某人对宾语施加动作)和自动词(事物自己发生变化),例如 開ける / 開く「打开 / 开了」。选对动词就决定了用哪个助词 —— 他动词的宾语用 を,自动词的主语用 が —— 也决定了用哪种表示结果状态的句型:〜てある(有人特意造成的状态)还是 〜ている(正在进行或自然出现的状态)。",
  points: [
    {
      id: "i12-1",
      titleEn: "Paired verbs: 開ける (transitive) / 開く (intransitive)",
      titleZh: "成对动词:開ける(他动词)/ 開く(自动词)",
      bodyEn:
        "A transitive verb (他動詞) describes an action a person performs on something: `窓を開ける` “(someone) opens the window”. Its intransitive partner (自動詞) describes the same change happening on its own, with no actor in focus: `窓が開く` “the window opens / is open”.\n\nThe pair 開ける (ichidan) / 開く (godan) is typical: the transitive member often ends in `-eru`, the intransitive in `-(k)u`. Many such pairs exist — 閉める/閉まる, つける/つく, 入れる/入る — and you must memorize them together.",
      bodyZh:
        "他动词描述人对某物施加的动作:`窓を開ける`「(某人)打开窗户」。它的自动词搭档描述同样的变化自己发生,不强调动作者:`窓が開く`「窗户开了 / 窗户开着」。\n\n開ける(一段动词)/ 開く(五段动词)是典型的一对:他动词常以 `-eru` 结尾,自动词常以 `-(k)u` 结尾。这样的词对很多 —— 閉める/閉まる、つける/つく、入れる/入る —— 需要成对记忆。",
      examples: [
        {
          jp: "窓を開ける",
          reading: "まどをあける",
          en: "to open the window (someone opens it)",
          zh: "打开窗户(有人去开)",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 窓 = ProperNoun<"窓">;
type 開ける = IchidanVerb & { stem: "開け"; ending: "る" };

// 窓 + を (object) + 開ける (transitive, dictionary form)
type 窓を開ける = \`\${PhraseWithParticle<窓, "を">}\${ConjugateVerb<開ける, "辞書形">}\`;
`,
        },
        {
          jp: "窓が開く",
          reading: "まどがあく",
          en: "the window opens / the window is open",
          zh: "窗户开了 / 窗户开着",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 窓 = ProperNoun<"窓">;
type 開く = GodanVerb & { stem: "開"; ending: "く" };

// 窓 + が (subject) + 開く (intransitive, dictionary form)
type 窓が開く = \`\${PhraseWithParticle<窓, "が">}\${ConjugateVerb<開く, "辞書形">}\`;
`,
        },
        {
          jp: "ドアを閉めます",
          reading: "ドアをしめます",
          en: "I will close the door.",
          zh: "我来关门。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type ドア = ProperNoun<"ドア">;
type 閉める = IchidanVerb & { stem: "閉め"; ending: "る" };

// ドア + を (object) + 閉め (ます stem) + ます
type ドアを閉めます = \`\${PhraseWithParticle<ドア, "を">}\${ConjugateVerb<閉める, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "i12-2",
      titleEn: "Particles: を with transitive, が with intransitive",
      titleZh: "助词:他动词用 を,自动词用 が",
      bodyEn:
        "The particle choice follows directly from the verb. A transitive verb takes a direct object marked with `を`: `電気を消す` “turn off the light”. An intransitive verb has no object — the thing that changes is the subject, marked with `が`: `電気が消える` “the light goes out”.\n\nSo `を` + verb signals that someone is acting on something, while `が` + verb signals that the thing itself changes. Picking the wrong particle for a verb is a classic mistake.",
      bodyZh:
        "助词的选择直接取决于动词。他动词带由 `を` 标记的直接宾语:`電気を消す`「关灯」。自动词没有宾语 —— 发生变化的事物本身是主语,用 `が` 标记:`電気が消える`「灯灭了」。\n\n所以 `を` + 动词 表示有人对某物施加动作,`が` + 动词 表示事物自身发生变化。给某个动词配错助词是常见错误。",
      examples: [
        {
          jp: "電気を消す",
          reading: "でんきをけす",
          en: "to turn off the light",
          zh: "关灯",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 電気 = ProperNoun<"電気">;
type 消す = GodanVerb & { stem: "消"; ending: "す" };

// 電気 + を (object) + 消す (transitive)
type 電気を消す = \`\${PhraseWithParticle<電気, "を">}\${ConjugateVerb<消す, "辞書形">}\`;
`,
        },
        {
          jp: "電気が消える",
          reading: "でんきがきえる",
          en: "the light goes out",
          zh: "灯灭了",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 電気 = ProperNoun<"電気">;
type 消える = IchidanVerb & { stem: "消え"; ending: "る" };

// 電気 + が (subject) + 消える (intransitive)
type 電気が消える = \`\${PhraseWithParticle<電気, "が">}\${ConjugateVerb<消える, "辞書形">}\`;
`,
        },
        {
          jp: "お湯が出ます",
          reading: "おゆがでます",
          en: "Hot water comes out.",
          zh: "出热水了。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type お湯 = ProperNoun<"お湯">;
type 出る = IchidanVerb & { stem: "出"; ending: "る" };

// お湯 + が (subject) + 出 (ます stem) + ます
type お湯が出ます = \`\${PhraseWithParticle<お湯, "が">}\${ConjugateVerb<出る, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "i12-3",
      titleEn: "〜てある: a state someone set up (transitive)",
      titleZh: "〜てある:有人特意造成的状态(他动词)",
      bodyEn:
        "`〜てある` attaches `ある` to the て-form of a **transitive** verb to describe a state that resulted from a deliberate action: someone did it on purpose, and the result remains. `窓が開けてある` means “the window has been opened (and left open by someone, for a reason)”.\n\nNotice the object is usually marked with `が` here, because the focus is on the resulting state rather than the action. This pattern carries a strong sense of preparation — “it's been done in advance”.",
      bodyZh:
        "`〜てある` 把 `ある` 接在**他动词**的て形之后,描述由有意动作造成的状态:有人特意做了,而且结果保留着。`窓が開けてある` 意为「窗户被(某人有意)打开着」。\n\n注意这里宾语通常用 `が` 标记,因为重点在结果状态而非动作本身。这个句型带有很强的「事先准备好」的语气 ——「已经做好了」。",
      examples: [
        {
          jp: "窓が開けてある",
          reading: "まどがあけてある",
          en: "The window has been (deliberately) opened.",
          zh: "窗户(被人特意)打开着。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 窓 = ProperNoun<"窓">;
type 開ける = IchidanVerb & { stem: "開け"; ending: "る" };

// 窓 + が + 開けて (て形) + ある
type 窓が開けてある = \`\${PhraseWithParticle<窓, "が">}\${ConjugateVerb<開ける, "て形">}ある\`;
`,
        },
        {
          jp: "電気が消してあります",
          reading: "でんきがけしてあります",
          en: "The light has been turned off (on purpose).",
          zh: "灯(被人特意)关好了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 電気 = ProperNoun<"電気">;
type 消す = GodanVerb & { stem: "消"; ending: "す" };

// 電気 + が + 消して (て形) + あります
type 電気が消してあります = \`\${PhraseWithParticle<電気, "が">}\${ConjugateVerb<消す, "て形">}あります\`;
`,
        },
      ],
    },
    {
      id: "i12-4",
      titleEn: "〜ている: a resulting state (intransitive)",
      titleZh: "〜ている:自然呈现的结果状态(自动词)",
      bodyEn:
        "With an **intransitive** verb, `〜ている` describes the state that exists after a change, without implying any actor: `窓が開いている` “the window is open”. It simply reports how things are — maybe the wind opened it, maybe it was never closed.\n\nCompare with 〜てある: `窓が開けてある` (transitive 開ける) implies someone opened it deliberately, while `窓が開いている` (intransitive 開く) just states the window is open. With many verbs `〜ている` also means an action in progress — context decides between “in progress” and “resulting state”.",
      bodyZh:
        "对**自动词**而言,`〜ている` 描述变化发生后存在的状态,不暗示任何动作者:`窓が開いている`「窗户开着」。它只是陈述现状 —— 也许是风吹开的,也许本来就没关。\n\n与 〜てある 对比:`窓が開けてある`(他动词 開ける)暗示有人特意打开,而 `窓が開いている`(自动词 開く)只是陈述窗户开着这个事实。许多动词的 `〜ている` 也表示动作正在进行 —— 究竟是「进行中」还是「结果状态」,由上下文决定。",
      examples: [
        {
          jp: "窓が開いている",
          reading: "まどがあいている",
          en: "The window is open.",
          zh: "窗户开着。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 窓 = ProperNoun<"窓">;
type 開く = GodanVerb & { stem: "開"; ending: "く" };

// 窓 + が + 開いて (て形) + いる
type 窓が開いている = \`\${PhraseWithParticle<窓, "が">}\${ConjugateVerb<開く, "て形">}いる\`;
`,
        },
        {
          jp: "ドアが閉まっています",
          reading: "ドアがしまっています",
          en: "The door is closed.",
          zh: "门关着。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type ドア = ProperNoun<"ドア">;
type 閉まる = GodanVerb & { stem: "閉ま"; ending: "る" };

// ドア + が + 閉まって (て形) + います
type ドアが閉まっています = \`\${PhraseWithParticle<ドア, "が">}\${ConjugateVerb<閉まる, "て形">}います\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
