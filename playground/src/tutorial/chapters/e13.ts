import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e13",
  level: "elementary",
  order: 13,
  titleEn: "Plain (casual) form",
  titleZh: "简体(普通)形",
  summaryEn:
    "So far every sentence has ended in polite `です/ます`. Japanese also has a plain (casual) style used with family and close friends, and as the building block for much of the grammar to come. This chapter covers the plain non-past, past, and negative forms of verbs, the casual copula `だ` versus polite `です`, and how casual sentence endings differ from polite ones.",
  summaryZh:
    "到目前为止,所有句子都以礼貌体 `です/ます` 结尾。日语还有一种简体(普通体),用于家人和亲密朋友之间,也是后续大量语法的基础构件。本章讲解动词的简体非过去、过去、否定形,简体系动词 `だ` 与礼貌体 `です` 的区别,以及简体句尾与礼貌体的不同。",
  points: [
    {
      id: "e13-1",
      titleEn: "Plain non-past = the dictionary form",
      titleZh: "简体非过去 = 辞书形",
      bodyEn:
        "The polite `〜ます` ending corresponds to one plain form: the **dictionary form** (`辞書形`). This is the form you look up in a dictionary, and it serves as the plain, non-past affirmative — covering both present and future.\n\nSo `飲みます` (polite) becomes `飲む` (plain), `食べます` becomes `食べる`, and `します` becomes `する`. Casual speech simply ends the sentence on this verb, with no `ます`.",
      bodyZh:
        "礼貌体的 `〜ます` 对应一个简体形式:**辞书形**(`辞書形`)。这是查字典时使用的形式,同时充当简体的非过去肯定式 —— 既表示现在也表示将来。\n\n所以 `飲みます`(礼貌体)变为 `飲む`(简体),`食べます` 变为 `食べる`,`します` 变为 `する`。口语中直接以这个动词结句,不加 `ます`。",
      examples: [
        {
          jp: "私はコーヒーを飲む",
          reading: "わたしはコーヒーをのむ",
          en: "I drink coffee.",
          zh: "我喝咖啡。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 私 + は + コーヒー + を + 飲む (plain non-past)
type 私はコーヒーを飲む = \`\${PhraseWithParticle<私, "は">}コーヒーを\${ConjugateVerb<飲む, "辞書形">}\`;
`,
        },
        {
          jp: "明日学校へ来る",
          reading: "あしたがっこうへくる",
          en: "I'll come to school tomorrow.",
          zh: "明天来学校。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 学校 = ProperNoun<"学校">;
type 来る = IrregularVerb & { dictionary: "来る" };

// 明日 + 学校 + へ + 来る (plain non-past)
type 明日学校へ来る = \`明日\${PhraseWithParticle<学校, "へ">}\${ConjugateVerb<来る, "辞書形">}\`;
`,
        },
      ],
    },
    {
      id: "e13-2",
      titleEn: "Plain past = the た形",
      titleZh: "简体过去 = た形",
      bodyEn:
        "The plain past affirmative is the **た形**. It corresponds to the polite `〜ました`. For ichidan verbs you replace `る` with `た` (`食べる → 食べた`); for `する` it is `した`; for `来る` it is `来た`.\n\nGodan verbs follow euphonic sound changes by their ending: `飲む → 飲んだ`, `書く → 書いた`, `買う → 買った`. The `た形` is identical in shape to the `て形` but with `た/だ` instead of `て/で`.",
      bodyZh:
        "简体过去肯定式是 **た形**,对应礼貌体的 `〜ました`。一段动词把 `る` 换成 `た`(`食べる → 食べた`);`する` 是 `した`;`来る` 是 `来た`。\n\n五段动词按词尾发生音便:`飲む → 飲んだ`、`書く → 書いた`、`買う → 買った`。`た形` 的形态与 `て形` 相同,只是把 `て/で` 换成 `た/だ`。",
      examples: [
        {
          jp: "私はパンを食べた",
          reading: "わたしはパンをたべた",
          en: "I ate bread.",
          zh: "我吃了面包。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// 私 + は + パン + を + 食べた (plain past)
type 私はパンを食べた = \`\${PhraseWithParticle<私, "は">}パンを\${ConjugateVerb<食べる, "た形">}\`;
`,
        },
        {
          jp: "友達とお茶を飲んだ",
          reading: "ともだちとおちゃをのんだ",
          en: "I drank tea with a friend.",
          zh: "和朋友喝了茶。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 友達 = ProperNoun<"友達">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 友達 + と + お茶 + を + 飲んだ (plain past)
type 友達とお茶を飲んだ = \`\${PhraseWithParticle<友達, "と">}お茶を\${ConjugateVerb<飲む, "た形">}\`;
`,
        },
      ],
    },
    {
      id: "e13-3",
      titleEn: "Plain negative = the ない形",
      titleZh: "简体否定 = ない形",
      bodyEn:
        "The plain negative is the **ない形**, ending in `〜ない`. It corresponds to the polite `〜ません`. For ichidan verbs, drop `る` and add `ない` (`食べる → 食べない`); for `する` it is `しない`; for `来る` it is `来ない`.\n\nGodan verbs shift the final `u`-sound to its `a`-row before `ない`: `飲む → 飲まない`, `話す → 話さない`. (Note that the library returns this form as a stem, so we append `ない` ourselves.)",
      bodyZh:
        "简体否定是 **ない形**,以 `〜ない` 结尾,对应礼貌体的 `〜ません`。一段动词去掉 `る` 加 `ない`(`食べる → 食べない`);`する` 是 `しない`;`来る` 是 `来ない`。\n\n五段动词把词尾的 `u` 段音变为 `a` 段再接 `ない`:`飲む → 飲まない`、`話す → 話さない`。(注意:本库返回的是词干,因此需自行补上 `ない`。)",
      examples: [
        {
          jp: "今日は肉を食べない",
          reading: "きょうはにくをたべない",
          en: "I won't eat meat today.",
          zh: "今天不吃肉。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 今日 = ProperNoun<"今日">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// 今日 + は + 肉 + を + 食べ + ない (plain negative)
type 今日は肉を食べない = \`\${PhraseWithParticle<今日, "は">}肉を\${ConjugateVerb<食べる, "ない形">}ない\`;
`,
        },
        {
          jp: "私はお酒を飲まない",
          reading: "わたしはおさけをのまない",
          en: "I don't drink alcohol.",
          zh: "我不喝酒。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 私 + は + お酒 + を + 飲ま + ない (plain negative)
type 私はお酒を飲まない = \`\${PhraseWithParticle<私, "は">}お酒を\${ConjugateVerb<飲む, "ない形">}ない\`;
`,
        },
      ],
    },
    {
      id: "e13-4",
      titleEn: "だ vs です — the casual copula",
      titleZh: "だ 对比 です ——简体系动词",
      bodyEn:
        "For noun and na-adjective sentences, the plain counterpart of polite `です` is the copula `だ`. So `学生です` (polite) becomes `学生だ` (plain), and `元気です` becomes `元気だ`.\n\nIn very casual speech `だ` is often dropped entirely, leaving just the noun (`学生?` / `学生。`). But the explicit `だ` is the textbook plain form and is the one used before many connecting expressions.",
      bodyZh:
        "对于名词句和な形容词句,礼貌体 `です` 的简体对应是系动词 `だ`。所以 `学生です`(礼貌体)变为 `学生だ`(简体),`元気です` 变为 `元気だ`。\n\n在很随意的口语中常把 `だ` 完全省略,只剩名词(`学生?` / `学生。`)。但显性的 `だ` 是教科书上的简体形式,也是许多接续表达前所使用的形式。",
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
        "Casual sentences end on the plain form directly, with no `です/ます`. Questions usually drop `か` and rely on a rising intonation (often written with `?`), so `飲む?` means “(Will you) drink?”.\n\nThe sentence-final particles `よ` (telling new information) and `ね` (seeking agreement) attach to plain forms too. Note `だ` is often dropped before `ね` with nouns, but `verb + よ/ね` is very common: `飲むよ`, `食べたね`.",
      bodyZh:
        "简体句直接以简体形式结尾,不加 `です/ます`。疑问通常省略 `か`,靠升调表达(常写作 `?`),所以 `飲む?` 意为「(你要)喝吗?」。\n\n句末助词 `よ`(告知新信息)和 `ね`(寻求认同)也接在简体形式后。注意:名词后 `だ` 在 `ね` 前常被省略,但「动词 + よ/ね」非常常见:`飲むよ`、`食べたね`。",
      examples: [
        {
          jp: "明日も来るよ",
          reading: "あしたもくるよ",
          en: "I'll come tomorrow too, you know.",
          zh: "明天也会来哦。",
          code: `import type { IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 来る = IrregularVerb & { dictionary: "来る" };

// 明日 + も + 来る + よ
type 明日も来るよ = \`明日も\${PhraseWithParticle<ConjugateVerb<来る, "辞書形">, "よ">}\`;
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
