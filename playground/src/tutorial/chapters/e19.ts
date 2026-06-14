import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e19",
  level: "elementary",
  order: 19,
  titleEn: "Volitional, つもり, でしょう",
  titleZh: "意向形、つもり、でしょう",
  summaryEn:
    "It is Friday evening and you want to round up your friends for dinner, tell a coworker about the job you are leaving, and guess at tomorrow's weather — but so far you could only state plans flatly. This chapter adds three tools: the volitional form (意向形) to propose “let's …” or voice your own resolve, `〜つもり` to declare a settled plan, and `〜でしょう` to soften `です` into “probably …” or a gentle “…, right?”. Together they take you from firm will all the way to a soft guess.",
  summaryZh:
    "周五傍晚,你想招呼朋友一起吃饭、跟同事说说自己要辞掉的工作、再猜猜明天的天气——可到目前为止,你只会平铺直叙地陈述计划。本章补上三件工具:意向形(意向形)用来提议「一起……吧」或表达自己的决心,`〜つもり` 用来宣布已定下的打算,`〜でしょう` 则把 `です` 缓和成「大概……吧」或柔和的「……,对吧?」。三者合在一起,让你从坚定的意志一路说到轻柔的推测。",
  points: [
    {
      id: "e19-1",
      titleEn: "Volitional form (意向形): “let's / I shall”",
      titleZh: "意向形:「一起……吧 / 我要……」",
      bodyEn:
        "Back in chapter 5 you learned `〜ます`, and you may already have a hunch that 行きます (“I go”) can become 行きましょう (“let's go”). That `〜ましょう` is the polite volitional, and it is the easy half of today's lesson: just take any `ます形`, drop `ます`, and attach `ましょう`. The volitional is how Japanese says “let's …” as a suggestion, or “I think I'll …” as your own quiet resolve — neither of which the flat present tense could express.\n\nThe plain (casual) version, the 意向形, is the form you reach for among friends and inside your own head. It is built per verb group, the same families you met in chapter 13. For a godan verb, shift the final `-u` sound to its `-o` row and add a long `う`: 行く → 行こう, 飲む → 飲もう. For an ichidan verb, drop `る` and add `よう`: 食べる → 食べよう. The two irregulars are simply する → しよう and 来る → 来よう.\n\nWhy the long `お` sound? Think of it as a softly drawn-out “shall we…”, an open invitation hanging in the air rather than a clipped command. That is exactly its feel.\n\nPicture Friday night with your roommates: you turn from the fridge and say 一緒に行きましょう to propose eating out together, or, deciding for yourself alone, you mutter コーヒーを飲もう as you head to the kitchen. One tip: plain volitional on its own is for suggestions and inner monologue — to actually ask someone “shall we?” and invite a reply, people often add 〜か (行こうか).",
      bodyZh:
        "在第 5 章你学过 `〜ます`,大概也隐约感觉到 行きます(「我去」)能变成 行きましょう(「一起去吧」)。这个 `〜ましょう` 就是礼貌体的意向形,也是今天最简单的一半:把任何 `ます形` 去掉 `ます`,接上 `ましょう` 即可。意向形正是日语用来提议「一起……吧」、或表达自己心里那份决心「我想……」的方式——这些都是平铺的现在式说不出来的。\n\n普通体(随意)的意向形,即 意向形,是你在朋友之间、在自己心里会用的形式。它按动词类型变化,正是你在第 13 章见过的那几个家族。五段动词把词尾的 `-u` 音挪到同行的 `-o` 音,再加长音 `う`:行く → 行こう,飲む → 飲もう。一段动词去 `る` 加 `よう`:食べる → 食べよう。两个不规则动词只需记 する → しよう、来る → 来よう。\n\n为什么是拉长的 `お` 音?不妨把它想成轻轻拉长的「要不要一起……」,是一句悬在空中的邀请,而不是干脆的命令。它的语感正是如此。\n\n想象周五晚上和室友在一起:你从冰箱前转过身说 一緒に行きましょう,提议一起出去吃;若只是自己拿主意,便边走向厨房边嘟囔 コーヒーを飲もう。一个小提示:单用普通体意向形多半是提议或自言自语——要真正问对方「我们去吗?」并等回应,人们常加上 `〜か`(行こうか)。",
      examples: [
        {
          jp: "一緒に行きましょう",
          reading: "いっしょにいきましょう",
          en: "Let's go together.",
          zh: "一起去吧。",
          code: `import type { GodanVerb, ConjugateVerb, ProperNoun } from "typed-japanese";

type 一緒に = ProperNoun<"一緒に">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// ます形 of 行く is 行き; append ましょう for the polite volitional
type 一緒に行きましょう = \`\${一緒に}\${ConjugateVerb<行く, "ます形">}ましょう\`;
`,
        },
        {
          jp: "コーヒーを飲もう",
          reading: "コーヒーをのもう",
          en: "I think I'll have some coffee.",
          zh: "喝杯咖啡吧。",
          code: `import type { GodanVerb, ConjugateVerb, ProperNoun } from "typed-japanese";

type コーヒー = ProperNoun<"コーヒー">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 意向形 of 飲む returns 飲も; append う → 飲もう
type コーヒーを飲もう = \`\${コーヒー}を\${ConjugateVerb<飲む, "意向形">}う\`;
`,
        },
        {
          jp: "明日また来よう",
          reading: "あしたまたこよう",
          en: "Let's come again tomorrow.",
          zh: "明天再来吧。",
          code: `import type { IrregularVerb, ConjugateVerb, ProperNoun } from "typed-japanese";

type 明日 = ProperNoun<"明日">;
type また = ProperNoun<"また">;
type 来る = IrregularVerb & { dictionary: "来る" };

// 意向形 of 来る is already complete: 来よう
type 明日また来よう = \`\${明日}\${また}\${ConjugateVerb<来る, "意向形">}\`;
`,
        },
      ],
    },
    {
      id: "e19-2",
      titleEn: "〜つもり: “intend to / plan to”",
      titleZh: "〜つもり:「打算 / 计划」",
      bodyEn:
        "The volitional you just met captures an impulse — “let's …”, “I think I'll …”. But suppose the matter is already settled in your mind: you have decided, and you want to report that decision as a firm plan. For that, Japanese hands you the noun `つもり`, literally “intention”, and you attach it to the plain dictionary form you learned in chapter 12: 行く + つもりです = “I intend to go”. Because `つもり` is a noun, it takes the copula `です` (or casual `だ`) right behind it, just like any noun sentence from chapter 1.\n\nThe difference from the volitional is one of weight. 行こう is a thought forming in the moment; 行くつもりです is a resolution you have already reached and are now announcing. That makes `つもり` the natural choice for telling a coworker over lunch 来月仕事をやめるつもりです — “I plan to quit next month” — a plan you have clearly thought through, not a whim.\n\nTo say you intend not to do something, build it on the `ない形` from chapter 13 instead of the dictionary form: 飲まない + つもり = “I intend not to drink”. Notice you negate the verb, not `つもり` — your intention is firmly in place; it is simply an intention pointed at not-doing.\n\nSo at the office party, declining a refill, you can say 今日は飲まないつもりです to make clear it is a considered decision rather than this one drink. One caution: `つもり` describes your own settled mind, so it sits most naturally with first-person plans; for someone else's intentions you would soften or rephrase.",
      bodyZh:
        "你刚学的意向形捕捉的是一时的念头——「一起……吧」「我想……」。但假设这件事在你心里已经定下来了:你已经决定,想把这个决定当作坚定的计划报告出来。为此,日语给了你名词 `つもり`,字面意思是「打算」,把它接在第 12 章学过的辞书形之后即可:行く + つもりです =「我打算去」。因为 `つもり` 是名词,后面直接跟系动词 `です`(口语 `だ`),就和第 1 章的名词句一样。\n\n它与意向形的差别在于分量。行こう 是当下冒出的念头;行くつもりです 则是你已经下定、此刻正式宣布的决心。这让 `つもり` 成了午饭时跟同事说 来月仕事をやめるつもりです(「我打算下个月辞职」)的自然选择——这是想清楚了的计划,而非一时兴起。\n\n要表达「打算不做某事」,就用第 13 章的 `ない形` 而非辞书形来搭:飲まない + つもり =「我打算不喝」。注意被否定的是动词,而不是 `つもり`——你的打算稳稳地在那里,只不过指向「不做」而已。\n\n于是在公司聚会上婉拒续杯时,你可以说 今日は飲まないつもりです,表明这是经过考量的决定,而非只是这一杯。一点提醒:`つもり` 描述的是你自己已定的心意,因此最自然地用于第一人称的计划;说别人的打算时,通常要换种说法或加以缓和。",
      examples: [
        {
          jp: "日本へ行くつもりです",
          reading: "にほんへいくつもりです",
          en: "I intend to go to Japan.",
          zh: "我打算去日本。",
          code: `import type { GodanVerb, ConjugateVerb, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 日本 = ProperNoun<"日本">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 日本 + へ + 行く(辞書形) + つもりです
type 日本へ行くつもりです = \`\${PhraseWithParticle<日本, "へ">}\${ConjugateVerb<行く, "辞書形">}つもりです\`;
`,
        },
        {
          jp: "毎日勉強するつもりです",
          reading: "まいにちべんきょうするつもりです",
          en: "I intend to study every day.",
          zh: "我打算每天学习。",
          code: `import type { IrregularVerb, ConjugateVerb, ProperNoun } from "typed-japanese";

type 毎日 = ProperNoun<"毎日">;
type 勉強 = ProperNoun<"勉強">;
type する = IrregularVerb & { dictionary: "する" };

// 辞書形 of する is する; add つもりです
type 毎日勉強するつもりです = \`\${毎日}\${勉強}\${ConjugateVerb<する, "辞書形">}つもりです\`;
`,
        },
        {
          jp: "今日は飲まないつもりです",
          reading: "きょうはのまないつもりです",
          en: "I intend not to drink today.",
          zh: "我今天打算不喝酒。",
          code: `import type { GodanVerb, ConjugateVerb, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 今日 = ProperNoun<"今日">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// ない形 of 飲む returns 飲ま; append ない, then つもりです
type 今日は飲まないつもりです = \`\${PhraseWithParticle<今日, "は">}\${ConjugateVerb<飲む, "ない形">}ないつもりです\`;
`,
        },
      ],
    },
    {
      id: "e19-3",
      titleEn: "〜でしょう: “probably / right?”",
      titleZh: "〜でしょう:「大概……吧 / 对吧?」",
      bodyEn:
        "From chapter 1 you know `です` makes a flat assertion: 雨です is “it is rain” — stated as a fact. But often you do not know for certain; you are guessing from the dark clouds, or you want to check a hunch with the person beside you. Plain `です` cannot hedge. Its tentative cousin `でしょう` can: it takes the same statement and downgrades the certainty to “probably …” or “… I suppose”.\n\nMechanically `でしょう` is wonderfully simple — it just sits where `です` would, after a noun, an adjective, or a plain verb. 明日は雨でしょう is “it'll probably rain tomorrow”; 彼は来るでしょう, with the dictionary form right in front, is “he'll probably come”. Notice that unlike `です`, `でしょう` attaches happily after a plain verb without sounding stiff — that is its whole job, to add a layer of guesswork on top.\n\nThere is a second, very common use that comes purely from how you say it. Spoken with a rising intonation, `でしょう` turns into a tag question seeking agreement, like English “…, right?”. 明日は寒いでしょう？ said that way is less a forecast than a nudge: “it'll be cold tomorrow, won't it?”.\n\nSo glancing at the gray sky with a friend, you might say 明日は雨でしょう to share a soft prediction; checking that they are joining you, you tilt your voice up: 君も来るでしょう？ — “you're coming too, right?”. The casual equivalent, for friends, is `だろう`. One thing to remember: because `でしょう` signals a guess, pairing it with “definitely” or hard evidence sounds contradictory — reserve it for when you genuinely mean “probably”.",
      bodyZh:
        "从第 1 章你已知道 `です` 是平直的断定:雨です 就是「是雨」——当作事实陈述。但很多时候你并不确定;你是看着乌云在猜,或者想跟身边的人核对一下直觉。单纯的 `です` 无法留有余地。它的推量表亲 `でしょう` 可以:它接过同一句话,把确定性降到「大概……吧」「我想……吧」。\n\n用法上 `でしょう` 简单得令人开心——它就放在 `です` 本会出现的位置,接在名词、形容词或动词普通形之后。明日は雨でしょう 是「明天大概会下雨吧」;彼は来るでしょう,前面紧接辞书形,是「他大概会来吧」。请注意,与 `です` 不同,`でしょう` 接在动词普通形之后毫不生硬——这正是它的本职:在原句上再叠一层推测。\n\n还有一种极常见的用法,完全取决于你怎么说。用上升语调说出时,`でしょう` 就变成征求认同的反问,相当于英语的「……,对吧?」。明日は寒いでしょう?这样说,与其说是预报,不如说是轻轻一推:「明天会冷,对吧?」。\n\n于是和朋友抬头望着灰蒙蒙的天,你可以说 明日は雨でしょう,分享一个柔和的预测;要确认对方是否同行,就把语调扬起:君も来るでしょう?——「你也来,对吧?」。朋友之间的随意形式是 `だろう`。一点要记住:正因为 `でしょう` 标示的是推测,把它和「一定」或确凿证据放在一起会自相矛盾——请把它留给你真心是「大概」的时候。",
      examples: [
        {
          jp: "明日は雨でしょう",
          reading: "あしたはあめでしょう",
          en: "It will probably rain tomorrow.",
          zh: "明天大概会下雨吧。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 明日 = ProperNoun<"明日">;
type 雨 = ProperNoun<"雨">;

// 明日 + は + 雨 + でしょう
type 明日は雨でしょう = \`\${PhraseWithParticle<明日, "は">}\${雨}でしょう\`;
`,
        },
        {
          jp: "彼は来るでしょう",
          reading: "かれはくるでしょう",
          en: "He will probably come.",
          zh: "他大概会来吧。",
          code: `import type { IrregularVerb, ConjugateVerb, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 来る = IrregularVerb & { dictionary: "来る" };

// 彼 + は + 来る(辞書形) + でしょう
type 彼は来るでしょう = \`\${PhraseWithParticle<彼, "は">}\${ConjugateVerb<来る, "辞書形">}でしょう\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
