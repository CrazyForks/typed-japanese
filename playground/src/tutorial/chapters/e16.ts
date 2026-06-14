import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e16",
  level: "elementary",
  order: 16,
  titleEn: "Conditionals: 〜たら / 〜と",
  titleZh: "条件：〜たら／〜と",
  summaryEn:
    "Imagine telling a friend “if it's sunny tomorrow, let's go out,” or explaining “press this button and the door opens.” Until now you could state facts side by side, but not wire them together as IF/WHEN this, THEN that. This chapter gives you your first two conditionals: `〜たら`, the flexible “once X happens, then…” built on the た-form you already know, and `〜と`, the “whenever X, Y inevitably follows” attached to the plain dictionary form.",
  summaryZh:
    "想象你对朋友说「明天天晴的话,我们出去玩吧」,或解释「一按这个按钮,门就开了」。在此之前,你只能把事实一句句并列陈述,却无法把它们连成「如果／当……,就……」。本章给你头两个条件句:`〜たら`——建立在你已熟悉的「た形」之上、灵活的「一旦 X 发生,就……」;以及 `〜と`——接在简体辞书形之后、表示「每当 X,Y 必然随之而来」。",
  points: [
    {
      id: "e16-1",
      titleEn: "〜たら — “if / once …, then …”",
      titleZh: "〜たら ——「如果／一旦……就……」",
      bodyEn:
        "In chapter 13 you learned the plain past た-form: `降る` (to fall/rain) becomes `降った`, `着く` (to arrive) becomes `着いた`. That form already carries the idea of an action being completed — and that turns out to be exactly the hook Japanese hangs its everyday conditional on. The problem so far: you could say “it rains” and “I stay home” as two separate sentences, but you had no way to make the second depend on the first.\n\n`〜たら` solves this. Take the た-form and simply add `ら`: `降った` → `降ったら` (“if/when it rains”), `着いた` → `着いたら` (“once I arrive”). The intuition is clean — picture the first action as already finished, and then ask what follows. That's why it reads as “once X has happened, then…”.\n\nThis is the broadest, most conversational conditional, and it stretches across two meanings: a real “if” (a hypothetical — maybe it rains, maybe not) and a “when/once” (something that will surely happen, you just don't know exactly when). Picture standing at your door looking at grey clouds: `雨が降ったら、家にいます` — “if it rains, I'll stay home.”\n\nThe main clause after `〜たら` is wide open. It can be your plan (“I'll call you”), and it can even be a past-tense surprise: `薬を飲んだら、元気になりました` — “after I took the medicine, I (unexpectedly) felt better.” That last pattern is a favorite for narrating “I did X, and then — to my surprise — Y.”",
      bodyZh:
        "在第 13 课你学过简体过去式「た形」:`降る`(下、降)变成 `降った`,`着く`(到达)变成 `着いた`。这个形态本身就带有「动作已完成」的意味——而这恰恰是日语挂载日常条件句的支点。此前的问题是:你能说「下雨」和「待在家」两个独立句子,却无法让后者依赖于前者。\n\n`〜たら` 正好解决这一点。取「た形」,再加 `ら` 即可:`降った` → `降ったら`(「如果／一旦下雨」),`着いた` → `着いたら`(「一旦到达」)。直觉很清晰——把前一个动作想成已经完成,然后再问接下来如何,所以它读起来就是「一旦 X 发生,就……」。\n\n这是适用面最广、最口语化的条件表达,横跨两种含义:真正的「如果」(假设——也许下雨,也许不下)和「当／一旦」(必然会发生、只是不知何时)。想象你站在门口望着灰云:`雨が降ったら、家にいます`——「如果下雨,我就待在家里。」\n\n`〜たら` 后半句的余地很大:可以是你的计划(「我给你打电话」),甚至可以是过去式的意外结果:`薬を飲んだら、元気になりました`——「吃了药以后,(没想到)就好了。」这一句式很受欢迎,专用于叙述「我做了 X,然后——出乎意料地——Y」。",
      examples: [
        {
          jp: "雨が降ったら、家にいます",
          reading: "あめがふったら、いえにいます",
          en: "If it rains, I'll stay home.",
          zh: "如果下雨,我就待在家里。",
          code: `import type { ProperNoun, GodanVerb, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 雨 = ProperNoun<"雨">;
type 降る = GodanVerb & { stem: "降"; ending: "る" };
type 家 = ProperNoun<"家">;
type いる = IchidanVerb & { stem: "い"; ending: "る" };

// 雨 + が + 降った(た形) + ら、家 + に + い(ます形) + ます
type 雨が降ったら家にいます = \`\${PhraseWithParticle<雨, "が">}\${ConjugateVerb<降る, "た形">}ら、\${PhraseWithParticle<家, "に">}\${ConjugateVerb<いる, "ます形">}ます\`;
`,
        },
        {
          jp: "駅に着いたら、電話します",
          reading: "えきについたら、でんわします",
          en: "Once I arrive at the station, I'll call you.",
          zh: "一到车站,我就给你打电话。",
          code: `import type { ProperNoun, GodanVerb, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 駅 = ProperNoun<"駅">;
type 着く = GodanVerb & { stem: "着"; ending: "く" };
type 電話 = ProperNoun<"電話">;
type する = IrregularVerb & { dictionary: "する" };

// 駅 + に + 着いた(た形) + ら、電話 + し(ます形) + ます
type 駅に着いたら電話します = \`\${PhraseWithParticle<駅, "に">}\${ConjugateVerb<着く, "た形">}ら、\${電話}\${ConjugateVerb<する, "ます形">}ます\`;
`,
        },
        {
          jp: "薬を飲んだら、元気になりました",
          reading: "くすりをのんだら、げんきになりました",
          en: "After I took the medicine, I felt better.",
          zh: "吃了药以后,(没想到)就好了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 薬 = ProperNoun<"薬">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };
type 元気 = ProperNoun<"元気">;
type なる = GodanVerb & { stem: "な"; ending: "る" };

// 薬 + を + 飲んだ(た形) + ら、元気 + に + なり(ます形) + ました (past result)
type 薬を飲んだら元気になりました = \`\${PhraseWithParticle<薬, "を">}\${ConjugateVerb<飲む, "た形">}ら、\${PhraseWithParticle<元気, "に">}\${ConjugateVerb<なる, "ます形">}ました\`;
`,
        },
      ],
    },
    {
      id: "e16-2",
      titleEn: "〜と — natural / automatic consequence",
      titleZh: "〜と —— 自然、必然的结果",
      bodyEn:
        "`〜たら` handles one-off “if”s nicely, but some relationships aren't one-offs at all — they're guaranteed reflexes. Spring comes, the cherry blossoms bloom; you press the button, the door opens; you insert money, the ticket drops out. Every single time, no exceptions, no decision involved. For that flavor of “whenever A, B inevitably follows,” Japanese reaches for `〜と`.\n\nThe build is even simpler than `〜たら`: attach `と` straight onto the plain dictionary form (chapter 12) — no past tense needed. `押す` → `押すと`, `なる` → `なると`. The dictionary form here is doing its job of stating a plain, timeless fact, and `と` says “and as a direct result.” It's the language of nature's laws, machines, habits, and giving directions.\n\nPicture yourself explaining the office door to a new colleague: `ボタンを押すと、ドアが開きます` — “press the button, and the door opens.” You're not predicting one event; you're describing how the world reliably works.\n\nHere is the one rule that trips people up: because the result is presented as automatic, the clause after `〜と` cannot express anyone's will — no commands, no requests, no invitations, no “let's.” You can't say “…と, please call” or “…と, let's go.” The moment your second clause is a decision rather than an automatic outcome, you must switch to `〜たら`. (A comma after `と` is common but optional.)",
      bodyZh:
        "`〜たら` 很适合处理一次性的「如果」,但有些关系根本不是一次性的——它们是必然的条件反射。春天一到,樱花就开;一按按钮,门就开;投入钱,车票就掉出来。每一次都如此,毫无例外,也不涉及任何决定。要表达这种「每当 A,B 必然随之而来」的语感,日语就用 `〜と`。\n\n它的构成比 `〜たら` 还简单:把 `と` 直接接在简体辞书形(第 12 课)之后,不需要过去式。`押す` → `押すと`,`なる` → `なると`。这里辞书形负责陈述一个朴素、不限时间的事实,而 `と` 则说「并由此直接导致」。这是自然规律、机器、习惯和指路的语言。\n\n想象你向新同事解释办公室的门:`ボタンを押すと、ドアが開きます`——「一按按钮,门就开了。」你并不是在预测某一次事件,而是在描述这个世界可靠的运作方式。\n\n有一条最容易绊倒人的规则:由于结果被视为自动发生,`〜と` 后面的小句不能表达任何人的意志——不能是命令、请求、邀请或「一起……吧」。不能说「……と,请打电话」或「……と,一起去吧」。一旦后半句变成一个决定而非自动结果,就必须改用 `〜たら`。(`と` 后常加逗号,但可省略。)",
      examples: [
        {
          jp: "春になると、桜が咲きます",
          reading: "はるになると、さくらがさきます",
          en: "When spring comes, the cherry blossoms bloom.",
          zh: "一到春天,樱花就开了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle, ConditionalPhrase } from "typed-japanese";

type 春 = ProperNoun<"春">;
type なる = GodanVerb & { stem: "な"; ending: "る" };
type 桜 = ProperNoun<"桜">;
type 咲く = GodanVerb & { stem: "咲"; ending: "く" };

// 春 + に + なる(辞書形) + と + 、桜 + が + 咲き(ます形) + ます
type 春になると桜が咲きます = ConditionalPhrase<\`\${PhraseWithParticle<春, "に">}\${ConjugateVerb<なる, "辞書形">}\`, "と", \`、\${PhraseWithParticle<桜, "が">}\${ConjugateVerb<咲く, "ます形">}ます\`>;
`,
        },
        {
          jp: "ボタンを押すと、ドアが開きます",
          reading: "ぼたんをおすと、どあがひらきます",
          en: "When you press the button, the door opens.",
          zh: "一按按钮,门就开了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle, ConditionalPhrase } from "typed-japanese";

type ボタン = ProperNoun<"ボタン">;
type 押す = GodanVerb & { stem: "押"; ending: "す" };
type ドア = ProperNoun<"ドア">;
type 開く = GodanVerb & { stem: "開"; ending: "く" };

// ボタン + を + 押す(辞書形) + と + 、ドア + が + 開き(ます形) + ます
type ボタンを押すとドアが開きます = ConditionalPhrase<\`\${PhraseWithParticle<ボタン, "を">}\${ConjugateVerb<押す, "辞書形">}\`, "と", \`、\${PhraseWithParticle<ドア, "が">}\${ConjugateVerb<開く, "ます形">}ます\`>;
`,
        },
        {
          jp: "右に曲がると、駅があります",
          reading: "みぎにまがると、えきがあります",
          en: "If you turn right, there's the station.",
          zh: "向右拐,就有车站。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle, ConditionalPhrase } from "typed-japanese";

type 右 = ProperNoun<"右">;
type 曲がる = GodanVerb & { stem: "曲が"; ending: "る" };
type 駅 = ProperNoun<"駅">;
type ある = GodanVerb & { stem: "あ"; ending: "る" };

// 右 + に + 曲がる(辞書形) + と + 、駅 + が + あり(ます形) + ます
type 右に曲がると駅があります = ConditionalPhrase<\`\${PhraseWithParticle<右, "に">}\${ConjugateVerb<曲がる, "辞書形">}\`, "と", \`、\${PhraseWithParticle<駅, "が">}\${ConjugateVerb<ある, "ます形">}ます\`>;
`,
        },
      ],
    },
    {
      id: "e16-3",
      titleEn: "Choosing 〜たら vs 〜と",
      titleZh: "〜たら 与 〜と 的选择",
      bodyEn:
        "Both `〜たら` and `〜と` come out as “if/when” in English, so it's tempting to treat them as twins — but they aren't interchangeable, and picking the wrong one can make a sentence ungrammatical, not just odd. The dividing line is the will rule from the last point: does the second clause happen by itself, or do you choose it?\n\n`〜と` reports an inevitable, repeatable consequence and forbids a will-based main clause. So you cannot tack “…let's go” or “…please call” onto a `〜と`. `〜たら` has no such restriction, which makes it the natural — often the only — choice whenever the second clause is your plan, your request, or a single future event you're arranging.\n\nHere's the quick test to run in your head: if the result is something you decide to do, use `〜たら`. Standing in class watching the clock, you'd say `授業が終わったら、休みます` — “once class ends, I'll take a rest” — because resting is your plan. If instead the result happens all on its own, `〜と` fits perfectly: `お金を入れると、切符が出ます` — “insert money, and the ticket comes out” — the machine, not you, produces the outcome.\n\nA handy rule of thumb when you're unsure: `〜たら` is the safe default for conversation, since it covers both hypotheticals and your own intentions. Save `〜と` for when you're describing how something reliably, automatically works.",
      bodyZh:
        "`〜たら` 和 `〜と` 译成中文都是「如果／当……」,于是很容易把它们当成双胞胎——但二者并不能互换,选错不只是别扭,甚至会让句子不合语法。分界线就是上一点讲的「意志规则」:后半句是自然发生的,还是你选择去做的?\n\n`〜と` 陈述必然、可反复发生的结果,且后半句不能含意志。所以不能在 `〜と` 后面接「……一起去吧」或「……请打电话」。`〜たら` 没有这种限制,因此只要后半句是你的计划、请求或你正在安排的一次性将来事件,它就是自然的——往往也是唯一的——选择。\n\n在脑中跑一个简便判断:如果结果是你决定要做的事,用 `〜たら`。坐在教室里看着钟,你会说 `授業が終わったら、休みます`——「下课后我就休息」——因为休息是你的计划。如果结果是自行发生的,`〜と` 则正好:`お金を入れると、切符が出ます`——「投入钱,车票就出来了」——产生结果的是机器,不是你。\n\n拿不准时有个实用经验:对话中以 `〜たら` 作安全默认值,因为它既能表假设,又能表自己的意图。把 `〜と` 留给描述某事可靠、自动运作的场合。",
      examples: [
        {
          jp: "授業が終わったら、休みます",
          reading: "じゅぎょうがおわったら、やすみます",
          en: "Once class ends, I'll take a rest.",
          zh: "下课以后,我就休息。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 授業 = ProperNoun<"授業">;
type 終わる = GodanVerb & { stem: "終わ"; ending: "る" };
type 休む = GodanVerb & { stem: "休"; ending: "む" };

// 授業 + が + 終わった(た形) + ら、休み(ます形) + ます  (speaker's plan → たら)
type 授業が終わったら休みます = \`\${PhraseWithParticle<授業, "が">}\${ConjugateVerb<終わる, "た形">}ら、\${ConjugateVerb<休む, "ます形">}ます\`;
`,
        },
        {
          jp: "お金を入れると、切符が出ます",
          reading: "おかねをいれると、きっぷがでます",
          en: "When you insert money, the ticket comes out.",
          zh: "投入钱,车票就出来了。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle, ConditionalPhrase } from "typed-japanese";

type お金 = ProperNoun<"お金">;
type 入れる = IchidanVerb & { stem: "入れ"; ending: "る" };
type 切符 = ProperNoun<"切符">;
type 出る = IchidanVerb & { stem: "出"; ending: "る" };

// お金 + を + 入れる(辞書形) + と + 、切符 + が + で(ます形) + ます  (automatic result → と)
type お金を入れると切符が出ます = ConditionalPhrase<\`\${PhraseWithParticle<お金, "を">}\${ConjugateVerb<入れる, "辞書形">}\`, "と", \`、\${PhraseWithParticle<切符, "が">}\${ConjugateVerb<出る, "ます形">}ます\`>;
`,
        },
      ],
    },
  ],
};

export default chapter;
