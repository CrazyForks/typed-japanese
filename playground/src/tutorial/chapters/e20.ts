import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e20",
  level: "elementary",
  order: 20,
  titleEn: "Quotation & なら",
  titleZh: "引用与なら",
  summaryEn:
    "This chapter shows how to embed a thought or someone's words inside a sentence. The particle `と` marks a quotation, followed by `思う` (think) or `言う` (say). You'll also meet `なら`, a conditional that picks up a topic and tells the listener what to do *as for* that topic.",
  summaryZh:
    "本章介绍如何把一个想法或别人的话嵌入句子中。助词 `と` 用来标记引用,后接 `思う`(想、认为)或 `言う`(说)。此外还会学到 `なら` —— 一种「就……而言」的条件表达,用来承接某个话题并给出相应的建议或说明。",
  points: [
    {
      id: "e20-1",
      titleEn: "〜と思う — “I think that …”",
      titleZh: "〜と思う ——「我认为……」",
      bodyEn:
        "To state an opinion or guess, put the content first, mark it with the quotation particle `と`, then add `思う` / `思います` (“think”). The clause before `と` is in plain (casual) form: a verb in dictionary form, an i-adjective, or — crucially — a noun or na-adjective followed by `だ`.\n\nSo “I think it's rain” is `雨だと思います`, and “I think (he) will go” is `行くと思います`. Note the `だ` appears for nouns even though the whole sentence is polite — only the final `思います` carries politeness.",
      bodyZh:
        "要陈述看法或推测,先把内容放在前面,用引用助词 `と` 标记,再接 `思う` / `思います`(认为)。`と` 之前的小句用简体(普通体):动词用辞书形、形容词原形,而名词或形容动词后面要加 `だ`。\n\n所以「我认为是雨天」是 `雨だと思います`,「我认为(他)会去」是 `行くと思います`。注意:即使整句是礼貌体,名词后仍要用 `だ`,礼貌只体现在句末的 `思います` 上。",
      examples: [
        {
          jp: "明日は雨だと思います",
          reading: "あしたはあめだとおもいます",
          en: "I think it will rain tomorrow.",
          zh: "我想明天会下雨。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 明日 = ProperNoun<"明日">;
type 雨 = ProperNoun<"雨">;

// 明日 + は (topic) + 雨 + だと思います
type 明日は雨だと思います = \`\${PhraseWithParticle<明日, "は">}\${雨}だと思います\`;
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

// 田中さんは + 行く(辞書形) + と思います
type 田中さんは行くと思います = \`\${PhraseWithParticle<田中さん, "は">}\${ConjugateVerb<行く, "辞書形">}と思います\`;
`,
        },
        {
          jp: "それはいいと思う",
          reading: "それはいいとおもう",
          en: "I think that's good.",
          zh: "我觉得那样很好。",
          code: `import type { ProperNoun, PhraseWithParticle, IAdjective, ConjugateAdjective } from "typed-japanese";

type それ = ProperNoun<"それ">;
type いい = IAdjective & { stem: "い"; ending: "い"; irregular: true };

// それは + いい(基本形) + と思う
type それはいいと思う = \`\${PhraseWithParticle<それ, "は">}\${ConjugateAdjective<いい, "基本形">}と思う\`;
`,
        },
      ],
    },
    {
      id: "e20-2",
      titleEn: "〜と言う — “(someone) says that …”",
      titleZh: "〜と言う ——「(某人)说……」",
      bodyEn:
        "The same `と` quotes someone's words, this time before `言う` / `言います` (“say”). The reported content again takes plain form, with `だ` after a noun. Past tense `言いました` (“said”) is very common.\n\nFor a direct quote you wrap the words in `「 」` and still close with `と言いました`; for an indirect/paraphrased quote you simply use the plain form plus `と`. Compare `「行きます」と言いました` (said “I will go”) with `行くと言いました` (said that he would go).",
      bodyZh:
        "同样的 `と` 也能引用别人的话,这次后接 `言う` / `言います`(说)。被引用的内容仍用简体,名词后加 `だ`。过去式 `言いました`(说了)非常常用。\n\n直接引用时用 `「 」` 把原话括起来,末尾仍是 `と言いました`;间接引用(转述)则直接用简体加 `と`。比较:`「行きます」と言いました`(说「我要去」)与 `行くと言いました`(说他会去)。",
      examples: [
        {
          jp: "田中さんは行くと言いました",
          reading: "たなかさんはいくといいました",
          en: "Mr. Tanaka said he would go.",
          zh: "田中先生说他会去。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 田中さん = ProperNoun<"田中さん">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 田中さんは + 行く(辞書形) + と言いました
type 田中さんは行くと言いました = \`\${PhraseWithParticle<田中さん, "は">}\${ConjugateVerb<行く, "辞書形">}と言いました\`;
`,
        },
        {
          jp: "彼は学生だと言いました",
          reading: "かれはがくせいだといいました",
          en: "He said he was a student.",
          zh: "他说他是学生。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 学生 = ProperNoun<"学生">;

// 彼は + 学生 + だと言いました
type 彼は学生だと言いました = \`\${PhraseWithParticle<彼, "は">}\${学生}だと言いました\`;
`,
        },
      ],
    },
    {
      id: "e20-3",
      titleEn: "〜なら — conditional topic “as for / if it's …”",
      titleZh: "〜なら ——「(如果)说到……的话」",
      bodyEn:
        "`なら` attaches to a noun (or plain clause) and means “if it's the case of X / as for X”. It picks up something just mentioned and gives advice or a reaction limited to that topic.\n\nA classic pattern: someone raises a subject, and you reply `Xなら …` to say what holds *for that X*. `日本語なら田中さんに聞いてください` = “If it's Japanese (you're asking about), please ask Mr. Tanaka.” Build it with the `ConditionalPhrase<Subject, \"なら\", Result>` constructor.",
      bodyZh:
        "`なら` 接在名词(或简体小句)后,表示「如果是 X 的话 / 说到 X」。它承接前面刚提到的事物,并就这个话题给出建议或回应。\n\n典型用法:对方提起某个话题,你用 `Xなら …` 回答「就 X 而言」如何。`日本語なら田中さんに聞いてください` =「(要问)日语的话,请问田中先生。」用 `ConditionalPhrase<Subject, \"なら\", Result>` 构造即可。",
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
