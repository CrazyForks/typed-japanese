import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i15",
  level: "intermediate",
  order: 15,
  titleEn: "Nominalization の・こと, 〜とき",
  titleZh: "名词化の・こと与〜とき",
  summaryEn:
    "You want to tell a friend “I like watching movies” — but `好きです` needs a noun in front of it, and “watching movies” is a whole verb clause, not a noun. This chapter gives you the wrapper that fixes that: attach `の` or `こと` to a plain-form clause and the entire action becomes a single noun that can take `を`, `が`, or `は` and slot in anywhere. We then meet `〜とき` (“when…”), which lets a clause modify the noun “time” so you can pin any event to a moment — “when I was a child…”, “when you arrive…”.",
  summaryZh:
    "你想告诉朋友「我喜欢看电影」—— 可 `好きです` 前面需要一个名词,而「看电影」是一整个动词小句,并不是名词。本章给你解决这个问题的「包装器」:在简体形小句后加上 `の` 或 `こと`,整个动作就变成一个名词,可以接 `を`、`が`、`は`,自由嵌入任何位置。接着我们会认识 `〜とき`(「……的时候」):它让一个小句修饰「時(时间)」这个名词,从而把任何事件锚定到某个时刻 ——「小时候……」「你到了的时候……」。",
  points: [
    {
      id: "i15-1",
      titleEn: "の as a nominalizer",
      titleZh: "名词化标记 の",
      bodyEn:
        "Back in chapter 12 you nominalized with `こと` in fixed frames like `〜ことができる`, and in chapter 2 you met `の` as the little linker in `私の本` (my book). Now those threads come together. Up to now, though, you could only feed a bare noun into slots like `〜が好きです`; you had no way to say “I like the act of eating”, because “to eat” is a verb, not a noun. You need a way to package a whole action as a noun.\n\nThat is exactly what `の` does here. Take the plain form of a verb or adjective — the dictionary form you drilled in chapter 12 — and stick `の` on the end: `食べる` (to eat) becomes `食べるの` (the act of eating). The clause is now a noun phrase, so it can take any particle you already know: `を`, `が`, `は`, and so on.\n\nWhy `の` and not something heavier? Because `の` feels concrete, immediate, perceptual — the things you directly see, hear, like, dislike, or are good or bad at. It keeps the action vivid, as if you can point at it. So when you tell a friend `食べるのが好きです`, you are saying “I like eating” with the warmth of a real, lived habit.\n\nIt scales to longer clauses too. To weigh in during a study chat you might say `日本語を話すのは難しい` — “Speaking Japanese is hard.” The whole clause `日本語を話す` gets wrapped by `の`, marked with `は` as the topic, and then judged by `難しい`. One tip: in casual speech `の` often softens to `ん`, so don’t be surprised to hear `食べるんです`.",
      bodyZh:
        "在第 12 章里,你曾用 `こと` 在 `〜ことができる` 这类固定句型中做名词化;第 2 章里你又见过 `の` 作为 `私の本`(我的书)中的小连接词。现在这两条线索汇合了。可到目前为止,你只能把一个光秃秃的名词塞进 `〜が好きです` 这样的位置;却没办法说「我喜欢吃这个动作」,因为「吃」是动词,不是名词。你需要一种把整个动作打包成名词的办法。\n\n这正是这里 `の` 的作用。取动词或形容词的简体形 —— 也就是你在第 12 章练过的辞书形 —— 在末尾加上 `の`:`食べる`(吃)就变成 `食べるの`(吃这件事)。这个小句现在成了名词性短语,于是能接你早已熟悉的任何助词:`を`、`が`、`は` 等等。\n\n为什么用 `の` 而不用更厚重的标记?因为 `の` 给人具体、即时、可感知的感觉 —— 是你直接看到、听到、喜欢、讨厌、或擅长/不擅长的事物。它让动作保持鲜活,仿佛触手可指。所以当你对朋友说 `食べるのが好きです` 时,你说的「我喜欢吃东西」带着真实生活习惯的温度。\n\n它对更长的小句同样适用。在学习闲聊中发表看法,你可以说 `日本語を話すのは難しい` ——「说日语很难。」整个小句 `日本語を話す` 被 `の` 包起来,用 `は` 标为话题,再由 `難しい` 来评判。一个小提示:口语中 `の` 常会软化为 `ん`,所以听到 `食べるんです` 也别意外。",
      examples: [
        {
          jp: "食べるのが好きです",
          reading: "たべるのがすきです",
          en: "I like eating.",
          zh: "我喜欢吃东西。",
          code: `import type { IchidanVerb, ConjugateVerb, NaAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };
type 好き = NaAdjective & { stem: "好き" };

// 食べる (辞書形) + の (nominalizer) + が + 好き (丁寧形 = 好きです)
type 食べるのが好きです = \`\${PhraseWithParticle<\`\${ConjugateVerb<食べる, "辞書形">}の\`, "が">}\${ConjugateAdjective<好き, "丁寧形">}\`;
`,
        },
        {
          jp: "日本語を話すのは難しい",
          reading: "にほんごをはなすのはむずかしい",
          en: "Speaking Japanese is difficult.",
          zh: "说日语很难。",
          code: `import type { GodanVerb, ConjugateVerb, IAdjective, ConjugateAdjective, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 日本語 = ProperNoun<"日本語">;
type 話す = GodanVerb & { stem: "話"; ending: "す" };
type 難しい = IAdjective & { stem: "難し"; ending: "い" };

// 日本語 + を + 話す (辞書形) + の + は + 難しい (基本形)
type 日本語を話すのは難しい = \`\${PhraseWithParticle<日本語, "を">}\${PhraseWithParticle<\`\${ConjugateVerb<話す, "辞書形">}の\`, "は">}\${ConjugateAdjective<難しい, "基本形">}\`;
`,
        },
      ],
    },
    {
      id: "i15-2",
      titleEn: "こと as a nominalizer",
      titleZh: "名词化标记 こと",
      bodyEn:
        "You just saw `の` package a clause as a concrete, perceived thing. But sometimes the action you want to talk about isn’t something you can point at — it’s a fact, a habit, a rule, a definition. Saying “my hobby is reading books” isn’t about watching a particular moment of reading; it’s a general truth about you. For that, `の` feels a touch too vivid, and Japanese reaches for `こと` instead.\n\n`こと` nominalizes a plain-form clause just like `の`, but it leans abstract. `日本語を話すことは難しい` is perfectly correct — same meaning as the `の` version, only a shade more bookish and detached, the way a textbook or a thoughtful remark would phrase it. When you state your hobby, `私の趣味は本を読むことです`, `こと` is the natural choice because you’re defining a category of yourself, not narrating a scene.\n\nHere’s the practical payoff: some patterns lock you into one choice. `こと` is required before the copula in definitions (as in the hobby sentence), and it’s baked into set expressions you already know — `〜ことができる` (can do) from chapter 12, and `〜ことがある` (there are times when…). So `日本語を話すことができます` keeps `こと` not by style but by rule.\n\nThe mirror-image rule is just as firm: verbs of direct perception like `見る` (see) and `聞こえる` (be audible) demand `の`, never `こと` — you’d say `彼が出るのを見た`, because seeing is concrete by nature. A good rule of thumb: when in doubt and the clause is something sensed in the moment, choose `の`; when it’s a fact, plan, or set phrase, choose `こと`.",
      bodyZh:
        "你刚看到 `の` 把小句打包成一个具体、可感知的事物。但有时你想谈的动作并不是能用手指点出来的东西 —— 而是一个事实、一种习惯、一条规则、一项定义。说「我的爱好是读书」并不是在看某个具体的读书瞬间;那是关于你的一般性真理。对此,`の` 显得过于鲜活了,日语转而采用 `こと`。\n\n`こと` 和 `の` 一样把简体形小句名词化,但它更偏抽象。`日本語を話すことは難しい` 完全正确 —— 意思与 `の` 的版本相同,只是略显书面、客观,像教科书或一句深思熟虑的评论那样的措辞。当你说出自己的爱好 `私の趣味は本を読むことです` 时,`こと` 是自然之选,因为你是在定义自己的一个范畴,而不是在描述一个场景。\n\n这里有实用的回报:有些句型把你锁定为唯一选择。下定义接系动词时必须用 `こと`(如爱好那句),而且它早已嵌入你熟悉的固定表达 —— 第 12 章的 `〜ことができる`(能够),以及 `〜ことがある`(有时会……)。所以 `日本語を話すことができます` 保留 `こと` 不是出于文风,而是出于规则。\n\n与之镜像的规则同样刚硬:`見る`(看)、`聞こえる`(听得见)这类直接感知动词只能用 `の`,绝不用 `こと` —— 你会说 `彼が出るのを見た`,因为「看见」天生就是具体的。一条好用的经验法则:拿不准时,若小句是当下感知到的事,选 `の`;若是事实、计划或固定短语,选 `こと`。",
      examples: [
        {
          jp: "日本語を話すことは難しい",
          reading: "にほんごをはなすことはむずかしい",
          en: "Speaking Japanese is difficult.",
          zh: "说日语是很难的。",
          code: `import type { GodanVerb, ConjugateVerb, IAdjective, ConjugateAdjective, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 日本語 = ProperNoun<"日本語">;
type 話す = GodanVerb & { stem: "話"; ending: "す" };
type 難しい = IAdjective & { stem: "難し"; ending: "い" };

// 日本語 + を + 話す (辞書形) + こと + は + 難しい (基本形)
type 日本語を話すことは難しい = \`\${PhraseWithParticle<日本語, "を">}\${PhraseWithParticle<\`\${ConjugateVerb<話す, "辞書形">}こと\`, "は">}\${ConjugateAdjective<難しい, "基本形">}\`;
`,
        },
        {
          jp: "私の趣味は本を読むことです",
          reading: "わたしのしゅみはほんをよむことです",
          en: "My hobby is reading books.",
          zh: "我的爱好是读书。",
          code: `import type { GodanVerb, ConjugateVerb, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 私の趣味 = ProperNoun<"私の趣味">;
type 本 = ProperNoun<"本">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };

// 私の趣味 + は + 本 + を + 読む (辞書形) + こと + です
type 私の趣味は本を読むことです = \`\${PhraseWithParticle<私の趣味, "は">}\${PhraseWithParticle<本, "を">}\${ConjugateVerb<読む, "辞書形">}ことです\`;
`,
        },
        {
          jp: "日本語を話すことができます",
          reading: "にほんごをはなすことができます",
          en: "I can speak Japanese.",
          zh: "我会说日语。",
          code: `import type { GodanVerb, ConjugateVerb, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 日本語 = ProperNoun<"日本語">;
type 話す = GodanVerb & { stem: "話"; ending: "す" };

// 日本語 + を + 話す (辞書形) + こと + が + できます
type 日本語を話すことができます = \`\${PhraseWithParticle<日本語, "を">}\${PhraseWithParticle<\`\${ConjugateVerb<話す, "辞書形">}こと\`, "が">}できます\`;
`,
        },
      ],
    },
    {
      id: "i15-3",
      titleEn: "〜とき — “when…”",
      titleZh: "〜とき ——「……的时候」",
      bodyEn:
        "There’s one more thing a nominalized clause unlocks. In chapter 6 you marked a point in time with `に` — but only for clock times and dates. You couldn’t yet anchor an event to another event: “when I read books…”, “when I was a child…”. What you need is a noun meaning “time” that a whole clause can modify — and Japanese has exactly that in `とき` (時, “time”).\n\nThe pattern is `[clause] とき、[main clause]` = “when [clause], [main clause]”. This is the same clause-modifies-noun move you saw in chapter 13, just aimed at the noun “time”: the clause before `とき` says which time you mean. How it attaches depends on the word type. A verb or i-adjective in plain form links directly — `本を読むとき` (when I read), `寒いとき` (when it’s cold). A noun or na-adjective links with the `の` from chapter 2 — `子供のとき` (when I was a child), literally “the time of being a child”.\n\nPicture the everyday scenes. Settling in to read, you explain a habit: `本を読むとき、眼鏡をかけます` — “When I read, I put on glasses.” Reminiscing with a friend over old photos: `子供のとき、よく泣きました` — “When I was a child, I cried a lot.” Glancing at the forecast before heading out: `寒いとき、コートを着ます` — “When it’s cold, I wear a coat.” In each, `とき` quietly sets the scene before the main action lands.\n\nOne subtlety to file away for later: the tense of the verb right before `とき` is relative, not absolute. Dictionary form means the main action happens before or during that event, while `た`-form means it happens after. Here we stay with the basic dictionary-form pattern, but it’s worth knowing the verb’s ending is doing real timing work.",
      bodyZh:
        "名词化的小句还能解锁一件事。第 6 章里你用 `に` 标记时间点 —— 但只限于钟点和日期。你还无法把一个事件锚定到另一个事件上:「读书的时候……」「小时候……」。你需要的是一个表示「时间」、且能被整个小句修饰的名词 —— 日语里正好有这样一个词:`とき`(時,「时候」)。\n\n句型是 `[小句] とき、[主句]` =「当[小句]时,[主句]」。这正是你在第 13 章见过的「小句修饰名词」的操作,只是对象换成了「時」这个名词:`とき` 前的小句说明你指的是哪个时刻。怎么接续取决于词类。简体形的动词或イ形容词直接连接 —— `本を読むとき`(读书时)、`寒いとき`(天冷时)。名词或ナ形容词则用第 2 章的 `の` 连接 —— `子供のとき`(小时候),字面意为「身为孩子的那段时间」。\n\n想象那些日常场景。坐下来准备阅读,你解释一个习惯:`本を読むとき、眼鏡をかけます` ——「看书时,我会戴眼镜。」和朋友翻看旧照片忆当年:`子供のとき、よく泣きました` ——「小时候,我经常哭。」出门前瞥一眼天气预报:`寒いとき、コートを着ます` ——「天冷的时候,我会穿大衣。」每一句里,`とき` 都在主要动作落地之前悄悄铺好了场景。\n\n有一处细微之处先记下,留待日后:`とき` 前动词的时态是相对的,而非绝对的。辞书形表示主句动作发生在该事件之前或同时,而 `た` 形表示发生在其之后。这里我们只用最基本的辞书形句型,但要明白:动词的词尾正在实打实地承担时间定位的工作。",
      examples: [
        {
          jp: "本を読むとき、眼鏡をかけます",
          reading: "ほんをよむとき、めがねをかけます",
          en: "When I read books, I wear glasses.",
          zh: "看书的时候,我会戴眼镜。",
          code: `import type { GodanVerb, IchidanVerb, ConjugateVerb, ProperNoun, PhraseWithParticle, ConnectedPhrases } from "typed-japanese";

type 本 = ProperNoun<"本">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };
type 眼鏡 = ProperNoun<"眼鏡">;
type かける = IchidanVerb & { stem: "かけ"; ending: "る" };

type 本を読むとき = \`\${PhraseWithParticle<本, "を">}\${ConjugateVerb<読む, "辞書形">}とき\`;
type 眼鏡をかけます = \`\${PhraseWithParticle<眼鏡, "を">}\${ConjugateVerb<かける, "ます形">}ます\`;

// 本を読むとき + 、 + 眼鏡をかけます
type 本を読むとき眼鏡をかけます = ConnectedPhrases<本を読むとき, 眼鏡をかけます>;
`,
        },
        {
          jp: "子供のとき、よく泣きました",
          reading: "こどものとき、よくなきました",
          en: "When I was a child, I cried a lot.",
          zh: "小时候,我经常哭。",
          code: `import type { GodanVerb, ConjugateVerb, ProperNoun, PhraseWithParticle, ConnectedPhrases } from "typed-japanese";

type 子供 = ProperNoun<"子供">;
type よく = ProperNoun<"よく">;
type 泣く = GodanVerb & { stem: "泣"; ending: "く" };

// 子供 + の + とき
type 子供のとき = \`\${PhraseWithParticle<子供, "の">}とき\`;
// よく + 泣き (ます形) + ました
type よく泣きました = \`\${よく}\${ConjugateVerb<泣く, "ます形">}ました\`;

type 子供のときよく泣きました = ConnectedPhrases<子供のとき, よく泣きました>;
`,
        },
        {
          jp: "寒いとき、コートを着ます",
          reading: "さむいとき、コートをきます",
          en: "When it's cold, I wear a coat.",
          zh: "天冷的时候,我会穿大衣。",
          code: `import type { IAdjective, ConjugateAdjective, IchidanVerb, ConjugateVerb, ProperNoun, PhraseWithParticle, ConnectedPhrases } from "typed-japanese";

type 寒い = IAdjective & { stem: "寒"; ending: "い" };
type コート = ProperNoun<"コート">;
type 着る = IchidanVerb & { stem: "着"; ending: "る" };

// 寒い (基本形) + とき
type 寒いとき = \`\${ConjugateAdjective<寒い, "基本形">}とき\`;
// コート + を + 着 (ます形) + ます
type コートを着ます = \`\${PhraseWithParticle<コート, "を">}\${ConjugateVerb<着る, "ます形">}ます\`;

type 寒いときコートを着ます = ConnectedPhrases<寒いとき, コートを着ます>;
`,
        },
      ],
    },
  ],
};

export default chapter;
