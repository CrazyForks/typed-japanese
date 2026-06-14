import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a06",
  level: "advanced",
  order: 6,
  titleEn: "〜をめぐって / 〜にあたって / 〜に際して",
  titleZh: "〜をめぐって／〜にあたって／〜に際して",
  summaryEn:
    "You open a newspaper and the headline reads “protests centering on the new tax”; later a manager rises and says “on the occasion of this opening…”. Ordinary `は` and `に` can't strike that formal, occasion-framing tone, so written and ceremonial Japanese recycle three old verb phrases as compound particles. `〜をめぐって` frames an issue that a dispute revolves around; `〜にあたって` and `〜に際して` both mark a weighty occasion, with `に際して` being the more written and solemn of the pair.",
  summaryZh:
    "你翻开报纸,标题写着「围绕新税的抗议」;稍后一位经理起身致辞:「值此开幕之际……」。普通的 `は`、`に` 撑不起这种正式、标记「时机」的语气,于是书面与正式场合的日语把三个旧的动词短语回收成复合助词。`〜をめぐって` 标出争论所「围绕」的话题;`〜にあたって` 与 `〜に際して` 都标记分量较重的「时机、场合」,其中 `に際して` 更书面、更庄重。",
  points: [
    {
      id: "a06-1",
      titleEn: "〜をめぐって — concerning / centering on",
      titleZh: "〜をめぐって ——「围绕……」",
      bodyEn:
        "Back in ch.5 you learned `を` to mark the direct object of a verb, and `は` to mark a topic. Those handle “I read the book” or “as for the budget…”, but neither captures the journalistic idea of a controversy swirling around a single point — “the debate over the merger”, “the conflict centering on the budget”. For that you need a connector that says “this noun is the thing everyone is circling”.\n\n`Noun をめぐって` does exactly this. It attaches straight onto a plain noun and means “concerning / centering on / over (an issue)”. The shape isn't arbitrary: it comes from the verb 巡る, “to go around”, so the literal picture is several parties walking in circles around one disputed spot — which is why the following clause is almost always a verb of friction: 議論する (to debate), 対立する (to clash), 争う (to fight over).\n\nPicture a city-hall news segment. The reporter doesn't say residents simply talked; she says 新しい税をめぐって住民が対立している — the new tax is the hub, and the opposing camps revolve around it. That single connector tells the audience instantly that there is conflict, not just conversation.\n\nOne form to file away: when the phrase modifies a following noun rather than a verb, it changes to `〜をめぐる + Noun`, as in 遺産をめぐる争い (“a dispute over the inheritance”). Same circling image, just dressed as an adjective. And keep `をめぐって` for genuine disputes or competing views — if you only mean “about” a calm topic, the everyday `について` from your earlier studies is the safer choice.",
      bodyZh:
        "在第 5 课你学过 `を` 标记动词的直接宾语,`は` 标记话题。它们能处理「我读书」「至于预算嘛……」,却表达不出新闻里那种围绕某一焦点「打转」的争议感 —— 「围绕合并的辩论」「围绕预算的冲突」。这时你需要一个能说出「这个名词是大家围着转的那个点」的连接词。\n\n`名词 をめぐって` 正是为此而生。它直接接在普通名词后,意为「围绕……、就……(而争)」。这个形状并非随意:它来自动词 巡る(绕行),字面意象就是数方围着同一个有争议的点兜圈子 —— 所以后续小句几乎总是表示摩擦的动词:議論する(讨论)、対立する(对立)、争う(争夺)。\n\n想象一段市政厅的新闻。记者不会只说居民谈了谈,而会说 新しい税をめぐって住民が対立している —— 新税是轴心,对立的阵营围着它转。这一个连接词立刻告诉观众:这是冲突,而非闲谈。\n\n还有一个形式要记:当它修饰后面的名词、而非动词时,要变成 `〜をめぐる + 名词`,如 遺産をめぐる争い(围绕遗产的争夺)。还是兜圈子的意象,只是换上了定语的外衣。另外,`をめぐって` 留给真正的争论或对立意见 —— 若你只是平和地「关于」某话题,前面学过的日常 `について` 更稳妥。",
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
        "From ch.6 you can already pin an action to a point in time with `に` — 三時に (at three o'clock), 月曜日に (on Monday). That works for a date on the calendar, but it falls flat when the moment is a meaningful milestone: the launch of a project, the opening of a ceremony, the start of a new year. There you want to say not merely “when” but “on this significant occasion, here is what I do in light of it”.\n\n`Noun にあたって` (and after a verb, `Verb-辞書形 にあたって`) supplies that weight. It marks an important, usually one-time juncture, and the main clause states what one does in preparation for or in honor of it. The form grows out of the verb 当たる, “to face / to meet head-on” — you are squarely meeting an occasion — which is why it pairs so naturally with verbs of greeting, resolving, and preparing: 挨拶する, 決意する, 準備する.\n\nImagine you're the manager asked to open a conference. You stand, and before the real business you say 開会にあたって一言ご挨拶申し上げます — “on the occasion of this opening, allow me a few words.” Plain `に` would sound like you're just noting the clock; `にあたって` signals to the room that you treat this beginning as something deliberate and ceremonial.\n\nThe casual paraphrase is the `〜の時に` (“when…”) you already know, but swapping it in would deflate the register. Reserve `にあたって` for genuine occasions you want to dignify — the formality is the whole point.",
      bodyZh:
        "从第 6 课起,你已能用 `に` 把动作钉在某个时间点上 —— 三時に(三点)、月曜日に(周一)。这适用于日历上的日期,可一旦那一刻是个有意义的里程碑 —— 项目启动、典礼开幕、新年伊始 —— 它就显得苍白。你想说的不只是「何时」,而是「值此重要时机,我为之/借此而做某事」。\n\n`名词 にあたって`(接动词时为 `动词辞书形 にあたって`)正好赋予这份分量。它标记一个重要、通常一次性的节点,主句陈述为此或借此所做之事。这个形式来自动词 当たる(正面面对、迎上),你正是在郑重地迎向一个时机 —— 所以它常与致辞、下决心、做准备一类动词搭配:挨拶する、決意する、準備する。\n\n设想你是受命为大会开场的经理。你起身,在进入正题前说 開会にあたって一言ご挨拶申し上げます ——「值此开会之际,容我说几句」。单用 `に` 会像只是在报时;`にあたって` 则向全场表明:你把这个开端当作一件郑重而有仪式感的事。\n\n口语的替换说法是你早学过的 `〜の時に`(……的时候),但换上去会让语体瞬间松垮。把 `にあたって` 留给你想郑重对待的真正时机 —— 那份正式感正是它的全部意义。",
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
        "Having just met `にあたって`, you might wonder why Japanese keeps a near-twin in reserve. The reason is register. There are moments so weighty — a departure, a graduation, the signing of a contract, the aftermath of a disaster — that even the formal `にあたって` can feel a touch too everyday for the printed page or the podium. For those, written Japanese reaches one rung higher.\n\n`Noun に際して` (or `Verb-辞書形 に際して`) also means “at the time of / on the occasion of”, overlapping heavily with `にあたって`, but it is more written, more solemn, and saved for events of genuine consequence. The form draws on 際, “the edge or juncture of a moment”, so it pictures you standing right at the brink of an important threshold — and like its twin, it looks toward the event and is followed by a deliberate, considered action.\n\nThink of a formal notice pinned by the exit: 退職に際して、社員証をご返却ください — “upon leaving the company, please return your badge.” Or a graduation address that opens 卒業に際して — “on this graduating occasion…”. The English instinct here is “upon …” or “in connection with …”, and that elevated flavor is exactly the niche `に際して` fills.\n\nIn practice, when both fit, let the weight of the occasion decide: `にあたって` for a project kickoff or a planning meeting, `に際して` for graduations, contracts, and farewells you want to sound truly ceremonial. Use the heavier one for a trivial moment and it will sound overblown.",
      bodyZh:
        "刚学完 `にあたって`,你或许会问:日语为何还要备一个几近孪生的说法?答案是语体。有些时刻分量极重 —— 离别、毕业、签约、灾后 —— 即便正式的 `にあたって`,放进印刷文字或讲台之上,也可能略显日常。对这些场合,书面日语再上一个台阶。\n\n`名词 に際して`(或 `动词辞书形 に際して`)同样意为「值此……之时、当……之际」,与 `にあたって` 大量重叠,但更书面、更庄重,留给真正有分量的事件。这个形式取自 際(一刻的边缘、关口),意象是你正站在某个重要门槛的边沿上 —— 和它的孪生兄弟一样,它面向事件,后接一个郑重、经过斟酌的动作。\n\n想象出口处张贴的正式告示:退職に際して、社員証をご返却ください ——「值此离职之际,请归还员工证」。或是一段以 卒業に際して 开篇的毕业致辞 ——「值此毕业之时……」。对应英语的直觉是 “upon …” 或 “in connection with …”,那份庄重正是 `に際して` 所填补的位置。\n\n实操中,两者都合适时,让场合的分量来定夺:项目启动、筹备会议用 `にあたって`;想真正显出仪式感的毕业、签约、告别则用 `に際して`。把更重的那个用在琐碎时刻,会显得小题大做。",
      examples: [
        {
          jp: "卒業に際して写真を撮った",
          reading: "そつぎょうにさいしてしゃしんをとった",
          en: "We took a photo upon graduation.",
          zh: "值此毕业之际拍了照片。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 卒業 = ProperNoun<"卒業">;
type に際して = ProperNoun<"に際して">;
type 写真 = ProperNoun<"写真">;
type 撮る = GodanVerb & { stem: "撮"; ending: "る" };

// 卒業 + に際して + 写真 を + 撮った (た形)
type 卒業に際して写真を撮った = \`\${卒業}\${に際して}\${PhraseWithParticle<写真, "を">}\${ConjugateVerb<撮る, "た形">}\`;
`,
        },
        {
          jp: "契約に際して説明する",
          reading: "けいやくにさいしてせつめいする",
          en: "I will explain at the time of signing the contract.",
          zh: "签约之际会作说明。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 契約 = ProperNoun<"契約">;
type に際して = ProperNoun<"に際して">;
type 説明 = ProperNoun<"説明">;
type する = IrregularVerb & { dictionary: "する" };

// 契約 + に際して + 説明 + する (辞書形)
type 契約に際して説明する = \`\${契約}\${に際して}\${説明}\${ConjugateVerb<する, "辞書形">}\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
