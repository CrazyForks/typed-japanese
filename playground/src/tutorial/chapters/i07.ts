import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i07",
  level: "intermediate",
  order: 7,
  titleEn: "〜ても / 〜のに",
  titleZh: "〜ても／〜のに",
  summaryEn:
    "The forecast says rain, but the festival committee insists the event runs anyway — and your friend texts back nothing after you wrote first. Your conditionals so far (`〜たら`, `〜と`, `〜ば`) all said “IF X, then Y”, but you still couldn't say “EVEN IF it rains” or “I studied AND YET I failed”. This chapter adds two connectives for results that defy the expected condition: `〜ても` for the hypothetical “even if”, and `〜のに` for the factual, faintly-complaining “even though”.",
  summaryZh:
    "天气预报说会下雨,可活动委员会坚持照常举办;你先发了消息,朋友却一句都没回。你目前学过的条件句(`〜たら`、`〜と`、`〜ば`)都在说「如果 X,就 Y」,但你还说不出「就算下雨也……」或「明明学了却没及格」。本章补上两个表达「结果违背预期」的连接词:表假设的「即使」`〜ても`,以及陈述事实、略带抱怨的「明明……却」`〜のに`。",
  points: [
    {
      id: "i07-1",
      titleEn: "Verb 〜ても — “even if / even though”",
      titleZh: "动词 〜ても ——「即使／就算」",
      bodyEn:
        "Back in chapter 16 you learned `雨が降ったら家にいます` — “if it rains, I'll stay home”. That `〜たら` makes the result depend on the condition. But what if you want the opposite: the rain happens, and your plan does NOT bend to it? Your conditionals can't carry that defiance.\n\nHere is the fix, and it reuses two pieces you already own. Take the te-form of the verb (chapter 10) and attach `も` — the very same `も` that has meant “also / even” since you counted things and since `〜てもいい` gave permission in chapter 14. So `〜ても` is literally “even (by) doing X”, which lands naturally as “even if X” or “even though X”. The second clause then states what holds regardless.\n\nNotice it is concessive and hypothesis-friendly: `雨が降っても行きます` (“even if it rains, I'll go”) does not claim it is actually raining — it says your going is unaffected either way. Only the te-form changes with verb type: `降る`→`降って`, `食べる`→`食べて`, `する`→`して`.\n\nPicture the festival committee on the morning of the event, glancing at heavy clouds: `雨が降っても行きます`. The weather is up in the air, but the decision is not. That is exactly the “even if” `〜ても` was built to express.",
      bodyZh:
        "在第 16 课你学过 `雨が降ったら家にいます` ——「如果下雨我就待在家」。那个 `〜たら` 让结果取决于条件。可如果你想表达相反的意思:雨照下,你的计划却偏不让步呢?光靠条件句承载不了这份「偏要」。\n\n解法在这里,而且用的都是你已经掌握的两块零件。取动词的「て形」(第 10 课),再接上 `も` —— 正是那个从数数时、以及第 14 课 `〜てもいい` 表示许可时就一直表「也／甚至」的 `も`。所以 `〜ても` 字面就是「即使做了 X」,自然落到「即使 X」或「就算 X」的意思上。后一句则陈述无论如何都成立的内容。\n\n要注意它是让步用法,且适合假设:`雨が降っても行きます`(「就算下雨我也去」)并不断言现在真的在下雨 —— 而是说去不去不受其影响。随动词类型变化的只有「て形」:`降る`→`降って`、`食べる`→`食べて`、`する`→`して`。\n\n想象活动委员会在当天清晨抬头看着厚厚的云层:`雨が降っても行きます`。天气尚未可知,但决定已定。这正是 `〜ても` 为表达「即使」而生的场景。",
      examples: [
        {
          jp: "雨が降っても行きます",
          reading: "あめがふってもいきます",
          en: "Even if it rains, I'll go.",
          zh: "就算下雨我也去。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type 雨 = ProperNoun<"雨">;
type 降る = GodanVerb & { stem: "降"; ending: "る" };
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 雨が + 降って (te-form) + も + 行きます
type 雨が降っても行きます = \`\${雨}が\${ConjugateVerb<降る, "て形">}も\${ConjugateVerb<行く, "ます形">}ます\`;
`,
        },
        {
          jp: "高くても買います",
          reading: "たかくてもかいます",
          en: "Even if it's expensive, I'll buy it.",
          zh: "就算贵我也买。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type 高くて = ProperNoun<"高くて">;
type 買う = GodanVerb & { stem: "買"; ending: "う" };

// 高くて (i-adj te-form) + も + 買います
type 高くても買います = \`\${高くて}も\${ConjugateVerb<買う, "ます形">}ます\`;
`,
        },
        {
          jp: "たくさん食べても太りません",
          reading: "たくさんたべてもふとりません",
          en: "Even if I eat a lot, I don't gain weight.",
          zh: "就算吃很多也不会胖。",
          code: `import type { IchidanVerb, GodanVerb, ConjugateVerb } from "typed-japanese";

type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };
type 太る = GodanVerb & { stem: "太"; ending: "る" };

// たくさん + 食べて (te-form) + も + 太りません
type たくさん食べても太りません = \`たくさん\${ConjugateVerb<食べる, "て形">}も\${ConjugateVerb<太る, "ます形">}ません\`;
`,
        },
      ],
    },
    {
      id: "i07-2",
      titleEn: "Question-word 〜ても — “no matter …”",
      titleZh: "疑问词 〜ても ——「无论……」",
      bodyEn:
        "Once `〜ても` means “even if this one thing happens”, there's a tempting next step: what if you want it to cover EVERY case at once — every visitor, every choice, every hour? Saying it case by case would never end. Japanese has a tidy shortcut.\n\nPut a question word in front of `〜ても` — `誰` (who), `何` (what), `いつ` (when), `どこ` (where), `いくら` (how much) — and the “even if” sweeps across all values: `誰が来ても` (“no matter who comes”), `何を食べても` (“no matter what I eat”). The intuition is direct: “even if it's THIS who comes… even if it's THAT who comes…” collapses into a single “no matter who”.\n\nMechanically nothing new happens. The verb still takes the plain te-form exactly as in the previous point; you've only slotted a question word ahead of it.\n\nImagine briefing the front desk before a long shift: `誰が来ても会いません` — no matter who shows up, you're not seeing anyone today. One sentence, and every possible visitor is covered. That blanket coverage is the whole appeal of question-word `〜ても`.",
      bodyZh:
        "`〜ても` 一旦表示「即使发生这一件事」,就很自然想往前一步:如果你想一口气涵盖「每一种」情况 —— 每一位来客、每一个选择、每一个时刻 —— 该怎么办?一种一种地说永远说不完。日语有个利落的捷径。\n\n在 `〜ても` 前放一个疑问词 —— `誰`(谁)、`何`(什么)、`いつ`(何时)、`どこ`(何地)、`いくら`(多少)—— 「即使」就扫过了所有取值:`誰が来ても`(「无论谁来」)、`何を食べても`(「无论吃什么」)。直觉很直白:「即使是这个人来……即使是那个人来……」浓缩成一句「无论谁」。\n\n机制上没有新东西。动词仍取普通「て形」,与上一节完全一样,你只是在它前面插了个疑问词。\n\n想象长班开始前对前台交代:`誰が来ても会いません` —— 无论谁来,今天一概不见。一句话,所有可能的来客都被包进去了。这种「一网打尽」正是疑问词 `〜ても` 的全部魅力。",
      examples: [
        {
          jp: "誰が来ても会いません",
          reading: "だれがきてもあいません",
          en: "No matter who comes, I won't see them.",
          zh: "无论谁来我都不见。",
          code: `import type { ProperNoun, IrregularVerb, GodanVerb, ConjugateVerb } from "typed-japanese";

type 誰 = ProperNoun<"誰">;
type 来る = IrregularVerb & { dictionary: "来る" };
type 会う = GodanVerb & { stem: "会"; ending: "う" };

// 誰が + 来て (te-form) + も + 会いません
type 誰が来ても会いません = \`\${誰}が\${ConjugateVerb<来る, "て形">}も\${ConjugateVerb<会う, "ます形">}ません\`;
`,
        },
        {
          jp: "何を飲んでも眠れません",
          reading: "なにをのんでもねむれません",
          en: "No matter what I drink, I can't sleep.",
          zh: "无论喝什么都睡不着。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type 何 = ProperNoun<"何">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };
type 眠る = GodanVerb & { stem: "眠"; ending: "る" };

// 何を + 飲んで (te-form) + も + 眠れ (potential stem) + ません
type 何を飲んでも眠れません = \`\${何}を\${ConjugateVerb<飲む, "て形">}も\${ConjugateVerb<眠る, "可能形">}ません\`;
`,
        },
      ],
    },
    {
      id: "i07-3",
      titleEn: "〜のに — “although / even though (and yet)”",
      titleZh: "〜のに ——「明明……却」",
      bodyEn:
        "`〜ても` handles the hypothetical. But sometimes the surprise isn't hypothetical at all — it already happened. You studied for hours, the test came back red, and you want to voice that clash between effort and outcome. `〜ても` won't do it, because nothing about your studying was “if”; it was real.\n\nThat's the job of `〜のに`. It links two clauses where the second runs contrary to what the first leads you to expect: “although X, (surprisingly) Y”. The crucial difference from `〜ても` is that both clauses describe things that actually came true — and the speaker usually carries a tinge of surprise, complaint, or regret. There's an emotional charge baked in.\n\nIt attaches to the plain form you learned in chapter 13. After verbs and i-adjectives, just add `のに` to the plain form (`勉強したのに` “even though I studied”). After nouns and na-adjectives, insert `な` first: `〜なのに` (`元気なのに` “even though he's healthy”, `日曜日なのに` “even though it's Sunday”). That stray `な` is the same linking `な` that na-adjectives use before nouns, so it should feel familiar.\n\nPicture yourself slumping after a returned exam: `勉強したのに分かりません` — “I studied, and yet I still don't get it”. The `のに` is where the sigh lives. If you used `〜ても` here it would sound oddly detached, as if your studying were merely theoretical.",
      bodyZh:
        "`〜ても` 处理的是假设。但有时候,意外根本不是假设 —— 它已经发生了。你苦读了好几个钟头,卷子却一片飘红,你想把这份「付出与结果的落差」说出来。`〜ても` 做不到,因为你的学习里没有半点「如果」,它是真真切切发生过的。\n\n这正是 `〜のに` 的任务。它连接两个分句,后句与前句让人预期的结果相反:「明明 X,却(出乎意料地)Y」。与 `〜ても` 的关键区别在于:两个分句描述的都是真实成立的事 —— 而且说话人通常带着一丝惊讶、抱怨或惋惜,语气里自带情绪。\n\n它接在你第 13 课学过的普通形之后。动词和い形容词直接在普通形后加 `のに`(`勉強したのに`「明明学习了」)。名词和な形容词要先插一个 `な`:`〜なのに`(`元気なのに`「明明很健康」、`日曜日なのに`「明明是星期天」)。这个多出来的 `な`,就是な形容词接名词时用的那个连接 `な`,你应该不陌生。\n\n想象自己拿回考卷后瘫在桌上:`勉強したのに分かりません` ——「明明学了,却还是不懂」。那声叹气就藏在 `のに` 里。这里若换成 `〜ても`,反而显得冷冰冰,好像你的学习只是纸上谈兵。",
      examples: [
        {
          jp: "勉強したのに分かりません",
          reading: "べんきょうしたのにわかりません",
          en: "Even though I studied, I don't understand.",
          zh: "明明学了却不懂。",
          code: `import type { ProperNoun, IrregularVerb, GodanVerb, ConjugateVerb } from "typed-japanese";

type 勉強 = ProperNoun<"勉強">;
type 勉強する = IrregularVerb & { dictionary: "する" };
type 分かる = GodanVerb & { stem: "分か"; ending: "る" };

// 勉強 + した (ta-form of する) + のに + 分かりません
type 勉強したのに分かりません = \`\${勉強}\${ConjugateVerb<勉強する, "た形">}のに\${ConjugateVerb<分かる, "ます形">}ません\`;
`,
        },
        {
          jp: "薬を飲んだのに治りません",
          reading: "くすりをのんだのになおりません",
          en: "Even though I took medicine, I'm not getting better.",
          zh: "明明吃了药却没好。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type 薬 = ProperNoun<"薬">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };
type 治る = GodanVerb & { stem: "治"; ending: "る" };

// 薬を + 飲んだ (ta-form) + のに + 治りません
type 薬を飲んだのに治りません = \`\${薬}を\${ConjugateVerb<飲む, "た形">}のに\${ConjugateVerb<治る, "ます形">}ません\`;
`,
        },
        {
          jp: "日曜日なのに働きます",
          reading: "にちようびなのにはたらきます",
          en: "Even though it's Sunday, I work.",
          zh: "明明是星期天却要上班。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type 日曜日 = ProperNoun<"日曜日">;
type 働く = GodanVerb & { stem: "働"; ending: "く" };

// 日曜日 (noun) + なのに + 働きます
type 日曜日なのに働きます = \`\${日曜日}なのに\${ConjugateVerb<働く, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "i07-4",
      titleEn: "〜ても vs 〜のに — choosing the right one",
      titleZh: "〜ても 与 〜のに 的区别",
      bodyEn:
        "Both `〜ても` and `〜のに` land in English as something like “even though”, and that overlap is exactly where learners stumble. They are not interchangeable, and picking wrong can flip your meaning or your tone.\n\nHere's the dividing line. `〜ても` is hypothetical and concessive: the X clause may or may not happen, and Y holds regardless — you're talking about a tendency or a rule. `〜のに` is factual and counter-expectation: X really happened, yet Y came out against what you'd expect, usually with a sigh of surprise or complaint underneath.\n\nWatch the same words split in two: `練習しても下手です` means “even if I practice, I'm bad” — practicing simply won't help, stated coolly. But `練習したのに下手です` means “I practiced, and yet I'm STILL bad” — a real session happened, and the result is a genuine letdown. Same vocabulary, opposite mood.\n\nA quick test when you're unsure: did the X actually occur, and do you feel some frustration about it? Reach for `〜のに`. Are you speaking generally about whether X would even matter? Reach for `〜ても`. Grumbling to a friend that you texted but they never replied is a `〜のに` moment; insisting the event runs whatever the sky does is a `〜ても` one.",
      bodyZh:
        "`〜ても` 和 `〜のに` 在中文里都落到「即使／明明」这类说法上,而这层重叠恰恰是学习者最容易绊倒的地方。它们不能互换,选错会让意思或语气整个翻转。\n\n分界线在这里。`〜ても` 是假设、让步:X 分句可能发生也可能不发生,无论如何 Y 都成立 —— 你说的是一种倾向或规律。`〜のに` 是事实、反预期:X 确实发生了,Y 却与你的预期相反,底下往往压着一声惊讶或抱怨的叹息。\n\n看同样的词如何一分为二:`練習しても下手です` 是「就算练习我也很差」—— 练了也没用,语气平静。而 `練習したのに下手です` 是「明明练了却还是很差」—— 实实在在练过了,结果却让人失望透顶。词汇相同,情绪相反。\n\n拿不准时有个快速判断:X 是不是真的发生了,而你心里是不是有点不甘?那就用 `〜のに`。你只是泛泛地讨论 X 到底有没有用?那就用 `〜ても`。跟朋友抱怨你发了消息对方却不回,是 `〜のに` 的时刻;坚持无论天气如何活动照办,则是 `〜ても` 的时刻。",
      examples: [
        {
          jp: "練習しても下手です",
          reading: "れんしゅうしてもへたです",
          en: "Even if I practice, I'm bad at it.",
          zh: "就算练习我也很差。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 練習 = ProperNoun<"練習">;
type 練習する = IrregularVerb & { dictionary: "する" };
type 下手 = ProperNoun<"下手">;

// 練習 + して (te-form of する) + も + 下手 + です
type 練習しても下手です = \`\${練習}\${ConjugateVerb<練習する, "て形">}も\${下手}です\`;
`,
        },
        {
          jp: "練習したのに下手です",
          reading: "れんしゅうしたのにへたです",
          en: "Even though I practiced, I'm still bad at it.",
          zh: "明明练习了却还是很差。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 練習 = ProperNoun<"練習">;
type 練習する = IrregularVerb & { dictionary: "する" };
type 下手 = ProperNoun<"下手">;

// 練習 + した (ta-form of する) + のに + 下手 + です
type 練習したのに下手です = \`\${練習}\${ConjugateVerb<練習する, "た形">}のに\${下手}です\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
