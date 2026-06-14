import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e17",
  level: "elementary",
  order: 17,
  titleEn: "Obligation",
  titleZh: "义务",
  summaryEn:
    "It's Sunday night and you sigh, \"I have to work tomorrow\" — but so far you have no way to say it. Back in chapter 14 you could grant permission (`〜てもいい`) or forbid (`〜てはいけません`), yet neither lets you express that something is required of you. This chapter fills that gap with `〜なければならない` (\"must\") and its gentler opposite `〜なくてもいい` (\"need not\"), both built on the plain ない-form you already learned in chapter 13.",
  summaryZh:
    "周日的夜晚,你叹了口气:「明天还得上班」——可到目前为止你还说不出这句话。第 14 章里你能给予许可(`〜てもいい`)或加以禁止(`〜てはいけません`),但二者都无法表达「某事是你必须做的」。本章正好填补这个空缺:`〜なければならない`(「必须」)与语气更缓和的反义表达 `〜なくてもいい`(「不必」),两者都建立在第 13 章学过的简体 ない 形之上。",
  points: [
    {
      id: "e17-1",
      titleEn: "〜なければならない — “must / have to”",
      titleZh: "〜なければならない ——「必须/不得不」",
      bodyEn:
        "In chapter 13 you learned the plain negative ない-form: 行く becomes 行かない, 起きる becomes 起きない, する becomes しない. Useful for saying \"I don't go\" — but how do you say the opposite, \"I have no choice, I must go\"? That's where this pattern comes in.\n\nThe recipe is simple: take the negative base (the part before ない — 行か, 起き, し), then attach `なければならない`. The polite ending is `〜なければなりません`. Here is the lovely twist: Japanese expresses \"must\" as a double negative. Literally `〜なければならない` means \"if you do not do it, it won't do\" — not doing it is unacceptable, so by elimination you have to do it. Obligation framed as \"the absence of an option.\"\n\nTo build the base, lean on the ない-form rules you already know: godan verbs shift the final sound to the あ-row (行く→行か), ichidan verbs simply drop る (起きる→起き), and the irregulars する→し, 来る→来 (こ).\n\nPicture the scene: it's late, you're tired, and you tell a friend `毎日勉強しなければなりません` — \"I have to study every day.\" The double-negative shape carries exactly that weary, no-way-around-it feeling.\n\nOne tip: `ならない` and `なりません` are interchangeable in meaning; the second is just the polite form. In very casual speech people often shorten the whole thing to `〜なきゃ`, but learn the full form first so you can hear the logic inside it.",
      bodyZh:
        "第 13 章里你学过简体否定的 ない 形:行く 变 行かない,起きる 变 起きない,する 变 しない。这能说「我不去」——可如果要说相反的意思「我没得选,必须去」呢?这正是本句型登场的地方。\n\n公式很简单:取否定词干(ない 前面那部分 —— 行か、起き、し),再接上 `なければならない`。礼貌体结尾是 `〜なければなりません`。这里有个有趣的转折:日语用双重否定来表达「必须」。`〜なければならない` 字面意思是「如果不做就不行」——不做是不被允许的,于是反过来推,你就非做不可。义务被表述成「没有别的选项」。\n\n构造词干时,沿用你已经掌握的 ない 形规则:五段动词把词尾变为 あ 段(行く→行か),一段动词直接去掉 る(起きる→起き),不规则动词 する→し、来る→来(こ)。\n\n想象这个画面:夜深了,你很累,对朋友说 `毎日勉強しなければなりません`——「我必须每天学习」。这种双重否定的结构,正好承载着那份无可奈何、绕不过去的疲惫感。\n\n一个小提示:`ならない` 和 `なりません` 意思相同,后者只是礼貌体。非常随意的口语里人们常把整串缩成 `〜なきゃ`,但请先学完整形式,这样才能听懂它内部的逻辑。",
      examples: [
        {
          jp: "毎日勉強しなければなりません",
          reading: "まいにちべんきょうしなければなりません",
          en: "I have to study every day.",
          zh: "我必须每天学习。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 毎日 = ProperNoun<"毎日">;
type 勉強 = ProperNoun<"勉強">;
// する → ない形 stem "し"; then + なければなりません
type する = IrregularVerb & { dictionary: "する" };

type 毎日勉強しなければなりません = \`\${毎日}\${勉強}\${ConjugateVerb<する, "ない形">}なければなりません\`;
`,
        },
        {
          jp: "明日早く起きなければなりません",
          reading: "あしたはやくおきなければなりません",
          en: "I have to get up early tomorrow.",
          zh: "明天我必须早起。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb } from "typed-japanese";

type 明日 = ProperNoun<"明日">;
type 早く = ProperNoun<"早く">;
// ichidan 起きる → ない形 stem "起き"
type 起きる = IchidanVerb & { stem: "起き"; ending: "る" };

type 明日早く起きなければなりません = \`\${明日}\${早く}\${ConjugateVerb<起きる, "ない形">}なければなりません\`;
`,
        },
        {
          jp: "パスポートを見せなければなりません",
          reading: "パスポートをみせなければなりません",
          en: "You must show your passport.",
          zh: "必须出示护照。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type パスポート = ProperNoun<"パスポート">;
type 見せる = IchidanVerb & { stem: "見せ"; ending: "る" };

type パスポートを見せなければなりません = \`\${PhraseWithParticle<パスポート, "を">}\${ConjugateVerb<見せる, "ない形">}なければなりません\`;
`,
        },
      ],
    },
    {
      id: "e17-2",
      titleEn: "〜なくてもいい — “don't have to / need not”",
      titleZh: "〜なくてもいい ——「不必/可以不」",
      bodyEn:
        "Now flip the obligation around. Imagine a guest hesitating at your front door, reaching down for their shoelaces. You want to reassure them: \"you don't have to take your shoes off.\" In chapter 14 you learned `〜てもいい` for permission — \"it's fine if you do.\" This point is its mirror image: permission NOT to do something.\n\nThe recipe again starts from the ない-form base (行か, 来 (こ), 急が), and this time you add `なくてもいい`. The pieces are worth seeing clearly: `〜なくて` is the te-form of the negative, meaning \"without doing,\" and `もいい` is the same \"is also fine\" you met in chapter 14. Stitched together, `〜なくてもいい` literally says \"even without doing it, it's fine\" — that is, it isn't required. The polite version just tacks on `です`: `〜なくてもいいです`.\n\nNotice how naturally this echoes the permission pattern. `〜てもいい` = \"doing it is fine\"; `〜なくてもいい` = \"not doing it is fine.\" Same `もいい` core, you only swap whether the verb is positive or negative.\n\nSo at the doorway you smile and say `靴を脱がなくてもいいです` — \"you don't have to take off your shoes\" — and your guest relaxes. The same shape works for `急がなくてもいいです`, \"no need to hurry,\" whenever you want to lift a burden off someone.",
      bodyZh:
        "现在把义务反过来。想象一位客人在你家门口迟疑,弯腰去解鞋带。你想让他安心:「不必脱鞋。」第 14 章里你学过 `〜てもいい` 表示许可——「做也可以」。本节正是它的镜像:许可「不去做」某事。\n\n公式同样从 ない 形词干出发(行か、来(こ)、急が),这一次接上 `なくてもいい`。各个部件值得看清楚:`〜なくて` 是否定的 て 形,意为「不做……(而)」,而 `もいい` 就是第 14 章见过的「也可以」。拼在一起,`〜なくてもいい` 字面意思是「即使不做也行」——也就是并非必须。礼貌体只需再加 `です`:`〜なくてもいいです`。\n\n注意它如何自然地呼应许可句型。`〜てもいい`=「做也可以」;`〜なくてもいい`=「不做也可以」。核心都是 `もいい`,你只是切换了动词的肯定或否定。\n\n于是在门口你微笑着说 `靴を脱がなくてもいいです`——「不必脱鞋」——客人就放松了下来。同样的结构也适用于 `急がなくてもいいです`,「不必着急」,任何你想替别人卸下负担的时候都能用。",
      examples: [
        {
          jp: "今日は来なくてもいいです",
          reading: "きょうはこなくてもいいです",
          en: "You don't have to come today.",
          zh: "今天你可以不来。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 今日 = ProperNoun<"今日">;
// 来る → ない形 stem "来" (こ); then + なくてもいいです
type 来る = IrregularVerb & { dictionary: "来る" };

type 今日は来なくてもいいです = \`\${PhraseWithParticle<今日, "は">}\${ConjugateVerb<来る, "ない形">}なくてもいいです\`;
`,
        },
        {
          jp: "靴を脱がなくてもいいです",
          reading: "くつをぬがなくてもいいです",
          en: "You don't have to take off your shoes.",
          zh: "不必脱鞋。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 靴 = ProperNoun<"靴">;
// godan 脱ぐ → ない形 stem "脱が"
type 脱ぐ = GodanVerb & { stem: "脱"; ending: "ぐ" };

type 靴を脱がなくてもいいです = \`\${PhraseWithParticle<靴, "を">}\${ConjugateVerb<脱ぐ, "ない形">}なくてもいいです\`;
`,
        },
        {
          jp: "急がなくてもいいです",
          reading: "いそがなくてもいいです",
          en: "You don't have to hurry.",
          zh: "不必着急。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 急ぐ = GodanVerb & { stem: "急"; ending: "ぐ" };

type 急がなくてもいいです = \`\${ConjugateVerb<急ぐ, "ない形">}なくてもいいです\`;
`,
        },
      ],
    },
    {
      id: "e17-3",
      titleEn: "Contrasting must and need-not",
      titleZh: "「必须」与「不必」的对比",
      bodyEn:
        "Here is the payoff for learning both patterns from the same starting point. They are exact opposites, and in real conversation they often sit right next to each other — a teacher saying \"you must submit it today\" to one student and \"you don't have to redo it\" to another, or a patient asking the doctor \"do I have to take this every day?\" and hearing \"no, you don't have to.\"\n\nThe beauty is the shared root. Both `〜なければなりません` and `〜なくてもいいです` branch off the very same ない-form base; only the tail changes. Attach `なければなりません` and you close off the choice — \"you have to.\" Attach `なくてもいいです` and you open it back up — \"you don't have to.\"\n\nLook at the two examples below: both are built on 行か, the negative base of 行く. `学校に行かなければなりません` locks the door (\"you must go to school\"); `学校に行かなくてもいいです` swings it open (\"you don't have to go to school\"). Drill them as a pair with the same verb, and the whole grammar of obligation clicks into place — one base, two opposite destinations.",
      bodyZh:
        "从同一个起点学这两个句型,现在到了收获的时候。它们是精确的反义,在真实对话里常常紧挨着出现——老师对一个学生说「今天必须交」,又对另一个说「不用重做」;或者病人问医生「这个我得每天吃吗?」,听到回答「不,不必」。\n\n妙处就在于共同的词根。`〜なければなりません` 与 `〜なくてもいいです` 都从同一个 ない 形词干分出,只是尾巴不同。接上 `なければなりません`,就关上了选择的门——「必须」;接上 `なくてもいいです`,又把门重新打开——「不必」。\n\n看下面两个例句:它们都建立在 行く 的否定词干 行か 之上。`学校に行かなければなりません` 把门锁上(「必须去学校」);`学校に行かなくてもいいです` 把门推开(「可以不去学校」)。用同一个动词成对地练,整套「义务」的语法就豁然贯通了——一个词干,两个相反的去向。",
      examples: [
        {
          jp: "学校に行かなくてもいいです",
          reading: "がっこうにいかなくてもいいです",
          en: "You don't have to go to school.",
          zh: "你可以不去学校。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 学校 = ProperNoun<"学校">;
// godan 行く → ない形 stem "行か"
type 行く = GodanVerb & { stem: "行"; ending: "く" };

type 学校に行かなくてもいいです = \`\${PhraseWithParticle<学校, "に">}\${ConjugateVerb<行く, "ない形">}なくてもいいです\`;
`,
        },
        {
          jp: "学校に行かなければなりません",
          reading: "がっこうにいかなければなりません",
          en: "You have to go to school.",
          zh: "你必须去学校。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 学校 = ProperNoun<"学校">;
// same base 行か, now with the obligation ending
type 行く = GodanVerb & { stem: "行"; ending: "く" };

type 学校に行かなければなりません = \`\${PhraseWithParticle<学校, "に">}\${ConjugateVerb<行く, "ない形">}なければなりません\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
