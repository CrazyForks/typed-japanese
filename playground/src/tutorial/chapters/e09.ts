import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e09",
  level: "elementary",
  order: 9,
  titleEn: "Comparison",
  titleZh: "比较",
  summaryEn:
    "How to compare things in Japanese: state that A surpasses B with “A は B より〜”, ask or answer which side is more with “A のほうが〜”, and pick the single best out of a group with “〜の中で〜がいちばん〜”. The key new words are より (than), ほう (side/option), and いちばん (the most / number one).",
  summaryZh:
    "本章学习如何用日语进行比较:用「A は B より〜」表示 A 胜过 B,用「A のほうが〜」表示「A 这一方更〜」,以及用「〜の中で〜がいちばん〜」从一组事物中挑出最突出的那一个。需要掌握的新词是 より(比)、ほう(一方)和 いちばん(最、第一)。",
  points: [
    {
      id: "e09-1",
      titleEn: "A は B より〜 — “A is more … than B”",
      titleZh: "A は B より〜 ——「A 比 B 更〜」",
      bodyEn:
        "To say that A exceeds B in some quality, use the pattern `A は B より` followed by the property (an adjective or a noun phrase). The particle `より` means “than” and attaches to the thing being compared against — note that it comes *after* B, the opposite of English word order.\n\nSo `東京は大阪より大きい` literally reads “Tokyo, compared-to Osaka, is big”, i.e. “Tokyo is bigger than Osaka”. You do not change the adjective into any special comparative form; Japanese has no “-er” ending.",
      bodyZh:
        "要表达 A 在某方面胜过 B,用「A は B より」加上性质(形容词或名词短语)。助词 `より` 意为「比」,接在被比较的对象后面 —— 注意它位于 B 的*后面*,与中文「比 B」的语序相反。\n\n所以 `東京は大阪より大きい` 字面意思是「东京,跟大阪相比,大」,即「东京比大阪大」。形容词本身不需要变成任何特殊的比较级形式,日语没有「更…」的词尾变化。",
      examples: [
        {
          jp: "東京は大阪より大きいです",
          reading: "とうきょうはおおさかよりおおきいです",
          en: "Tokyo is bigger than Osaka.",
          zh: "东京比大阪大。",
          code: `import type { ProperNoun, PhraseWithParticle, IAdjective, ConjugateAdjective } from "typed-japanese";

type 東京 = ProperNoun<"東京">;
type 大阪 = ProperNoun<"大阪">;
type 大きい = IAdjective & { stem: "大き"; ending: "い" };

// 東京 + は + 大阪 + より + 大きいです
type 東京は大阪より大きいです = \`\${PhraseWithParticle<東京, "は">}\${大阪}より\${ConjugateAdjective<大きい, "丁寧形">}\`;
`,
        },
        {
          jp: "今日は昨日より寒いです",
          reading: "きょうはきのうよりさむいです",
          en: "Today is colder than yesterday.",
          zh: "今天比昨天冷。",
          code: `import type { ProperNoun, PhraseWithParticle, IAdjective, ConjugateAdjective } from "typed-japanese";

type 今日 = ProperNoun<"今日">;
type 昨日 = ProperNoun<"昨日">;
type 寒い = IAdjective & { stem: "寒"; ending: "い" };

type 今日は昨日より寒いです = \`\${PhraseWithParticle<今日, "は">}\${昨日}より\${ConjugateAdjective<寒い, "丁寧形">}\`;
`,
        },
      ],
    },
    {
      id: "e09-2",
      titleEn: "A のほうが〜 — “A is the more … one”",
      titleZh: "A のほうが〜 ——「A 这一方更〜」",
      bodyEn:
        "`ほう` (方) means “side / one of two options”. Adding `の` after a noun and `が` after `ほう` gives `A のほうが〜` — “the A side is more …”. This highlights A as the winner of a two-way comparison.\n\nIt often pairs with `より`: `B より A のほうが大きい` = “Compared to B, A is bigger”. On its own, `A のほうがいいです` simply means “A is better (I prefer A)”.",
      bodyZh:
        "`ほう`(方)意为「一方、两者之一」。在名词后加 `の`、在 `ほう` 后加 `が`,就构成 `A のほうが〜` ——「A 这一方更〜」。它把 A 突出为二选一比较中的胜者。\n\n它常与 `より` 搭配:`B より A のほうが大きい` =「跟 B 相比,A 更大」。单独使用时,`A のほうがいいです` 就是「A 更好(我更喜欢 A)」。",
      examples: [
        {
          jp: "電車のほうが速いです",
          reading: "でんしゃのほうがはやいです",
          en: "The train is faster.",
          zh: "电车更快。",
          code: `import type { ProperNoun, PhraseWithParticle, IAdjective, ConjugateAdjective } from "typed-japanese";

type 電車 = ProperNoun<"電車">;
type 速い = IAdjective & { stem: "速"; ending: "い" };

// 電車 + の + ほう + が + 速いです
type 電車のほうが速いです = \`\${PhraseWithParticle<電車, "の">}ほう\${PhraseWithParticle<"", "が">}\${ConjugateAdjective<速い, "丁寧形">}\`;
`,
        },
        {
          jp: "コーヒーよりお茶のほうがいいです",
          reading: "コーヒーよりおちゃのほうがいいです",
          en: "Tea is better than coffee (I prefer tea).",
          zh: "比起咖啡,茶更好(我更想要茶)。",
          code: `import type { ProperNoun, PhraseWithParticle, IAdjective, ConjugateAdjective } from "typed-japanese";

type コーヒー = ProperNoun<"コーヒー">;
type お茶 = ProperNoun<"お茶">;
type いい = IAdjective & { stem: "い"; ending: "い"; irregular: true };

// コーヒー + より + お茶 + の + ほう + が + いいです
type コーヒーよりお茶のほうがいいです = \`\${コーヒー}より\${PhraseWithParticle<お茶, "の">}ほう\${PhraseWithParticle<"", "が">}\${ConjugateAdjective<いい, "丁寧形">}\`;
`,
        },
      ],
    },
    {
      id: "e09-3",
      titleEn: "〜の中で〜がいちばん〜 — “the most … of all”",
      titleZh: "〜の中で〜がいちばん〜 ——「在…之中最…」",
      bodyEn:
        "To pick the single best item out of a group, name the group with `〜の中で` (“among …”), mark the winner with `が`, and place `いちばん` (一番, “number one / the most”) right before the adjective: `Group の中で X がいちばん〜`.\n\n`いちばん` is an adverb here — it does nothing to the adjective’s form, it just means “most”. For example `果物の中でりんごがいちばん好きです` = “Among fruits, I like apples the most”.",
      bodyZh:
        "要从一组事物中选出最突出的一个,用 `〜の中で`(在…之中)点出范围,用 `が` 标出那个胜出者,并在形容词前放上 `いちばん`(一番,「最、第一」):`范围 の中で X がいちばん〜`。\n\n这里的 `いちばん` 是副词,不改变形容词的形态,只表示「最」。例如 `果物の中でりんごがいちばん好きです` =「在水果之中,我最喜欢苹果」。",
      examples: [
        {
          jp: "果物の中でりんごがいちばん好きです",
          reading: "くだもののなかでりんごがいちばんすきです",
          en: "Among fruits, I like apples the most.",
          zh: "在水果之中,我最喜欢苹果。",
          code: `import type { ProperNoun, PhraseWithParticle, NaAdjective, ConjugateAdjective } from "typed-japanese";

type 果物 = ProperNoun<"果物">;
type りんご = ProperNoun<"りんご">;
type 好き = NaAdjective & { stem: "好き" };

// 果物 + の中で + りんご + が + いちばん + 好きです
type 果物の中でりんごがいちばん好きです = \`\${果物}の中で\${PhraseWithParticle<りんご, "が">}いちばん\${ConjugateAdjective<好き, "丁寧形">}\`;
`,
        },
        {
          jp: "クラスの中で田中さんがいちばん背が高いです",
          reading: "クラスのなかでたなかさんがいちばんせがたかいです",
          en: "In the class, Mr. Tanaka is the tallest.",
          zh: "全班里田中同学个子最高。",
          code: `import type { ProperNoun, PhraseWithParticle, IAdjective, ConjugateAdjective } from "typed-japanese";

type クラス = ProperNoun<"クラス">;
type 田中さん = ProperNoun<"田中さん">;
type 高い = IAdjective & { stem: "高"; ending: "い" };

// クラス + の中で + 田中さん + が + いちばん + 背が + 高いです
type クラスの中で田中さんがいちばん背が高いです = \`\${クラス}の中で\${PhraseWithParticle<田中さん, "が">}いちばん\${PhraseWithParticle<"背", "が">}\${ConjugateAdjective<高い, "丁寧形">}\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
