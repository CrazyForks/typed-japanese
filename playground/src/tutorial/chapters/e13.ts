import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e13",
  level: "elementary",
  order: 13,
  titleEn: "Plain (casual) form",
  titleZh: "简体(普通)形",
  summaryEn:
    "You're at an izakaya with a close friend, you take a sip and want to say \"this is good\" — but everything you've learned so far ends in stiff, polite `です/ます`, which would sound oddly formal across the table. Japanese has a second register, the plain (casual) style, used with family and friends, and it turns out to be the structural core of the language: polite forms are actually built on top of it. This chapter assembles the casual counterparts you already half-know — the dictionary form, the past `た形`, a new negative `ない形`, the casual copula `だ` versus `です` — and shows how casual sentences end.",
  summaryZh:
    "你和好友在居酒屋,喝了一口想说「这个好喝」——可你目前学过的句子全都以生硬礼貌的 `です/ます` 结尾,在饭桌上对朋友说反而显得见外。日语还有第二种语体:简体(普通体),用于家人和朋友之间;而它其实是整门语言的结构核心——礼貌体正是搭建在它之上的。本章把你早已半熟的那些casual对应形式组装起来:辞书形、过去的 `た形`、新的否定 `ない形`、简体系动词 `だ` 与 `です` 的区别,以及简体句如何收尾。",
  points: [
    {
      id: "e13-1",
      titleEn: "Plain non-past = the dictionary form",
      titleZh: "简体非过去 = 辞书形",
      bodyEn:
        "Since chapter 5 you've ended every action sentence with polite `〜ます`: `飲みます`, `食べます`. That's perfect for a waiter or a stranger, but with a roommate it lands like wearing a suit to breakfast. The casual register needs a plainer ending — and you already met it last chapter as the dictionary form (`辞書形`), the shape you look up in a dictionary.\n\nHere's the satisfying part: that very dictionary form IS the plain non-past affirmative. There's nothing new to memorize. `飲みます` (polite) is just `飲む` (plain); `食べます` is `食べる`; `します` is `する`. You strip off the polite `ます` and let the bare verb stand as the whole sentence. Like the polite form, it covers both present and future — `飲む` is \"(I) drink\" or \"(I'll) drink\" depending on context.\n\nWhy does Japanese reuse the dictionary form this way? Because plain form is the engine and polite form is the costume layered on top. The dictionary form is the natural \"default\" verb, so casual speech simply uses the verb as-is.\n\nSo muttering your plans to a friend, `私はコーヒーを飲む` is just \"I drink coffee\" / \"I'll have coffee\", and `明日学校へ来る` is \"I'll come to school tomorrow\" — same particles `は`, `へ` you already know, only the ending relaxes from `〜ます` down to the dictionary form.",
      bodyZh:
        "从第五章起,你的每个动作句都以礼貌体 `〜ます` 结尾:`飲みます`、`食べます`。对服务员或陌生人这很合适,但对室友说就像吃早饭还穿西装。简体语体需要一个更朴素的结尾——而你上一章其实已经见过它,就是辞书形(`辞書形`),也就是查字典时的那个形式。\n\n令人愉快的地方在于:这个辞书形本身就是简体非过去肯定式,没有任何新东西要背。`飲みます`(礼貌体)就是 `飲む`(简体);`食べます` 就是 `食べる`;`します` 就是 `する`。你只需去掉礼貌的 `ます`,让光秃秃的动词独立成句。和礼貌体一样,它兼表现在与将来——`飲む` 视语境可以是「(我)喝」或「(我要)喝」。\n\n日语为什么这样复用辞书形?因为简体形才是发动机,礼貌体只是套在外面的外衣。辞书形是动词最自然的「默认形态」,所以口语就直接拿动词原样来用。\n\n于是对朋友念叨打算时,`私はコーヒーを飲む` 就是「我喝咖啡/我要来杯咖啡」,`明日学校へ来る` 就是「明天来学校」——还是你熟悉的 `は`、`へ` 等助词,只是结尾从 `〜ます` 放松成了辞书形。",
      examples: [
        {
          jp: "私はコーヒーを飲む",
          reading: "わたしはコーヒーをのむ",
          en: "I drink coffee.",
          zh: "我喝咖啡。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type コーヒー = ProperNoun<"コーヒー">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 私 + は + コーヒー + を + 飲む (plain non-past)
type 私はコーヒーを飲む = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<コーヒー, "を">}\${ConjugateVerb<飲む, "辞書形">}\`;
`,
        },
        {
          jp: "明日学校へ来る",
          reading: "あしたがっこうへくる",
          en: "I'll come to school tomorrow.",
          zh: "明天来学校。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 明日 = ProperNoun<"明日">;
type 学校 = ProperNoun<"学校">;
type 来る = IrregularVerb & { dictionary: "来る" };

// 明日 + 学校 + へ + 来る (plain non-past)
type 明日学校へ来る = \`\${明日}\${PhraseWithParticle<学校, "へ">}\${ConjugateVerb<来る, "辞書形">}\`;
`,
        },
      ],
    },
    {
      id: "e13-2",
      titleEn: "Plain past = the た形",
      titleZh: "简体过去 = た形",
      bodyEn:
        "In chapter 7 you said \"I ate\" the polite way: `食べました`. Now imagine your sibling asks if you want lunch and you want to say \"I already ate\" — `食べました` would sound weirdly formal for kitchen small-talk. You need the casual past, and luckily its shape is one you nearly own already.\n\nThe plain past affirmative is the `た形`, the casual sibling of polite `〜ました`. For ichidan (ru-) verbs you just swap `る` for `た`: `食べる → 食べた`. The two irregulars are `する → した` and `来る → 来た`.\n\nGodan verbs take the same euphonic sound changes you learned for the て-form in chapter 10 — that's the whole trick here. The `た形` is literally the `て形` with `た/だ` swapped in for `て/で`: `飲む → 飲んだ`, `書く → 書いた`, `買う → 買った`. If you already know the て-form, you already know the past.\n\nSo `私はパンを食べた` is the casual \"I ate bread\" you'd text a friend, and `友達とお茶を飲んだ` is \"I had tea with a friend\" — same `と` (\"with\") from earlier, just the relaxed ending. A handy reminder: never try to bolt `〜ました` thinking onto plain speech; the past lives entirely in that final `た`.",
      bodyZh:
        "第七章里你用礼貌的方式说「我吃了」:`食べました`。现在想象兄弟姐妹问你要不要吃午饭,你想说「我已经吃过了」——在厨房闲聊里说 `食べました` 就显得别扭地正式。你需要简体过去式,而幸运的是它的形态你几乎已经掌握。\n\n简体过去肯定式就是 `た形`,礼貌体 `〜ました` 的casual兄弟。一段(ru-)动词只把 `る` 换成 `た`:`食べる → 食べた`。两个不规则动词是 `する → した` 和 `来る → 来た`。\n\n五段动词沿用你在第十章学过的て形音便——诀窍全在这里。`た形` 其实就是把 `て形` 的 `て/で` 换成 `た/だ`:`飲む → 飲んだ`、`書く → 書いた`、`買う → 買った`。会了て形,就等于会了过去式。\n\n于是 `私はパンを食べた` 就是你发给朋友的casual「我吃了面包」,`友達とお茶を飲んだ` 就是「和朋友喝了茶」——还是之前那个表「和」的 `と`,只是结尾放松了。一个小提醒:别试图在简体里再硬塞 `〜ました` 的思路;过去意义全部落在结尾那个 `た` 上。",
      examples: [
        {
          jp: "私はパンを食べた",
          reading: "わたしはパンをたべた",
          en: "I ate bread.",
          zh: "我吃了面包。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type パン = ProperNoun<"パン">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// 私 + は + パン + を + 食べた (plain past)
type 私はパンを食べた = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<パン, "を">}\${ConjugateVerb<食べる, "た形">}\`;
`,
        },
        {
          jp: "友達とお茶を飲んだ",
          reading: "ともだちとおちゃをのんだ",
          en: "I drank tea with a friend.",
          zh: "和朋友喝了茶。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 友達 = ProperNoun<"友達">;
type お茶 = ProperNoun<"お茶">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 友達 + と + お茶 + を + 飲んだ (plain past)
type 友達とお茶を飲んだ = \`\${PhraseWithParticle<友達, "と">}\${PhraseWithParticle<お茶, "を">}\${ConjugateVerb<飲む, "た形">}\`;
`,
        },
      ],
    },
    {
      id: "e13-3",
      titleEn: "Plain negative = the ない形",
      titleZh: "简体否定 = ない形",
      bodyEn:
        "You can already say \"I don't drink\" politely — `飲みません` from chapter 5. But sitting at the bar telling a friend you'll pass on the sake, `飲みません` is too buttoned-up. The casual \"don't / won't\" is a brand-new form worth meeting carefully: the `ない形`, ending in `〜ない`.\n\nIt's the plain partner of polite `〜ません`. For ichidan verbs, drop `る` and add `ない`: `食べる → 食べない`. The irregulars are `する → しない` and `来る → 来ない`.\n\nGodan verbs do one new move: shift the final `u`-sound down to its matching `a`-row sound, then add `ない`. So `飲む` (mu) → `飲まない` (ma-nai), and `話す` (su) → `話さない` (sa-nai). It's a clean, regular pattern once you hear the vowel drop from u to a. (One code note: the library returns this as a stem, so in the examples we append `ない` ourselves.)\n\nIn the wild this is exactly what you'd say turning down a drink — `私はお酒を飲まない`, \"I don't drink\" — or deciding to skip the meat today, `今日は肉を食べない`. Same topic `は`, same object `を`; only the verb ending carries the negative.",
      bodyZh:
        "你已经会礼貌地说「我不喝」——第五章的 `飲みません`。但坐在吧台对朋友说今晚不喝清酒,`飲みません` 就太一本正经了。casual的「不/不会」是个值得认真认识的全新形式:`ない形`,以 `〜ない` 结尾。\n\n它是礼貌体 `〜ません` 的简体搭档。一段动词去掉 `る` 加 `ない`:`食べる → 食べない`。不规则的是 `する → しない` 和 `来る → 来ない`。\n\n五段动词多做一步:把词尾的 `u` 段音降到对应的 `a` 段音,再接 `ない`。于是 `飲む`(mu)→ `飲まない`(ma-nai),`話す`(su)→ `話さない`(sa-nai)。一旦听出元音从 u 降到 a,这就是个干净规整的规律。(一个代码说明:本库返回的是词干,所以示例中由我们自己补上 `ない`。)\n\n在真实场景里,这正是你婉拒一杯酒时会说的——`私はお酒を飲まない`,「我不喝酒」——或决定今天不吃肉,`今日は肉を食べない`。还是同样的主题 `は`、宾语 `を`,只有动词结尾承载否定。",
      examples: [
        {
          jp: "今日は肉を食べない",
          reading: "きょうはにくをたべない",
          en: "I won't eat meat today.",
          zh: "今天不吃肉。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 今日 = ProperNoun<"今日">;
type 肉 = ProperNoun<"肉">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// 今日 + は + 肉 + を + 食べ + ない (plain negative)
type 今日は肉を食べない = \`\${PhraseWithParticle<今日, "は">}\${PhraseWithParticle<肉, "を">}\${ConjugateVerb<食べる, "ない形">}ない\`;
`,
        },
        {
          jp: "私はお酒を飲まない",
          reading: "わたしはおさけをのまない",
          en: "I don't drink alcohol.",
          zh: "我不喝酒。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type お酒 = ProperNoun<"お酒">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 私 + は + お酒 + を + 飲ま + ない (plain negative)
type 私はお酒を飲まない = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<お酒, "を">}\${ConjugateVerb<飲む, "ない形">}ない\`;
`,
        },
      ],
    },
    {
      id: "e13-4",
      titleEn: "だ vs です — the casual copula",
      titleZh: "だ 对比 です ——简体系动词",
      bodyEn:
        "Verbs now have casual forms, but what about \"X is Y\" sentences? Back in chapter 1 you learned `学生です`, \"I'm a student\", and even glimpsed its plain partner `だ`. This is where it earns its keep.\n\nFor noun sentences and na-adjective sentences, the plain counterpart of polite `です` is the copula `だ`. So `学生です` becomes `学生だ`, and `元気です` (\"I'm fine\", a na-adjective from chapter 8) becomes `元気だ`. It's a clean one-to-one swap: drop `です`, drop in `だ`.\n\nThere's a wrinkle worth knowing. In genuinely relaxed speech, people often drop `だ` entirely and let the noun stand alone — `学生?` (\"a student?\") or just `学生。` So why learn the explicit `だ` at all? Because it's the textbook plain form, and because many later constructions — quotes, reasons, conditionals — attach specifically to `だ`. It's the form the grammar machine expects.\n\nSo chatting with a new acquaintance casually, `私は学生だ` is \"I'm a student\", and pointing at the table, `これは私の本だ` is \"this is my book\" — your familiar `の` linking possessor to thing, now closed off with plain `だ` instead of polite `です`.",
      bodyZh:
        "动词有了casual形式,那「X 是 Y」的句子呢?早在第一章你就学过 `学生です`「我是学生」,甚至瞥见过它的简体搭档 `だ`。现在轮到它登场了。\n\n对于名词句和な形容词句,礼貌体 `です` 的简体对应就是系动词 `だ`。所以 `学生です` 变成 `学生だ`,`元気です`(「我很好」,第八章的な形容词)变成 `元気だ`。这是干净的一对一替换:去 `です`,换 `だ`。\n\n有个值得知道的细节。在真正放松的口语里,人们常把 `だ` 整个省掉,只留名词——`学生?`(「学生?」)或干脆 `学生。`。那为何还要学显性的 `だ`?因为它是教科书上的简体形,而且后续许多结构——引用、原因、条件句——都正是接在 `だ` 上的。它是语法机器所期待的形式。\n\n于是随意和新认识的人聊天时,`私は学生だ` 就是「我是学生」;指着桌子说 `これは私の本だ` 就是「这是我的书」——还是你熟悉的 `の` 把所有者和物连起来,只是用简体 `だ` 而非礼貌 `です` 来收尾。",
      examples: [
        {
          jp: "私は学生だ",
          reading: "わたしはがくせいだ",
          en: "I'm a student.",
          zh: "我是学生。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 学生 = ProperNoun<"学生">;

// 私 + は + 学生 + だ (plain copula)
type 私は学生だ = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<学生, "だ">}\`;
`,
        },
        {
          jp: "これは私の本だ",
          reading: "これはわたしのほんだ",
          en: "This is my book.",
          zh: "这是我的书。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type これ = ProperNoun<"これ">;
type 私 = ProperNoun<"私">;
type 本 = ProperNoun<"本">;

// これ + は + 私 + の + 本 + だ
type これは私の本だ = \`\${PhraseWithParticle<これ, "は">}\${PhraseWithParticle<私, "の">}\${PhraseWithParticle<本, "だ">}\`;
`,
        },
      ],
    },
    {
      id: "e13-5",
      titleEn: "Casual sentence endings",
      titleZh: "简体句尾",
      bodyEn:
        "You now have all the plain forms — non-past, past, negative, and `だ`. The last piece is how a casual sentence actually closes, because friends don't just speak in flat dictionary forms; they color the ending with feeling.\n\nFirst, the basics: a casual sentence ends right on the plain form, no `です/ます`. Questions usually drop the `か` you learned in chapter 1 and lean on a rising intonation instead, often written with `?`. So `飲む?` — said with the voice going up — means \"(Want to) drink?\" It's how you'd actually offer someone a glass.\n\nThen come the sentence-final particles that give casual speech its warmth. `よ` tells the listener something new (\"you know\", \"I'm telling you\"), and `ね` seeks agreement (\"right?\", \"isn't it?\"). Both clip straight onto plain forms: `飲むよ`, `食べたね`. One small habit to notice — with nouns, `だ` is often dropped before `ね`, but on verbs `よ/ね` attach freely.\n\nPicture the scenes: reassuring a friend you'll show up, `明日も来るよ`, \"I'll come tomorrow too, you know\"; or noticing your sibling's empty plate, `もうご飯を食べたね`, \"you've already eaten, haven't you?\" These two little particles are what make plain form sound like a real conversation rather than a list of verb endings.",
      bodyZh:
        "现在简体形式你都齐了——非过去、过去、否定,还有 `だ`。最后一块拼图是简体句到底怎么收尾,因为朋友间说话不会只甩出干巴巴的辞书形,他们会给句尾染上情绪。\n\n先说基础:简体句直接以简体形式结尾,不加 `です/ます`。疑问通常省略第一章学的 `か`,改靠升调表达,常写作 `?`。所以 `飲む?`——声调上扬地说——意为「(要)喝吗?」这正是你递给别人一杯时会说的话。\n\n接着是赋予口语温度的句末助词。`よ` 告诉对方新信息(「哦」「我跟你说」),`ね` 寻求认同(「对吧?」「是吧?」)。两者都直接接在简体形式上:`飲むよ`、`食べたね`。一个小习惯要留意——名词后 `だ` 在 `ね` 前常被省略,但动词后 `よ/ね` 可自由附着。\n\n想象这些场景:跟朋友打包票会出现,`明日も来るよ`,「明天也会来哦」;或注意到兄弟姐妹空了的盘子,`もうご飯を食べたね`,「已经吃过饭了吧?」正是这两个小助词,让简体形听起来像真正的对话,而不是一串动词结尾的清单。",
      examples: [
        {
          jp: "明日も来るよ",
          reading: "あしたもくるよ",
          en: "I'll come tomorrow too, you know.",
          zh: "明天也会来哦。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 明日 = ProperNoun<"明日">;
type 来る = IrregularVerb & { dictionary: "来る" };

// 明日 + も + 来る + よ
type 明日も来るよ = \`\${PhraseWithParticle<明日, "も">}\${PhraseWithParticle<ConjugateVerb<来る, "辞書形">, "よ">}\`;
`,
        },
        {
          jp: "もうご飯を食べたね",
          reading: "もうごはんをたべたね",
          en: "You've already eaten, haven't you?",
          zh: "已经吃过饭了吧?",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type ご飯 = ProperNoun<"ご飯">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// もう + ご飯 + を + 食べた + ね
type もうご飯を食べたね = \`もう\${PhraseWithParticle<ご飯, "を">}\${PhraseWithParticle<ConjugateVerb<食べる, "た形">, "ね">}\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
