import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e06",
  level: "elementary",
  order: 6,
  titleEn: "Particles で, へ, に",
  titleZh: "助词 で、へ、に",
  summaryEn:
    "Picture yourself telling a friend your morning: you study at the library, you go there by train, you head to Kyoto, you wake at seven. In chapter 5 you learned to say what you do with `〜ます` and `を`, but not where, how, where to, or when. This chapter hands you three small tags that fill in those blanks: `で` for the place or means of an action, `へ` and `に` for the direction you head, and `に` again for pinning an event to the clock.",
  summaryZh:
    "想象你正向朋友描述早晨:你在图书馆学习,坐电车去那里,前往京都,七点起床。第五章你学会了用 `〜ます` 和 `を` 说出「做什么」,但还说不出在哪里、怎么去、去往何方、什么时候。本章给你三个小小的标签来填补这些空白:`で` 标记动作的场所或手段,`へ` 和 `に` 标记前进的方向,`に` 还能把事件钉在钟点上。",
  points: [
    {
      id: "e06-1",
      titleEn: "で — place of an action",
      titleZh: "で ——动作发生的场所",
      bodyEn:
        "Back in chapter 3 you used `に` to say where something simply exists: `本があります` for a book sitting on a shelf. But existing somewhere and doing something somewhere are different ideas, and Japanese keeps them apart. When an action actually unfolds at a place — eating, studying, working — you mark that stage with `で`, in the pattern `Place で Verb`.\n\nThink of `で` as spotlighting the scene where the action plays out. Up to now you could say `勉強します` (I study) but had nowhere to put the library. Now you simply set the place in front and tag it: `図書館で勉強します`, I study at the library.\n\nImagine a classmate texts you `今どこ?` (where are you now?) and you're cramming for an exam. You'd answer `図書館で勉強します` — the library is the stage, `で` makes that clear. Likewise at lunch, `レストランで食べます` tells where the eating happens.\n\nThe one trap to remember: this `で` is not the same as the `に` of existence. `図書館にいます` means I am (located) at the library; `図書館で勉強します` means I do the studying there. Existence takes `に`, action takes `で`.",
      bodyZh:
        "第三章里,你用 `に` 说某物单纯地存在于某处:`本があります`,书摆在架子上。但「存在于某处」和「在某处做某事」是两回事,日语把它们分得很清楚。当一个动作真正在某地展开 —— 吃饭、学习、工作 —— 你就用 `で` 标记那个舞台,句型是「场所 で 动词」。\n\n可以把 `で` 想成给动作上演的场景打上聚光灯。在此之前你只能说 `勉強します`(我学习),却没地方安放「图书馆」。现在只要把场所放在前面,贴上标签:`図書館で勉強します`,我在图书馆学习。\n\n设想同学发来一句 `今どこ?`(你现在在哪儿?),而你正为考试苦读。你会答 `図書館で勉強します` —— 图书馆就是舞台,`で` 让这一点一目了然。同样在午餐时,`レストランで食べます` 说明吃饭发生的地点。\n\n要记住的唯一陷阱:这个 `で` 不同于表示存在的 `に`。`図書館にいます` 是我(身处)在图书馆;`図書館で勉強します` 是我在那里做「学习」这件事。存在用 `に`,动作用 `で`。",
      examples: [
        {
          jp: "図書館で勉強します",
          reading: "としょかんでべんきょうします",
          en: "I study at the library.",
          zh: "我在图书馆学习。",
          code: `import type { ProperNoun, PhraseWithParticle, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 図書館 = ProperNoun<"図書館">;
type 勉強 = ProperNoun<"勉強">;
type する = IrregularVerb & { dictionary: "する" };

// 図書館 + で (place of action) + 勉強 + します
type 図書館で勉強します = \`\${PhraseWithParticle<図書館, "で">}\${勉強}\${ConjugateVerb<する, "ます形">}ます\`;
`,
        },
        {
          jp: "レストランで食べます",
          reading: "レストランでたべます",
          en: "I eat at the restaurant.",
          zh: "我在餐厅吃饭。",
          code: `import type { ProperNoun, PhraseWithParticle, IchidanVerb, ConjugateVerb } from "typed-japanese";

type レストラン = ProperNoun<"レストラン">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

type レストランで食べます = \`\${PhraseWithParticle<レストラン, "で">}\${ConjugateVerb<食べる, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "e06-2",
      titleEn: "で — means or method",
      titleZh: "で ——手段或方法",
      bodyEn:
        "Here's a small delight of Japanese: the very same `で` you just learned for places also marks the means by which you do something — a vehicle, a tool, a language — in the pattern `Means で Verb`. English scatters this across three prepositions: you go \"by\" bus, eat \"with\" chopsticks, speak \"in\" Japanese. Japanese folds all of that into one `で`.\n\nWhy reuse the same particle? Because to a Japanese ear, the place an action happens and the instrument it happens through are the same kind of role — the surrounding circumstance of the verb. So `バスで` is \"by bus\", `はしで` is \"with chopsticks\", and `日本語で` is \"in Japanese\". You don't have to choose among prepositions; you just attach `で`.\n\nSuppose someone asks how you'll get to the party. You answer `バスで行きます`, I go by bus — the bus is the means, `で` names it. Or in class, when the teacher asks you to respond, you might say `日本語で話します`, I'll speak in Japanese.\n\nIf the place-`で` and means-`で` ever feel confusing together, lean on the verb: `で` always answers \"in what setting, or by what means, does this verb happen?\" Both jobs are really the same question.",
      bodyZh:
        "日语有个小小的妙处:你刚学的、用于场所的那个 `で`,也用来标记做某事所凭借的手段 —— 交通工具、工具、语言 —— 句型是「手段 で 动词」。英语把这层意思分散到三个介词里:坐公交是 by,用筷子是 with,用日语说是 in。日语把这些全收进一个 `で`。\n\n为什么共用同一个助词?因为在日语的语感里,动作发生的场所和动作借助的工具属于同一类角色 —— 都是动词周围的环境条件。所以 `バスで` 是「坐公交」,`はしで` 是「用筷子」,`日本語で` 是「用日语」。你无需在介词间纠结,贴上 `で` 就好。\n\n假设有人问你怎么去派对。你答 `バスで行きます`,我坐公交去 —— 公交是手段,`で` 把它点明。又或者上课时老师请你发言,你可以说 `日本語で話します`,我用日语说。\n\n如果场所的 `で` 和手段的 `で` 放在一起让你犯迷糊,就靠动词来判断:`で` 始终回答「这个动词是在什么场景下、或凭什么手段发生的?」两种用法,问的其实是同一个问题。",
      examples: [
        {
          jp: "バスで行きます",
          reading: "バスでいきます",
          en: "I go by bus.",
          zh: "我坐公交去。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type バス = ProperNoun<"バス">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// バス + で (means) + 行きます
type バスで行きます = \`\${PhraseWithParticle<バス, "で">}\${ConjugateVerb<行く, "ます形">}ます\`;
`,
        },
        {
          jp: "日本語で話します",
          reading: "にほんごではなします",
          en: "I speak in Japanese.",
          zh: "我用日语说。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 日本語 = ProperNoun<"日本語">;
type 話す = GodanVerb & { stem: "話"; ending: "す" };

type 日本語で話します = \`\${PhraseWithParticle<日本語, "で">}\${ConjugateVerb<話す, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "e06-3",
      titleEn: "へ / に — direction of movement",
      titleZh: "へ / に ——移动的方向",
      bodyEn:
        "You can now say you go, you come, you return — `行きます`, `来ます`, `帰ります` are all built from the `〜ます` form you met in chapter 5. But a journey needs a destination, and bare `行きます` leaves out where you're headed. To attach that destination to a verb of motion, you tag it with `へ` or `に`, in the pattern `Destination へ/に Verb`.\n\nBoth particles work here, and they're largely interchangeable. The shade of difference: `へ` (written へ but pronounced like the syllable e) leans on the direction of travel — the way you're pointed — while `に` leans on the goal, the place you'll actually arrive. In daily conversation `に` is the more common pick; `へ` carries a slightly more polished, deliberate tone.\n\nPlanning a trip, you'd announce `日本へ来ます`, I'm coming to Japan, the destination set out front. Leaving the office tired, you'd say `家に帰ります`, I'm going home. Heading out in the morning, `学校へ行きます`, I go to school.\n\nA tiny reading reminder that trips up beginners: as a particle, へ is read like e, never like he — so `学校へ` sounds like gakkō e. Don't let the spelling fool your tongue.",
      bodyZh:
        "现在你已经会说去、来、回了 —— `行きます`、`来ます`、`帰ります` 都建立在第五章的 `〜ます` 形之上。但旅程需要一个目的地,光说 `行きます` 没交代要去哪儿。要把目的地接到移动动词上,就给它贴上 `へ` 或 `に`,句型是「目的地 へ/に 动词」。\n\n两个助词在这里都行,而且基本可以互换。细微的差别是:`へ`(写作 へ,但读作 e 这个音)偏重行进的方向 —— 你朝着哪边;而 `に` 偏重目标 —— 你真正会抵达的地方。日常对话里 `に` 更常用,`へ` 则带一点更书面、更郑重的语气。\n\n规划行程时,你会宣布 `日本へ来ます`,我要来日本,把目的地摆在前头。拖着疲惫下班时,你会说 `家に帰ります`,我回家。早晨出门时,`学校へ行きます`,我去学校。\n\n一个常绊倒初学者的读音小提醒:作助词时,へ 读作 e,绝不读 he —— 所以 `学校へ` 听起来像 gakkō e。别让写法骗了你的舌头。",
      examples: [
        {
          jp: "学校へ行きます",
          reading: "がっこうへいきます",
          en: "I go to school.",
          zh: "我去学校。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 学校 = ProperNoun<"学校">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 学校 + へ (direction) + 行きます
type 学校へ行きます = \`\${PhraseWithParticle<学校, "へ">}\${ConjugateVerb<行く, "ます形">}ます\`;
`,
        },
        {
          jp: "家に帰ります",
          reading: "いえにかえります",
          en: "I return home.",
          zh: "我回家。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 家 = ProperNoun<"家">;
type 帰る = GodanVerb & { stem: "帰"; ending: "る" };

// 家 + に (destination) + 帰ります
type 家に帰ります = \`\${PhraseWithParticle<家, "に">}\${ConjugateVerb<帰る, "ます形">}ます\`;
`,
        },
        {
          jp: "日本へ来ます",
          reading: "にほんへきます",
          en: "I come to Japan.",
          zh: "我来日本。",
          code: `import type { ProperNoun, PhraseWithParticle, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 日本 = ProperNoun<"日本">;
type 来る = IrregularVerb & { dictionary: "来る" };

// 来る の ます形 → 来 (then append ます)
type 日本へ来ます = \`\${PhraseWithParticle<日本, "へ">}\${ConjugateVerb<来る, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "e06-4",
      titleEn: "に — point in time",
      titleZh: "に ——时间点",
      bodyEn:
        "You've now seen `に` mark existence (chapter 3) and a destination (just above). Here it takes on a third job, and it's a natural one: just as `に` pins something to a point in space, it also pins an action to a point in time, in the pattern `Time に Verb`. The clock times and dates you counted in chapter 4 — `7時`, days, months — finally get a verb to attach to.\n\nUse `に` whenever the time is a fixed point you could number: a clock time, a day of the week, a date, a month. Setting your morning routine, you'd say `7時に起きます`, I get up at seven o'clock; planning your week, `日曜日に休みます`, I rest on Sunday.\n\nBut watch this asymmetry, because it's the classic beginner slip. Relative time words — 今日 (today), 明日 (tomorrow), 毎日 (every day) — take no particle at all, because they're already anchored to \"now\" rather than to a number on a clock. So you say plain `明日行きます` (I'll go tomorrow), but `7時に行きます` with the `に`.\n\nA handy rule of thumb: if you could point to the time on a clock or a calendar, add `に`; if it's a vague \"around now\" word like today or tomorrow, leave it bare. When in doubt, numbered times almost always want `に`.",
      bodyZh:
        "到现在,你已经见过 `に` 标记存在(第三章)和目的地(上一节)。这里它担起第三份工作,而且十分自然:正如 `に` 把事物钉在空间的某一点,它也能把动作钉在时间的某一点,句型是「时间 に 动词」。第四章里你数过的钟点和日期 —— `7時`、星期、月份 —— 终于有了可以依附的动词。\n\n凡是能用数字指出的固定时间点,就用 `に`:钟点、星期几、日期、月份。安排早晨作息时,你会说 `7時に起きます`,我七点起床;计划一周时,`日曜日に休みます`,我星期天休息。\n\n但要留意这种不对称,它正是初学者的经典失误。相对时间词 —— 今日(今天)、明日(明天)、毎日(每天)—— 完全不加助词,因为它们本就锚定在「现在」,而非钟面上的某个数字。所以说 `明日行きます`(我明天去),不加助词;却说 `7時に行きます`,要加 `に`。\n\n一条好用的判断口诀:如果这个时间能在钟表或日历上指出来,就加 `に`;如果是「大约现在」那种模糊词,比如今天、明天,就不加。拿不准时,带数字的时间几乎总是要 `に`。",
      examples: [
        {
          jp: "7時に起きます",
          reading: "しちじにおきます",
          en: "I get up at seven o'clock.",
          zh: "我七点起床。",
          code: `import type { ProperNoun, PhraseWithParticle, IchidanVerb, ConjugateVerb } from "typed-japanese";

type 七時 = ProperNoun<"7時">;
type 起きる = IchidanVerb & { stem: "起き"; ending: "る" };

// 7時 + に (point in time) + 起きます
type 七時に起きます = \`\${PhraseWithParticle<七時, "に">}\${ConjugateVerb<起きる, "ます形">}ます\`;
`,
        },
        {
          jp: "日曜日に休みます",
          reading: "にちようびにやすみます",
          en: "I rest on Sunday.",
          zh: "我星期天休息。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 日曜日 = ProperNoun<"日曜日">;
type 休む = GodanVerb & { stem: "休"; ending: "む" };

type 日曜日に休みます = \`\${PhraseWithParticle<日曜日, "に">}\${ConjugateVerb<休む, "ます形">}ます\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
