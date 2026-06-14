import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a03",
  level: "advanced",
  order: 3,
  titleEn: "The 〜わけ family",
  titleZh: "〜わけ系列",
  summaryEn:
    "Picture explaining a friend's no-show: he pulled an all-nighter, so of course he's exhausted — back in i10 you learned to wrap that up with `〜わけだ` (“no wonder”). But you couldn't yet soften a conclusion (“it's not that I hate sushi, I just ate”) or say something is socially out of the question (“I can't very well leave before my boss does”). This chapter completes the `わけ` family: `〜わけだ` affirms a line of reasoning, `〜わけではない` partially denies one, and `〜わけにはいかない` says circumstances simply won't allow it. They all hang off the same plain-form clause, so the whole game is telling the three apart.",
  summaryZh:
    "想象你替朋友的缺席解释:他熬了一整夜,当然累垮了 —— 在 i10 里你已学会用 `〜わけだ`(「难怪」)收尾。但你还无法缓和一个结论(「我并不是讨厌寿司,只是刚吃过」),也无法表达某事在社交上「绝不可行」(「老板还没走,我哪能先溜」)。本章补全 `わけ` 系列:`〜わけだ` 肯定一条推理,`〜わけではない` 对结论作部分否定,`〜わけにはいかない` 则表示情势根本不容许。三者都接在同样的简体小句之后,所以全部功夫都在于分清它们。",
  points: [
    {
      id: "a03-1",
      titleEn: "〜わけだ — “so that's why / naturally”",
      titleZh: "〜わけだ ——「难怪、原来如此、当然」",
      bodyEn:
        "In i10 you met `わけ` as a formal noun meaning “reason, the logical grounds” and used `〜わけだ` to react to a fact that suddenly makes everything click: “ah, so that's why”. Compare it with the `はず` from that same chapter — `はず` looks forward (“he should be coming, based on what I expect”), while `〜わけだ` looks backward, slotting a new fact into a chain of reasoning you can now see whole. You learn your coworker was up all night, and it dawns on you: no wonder he's nodding off.\n\nThe attachment follows the plain-form pattern you already know. Verbs and い-adjectives connect directly (`来るわけだ`, `眠いわけだ`); nouns and な-adjectives take a linking `な` (`日本人なわけだ`), the same `な` that glues a な-adjective to its noun back in e08. The reason for the bare `な` is that `わけ` is itself a noun, so the clause in front modifies it like any noun-modifying clause.\n\nA very common spoken frame is 「道理で〜わけだ」 — `道理で` means “that explains it”, and the `わけだ` lands the conclusion. So you slump at your desk and mutter 「道理で眠いわけだ」: no wonder I'm sleepy. Swap `だ` for `です` whenever you need the polite register.\n\nOne pitfall: `〜わけだ` is not just a fancy `からだ` (“it's because”). It specifically frames the statement as the natural result of grounds already on the table — the satisfying click of a puzzle piece, not a fresh excuse.",
      bodyZh:
        "在 i10 里你认识了形式名词 `わけ`,意为「道理、逻辑根据」,并用 `〜わけだ` 回应一个让一切豁然贯通的事实:「啊,原来如此」。把它和同章的 `はず` 比一比 —— `はず` 朝前看(「按我的预期,他应该会来」),而 `〜わけだ` 朝后看,把新事实嵌入一条如今看得完整的推理链。你得知同事熬了一宿,顿时明白:难怪他直打瞌睡。\n\n接续沿用你熟悉的简体形规则。动词、い形容词直接连接(`来るわけだ`、`眠いわけだ`);名词和な形容词加连接的 `な`(`日本人なわけだ`),正是 e08 里把な形容词黏到名词上的那个 `な`。之所以要这个 `な`,是因为 `わけ` 本身是名词,前面的小句像任何修饰名词的从句一样修饰它。\n\n口语里极常见的框架是「道理で〜わけだ」 —— `道理で` 意为「这就说得通了」,`わけだ` 落实结论。于是你瘫在桌前嘟囔一句「道理で眠いわけだ」:难怪这么困。需要礼貌体时把 `だ` 换成 `です` 即可。\n\n一个易错点:`〜わけだ` 不是花哨版的 `からだ`(「因为」)。它专门把陈述框定为「已摆在台面上的根据」自然导出的结果 —— 是拼图扣合的那一声「咔哒」,而非临时找的理由。",
      examples: [
        {
          jp: "道理で眠いわけだ",
          reading: "どうりでねむいわけだ",
          en: "No wonder I'm sleepy.",
          zh: "难怪这么困。",
          code: `import type { ProperNoun, IAdjective, ConjugateAdjective } from "typed-japanese";

type 道理で = ProperNoun<"道理で">;
type 眠い = IAdjective & { stem: "眠"; ending: "い" };

// 道理で + 眠い (基本形) + わけだ
type 道理で眠いわけだ = \`\${道理で}\${ConjugateAdjective<眠い, "基本形">}わけだ\`;
`,
        },
        {
          jp: "彼は来ないわけだ",
          reading: "かれはこないわけだ",
          en: "So that's why he isn't coming.",
          zh: "难怪他不来。",
          code: `import type { ProperNoun, PhraseWithParticle, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 来る = IrregularVerb & { dictionary: "来る" };

// 彼 + は + 来る (ない形 → 来) + ない + わけだ
type 彼は来ないわけだ = \`\${PhraseWithParticle<彼, "は">}\${ConjugateVerb<来る, "ない形">}ないわけだ\`;
`,
        },
        {
          jp: "彼は日本人なわけだ",
          reading: "かれはにほんじんなわけだ",
          en: "So that's why — he's Japanese, after all.",
          zh: "原来如此,他是日本人嘛。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 日本人 = ProperNoun<"日本人">;

// 彼 + は + 日本人 + な + わけだ (noun + な before わけ)
type 彼は日本人なわけだ = \`\${PhraseWithParticle<彼, "は">}\${日本人}なわけだ\`;
`,
        },
      ],
    },
    {
      id: "a03-2",
      titleEn: "〜わけではない — “it's not that / not necessarily”",
      titleZh: "〜わけではない ——「并不是说……、未必」",
      bodyEn:
        "Now flip the polarity. With the plain negative from e13 you could already say 「嫌いではない」 — “I don't dislike it”, a flat statement of fact. But sometimes a flat negative is too strong: your friend offers you sushi, you wave it off, and they look hurt, assuming you hate it. What you actually want to deny isn't the sushi — it's the conclusion they jumped to. `〜わけではない` does exactly that: it negates the reasoning (`わけ` again), not the predicate itself, giving you “it's not that I dislike it” — I just ate.\n\nBecause it cancels an inference rather than the fact, `〜わけではない` is a partial, hedging denial — it softens and leaves room, where the bare negative slams the door. That nuance is why it so often teams up with adverbs like `別に` (“not particularly”) or `全部` (“not entirely”): 「全部わかるわけではない」 isn't “I understand nothing”, it's “I don't necessarily get all of it”.\n\nThe attachment mirrors `わけだ` precisely, since the structure is identical: verbs and い-adjectives connect directly (`わかるわけではない`, `高いわけではない`), nouns and な-adjectives take `な` (`嫌いなわけではない`). In casual speech it contracts to 「〜わけじゃない」, which you'll hear constantly.\n\nKeep one distinction sharp. 「嫌いじゃない」 says plainly “I don't dislike it”; 「嫌いなわけじゃない」 says “it's not that I dislike it” — same surface negative, but the second one is busy heading off a misunderstanding rather than reporting your taste.",
      bodyZh:
        "现在把极性翻转过来。靠 e13 的普通否定,你已能说「嫌いではない」 —— 「我不讨厌」,一句平直的事实陈述。但有时平直的否定太冲:朋友请你吃寿司,你摆手推辞,对方面露不悦,以为你厌恶它。你真正想否定的并不是寿司,而是他们贸然得出的结论。`〜わけではない` 正好做这件事:它否定的是「推理」(又是 `わけ`),而非谓语本身,于是给出「我并不是讨厌」 —— 只是刚吃过罢了。\n\n因为它取消的是推断而非事实,`〜わけではない` 是一种部分的、留有余地的否定 —— 它缓和并留白,而光秃秃的否定则一把关上门。正因这层语感,它常与 `別に`(「并不特别」)、`全部`(「未必全部」)等副词搭档:「全部わかるわけではない」不是「我什么都不懂」,而是「我未必全都懂」。\n\n接续与 `わけだ` 完全一致,因为结构相同:动词、い形容词直接接(`わかるわけではない`、`高いわけではない`),名词和な形容词用 `な`(`嫌いなわけではない`)。口语里缩约成「〜わけじゃない」,你会时时听到。\n\n务必分清一点。「嫌いじゃない」平直地说「我不讨厌」;「嫌いなわけじゃない」说「我并不是讨厌」 —— 表面同是否定,后者却忙着化解误会,而非陈述你的口味。",
      examples: [
        {
          jp: "野菜が嫌いなわけではない",
          reading: "やさいがきらいなわけではない",
          en: "It's not that I dislike vegetables.",
          zh: "我并不是讨厌蔬菜。",
          code: `import type { ProperNoun, PhraseWithParticle, NaAdjective, ConjugateAdjective } from "typed-japanese";

type 野菜 = ProperNoun<"野菜">;
type 嫌い = NaAdjective & { stem: "嫌い" };

// 野菜 + が + 嫌いな (基本形 → na-adjective + な) + わけではない
type 野菜が嫌いなわけではない = \`\${PhraseWithParticle<野菜, "が">}\${ConjugateAdjective<嫌い, "基本形">}わけではない\`;
`,
        },
        {
          jp: "全部わかるわけではない",
          reading: "ぜんぶわかるわけではない",
          en: "I don't necessarily understand all of it.",
          zh: "我未必全都懂。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type 全部 = ProperNoun<"全部">;
type わかる = GodanVerb & { stem: "わか"; ending: "る" };

// 全部 + わかる (辞書形) + わけではない
type 全部わかるわけではない = \`\${全部}\${ConjugateVerb<わかる, "辞書形">}わけではない\`;
`,
        },
        {
          jp: "この店が高いわけではない",
          reading: "このみせがたかいわけではない",
          en: "It's not that this shop is expensive.",
          zh: "这家店并不算贵。",
          code: `import type { ProperNoun, PhraseWithParticle, IAdjective, ConjugateAdjective } from "typed-japanese";

type この店 = ProperNoun<"この店">;
type 高い = IAdjective & { stem: "高"; ending: "い" };

// この店 + が + 高い (基本形) + わけではない (い-adjective connects directly)
type この店が高いわけではない = \`\${PhraseWithParticle<この店, "が">}\${ConjugateAdjective<高い, "基本形">}わけではない\`;
`,
        },
      ],
    },
    {
      id: "a03-3",
      titleEn: "〜わけにはいかない — “I can't very well…”",
      titleZh: "〜わけにはいかない ——「不能、不可以」",
      bodyEn:
        "Back in e18 the potential form gave you a clean way to say you physically cannot do something — 食べられない, 行けない. But there's another, very Japanese kind of “can't”: you are perfectly able to do the thing, yet circumstances — your boss is still in the room, the customer is waiting, your team is counting on you — make doing it unthinkable. The office party is winding down and you'd love to head home, but the boss hasn't moved; you can't very well leave first. That social, moral, common-sense impossibility is `〜わけにはいかない`.\n\nThe shape is literally “there's no `わけ` by which it goes” — no path of reasoning leads to it being okay, so it just won't fly. It attaches to a verb's dictionary form: `帰るわけにはいかない` (I can't just go home), `諦めるわけにはいかない` (I can't afford to give up). Hold it against potential `〜られない`: that one is the physical cannot, this one is the won't or mustn't, blocked by what's proper rather than what's possible.\n\nThere's a powerful twist. Attach it to the ない形 you learned in e13 and you get the double negative 「〜ないわけにはいかない」 — “there's no path by which I avoid doing it”, i.e. “I have no choice but to”. This is the obligation cousin of e17's `〜なければならない`, but heavier with social pressure: 行かないわけにはいかない means going is unavoidable, like it or not.\n\nIn the workplace this is everyday speech. A customer files a complaint and your manager says you can't just ignore it; you yourself can't take the day off when the deadline looms — 「今日は休むわけにはいきません」, using the polite 「〜わけにはいきません」. Say it and you signal not inability but resolve and responsibility.",
      bodyZh:
        "回到 e18,可能态给了你一种干脆的说法,表示你客观上「做不到」 —— 食べられない、行けない。但还有另一种很「日式」的「不能」:你完全有能力做,可情势 —— 老板还在场、客户在等、团队指望着你 —— 使得做这件事根本不可想象。聚会渐近尾声,你巴不得回家,可老板还没挪窝;你哪能先走。这种社交、道义、常理上的不可行,就是 `〜わけにはいかない`。\n\n它的字面是「没有一条 `わけ`(道理)能走通」 —— 没有任何推理路径能让它变得妥当,于是行不通。它接动词辞书形:`帰るわけにはいかない`(不能就这样回去)、`諦めるわけにはいかない`(不能放弃)。再与可能态 `〜られない` 对照:那是「客观上做不到」,这是「不该/不可以」,卡住它的是「妥不妥」而非「能不能」。\n\n还有个有力的变招。把它接到 e13 学过的ない形上,就得到双重否定「〜ないわけにはいかない」 —— 「没有一条路能让我『不做』」,即「不得不做」。这是 e17 `〜なければならない` 的近亲,却更添几分社会压力:行かないわけにはいかない 意为去是免不了的,情不情愿都得去。\n\n在职场里这是日常话。客户投诉,主管说不能就这么不理;临近截止,你自己也不能请假 ——「今日は休むわけにはいきません」,用的是礼貌形「〜わけにはいきません」。说出这句,你传达的不是无能为力,而是决心与担当。",
      examples: [
        {
          jp: "今帰るわけにはいかない",
          reading: "いまかえるわけにはいかない",
          en: "I can't just leave now.",
          zh: "现在不能就这样回去。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type 今 = ProperNoun<"今">;
type 帰る = GodanVerb & { stem: "帰"; ending: "る" };

// 今 + 帰る (辞書形) + わけにはいかない
type 今帰るわけにはいかない = \`\${今}\${ConjugateVerb<帰る, "辞書形">}わけにはいかない\`;
`,
        },
        {
          jp: "ここで諦めるわけにはいかない",
          reading: "ここであきらめるわけにはいかない",
          en: "I can't afford to give up here.",
          zh: "不能在这里放弃。",
          code: `import type { IchidanVerb, ConjugateVerb } from "typed-japanese";

type 諦める = IchidanVerb & { stem: "諦め"; ending: "る" };

// ここで + 諦める (辞書形) + わけにはいかない
type ここで諦めるわけにはいかない = \`ここで\${ConjugateVerb<諦める, "辞書形">}わけにはいかない\`;
`,
        },
        {
          jp: "今日は休むわけにはいきません",
          reading: "きょうはやすむわけにはいきません",
          en: "I can't take the day off today.",
          zh: "今天不能请假。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 今日 = ProperNoun<"今日">;
type 休む = GodanVerb & { stem: "休"; ending: "む" };

// 今日 + は + 休む (辞書形) + わけにはいきません (polite)
type 今日は休むわけにはいきません = \`\${PhraseWithParticle<今日, "は">}\${ConjugateVerb<休む, "辞書形">}わけにはいきません\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
