import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i01",
  level: "intermediate",
  order: 1,
  titleEn: "Passive 受身",
  titleZh: "被动态 受身",
  summaryEn:
    "Your boss chews you out, someone lifts your wallet on the train, the sky opens up on your walk home — so far you could only narrate these from the doer's side (先生が私を叱った, “the teacher scolded me”), never from the side of the person it happened to. The passive 受身 flips the camera: the affected person becomes the topic and the doer steps behind `に` (“by”). You'll build the passive form 受身形, master the core pattern `A は B に 〜られる`, and meet the uniquely Japanese “suffering passive” 迷惑の受身, which lets even rain falling or a baby crying register as something that troubled you.",
  summaryZh:
    "被老板训了一顿、在电车上钱包被人摸走、回家路上突然下起雨 —— 到目前为止,你只能从「做这件事的人」的角度来叙述(先生が私を叱った,「老师骂了我」),却没法从「这件事落到谁头上」的角度来说。被动态(受身)把镜头翻转过来:受影响的人成为主题,做动作的人退到 `に`(「被…」)之后。本章带你构成被动形(受身形),掌握核心句型 `A は B に 〜られる`,并认识富有日语特色的「受害被动」(迷惑の受身)—— 它甚至能让下雨、婴儿哭这种事,也变成「害得你…」的麻烦。",
  points: [
    {
      id: "i01-1",
      titleEn: "Forming the passive 受身形",
      titleZh: "构成被动形 受身形",
      bodyEn:
        "Back in chapter 18 you turned `食べる` into `食べられる` to say “can eat.” The passive reuses that exact `〜られる` shape, plus a parallel pattern for godan verbs — so the conjugation is mostly muscle memory you already have. The new job is to attach it the right way for each verb class.\n\nFor godan verbs, shift the final `-u` sound to the `-a` row and add `れる`: `叱る → 叱ら + れる → 叱られる`. The one trap is verbs ending in `う` — `言う` becomes `言わ`, not `言あ`, because old Japanese kept a `w` there: `言う → 言われる`.\n\nFor ichidan verbs, drop `る` and add `られる`: `食べる → 食べられる`. Yes, this is byte-for-byte the potential form you learned for “can eat” — context is what tells “is eaten” apart from “can eat,” and in practice the situation makes it obvious.\n\nFor the two irregulars, memorize `する → される` and `来る → 来られる`. Once formed, a passive verb behaves like a brand-new ichidan verb, so everything you know carries over: the past is `〜られた`, the negative `〜られない`. Picture a coworker recapping their day — `言われた` (“I was told…”), `された` (“it was done to me”) — and you can already feel the shapes.",
      bodyZh:
        "还记得第 18 课里,你把 `食べる` 变成 `食べられる` 来表示「能吃」吗?被动态用的正是同一个 `〜られる` 形状,五段动词也有一套对应的变化 —— 所以这套变形大半是你已经练熟的肌肉记忆,新要做的只是为每一类动词正确地接上它。\n\n五段动词:把词尾的 `-u` 音变到 `-a` 段,再加 `れる`:`叱る → 叱ら + れる → 叱られる`。唯一的陷阱是以 `う` 结尾的动词 —— `言う` 变成 `言わ`,而不是 `言あ`,因为古日语在这里保留了一个 `w` 音:`言う → 言われる`。\n\n一段动词:去掉 `る` 加 `られる`:`食べる → 食べられる`。没错,这和你学过的「能吃」可能态一模一样 —— 「被吃」和「能吃」靠语境区分,实际场景里几乎不会搞混。\n\n两个不规则动词,记住 `する → される`、`来る → 来られる`。变好之后,被动动词就像一个全新的一段动词,你已知的一切都通用:过去式是「〜られた」,否定是「〜られない」。想象同事在复盘一天:`言われた`(「被人这么说…」)、`された`(「被人这么对待…」)—— 这些形状你已经有了感觉。",
      examples: [
        {
          jp: "言われる",
          reading: "いわれる",
          en: "to be told / to be said (to one)",
          zh: "被说;被告知",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 言う = GodanVerb & { stem: "言"; ending: "う" };

// godan 受身形 gives the -a stem 言わ; add れる
type 言われる = \`\${ConjugateVerb<言う, "受身形">}れる\`;
`,
        },
        {
          jp: "食べられる",
          reading: "たべられる",
          en: "to be eaten",
          zh: "被吃掉",
          code: `import type { IchidanVerb, ConjugateVerb } from "typed-japanese";

type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// ichidan 受身形 gives 食べられ; add る
type 食べられる = \`\${ConjugateVerb<食べる, "受身形">}る\`;
`,
        },
        {
          jp: "される",
          reading: "される",
          en: "to be done",
          zh: "被做",
          code: `import type { IrregularVerb, ConjugateVerb } from "typed-japanese";

type する = IrregularVerb & { dictionary: "する" };

// irregular 受身形 gives され; add る
type される = \`\${ConjugateVerb<する, "受身形">}る\`;
`,
        },
      ],
    },
    {
      id: "i01-2",
      titleEn: "A は B に 〜られる — “A is …-ed by B”",
      titleZh: "A は B に 〜られる ——「A 被 B…」",
      bodyEn:
        "You already know how to say who did what: `先生が私を叱った`, “the teacher scolded me,” with the doer up front and me marked by the object particle `を` from chapter 5. But if the story is really about me — say you're venting to a coworker about your morning — you want me at the front, as the topic. The active sentence won't let you do that. The passive will.\n\nThe rule is a clean swap. The receiver of the action becomes the topic with `は` (chapter 1), and the doer — the agent — moves behind `に`. You've seen `に` mark a recipient or a point in time (chapters 6 and 3); here it takes on a new sense, “by.” So `先生が私を叱った` flips into `私は先生に叱られた`: “I was scolded by the teacher.” The old object becomes the new topic, the old subject retreats behind `に`.\n\nWhy bother flipping it? Because Japanese sentences are built around a viewpoint, and `は` announces whose story this is. Choosing the passive is choosing to keep the spotlight on the affected person across several sentences without awkwardly re-introducing the doer each time.\n\nImagine telling a friend you got invited to a wedding: `私は友達に招待された`. Note that `招待する` is a noun-plus-`する` verb, so only the `する` half turns passive — `招待される`. The same frame covers good news too: a kid coming home beaming, `子供はみんなにほめられた`, “the child was praised by everyone.” Same swap, just a happier agent behind `に`.",
      bodyZh:
        "你已经会说「谁做了什么」:`先生が私を叱った`,「老师骂了我」—— 做动作的人在句首,而「我」用第 5 课学的宾语助词 `を` 标记。可是如果这件事的重点其实是「我」(比如你正在跟同事吐槽今天早上的遭遇),你会想把「我」放到句首,当作主题。主动句做不到这一点,被动句可以。\n\n规则是一次干净的对调:动作的承受者用 `は`(第 1 课)成为主题,而做动作的人 —— 施动者 —— 退到 `に` 之后。你见过 `に` 标记接受者和时间点(第 6 课、第 3 课),这里它多了一层新含义:「被…」。于是 `先生が私を叱った` 翻转成 `私は先生に叱られた`:「我被老师骂了。」原来的宾语成了新的主题,原来的主语退到 `に` 后面。\n\n为什么要翻转?因为日语句子是围绕一个视角搭建的,而 `は` 宣告了「这是谁的故事」。选择被动,就是选择让聚光灯始终打在受影响的人身上,连说几句话也不必每次别扭地重提那个做动作的人。\n\n想象你告诉朋友自己被请去参加婚礼:`私は友達に招待された`。注意 `招待する` 是「名词 + する」型动词,所以只有 `する` 那半边变被动 —— `招待される`。同样的框架也能装好消息:孩子放学满脸得意地回家,`子供はみんなにほめられた`,「这个孩子被大家表扬了。」对调方式一模一样,只是 `に` 后面换成了让人高兴的施动者。",
      examples: [
        {
          jp: "私は先生に叱られた",
          reading: "わたしはせんせいにしかられた",
          en: "I was scolded by the teacher.",
          zh: "我被老师骂了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 先生 = ProperNoun<"先生">;
type 叱る = GodanVerb & { stem: "叱"; ending: "る" };

// 私は + 先生に + 叱ら(受身形) + れた
type 私は先生に叱られた = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<先生, "に">}\${ConjugateVerb<叱る, "受身形">}れた\`;
`,
        },
        {
          jp: "私は友達に招待された",
          reading: "わたしはともだちにしょうたいされた",
          en: "I was invited by a friend.",
          zh: "我被朋友邀请了。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 友達 = ProperNoun<"友達">;
type 招待 = ProperNoun<"招待">;
type する = IrregularVerb & { dictionary: "する" };

// 招待する is a noun + する verb: 招待 + され(受身形) + た
type 私は友達に招待された = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<友達, "に">}\${招待}\${ConjugateVerb<する, "受身形">}た\`;
`,
        },
        {
          jp: "子供はみんなにほめられた",
          reading: "こどもはみんなにほめられた",
          en: "The child was praised by everyone.",
          zh: "这个孩子被大家表扬了。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 子供 = ProperNoun<"子供">;
type みんな = ProperNoun<"みんな">;
type ほめる = IchidanVerb & { stem: "ほめ"; ending: "る" };

// 子供は + みんなに + ほめられ(受身形) + た
type 子供はみんなにほめられた = \`\${PhraseWithParticle<子供, "は">}\${PhraseWithParticle<みんな, "に">}\${ConjugateVerb<ほめる, "受身形">}た\`;
`,
        },
      ],
    },
    {
      id: "i01-3",
      titleEn: "Possessor passive: having something of yours acted on",
      titleZh: "所有者被动:自己的东西被…",
      bodyEn:
        "The basic passive made the receiver of the action the topic. But what about when the action lands not on you directly, but on something that is yours — your wallet, your hand, your homework? You could say `私の財布が盗まれた`, “my wallet was stolen,” yet that puts the spotlight on the wallet, when the person who actually suffered is you.\n\nJapanese has a tidier move: make the owner the topic, and leave the thing right where it was, still marked by the object particle `を`. The pattern is `Person は Agent に Thing を 〜られる`. So instead of foregrounding the wallet, you say `私は財布を盗まれた` — literally “I was stolen-on as to my wallet,” which English smooths into “I had my wallet stolen.”\n\nNotice that `を` survives even though the sentence is passive — that surprises learners, because passive usually clears the object away. Here it stays precisely because the topic (you) and the affected object (the wallet) are two different things, and `を` keeps the wallet attached to the verb.\n\nThis framing almost always carries a whiff of loss or annoyance — it's the natural way to report being wronged. Picture telling a friend about a rough commute: `私は財布を盗まれた`. Or a kid running in from the yard: `弟は犬に手を噛まれた`, “my little brother got his hand bitten by a dog,” with the dog as the agent behind `に` and the hand as the thing under `を`. The sympathy is built into the grammar.",
      bodyZh:
        "基本的被动让动作的承受者成为主题。可如果动作不是直接落在你身上,而是落在「属于你的东西」上 —— 你的钱包、你的手、你的作业 —— 该怎么办?你可以说 `私の財布が盗まれた`,「我的钱包被偷了」,但这样聚光灯打在了钱包上,而真正受害的明明是你。\n\n日语有个更利落的办法:让所有者成为主题,而那样东西原地不动,仍用宾语助词 `を` 标记。句型是「人 は 施动者 に 物 を 〜られる」。于是你不去突出钱包,而说 `私は財布を盗まれた` —— 字面是「我在钱包这件事上被偷了」,英语顺成「我被偷了钱包」,中文就是「我的钱包被偷了」。\n\n请注意,即便句子是被动,`を` 依然保留了下来 —— 这常让学习者意外,因为被动通常会把宾语清掉。它之所以留下,正是因为主题(你)和受影响的物(钱包)是两样不同的东西,`を` 负责把钱包系在动词上。\n\n这种说法几乎总带着一丝损失或不快 —— 它正是「自己吃了亏」的自然报告方式。想象你跟朋友讲一段糟糕的通勤:`私は財布を盗まれた`。或者一个孩子从院子里跑进来:`弟は犬に手を噛まれた`,「弟弟的手被狗咬了」—— 狗是 `に` 后面的施动者,手是 `を` 标记的那样东西。那份同情,已经写进了语法里。",
      examples: [
        {
          jp: "私は財布を盗まれた",
          reading: "わたしはさいふをぬすまれた",
          en: "I had my wallet stolen.",
          zh: "我的钱包被偷了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 財布 = ProperNoun<"財布">;
type 盗む = GodanVerb & { stem: "盗"; ending: "む" };

// 私は + 財布を + 盗ま(受身形) + れた
type 私は財布を盗まれた = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<財布, "を">}\${ConjugateVerb<盗む, "受身形">}れた\`;
`,
        },
        {
          jp: "弟は犬に手を噛まれた",
          reading: "おとうとはいぬにてをかまれた",
          en: "My little brother got his hand bitten by a dog.",
          zh: "弟弟的手被狗咬了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 弟 = ProperNoun<"弟">;
type 犬 = ProperNoun<"犬">;
type 手 = ProperNoun<"手">;
type 噛む = GodanVerb & { stem: "噛"; ending: "む" };

// 弟は + 犬に + 手を + 噛ま(受身形) + れた
type 弟は犬に手を噛まれた = \`\${PhraseWithParticle<弟, "は">}\${PhraseWithParticle<犬, "に">}\${PhraseWithParticle<手, "を">}\${ConjugateVerb<噛む, "受身形">}れた\`;
`,
        },
      ],
    },
    {
      id: "i01-4",
      titleEn: "The suffering passive 迷惑の受身",
      titleZh: "受害被动 迷惑の受身",
      bodyEn:
        "Every passive so far had a real victim and a real action — someone scolded you, a dog bit a hand. But Japanese pushes the idea one step further, into territory that has no English equivalent at all. Sometimes nothing was “done to” you in the ordinary sense; an event simply happened, and it bothered you. The rain fell. The baby cried. There's no object, nothing acted on — and yet you were affected.\n\nThe insight from the architect is that the passive in Japanese is really about being affected, not about objects changing hands. So Japanese lets you cast even an intransitive verb — a verb that never takes a `を` object — into the passive, purely to say “and this inconvenienced me.” This is the 迷惑の受身, the suffering passive.\n\nThe textbook case is weather. `雨に降られた` literally reads “I was rained-on” — the rain (`に`) fell, and the sentence's whole point is that it was a nuisance to the unspoken me. Picture walking home without an umbrella and grumbling to a friend the next day: `雨に降られた`. The annoyance is in the grammar, not in any extra adjective.\n\nThe same trick handles people whose actions spill onto you. `私は赤ちゃんに泣かれた` — “I had the baby cry on me” — frames a whole night of crying as something that wore you out, even though the baby did nothing to you directly. When you want to translate this into English or Chinese, reach for a phrase like “I ended up …-ed on me” or “害得我…,” because the plain verb alone loses the built-in complaint.",
      bodyZh:
        "到目前为止的每个被动句,都有真实的受害者和真实的动作 —— 有人骂了你,狗咬了一只手。但日语把这个想法又往前推了一步,推进了英语完全没有对应物的地带。有时候,并没有什么以通常意义「对你做」的事;一件事只是发生了,而它给你添了麻烦。雨下了,婴儿哭了 —— 没有宾语,没有任何被施加动作的东西,然而你却受了影响。\n\n架构师点出的关键是:日语的被动本质上讲的是「受到影响」,而不是「某物易手」。所以日语允许你把连 `を` 宾语都没有的不及物动词也拉进被动,纯粹是为了说一句「而这给我添了麻烦」。这就是「迷惑の受身」,受害被动。\n\n教科书般的例子是天气。`雨に降られた` 字面读作「我被雨淋了」—— 雨(`に`)下了下来,整句话的重点就在于:这给那个没说出口的「我」造成了困扰。想象你没带伞走回家,第二天跟朋友抱怨:`雨に降られた`。那份不快藏在语法里,不靠任何额外的形容词。\n\n同样的手法也能处理「别人的行为殃及你」。`私は赤ちゃんに泣かれた`——「我被婴儿哭了」—— 把一整夜的哭闹描述成把你折腾得精疲力竭的事,尽管婴儿并没有直接「对」你做什么。要把它翻成英语或中文,记得补上「害得我…」之类的语气,因为光是动词本身,会丢掉那句内建的抱怨。",
      examples: [
        {
          jp: "雨に降られた",
          reading: "あめにふられた",
          en: "I got caught in the rain.",
          zh: "我被雨淋了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 雨 = ProperNoun<"雨">;
type 降る = GodanVerb & { stem: "降"; ending: "る" };

// intransitive 降る → suffering passive: 雨に + 降ら(受身形) + れた
type 雨に降られた = \`\${PhraseWithParticle<雨, "に">}\${ConjugateVerb<降る, "受身形">}れた\`;
`,
        },
        {
          jp: "私は赤ちゃんに泣かれた",
          reading: "わたしはあかちゃんになかれた",
          en: "I had the baby cry on me (and it troubled me).",
          zh: "婴儿一直哭,害得我很为难。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 赤ちゃん = ProperNoun<"赤ちゃん">;
type 泣く = GodanVerb & { stem: "泣"; ending: "く" };

// 私は + 赤ちゃんに + 泣か(受身形) + れた
type 私は赤ちゃんに泣かれた = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<赤ちゃん, "に">}\${ConjugateVerb<泣く, "受身形">}れた\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
