import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i13",
  level: "intermediate",
  order: 13,
  titleEn: "Giving & receiving 授受",
  titleZh: "授受表达",
  summaryEn:
    "Picture handing a coworker a birthday present, then later thanking a stranger who carried your bag up the stairs. In English both are just \"give\" and \"help\", but Japanese tracks the direction of the kindness with three different verbs — `あげる` (it flows away from you), `くれる` (it flows toward you), and `もらう` (you pull it in by receiving). Best of all, attaching them to a て-form turns any action into a favor, so \"he kindly carried it for me\" is built right into the grammar.",
  summaryZh:
    "想象你把生日礼物递给同事,稍后又向帮你把行李搬上楼梯的陌生人道谢。在英语里两件事都不过是「give」和「help」,但日语用三个不同的动词来追踪这份善意的方向 —— `あげる`(从你这边流出去)、`くれる`(流向你这边)、`もらう`(由你接收而把它拉进来)。最妙的是,把它们接在て形之后,任何动作都能变成一份「恩惠」,所以「他特地帮我搬了过来」这层心意就直接写进了语法里。",
  points: [
    {
      id: "i13-1",
      titleEn: "あげる — giving (away from me / toward others)",
      titleZh: "あげる ——「(我方)给出去」",
      bodyEn:
        "Back in chapter 6 you learned that `に` marks a recipient — the person something is aimed at. So you could already build a flat statement like \"a book to my friend\". What you couldn't yet do was say it with a verb that captures the direction of the gift, and Japanese cares deeply about that. Its first answer is `あげる`, \"to give\", which you use when the gift leaves your hands and travels outward — you (or someone on your side) giving to someone else.\n\nThe pattern is `Giver は Recipient に Object を あげる`. The recipient still rides on the `に` you already know, and the thing given takes the object marker `を` from chapter 5. Nothing new about the particles; the new idea is purely the directional verb sitting at the end.\n\nWhy a dedicated outward verb? Japanese pictures every gift relative to your own circle, and `あげる` is the verb for sending warmth out of that circle. Imagine you're at a colleague's farewell party and you hand them a card: 私は友達に本をあげる is exactly this — the book travels from you to them.\n\nThe pitfall to lock in now: `あげる` only works when the gift flows away from you. The moment it flows back toward you, this verb becomes wrong and you must switch to `くれる`, which is the very next point.",
      bodyZh:
        "在第 6 章你学过 `に` 标记接受者 —— 也就是事物指向的那个人,所以你早就能拼出「书给朋友」这样平铺直叙的句子。但当时你还没法用一个动词来体现这份礼物的「方向」,而日语对方向极为讲究。它给出的第一个答案是 `あげる`(给),用在礼物离开你的手、向外流动的场合 —— 你(或己方某人)给别人。\n\n句型为「授予者 は 接受者 に 物 を あげる」。接受者仍然用你早已熟悉的 `に`,所给之物则带上第 5 章的宾语助词 `を`。助词部分毫无新意,真正新的只是句尾那个表方向的动词。\n\n为什么要专门设一个「向外」的动词?因为日语把每一份礼物都放在「自己的圈子」里来看,而 `あげる` 正是把善意「送出圈外」的那个词。设想你在同事的欢送会上递给对方一张卡片:私は友達に本をあげる 说的就是这件事 —— 书从你这里流向了他。\n\n现在就要记牢的陷阱:`あげる` 只在礼物离你而去时成立。一旦东西反过来流「向」你,这个动词就错了,必须换成 `くれる` —— 也就是下一节的内容。",
      examples: [
        {
          jp: "私は友達に本をあげる",
          reading: "わたしはともだちにほんをあげる",
          en: "I give my friend a book.",
          zh: "我给朋友一本书。",
          code: `import type { CommonNoun, Pronoun, PhraseWithParticle } from "typed-japanese";

type 私 = Pronoun<"私">;
type 友達 = CommonNoun<"友達">;
type 本 = CommonNoun<"本">;

// 私 は + 友達 に + 本 を + あげる
type 私は友達に本をあげる = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<友達, "に">}\${PhraseWithParticle<本, "を">}あげる\`;
`,
        },
        {
          jp: "母に花をあげます",
          reading: "ははにはなをあげます",
          en: "I give my mother flowers.",
          zh: "我送给母亲鲜花。",
          code: `import type { CommonNoun, PhraseWithParticle } from "typed-japanese";

type 母 = CommonNoun<"母">;
type 花 = CommonNoun<"花">;

// 母 に + 花 を + あげます (polite)
type 母に花をあげます = \`\${PhraseWithParticle<母, "に">}\${PhraseWithParticle<花, "を">}あげます\`;
`,
        },
      ],
    },
    {
      id: "i13-2",
      titleEn: "くれる — giving (toward me)",
      titleZh: "くれる ——「(别人)给我方」",
      bodyEn:
        "You just saw `あげる` send a gift outward. But half the time someone is giving a present to you — and here English shrugs and uses the same word \"give\" again, while Japanese insists on a different verb. That verb is `くれる`. It also means \"to give\", but it only works when the recipient is you, or someone inside your circle (your family, your close friends — the in-group instinct you'll meet again in the keigo chapters).\n\nThe pattern is `Giver は (私に) Object を くれる`. Because `くれる` already announces \"the gift is coming toward me\", the `私に` (\"to me\") is so obvious it's usually dropped. If a friend hands you a book, you simply say 友達が本をくれる and everyone knows you're the lucky recipient.\n\nWhy build two separate verbs for what looks like one action? Because Japanese encodes your point of view directly into the verb: `くれる` carries a faint glow of gratitude, a sense that this person did something nice for me. That warmth is lost if you wrongly use `あげる`.\n\nKeep the contrast crisp: `あげる` = I give to others (outward); `くれる` = others give to me (inward). They are never interchangeable, and picking the wrong one isn't just unidiomatic — it reverses who the kindness belongs to.",
      bodyZh:
        "你刚看到 `あげる` 把礼物送向外面。但有一半的情况是别人把礼物给「你」—— 这时英语耸耸肩,照旧用同一个 give,日语却坚持要换一个动词。这个动词就是 `くれる`。它同样意为「给」,却只在接受者是你、或是你圈内人(家人、密友 —— 也就是敬语章节里会再遇到的「内」与「外」的本能)时才能用。\n\n句型为「授予者 は (私に) 物 を くれる」。因为 `くれる` 本身已经宣告「礼物正流向我」,那个 `私に`(给我)实在太显而易见,通常就省略了。朋友递给你一本书,你只需说 友達が本をくれる,大家都明白那个幸运的接收者就是你。\n\n为什么要为看似同一个动作造两个动词?因为日语把你的视角直接编进了动词里:`くれる` 自带一丝感激的暖意 —— 一种「这个人特地为我做了件好事」的感觉。如果误用了 `あげる`,这份暖意就荡然无存。\n\n把对比记清楚:`あげる` = 我给别人(向外);`くれる` = 别人给我(向内)。两者绝不可互换,选错了不仅不地道,更会把这份善意的归属整个颠倒过来。",
      examples: [
        {
          jp: "友達が本をくれる",
          reading: "ともだちがほんをくれる",
          en: "My friend gives me a book.",
          zh: "朋友给我一本书。",
          code: `import type { CommonNoun, PhraseWithParticle } from "typed-japanese";

type 友達 = CommonNoun<"友達">;
type 本 = CommonNoun<"本">;

// 友達 が + 本 を + くれる (recipient = me, omitted)
type 友達が本をくれる = \`\${PhraseWithParticle<友達, "が">}\${PhraseWithParticle<本, "を">}くれる\`;
`,
        },
        {
          jp: "先生が私に辞書をくれました",
          reading: "せんせいがわたしにじしょをくれました",
          en: "The teacher gave me a dictionary.",
          zh: "老师给了我一本词典。",
          code: `import type { CommonNoun, Pronoun, PhraseWithParticle } from "typed-japanese";

type 先生 = CommonNoun<"先生">;
type 私 = Pronoun<"私">;
type 辞書 = CommonNoun<"辞書">;

// 先生 が + 私 に + 辞書 を + くれました (polite past)
type 先生が私に辞書をくれました = \`\${PhraseWithParticle<先生, "が">}\${PhraseWithParticle<私, "に">}\${PhraseWithParticle<辞書, "を">}くれました\`;
`,
        },
      ],
    },
    {
      id: "i13-3",
      titleEn: "もらう — receiving",
      titleZh: "もらう ——「得到 / 收到」",
      bodyEn:
        "`あげる` and `くれる` both put the giver in the driver's seat — the giver is the subject, doing the giving. But sometimes you'd rather tell the story from the receiver's side: \"I got this from my friend.\" English uses the verb \"receive\" for that, and Japanese has its own: `もらう`.\n\nThe pattern is `Receiver は Giver に Object を もらう`. Notice what `に` is doing now — it no longer marks the destination, it marks the source, the person the thing came from (you can also use `から`, \"from\", if you want to make that source feel even more explicit). So the receiver is the topic, and the giver is the starting point of the journey.\n\nThe deep insight here is that one and the same event can be told two ways, depending on whose viewpoint you adopt. 友達が本をくれる zooms in on the giver — \"my friend gives me a book\" — while 私は友達に本をもらう zooms in on you — \"I receive a book from my friend.\" Same book, same friend, same moment, two camera angles.\n\nIn practice, reach for `もらう` when you want yourself to be the topic of the sentence — for instance recounting your day: 私は母にお金をもらいました, \"I got some money from my mother.\" The spotlight naturally falls on you and what you came away with.",
      bodyZh:
        "`あげる` 和 `くれる` 都把授予者放在驾驶座上 —— 授予者是主语,做着「给」的动作。但有时你更想从接受者的角度来讲这件事:「我从朋友那儿得到了这个。」英语用 receive 来表达,日语也有自己的词:`もらう`。\n\n句型为「接受者 は 授予者 に 物 を もらう」。注意这里 `に` 的角色变了 —— 它不再标记目的地,而是标记「来源」,即东西所来自的那个人(若想让来源更醒目,也可以用 `から`「从」)。于是接受者成了话题,授予者则是这趟旅程的起点。\n\n这里最深的一层体会是:同一件事可以从两种视角来讲,全看你站在谁的立场。友達が本をくれる 把镜头对准授予者 ——「朋友给我一本书」;而 私は友達に本をもらう 把镜头对准你 ——「我从朋友那里得到一本书」。同一本书、同一个朋友、同一刻,只是两个机位。\n\n实际运用中,当你想让自己成为句子的话题时就用 `もらう` —— 比如回顾这一天:私は母にお金をもらいました「我从母亲那里收到了钱」。聚光灯自然落在你以及你最后所得到的东西上。",
      examples: [
        {
          jp: "私は友達に本をもらう",
          reading: "わたしはともだちにほんをもらう",
          en: "I receive a book from my friend.",
          zh: "我从朋友那里得到一本书。",
          code: `import type { CommonNoun, Pronoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 私 = Pronoun<"私">;
type 友達 = CommonNoun<"友達">;
type 本 = CommonNoun<"本">;
type もらう = GodanVerb & { stem: "もら"; ending: "う" };

// 私 は + 友達 に (source) + 本 を + もらう (辞書形)
type 私は友達に本をもらう = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<友達, "に">}\${PhraseWithParticle<本, "を">}\${ConjugateVerb<もらう, "Dictionary">}\`;
`,
        },
        {
          jp: "私は母にお金をもらいました",
          reading: "わたしはははにおかねをもらいました",
          en: "I received money from my mother.",
          zh: "我从母亲那里收到了钱。",
          code: `import type { CommonNoun, Pronoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 私 = Pronoun<"私">;
type 母 = CommonNoun<"母">;
type お金 = CommonNoun<"お金">;
type もらう = GodanVerb & { stem: "もら"; ending: "う" };

// 私 は + 母 に + お金 を + もらいました (もらう の丁寧過去)
type 私は母にお金をもらいました = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<母, "に">}\${PhraseWithParticle<お金, "を">}\${ConjugateVerb<もらう, "MasuPast">}\`;
`,
        },
      ],
    },
    {
      id: "i13-4",
      titleEn: "〜てあげる / 〜てくれる — doing a favor",
      titleZh: "〜てあげる / 〜てくれる ——「为某人做某事」",
      bodyEn:
        "Here is where this chapter becomes genuinely powerful. So far you could only give and receive objects — books, flowers, money. But most kindness in real life isn't an object at all; it's an action. Someone carries your bag, fixes your bug, explains the homework. Up to now you had no clean way to say \"he did it for me\" — and this is the gap that giving verbs, glued onto a て-form, fill perfectly.\n\nRecall the て-form from chapter 10, the connector form you used for requests like 〜てください. Japanese reuses that same hook here: take any verb, put it in its て-form, and attach `あげる` or `くれる`. The action itself now becomes the \"gift\" that travels in a direction. `〜てあげる` = I do something for someone else (the favor flows outward); `〜てくれる` = someone does something for me (the favor flows toward me). The exact same directional logic as the plain verbs, just applied to deeds instead of things.\n\nThe mechanics are simple: 教える (to teach) → て-form 教えて; 手伝う (to help) → て-form 手伝って. Then snap `あげる` or `くれる` on the end. That's the entire construction.\n\nTwo everyday scenes show the contrast. Offering to help a classmate study: 私は友達に日本語を教えてあげる, \"I'll teach my friend Japanese (as a favor)\" — outward, so `〜てあげる`. And gratefully reporting that your friend pitched in: 友達が手伝ってくれる, \"my friend helps me out\" — inward, so `〜てくれる`, which lets your gratitude shine through. One small caution: `〜てあげる` can sound a touch self-congratulatory if aimed directly at a superior, so among everyday equals and people below you it's warm, but with the boss you'd soften your phrasing.",
      bodyZh:
        "本章真正的威力从这里开始。到目前为止,你只能授受「物品」—— 书、花、钱。可现实里大多数善意根本不是物品,而是动作:有人帮你拎包、帮你改 bug、帮你讲解作业。此前你没有一种利落的说法来表达「他特地为我做了这件事」—— 而授受动词接在て形之后,正好完美地填上了这个空缺。\n\n回想第 10 章的て形,就是你用来构造 〜てください 这类请求的连接形式。日语在这里重用了同一个挂钩:把任意动词变成它的て形,再接上 `あげる` 或 `くれる`。这下动作本身成了那份带着方向流动的「礼物」。`〜てあげる` = 我为别人做某事(恩惠向外流);`〜てくれる` = 别人为我做某事(恩惠向我流)。方向逻辑和单独的授受动词分毫不差,只是从「物」换成了「事」。\n\n操作很简单:教える(教)→ て形 教えて;手伝う(帮忙)→ て形 手伝って。然后把 `あげる` 或 `くれる` 啪地接上去,整个结构就这样。\n\n两个日常场景能看出对比。主动提出帮同学补习:私は友達に日本語を教えてあげる「我(帮忙)教朋友日语」—— 向外,故用 `〜てあげる`。而满怀感激地讲述朋友出手相助:友達が手伝ってくれる「朋友帮了我的忙」—— 向内,故用 `〜てくれる`,让你的感激之情自然流露。一点小提醒:`〜てあげる` 若直接对上级使用,会略显「我可帮了你」的自夸味,所以在平辈和晚辈之间它温暖得体,面对上司则要把措辞放得更委婉些。",
      examples: [
        {
          jp: "私は友達に日本語を教えてあげる",
          reading: "わたしはともだちににほんごをおしえてあげる",
          en: "I teach my friend Japanese (as a favor).",
          zh: "我(帮忙)教朋友日语。",
          code: `import type { CommonNoun, Pronoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = Pronoun<"私">;
type 友達 = CommonNoun<"友達">;
type 日本語 = CommonNoun<"日本語">;
type 教える = IchidanVerb & { stem: "教え"; ending: "る" };

// 私 は + 友達 に + 日本語 を + 教えて (て形) + あげる
type 私は友達に日本語を教えてあげる = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<友達, "に">}\${PhraseWithParticle<日本語, "を">}\${ConjugateVerb<教える, "Te">}あげる\`;
`,
        },
        {
          jp: "友達が手伝ってくれる",
          reading: "ともだちがてつだってくれる",
          en: "My friend helps me out.",
          zh: "朋友帮了我的忙。",
          code: `import type { CommonNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 友達 = CommonNoun<"友達">;
type 手伝う = GodanVerb & { stem: "手伝"; ending: "う" };

// 友達 が + 手伝って (て形) + くれる
type 友達が手伝ってくれる = \`\${PhraseWithParticle<友達, "が">}\${ConjugateVerb<手伝う, "Te">}くれる\`;
`,
        },
      ],
    },
    {
      id: "i13-5",
      titleEn: "〜てもらう — having someone do something for you",
      titleZh: "〜てもらう ——「请 / 让某人为自己做某事」",
      bodyEn:
        "Just as `もらう` let you retell an object-gift from the receiver's side, `〜てもらう` lets you retell a favor from the receiver's side. This is the form for \"I had someone do something for me\" or \"I got someone to do something\" — you arrange for the action and you benefit from it. It's the everyday way to talk about getting help, services, and favors.\n\nThe pattern is `Receiver は Giver に Verb-て もらう`, with the person who actually does the deed marked by `に` — the same source-marking `に` you met with plain `もらう`. So you're the topic, the doer is the source, and the verb-て carries the action.\n\nLine the two viewpoints up side by side and the system clicks. 友達が手伝ってくれる is the giver's view — \"my friend helps me\" — while 私は友達に手伝ってもらう is the receiver's view — \"I have my friend help me.\" Identical favor, opposite camera angle. Choose whichever subject you want the sentence to be about.\n\nA very common workplace scene: your computer dies, the IT person fixes it, and you report it to a coworker. You'd naturally say something like 私は先生に本を貸してもらいました for \"I had the teacher lend me a book\" — and swap in the tech person and the repair for the office version. One nuance worth knowing: `〜てもらう` quietly implies you wanted or asked for the action, so it carries a polite sense of \"I had it done for me\", which is exactly why it's the go-to phrase for thanking people for services rendered.",
      bodyZh:
        "正如 `もらう` 让你能从接受者的一侧重述一份「物品的馈赠」,`〜てもらう` 则让你从接受者的一侧重述一份「恩惠」。这个形式表达「我请别人为我做某事」或「我让别人做了某事」—— 你促成了这个动作,并从中获益。它是日常谈论得到帮助、服务和恩惠的标准说法。\n\n句型为「接受者 は 施动者 に 动词て もらう」,真正动手做事的人用 `に` 标记 —— 正是你在单独的 `もらう` 中见过的那个标记来源的 `に`。于是你是话题,施动者是来源,而动词て承载着那个动作。\n\n把两种视角并排一摆,整个体系就豁然开朗。友達が手伝ってくれる 是授予者视角 ——「朋友帮我」;而 私は友達に手伝ってもらう 是接受者视角 ——「我请朋友帮忙」。同一份恩惠,相反的机位。你想让句子说的是谁,就选谁当主语。\n\n一个常见的职场画面:你的电脑罢工,IT 同事帮你修好,你向另一位同事讲述这件事。你会很自然地说出类似 私は先生に本を貸してもらいました「我请老师借给我一本书」这样的句子 —— 把人换成技术员、把动作换成修电脑,就是办公室版本。一个值得了解的细微之处:`〜てもらう` 暗含「这个动作是你所希望或请求的」,因而带着「(我)请人替我做」的礼貌语感,这也正是它成为道谢服务时首选表达的原因。",
      examples: [
        {
          jp: "私は友達に手伝ってもらう",
          reading: "わたしはともだちにてつだってもらう",
          en: "I have my friend help me.",
          zh: "我请朋友帮忙。",
          code: `import type { CommonNoun, Pronoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = Pronoun<"私">;
type 友達 = CommonNoun<"友達">;
type 手伝う = GodanVerb & { stem: "手伝"; ending: "う" };

// 私 は + 友達 に (doer) + 手伝って (て形) + もらう
type 私は友達に手伝ってもらう = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<友達, "に">}\${ConjugateVerb<手伝う, "Te">}もらう\`;
`,
        },
        {
          jp: "私は先生に本を貸してもらいました",
          reading: "わたしはせんせいにほんをかしてもらいました",
          en: "I had the teacher lend me a book.",
          zh: "我请老师借给我一本书。",
          code: `import type { CommonNoun, Pronoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = Pronoun<"私">;
type 先生 = CommonNoun<"先生">;
type 本 = CommonNoun<"本">;
type 貸す = GodanVerb & { stem: "貸"; ending: "す" };

// 私 は + 先生 に + 本 を + 貸して (て形) + もらいました (polite past)
type 私は先生に本を貸してもらいました = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<先生, "に">}\${PhraseWithParticle<本, "を">}\${ConjugateVerb<貸す, "Te">}もらいました\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
