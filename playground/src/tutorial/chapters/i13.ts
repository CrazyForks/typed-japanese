import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i13",
  level: "intermediate",
  order: 13,
  titleEn: "Giving & receiving 授受",
  titleZh: "授受表达",
  summaryEn:
    "Japanese has three core “give/receive” verbs — あげる, くれる, and もらう — and the choice depends on the direction of the transfer relative to the speaker. Attached to a て-form verb, the same three verbs express doing a favor or having something done for you. This chapter sorts out who gives what to whom.",
  summaryZh:
    "日语有三个核心的「授受」动词 —— あげる、くれる、もらう —— 选用哪一个取决于物品相对于说话人的「移动方向」。当它们接在动词て形之后时,同样的三个词用来表达「为别人做某事」或「请别人为自己做某事」。本章帮你理清「谁把什么给了谁」。",
  points: [
    {
      id: "i13-1",
      titleEn: "あげる — giving (away from me / toward others)",
      titleZh: "あげる ——「(我方)给出去」",
      bodyEn:
        "`あげる` means “to give”, used when the giver is the speaker (or the speaker's in-group) and the recipient is someone else. The pattern is `Giver は Recipient に Object を あげる`. The recipient is marked with `に`.\n\nUse `あげる` only when the gift flows *away* from you — you give to them. If the gift comes *toward* you, you must use `くれる` instead (next point).",
      bodyZh:
        "`あげる` 意为「给」,用于授予者是说话人(或己方)、接受者是别人的情况。句型为「授予者 は 接受者 に 物 を あげる」。接受者用助词 `に` 标记。\n\n只有当东西「从我方流向对方」时才用 `あげる` —— 我给别人。如果东西是「流向我方」的,则必须改用 `くれる`(见下一节)。",
      examples: [
        {
          jp: "私は友達に本をあげる",
          reading: "わたしはともだちにほんをあげる",
          en: "I give my friend a book.",
          zh: "我给朋友一本书。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 友達 = ProperNoun<"友達">;
type 本 = ProperNoun<"本">;

// 私 は + 友達 に + 本 を + あげる
type 私は友達に本をあげる = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<友達, "に">}\${PhraseWithParticle<本, "を">}あげる\`;
`,
        },
        {
          jp: "母に花をあげます",
          reading: "ははにはなをあげます",
          en: "I give my mother flowers.",
          zh: "我送给母亲鲜花。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 母 = ProperNoun<"母">;
type 花 = ProperNoun<"花">;

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
        "`くれる` also means “to give”, but it is used when the recipient is the speaker (or the speaker's in-group). The pattern is `Giver は (私に) Object を くれる`. When the recipient is obviously “me”, the `私に` is usually omitted.\n\nThe key contrast: `あげる` = I give to others; `くれる` = others give to me. They are never interchangeable.",
      bodyZh:
        "`くれる` 同样意为「给」,但用于接受者是说话人(或己方)的情况。句型为「授予者 は (私に) 物 を くれる」。当接受者显然是「我」时,`私に` 通常省略。\n\n关键对比:`あげる` = 我给别人;`くれる` = 别人给我。两者不可互换。",
      examples: [
        {
          jp: "友達が本をくれる",
          reading: "ともだちがほんをくれる",
          en: "My friend gives me a book.",
          zh: "朋友给我一本书。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 友達 = ProperNoun<"友達">;
type 本 = ProperNoun<"本">;

// 友達 が + 本 を + くれる (recipient = me, omitted)
type 友達が本をくれる = \`\${PhraseWithParticle<友達, "が">}\${PhraseWithParticle<本, "を">}くれる\`;
`,
        },
        {
          jp: "先生が私に辞書をくれました",
          reading: "せんせいがわたしにじしょをくれました",
          en: "The teacher gave me a dictionary.",
          zh: "老师给了我一本词典。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 先生 = ProperNoun<"先生">;
type 私 = ProperNoun<"私">;
type 辞書 = ProperNoun<"辞書">;

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
        "`もらう` means “to receive”. Here the subject is the receiver, and the source (the giver) is marked with `に` (or `から`). The pattern is `Receiver は Giver に Object を もらう`.\n\nNote the flipped perspective: the same event can be said with `くれる` (focusing on the giver) or with `もらう` (focusing on the receiver). “友達が本をくれる” and “私は友達に本をもらう” describe the same gift.",
      bodyZh:
        "`もらう` 意为「得到、收到」。此时主语是接受者,而来源(授予者)用 `に`(或 `から`)标记。句型为「接受者 は 授予者 に 物 を もらう」。\n\n注意视角的翻转:同一件事既可以用 `くれる`(着眼于授予者)来说,也可以用 `もらう`(着眼于接受者)来说。「友達が本をくれる」和「私は友達に本をもらう」描述的是同一份礼物。",
      examples: [
        {
          jp: "私は友達に本をもらう",
          reading: "わたしはともだちにほんをもらう",
          en: "I receive a book from my friend.",
          zh: "我从朋友那里得到一本书。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 友達 = ProperNoun<"友達">;
type 本 = ProperNoun<"本">;

// 私 は + 友達 に (source) + 本 を + もらう
type 私は友達に本をもらう = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<友達, "に">}\${PhraseWithParticle<本, "を">}もらう\`;
`,
        },
        {
          jp: "私は母にお金をもらいました",
          reading: "わたしはははにおかねをもらいました",
          en: "I received money from my mother.",
          zh: "我从母亲那里收到了钱。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 母 = ProperNoun<"母">;
type お金 = ProperNoun<"お金">;

// 私 は + 母 に + お金 を + もらいました (polite past)
type 私は母にお金をもらいました = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<母, "に">}\${PhraseWithParticle<お金, "を">}もらいました\`;
`,
        },
      ],
    },
    {
      id: "i13-4",
      titleEn: "〜てあげる / 〜てくれる — doing a favor",
      titleZh: "〜てあげる / 〜てくれる ——「为某人做某事」",
      bodyEn:
        "Attach the giving verbs to a **て-form verb** to express doing something *for* someone. `〜てあげる` = I do something for someone else; `〜てくれる` = someone does something for me. The direction rules are exactly the same as for the plain verbs.\n\nFor example, 教える (to teach) → て-form 教えて; 手伝う (to help) → て-form 手伝って. Then append あげる or くれる.",
      bodyZh:
        "把授受动词接在**动词て形**之后,可以表达「为某人做某事」。`〜てあげる` = 我为别人做某事;`〜てくれる` = 别人为我做某事。方向规则与单独使用这些动词时完全一致。\n\n例如:教える(教)→ て形 教えて;手伝う(帮忙)→ て形 手伝って。然后接上 あげる 或 くれる。",
      examples: [
        {
          jp: "私は友達に日本語を教えてあげる",
          reading: "わたしはともだちににほんごをおしえてあげる",
          en: "I teach my friend Japanese (as a favor).",
          zh: "我(帮忙)教朋友日语。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 友達 = ProperNoun<"友達">;
type 日本語 = ProperNoun<"日本語">;
type 教える = IchidanVerb & { stem: "教え"; ending: "る" };

// 私 は + 友達 に + 日本語 を + 教えて (て形) + あげる
type 私は友達に日本語を教えてあげる = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<友達, "に">}\${PhraseWithParticle<日本語, "を">}\${ConjugateVerb<教える, "て形">}あげる\`;
`,
        },
        {
          jp: "友達が手伝ってくれる",
          reading: "ともだちがてつだってくれる",
          en: "My friend helps me out.",
          zh: "朋友帮了我的忙。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 友達 = ProperNoun<"友達">;
type 手伝う = GodanVerb & { stem: "手伝"; ending: "う" };

// 友達 が + 手伝って (て形) + くれる
type 友達が手伝ってくれる = \`\${PhraseWithParticle<友達, "が">}\${ConjugateVerb<手伝う, "て形">}くれる\`;
`,
        },
      ],
    },
    {
      id: "i13-5",
      titleEn: "〜てもらう — having someone do something for you",
      titleZh: "〜てもらう ——「请 / 让某人为自己做某事」",
      bodyEn:
        "`〜てもらう` takes the receiver's perspective: you get someone to do something for you, or you have something done for your benefit. The pattern is `Receiver は Giver に Verb-て もらう`, with the doer marked by `に`.\n\nComparing the two views: 友達が手伝ってくれる (my friend helps me — giver's view) and 私は友達に手伝ってもらう (I have my friend help me — receiver's view) describe the same favor.",
      bodyZh:
        "`〜てもらう` 采用接受者的视角:请别人为自己做某事,或让某事为自己的利益而完成。句型为「接受者 は 施动者 に 动词て もらう」,施动者用 `に` 标记。\n\n对比两种视角:友達が手伝ってくれる(朋友帮我 —— 授予者视角)与 私は友達に手伝ってもらう(我请朋友帮忙 —— 接受者视角)描述的是同一件好事。",
      examples: [
        {
          jp: "私は友達に手伝ってもらう",
          reading: "わたしはともだちにてつだってもらう",
          en: "I have my friend help me.",
          zh: "我请朋友帮忙。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 友達 = ProperNoun<"友達">;
type 手伝う = GodanVerb & { stem: "手伝"; ending: "う" };

// 私 は + 友達 に (doer) + 手伝って (て形) + もらう
type 私は友達に手伝ってもらう = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<友達, "に">}\${ConjugateVerb<手伝う, "て形">}もらう\`;
`,
        },
        {
          jp: "私は先生に本を貸してもらいました",
          reading: "わたしはせんせいにほんをかしてもらいました",
          en: "I had the teacher lend me a book.",
          zh: "我请老师借给我一本书。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 先生 = ProperNoun<"先生">;
type 本 = ProperNoun<"本">;
type 貸す = GodanVerb & { stem: "貸"; ending: "す" };

// 私 は + 先生 に + 本 を + 貸して (て形) + もらいました (polite past)
type 私は先生に本を貸してもらいました = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<先生, "に">}\${PhraseWithParticle<本, "を">}\${ConjugateVerb<貸す, "て形">}もらいました\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
