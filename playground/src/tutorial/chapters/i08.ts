import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i08",
  level: "intermediate",
  order: 8,
  titleEn: "〜ように / 〜ような",
  titleZh: "〜ように／〜ような",
  summaryEn:
    "Picture turning up the volume and adding, “…so everyone in the back can hear,” or pointing at a friend's phone and saying, “I want one like that.” Until now you could state a goal flatly or describe a thing plainly, but you couldn't link an action to the result it aims at, give a “like / such as” example, or say you make an ongoing effort to do something. The little word よう (“manner, way”) unlocks all three: `〜ように` (so that…), `〜ような` (like / such as), and `〜ようにする` (make a habit of…).",
  summaryZh:
    "想象你把音量调大,然后补一句「……好让后排也能听见」;或者指着朋友的手机说「我也想要一个那样的」。到目前为止,你只能干巴巴地陈述一个目标、平铺直叙地描述一样东西,却没法把一个动作和它所瞄准的结果连起来,也没法举出「像……一样」的例子,更没法表达「努力坚持去做某事」。一个小词 `よう`(样子、方式)就能解锁这三件事:`〜ように`(为了让……)、`〜ような`(像……一样的)、以及 `〜ようにする`(养成……的习惯)。",
  points: [
    {
      id: "i08-1",
      titleEn: "〜ように — “so that / in order that”",
      titleZh: "〜ように ——「为了……,以便……」",
      bodyEn:
        "Back in chapter 19 you met `つもり` for stating an intention, and you can already say a goal directly. But suppose you turn up the music and want to add the reason: “…so that the people in the back can hear it.” The result — them being able to hear — isn't something you do directly; it just follows from your action. That gap is exactly what `ように` fills.\n\nThe shape is simple: take a verb in its dictionary form (`辞書形`), its negative `ない形`, or its potential form from chapter 18, and follow it with `ように`. The whole clause then reads “in such a way that Y happens,” and the main action comes after. Since `よう` literally means “manner / way,” you're saying “I do the main thing in the manner that brings about Y.”\n\nWhy a separate pattern instead of `ために` (“in order to,” which you'll meet too)? `ために` is for goals you control by your own deliberate doing; `ように` is for results that simply come about on their own — and that's why it pairs so naturally with potential verbs (`読める` = can read), spontaneous-change verbs (`治る` = to heal), and negatives (`忘れない` = won't forget). The subject of the `ように` clause is often beyond your direct control.\n\nImagine you're sick and reaching for medicine: `病気が治るように薬を飲みます` — you can't force yourself to heal by an act of will, you can only take medicine and let healing follow. That's the feel of `ように` every time.",
      bodyZh:
        "第 19 章你学过 `つもり` 来陈述打算,你也早就会直接说出一个目标了。但假设你把音乐调大,想补上理由:「……好让后排的人也能听见。」这个结果 —— 他们「能」听见 —— 并不是你直接做出来的,而是顺着你的动作自然发生的。`ように` 填补的正是这个空缺。\n\n形式很简单:取动词的辞书形 (`辞書形`)、否定 `ない形`,或第 18 章学过的可能形,后面接 `ように`。整个小句就读作「以让 Y 发生的方式」,主动作放在后面。由于 `よう` 本义是「样子、方式」,你其实是在说「我以促成 Y 的那种方式去做主动作」。\n\n为什么要单独有这个句型,而不用 `ために`(「为了」,你之后也会遇到)?`ために` 用于靠自己刻意行动就能掌控的目标;`ように` 用于那些只是「自然发生」的结果 —— 这也正是它为何与可能动词 (`読める` 能读)、自发变化动词 (`治る` 痊愈) 和否定形 (`忘れない` 不忘记) 搭配得如此自然。`ように` 小句的主语往往不在你的直接控制之内。\n\n想象你病了,伸手去拿药:`病気が治るように薬を飲みます` —— 你没法凭意志「让」自己痊愈,只能吃药,然后让痊愈顺其自然地到来。每次用 `ように`,都是这种感觉。",
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
type 勉強 = ProperNoun<"勉強">;
type する = IrregularVerb & { dictionary: "する" };

// 漢字が + 読め(可能形) + る + ように + 勉強 + し(ます形) + ます
type 漢字が読めるように勉強します = \`\${PhraseWithParticle<漢字, "が">}\${ConjugateVerb<読む, "可能形">}るように\${勉強}\${ConjugateVerb<する, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "i08-2",
      titleEn: "〜ような — “like / such as”",
      titleZh: "〜ような ——「像……一样的」",
      bodyEn:
        "You already have a strong instinct from chapters 2 and 8 that whatever sits in front of a noun describes it — `この本` (this book), `きれいな花` (a pretty flower). What you couldn't yet do is say one thing resembles another: “a phone like the one you have,” “a teacher like Mr. Tanaka.” That comparison-by-example is what `ような` adds.\n\nThe pattern is `Noun + のような + Noun`: “a (second noun) like the (first).” The `の` links the two nouns just as it always has, and `ような` means “of that manner.” Because it ends in `な`, it clips onto the following noun exactly like a na-adjective — that `な` is the very same attaching `な` you know from `きれいな`, which is why the shape feels familiar rather than new.\n\nThere's an adverb-flavored twin: when you're describing a verb or an adjective instead of a noun, swap to `ように`. So `花のような人` is “a person like a flower,” but `花のように美しい` is “beautiful like a flower.” The rule of thumb: `ような` before a noun, `ように` before a verb or adjective — the same `な`-vs-`に` split you saw with na-adjectives.\n\nPicture chatting with a friend whose mentor you admire: `田中さんのような先生になりたいです` — “I want to become a teacher like Mr. Tanaka.” You're not saying you want to become Mr. Tanaka himself, just someone of that kind, and `のような` draws exactly that resemblance.",
      bodyZh:
        "从第 2 章和第 8 章起,你就有了一个牢固的直觉:放在名词前面的东西都是在修饰它 —— `この本`(这本书)、`きれいな花`(漂亮的花)。但你还做不到说一样东西「像」另一样:「像你那台一样的手机」「像田中先生那样的老师」。这种「用举例来作比」的说法,正是 `ような` 补上的。\n\n句型是「名词 + のような + 名词」:「像(前一个名词)一样的(后一个名词)」。`の` 把两个名词连起来,和它一贯的作用一样,而 `ような` 表示「那种样子的」。由于它以 `な` 结尾,它紧贴后面的名词,用法和形容动词 (な形容词) 完全一样 —— 这个 `な` 就是你在 `きれいな` 里见过的那个连接用的 `な`,所以这个形式让人感到熟悉,而非陌生。\n\n它还有一个副词味的孪生兄弟:当你修饰的是动词或形容词、而非名词时,换成 `ように`。所以 `花のような人` 是「像花一样的人」,而 `花のように美しい` 是「像花一样美」。口诀:修饰名词用 `ような`,修饰动词或形容词用 `ように` —— 正是你在 な形容词那里见过的 `な` 与 `に` 之分。\n\n想象你和一位朋友聊起他敬仰的恩师:`田中さんのような先生になりたいです` ——「我想成为像田中先生那样的老师。」你并不是说想「变成」田中先生本人,而是想成为那一类人,`のような` 描摹的正是这份相似。",
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
        "Chapter 19's `つもり` let you announce a plan, but a New Year's resolution is more than a plan — it's an ongoing effort: “I try to walk every day,” “I'm cutting out alcohol.” You couldn't yet express that sustained, deliberate steering of your own habits. `ようにする` is the tool: it literally arranges your behavior “into that manner.”\n\nTake a verb's dictionary form (`辞書形`) for “make an effort to do X,” or its `ない形` for “make an effort to avoid doing X,” and follow with `ようにする`. The `よう` (“manner”) plus `する` (“to do / make”) is wonderfully transparent: you're “making things be that way” on purpose. So `毎日運動するようにします` is a resolution to exercise daily, and `お酒を飲まないようにしています` is the ongoing effort to stay off alcohol.\n\nNotice the tense doing real work. The plain `〜ようにします` announces the resolution; the continuous `〜ようにしています` (from chapter 11) says it's a habit you're already keeping; and `〜ようにしてください` turns it into a soft request — “please try to ~.” A doctor might tell you `早く寝るようにしてください`, “please try to get to bed early,” nudging a habit rather than barking an order.\n\nOne pitfall: don't confuse `〜ようにする` (a sustained effort) with `〜ことにする` (a one-time decision you make on the spot). “I've decided to quit” is `ことにする`; “I'm trying to quit, day by day” is `ようにする`.",
      bodyZh:
        "第 19 章的 `つもり` 让你能宣布一个打算,但「新年决心」不止是打算 —— 它是一份持续的努力:「我尽量每天散步」「我在戒酒」。这种对自己习惯持续、有意的「调控」,你之前还没法表达。`ようにする` 就是这件工具:它字面上把你的行为「安排成那种样子」。\n\n取动词的辞书形 (`辞書形`) 表示「努力去做 X」,或取 `ない形` 表示「努力『不』做 X」,后面接 `ようにする`。`よう`(样子)加 `する`(做、使) 的组合极其直白:你是在有意「让事情变成那个样子」。所以 `毎日運動するようにします` 是「下决心每天运动」,`お酒を飲まないようにしています` 是「一直在努力不喝酒」。\n\n注意时态在这里大有讲究。普通的 `〜ようにします` 是宣布决心;持续体 `〜ようにしています`(第 11 章) 表示这是你已经在坚持的习惯;而 `〜ようにしてください` 则化作委婉的请求 ——「请尽量……」。医生也许会对你说 `早く寝るようにしてください`,「请尽量早点睡」,是在温和地引导一个习惯,而非生硬地下命令。\n\n一个易错点:别把 `〜ようにする`(持续的「努力」) 和 `〜ことにする`(当下做出的一次性「决定」) 搞混。「我决定戒了」是 `ことにする`;「我在一天天努力戒掉」才是 `ようにする`。",
      examples: [
        {
          jp: "毎日運動するようにします",
          reading: "まいにちうんどうするようにします",
          en: "I'll make an effort to exercise every day.",
          zh: "我会尽量做到每天运动。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 毎日 = ProperNoun<"毎日">;
type 運動 = ProperNoun<"運動">;
type する = IrregularVerb & { dictionary: "する" };

// 毎日 + 運動 + する(辞書形) + ように + し(ます形) + ます
type 毎日運動するようにします = \`\${毎日}\${運動}\${ConjugateVerb<する, "辞書形">}ように\${ConjugateVerb<する, "ます形">}ます\`;
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
          code: `import type { ProperNoun, IchidanVerb, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 早く = ProperNoun<"早く">;
type 寝る = IchidanVerb & { stem: "寝"; ending: "る" };
type する = IrregularVerb & { dictionary: "する" };

// 早く + 寝る(辞書形) + ように + し(て形) + ください
type 早く寝るようにしてください = \`\${早く}\${ConjugateVerb<寝る, "辞書形">}ように\${ConjugateVerb<する, "て形">}ください\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
