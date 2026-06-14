import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e07",
  level: "elementary",
  order: 7,
  titleEn: "Past tense",
  titleZh: "过去时",
  summaryEn:
    "A coworker asks what you did over the weekend — but everything you've learned so far only says 'I eat' or 'it is', never 'I ate' or 'it was'. Japanese fixes this with one tidy move: it swaps the SAME polite endings into a past version — `〜ます` becomes `〜ました`, `です` becomes `でした` — so the whole verb-final sentence stays intact and only the tail changes. This chapter teaches that swap across verbs, nouns, and adjectives.",
  summaryZh:
    "同事问你周末做了什么——可是到目前为止你学的句子只能说「我吃」或「它是」,无法说「我吃了」或「它曾经是」。日语用一个利落的办法解决:把同一套礼貌体词尾换成过去版本——`〜ます` 变 `〜ました`,`です` 变 `でした`——整个句尾结构保持不变,只换尾巴。本章教你如何在动词、名词、形容词上完成这一替换。",
  points: [
    {
      id: "e07-1",
      titleEn: "Verbs: 〜ました (polite past)",
      titleZh: "动词:〜ました(礼貌体过去)",
      bodyEn:
        "In chapter 5 you learned the polite verb ending `〜ます`, which covers the present and the future: `飲みます` means 'drink' or 'will drink'. But the moment a coworker asks 'so, what did you do yesterday?', you're stuck — you can describe what you do, not what you did. That gap is exactly what the past tense fills.\n\nThe fix is delightfully small. Keep the verb stem exactly as it was and simply change the tail `ます` into `ました`. Nothing else moves. `飲みます` (drink) → `飲みました` (drank); `食べます` (eat) → `食べました` (ate). Because the stem never changes, you don't need to memorize new words — you already know them, you're just retelling them in the past.\n\nThe reason it's this regular is that Japanese treats tense as a property of the polite ending, not of the verb itself. The stem carries the meaning ('drink'), and the swappable tail carries the grammar ('did, politely'). Once you see `ます`/`ました` as two settings of one dial, every verb conjugates the same way.\n\nThat regularity even covers the irregular verbs `します` (do) and `来ます` (come), which refuse to follow normal rules elsewhere: here they behave like everyone else, giving `しました` and `来ました`. So if your coworker asks about yesterday, you can reply `私はコーヒーを飲みました` ('I drank coffee') or `田中さんは来ました` ('Mr. Tanaka came') — same sentence shape as the present, just a past tail.",
      bodyZh:
        "第 5 章里你学过礼貌体动词词尾 `〜ます`,它涵盖现在和将来:`飲みます` 表示「喝」或「将要喝」。可是同事一问「你昨天做了什么?」,你就卡住了——你能描述「现在做什么」,却说不了「过去做了什么」。过去时正是用来填补这个空缺的。\n\n解决办法小得令人愉快:动词词干原封不动,只把尾巴 `ます` 换成 `ました`,别的都不动。`飲みます`(喝)→ `飲みました`(喝了);`食べます`(吃)→ `食べました`(吃了)。因为词干从不改变,你无需记新词——这些词你早就会了,只是用过去式重讲一遍。\n\n之所以如此规整,是因为日语把时态看作礼貌体词尾的属性,而非动词本身的属性。词干承载意义(「喝」),可替换的尾巴承载语法(「礼貌地、做过了」)。一旦你把 `ます`/`ました` 看成同一个旋钮的两个挡位,所有动词的变法就都一样了。\n\n这份规整甚至适用于在别处不守规则的不规则动词 `します`(做)和 `来ます`(来):在这里它们和大家一样,变成 `しました` 和 `来ました`。所以同事问起昨天,你可以答 `私はコーヒーを飲みました`(我喝了咖啡)或 `田中さんは来ました`(田中先生来了)——句型和现在时完全一样,只是换了个过去的尾巴。",
      examples: [
        {
          jp: "私はコーヒーを飲みました",
          reading: "わたしはコーヒーをのみました",
          en: "I drank coffee.",
          zh: "我喝了咖啡。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type コーヒー = ProperNoun<"コーヒー">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 私 + は + コーヒー + を + 飲み(ます形) + ました
type 私はコーヒーを飲みました = \`\${PhraseWithParticle<私, "は">}\${コーヒー}を\${ConjugateVerb<飲む, "ます形">}ました\`;
`,
        },
        {
          jp: "私はパンを食べました",
          reading: "わたしはパンをたべました",
          en: "I ate bread.",
          zh: "我吃了面包。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type パン = ProperNoun<"パン">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

type 私はパンを食べました = \`\${PhraseWithParticle<私, "は">}\${パン}を\${ConjugateVerb<食べる, "ます形">}ました\`;
`,
        },
        {
          jp: "田中さんは来ました",
          reading: "たなかさんはきました",
          en: "Mr. Tanaka came.",
          zh: "田中先生来了。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 田中さん = ProperNoun<"田中さん">;
type 来る = IrregularVerb & { dictionary: "来る" };

type 田中さんは来ました = \`\${PhraseWithParticle<田中さん, "は">}\${ConjugateVerb<来る, "ます形">}ました\`;
`,
        },
      ],
    },
    {
      id: "e07-2",
      titleEn: "Verbs: 〜ませんでした (polite past negative)",
      titleZh: "动词:〜ませんでした(礼貌体过去否定)",
      bodyEn:
        "You can now say you drank coffee — but what if you didn't? In chapter 5 the negative `〜ません` let you say 'I don't drink', and you've just seen the past `〜ました`. Real conversation constantly needs the combination of the two: 'no, I didn't eat lunch', 'the store was closed so I didn't buy it'. That's the past negative.\n\nJapanese builds it by stacking the pieces you already own: take the present negative `〜ません` and tack `でした` onto the end. So `飲みません` (don't drink) becomes `飲みませんでした` (didn't drink). The stem stays put once again; you're only attaching a longer, fixed tail.\n\nNotice that `でした` showing up here is the same `でした` you'll meet in the next point as the past of `です`. Japanese is reusing one past-marker to push the already-negative `〜ません` into the past — which is why the form looks long but is completely predictable. Memorize `ませんでした` as one chunk and you're done.\n\nImagine a friend asks `お酒を飲みましたか` ('did you drink alcohol?') at last night's party, and you were driving. You answer `私はお酒を飲みませんでした` — 'I didn't drink alcohol.' Or a coworker checks whether you finished the report: `私は勉強しませんでした` ('I didn't study') works the same way, with the irregular `します` contributing its `し` stem and the rest just following the pattern.",
      bodyZh:
        "现在你会说「我喝了咖啡」——可要是没喝呢?第 5 章的否定 `〜ません` 让你能说「我不喝」,而你刚学了过去 `〜ました`。真实对话里时时需要把这两者结合:「不,我没吃午饭」「店关门了所以我没买」。这就是过去否定。\n\n日语用你已经掌握的零件搭出它:拿现在否定 `〜ません`,在末尾接上 `でした`。于是 `飲みません`(不喝)变成 `飲みませんでした`(没喝)。词干照例不动,你只是接上一条更长、固定的尾巴。\n\n请注意,这里出现的 `でした`,正是下一节里 `です` 的过去形 `でした`。日语在重复使用同一个「过去标记」,把本已否定的 `〜ません` 推入过去——所以这个形式看着长,却完全可预测。把 `ませんでした` 当作一个整块记下,就搞定了。\n\n设想昨晚派对上朋友问你 `お酒を飲みましたか`(你喝酒了吗?),而你要开车,于是你答 `私はお酒を飲みませんでした`——「我没喝酒。」又或者同事确认你报告写完没,`私は勉強しませんでした`(我没学习)同样照此办理:不规则动词 `します` 贡献它的 `し` 词干,其余部分照搬这个模式。",
      examples: [
        {
          jp: "私はお酒を飲みませんでした",
          reading: "わたしはおさけをのみませんでした",
          en: "I didn't drink alcohol.",
          zh: "我没喝酒。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type お酒 = ProperNoun<"お酒">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// ます形(飲み) + ませんでした
type 私はお酒を飲みませんでした = \`\${PhraseWithParticle<私, "は">}\${お酒}を\${ConjugateVerb<飲む, "ます形">}ませんでした\`;
`,
        },
        {
          jp: "私は勉強しませんでした",
          reading: "わたしはべんきょうしませんでした",
          en: "I didn't study.",
          zh: "我没学习。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 勉強 = ProperNoun<"勉強">;
type する = IrregularVerb & { dictionary: "する" };

// 勉強 + し(ます形 of する) + ませんでした
type 私は勉強しませんでした = \`\${PhraseWithParticle<私, "は">}\${勉強}\${ConjugateVerb<する, "ます形">}ませんでした\`;
`,
        },
      ],
    },
    {
      id: "e07-3",
      titleEn: "Nouns: 〜でした (was)",
      titleZh: "名词:〜でした(曾是)",
      bodyEn:
        "Way back in chapter 1 you built noun sentences with the copula `です`: `学生です` means 'is a student'. That handles the present, but a lot of what we say about people and things is history — 'he was a student then', 'my old job was a teacher'. Verbs got their past tail; nouns need one too.\n\nThe past of `です` is `でした`. That's it — same noun, same topic particle `は` from chapter 1, just a past copula at the end. `学生です` (is a student) → `学生でした` (was a student). The intuition is identical to the verbs: the noun supplies the meaning, and the swappable copula at the tail carries the tense.\n\nFor 'was not', combine the negative copula you met in chapter 1 (`では ありません`) with the same past marker `でした`, giving the formal `ではありませんでした` — 'was not'. It's long, but every piece is familiar: a negative copula pushed into the past, exactly mirroring how `〜ません` became `〜ませんでした` in the last point.\n\nPicture introducing someone at a reunion: `田中さんは学生でした` — 'Mr. Tanaka was a student (back then).' Or correcting a wrong assumption about your past career: `私は医者ではありませんでした` — 'I was not a doctor.' The sentence frame is precisely the chapter-1 frame; you've only retuned the ending to the past.",
      bodyZh:
        "早在第 1 章,你就用系动词 `です` 造名词句:`学生です` 表示「是学生」。那处理的是现在,但我们谈人和事物时,很多内容其实是往事——「他当时是学生」「我以前的工作是老师」。动词有了过去的尾巴,名词也需要一个。\n\n`です` 的过去形是 `でした`。就这么简单——同一个名词、第 1 章那个提示主题的助词 `は`,只是末尾换成过去系动词。`学生です`(是学生)→ `学生でした`(曾是学生)。直觉和动词一模一样:名词提供意义,末尾可替换的系动词承载时态。\n\n要说「曾不是」,把第 1 章学过的否定系动词(`では ありません`)和同一个过去标记 `でした` 组合起来,得到郑重的 `ではありませんでした`——「曾不是」。它很长,但每个零件都眼熟:一个否定系动词被推入过去,正好对应上一节 `〜ません` 变成 `〜ませんでした` 的方式。\n\n想象在同学会上介绍某人:`田中さんは学生でした`——「田中先生(那时)曾是学生。」或者纠正别人对你过往职业的误解:`私は医者ではありませんでした`——「我曾经不是医生。」句型正是第 1 章那个句型,你只是把词尾重新调到了过去。",
      examples: [
        {
          jp: "田中さんは学生でした",
          reading: "たなかさんはがくせいでした",
          en: "Mr. Tanaka was a student.",
          zh: "田中先生曾是学生。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 田中さん = ProperNoun<"田中さん">;
type 学生 = ProperNoun<"学生">;

// です の過去形 → でした
type 田中さんは学生でした = \`\${PhraseWithParticle<田中さん, "は">}\${学生}でした\`;
`,
        },
        {
          jp: "私は医者ではありませんでした",
          reading: "わたしはいしゃではありませんでした",
          en: "I was not a doctor.",
          zh: "我曾经不是医生。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 医者 = ProperNoun<"医者">;

type 私は医者ではありませんでした = \`\${PhraseWithParticle<私, "は">}\${医者}ではありませんでした\`;
`,
        },
      ],
    },
    {
      id: "e07-4",
      titleEn: "Adjectives in the past",
      titleZh: "形容词的过去时",
      bodyEn:
        "You've moved verbs and nouns into the past; the last piece is describing how things were. You want to tell a friend the movie was interesting, or that the town used to be quiet. Here Japanese splits adjectives into two families that behave quite differently — and it's worth knowing which is which.\n\nThe first family is the i-adjectives, words that end in `い` like `おいしい` (delicious) or `おもしろい` (interesting). These carry their tense inside themselves: drop the final `い` and add `かった`. `おいしい` → `おいしかった` ('was delicious'). To make it polite for everyday speech, simply tack `です` on the end — `おいしかったです`. A common trap: do NOT say `おいしいでした`; the `い`-adjective already became past as `おいしかった`, and `です` here only adds politeness, never tense.\n\nThe second family is the na-adjectives, words like `静か` (quiet) that behave like nouns. They take their tense the way nouns do, with `でした` — exactly the `でした` from the previous point. `静かです` (is quiet) → `静かでした` (was quiet). So whether something 'was' depends on which family the describing word belongs to.\n\nIn practice you'll reach for both constantly. Walking out of a cinema you'd say `映画はおもしろかったです` — 'the movie was interesting' (i-adjective, self-conjugated, plus polite `です`). Remembering a neighborhood from years ago you'd say `町は静かでした` — 'the town was quiet' (na-adjective, riding on `でした`). Same past meaning, two different mechanics, and now you have both.",
      bodyZh:
        "你已经把动词和名词带入过去,最后一块是描述事物当时「怎么样」。你想告诉朋友电影很有趣,或者小镇以前很安静。这里日语把形容词分成行为相当不同的两族——分清谁是谁很值得。\n\n第一族是 i 形容词,即以 `い` 结尾的词,如 `おいしい`(好吃)、`おもしろい`(有趣)。它们把时态藏在自己身上:去掉词尾 `い`,加上 `かった`。`おいしい` → `おいしかった`(曾好吃)。日常口语里要显得礼貌,只需在末尾接 `です`——`おいしかったです`。一个常见陷阱:千万别说 `おいしいでした`;`い` 形容词早已变成过去式 `おいしかった`,这里的 `です` 只添礼貌,绝不承载时态。\n\n第二族是 な形容词,如 `静か`(安静),行为像名词。它们像名词那样借助 `でした` 表达时态——正是上一节那个 `でした`。`静かです`(安静)→ `静かでした`(曾安静)。所以某物「曾经怎样」,取决于这个描述词属于哪一族。\n\n实际中你会不断用到两者。走出电影院你会说 `映画はおもしろかったです`——「电影很有趣」(i 形容词自身变位,再加礼貌的 `です`)。回想多年前的某个街区,你会说 `町は静かでした`——「小镇曾经很安静」(な形容词搭乘 `でした`)。同样的过去含义,两套不同机制,现在你两者兼备了。",
      examples: [
        {
          jp: "映画はおもしろかったです",
          reading: "えいがはおもしろかったです",
          en: "The movie was interesting.",
          zh: "电影很有趣。",
          code: `import type { ProperNoun, IAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 映画 = ProperNoun<"映画">;
type おもしろい = IAdjective & { stem: "おもしろ"; ending: "い" };

// 過去形 → おもしろかった、丁寧に → +です
type 映画はおもしろかったです = \`\${PhraseWithParticle<映画, "は">}\${ConjugateAdjective<おもしろい, "過去形">}です\`;
`,
        },
        {
          jp: "町は静かでした",
          reading: "まちはしずかでした",
          en: "The town was quiet.",
          zh: "小镇曾经很安静。",
          code: `import type { ProperNoun, NaAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 町 = ProperNoun<"町">;
type 静か = NaAdjective & { stem: "静か" };

// na-adjective の過去形 → 静かでした
type 町は静かでした = \`\${PhraseWithParticle<町, "は">}\${ConjugateAdjective<静か, "過去形">}\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
