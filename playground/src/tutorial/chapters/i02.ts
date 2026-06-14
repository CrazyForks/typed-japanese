import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i02",
  level: "intermediate",
  order: 2,
  titleEn: "Causative 使役",
  titleZh: "使役态",
  summaryEn:
    "Picture a parent at the dinner table who wants the kid to finish the broccoli, or a manager telling a junior they can leave early — until now you could say “the child eats vegetables,” but you had no way to say someone MADE or LET them. The causative form (使役形) adds exactly that missing person: the one who orders or permits the action. Godan verbs take `〜せる`, ichidan and irregular verbs take `〜させる`, and a single switch — `を` versus `に` — slides the meaning between forcing someone and giving them room.",
  summaryZh:
    "想象一位家长在饭桌旁想让孩子把西兰花吃完,或者一位主管告诉新人可以早点走 —— 到目前为止你只能说「孩子吃蔬菜」,却没办法说有人「让/逼」他这么做。使役态(使役形)正好补上了这个缺位的人:那个下令或准许动作的人。五段动词变成 `〜せる`,一段和不规则动词变成 `〜させる`,而仅靠一个开关 ——`を` 还是 `に`—— 就能在「强迫」与「放手」之间滑动。",
  points: [
    {
      id: "i02-1",
      titleEn: "Forming the causative: 〜せる / 〜させる",
      titleZh: "使役态的构成:〜せる / 〜させる",
      bodyEn:
        "You met the passive in the last chapter, where a godan verb dropped to its `-a` row and added `れる` (飲む → 飲まれる) and an ichidan verb added `られる`. The causative is built on the very same chassis — it just ends differently. That is no accident: both forms reshape who is responsible for the action, so Japanese reuses the same stem machinery and only swaps the tail. Passive `れる` means “gets done to,” causative `せる` means “gets caused to be.”\n\nFor a godan verb, change the final `-u` to the `-a` row and add `せる`: 飲む → 飲ま + せる → `飲ませる`. Watch the one trap you already know from the passive — verbs ending in `う` use `わ`, not `あ`: 買う → 買わせる.\n\nFor an ichidan verb, drop `る` and add `させる`: 食べる → 食べさせる. The two irregulars are simply `する → させる` and `来る → 来させる`, worth memorizing as a pair.\n\nHere is the payoff that makes everything later easy: every causative verb itself ends in `せる`, so it behaves like a brand-new ichidan verb. Once you have 飲ませる, you conjugate it exactly like 食べる — past 飲ませた, negative 飲ませない, polite 飲ませます. You are not learning a new conjugation table, just feeding the result back into one you already own.",
      bodyZh:
        "上一章你学了受身形:五段动词降到 `-a` 段加 `れる`(飲む → 飲まれる),一段动词加 `られる`。使役态用的是完全相同的底盘,只是尾巴不同。这并非巧合:两种形式都在重新分配「谁对动作负责」,所以日语沿用同一套词干机制,只换结尾。受身的 `れる` 是「被…」,使役的 `せる` 是「使…成为」。\n\n五段动词把词尾的 `-u` 段改成 `-a` 段再加 `せる`:飲む → 飲ま + せる → `飲ませる`。注意一个你在受身里已经踩过的坑 —— 以 `う` 结尾的动词用 `わ` 而非 `あ`:買う → 買わせる。\n\n一段动词去掉 `る` 加 `させる`:食べる → 食べさせる。两个不规则动词记成一对即可:`する → させる`、`来る → 来させる`。\n\n下面这一点让后面的一切都变简单:每个使役动词本身都以 `せる` 结尾,因此它表现得像一个全新的一段动词。一旦有了 飲ませる,它就和 食べる 完全一样地变形 —— 过去 飲ませた,否定 飲ませない,礼貌 飲ませます。你并不是在学新的变形表,只是把结果喂回你早就掌握的那张表。",
      examples: [
        {
          jp: "飲ませる",
          reading: "のませる",
          en: "to make/let (someone) drink",
          zh: "让(某人)喝",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// godan 使役形 returns the -a stem 飲ま, then add せる
type 飲ませる = \`\${ConjugateVerb<飲む, "使役形">}せる\`;
`,
        },
        {
          jp: "行かせる",
          reading: "いかせる",
          en: "to make/let (someone) go",
          zh: "让(某人)去",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 行く = GodanVerb & { stem: "行"; ending: "く" };

type 行かせる = \`\${ConjugateVerb<行く, "使役形">}せる\`;
`,
        },
        {
          jp: "させる",
          reading: "させる",
          en: "to make/let (someone) do",
          zh: "让(某人)做",
          code: `import type { IrregularVerb, ConjugateVerb } from "typed-japanese";

type する = IrregularVerb & { dictionary: "する" };

// する 使役形 returns させ, then add る
type させる = \`\${ConjugateVerb<する, "使役形">}る\`;
`,
        },
      ],
    },
    {
      id: "i02-2",
      titleEn: "Making someone do: 〜に / 〜を … 使役",
      titleZh: "强制做某事:〜に / 〜を … 使役",
      bodyEn:
        "Now we wire up the people. In the passive, `に` marked the agent — the one doing the action behind the scenes. The causative flips the social picture: the new boss of the sentence is the causer, the one giving the order, and they sit at the front as the topic, usually with `は`. The question becomes how to mark the person who actually carries out the action.\n\nThe rule turns on whether the verb already has an object. With an intransitive verb like 泣く (cry) or 走る (run), nothing is competing for `を`, so the made-to-act person takes `を`: 子供を泣かせる, “make the child cry.” Imagine a coach barking at the team — 選手を走らせる, he runs his players around the track; the players are swept along by `を` like an object being acted upon.\n\nWith a transitive verb the slot for `を` is already taken by the real object, so the person shifts to `に` to avoid a collision: 先生は学生に本を読ませる, “the teacher makes the students read a book.” Read it as a chain of roles — teacher (commander) は, students (made to act) に, book (what gets read) を — and it lines up neatly with the `に`-for-recipient feeling you have used since the early chapters.\n\nA common slip is doubling up `を`: never write 学生を本を読ませる. One `を` per clause; the human gets demoted to `に` the moment a real object appears.",
      bodyZh:
        "现在来接上「人」。在受身里,`に` 标记的是幕后施动者。使役态把这张社会图景反转过来:句子的新主角是「使役者」,那个下令的人,他坐在句首作主题,通常用 `は`。剩下的问题是:真正执行动作的人该用什么助词。\n\n关键在于动词本身有没有宾语。对 泣く(哭)、走る(跑)这类不及物动词,没有东西在争 `を`,于是被驱使的人用 `を`:子供を泣かせる「让孩子哭」。想象教练朝队伍吼 —— 選手を走らせる,他让队员绕着跑道跑;队员被 `を` 卷着走,就像一个被作用的宾语。\n\n对及物动词,`を` 的位置已被真正的宾语占据,于是人改用 `に` 以避免冲突:先生は学生に本を読ませる「老师让学生读书」。把它读成一串角色 —— 老师(下令者)は、学生(被驱使者)に、书(被读的对象)を —— 这正好和你从初级章节起就熟悉的「に 表对象」的感觉对上。\n\n常见的失误是出现两个 `を`:绝不要写 学生を本を読ませる。一个分句只能有一个 `を`;一旦出现真正的宾语,人就要降格为 `に`。",
      examples: [
        {
          jp: "母は弟を泣かせた",
          reading: "はははおとうとをなかせた",
          en: "Mother made my little brother cry.",
          zh: "妈妈把弟弟弄哭了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 母 = ProperNoun<"母">;
type 弟 = ProperNoun<"弟">;
type 泣く = GodanVerb & { stem: "泣"; ending: "く" };

// causative 泣かせる, then its plain past (ichidan-style): 泣かせ + た
type 母は弟を泣かせた = \`\${PhraseWithParticle<母, "は">}\${PhraseWithParticle<弟, "を">}\${ConjugateVerb<泣く, "使役形">}せた\`;
`,
        },
        {
          jp: "先生は学生に本を読ませる",
          reading: "せんせいはがくせいにほんをよませる",
          en: "The teacher makes the students read a book.",
          zh: "老师让学生读书。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 先生 = ProperNoun<"先生">;
type 学生 = ProperNoun<"学生">;
type 本 = ProperNoun<"本">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };

type 先生は学生に本を読ませる = \`\${PhraseWithParticle<先生, "は">}\${PhraseWithParticle<学生, "に">}\${PhraseWithParticle<本, "を">}\${ConjugateVerb<読む, "使役形">}せる\`;
`,
        },
      ],
    },
    {
      id: "i02-3",
      titleEn: "Letting someone do: permission 使役",
      titleZh: "许可做某事:表许可的使役",
      bodyEn:
        "Here is the elegant twist: there is no separate “let” form. The exact same `〜せる` / `〜させる` covers both “make someone do” and “let someone do.” That feels strange at first, but it mirrors real life — whether 子供を遊ばせる means a parent forcing the kids outside or happily letting them play depends entirely on the situation, just as English “I had the kids play in the yard” can swing either way.\n\nWhen you want to make clear it is generous permission rather than coercion, two cues do the work. Marking the person with `に` (room to act) rather than `を` (swept along) already softens it, and you can add `〜てあげる`, the “do as a favour” helper, to underline that you are doing them a kindness. Context is doing most of the lifting; the grammar stays the same.\n\nThe most useful place this shows up is asking for permission about yourself. From the causative `て` form plus the `〜てください` request you already know (ch.10), you get `〜させてください`, literally “please cause me to do,” i.e. “please let me.” Picture a meeting where a task lands and you want to volunteer: 私にやらせてください, “please let me handle it,” or you need to step out — 行かせてください, “please let me go.” It is the polite, eager way to claim a job or excuse yourself.",
      bodyZh:
        "这里有个精巧的转折:并没有单独的「让/准许」形式。完全相同的 `〜せる` / `〜させる` 既表示「逼某人做」也表示「准某人做」。乍看奇怪,却贴合现实 —— 子供を遊ばせる 究竟是家长把孩子赶出去玩,还是乐呵呵地放他们去玩,全看情境,就像中文「我让孩子在院子里玩」也能两边解释。\n\n当你想表明这是慷慨的许可而非强制时,有两个提示在起作用。用 `に`(给空间)而非 `を`(被卷着走)来标记那个人,本身就让语气变柔;再加上你已学过的「为对方做」的辅助 `〜てあげる`,更能强调你是在施惠。语境承担了大部分工作,语法本身不变。\n\n这个用法最实用的场合是「为自己请求许可」。由使役态的 `て` 形,加上你早已熟悉的请求 `〜てください`(第10章),就得到 `〜させてください`,字面是「请使我做」,即「请让我」。设想开会时来了一项任务而你想自荐:私にやらせてください「请让我来处理」;或者你得离开 —— 行かせてください「请让我走」。这是礼貌而积极地揽活或告退的说法。",
      examples: [
        {
          jp: "子供を遊ばせる",
          reading: "こどもをあそばせる",
          en: "to let the children play",
          zh: "让孩子们玩。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 子供 = ProperNoun<"子供">;
type 遊ぶ = GodanVerb & { stem: "遊"; ending: "ぶ" };

type 子供を遊ばせる = \`\${PhraseWithParticle<子供, "を">}\${ConjugateVerb<遊ぶ, "使役形">}せる\`;
`,
        },
        {
          jp: "行かせてください",
          reading: "いかせてください",
          en: "Please let me go.",
          zh: "请让我去。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 行く = GodanVerb & { stem: "行"; ending: "く" };

// causative 行かせる → て形 行かせて → 行かせてください
type 行かせてください = \`\${ConjugateVerb<行く, "使役形">}せてください\`;
`,
        },
      ],
    },
    {
      id: "i02-4",
      titleEn: "Polite causative: 〜せます / 〜させます",
      titleZh: "礼貌体使役:〜せます / 〜させます",
      bodyEn:
        "Everything so far has been in plain form, fine for talking about your own household. But the moment you are explaining your policy to a colleague, writing an email to a client, or speaking to anyone outside your circle, you need the polite `〜ます` register you have used since ch.5. Good news: you already did the hard part in point 1.\n\nBecause every causative verb ends in `せる` and inflects like an ichidan verb, you make it polite the same way you made 食べる into 食べます — drop the final `る`, add `ます`. So 食べさせる → 食べさせます, and from there the negative is `〜せません` and the past `〜せました`, all following the ichidan pattern with no surprises.\n\nThis is the form you reach for in everyday explanations. A parent describing their routine says 毎日子供に勉強させます, “I make the child study every day.” A manager covering a task in an email can write 担当者に対応させます, “I'll have a staff member handle it” — note how `させます` here leans toward the smooth, business-like “have someone do” rather than harsh coercion, with the `に` keeping it courteous. Same verb shape you built in point 1, now dressed up for company.",
      bodyZh:
        "到目前为止都用的是简体,谈论自家的事足够了。可一旦你要向同事说明你的做法、给客户写邮件,或与圈子之外的任何人交谈,就需要你从第5章起一直在用的礼貌体 `〜ます`。好消息是:难的部分你在第1点已经做完了。\n\n因为每个使役动词都以 `せる` 结尾、按一段动词变形,把它变礼貌的方式和你把 食べる 变成 食べます 一模一样 —— 去掉词尾 `る`,加 `ます`。于是 食べさせる → 食べさせます,由此否定是 `〜せません`,过去是 `〜せました`,全部遵循一段规律,毫无意外。\n\n这正是日常说明时你会用到的形式。家长描述日常会说 毎日子供に勉強させます「我每天让孩子学习」。主管在邮件里交办一项任务可以写 担当者に対応させます「我会让负责人来处理」—— 注意这里的 `させます` 偏向圆滑、职业化的「让某人做」,而非生硬的强制,`に` 让语气保持得体。还是你在第1点搭好的那个动词形,只是现在穿戴整齐去见外人。",
      examples: [
        {
          jp: "母は私に野菜を食べさせます",
          reading: "ははわたしにやさいをたべさせます",
          en: "Mother makes me eat vegetables.",
          zh: "妈妈让我吃蔬菜。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 母 = ProperNoun<"母">;
type 私 = ProperNoun<"私">;
type 野菜 = ProperNoun<"野菜">;
// ichidan causative 食べさせ has no distinct constructor output, so wrap the verb
type 食べさせ = ProperNoun<"食べさせ">;

// 食べる is ichidan: causative 食べさせる, polite 食べさせます (食べさせ + ます)
type 母は私に野菜を食べさせます = \`\${PhraseWithParticle<母, "は">}\${PhraseWithParticle<私, "に">}\${PhraseWithParticle<野菜, "を">}\${食べさせ}ます\`;
`,
        },
        {
          jp: "毎日子供に勉強させます",
          reading: "まいにちこどもにべんきょうさせます",
          en: "(I) make the child study every day.",
          zh: "每天让孩子学习。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 毎日 = ProperNoun<"毎日">;
type 子供 = ProperNoun<"子供">;
type 勉強 = ProperNoun<"勉強">;
type する = IrregularVerb & { dictionary: "する" };

// 勉強する → causative 勉強させる → polite 勉強させます (させ + ます)
type 毎日子供に勉強させます = \`\${毎日}\${PhraseWithParticle<子供, "に">}\${勉強}\${ConjugateVerb<する, "使役形">}ます\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
