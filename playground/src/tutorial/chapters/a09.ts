import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a09",
  level: "advanced",
  order: 9,
  titleEn: "〜とはいえ / 〜といっても / 〜からといって",
  titleZh: "〜とはいえ／〜といっても／〜からといって",
  summaryEn:
    "Three concessive patterns built on the quotative 〜と (“that”) plus 言う (“to say”). All three set up a clause and then walk back the expectation it raises. `〜とはいえ` means “although (it is true that) —”, granting a fact before qualifying it. `〜といっても` means “even though one says —”, softening a label that overstates reality. `〜からといって` means “just because —”, denying that a reason justifies the expected conclusion. Mastering the trio lets you concede a point gracefully while still pushing back on what follows from it.",
  summaryZh:
    "三个让步句型都建立在引用助词「〜と」(表示「说…」)加上「言う」之上。它们的共同点是:先立一个前提,再否定由它带来的预期。`〜とはいえ` 意为「虽说…(确实如此)」,先承认事实再加以限定;`〜といっても` 意为「虽说是…,但其实」,用来削弱一个夸大了实情的说法;`〜からといって` 意为「仅仅因为…(并不就)」,否认某个理由能推出预期的结论。掌握这三者,就能既体面地让一步,又对随之而来的推论提出反驳。",
  points: [
    {
      id: "a09-1",
      titleEn: "〜とはいえ — although; even so",
      titleZh: "〜とはいえ ——「虽说…」",
      bodyEn:
        "`〜とはいえ` (to wa ie) is a formal, somewhat literary concessive: “although (it is true that) —, still …”. It grants the truth of the first clause, then signals that the natural expectation does not fully hold. It is literally the quotative `と` + topic `は` + the classical 已然 base of 言う, so “though one says that —”.\n\nIt attaches directly to a plain-form predicate or a noun: `Noun + とはいえ`, `い-adj (基本形) + とはいえ`, `Verb (plain) + とはいえ`. With nouns the copula だ is usually dropped. The tone is reflective and is common in written or speech-like-essay registers.",
      bodyZh:
        "`〜とはいえ`(to wa ie)是一个较为郑重、带书面色彩的让步表达:「虽说…(确实如此),但…」。它先承认前句属实,再提示那本应随之而来的预期并不完全成立。其字面是引用助词 `と` + 提示助词 `は` + 文语「言う」的已然形,即「虽这么说」。\n\n它直接接在简体谓语或名词之后:「名词 + とはいえ」「形容词(基本形)+ とはいえ」「动词(简体)+ とはいえ」。接名词时通常省去系动词「だ」。语气沉稳,多见于书面或随笔式的表达中。",
      examples: [
        {
          jp: "春とはいえまだ寒い",
          reading: "はるとはいえまださむい",
          en: "Although it's spring, it's still cold.",
          zh: "虽说是春天,却还很冷。",
          code: `import type { ProperNoun, IAdjective, ConjugateAdjective } from "typed-japanese";

type 春 = ProperNoun<"春">;
type 寒い = IAdjective & { stem: "寒"; ending: "い" };

// 春 + とはいえ + まだ + 寒い (基本形)
type 春とはいえまだ寒い = \`\${春}とはいえまだ\${ConjugateAdjective<寒い, "基本形">}\`;
`,
        },
        {
          jp: "便利とはいえ高い",
          reading: "べんりとはいえたかい",
          en: "Although it's convenient, it's expensive.",
          zh: "虽说方便,但很贵。",
          code: `import type { ProperNoun, IAdjective, ConjugateAdjective } from "typed-japanese";

type 便利 = ProperNoun<"便利">;
type 高い = IAdjective & { stem: "高"; ending: "い" };

// 便利 (noun, だ dropped) + とはいえ + 高い (基本形)
type 便利とはいえ高い = \`\${便利}とはいえ\${ConjugateAdjective<高い, "基本形">}\`;
`,
        },
      ],
    },
    {
      id: "a09-2",
      titleEn: "〜といっても — even though one says",
      titleZh: "〜といっても ——「虽说是…,其实」",
      bodyEn:
        "`〜といっても` (to itte mo) means “even though I say / call it —, (in fact) …”. You use it when a word or claim sounds bigger or more impressive than the reality, and you immediately scale it back: “I say I cook, but it's only instant noodles.” It is the quotative `と` + the て形 of 言う (`言って`) + concessive `も`.\n\nIt attaches to a noun or a plain-form clause: `Noun + といっても`, `Verb/Adj (plain) + といっても`. The second clause typically uses だけ, ほんの, only-words, or a downgrading statement.",
      bodyZh:
        "`〜といっても`(to itte mo)意为「虽说是…,(其实)…」。当某个词或说法听起来比实际更夸张、更厉害时,就用它立刻把调子降下来:「说是做饭,其实只是泡面」。它由引用助词 `と` + 「言う」的て形(`言って`)+ 让步助词 `も` 构成。\n\n它接在名词或简体小句之后:「名词 + といっても」「动词/形容词(简体)+ といっても」。后句多半带有「だけ」「ほんの」之类表示「仅仅」的词,或是一句降调的说明。",
      examples: [
        {
          jp: "留学といっても一週間だけ",
          reading: "りゅうがくといっていしゅうかんだけ",
          en: "I say I studied abroad, but it was only a week.",
          zh: "虽说是留学,其实只有一个星期。",
          code: `import type { ProperNoun } from "typed-japanese";

type 留学 = ProperNoun<"留学">;
type 一週間 = ProperNoun<"一週間">;

// 留学 + といっても + 一週間 + だけ
type 留学といっても一週間だけ = \`\${留学}といっても\${一週間}だけ\`;
`,
        },
        {
          jp: "高いといっても千円だ",
          reading: "たかいといってもせんえんだ",
          en: "Even though I say it's expensive, it's a thousand yen.",
          zh: "虽说贵,也就一千日元。",
          code: `import type { ProperNoun, IAdjective, ConjugateAdjective } from "typed-japanese";

type 高い = IAdjective & { stem: "高"; ending: "い" };
type 千円 = ProperNoun<"千円">;

// 高い (基本形) + といっても + 千円 + だ
type 高いといっても千円だ = \`\${ConjugateAdjective<高い, "基本形">}といっても\${千円}だ\`;
`,
        },
      ],
    },
    {
      id: "a09-3",
      titleEn: "〜からといって — just because",
      titleZh: "〜からといって ——「仅仅因为…(并不就)」",
      bodyEn:
        "`〜からといって` (kara to itte) means “just because —, (it does not follow that) …”. It picks up a reason (`から`) and then denies that the expected conclusion automatically holds. The second half almost always ends in a negative such as `〜とは限らない`, `〜わけではない`, or `〜ない`: “Just because it's cheap doesn't mean it's bad.”\n\nIt attaches to a plain-form clause: `Verb/Adj (plain) + からといって`, `Noun + だ + からといって`. Think of it as the rebuttal twin of 〜から: where 〜から asserts a reason, 〜からといって refuses to let that reason settle the matter.",
      bodyZh:
        "`〜からといって`(kara to itte)意为「仅仅因为…,(并不就)…」。它先承接一个理由(`から`),再否定由此理由本应得出的结论。后半句几乎总以否定收尾,如 `〜とは限らない`、`〜わけではない`、`〜ない`:「不能因为便宜就说它差」。\n\n它接在简体小句之后:「动词/形容词(简体)+ からといって」「名词 + だ + からといって」。可以把它看作「〜から」的反驳版:「〜から」断定一个理由,而「〜からといって」拒绝让这个理由就此定论。",
      examples: [
        {
          jp: "安いからといって買わない",
          reading: "やすいからといってかわない",
          en: "I won't buy it just because it's cheap.",
          zh: "不会仅仅因为便宜就买。",
          code: `import type { IAdjective, ConjugateAdjective, GodanVerb, ConjugateVerb } from "typed-japanese";

type 安い = IAdjective & { stem: "安"; ending: "い" };
type 買う = GodanVerb & { stem: "買"; ending: "う" };

// 安い (基本形) + からといって + 買わ (ない形 stem) + ない
type 安いからといって買わない = \`\${ConjugateAdjective<安い, "基本形">}からといって\${ConjugateVerb<買う, "ない形">}ない\`;
`,
        },
        {
          jp: "学生だからといって暇ではない",
          reading: "がくせいだからといってひまではない",
          en: "Just because I'm a student doesn't mean I'm free.",
          zh: "并不是因为是学生就有空。",
          code: `import type { ProperNoun, NaAdjective, ConjugateAdjective } from "typed-japanese";

type 学生 = ProperNoun<"学生">;
type 暇 = NaAdjective & { stem: "暇" };

// 学生 + だ + からといって + 暇ではない (否定形)
type 学生だからといって暇ではない = \`\${学生}だからといって\${ConjugateAdjective<暇, "否定形">}\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
