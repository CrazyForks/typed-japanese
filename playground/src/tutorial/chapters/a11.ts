import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a11",
  level: "advanced",
  order: 11,
  titleEn: "〜次第 / 〜上で / 〜限り / 〜反面",
  titleZh: "〜次第／〜上で／〜限り／〜反面",
  summaryEn:
    "Picture writing a business email: you want to say “I'll contact you the moment it's decided,” “please decide after reviewing the documents,” “as long as I'm here you'll be fine,” and “it's cheap, but the quality is low.” Your conditionals from `〜たら`, `〜と`, and `〜ば` got you close, but they can't pin down this precise timing and scope. This chapter recycles four ordinary nouns — 次第 (order of dependence), 上 (on top of), 限り (a boundary), 反面 (the opposite face) — into connectors whose literal meaning still glows through.",
  summaryZh:
    "想象你正在写一封商务邮件:你想说「一确定就联系你」「请看过文件之后再决定」「只要有我在就没问题」「便宜,但另一方面质量差」。你学过的 `〜たら`、`〜と`、`〜ば` 等条件表达已经很接近,却无法精确锁定这种时机与范围。本章把四个普通名词 —— 次第(依存的次序)、上(在……之上)、限り(界限)、反面(相反的一面)—— 改造成接续词,而它们的字面含义仍清晰可见。",
  points: [
    {
      id: "a11-1",
      titleEn: "〜次第 — as soon as / depending on",
      titleZh: "〜次第 ——「一……就……／取决于」",
      bodyEn:
        "You already have `〜てから` (ch.10) for “after doing X, then Y” and `〜たら` (ch.16) for “when/once X.” But in a business email, neither feels urgent enough for “the instant it's decided, I'll act.” That immediacy is exactly what `〜次第` adds. The noun 次第 carries a sense of “order, sequence of dependence,” so the phrase says: as soon as the first thing falls into place, the next follows with no gap.\n\nThe rule: take the `〜ます` stem of a verb (ch.5) — drop the `ます` — and attach 次第. So 着きます becomes `着き次第`, “the moment I arrive.” One firm constraint: the second clause must point to the future. You're announcing what you will do, so `〜次第` never describes something that already happened.\n\nPicture replying to a client who's waiting on a meeting room: 駅に着き次第連絡する — “I'll contact you the moment I reach the station.” It's crisper and more professional than 着いたら連絡する, which is why it lives in formal speech and email.\n\nThe same character has a second life. Attach 次第 to a noun and it flips to “depending on / determined by”: 結果次第 means “depending on the result,” often followed by で as in 結果次第で決める. The trick to telling them apart is simply what comes before — a verb stem gives you “as soon as,” a bare noun gives you “depending on.”",
      bodyZh:
        "你已经有了 `〜てから`(第10章)表示「做了 X 之后再 Y」,也有 `〜たら`(第16章)表示「一旦/当 X」。但在商务邮件里,这两个都不够紧迫,无法表达「一确定就立刻行动」。而这种「即刻性」正是 `〜次第` 所补足的。名词 次第 本身带有「次序、依存的先后」之意,所以整个表达是说:前项一就位,后项毫无间隙地随之而来。\n\n规则:取动词的 `〜ます` 词干(第5章)—— 去掉 `ます` —— 再接 次第。于是 着きます 变成 `着き次第`,「我一到就……」。有一条硬性限制:后项必须指向未来。你是在宣告将要做的事,所以 `〜次第` 绝不用于已经发生的事。\n\n想象你回复一位正等着会议室的客户:駅に着き次第連絡する ——「我一到车站就联系您」。它比 着いたら連絡する 更利落、更专业,因此常见于正式场合与邮件。\n\n同一个词还有另一重身份。把 次第 接在名词后,它就转为「取决于、视……而定」:結果次第 意为「视结果而定」,后面常接 で,如 結果次第で決める。区分两者的诀窍很简单 —— 看它前面是什么:动词词干得到「一……就……」,光秃秃的名词则得到「取决于」。",
      examples: [
        {
          jp: "駅に着き次第連絡する",
          reading: "えきにつきしだいれんらくする",
          en: "I will contact you as soon as I arrive at the station.",
          zh: "一到车站就联系你。",
          code: `import type { ProperNoun, GodanVerb, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 駅 = ProperNoun<"駅">;
type 着く = GodanVerb & { stem: "着"; ending: "く" };
type 次第 = ProperNoun<"次第">;
type 連絡 = ProperNoun<"連絡">;
type する = IrregularVerb & { dictionary: "する" };

// 駅 に + 着き (ます形 stem of 着く) + 次第 + 連絡 + する (辞書形)
type 駅に着き次第連絡する = \`\${PhraseWithParticle<駅, "に">}\${ConjugateVerb<着く, "ます形">}\${次第}\${連絡}\${ConjugateVerb<する, "辞書形">}\`;
`,
        },
        {
          jp: "結果次第で決める",
          reading: "けっかしだいできめる",
          en: "We will decide depending on the result.",
          zh: "视结果而定。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb } from "typed-japanese";

type 結果 = ProperNoun<"結果">;
type 次第 = ProperNoun<"次第">;
type 決める = IchidanVerb & { stem: "決め"; ending: "る" };

// 結果 + 次第 + で + 決める (辞書形)
type 結果次第で決める = \`\${結果}\${次第}で\${ConjugateVerb<決める, "辞書形">}\`;
`,
        },
      ],
    },
    {
      id: "a11-2",
      titleEn: "〜上で — upon doing / in the course of",
      titleZh: "〜上で ——「在……之后／在……方面」",
      bodyEn:
        "Again you might reach for `〜てから`, “after doing X.” But `〜てから` is just a timeline — first this, then that. When you want to stress that the first step is a deliberate foundation the second one rests on, you need `〜上で`. The noun 上 means “on top of / upon,” so the image is concrete: you do X first, and then you stand on top of it to take the next step.\n\nThe rule: attach 上で (read うえで) to the `〜た` plain past form of a verb (ch.13). 確認した上で means “after confirming (and on that basis).” This is the language of careful procedures — exactly what you'd write in an instruction: 書類を見た上で判断する, “please make the judgment after reviewing the documents.” The 見た上で signals that looking isn't optional; it's the required groundwork for a sound decision.\n\nNotice how this differs from `〜次第`. `〜次第` is about speed (“the instant it happens”); `〜上で` is about basis (“having properly done it first”). One races, the other deliberates.\n\nWith a noun, the shape becomes `Noun の上で`, meaning “in terms of / in the domain of.” 規則の上で問題ない says “there's no problem as far as the rules are concerned,” marking the field within which you're evaluating something. Here 上 is again うえ — same kanji, same “upon,” now framing a domain rather than a step.",
      bodyZh:
        "你也许又会想到 `〜てから`「做了 X 之后」。但 `〜てから` 只是一条时间线 —— 先这个,再那个。当你想强调前一步是后一步所立足的、有意为之的基础时,就需要 `〜上で`。名词 上 意为「在……之上」,所以意象很具体:你先做 X,再站在它之上去迈出下一步。\n\n规则:把 上で(读作 うえで)接在动词的 `〜た` 简体过去形(第13章)之后。確認した上で 意为「确认之后(并以此为基础)」。这是严谨流程的措辞 —— 正是你写操作说明时会用的:書類を見た上で判断する,「请看过文件之后再做判断」。其中 見た上で 表明「看」不是可有可无的,而是做出稳妥决定所必需的前期工作。\n\n注意它与 `〜次第` 的区别。`〜次第` 关乎速度(「一发生就……」);`〜上で` 关乎基础(「先妥善做完它」)。一个抢时间,一个重审慎。\n\n接名词时,形式变为 `名词 の上で`,意为「在……方面、就……而言」。規則の上で問題ない 是说「就规则而言没有问题」,标示你评判某事所在的领域。这里 上 仍读作 うえ —— 同一个汉字,同样的「之上」,如今框定的是一个领域而非一个步骤。",
      examples: [
        {
          jp: "書類を見た上で判断する",
          reading: "しょるいをみたうえではんだんする",
          en: "I will judge after looking at the documents.",
          zh: "看过文件之后再做判断。",
          code: `import type { ProperNoun, IchidanVerb, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 書類 = ProperNoun<"書類">;
type 見る = IchidanVerb & { stem: "見"; ending: "る" };
type 上で = ProperNoun<"上で">;
type 判断 = ProperNoun<"判断">;
type する = IrregularVerb & { dictionary: "する" };

// 書類 を + 見た (た形) + 上で (fixed) + 判断 + する (辞書形)
type 書類を見た上で判断する = \`\${PhraseWithParticle<書類, "を">}\${ConjugateVerb<見る, "た形">}\${上で}\${判断}\${ConjugateVerb<する, "辞書形">}\`;
`,
        },
        {
          jp: "規則の上で問題ない",
          reading: "きそくのうえでもんだいない",
          en: "There is no problem in terms of the rules.",
          zh: "在规则方面没有问题。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 規則 = ProperNoun<"規則">;
type 上で = ProperNoun<"上で">;
type 問題 = ProperNoun<"問題">;

// 規則 の + 上で (fixed) + 問題 + ない (literal)
type 規則の上で問題ない = \`\${PhraseWithParticle<規則, "の">}\${上で}\${問題}ない\`;
`,
        },
      ],
    },
    {
      id: "a11-3",
      titleEn: "〜限り — as long as / to the extent that",
      titleZh: "〜限り ——「只要……／在……范围内」",
      bodyEn:
        "Your `〜ば` conditional (ch.26) and `〜たら` give you “if.” But sometimes you don't mean a one-time “if it happens” — you mean a condition that holds for an entire stretch of time, and the result holds right alongside it. That continuous “for as long as” is what `〜限り` delivers. The noun 限り means “a limit, a boundary,” so you're drawing a line and saying: within these bounds, the statement is true.\n\nThe rule: attach 限り to the dictionary form (ch.12) or to `〜ている` (ch.11). 生きている限り means “as long as I'm alive.” Imagine reassuring a worried client: 私がいる限り大丈夫です — “as long as I'm here, it'll be fine.” You're promising that the guarantee lasts exactly as long as the condition does.\n\nThe same boundary image gives a second, very common use: marking the limit of your knowledge or ability. 私が知る限り正しい means “as far as I know, it's correct” — you're honestly fencing off your claim at the edge of what you actually know, not asserting beyond it.\n\nAnd in `できる限り努力する`, “I'll make every possible effort,” the limit is your capacity itself — you'll push right up to the edge of what you can do. Whether it's time, knowledge, or ability, the picture is always the same: a line, and everything valid inside it.",
      bodyZh:
        "你的 `〜ば` 条件(第26章)和 `〜たら` 给了你「如果」。但有时你并非指一次性的「如果发生」—— 而是指一个在整段时间里持续成立的条件,且结果与它并行成立。这种持续的「只要……就……」正是 `〜限り` 所提供的。名词 限り 意为「界限、边界」,所以你是在划一条线,说:在此界限之内,该陈述为真。\n\n规则:把 限り 接在辞书形(第12章)或 `〜ている`(第11章)之后。生きている限り 意为「只要我还活着」。想象你安抚一位忧心的客户:私がいる限り大丈夫です ——「只要有我在,就没问题」。你是在承诺:这份保证持续的时间,恰好与条件持续的时间一样长。\n\n同样的「界限」意象带来第二种很常见的用法:标示你认知或能力的界限。私が知る限り正しい 意为「就我所知是正确的」—— 你诚实地把自己的断言圈定在你真正知道的范围边缘,不越界妄言。\n\n而在 `できる限り努力する`「尽最大努力」中,界限就是你的能力本身 —— 你会一直推到你能力的边缘。无论是时间、认知还是能力,意象始终如一:一条线,以及线内一切成立的东西。",
      examples: [
        {
          jp: "私が知る限り正しい",
          reading: "わたしがしるかぎりただしい",
          en: "As far as I know, it is correct.",
          zh: "就我所知是正确的。",
          code: `import type { ProperNoun, GodanVerb, IAdjective, ConjugateVerb, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 知る = GodanVerb & { stem: "知"; ending: "る" };
type 限り = ProperNoun<"限り">;
type 正しい = IAdjective & { stem: "正し"; ending: "い" };

// 私 が + 知る (辞書形) + 限り + 正しい (基本形)
type 私が知る限り正しい = \`\${PhraseWithParticle<私, "が">}\${ConjugateVerb<知る, "辞書形">}\${限り}\${ConjugateAdjective<正しい, "基本形">}\`;
`,
        },
        {
          jp: "できる限り努力する",
          reading: "できるかぎりどりょくする",
          en: "I will make every possible effort.",
          zh: "尽最大努力。",
          code: `import type { ProperNoun, IchidanVerb, IrregularVerb, ConjugateVerb } from "typed-japanese";

type できる = IchidanVerb & { stem: "でき"; ending: "る" };
type 限り = ProperNoun<"限り">;
type 努力 = ProperNoun<"努力">;
type する = IrregularVerb & { dictionary: "する" };

// できる (辞書形) + 限り + 努力 + する (辞書形)
type できる限り努力する = \`\${ConjugateVerb<できる, "辞書形">}\${限り}\${努力}\${ConjugateVerb<する, "辞書形">}\`;
`,
        },
      ],
    },
    {
      id: "a11-4",
      titleEn: "〜反面 — on the other hand",
      titleZh: "〜反面 ——「另一方面／反过来」",
      bodyEn:
        "You've had plenty of ways to say “but” — `が` and `けど` (ch.i14), and `〜のに` (ch.i07) for an aggrieved “although.” Those simply oppose two clauses. But suppose you're writing a product review and want to say “it's cheap, yet the quality is low” — two opposite traits that belong to the very same thing at once. For that single-subject contrast, Japanese uses `〜反面`. The noun 反面 literally means “the opposite face,” so you're turning one object over to reveal its flip side.\n\nThe rule: attach 反面 (read はんめん) to the plain form of verbs and i-adjectives, and to na-adjectives or nouns with `な` or `である`. So a quiet-but-inconvenient town is 静かな反面不便だ, and a fun-but-demanding job is 楽しい反面厳しい. The two halves are usually opposite in evaluation — one good, one bad — but both are simultaneously true of the same subject.\n\nPicture recommending a small town to a friend: この町は静かな反面不便だ — “it's peaceful, but on the other hand it's inconvenient.” You're not contradicting yourself; you're showing both faces of one coin honestly.\n\nThe key difference from a plain “but”: `が` can contrast two separate things, but `〜反面` insists that the two qualities live inside one subject at the same time. If you find yourself describing two sides of a single person, place, or job, 反面 is the precise tool.",
      bodyZh:
        "你已经有不少表达「但是」的方式了 —— `が` 和 `けど`(第i14章),以及带有抱怨意味的 `〜のに`(第i07章「虽然」)。它们只是把两个小句对立起来。但假设你在写一则商品评价,想说「便宜,但质量差」—— 这是同时属于同一事物的两种相反特质。对于这种同一主体内部的对照,日语用 `〜反面`。名词 反面 字面意思是「相反的一面」,所以你是把一个事物翻过来,露出它的另一面。\n\n规则:把 反面(读作 はんめん)接在动词、い形容词的简体之后;接な形容词或名词时,用 `な` 或 `である`。于是「安静但不便」的小镇是 静かな反面不便だ,「有趣但严格」的工作是 楽しい反面厳しい。两半通常在评价上相反 —— 一好一坏 —— 但二者同时都是同一主体的真实写照。\n\n想象你向朋友推荐一座小镇:この町は静かな反面不便だ ——「它很安静,但另一方面不太方便」。你并非自相矛盾,而是诚实地展示同一枚硬币的两面。\n\n与单纯的「但是」最关键的区别在于:`が` 可以对照两个不同的事物,而 `〜反面` 坚持两种性质同时存在于同一个主体之中。如果你发现自己正在描述同一个人、同一地点或同一份工作的两面,反面 正是那把精准的工具。",
      examples: [
        {
          jp: "この町は静かな反面不便だ",
          reading: "このまちはしずかなはんめんふべんだ",
          en: "This town is quiet, but on the other hand inconvenient.",
          zh: "这个小镇虽然安静,另一方面却不方便。",
          code: `import type { ProperNoun, NaAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 町 = ProperNoun<"町">;
type 静か = NaAdjective & { stem: "静か" };
type 反面 = ProperNoun<"反面">;
type 不便 = NaAdjective & { stem: "不便" };

// この + 町 は + 静かな (na-adj 基本形 → 静かな) + 反面 + 不便 + だ (literal copula)
type この町は静かな反面不便だ = \`この\${PhraseWithParticle<町, "は">}\${ConjugateAdjective<静か, "基本形">}\${反面}\${不便["stem"]}だ\`;
`,
        },
        {
          jp: "この仕事は楽しい反面厳しい",
          reading: "このしごとはたのしいはんめんきびしい",
          en: "This job is fun, but on the other hand demanding.",
          zh: "这份工作有趣,另一方面也很严格。",
          code: `import type { ProperNoun, IAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 仕事 = ProperNoun<"仕事">;
type 楽しい = IAdjective & { stem: "楽し"; ending: "い" };
type 反面 = ProperNoun<"反面">;
type 厳しい = IAdjective & { stem: "厳し"; ending: "い" };

// この + 仕事 は + 楽しい (基本形) + 反面 + 厳しい (基本形)
type この仕事は楽しい反面厳しい = \`この\${PhraseWithParticle<仕事, "は">}\${ConjugateAdjective<楽しい, "基本形">}\${反面}\${ConjugateAdjective<厳しい, "基本形">}\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
