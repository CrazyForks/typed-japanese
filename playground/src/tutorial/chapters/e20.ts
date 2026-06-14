import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e20",
  level: "elementary",
  order: 20,
  titleEn: "Quotation & なら",
  titleZh: "引用与なら",
  summaryEn:
    "A friend asks what you think of the new café and whether you'd go to Kyoto — and suddenly you need to report a thought, relay what your boss said, and react to a topic someone just raised. Until now you could only state plain facts and your own wishes; this chapter lets you seal any sentence into a quote with `と` before `思う` (think) or `言う` (say), and lets you respond to a topic with `なら` (\"in that case…\"). Both reuse the plain forms from chapter 13, so the only new pieces are the small words that attach to them.",
  summaryZh:
    "朋友问你觉得那家新咖啡馆怎么样、要不要去京都 —— 你突然需要转述一个想法、传达老板说的话、回应对方刚提起的话题。到目前为止你只会陈述事实和自己的愿望;本章让你用 `と` 把任何句子封装成引用,后接 `思う`(认为)或 `言う`(说),并用 `なら`(「那样的话……」)来回应一个话题。两者都建立在第 13 章的简体形之上,所以唯一的新东西只是接在它们后面的几个小词。",
  points: [
    {
      id: "e20-1",
      titleEn: "〜と思う — “I think that …”",
      titleZh: "〜と思う ——「我认为……」",
      bodyEn:
        "So far you've stated things you were sure of: `雨です` (it's raining), `行きます` (I'll go). But conversation is mostly opinions and guesses — \"I think it'll rain\", \"I think he'll come\". You need a way to mark a whole sentence as the content of your thinking rather than a flat fact.\n\nJapanese does this by treating the thought as an object you think. You write the thought first as a complete plain-form clause, seal it with the quotation particle `と` (the \"that\" of \"I think that…\"), then add `思う` / `思います` (think). Because `思う` is doing the thinking, everything before `と` stays casual — even in a polite sentence, only the final `思います` carries politeness.\n\nThe one trap is nouns and na-adjectives: inside the quote they need their plain copula `だ`. \"I think it's rain\" is `雨だと思います`, not `雨と思います`. A verb or i-adjective needs nothing extra, so `行くと思います` (I think he'll go) and `いいと思います` (I think it's good) attach straight onto `と`.\n\nPicture sitting in a meeting and your colleague asks if tomorrow's outdoor event is safe. You glance at the sky and say `明日は雨だと思います` — \"I think it'll rain tomorrow.\" You're not promising rain; you're offering a judgment, and `と思います` is exactly what softens it into one.",
      bodyZh:
        "到目前为止你陈述的都是确定的事:`雨です`(下雨了)、`行きます`(我会去)。但对话里大多是看法和推测 ——「我想会下雨」「我想他会来」。你需要一种方式,把一整句话标记为「我所想的内容」,而不是平铺直叙的事实。\n\n日语的做法是把想法当成「思考的对象」。先把想法写成一个完整的简体小句,用引用助词 `と`(相当于「我认为『那件事』」里的「那件事」)封口,再接 `思う` / `思います`(认为)。因为「思考」这个动作由 `思う` 承担,`と` 之前的内容一律保持简体 —— 即使整句礼貌,礼貌也只体现在句末的 `思います` 上。\n\n唯一的陷阱是名词和形容动词:在引用里它们要带上简体系动词 `だ`。「我想是雨天」是 `雨だと思います`,而不是 `雨と思います`。动词和形容词则不需要额外的东西,所以 `行くと思います`(我想他会去)和 `いいと思います`(我觉得好)直接接在 `と` 上。\n\n想象你在开会,同事问明天的户外活动行不行。你瞄一眼天空,说 `明日は雨だと思います` ——「我想明天会下雨。」你并不是断言一定下雨,而是给出一个判断,`と思います` 正是把它软化成「判断」的关键。",
      examples: [
        {
          jp: "明日は雨だと思います",
          reading: "あしたはあめだとおもいます",
          en: "I think it will rain tomorrow.",
          zh: "我想明天会下雨。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 明日 = ProperNoun<"明日">;
type 雨 = ProperNoun<"雨">;
type 思う = GodanVerb & { stem: "思"; ending: "う" };

// 明日 + は (topic) + 雨 + だと + 思い(ます形) + ます
type 明日は雨だと思います = \`\${PhraseWithParticle<明日, "は">}\${雨}だと\${ConjugateVerb<思う, "ます形">}ます\`;
`,
        },
        {
          jp: "田中さんは行くと思います",
          reading: "たなかさんはいくとおもいます",
          en: "I think Mr. Tanaka will go.",
          zh: "我想田中先生会去。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 田中さん = ProperNoun<"田中さん">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };
type 思う = GodanVerb & { stem: "思"; ending: "う" };

// 田中さんは + 行く(辞書形) + と + 思い(ます形) + ます
type 田中さんは行くと思います = \`\${PhraseWithParticle<田中さん, "は">}\${ConjugateVerb<行く, "辞書形">}と\${ConjugateVerb<思う, "ます形">}ます\`;
`,
        },
        {
          jp: "それはいいと思う",
          reading: "それはいいとおもう",
          en: "I think that's good.",
          zh: "我觉得那样很好。",
          code: `import type { ProperNoun, PhraseWithParticle, IAdjective, ConjugateAdjective, GodanVerb, ConjugateVerb } from "typed-japanese";

type それ = ProperNoun<"それ">;
type いい = IAdjective & { stem: "い"; ending: "い"; irregular: true };
type 思う = GodanVerb & { stem: "思"; ending: "う" };

// それは + いい(基本形) + と + 思う(辞書形)
type それはいいと思う = \`\${PhraseWithParticle<それ, "は">}\${ConjugateAdjective<いい, "基本形">}と\${ConjugateVerb<思う, "辞書形">}\`;
`,
        },
      ],
    },
    {
      id: "e20-2",
      titleEn: "〜と言う — “(someone) says that …”",
      titleZh: "〜と言う ——「(某人)说……」",
      bodyEn:
        "Reporting your own thought was step one; now you need to relay other people's words — \"my boss said the meeting is canceled\", \"he said he's a student\". The good news is the machinery is identical to `〜と思う`: you just swap the verb.\n\nWrite the reported words as a plain-form clause, seal them with `と`, and finish with `言う` / `言います` (say). The same `だ` rule applies — a noun inside the quote keeps its plain copula, as in `学生だと言いました` (said he was a student). And `言いました` (said) in the past tense is the form you'll reach for most, since you're usually reporting something already spoken.\n\nThere's a nice flexibility here. For an indirect, paraphrased report you just use plain form plus `と`: `行くと言いました` — \"he said he'd go.\" For a direct quote — repeating the exact words — you wrap them in the Japanese quotation brackets `「 」` and still close with `と言いました`: `「行きます」と言いました`. The `と` is the same hinge either way; what changes is only whether you echo the original wording.\n\nImagine your coworker just got off the phone and asks what the client decided. You answer `田中さんは行くと言いました` — \"Mr. Tanaka said he'd go.\" You weren't there for the call, but `と言いました` lets you pass the message along cleanly and put the words on Tanaka, not on yourself.",
      bodyZh:
        "转述自己的想法是第一步;现在你需要传达别人的话 ——「老板说会议取消了」「他说他是学生」。好消息是它的结构和 `〜と思う` 完全一样:只要换掉动词就行。\n\n把被引用的话写成简体小句,用 `と` 封口,再以 `言う` / `言います`(说)收尾。同样的 `だ` 规则依然适用 —— 引用里的名词要保留简体系动词,如 `学生だと言いました`(说他是学生)。而过去式 `言いました`(说了)是你最常用到的形式,因为你通常转述的是已经说出口的话。\n\n这里还有一个好用的灵活之处。间接、转述式的传话,直接用简体加 `と`:`行くと言いました` ——「他说他会去。」直接引用 —— 原封不动地重复对方的话 —— 则用日语引号 `「 」` 把原话括起来,末尾仍是 `と言いました`:`「行きます」と言いました`。无论哪种,`と` 都是同一个枢纽;变的只是你是否照搬原话。\n\n想象同事刚挂掉电话,问你客户怎么决定的。你回答 `田中さんは行くと言いました` ——「田中先生说他会去。」你并不在场,但 `と言いました` 让你能干净地把话传过去,并把这句话归到田中名下,而不是你自己。",
      examples: [
        {
          jp: "田中さんは行くと言いました",
          reading: "たなかさんはいくといいました",
          en: "Mr. Tanaka said he would go.",
          zh: "田中先生说他会去。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 田中さん = ProperNoun<"田中さん">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };
type 言う = GodanVerb & { stem: "言"; ending: "う" };

// 田中さんは + 行く(辞書形) + と + 言い(ます形) + ました
type 田中さんは行くと言いました = \`\${PhraseWithParticle<田中さん, "は">}\${ConjugateVerb<行く, "辞書形">}と\${ConjugateVerb<言う, "ます形">}ました\`;
`,
        },
        {
          jp: "彼は学生だと言いました",
          reading: "かれはがくせいだといいました",
          en: "He said he was a student.",
          zh: "他说他是学生。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 学生 = ProperNoun<"学生">;
type 言う = GodanVerb & { stem: "言"; ending: "う" };

// 彼は + 学生 + だと + 言い(ます形) + ました
type 彼は学生だと言いました = \`\${PhraseWithParticle<彼, "は">}\${学生}だと\${ConjugateVerb<言う, "ます形">}ました\`;
`,
        },
      ],
    },
    {
      id: "e20-3",
      titleEn: "〜なら — conditional topic “as for / if it's …”",
      titleZh: "〜なら ——「(如果)说到……的话」",
      bodyEn:
        "In chapter 16 you learned `〜たら` and `〜と` for cause-and-effect conditions: do this, and that follows. But there's a different, very conversational kind of \"if\" — the one that picks up a topic someone just put on the table. A friend says \"I'm thinking of traveling\"; you reply \"if it's Kyoto, go in autumn.\" You're not chaining events, you're narrowing your advice to the topic at hand. That's `〜なら`.\n\n`なら` attaches straight to a noun (or a plain clause) and means \"if it's the case of X / as for X\". The intuition is that `なら` accepts a topic as given — someone has raised X — and your reply states what holds specifically for that X. It's the responder among the conditionals: it almost always reacts to something already in the conversation.\n\nThat framing makes the result clause feel pointed. `日本語なら田中さんに聞いてください` — \"If it's Japanese (you need help with), ask Mr. Tanaka.\" You're not saying Tanaka helps with everything; you're zeroing in on the one topic raised. In our types you build this with `ConditionalPhrase<Subject, \"なら\", Result>`, where the subject is the topic and the result is your reaction.\n\nPicture a host going around offering drinks. You don't want anything alcoholic, so you say `お酒なら飲みません` — \"if it's alcohol, I don't drink it.\" Or a friend lists cities they might visit and you light up at one: `東京なら行きたいです` — \"if it's Tokyo, I'd like to go.\" In each case `なら` takes the topic just mentioned and frames your answer as \"in that case…\".",
      bodyZh:
        "第 16 章里你学过 `〜たら` 和 `〜と` 这类因果条件:做了这个,那个就随之发生。但还有一种很口语化、不一样的「如果」—— 它承接对方刚摆上桌面的话题。朋友说「我想去旅行」,你回答「京都的话,秋天去」。你不是在串联事件,而是把建议收窄到眼前这个话题上。这就是 `〜なら`。\n\n`なら` 直接接在名词(或简体小句)后,意思是「如果是 X 的话 / 说到 X」。它的直觉是:`なら` 把一个话题当作既定前提 —— 有人提起了 X —— 而你的回应说出「专就这个 X 而言」如何。它是条件句里的「回应者」:几乎总是在回应对话中已经存在的东西。\n\n这种框架让结果句显得很有针对性。`日本語なら田中さんに聞いてください` ——「(要问)日语的话,请问田中先生。」你不是说田中什么都帮得上,而是聚焦在刚被提起的那一个话题上。在我们的类型里,用 `ConditionalPhrase<Subject, \"なら\", Result>` 来构造,其中主语是话题,结果是你的回应。\n\n想象主人挨个问大家要喝什么。你不想喝任何含酒精的,于是说 `お酒なら飲みません` ——「如果是酒的话,我不喝。」又或者朋友列出几个可能去的城市,你一听到某个就来了兴致:`東京なら行きたいです` ——「东京的话,我想去。」每一次,`なら` 都接住刚被提起的话题,把你的回答框成「那样的话……」。",
      examples: [
        {
          jp: "日本語なら田中さんに聞いてください",
          reading: "にほんごならたなかさんにきいてください",
          en: "If it's Japanese, please ask Mr. Tanaka.",
          zh: "日语的话,请问田中先生。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle, ConditionalPhrase } from "typed-japanese";

type 日本語 = ProperNoun<"日本語">;
type 田中さん = ProperNoun<"田中さん">;
type 聞く = GodanVerb & { stem: "聞"; ending: "く" };

// 田中さんに + 聞いて(て形) + ください
type 田中さんに聞いてください = \`\${PhraseWithParticle<田中さん, "に">}\${ConjugateVerb<聞く, "て形">}ください\`;

// 日本語 + なら + (result)
type 日本語なら田中さんに聞いてください = ConditionalPhrase<日本語, "なら", 田中さんに聞いてください>;
`,
        },
        {
          jp: "お酒なら飲みません",
          reading: "おさけならのみません",
          en: "If it's alcohol, I don't drink (it).",
          zh: "如果是酒的话,我不喝。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, ConditionalPhrase } from "typed-japanese";

type お酒 = ProperNoun<"お酒">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 飲み(ます形) + ません
type 飲みません = \`\${ConjugateVerb<飲む, "ます形">}ません\`;

// お酒 + なら + 飲みません
type お酒なら飲みません = ConditionalPhrase<お酒, "なら", 飲みません>;
`,
        },
        {
          jp: "東京なら行きたいです",
          reading: "とうきょうならいきたいです",
          en: "If it's Tokyo, I'd like to go.",
          zh: "去东京的话,我想去。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, ConditionalPhrase } from "typed-japanese";

type 東京 = ProperNoun<"東京">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 行き(ます形) + たいです
type 行きたいです = \`\${ConjugateVerb<行く, "ます形">}たいです\`;

// 東京 + なら + 行きたいです
type 東京なら行きたいです = ConditionalPhrase<東京, "なら", 行きたいです>;
`,
        },
      ],
    },
  ],
};

export default chapter;
