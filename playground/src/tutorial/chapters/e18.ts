import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e18",
  level: "elementary",
  order: 18,
  titleEn: "Potential form",
  titleZh: "可能形",
  summaryEn:
    "A waiter asks if there's anything you can't eat, and you want to say \"I can't eat spicy food\" — but the only \"can\" you know so far is the bulky `〜ことができる` from chapter 12. This chapter gives you the verb's own built-in potential form (可能形): `食べる` → `食べられる` \"can eat\", `話す` → `話せる` \"can speak\" — shorter, far more common, and with one twist worth noticing — the thing you're able to do gets marked with `が`, not `を`.",
  summaryZh:
    "服务员问你有没有不能吃的东西,你想说「我不能吃辣的」—— 可到目前为止,你会的「能」只有第 12 章那个又长又笨的 `〜ことができる`。本章给你动词自带的可能形(かのうけい):`食べる` → `食べられる`「能吃」、`話す` → `話せる`「会说」—— 更短、更常用,还有一个值得留意的小变化:你「能做」的对象用 `が` 提示,而不是 `を`。",
  points: [
    {
      id: "e18-1",
      titleEn: "Godan verbs: う-row → え-row + る",
      titleZh: "五段动词:う段 → え段 + る",
      bodyEn:
        "In chapter 12 you learned to say \"can do\" with `〜ことができる` — `話すことができる` for \"can speak\". It works, but it's a mouthful, and native speakers rarely reach for it in everyday talk. Japanese has a sleeker way: it bakes the ability right into the verb itself.\n\nFor godan (五段) verbs the rule is a single sound-shift. Take the final syllable, move it from the う-row to the matching え-row, and add `る`. So `話す` (to speak) → `話せる` (can speak), `飲む` (to drink) → `飲める` (can drink), `行く` (to go) → `行ける` (can go). Notice the new verb ends in `る` and behaves exactly like an ichidan verb from here on: `話せる` → polite `話せます`, negative `話せない`.\n\nWhy this shape? The え-row carries a faint sense of \"it works out, it comes off\" across Japanese grammar, so shifting the ending there turns a plain action into the state of that action being achievable. The verb stops reporting \"I speak\" and starts reporting \"speaking is within my reach.\"\n\nImagine an interviewer asks what languages you handle. You answer `私は日本語が話せる` — \"I can speak Japanese.\" One word does the job that `〜ことができる` needed a whole clause for. And note the object is tagged with `が`, not `を` — we'll come back to why in the last point of this chapter.",
      bodyZh:
        "第 12 章里,你用 `〜ことができる` 来表达「能做」—— `話すことができる` 就是「会说」。它能用,但太啰嗦,日本人在日常对话里很少这么说。日语有更利落的办法:把「能力」直接嵌进动词本身。\n\n五段(五段)动词的规则就是一个音变:把词尾那个音节从「う段」移到对应的「え段」,再加 `る`。于是 `話す`(说)→ `話せる`(会说)、`飲む`(喝)→ `飲める`(能喝)、`行く`(去)→ `行ける`(能去)。注意新动词以 `る` 结尾,从此就像一段动词那样活用:`話せる` → 礼貌体 `話せます`、否定 `話せない`。\n\n为什么是这个形状?在日语语法里,「え段」隐隐带有「办成了、做得来」的味道,所以把词尾挪到那里,就把一个单纯的动作变成「这个动作做得来」的状态。动词不再报告「我说」,而是报告「说这件事在我能力范围内」。\n\n设想面试官问你掌握哪些语言。你回答 `私は日本語が話せる` ——「我会说日语」。一个词就办成了 `〜ことができる` 要一整个从句才说清的事。还要注意宾语用 `が` 而非 `を` 标记 —— 至于原因,本章最后一点会讲。",
      examples: [
        {
          jp: "私は日本語が話せる",
          reading: "わたしはにほんごがはなせる",
          en: "I can speak Japanese.",
          zh: "我会说日语。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 日本語 = ProperNoun<"日本語">;
type 話す = GodanVerb & { stem: "話"; ending: "す" };

// 可能形 of 話す returns 話せ → append る = 話せる
type 私は日本語が話せる = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<日本語, "が">}\${ConjugateVerb<話す, "可能形">}る\`;
`,
        },
        {
          jp: "お酒が飲めますか",
          reading: "おさけがのめますか",
          en: "Can you drink alcohol?",
          zh: "你能喝酒吗?",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type お酒 = ProperNoun<"お酒">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 飲める → polite question: 飲めますか
type お酒が飲めますか = \`\${PhraseWithParticle<お酒, "が">}\${ConjugateVerb<飲む, "可能形">}ますか\`;
`,
        },
        {
          jp: "明日は行けない",
          reading: "あしたはいけない",
          en: "I can't go tomorrow.",
          zh: "明天我去不了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 明日 = ProperNoun<"明日">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 行ける → negative: 行けない
type 明日は行けない = \`\${PhraseWithParticle<明日, "は">}\${ConjugateVerb<行く, "可能形">}ない\`;
`,
        },
      ],
    },
    {
      id: "e18-2",
      titleEn: "Ichidan verbs: 〜られる",
      titleZh: "一段动词:〜られる",
      bodyEn:
        "Godan verbs needed a sound-shift, but ichidan (一段) verbs — the easy `〜る` verbs like `食べる` and `見る` you've conjugated since chapter 5 — get an even simpler rule. Drop the final `る` and add `られる`. So `食べる` (to eat) → `食べられる` (can eat), `見る` (to see) → `見られる` (can see).\n\nThis is the same `られ-` stem that quietly powers many ichidan endings, so it should feel familiar rather than new. The result, as always, ends in `る` and conjugates like any ichidan verb: `食べられます`, `食べられない`.\n\nPicture yourself at a sushi counter explaining your tastes: `私は刺身が食べられる` — \"I can eat sashimi.\" Or you're hosting a friend by your apartment window and point outside: `ここから富士山が見られる` — \"You can see Mt. Fuji from here.\" In both cases the verb alone carries the \"can,\" no extra clause required.\n\nOne pitfall worth flagging: in casual modern speech many people drop the `ら` and say `食べれる`, `見れる`. This is the famous ら抜き言葉 (\"ra-dropped speech\"). You'll hear it constantly, but it's still considered non-standard in writing and formal settings, so we teach the full `られる` here — learn the correct form first, and you can always relax it later.",
      bodyZh:
        "五段动词需要音变,但一段(一段)动词 —— 就是你从第 5 章起一直在活用的那类简单 `〜る` 动词,像 `食べる`、`見る` —— 规则更简单。去掉词尾的 `る`,加上 `られる`。于是 `食べる`(吃)→ `食べられる`(能吃)、`見る`(看)→ `見られる`(能看)。\n\n这正是悄悄支撑许多一段动词词尾的同一个 `られ-` 词干,所以它应该让你觉得熟悉,而非陌生。结果照例以 `る` 结尾,像任何一段动词那样活用:`食べられます`、`食べられない`。\n\n想象你坐在寿司吧台前说明自己的口味:`私は刺身が食べられる` ——「我能吃生鱼片」。又或者你在公寓窗边招待朋友,指向窗外:`ここから富士山が見られる` ——「从这里能看到富士山」。两种情况下,动词本身就扛起了「能」,不需要额外的从句。\n\n有一个值得提醒的坑:现代口语里很多人会省去 `ら`,说成 `食べれる`、`見れる`。这就是有名的「ら抜き言葉」(去ら说法)。你会经常听到它,但在书面语和正式场合仍被视为不规范,所以这里教完整的 `られる` —— 先学对的形式,日后随时可以放松。",
      examples: [
        {
          jp: "私は刺身が食べられる",
          reading: "わたしはさしみがたべられる",
          en: "I can eat sashimi.",
          zh: "我能吃生鱼片。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 刺身 = ProperNoun<"刺身">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// 可能形 of 食べる returns 食べられ → append る = 食べられる
type 私は刺身が食べられる = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<刺身, "が">}\${ConjugateVerb<食べる, "可能形">}る\`;
`,
        },
        {
          jp: "ここから富士山が見られる",
          reading: "ここからふじさんがみられる",
          en: "You can see Mt. Fuji from here.",
          zh: "从这里能看到富士山。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type ここ = ProperNoun<"ここ">;
type 富士山 = ProperNoun<"富士山">;
type 見る = IchidanVerb & { stem: "見"; ending: "る" };

// 見る → 見られる
type ここから富士山が見られる = \`\${PhraseWithParticle<ここ, "から">}\${PhraseWithParticle<富士山, "が">}\${ConjugateVerb<見る, "可能形">}る\`;
`,
        },
      ],
    },
    {
      id: "e18-3",
      titleEn: "Irregular: する → できる, 来る → 来られる",
      titleZh: "不规则:する → できる、来る → 来られる",
      bodyEn:
        "Japanese has only two irregular verbs, `する` and `来る`, and you've met both already. Their potential forms don't follow the rules above, but they're easy to remember — and one of them you've secretly been using all along.\n\n`する` (to do) becomes `できる` (can do). If that word looks familiar, it should: back in chapter 12, `日本語ができる` meant \"can do / be good at Japanese\" — that `できる` is literally the potential of `する`. Compound する-verbs inherit it cleanly, so `勉強する` (to study) → `勉強できる` (can study), `運転する` (to drive) → `運転できる`.\n\n`来る` (to come) becomes `来られる` (can come), patterning just like an ichidan potential with its `られる` tail. From here it conjugates normally: polite `来られます`, question `来られますか`.\n\nSo when you want to invite a colleague to tomorrow's meeting, you ask `明日来られますか` — \"Can you come tomorrow?\" — a single polite verb doing all the work. And when you describe your skills, `私はピアノができる` — \"I can play the piano\" — leans on the same `できる` you've quietly known since chapter 12.",
      bodyZh:
        "日语只有两个不规则动词,`する` 和 `来る`,你都已经见过。它们的可能形不遵循上面的规则,但很好记 —— 而且其中一个,你其实一直在用。\n\n`する`(做)变成 `できる`(会做)。如果这个词看着眼熟,那是应该的:早在第 12 章,`日本語ができる` 就表示「会日语、擅长日语」—— 那个 `できる` 正是 `する` 的可能形。复合する动词原封不动地继承它,所以 `勉強する`(学习)→ `勉強できる`(能学)、`運転する`(开车)→ `運転できる`。\n\n`来る`(来)变成 `来られる`(能来),活用方式就像带 `られる` 尾巴的一段动词可能形。此后照常活用:礼貌体 `来られます`、疑问 `来られますか`。\n\n所以当你想邀同事参加明天的会议,就问 `明日来られますか` ——「你明天能来吗?」—— 一个礼貌动词包办全部。而当你介绍自己的本领,`私はピアノができる` ——「我会弹钢琴」—— 靠的正是你从第 12 章起就悄悄认识的那个 `できる`。",
      examples: [
        {
          jp: "私はピアノができる",
          reading: "わたしはぴあのができる",
          en: "I can play the piano.",
          zh: "我会弹钢琴。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type ピアノ = ProperNoun<"ピアノ">;
type する = IrregularVerb & { dictionary: "する" };

// 可能形 of する returns でき → append る = できる
type 私はピアノができる = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<ピアノ, "が">}\${ConjugateVerb<する, "可能形">}る\`;
`,
        },
        {
          jp: "明日来られますか",
          reading: "あしたこられますか",
          en: "Can you come tomorrow?",
          zh: "你明天能来吗?",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 明日 = ProperNoun<"明日">;
type 来る = IrregularVerb & { dictionary: "来る" };

// 可能形 of 来る returns 来られ → polite question: 来られますか
type 明日来られますか = \`\${明日}\${ConjugateVerb<来る, "可能形">}ますか\`;
`,
        },
      ],
    },
    {
      id: "e18-4",
      titleEn: "Marking the object with が",
      titleZh: "用 が 提示宾语",
      bodyEn:
        "You've used `を` to mark objects since chapter 5: `本を読む` — \"read a book.\" So you might expect the potential form to keep it: `本を読める`? In the textbook standard, it actually flips. The object of a potential verb is marked with `が`: `本が読める` — \"(I) can read a book.\"\n\nThe reason ties back to what the potential form really means. `を` belongs to a doing-verb, pointing at the target you act on. But `読める` isn't an action — it describes a state, the way `好き` or `ある` do, and those have always taken `が` (recall `日本語が好き` from chapter 12). So the sentence reads less like \"I act on the book\" and more like \"as for a book, reading is possible.\" The `が` quietly marks what that state of ability is about.\n\nThis is exactly the situation from the start of the chapter: a waiter asks about your diet and you reply with `辛いものが食べられない` — \"I can't eat spicy food\" — `が` flagging the food whose eating is out of reach. Saying `漢字が読める` — \"I can read kanji\" — to a curious shopkeeper follows the same pattern.\n\nIn fast casual speech you'll hear `を` slip back in, and you'll be understood. But when you're learning, default to `が` with potential verbs — it's the standard, and it keeps the \"ability is a state\" intuition front and center.",
      bodyZh:
        "从第 5 章起你就用 `を` 提示宾语:`本を読む` ——「读书」。所以你可能以为可能形会保留它:`本を読める`?但在教科书的标准里,它其实变了。可能动词的宾语用 `が` 提示:`本が読める` ——「能读书」。\n\n原因要回到可能形真正的含义。`を` 属于「动作动词」,指向你施加动作的对象。但 `読める` 不是动作 —— 它描述一种状态,就像 `好き` 或 `ある` 那样,而那些词一向用 `が`(回想第 12 章的 `日本語が好き`)。所以这句话与其说是「我对书施加动作」,不如说是「就书而言,读得了」。这个 `が` 悄悄标记出这种「能力状态」是关于什么的。\n\n这正是本章开头那个场景:服务员问你的饮食,你回答 `辛いものが食べられない` ——「我不能吃辣的」—— `が` 标出那个「吃不了」的食物。对好奇的店主说 `漢字が読める` ——「我能读汉字」—— 也遵循同样的模式。\n\n在飞快的口语里你会听到 `を` 又溜回来,而且照样能听懂。但在学习阶段,可能动词请默认用 `が` —— 它是标准用法,也让「能力是一种状态」这个直觉始终摆在最前面。",
      examples: [
        {
          jp: "漢字が読める",
          reading: "かんじがよめる",
          en: "I can read kanji.",
          zh: "我能读汉字。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 漢字 = ProperNoun<"漢字">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };

// object marked with が + 読める
type 漢字が読める = \`\${PhraseWithParticle<漢字, "が">}\${ConjugateVerb<読む, "可能形">}る\`;
`,
        },
        {
          jp: "私は車が運転できる",
          reading: "わたしはくるまがうんてんできる",
          en: "I can drive a car.",
          zh: "我会开车。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 車 = ProperNoun<"車">;
type 運転 = ProperNoun<"運転">;
type 運転する = IrregularVerb & { dictionary: "する" };

// 運転する → 運転できる; 運転 as a noun then できる via 可能形 + る
type 私は車が運転できる = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<車, "が">}\${運転}\${ConjugateVerb<運転する, "可能形">}る\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
