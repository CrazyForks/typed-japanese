import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i08",
  level: "intermediate",
  order: 8,
  titleEn: "〜ように / 〜ような",
  titleZh: "〜ように／〜ような",
  summaryEn:
    "The word よう (“appearance, manner, way”) powers a small family of patterns. With よう you can say you do something *so that* a result happens (〜ように), describe one thing as being *like* another (〜ような / 〜ように), and state that you *make an effort to* do (or not do) something habitually (〜ようにする). This chapter walks through all three.",
  summaryZh:
    "「よう」(样子、状态、方式) 衍生出一组实用句型。借助「よう」,你可以表达「为了让某个结果发生而做某事」(〜ように)、把一样东西描述成「像另一样东西」(〜ような／〜ように),以及表达「努力(不)养成某种习惯」(〜ようにする)。本章依次讲解这三种用法。",
  points: [
    {
      id: "i08-1",
      titleEn: "〜ように — “so that / in order that”",
      titleZh: "〜ように ——「为了……,以便……」",
      bodyEn:
        "Place a verb in its dictionary form (`辞書形`), its negative form (`ない形`), or its potential form (`可能形`) before `ように` to express the *purpose* or *desired result* of a following action: “(do X) so that Y happens”.\n\nUnlike `ために` (which expresses a deliberate goal you control), `ように` is used when the result is something that *happens* rather than something you directly *do* — typically with potential verbs (`読める` = can read), verbs of spontaneous change (`治る` = to heal), or negatives (`忘れない` = won't forget). The subject of the `ように` clause is often different from, or beyond the direct control of, the speaker.",
      bodyZh:
        "在动词的辞书形 (`辞書形`)、否定形 (`ない形`) 或可能形 (`可能形`) 后面接 `ように`,用来表示后续动作的「目的」或「期望达到的结果」:「(做 X) 以便 Y 发生」。\n\n与 `ために`(表示自己可控的明确目的) 不同,`ように` 用于结果是「自然发生」而非「直接去做」的情况 —— 常与可能动词 (`読める` 能读)、自发变化动词 (`治る` 痊愈) 或否定形 (`忘れない` 不忘记) 搭配。`ように` 小句的主语往往与说话人不同,或不在说话人的直接控制之内。",
      examples: [
        {
          jp: "病気が治るように薬を飲みます",
          reading: "びょうきがなおるようにくすりをのみます",
          en: "I take medicine so that the illness will heal.",
          zh: "为了让病好起来而吃药。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 病気 = ProperNoun<"病気">;
type 治る = GodanVerb & { stem: "治"; ending: "る" };
type 薬 = ProperNoun<"薬">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 病気が + 治る(辞書形) + ように + 薬を + 飲み(ます形) + ます
type 病気が治るように薬を飲みます = \`\${PhraseWithParticle<病気, "が">}\${ConjugateVerb<治る, "辞書形">}ように\${薬}を\${ConjugateVerb<飲む, "ます形">}ます\`;
`,
        },
        {
          jp: "忘れないように名前を書きます",
          reading: "わすれないようになまえをかきます",
          en: "I write down the name so that I won't forget it.",
          zh: "为了不忘记而把名字写下来。",
          code: `import type { ProperNoun, GodanVerb, IchidanVerb, ConjugateVerb } from "typed-japanese";

type 忘れる = IchidanVerb & { stem: "忘れ"; ending: "る" };
type 名前 = ProperNoun<"名前">;
type 書く = GodanVerb & { stem: "書"; ending: "く" };

// 忘れ(ない形) + ない + ように + 名前を + 書き(ます形) + ます
type 忘れないように名前を書きます = \`\${ConjugateVerb<忘れる, "ない形">}ないように\${名前}を\${ConjugateVerb<書く, "ます形">}ます\`;
`,
        },
        {
          jp: "漢字が読めるように勉強します",
          reading: "かんじがよめるようにべんきょうします",
          en: "I study so that I can read kanji.",
          zh: "为了能读懂汉字而学习。",
          code: `import type { ProperNoun, GodanVerb, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 漢字 = ProperNoun<"漢字">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };
type する = IrregularVerb & { dictionary: "する" };

// 漢字が + 読め(可能形) + る + ように + 勉強 + し(ます形) + ます
type 漢字が読めるように勉強します = \`\${PhraseWithParticle<漢字, "が">}\${ConjugateVerb<読む, "可能形">}るように勉強\${ConjugateVerb<する, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "i08-2",
      titleEn: "〜ような — “like / such as”",
      titleZh: "〜ような ——「像……一样的」",
      bodyEn:
        "To describe a noun as resembling something, use `Noun + のような + Noun`: “a Noun *like* (the first one)”. Because `ような` ends in `な`, it behaves like a na-adjective and attaches directly to the noun it modifies.\n\nThe adverbial counterpart is `〜ように` (“like ~”, modifying a verb or adjective), e.g. `花のように美しい` = “beautiful like a flower”. Use `ような` before a noun, `ように` before a verb or adjective.",
      bodyZh:
        "要把一个名词描述成「像某物」,用「名词 + のような + 名词」:「像(前者)一样的 名词」。由于 `ような` 以 `な` 结尾,它的用法类似形容动词 (な形容词),直接修饰后面的名词。\n\n它的副词形式是 `〜ように`(「像……一样地」,修饰动词或形容词),例如 `花のように美しい` =「像花一样美」。修饰名词用 `ような`,修饰动词或形容词用 `ように`。",
      examples: [
        {
          jp: "花のような人",
          reading: "はなのようなひと",
          en: "a person like a flower",
          zh: "像花一样的人",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 花 = ProperNoun<"花">;
type 人 = ProperNoun<"人">;

// 花 + の + ような + 人
type 花のような人 = \`\${PhraseWithParticle<花, "の">}ような\${人}\`;
`,
        },
        {
          jp: "田中さんのような先生になりたいです",
          reading: "たなかさんのようなせんせいになりたいです",
          en: "I want to become a teacher like Mr. Tanaka.",
          zh: "我想成为像田中先生那样的老师。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 田中さん = ProperNoun<"田中さん">;
type 先生 = ProperNoun<"先生">;
type なる = GodanVerb & { stem: "な"; ending: "る" };

// 田中さん + の + ような + 先生に + なり(ます形) + たいです
type 田中さんのような先生になりたいです = \`\${PhraseWithParticle<田中さん, "の">}ような\${先生}に\${ConjugateVerb<なる, "ます形">}たいです\`;
`,
        },
        {
          jp: "夢のような話",
          reading: "ゆめのようなはなし",
          en: "a story like a dream (a dreamlike tale)",
          zh: "梦一般的事",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 夢 = ProperNoun<"夢">;
type 話 = ProperNoun<"話">;

// 夢 + の + ような + 話
type 夢のような話 = \`\${PhraseWithParticle<夢, "の">}ような\${話}\`;
`,
        },
      ],
    },
    {
      id: "i08-3",
      titleEn: "〜ようにする — “make an effort to / try to (habitually)”",
      titleZh: "〜ようにする ——「(尽量)做到……、努力养成……」",
      bodyEn:
        "Attach `ようにする` to a verb's dictionary form (`辞書形`) or negative form (`ない形`) to express that you are *making a conscious effort* to do — or to avoid doing — something, usually as an ongoing habit: “try to ~”, “make a point of ~”.\n\nWith the dictionary form it means “make an effort to do X”; with the `ない形` it means “make an effort not to do X”. The continuous `〜ようにしています` stresses an ongoing habit, while `〜ようにしてください` makes a gentle request: “please try to ~”. Contrast this with `〜ことにする`, which is a one-time *decision* rather than a sustained effort.",
      bodyZh:
        "在动词的辞书形 (`辞書形`) 或否定形 (`ない形`) 后接 `ようにする`,表示「有意识地努力」去做或避免做某事,通常是一种持续的习惯:「尽量……」「注意做到……」。\n\n接辞书形表示「努力去做 X」;接 `ない形` 表示「努力不做 X」。持续体 `〜ようにしています` 强调这是一直保持的习惯;`〜ようにしてください` 则是委婉的请求:「请尽量……」。注意与 `〜ことにする` 区分,后者表示一次性的「决定」,而非持续的努力。",
      examples: [
        {
          jp: "毎日運動するようにします",
          reading: "まいにちうんどうするようにします",
          en: "I'll make an effort to exercise every day.",
          zh: "我会尽量做到每天运动。",
          code: `import type { IrregularVerb, ConjugateVerb } from "typed-japanese";

type する = IrregularVerb & { dictionary: "する" };

// 毎日運動 + する(辞書形) + ように + し(ます形) + ます
type 毎日運動するようにします = \`毎日運動\${ConjugateVerb<する, "辞書形">}ように\${ConjugateVerb<する, "ます形">}ます\`;
`,
        },
        {
          jp: "お酒を飲まないようにしています",
          reading: "おさけをのまないようにしています",
          en: "I'm making an effort not to drink alcohol.",
          zh: "我在努力做到不喝酒。",
          code: `import type { ProperNoun, GodanVerb, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type お酒 = ProperNoun<"お酒">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };
type する = IrregularVerb & { dictionary: "する" };

// お酒を + 飲ま(ない形) + ない + ように + し(て形) + います
type お酒を飲まないようにしています = \`\${PhraseWithParticle<お酒, "を">}\${ConjugateVerb<飲む, "ない形">}ないように\${ConjugateVerb<する, "て形">}います\`;
`,
        },
        {
          jp: "早く寝るようにしてください",
          reading: "はやくねるようにしてください",
          en: "Please try to go to bed early.",
          zh: "请尽量早点睡。",
          code: `import type { IchidanVerb, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 寝る = IchidanVerb & { stem: "寝"; ending: "る" };
type する = IrregularVerb & { dictionary: "する" };

// 早く + 寝る(辞書形) + ように + し(て形) + ください
type 早く寝るようにしてください = \`早く\${ConjugateVerb<寝る, "辞書形">}ように\${ConjugateVerb<する, "て形">}ください\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
