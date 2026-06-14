import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e05",
  level: "elementary",
  order: 5,
  titleEn: "Verbs: ます-form & を",
  titleZh: "动词ます形与宾语を",
  summaryEn:
    "Picture yourself at a café counter, ready to say “I'll have a coffee” — but every sentence you've built so far ends in `です` and only describes what things ARE. This chapter finally gives you actions: the polite verb form `〜ます`, its negative `〜ません`, the question `〜ますか`, and the particle `を` that marks the thing your verb acts on. With these you can say “I drink coffee”, “I don't eat meat”, and “Do you read manga?”.",
  summaryZh:
    "想象你站在咖啡馆柜台前,准备说「我要一杯咖啡」—— 可你目前会的句子全都以 `です` 结尾,只能描述事物「是什么」。本章终于带来「动作」:礼貌体动词 `〜ます`、它的否定 `〜ません`、疑问 `〜ますか`,以及标记动作对象的助词 `を`。有了它们,你就能说出「我喝咖啡」「我不吃肉」「你看漫画吗?」。",
  points: [
    {
      id: "e05-1",
      titleEn: "The polite form 〜ます — present & future",
      titleZh: "礼貌体 〜ます ——现在与将来",
      bodyEn:
        "Until now every sentence you've made ended in `です` and described a state: `これは本です` (this is a book), `猫がいます` (there's a cat). You could say what things ARE, but never what someone DOES. To say “I drink”, “I read”, “I watch”, you need verbs — and that's what this point unlocks.\n\nEvery Japanese verb has a plain dictionary form, like `飲む` (to drink). In polite speech — the safe, friendly register you use with classmates, shop staff, and people you've just met — you swap that dictionary ending for a `ます` ending. There are two patterns. For godan verbs the last sound slides up to the i-row before `ます`: `飲む` → `飲み` → `飲みます`. For ichidan verbs you just drop the final `る`: `食べる` → `食べ` → `食べます`. The piece left over (`飲み`, `食べ`) is called the `ます`-stem, and you'll reuse it for every form in this chapter.\n\nHere's a detail that saves you a lot of grammar: `〜ます` covers both the present and the future. `飲みます` is “I drink” AND “I will drink” AND “I drink (every day)”. Japanese has no separate future tense — the time word or context tells the listener which you mean.\n\nSo at that café counter, `コーヒーを飲みます` works whether you mean “I drink coffee (generally)” or “I'll have a coffee (right now)”. Add `毎日` (every day) and the same verb quietly becomes a habit: `毎日ご飯を食べます`, “I eat rice every day.”",
      bodyZh:
        "到目前为止,你造的每个句子都以 `です` 结尾,描述的是一种状态:`これは本です`(这是书)、`猫がいます`(有只猫)。你能说事物「是什么」,却始终说不出某人「做什么」。要说「我喝」「我读」「我看」,就需要动词 —— 这正是本节要解锁的内容。\n\n每个日语动词都有一个简体的辞书形,比如 `飲む`(喝)。在礼貌体里 —— 也就是面对同学、店员、初次见面的人时那种安全又友好的语气 —— 你把辞书形词尾换成 `ます` 结尾。变法有两种。五段动词的末音要滑到「い段」再接 `ます`:`飲む` → `飲み` → `飲みます`。一段动词则直接去掉末尾的 `る`:`食べる` → `食べ` → `食べます`。剩下的那部分(`飲み`、`食べ`)叫作「ます形词干」,本章后面的每种变形都会反复用到它。\n\n这里有个省去大量语法的细节:`〜ます` 同时涵盖现在与将来。`飲みます` 既是「我喝」,也是「我会喝」,还是「我(每天)喝」。日语没有独立的将来时 —— 时间词或上下文会告诉听者你指的是哪一种。\n\n于是在咖啡馆柜台前,`コーヒーを飲みます` 既能表示「我(平时)喝咖啡」,也能表示「我现在要一杯咖啡」。加上 `毎日`(每天),同一个动词就悄悄变成了习惯:`毎日ご飯を食べます`,「我每天吃饭。」",
      examples: [
        {
          jp: "私はコーヒーを飲みます",
          reading: "わたしはコーヒーをのみます",
          en: "I drink coffee.",
          zh: "我喝咖啡。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type コーヒー = ProperNoun<"コーヒー">;
type 飲む = GodanVerb & { type: "godan"; stem: "飲"; ending: "む" };

// 私 + は + コーヒー + を + 飲み(ます形) + ます
type 私はコーヒーを飲みます = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<コーヒー, "を">}\${ConjugateVerb<飲む, "ます形">}ます\`;
`,
        },
        {
          jp: "私は毎日ご飯を食べます",
          reading: "わたしはまいにちごはんをたべます",
          en: "I eat rice every day.",
          zh: "我每天吃饭。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 毎日 = ProperNoun<"毎日">;
type ご飯 = ProperNoun<"ご飯">;
type 食べる = IchidanVerb & { type: "ichidan"; stem: "食べ"; ending: "る" };

// 私 + は + 毎日 + ご飯 + を + 食べ(ます形) + ます
type 私は毎日ご飯を食べます = \`\${PhraseWithParticle<私, "は">}\${毎日}\${PhraseWithParticle<ご飯, "を">}\${ConjugateVerb<食べる, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "e05-2",
      titleEn: "The object particle を",
      titleZh: "宾语助词 を",
      bodyEn:
        "You now have verbs — but a verb on its own leaves a hole. “I drink” what? “I read” what? You need to name the thing the action lands on, the direct object, and Japanese marks it with its own particle: `を`.\n\nThink of the particles you already use as little signposts: `は` flags the topic, `に` flags a location. `を` is the signpost for the object. The shape of the sentence is `Object を Verb`: `本を読みます` (read a book), `テレビを見ます` (watch TV). The object always sits directly before the verb with `を` tucked between them — which makes sense, because Japanese keeps the verb at the very end and lines up whatever it acts on right in front of it.\n\nOne quirk worth memorizing now: `を` is written with its own dedicated kana that exists only for this particle, but it is pronounced exactly like `お`, o. So `テレビを見ます` sounds like “terebi o mimasu”. Don't let the special spelling fool your ear.\n\nIn practice you'll snap objects onto every verb you learned in point 1. Watching anime after class? `アニメを見ます`. Reading a novel on the train? `本を読みます`. The particle is the glue that turns a bare verb into something you actually do to something.",
      bodyZh:
        "现在你有了动词 —— 但光有动词会留下一个缺口。「我喝」喝什么?「我读」读什么?你得说出动作所及的那个对象,也就是直接宾语,而日语用一个专属助词来标记它:`を`。\n\n把你已经会用的助词想成一个个小路标:`は` 标出主题,`に` 标出地点。`を` 就是「宾语」的路标。句型是「宾语 を 动词」:`本を読みます`(读书)、`テレビを見ます`(看电视)。宾语总是紧贴在动词前面,`を` 夹在两者之间 —— 这很合理,因为日语把动词放在句末,再把它所作用的对象一字排开地摆在它正前方。\n\n有个值得现在就记牢的小特点:`を` 用一个仅为这个助词而存在的专属假名书写,但它的读音和 `お` 完全一样,都是 o。所以 `テレビを見ます` 听起来是「terebi o mimasu」。别让这个特殊写法骗了你的耳朵。\n\n实际运用时,你会把宾语接到第 1 节学过的每个动词上。下课后看动画?`アニメを見ます`。在电车上读小说?`本を読みます`。这个助词就是把一个光秃秃的动词,变成「对某物做某事」的黏合剂。",
      examples: [
        {
          jp: "本を読みます",
          reading: "ほんをよみます",
          en: "I read a book.",
          zh: "我读书。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 本 = ProperNoun<"本">;
type 読む = GodanVerb & { type: "godan"; stem: "読"; ending: "む" };

// 本 + を + 読み(ます形) + ます
type 本を読みます = \`\${PhraseWithParticle<本, "を">}\${ConjugateVerb<読む, "ます形">}ます\`;
`,
        },
        {
          jp: "テレビを見ます",
          reading: "テレビをみます",
          en: "I watch TV.",
          zh: "我看电视。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type テレビ = ProperNoun<"テレビ">;
type 見る = IchidanVerb & { type: "ichidan"; stem: "見"; ending: "る" };

// テレビ + を + 見(ます形) + ます
type テレビを見ます = \`\${PhraseWithParticle<テレビ, "を">}\${ConjugateVerb<見る, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "e05-3",
      titleEn: "The negative 〜ません",
      titleZh: "否定 〜ません",
      bodyEn:
        "You can now say what you do — but half of real conversation is saying what you DON'T. The waiter offers a beer; you'd like to decline. A new friend assumes you eat everything; you need to mention you don't eat meat. For that you make the verb negative.\n\nThe good news: it's almost no work. Remember the `ます`-stem from point 1 (`飲み`, `食べ`)? It never changes. To go negative you only swap the tail, `ます` → `ません`: `飲みます` → `飲みません` (don't / won't drink), `食べます` → `食べません` (don't / won't eat). This mirrors the noun negative `では ありません` you met in chapter 1 — Japanese builds “not” by changing the ending, never by adding a separate word like English “not”.\n\nAnd just like the affirmative, `〜ません` covers both present and future at once. `今日はお酒を飲みません` is “I'm not drinking alcohol today” — a clean, polite way to turn down a drink without any fuss.\n\nSo when the meat platter comes around at dinner, a simple `肉を食べません` lets you bow out gracefully. Notice the structure is identical to the positive sentence — same object, same `を`, same stem — with just the last two syllables flipped.",
      bodyZh:
        "现在你会说自己「做」什么了 —— 但真实对话里有一半是在说自己「不」做什么。服务员递来一杯啤酒,你想婉拒;新朋友以为你什么都吃,你得说明自己不吃肉。这时就要把动词变成否定。\n\n好消息是:几乎不费力。还记得第 1 节的「ます形词干」吗(`飲み`、`食べ`)?它始终不变。要变否定,你只需替换词尾,把 `ます` 换成 `ません`:`飲みます` → `飲みません`(不喝 / 不会喝)、`食べます` → `食べません`(不吃 / 不会吃)。这和你在第 1 章见过的名词否定 `では ありません` 一脉相承 —— 日语靠改变词尾来表达「不」,绝不会像英语 “not” 那样另加一个独立的词。\n\n而且和肯定形一样,`〜ません` 也一次性涵盖现在与将来。`今日はお酒を飲みません` 就是「我今天不喝酒」—— 一种干净又礼貌、毫不尴尬地谢绝饮酒的说法。\n\n所以当晚餐桌上的肉盘传到你面前,一句简单的 `肉を食べません` 就能让你体面地推辞。注意它的结构和肯定句一模一样 —— 同样的宾语、同样的 `を`、同样的词干 —— 只翻转了最后那两个音节。",
      examples: [
        {
          jp: "私はお酒を飲みません",
          reading: "わたしはおさけをのみません",
          en: "I don't drink alcohol.",
          zh: "我不喝酒。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type お酒 = ProperNoun<"お酒">;
type 飲む = GodanVerb & { type: "godan"; stem: "飲"; ending: "む" };

// 私 + は + お酒 + を + 飲み(ます形) + ません
type 私はお酒を飲みません = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<お酒, "を">}\${ConjugateVerb<飲む, "ます形">}ません\`;
`,
        },
        {
          jp: "肉を食べません",
          reading: "にくをたべません",
          en: "I don't eat meat.",
          zh: "我不吃肉。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 肉 = ProperNoun<"肉">;
type 食べる = IchidanVerb & { type: "ichidan"; stem: "食べ"; ending: "る" };

// 肉 + を + 食べ(ます形) + ません
type 肉を食べません = \`\${PhraseWithParticle<肉, "を">}\${ConjugateVerb<食べる, "ます形">}ません\`;
`,
        },
      ],
    },
    {
      id: "e05-4",
      titleEn: "Asking about actions: 〜ますか",
      titleZh: "询问动作:〜ますか",
      bodyEn:
        "Back in chapter 1 you learned a beautifully simple trick: take any statement, add the particle `か` to the end, and it becomes a yes/no question — `学生です` → `学生ですか`. That same trick works on verbs, with no other change at all.\n\nTo ask about an action, just put `か` after `ます`: `飲みます` → `飲みますか` (“Do you drink?”). The word order stays exactly as it was; you don't shuffle anything to the front the way English flips “you do” into “do you”. So you can lean over to a classmate and ask `マンガを読みますか`, “Do you read manga?”, by appending a single syllable to the sentence you'd otherwise just state.\n\nThe negative question is where it gets charming. `食べませんか` literally asks “Won't you eat?”, but Japanese uses this negative form as a warm, soft invitation — “Why don't we eat together?”. Phrasing it negatively makes the offer gentle and leaves the other person room to say no, which is why `一緒に〜ませんか` (“won't you ... with me?”) is the standard way to invite someone.\n\nSo the next time you want to ask a new friend out for a meal, you don't reach for a special invitation grammar — you take the verb you already know, make it negative, and add `か`. `一緒にご飯を食べませんか` is the whole move.",
      bodyZh:
        "早在第 1 章,你就学过一个漂亮而简单的窍门:拿任何一个陈述句,在末尾加上助词 `か`,它就变成是非疑问句 —— `学生です` → `学生ですか`。同一个窍门用在动词上同样奏效,而且别的什么都不用改。\n\n要询问一个动作,只需在 `ます` 后面加 `か`:`飲みます` → `飲みますか`(「你喝吗?」)。语序原封不动 —— 不像英语会把 “you do” 倒装成 “do you”,日语不需要把任何成分挪到句首。所以你可以凑过去问同学 `マンガを読みますか`,「你看漫画吗?」,只是在本来要陈述的句子后面添了一个音节而已。\n\n否定疑问句尤其妙。`食べませんか` 字面问的是「你不吃吗?」,但日语用这个否定形式来表达温暖而委婉的邀请 ——「要不要一起吃?」。用否定语气提议,显得客气,也给对方留了拒绝的余地,这正是 `一緒に〜ませんか`(「要不要和我一起……?」)成为标准邀约说法的原因。\n\n所以下次你想约新朋友吃饭,不必去找什么专门的「邀请语法」—— 拿你已经会的动词,把它变成否定,再加上 `か` 就行。`一緒にご飯を食べませんか` 就是这整套动作。",
      examples: [
        {
          jp: "コーヒーを飲みますか",
          reading: "コーヒーをのみますか",
          en: "Do you drink coffee?",
          zh: "你喝咖啡吗?",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type コーヒー = ProperNoun<"コーヒー">;
type 飲む = GodanVerb & { type: "godan"; stem: "飲"; ending: "む" };

// コーヒー + を + 飲み(ます形) + ますか
type コーヒーを飲みますか = \`\${PhraseWithParticle<コーヒー, "を">}\${ConjugateVerb<飲む, "ます形">}ますか\`;
`,
        },
        {
          jp: "一緒にご飯を食べませんか",
          reading: "いっしょにごはんをたべませんか",
          en: "Won't you eat with me?",
          zh: "要不要一起吃饭?",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 一緒に = ProperNoun<"一緒に">;
type ご飯 = ProperNoun<"ご飯">;
type 食べる = IchidanVerb & { type: "ichidan"; stem: "食べ"; ending: "る" };

// 一緒に + ご飯 + を + 食べ(ます形) + ませんか
type 一緒にご飯を食べませんか = \`\${一緒に}\${PhraseWithParticle<ご飯, "を">}\${ConjugateVerb<食べる, "ます形">}ませんか\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
