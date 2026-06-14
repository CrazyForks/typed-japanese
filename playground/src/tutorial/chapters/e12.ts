import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e12",
  level: "elementary",
  order: 12,
  titleEn: "Dictionary form & ability",
  titleZh: "辞书形与能力",
  summaryEn:
    "You're on a date and you want to say \"I like cooking\" — or a friend asks \"can you swim?\" Until now you could say you do an action with the polite `〜ます` form, but not that you can do it or that you enjoy doing it. This chapter unlocks the verb's bare dictionary form, shows how `こと` turns a whole action into a noun, and uses that to express ability (〜ことができる) and preference (〜ことが好きだ).",
  summaryZh:
    "想象你在约会,想说「我喜欢做饭」—— 或者朋友问你「你会游泳吗?」到目前为止,你能用礼貌的 `〜ます` 形说自己「做」某个动作,却还不能说自己「能」做或「喜欢」做。本章解锁动词的原形(辞书形),教你用 `こと` 把整个动作变成名词,再用它来表达能力(〜ことができる)和喜好(〜ことが好きだ)。",
  points: [
    {
      id: "e12-1",
      titleEn: "Dictionary form (辞書形)",
      titleZh: "辞书形(辞書形)",
      bodyEn:
        "Back in chapter 5 you learned the polite `〜ます` form: `食べます` (eat), `読みます` (read). That form is wonderful for being courteous, but it isn't the verb's \"real name\" — it's a dressed-up outfit. Every verb also has a plain, uninflected shape called the dictionary form (辞書形), and it's exactly what you'd find if you looked the verb up in a dictionary.\n\nThe dictionary form is the casual twin of the `ます` form, carrying the same present/future meaning: `食べる` means the same as `食べます` (\"eat\"), just spoken plainly to a close friend rather than politely to a stranger. So `私は寿司を食べる` is simply the relaxed version of \"I eat sushi.\"\n\nWhy bother, when `ます` already works? Because the dictionary form is the connection point for a huge amount of grammar. Patterns don't attach to `食べます`; they attach to `食べる`. Everything later in this chapter — and many chapters to come — clips onto this bare form.\n\nIt's worth knowing the three families. `る`-verbs (ichidan) end in `る`, like `食べる`. `う`-verbs (godan) end in one of `う く ぐ す つ ぬ ぶ む る`, like `読む`. And there are exactly two irregulars to memorize: `する` (do) and `来る` (come). For now, just get comfortable seeing `〜る` and `〜む` as a verb's natural resting state.",
      bodyZh:
        "在第 5 章你学过礼貌的 `〜ます` 形:`食べます`(吃)、`読みます`(读)。这种形式很适合表达礼貌,但它并不是动词的「本名」—— 更像是一身正装。其实每个动词还有一个不经活用的原始形态,叫辞书形(辞書形),也就是你在词典里查到的样子。\n\n辞书形是 `ます` 形的简体双胞胎,意思完全一样,同样表示现在/将来:`食べる` 和 `食べます`(吃)意思相同,只是对熟悉的朋友随意地说,而非对陌生人客气地说。所以 `私は寿司を食べる` 就是「我吃寿司」的轻松版本。\n\n既然 `ます` 已经够用,为什么还要学它?因为辞书形是大量语法的接口。句型不会接在 `食べます` 后面,而是接在 `食べる` 后面。本章后续 —— 以及今后许多章 —— 的内容,都是直接挂在这个原形上的。\n\n顺便认识一下三大类。一类动词(一段动词)以 `る` 结尾,如 `食べる`。五段动词以 `う く ぐ す つ ぬ ぶ む る` 之一结尾,如 `読む`。另外有两个需要记住的不规则动词:`する`(做)和 `来る`(来)。现在你只需习惯把 `〜る`、`〜む` 看作动词最自然的本来面貌。",
      examples: [
        {
          jp: "私は寿司を食べる",
          reading: "わたしはすしをたべる",
          en: "I eat sushi.",
          zh: "我吃寿司。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 寿司 = ProperNoun<"寿司">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// 私 + は + 寿司 + を + 食べる(辞書形)
type 私は寿司を食べる = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<寿司, "を">}\${ConjugateVerb<食べる, "辞書形">}\`;
`,
        },
        {
          jp: "毎日本を読む",
          reading: "まいにちほんをよむ",
          en: "(I) read books every day.",
          zh: "(我)每天看书。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 毎日 = ProperNoun<"毎日">;
type 本 = ProperNoun<"本">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };

// 毎日 + 本 + を + 読む(辞書形)
type 毎日本を読む = \`\${毎日}\${PhraseWithParticle<本, "を">}\${ConjugateVerb<読む, "辞書形">}\`;
`,
        },
      ],
    },
    {
      id: "e12-2",
      titleEn: "Nominalizing with こと",
      titleZh: "用 こと 名词化",
      bodyEn:
        "Here's a wall you keep hitting. You know how to say what you do — `本を読む` (I read books) — but you don't yet have a way to talk about that action itself: \"reading is fun,\" \"reading is my hobby.\" In those sentences \"reading\" isn't a verb anymore, it's a thing, a topic you can comment on. English does this by adding \"-ing\" or saying \"the act of reading.\" Japanese needs a tool for the same job.\n\nThat tool is `こと`. Place `こと` right after a dictionary-form verb and the whole action collapses into a noun-like concept: `読む` (to read) becomes `読むこと` (reading / the act of reading). In chapter 2 you saw `の` link nouns together; `こと` does something related but bigger — it packages an entire action so it can behave like a noun.\n\nAnd once something behaves like a noun, it can take the particles you already know. `読むこと` can be the topic with `は`, the subject with `が`, even an object. In `泳ぐことは楽しい`, \"the act of swimming\" is the topic and `楽しい` (fun, an `い`-adjective from chapter 8) comments on it.\n\nThis little move — verb into dictionary form, then add `こと` — is the engine behind everything else in this chapter. The two big patterns ahead, ability and preference, both start by turning a verb into a thing and then talking about that thing.",
      bodyZh:
        "你一直会撞上这样一堵墙。你会说自己做什么 —— `本を読む`(我看书)—— 却还没有办法去「谈论」这个动作本身:「读书很有趣」、「读书是我的爱好」。在这些句子里,「读书」已经不是动词,而是一个事物、一个可以评论的话题。英语用「-ing」或「the act of reading」来处理;日语也需要一个工具来做同样的事。\n\n这个工具就是 `こと`。把 `こと` 紧接在辞书形动词后面,整个动作就收拢成一个名词性概念:`読む`(读)变成 `読むこと`(读书这件事 / 阅读)。第 2 章你见过 `の` 连接名词;`こと` 做的是相关但更大的事 —— 它把一整个动作打包,使它能像名词一样运作。\n\n一旦某物能像名词那样运作,就能接你已经会的助词。`読むこと` 可以用 `は` 作话题,用 `が` 作主语,甚至作宾语。在 `泳ぐことは楽しい` 里,「游泳这件事」是话题,而 `楽しい`(有趣,第 8 章的 `い` 形容词)对它作出评论。\n\n这个小动作 —— 动词变辞书形,再加 `こと` —— 是本章其余内容的引擎。接下来的两大句型,能力与喜好,都是先把动词变成一个「东西」,再来谈论这个东西。",
      examples: [
        {
          jp: "泳ぐことは楽しい",
          reading: "およぐことはたのしい",
          en: "Swimming is fun.",
          zh: "游泳很开心。",
          code: `import type { GodanVerb, ConjugateVerb, IAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 泳ぐ = GodanVerb & { stem: "泳"; ending: "ぐ" };
type 楽しい = IAdjective & { stem: "楽し"; ending: "い" };

// 泳ぐ(辞書形) + こと + は + 楽しい(基本形)
type 泳ぐことは楽しい = \`\${PhraseWithParticle<\`\${ConjugateVerb<泳ぐ, "辞書形">}こと\`, "は">}\${ConjugateAdjective<楽しい, "基本形">}\`;
`,
        },
        {
          jp: "本を読むことが好きです",
          reading: "ほんをよむことがすきです",
          en: "(I) like reading books.",
          zh: "(我)喜欢看书。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, NaAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 本 = ProperNoun<"本">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };
type 好き = NaAdjective & { stem: "好き" };

// 本を + 読むこと + が + 好きです(丁寧形)
type 本を読むことが好きです = \`\${PhraseWithParticle<本, "を">}\${PhraseWithParticle<\`\${ConjugateVerb<読む, "辞書形">}こと\`, "が">}\${ConjugateAdjective<好き, "丁寧形">}\`;
`,
        },
      ],
    },
    {
      id: "e12-3",
      titleEn: "Ability: 〜ことができる",
      titleZh: "能力:〜ことができる",
      bodyEn:
        "Picture meeting someone new who asks what languages you speak. You can already say `日本語を話します` (\"I speak Japanese\"), but that just reports the activity — it doesn't say you are able to do it. To claim ability, you need a new pattern, and now that you can nominalize with `こと`, it falls right into place.\n\nThe pattern is `[dictionary verb] + ことができる`, literally \"the act of …-ing is possible.\" Here `できる` is the potential form of `する` — it means \"can be done.\" So `話すことができる` reads as \"the act of speaking can be done,\" which is just a precise way of saying \"can speak.\" The polite version, which you'd use with that new acquaintance, is `ことができます`: `私は日本語を話すことができます` — \"I can speak Japanese.\"\n\nNotice the architecture, because it's the same `こと`-as-a-noun trick from before. First the verb becomes a thing (`話すこと`, \"speaking\"), then `が` marks that thing as the subject, then `できる` declares it possible. To brag that you can play the guitar, swap the verb in and you're done: `ピアノを弾くことができる` for piano follows the identical mold.\n\nThis is one of two ways to express ability in Japanese — the other is the verb's potential form, which you'll meet later. The `ことができる` route is slightly more formal and reassuringly uniform: it attaches to every verb the same way, with no special conjugation to memorize. When in doubt, this pattern always works.",
      bodyZh:
        "想象你刚认识一个人,对方问你会说什么语言。你已经会说 `日本語を話します`(「我说日语」),但那只是在陈述这个活动 —— 并没有说你「能」做到。要表达能力,你需要一个新句型,而既然你已经会用 `こと` 名词化,它自然就到位了。\n\n句型是 `[辞书形动词] + ことができる`,字面意思是「做……这件事是可能的」。这里 `できる` 是 `する` 的可能形 —— 意思是「能被做到」。所以 `話すことができる` 读作「说话这件事能做到」,正是「会说」的一种精确表达。对那位新朋友该用的礼貌形是 `ことができます`:`私は日本語を話すことができます` ——「我会说日语」。\n\n请留意这个结构,因为它正是前面 `こと` 化名词的老把戏。先让动词变成一个事物(`話すこと`,「说话」),再用 `が` 把它标记为主语,最后用 `できる` 宣告它可行。想炫耀你会弹钢琴,只要换掉动词就行:钢琴的 `ピアノを弾くことができる` 套的是一模一样的模子。\n\n这是日语表达能力的两种方式之一 —— 另一种是动词的可能形,你以后会学到。`ことができる` 这条路略显郑重,而且令人安心地统一:它对所有动词都用同样的方式连接,没有特殊活用要背。拿不准时,这个句型永远管用。",
      examples: [
        {
          jp: "私は日本語を話すことができます",
          reading: "わたしはにほんごをはなすことができます",
          en: "I can speak Japanese.",
          zh: "我会说日语。",
          code: `import type { ProperNoun, GodanVerb, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 日本語 = ProperNoun<"日本語">;
type 話す = GodanVerb & { stem: "話"; ending: "す" };
type する = IrregularVerb & { dictionary: "する" };

// できます = する の可能形(でき) + ます
// 私は + 日本語を + 話すこと + が + できます
type 私は日本語を話すことができます = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<日本語, "を">}\${PhraseWithParticle<\`\${ConjugateVerb<話す, "辞書形">}こと\`, "が">}\${ConjugateVerb<する, "可能形">}ます\`;
`,
        },
        {
          jp: "彼はピアノを弾くことができる",
          reading: "かれはピアノをひくことができる",
          en: "He can play the piano.",
          zh: "他会弹钢琴。",
          code: `import type { ProperNoun, GodanVerb, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type ピアノ = ProperNoun<"ピアノ">;
type 弾く = GodanVerb & { stem: "弾"; ending: "く" };
type する = IrregularVerb & { dictionary: "する" };

// できる = する の可能形(でき) + る
type 彼はピアノを弾くことができる = \`\${PhraseWithParticle<彼, "は">}\${PhraseWithParticle<ピアノ, "を">}\${PhraseWithParticle<\`\${ConjugateVerb<弾く, "辞書形">}こと\`, "が">}\${ConjugateVerb<する, "可能形">}る\`;
`,
        },
      ],
    },
    {
      id: "e12-4",
      titleEn: "Preference: 〜ことが好きだ",
      titleZh: "喜好:〜ことが好きだ",
      bodyEn:
        "Now the date scenario from the opening. You want to say \"I like cooking,\" but `好き` (suki, \"liked / favorite\") is a `な`-adjective — the kind you met in chapter 8 — and there's a quirk: the thing you like is marked not with `を` but with `が`. You'd say `寿司が好きだ` for \"I like sushi.\" So how do you like an action rather than an object?\n\nYou already have the answer: nominalize it. Turn the verb into a `こと` noun, then run it through the same frame. `[dictionary verb] + ことが好きだ` literally says \"the act of …-ing is liked (by me).\" So `泳ぐことが好きだ` is \"I like swimming,\" and politely `ことが好きです` — perfect for `母は料理をすることが好きです`, \"my mother likes cooking.\" Notice `する` (do) nominalizes to `すること`, letting `料理をする` (to cook) become the thing she likes.\n\nThe `が` here is the same `が` that marks any liked object; it's just that the object happens to be a packaged action. This is exactly why chapter 2's noun machinery and this chapter's `こと` fit together so neatly — once an action is a noun, the noun-level grammar simply reuses itself.\n\nAnd the payoff is broad: this very frame works for `嫌い` (disliked), and for `上手` / `下手` (good at / bad at) — any adjective that takes `が` for its target. Learn the shape once with `好き`, and you can suddenly say what you love, what you can't stand, and what you're skilled at, all by swapping in a different `な`-adjective at the end.",
      bodyZh:
        "回到开头的约会场景。你想说「我喜欢做饭」,但 `好き`(suki,「喜欢的、喜爱的」)是个 `な` 形容词 —— 就是第 8 章学过的那种 —— 而且有个特点:所喜欢的对象不用 `を`,而用 `が` 标记。说「我喜欢寿司」要说 `寿司が好きだ`。那么,如何去喜欢一个「动作」而非一个物品呢?\n\n你已经有答案了:把它名词化。把动词变成 `こと` 名词,再套进同一个框架。`[辞书形动词] + ことが好きだ` 字面意思是「做……这件事(我)喜欢」。所以 `泳ぐことが好きだ` 是「我喜欢游泳」,礼貌形为 `ことが好きです` —— 正好用在 `母は料理をすることが好きです`,「我妈妈喜欢做饭」。注意 `する`(做)名词化成 `すること`,让 `料理をする`(做饭)变成她喜欢的那个事物。\n\n这里的 `が` 和标记任何喜欢对象的 `が` 是同一个;只不过这个对象恰好是一个被打包的动作。这正是为什么第 2 章的名词机制和本章的 `こと` 能严丝合缝地配合 —— 一旦动作成了名词,名词层面的语法就直接复用了起来。\n\n而回报很丰厚:这同一个框架也适用于 `嫌い`(讨厌),以及 `上手` / `下手`(擅长 / 不擅长)—— 凡是用 `が` 接对象的形容词都行。用 `好き` 把这个结构学会一次,你就能突然表达你热爱什么、受不了什么、擅长什么,只需在末尾换上不同的 `な` 形容词。",
      examples: [
        {
          jp: "私は泳ぐことが好きだ",
          reading: "わたしはおよぐことがすきだ",
          en: "I like swimming.",
          zh: "我喜欢游泳。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, NaAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 泳ぐ = GodanVerb & { stem: "泳"; ending: "ぐ" };
type 好き = NaAdjective & { stem: "好き" };

// 好きだ = 好き(な形容詞) + だ
// 私は + 泳ぐこと + が + 好き + だ
type 私は泳ぐことが好きだ = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<\`\${ConjugateVerb<泳ぐ, "辞書形">}こと\`, "が">}\${好き["stem"]}だ\`;
`,
        },
        {
          jp: "母は料理をすることが好きです",
          reading: "はははりょうりをすることがすきです",
          en: "My mother likes cooking.",
          zh: "我妈妈喜欢做饭。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, NaAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 母 = ProperNoun<"母">;
type 料理 = ProperNoun<"料理">;
type する = IrregularVerb & { dictionary: "する" };
type 好き = NaAdjective & { stem: "好き" };

// 母は + 料理を + すること + が + 好きです(丁寧形)
type 母は料理をすることが好きです = \`\${PhraseWithParticle<母, "は">}\${PhraseWithParticle<料理, "を">}\${PhraseWithParticle<\`\${ConjugateVerb<する, "辞書形">}こと\`, "が">}\${ConjugateAdjective<好き, "丁寧形">}\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
