import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a07",
  level: "advanced",
  order: 7,
  titleEn: "〜かのようだ / 〜とばかりに",
  titleZh: "〜かのようだ／〜とばかりに",
  summaryEn:
    "Two expressions for describing appearances and unspoken attitudes. `〜かのようだ` likens a real situation to something it isn't — “as if / as though” — often paired with the adverb `まるで`. `〜とばかりに` describes an action performed *as if to say* some (unspoken) words, capturing body language and attitude. Both attach to a plain clause and belong to literary, descriptive Japanese.",
  summaryZh:
    "两个用于描写表象与言外之意的表达。`〜かのようだ` 把现实情形比作其实并非如此的事物——「仿佛、好像」——常与副词 `まるで` 搭配。`〜とばかりに` 描写某个动作仿佛在「说着」某句(并未真正说出口的)话,用来刻画神态与姿态。两者都接在简体分句之后,属于书面、描写性的日语。",
  points: [
    {
      id: "a07-1",
      titleEn: "〜かのようだ — “as if / as though”",
      titleZh: "〜かのようだ ——「仿佛、好像」",
      bodyEn:
        "`〜かのようだ` compares a real state of affairs to a fictional or exaggerated one: the speaker knows it isn't true, but it *looks* that way. It attaches to the **plain form** of a clause: verbs and i-adjectives connect directly (`知らない + かのようだ`, `見ている + かのようだ`), while a noun takes `である` first (`天使 + であるかのようだ`).\n\nIt's the more literary, emphatic cousin of plain `ようだ`. The adverb `まるで` (“just like / exactly as if”) is often placed earlier in the sentence to reinforce the comparison.",
      bodyZh:
        "`〜かのようだ` 把现实情形比作虚构或夸张的事物:说话人明知并非如此,但「看上去」就是那样。它接在分句的**简体形**之后:动词、形容词直接连接(`知らない + かのようだ`、`見ている + かのようだ`),名词则先加 `である`(`天使 + であるかのようだ`)。\n\n它是普通 `ようだ` 更书面、更强调的说法。句中常在前面加副词 `まるで`(「简直就像、宛如」)来强化比喻。",
      examples: [
        {
          jp: "彼は何も知らないかのようだ",
          reading: "かれはなにもしらないかのようだ",
          en: "He acts as if he knows nothing.",
          zh: "他一副什么都不知道的样子。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 知る = GodanVerb & { stem: "知"; ending: "る" };

// 彼は何も + 知ら(ない形) + ない + かのようだ
type 彼は何も知らないかのようだ = \`彼は何も\${ConjugateVerb<知る, "ない形">}ないかのようだ\`;
`,
        },
        {
          jp: "夢を見ているかのようだ",
          reading: "ゆめをみているかのようだ",
          en: "It is as if I were dreaming.",
          zh: "简直就像在做梦一样。",
          code: `import type { IchidanVerb, ConjugateVerb } from "typed-japanese";

type 見る = IchidanVerb & { stem: "見"; ending: "る" };

// 夢を + 見て(て形) + いる + かのようだ
type 夢を見ているかのようだ = \`夢を\${ConjugateVerb<見る, "て形">}いるかのようだ\`;
`,
        },
        {
          jp: "彼女はまるで天使であるかのようだ",
          reading: "かのじょはまるでてんしであるかのようだ",
          en: "She is just as if she were an angel.",
          zh: "她简直宛如天使一般。",
          code: `// A noun takes である before かのようだ; まるで reinforces the comparison.
type 彼女はまるで天使であるかのようだ = \`彼女はまるで天使であるかのようだ\`;
`,
        },
      ],
    },
    {
      id: "a07-2",
      titleEn: "〜かのように — adverbial “as if”",
      titleZh: "〜かのように ——副词性的「仿佛地」",
      bodyEn:
        "When the “as if” comparison modifies a following verb or adjective rather than ending the sentence, `〜かのようだ` changes to the adverbial `〜かのように`. The pattern is `[plain clause] かのように [predicate]` — “(does something) as if …”.\n\nThis is how you describe the *manner* of an action: someone smiles, walks, or speaks in a way that resembles some other situation.",
      bodyZh:
        "当「仿佛」的比喻是用来修饰后面的动词或形容词,而不是结句时,`〜かのようだ` 变为副词性的 `〜かのように`。结构是 `[简体分句] かのように [谓语]`——「仿佛……地(做某事)」。\n\n这正是用来描写动作的**样态**:某人微笑、行走或说话的样子,像是另一种情形。",
      examples: [
        {
          jp: "春が来たかのように暖かい",
          reading: "はるがきたかのようにあたたかい",
          en: "It is warm, as if spring had come.",
          zh: "暖和得仿佛春天来了一样。",
          code: `import type { IrregularVerb, ConjugateVerb, IAdjective, ConjugateAdjective } from "typed-japanese";

type 来る = IrregularVerb & { dictionary: "来る" };
type 暖かい = IAdjective & { stem: "暖か"; ending: "い" };

// 春が + 来た(た形) + かのように + 暖かい(基本形)
type 春が来たかのように暖かい = \`春が\${ConjugateVerb<来る, "た形">}かのように\${ConjugateAdjective<暖かい, "基本形">}\`;
`,
        },
        {
          jp: "雪が降っているかのように白い",
          reading: "ゆきがふっているかのようにしろい",
          en: "It is white, as if snow were falling.",
          zh: "白得仿佛正在下雪一样。",
          code: `import type { GodanVerb, ConjugateVerb, IAdjective, ConjugateAdjective } from "typed-japanese";

type 降る = GodanVerb & { stem: "降"; ending: "る" };
type 白い = IAdjective & { stem: "白"; ending: "い" };

// 雪が + 降って(て形) + いる + かのように + 白い(基本形)
type 雪が降っているかのように白い = \`雪が\${ConjugateVerb<降る, "て形">}いるかのように\${ConjugateAdjective<白い, "基本形">}\`;
`,
        },
      ],
    },
    {
      id: "a07-3",
      titleEn: "〜とばかりに — “as if to say …”",
      titleZh: "〜とばかりに ——「仿佛在说……似的」",
      bodyEn:
        "`〜とばかりに` describes an action carried out *as if to say* the quoted words — though no one actually says them. The quoted part comes first (often a command or short utterance), followed by `とばかりに`, then the main verb: `「…」とばかりに [verb]`. Here `と` is the quotation particle and `ばかり` conveys “just / nothing but”, so the whole thing means “with an attitude that all but said …”.\n\nIt's vivid, literary, and centred on body language and attitude — a glare, a gesture, a sudden movement that *speaks* the unspoken line.",
      bodyZh:
        "`〜とばかりに` 描写某个动作仿佛在「说着」所引用的那句话——尽管没人真的说出口。被引用的部分在前(常是命令或简短话语),后接 `とばかりに`,再接主要动词:`「…」とばかりに [动词]`。这里的 `と` 是引用助词,`ばかり` 表示「净是、只」,整体意思是「摆出一副几乎要说出『……』的架势」。\n\n它生动、书面,聚焦于神态与姿态——一个瞪视、一个手势、一个突然的动作,「说出」了那句未说出口的话。",
      examples: [
        {
          jp: "早く行けとばかりに彼を見た",
          reading: "はやくいけとばかりにかれをみた",
          en: "He looked at me as if to say, “Go, quickly.”",
          zh: "他看着我,仿佛在说「快走」似的。",
          code: `import type { GodanVerb, ConjugateVerb, IchidanVerb } from "typed-japanese";

type 行く = GodanVerb & { stem: "行"; ending: "く" };
type 見る = IchidanVerb & { stem: "見"; ending: "る" };

// 早く + 行け(命令形) + とばかりに + 彼を + 見た(た形)
type 早く行けとばかりに彼を見た = \`早く\${ConjugateVerb<行く, "命令形">}とばかりに彼を\${ConjugateVerb<見る, "た形">}\`;
`,
        },
        {
          jp: "待っていたとばかりに笑った",
          reading: "まっていたとばかりにわらった",
          en: "He smiled as if to say, “I've been waiting for this.”",
          zh: "他笑了,仿佛在说「我就等着这一刻」似的。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 待つ = GodanVerb & { stem: "待"; ending: "つ" };
type 笑う = GodanVerb & { stem: "笑"; ending: "う" };

// 待って(て形) + いた + とばかりに + 笑った(た形)
type 待っていたとばかりに笑った = \`\${ConjugateVerb<待つ, "て形">}いたとばかりに\${ConjugateVerb<笑う, "た形">}\`;
`,
        },
        {
          jp: "何も聞いていないとばかりに歩いた",
          reading: "なにもきいていないとばかりにあるいた",
          en: "She walked on as if to say she had heard nothing.",
          zh: "她径自走着,仿佛在说什么都没听见似的。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 聞く = GodanVerb & { stem: "聞"; ending: "く" };
type 歩く = GodanVerb & { stem: "歩"; ending: "く" };

// 何も + 聞いて(て形) + いない + とばかりに + 歩いた(た形)
type 何も聞いていないとばかりに歩いた = \`何も\${ConjugateVerb<聞く, "て形">}いないとばかりに\${ConjugateVerb<歩く, "た形">}\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
