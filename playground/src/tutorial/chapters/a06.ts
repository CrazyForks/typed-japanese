import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a06",
  level: "advanced",
  order: 6,
  titleEn: "〜をめぐって / 〜にあたって / 〜に際して",
  titleZh: "〜をめぐって／〜にあたって／〜に際して",
  summaryEn:
    "Three formal noun-attaching expressions for written and ceremonial Japanese. `〜をめぐって` introduces the topic a dispute or discussion centers *around*; `〜にあたって` and `〜に際して` both mark a special *occasion* on which one does something, with `に際して` being the more written and weighty of the two. This chapter pins down their nuances and how each attaches.",
  summaryZh:
    "三个用于书面与正式场合的「接续名词」的表达。`〜をめぐって` 引出争论或讨论所「围绕」的话题;`〜にあたって` 与 `〜に際して` 都用来标记做某事的特殊「时机、场合」,其中 `に際して` 更书面、更郑重。本章厘清三者的细微差别以及各自的接续方式。",
  points: [
    {
      id: "a06-1",
      titleEn: "〜をめぐって — concerning / centering on",
      titleZh: "〜をめぐって ——「围绕……」",
      bodyEn:
        "`Noun をめぐって` means “concerning / centering on / over (an issue)”. It attaches directly to a noun and is used when there is debate, conflict, or competing opinions *revolving around* that noun. The following clause is typically a verb of disputing, discussing, or competing — 議論する, 対立する, 争う.\n\nWhen it modifies a following noun, it takes the form `〜をめぐる + Noun` (e.g. 遺産をめぐる争い). The core image is several parties circling the same point.",
      bodyZh:
        "`名词 をめぐって` 意为「围绕……、就……(而争论)」。它直接接在名词后,用于围绕该名词存在争论、冲突或不同意见的场合。后续小句通常是表示争论、讨论、竞争的动词 —— 議論する、対立する、争う。\n\n当它修饰后面的名词时,采用 `〜をめぐる + 名词` 的形式(如 遺産をめぐる争い)。其核心意象是多方围绕同一个点。",
      examples: [
        {
          jp: "その問題をめぐって議論した",
          reading: "そのもんだいをめぐってぎろんした",
          en: "We debated over that issue.",
          zh: "围绕那个问题进行了讨论。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 問題 = ProperNoun<"問題">;
type 議論 = ProperNoun<"議論">;
type する = IrregularVerb & { dictionary: "する" };

// その + 問題 + をめぐって + 議論 + した (た形 of する)
type その問題をめぐって議論した = \`その\${問題}をめぐって\${議論}\${ConjugateVerb<する, "た形">}\`;
`,
        },
        {
          jp: "予算をめぐって対立する",
          reading: "よさんをめぐってたいりつする",
          en: "They are in conflict over the budget.",
          zh: "围绕预算针锋相对。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 予算 = ProperNoun<"予算">;
type 対立 = ProperNoun<"対立">;
type する = IrregularVerb & { dictionary: "する" };

// 予算 + をめぐって + 対立 + する (辞書形)
type 予算をめぐって対立する = \`\${予算}をめぐって\${対立}\${ConjugateVerb<する, "辞書形">}\`;
`,
        },
      ],
    },
    {
      id: "a06-2",
      titleEn: "〜にあたって — on the occasion of",
      titleZh: "〜にあたって ——「在……之际」",
      bodyEn:
        "`Noun にあたって` (or `Verb-辞書形 にあたって`) means “on the occasion of / when about to”. It marks a significant, often one-time juncture — starting a new job, opening a ceremony — and the main clause states what one does *in preparation for or in light of* that juncture.\n\nIt looks forward to the event, so it pairs naturally with verbs of greeting, resolving, or preparing. A more colloquial paraphrase is `〜の時に`, but `にあたって` is distinctly formal.",
      bodyZh:
        "`名词 にあたって`(或 `动词辞书形 にあたって`)意为「在……之际、当要……的时候」。它标记一个重要的、往往是一次性的节点 —— 开始新工作、典礼开幕 —— 主句陈述「为此/借此」所做之事。\n\n它面向即将到来的事件,因此常与表示致辞、下决心、准备的动词搭配。更口语的说法是 `〜の時に`,但 `にあたって` 明显更正式。",
      examples: [
        {
          jp: "開会にあたって挨拶する",
          reading: "かいかいにあたってあいさつする",
          en: "I will say a few words on the occasion of the opening.",
          zh: "在开会之际致辞。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 開会 = ProperNoun<"開会">;
type 挨拶 = ProperNoun<"挨拶">;
type する = IrregularVerb & { dictionary: "する" };

// 開会 + にあたって + 挨拶 + する (辞書形)
type 開会にあたって挨拶する = \`\${開会}にあたって\${挨拶}\${ConjugateVerb<する, "辞書形">}\`;
`,
        },
        {
          jp: "新年にあたって決意した",
          reading: "しんねんにあたってけついした",
          en: "On the occasion of the new year, I made a resolution.",
          zh: "在新年之际下定了决心。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 新年 = ProperNoun<"新年">;
type 決意 = ProperNoun<"決意">;
type する = IrregularVerb & { dictionary: "する" };

// 新年 + にあたって + 決意 + した (た形 of する)
type 新年にあたって決意した = \`\${新年}にあたって\${決意}\${ConjugateVerb<する, "た形">}\`;
`,
        },
      ],
    },
    {
      id: "a06-3",
      titleEn: "〜に際して — at the time of",
      titleZh: "〜に際して ——「值此……之时」",
      bodyEn:
        "`Noun に際して` (or `Verb-辞書形 に際して`) also means “at the time of / on the occasion of”, and overlaps heavily with `にあたって`. The difference is register: `に際して` is more written, more solemn, and reserved for weighty events — departures, graduations, signing contracts, disasters.\n\nUse it where English would reach for “upon …” or “in connection with …”. Like `にあたって`, it looks toward the event and is followed by a deliberate action.",
      bodyZh:
        "`名词 に際して`(或 `动词辞书形 に際して`)同样意为「值此……之时、当……之际」,与 `にあたって` 有很大重叠。区别在于语体:`に際して` 更书面、更庄重,多用于分量较重的事件 —— 离别、毕业、签约、灾害。\n\n相当于英语的 “upon …” 或 “in connection with …”。和 `にあたって` 一样,它面向事件,后接一个郑重的动作。",
      examples: [
        {
          jp: "卒業に際して写真を撮った",
          reading: "そつぎょうにさいしてしゃしんをとった",
          en: "We took a photo upon graduation.",
          zh: "值此毕业之际拍了照片。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 卒業 = ProperNoun<"卒業">;
type 写真 = ProperNoun<"写真">;
type 撮る = GodanVerb & { stem: "撮"; ending: "る" };

// 卒業 + に際して + 写真 を + 撮った (た形)
type 卒業に際して写真を撮った = \`\${卒業}に際して\${PhraseWithParticle<写真, "を">}\${ConjugateVerb<撮る, "た形">}\`;
`,
        },
        {
          jp: "契約に際して説明する",
          reading: "けいやくにさいしてせつめいする",
          en: "I will explain at the time of signing the contract.",
          zh: "签约之际会作说明。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 契約 = ProperNoun<"契約">;
type 説明 = ProperNoun<"説明">;
type する = IrregularVerb & { dictionary: "する" };

// 契約 + に際して + 説明 + する (辞書形)
type 契約に際して説明する = \`\${契約}に際して\${説明}\${ConjugateVerb<する, "辞書形">}\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
