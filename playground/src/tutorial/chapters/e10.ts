import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e10",
  level: "elementary",
  order: 10,
  titleEn: "て-form & requests",
  titleZh: "て形与请求",
  summaryEn:
    "Picture yourself in a Tokyo taxi: you know the polite verb 待ちます (“I wait”), but how do you actually ask the driver “please wait here”? Up to now your verbs could only state what you do — this chapter derives a brand-new shape, the て-form, from the ます-verbs you already know, and uses it to make polite requests with 〜てください and to chain actions in order with 〜てから.",
  summaryZh:
    "想象你坐在东京的出租车里:你已经会礼貌动词 待ちます(「我等」),可是要怎么开口请司机「请在这里等」呢?到目前为止,你的动词只能陈述「我做某事」——本章会从你已掌握的 ます 动词中推导出一个全新的形态:て形,并用它来表达礼貌的请求「〜てください」,以及按顺序连接动作的「〜てから」。",
  points: [
    {
      id: "e10-1",
      titleEn: "Forming the て-form",
      titleZh: "て形的构成",
      bodyEn:
        "In chapter 5 you learned the polite 〜ます ending, which carries both tense and politeness. The て-form is different in spirit: it carries neither. It is a verb deliberately left hanging — an open connector — so that something else can latch onto it. On its own `食べて` means roughly “eat, and …”; the sentence isn't finished, it's waiting for more. That open-ended feeling is exactly why the て-form will power so many later patterns, starting with the two in this chapter.\n\nBecause it's a connector, you build it from the dictionary verb, and the rule depends on which group the verb belongs to. For ichidan verbs (the る-verbs, like `食べる`), simply drop the final る and add て: `食べる → 食べて`. The two irregular verbs are just memorized: `する → して` and `来る → 来て`.\n\nGodan verbs (the う-verbs) are where it gets interesting: the ending changes shape depending on its sound, the same kind of euphonic smoothing that makes “a apple” become “an apple” in English. A `く` ending becomes `いて` (`書く → 書いて`); `ぐ` becomes `いで`; `む`, `ぶ`, and `ぬ` all become `んで` (`飲む → 飲んで`, `読む → 読んで`); and `う`, `つ`, `る` all become `って` (`待つ → 待って`). These groupings exist because the sounds genuinely flow better that way when spoken quickly.\n\nThere is exactly one exception to learn: `行く` (“to go”) looks like a `く`-verb but becomes `行って`, not the expected 行いて. Memorize that single oddity and the rest of the system is regular. It's worth drilling these out loud now — every pattern from here on assumes you can produce the て-form on reflex.",
      bodyZh:
        "在第五章你学过礼貌的 〜ます 词尾,它同时带有时态和敬体。て形的性格则完全不同:这两样它都没有。它是一个被刻意「悬在半空」的动词——一个开放的连接点——好让别的东西接上去。单独的 `食べて` 大致是「吃,然后……」的意思;句子还没说完,正等着后续。正是这种未完待续的感觉,让て形日后能支撑起众多语法,而本章的两个用法就是开端。\n\n既然它是连接形,就要从辞书形动词来构成,规则取决于动词属于哪一类。一段动词(る动词,如 `食べる`)只需去掉词尾的 る 再加て:`食べる → 食べて`。两个不规则动词靠记忆:`する → して`、`来る → 来て`。\n\n五段动词(う动词)是有趣之处:词尾会按读音改变形状,就像英语里「a apple」为了顺口变成「an apple」一样的音变。`く` 结尾变成 `いて`(`書く → 書いて`);`ぐ` 变成 `いで`;`む`、`ぶ`、`ぬ` 都变成 `んで`(`飲む → 飲んで`、`読む → 読んで`);`う`、`つ`、`る` 都变成 `って`(`待つ → 待って`)。这样分组是因为快速说话时,这些音确实更顺口。\n\n只有一个例外要记:`行く`(去)看起来是 `く` 动词,却变成 `行って`,而不是预想的 行いて。记住这一个特例,其余的系统都很规整。现在就值得大声反复练习——从这里开始的每个语法都默认你能脱口说出て形。",
      examples: [
        {
          jp: "食べて",
          reading: "たべて",
          en: "eating / and eat (て-form of 食べる)",
          zh: "吃(食べる 的て形)",
          code: `import type { IchidanVerb, ConjugateVerb } from "typed-japanese";

type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// ichidan: drop る, add て
type 食べて = ConjugateVerb<食べる, "て形">;
`,
        },
        {
          jp: "飲んで",
          reading: "のんで",
          en: "drinking / and drink (て-form of 飲む)",
          zh: "喝(飲む 的て形)",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// godan む → んで
type 飲んで = ConjugateVerb<飲む, "て形">;
`,
        },
        {
          jp: "書いて",
          reading: "かいて",
          en: "writing / and write (て-form of 書く)",
          zh: "写(書く 的て形)",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 書く = GodanVerb & { stem: "書"; ending: "く" };

// godan く → いて
type 書いて = ConjugateVerb<書く, "て形">;
`,
        },
      ],
    },
    {
      id: "e10-2",
      titleEn: "〜てください — “please do …”",
      titleZh: "〜てください ——「请……」",
      bodyEn:
        "Now that you can form the て-form, here is its first real payoff. So far, with 〜ます you could announce “I will wait” (`待ちます`), but you had no polite way to turn that around and ask someone else to do it. `〜てください` fills that gap: take a verb's て-form and add `ください`, and you get “please do …”.\n\nThe intuition is lovely. `ください` is the polite word for “give me,” and the て-form hands the action over as something to be given — literally “do it, and give me that favor.” That's why it feels like a genuine request rather than a cold command: you're asking the other person to grant you the action.\n\nThe object is marked with `を` exactly as you learned in chapter 5, nothing new there. So at a library counter you might say `本を読んでください`, “please read the book,” the word 本 (“book”) tagged with `を` and the verb `読む` swapped into its て-form before `ください`. In a waiting room or at a taxi stop, `ここで待ってください` (“please wait here”) uses the place-of-action `で` from chapter 6 plus `待つ → 待って`.\n\nOne tip: `〜てください` is polite and perfectly natural with strangers, clerks, and classmates, but it is still a request you are making of them, so in very deferential situations (asking a senior a big favor) Japanese softens it further. For everyday “please write your name here” or “please stop here” it is exactly the right level.",
      bodyZh:
        "既然你已经会构成て形,这就是它的第一个实际回报。到目前为止,用 〜ます 你能宣告「我会等」(`待ちます`),却没有礼貌的方式反过来请别人去做。`〜てください` 正好填补了这个空缺:取动词的て形,加上 `ください`,就得到「请……」。\n\n这个直觉很美。`ください` 是「请给我」的礼貌说法,而て形把动作当作可以「给予」的东西递了出去——字面上就是「做这件事,把这份恩惠给我」。这正是它听起来像真诚请求、而非冷冰冰命令的原因:你是在请对方把这个动作赐予你。\n\n宾语照旧用第五章学过的 `を` 标记,这里没有新东西。所以在图书馆柜台你可以说 `本を読んでください`,「请读这本书」——名词 本(书)用 `を` 标记,动词 `読む` 换成て形再接 `ください`。在候车室或出租车站,`ここで待ってください`(请在这里等)用了第六章表动作地点的 `で`,加上 `待つ → 待って`。\n\n一个提示:`〜てください` 既礼貌又自然,对陌生人、店员、同学都适用,但它毕竟是你在向对方提出请求,所以在非常谦恭的场合(向前辈求一个大忙),日语还会用更委婉的说法。对于日常的「请在这里写下名字」或「请在这里停车」,它正是恰到好处的礼貌程度。",
      examples: [
        {
          jp: "本を読んでください",
          reading: "ほんをよんでください",
          en: "Please read the book.",
          zh: "请读这本书。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 本 = ProperNoun<"本">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };

// 本 + を + [読む て形] + ください
type 本を読んでください = \`\${PhraseWithParticle<本, "を">}\${ConjugateVerb<読む, "て形">}ください\`;
`,
        },
        {
          jp: "ここで待ってください",
          reading: "ここでまってください",
          en: "Please wait here.",
          zh: "请在这里等。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type ここ = ProperNoun<"ここ">;
type 待つ = GodanVerb & { stem: "待"; ending: "つ" };

// ここ + で + [待つ て形] + ください
type ここで待ってください = \`\${PhraseWithParticle<ここ, "で">}\${ConjugateVerb<待つ, "て形">}ください\`;
`,
        },
      ],
    },
    {
      id: "e10-3",
      titleEn: "〜てから — “after doing …”",
      titleZh: "〜てから ——「做完……之后」",
      bodyEn:
        "The て-form's second job is to put actions in order. You can already describe single actions — “I eat” (`食べます`), “I study” (`勉強します`) — but how do you say you do one only after finishing the other? That's `〜てから`: take the first verb's て-form, add `から`, and it means “after doing …”, stressing that the first action is genuinely completed before the second begins.\n\nThe ordering on the page mirrors the ordering in time: the whole `〜てから` clause comes first, then the main action follows. Describing your morning routine, you'd say `ご飯を食べてから、勉強します` — “after eating, I'll study.” The action that happens first, eating, is spoken first; the て-form leaves it hanging, `から` marks the hinge “from that point onward,” and the main verb lands at the end as always.\n\nHere's a small but important warning. Back in chapter 4 you met `から` attached to a noun, as in 9時から (“from 9 o'clock”), meaning “from” a starting point. This is a different `から`: it attaches to a て-form, not a noun, and means “after.” Same syllable, different job — let the shape in front of it tell you which one you're reading.\n\nThink of practical chains you do every day: `手を洗ってから、食べます` (“after washing my hands, I eat”) sequences a `う`-verb, `洗う → 洗って`, into the next action. Whenever the order truly matters — finish this, then that — `〜てから` is the natural way to make it explicit.",
      bodyZh:
        "て形的第二项工作是给动作排序。你已经能描述单个动作——「我吃饭」(`食べます`)、「我学习」(`勉強します`)——但要怎么说你做完一件事之后才做另一件呢?这就是 `〜てから`:取前一个动词的て形,加上 `から`,意思是「做完……之后」,强调第一个动作确实完成后,第二个才开始。\n\n纸面上的顺序与时间上的顺序一致:整个 `〜てから` 从句在前,主要动作随后。描述你的早晨日程时,你会说 `ご飯を食べてから、勉強します`——「吃完饭之后,我学习」。先发生的动作「吃」先说出来;て形把它悬在那里,`から` 标出「从那一刻起」的转折点,主要动词一如既往落在句末。\n\n这里有个不大却重要的提醒。在第四章你见过接在名词后的 `から`,如 9時から(从九点),表示从某个起点「从」。这是另一个 `から`:它接在て形而非名词后,意思是「之后」。同样的音节,不同的职责——让它前面的形态来告诉你正在读的是哪一个。\n\n想想你每天会做的实际链条:`手を洗ってから、食べます`(洗完手之后,我吃饭)把一个 `う` 动词 `洗う → 洗って` 接到下一个动作上。每当顺序真的重要——先完成这个,再做那个——`〜てから` 就是把它说清楚的自然方式。",
      examples: [
        {
          jp: "ご飯を食べてから、勉強します",
          reading: "ごはんをたべてから、べんきょうします",
          en: "After eating, I will study.",
          zh: "吃完饭之后,我学习。",
          code: `import type { ProperNoun, IchidanVerb, IrregularVerb, ConjugateVerb, PhraseWithParticle, ConnectedPhrases } from "typed-japanese";

type ご飯 = ProperNoun<"ご飯">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };
type 勉強 = ProperNoun<"勉強">;
type する = IrregularVerb & { dictionary: "する" };

// ご飯を + [食べる て形] + から
type ご飯を食べてから = \`\${PhraseWithParticle<ご飯, "を">}\${ConjugateVerb<食べる, "て形">}から\`;
// 勉強 + [する ます形] + ます
type 勉強します = \`\${勉強}\${ConjugateVerb<する, "ます形">}ます\`;

type ご飯を食べてから勉強します = ConnectedPhrases<ご飯を食べてから, 勉強します>;
`,
        },
        {
          jp: "手を洗ってから、食べます",
          reading: "てをあらってから、たべます",
          en: "After washing my hands, I eat.",
          zh: "洗完手之后,我吃饭。",
          code: `import type { ProperNoun, GodanVerb, IchidanVerb, ConjugateVerb, PhraseWithParticle, ConnectedPhrases } from "typed-japanese";

type 手 = ProperNoun<"手">;
type 洗う = GodanVerb & { stem: "洗"; ending: "う" };
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// 手を + [洗う て形] + から
type 手を洗ってから = \`\${PhraseWithParticle<手, "を">}\${ConjugateVerb<洗う, "て形">}から\`;
// [食べる ます形] + ます
type 食べます = \`\${ConjugateVerb<食べる, "ます形">}ます\`;

type 手を洗ってから食べます = ConnectedPhrases<手を洗ってから, 食べます>;
`,
        },
      ],
    },
  ],
};

export default chapter;
