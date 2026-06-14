import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a04",
  level: "advanced",
  order: 4,
  titleEn: "〜ざるを得ない / 〜ずにはいられない",
  titleZh: "〜ざるを得ない／〜ずにはいられない",
  summaryEn:
    "Picture grumbling to a colleague over a flood of orders: with `〜なければならない` from chapter 17 you can say you must work overtime, but it sounds neutral, as if you just signed up for it. This chapter gives you two emphatic patterns for the feeling of having NO escape: `〜ざるを得ない` (“I have no choice but to —”, a duty forced on you from outside) and `〜ずにはいられない` (“I can't help but —”, a feeling welling up from inside that you cannot hold back). Both are double negatives — “cannot avoid doing” and “cannot exist without doing” — and that doubled negation is exactly what makes the compulsion feel inescapable.",
  summaryZh:
    "想象你正对同事抱怨堆成山的订单:用第 17 章的 `〜なければならない` 你可以说「必须加班」,但语气是中性的,听上去好像是你自愿报名的。本章给你两个更有力度的句型,用来表达「毫无退路」的感觉:`〜ざるを得ない`(「不得不」,一种从外部强加的责任)和 `〜ずにはいられない`(「忍不住」,一种从内心涌出、压都压不住的情感)。两者都是双重否定 ——「无法避免去做」和「不做就活不下去」—— 正是这层叠加的否定,让那份被迫感显得无路可逃。",
  points: [
    {
      id: "a04-1",
      titleEn: "〜ざるを得ない — have no choice but to",
      titleZh: "〜ざるを得ない ——「不得不」",
      bodyEn:
        "Back in chapter 17 you learned `〜なければならない` for a flat “must.” That works for rules and schedules, but it can't carry the grumble in “the boss dumped this order on me, so I have no choice but to stay late.” You want to signal that you'd refuse if you could, but reality has boxed you in. That nuance is what `〜ざるを得ない` (zaru o enai) is built for.\n\nThe mechanics: take the verb's ない-stem — the same negative base behind the `ない`-form from chapter 13 (行か-, 認め-) — drop the modern `ない`, and append `ざるを得ない` directly to that stem. So 行く becomes 行か + ざるを得ない, and the ichidan 認める becomes 認め + ざるを得ない.\n\nWhy this shape? It's a double negative wearing classical clothes. `ざる` is the old literary word for “not doing,” and `得ない` means “cannot get to.” Stack them and you get “cannot get to NOT-do it” — which is a heavy, formal way of saying you're cornered into doing it. The two negations cancel into a positive obligation, but the long route there is precisely what makes it sound reluctant and inescapable.\n\nPicture the evidence piling up against someone you'd defended: at some point you sigh and say 認めざるを得ない — “I have no choice but to admit it.” You're not happy about the conclusion; you're conceding to it. That resigned, pushed-into-a-corner feeling is the whole point of the pattern.",
      bodyZh:
        "在第 17 章你学过 `〜なければならない`,一个平直的「必须」。它适合规则和日程,却撑不起「老板把这单丢给我,我不得不留下来加班」里那股牢骚味。你想表达的是:能拒绝的话我早拒绝了,可现实把我逼到了墙角。这层语气,正是 `〜ざるを得ない`(zaru o enai)的用武之地。\n\n构造方法:取动词的 ない 形词干 —— 也就是第 13 章 `ない` 形背后的那个否定基(行か-、認め-)—— 去掉现代的 `ない`,把 `ざるを得ない` 直接接在词干上。于是 行く 变成 行か + ざるを得ない,一段动词 認める 变成 認め + ざるを得ない。\n\n为什么是这个形状?它是一个披着文语外衣的双重否定。`ざる` 是「不做」的古典书面说法,`得ない` 意为「无法做到」。两者叠加就成了「无法做到不去做」—— 一种郑重而沉重的「被逼着去做」。两层否定相消,落回到肯定的义务,但绕这么一大圈,恰恰是它听上去无奈又无可逃避的原因。\n\n设想证据一点点累积,矛头指向一个你曾替他辩护的人:到某一刻你叹口气说 認めざるを得ない ——「我不得不承认」。你并不乐于接受这个结论,而是向它低头。那种认命、被逼到角落的感觉,正是这个句型的核心。",
      examples: [
        {
          jp: "私は行かざるを得ない",
          reading: "わたしはいかざるをえない",
          en: "I have no choice but to go.",
          zh: "我不得不去。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 私 は + 行か (ない形 stem) + ざるを得ない
type 私は行かざるを得ない = \`\${PhraseWithParticle<私, "は">}\${ConjugateVerb<行く, "ない形">}\${ProperNoun<"ざるを得ない">}\`;
`,
        },
        {
          jp: "失敗を認めざるを得ない",
          reading: "しっぱいをみとめざるをえない",
          en: "I have no choice but to admit the failure.",
          zh: "不得不承认失败。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 失敗 = ProperNoun<"失敗">;
type 認める = IchidanVerb & { stem: "認め"; ending: "る" };

// 失敗 を + 認め (ない形 stem) + ざるを得ない
type 失敗を認めざるを得ない = \`\${PhraseWithParticle<失敗, "を">}\${ConjugateVerb<認める, "ない形">}\${ProperNoun<"ざるを得ない">}\`;
`,
        },
      ],
    },
    {
      id: "a04-2",
      titleEn: "Irregular forms: する → せざるを得ない",
      titleZh: "不规则形:する → せざるを得ない",
      bodyEn:
        "There's one trap waiting for you, and it bites the most common verb in the language: `する`. Your instinct, after chapter 13, is to reach for its modern negative base `し` and write 〜しざるを得ない. That's wrong. Because `〜ざるを得ない` is a fossil of classical grammar, it demands the classical base `せ` instead, giving `せざるを得ない`.\n\nSo 我慢する (to put up with something) becomes 我慢せざるを得ない — “I have no choice but to endure it.” There's no rule to derive that `せ` from; it's a fixed form you simply memorize. The good news is that everything from `ざるを得ない` onward behaves exactly as in the previous point, so once you've locked in the `せ`, you're done.\n\nThis matters a lot in practice because so many Japanese verbs are `する`-verbs built on a noun: 中止する (to call off), 延期する (to postpone), 撤回する (to retract). Imagine a project meeting where the budget has just collapsed — you'd announce 計画を中止せざるを得ない, “we have no choice but to cancel the plan.” It lands as a regretful, formal concession, perfect for delivering bad news you can't avoid.",
      bodyZh:
        "有一个陷阱在等着你,而且它专咬日语里最常用的那个动词:`する`。学完第 13 章后,你的直觉会去抓它现代的否定基 `し`,写成 〜しざるを得ない。这是错的。由于 `〜ざるを得ない` 是文语语法的化石,它要的是文语基 `せ`,构成 `せざるを得ない`。\n\n于是 我慢する(忍耐)变成 我慢せざるを得ない ——「我不得不忍耐」。这个 `せ` 没有规则可推,就是一个固定形式,记住即可。好消息是:`ざるを得ない` 之后的一切都和上一节完全一样,所以只要把 `せ` 钉牢,就大功告成了。\n\n这一点在实际中非常重要,因为日语里大量动词都是建立在名词上的「する 动词」:中止する(取消)、延期する(延期)、撤回する(撤回)。设想一个项目会议上预算刚刚崩盘 —— 你会宣布 計画を中止せざるを得ない,「我们不得不中止计划」。它听起来是一句带着遗憾的、郑重的让步,正好用来通报你无法回避的坏消息。",
      examples: [
        {
          jp: "私は我慢せざるを得ない",
          reading: "わたしはがまんせざるをえない",
          en: "I have no choice but to endure it.",
          zh: "我不得不忍耐。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 我慢 = ProperNoun<"我慢">;

// する verb: classical base せ → 我慢 + せざるを得ない
type 私は我慢せざるを得ない = \`\${PhraseWithParticle<私, "は">}\${我慢}\${ProperNoun<"せざるを得ない">}\`;
`,
        },
        {
          jp: "計画を中止せざるを得ない",
          reading: "けいかくをちゅうしせざるをえない",
          en: "We have no choice but to cancel the plan.",
          zh: "不得不中止计划。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 計画 = ProperNoun<"計画">;
type 中止 = ProperNoun<"中止">;

// 計画 を + 中止 + せざるを得ない
type 計画を中止せざるを得ない = \`\${PhraseWithParticle<計画, "を">}\${中止}\${ProperNoun<"せざるを得ない">}\`;
`,
        },
      ],
    },
    {
      id: "a04-3",
      titleEn: "〜ずにはいられない — cannot help but",
      titleZh: "〜ずにはいられない ——「忍不住、不由得」",
      bodyEn:
        "The first pattern was about pressure from outside. This one is about pressure from inside. Think of the suppressed reluctance you met in the causative-passive `使役受身` of chapter 23, but now turned inward: not “I was made to do it,” but “something in me makes me do it, and I can't stop myself.” That's `〜ずにはいられない`: “I can't help but —,” “I can't keep from —.”\n\nIt attaches to the same ない-stem you've been using all chapter (笑わ-, 疑わ-), so 笑う → 笑わ + ずにはいられない. The shape is again a double negative, just a different one. `〜ずには` is the classical “without doing,” and `いられない` is the negative potential of いる — “cannot stay / cannot remain (in a state).” Put together: “I cannot remain without doing it.” The emotion is so strong that simply NOT acting on it is impossible.\n\nSo hold the contrast firmly. `〜ざるを得ない` from point 1 is outer obligation — duty corners you, and you'd rather not. `〜ずにはいられない` is inner compulsion — a feeling overwhelms you, and your body acts before your judgment can intervene.\n\nPicture a friend's deadpan story landing so well that you 笑わずにはいられない — you literally cannot keep yourself from laughing. Or read sad news and find yourself unable to hold back tears: 泣かずにはいられない. The pattern reaches for the moment when the feeling wins.",
      bodyZh:
        "第一个句型讲的是来自外部的压力,这一个讲的是来自内部的压力。回想第 23 章使役受身 `使役受身` 里那种被压抑的不情愿,现在把它向内一转:不是「我被迫去做」,而是「我心里有股劲推着我去做,我止不住自己」。这就是 `〜ずにはいられない`:「忍不住」「不由得」。\n\n它接在本章一直在用的那个 ない 形词干上(笑わ-、疑わ-),所以 笑う → 笑わ + ずにはいられない。这个形状又是一个双重否定,只是另一种。`〜ずには` 是文语的「不做…就」,`いられない` 是 いる 的否定可能形 ——「无法保持(某种状态)」。合起来:「不做就保持不住」。情感强到连「不去做」本身都做不到。\n\n所以请牢牢抓住这层对比。第一节的 `〜ざるを得ない` 是外在义务 —— 责任把你逼到角落,你本不情愿。`〜ずにはいられない` 是内心冲动 —— 情感压倒了你,身体抢在理智反应之前就动了。\n\n设想朋友一本正经讲的段子戳中了你,你 笑わずにはいられない —— 你真的止不住笑。或者读到悲伤的消息,发现自己忍不住流泪:泣かずにはいられない。这个句型瞄准的,正是情感取胜的那一刻。",
      examples: [
        {
          jp: "私は笑わずにはいられない",
          reading: "わたしはわらわずにはいられない",
          en: "I can't help but laugh.",
          zh: "我忍不住要笑。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 笑う = GodanVerb & { stem: "笑"; ending: "う" };

// 私 は + 笑わ (ない形 stem) + ずにはいられない
type 私は笑わずにはいられない = \`\${PhraseWithParticle<私, "は">}\${ConjugateVerb<笑う, "ない形">}ずにはいられない\`;
`,
        },
        {
          jp: "真実を疑わずにはいられない",
          reading: "しんじつをうたがわずにはいられない",
          en: "I can't help but doubt the truth.",
          zh: "我不由得怀疑起真相来。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 真実 = ProperNoun<"真実">;
type 疑う = GodanVerb & { stem: "疑"; ending: "う" };

// 真実 を + 疑わ (ない形 stem) + ずにはいられない
type 真実を疑わずにはいられない = \`\${PhraseWithParticle<真実, "を">}\${ConjugateVerb<疑う, "ない形">}ずにはいられない\`;
`,
        },
      ],
    },
    {
      id: "a04-4",
      titleEn: "Irregular forms: する → せずにはいられない",
      titleZh: "不规则形:する → せずにはいられない",
      bodyEn:
        "The same `する` trap from point 2 returns here, and it's good news: the fix is identical. `〜ずにはいられない` also rejects the modern base `し` and takes the classical `せ`. So 心配する (to worry) → 心配せずにはいられない, “I can't help worrying,” and 感動する (to be moved) → 感動せずにはいられない, “I can't help but be moved.”\n\nIf you remember just one thing from this chapter, make it this: in BOTH patterns here, a `する`-verb becomes `せ` before the ending. Lock that in and any する-noun slots straight in — 期待せずにはいられない, 想像せずにはいられない, 応援せずにはいられない.\n\nThink of standing at a bakery as a tray of fresh bread comes out, the smell hitting you — your hand reaches for the tongs before you've decided anything; that's the 心配せずにはいられない reflex, applied to temptation. Or a friend's song moves you so much that, win or not, you 感動せずにはいられない. Wherever a feeling acts through you faster than your will can object, this is the ending that captures it.",
      bodyZh:
        "第二节那个 `する` 陷阱在这里又出现了,而且是好消息:解法一模一样。`〜ずにはいられない` 同样拒绝现代基 `し`,而取文语的 `せ`。于是 心配する(担心)→ 心配せずにはいられない,「忍不住担心」;感動する(感动)→ 感動せずにはいられない,「不由得被打动」。\n\n如果本章你只记住一件事,就记这个:这里的两个句型中,`する` 动词在词尾之前都变成 `せ`。把它钉牢,任何「する 名词」都能直接套进去 —— 期待せずにはいられない、想像せずにはいられない、応援せずにはいられない。\n\n设想你站在面包店前,一盘刚出炉的面包端了出来,香气直扑过来 —— 你的手在你做出任何决定之前就伸向了夹子;这就是把 心配せずにはいられない 那股反射用到了诱惑上。又或者朋友的一首歌太打动你,不管它有没有获奖,你都 感動せずにはいられない。凡是情感抢在意志反对之前就替你行动的场合,都由这个词尾来捕捉。",
      examples: [
        {
          jp: "私は心配せずにはいられない",
          reading: "わたしはしんぱいせずにはいられない",
          en: "I can't help but worry.",
          zh: "我忍不住担心。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 心配 = ProperNoun<"心配">;

// する verb: classical base せ → 心配せずにはいられない (せ spelled literally)
type 私は心配せずにはいられない = \`\${PhraseWithParticle<私, "は">}\${心配}せずにはいられない\`;
`,
        },
        {
          jp: "彼の歌に感動せずにはいられない",
          reading: "かれのうたにかんどうせずにはいられない",
          en: "I can't help but be moved by his song.",
          zh: "我不由得被他的歌打动。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 歌 = ProperNoun<"歌">;
type 感動 = ProperNoun<"感動">;

// 彼 の + 歌 に + 感動 + せずにはいられない
type 彼の歌に感動せずにはいられない = \`\${PhraseWithParticle<彼, "の">}\${PhraseWithParticle<歌, "に">}\${感動}せずにはいられない\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
