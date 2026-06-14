import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i03",
  level: "intermediate",
  order: 3,
  titleEn: "Causative-passive 使役受身",
  titleZh: "使役被动",
  summaryEn:
    "Picture yourself venting at an izakaya after work: your boss kept you late again, and you want to say not just \"I worked overtime\" but \"I was MADE to work overtime\" — that put-upon, dragged-into-it feeling. You already know the causative `〜させる` (make someone do) from the last chapter and the passive `〜られる` (be done to) from the one before; this chapter simply stacks them into `〜させられる`, the form Japanese reaches for whenever you are the reluctant victim of someone else's orders. We will build it for each verb group, learn the spoken contraction `〜される`, and see how it colors a sentence with unwillingness.",
  summaryZh:
    "想象你下班后在居酒屋吐槽:老板又让你加班到很晚,你想说的不只是「我加班了」,而是「我被迫加班」——那种被人摆布、身不由己的感觉。你已经在上一章学过使役 `〜させる`(让某人做),在更早一章学过被动 `〜られる`(被…);本章只是把两者叠在一起,组成 `〜させられる`。当你成为别人命令下不情愿的「受害者」时,日语正是用这个形式。我们会逐类讲解变形、口语缩约形 `〜される`,并看它如何给句子染上无奈的色彩。",
  points: [
    {
      id: "i03-1",
      titleEn: "Group I (godan): 〜（a）せられる",
      titleZh: "一类动词(五段):〜(a)せられる",
      bodyEn:
        "In the causative chapter you learned to say `飲ませる`, \"to make someone drink.\" But that sentence is told from the boss's side — the one giving orders. What if you are the one being poured drink after drink at a work party, and you want your side of the story: \"I was made to drink\"? You are at once the made-to-do (causative) and the one it happens to (passive), so Japanese layers both.\n\nThe recipe for a godan verb is: take the causative stem — the `-a` row, the very same base you attach `ない` to — and add `せられる`. `飲む` has the causative stem `飲ま`, so it becomes `飲ませられる`, \"to be made to drink.\" It is literally causative `〜せる` with passive `〜られる` welded onto the end.\n\nOnce assembled, the whole thing behaves like an ichidan verb, because it ends in `られる`. So the plain past is `〜せられた` and the polite present is `〜せられます` — no new conjugation rules to memorize, just the patterns you already know for `-る` verbs.\n\nImagine a parent reporting on a sick child: `弟は薬を飲ませられた`, \"my little brother was made to take the medicine.\" The child did not want it, someone insisted, and the form carries that reluctance built in.",
      bodyZh:
        "在使役那一章,你学会了说 `飲ませる`,「让某人喝」。但那句话是从下命令的老板那一方讲的。如果你才是那个在公司聚会上被一杯接一杯灌酒的人,想讲自己这一边的故事——「我被迫喝了」——该怎么办?此时你既是被使唤去做的人(使役),又是事情发生在其身上的人(被动),所以日语把两者叠加。\n\n五段动词的做法是:取使役词干——即 `-a` 段,也就是你接 `ない` 时用的同一形态——再加上 `せられる`。`飲む` 的使役词干是 `飲ま`,于是变成 `飲ませられる`,「被迫喝」。它字面上就是使役 `〜せる` 后面焊上被动 `〜られる`。\n\n组装好之后,整体因为以 `られる` 结尾,就像二类(下一段)动词一样变化。所以简体过去式是 `〜せられた`,礼貌体现在式是 `〜せられます`——不必记新规则,沿用你已熟悉的 `-る` 动词模式即可。\n\n想象一位家长描述生病的孩子:`弟は薬を飲ませられた`,「弟弟被迫吃了药」。孩子不想吃,有人坚持要他吃,这个形式本身就带着那份不情愿。",
      examples: [
        {
          jp: "弟は薬を飲ませられた",
          reading: "おとうとはくすりをのませられた",
          en: "My little brother was made to take the medicine.",
          zh: "弟弟被迫吃了药。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 弟 = ProperNoun<"弟">;
type 薬 = ProperNoun<"薬">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 弟 + は + 薬を + [飲む causative stem 飲ま] + せられた
type 弟は薬を飲ませられた = \`\${PhraseWithParticle<弟, "は">}\${PhraseWithParticle<薬, "を">}\${ConjugateVerb<飲む, "使役形">}せられた\`;
`,
        },
        {
          jp: "毎日塾に行かせられます",
          reading: "まいにちじゅくにいかせられます",
          en: "I am made to go to cram school every day.",
          zh: "我每天都被逼着去补习班。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 毎日 = ProperNoun<"毎日">;
type 塾 = ProperNoun<"塾">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 毎日 + 塾に + [行く causative stem 行か] + せられます
type 毎日塾に行かせられます = \`\${毎日}\${PhraseWithParticle<塾, "に">}\${ConjugateVerb<行く, "使役形">}せられます\`;
`,
        },
      ],
    },
    {
      id: "i03-2",
      titleEn: "Group II (ichidan) & Group III (irregular): 〜させられる",
      titleZh: "二类(上下一段)与三类(不规则):〜させられる",
      bodyEn:
        "Godan verbs needed that `-a` row to make room for `せられる`, but ichidan and irregular verbs are simpler — just as they were when you first met the plain causative `させる`. The forced-victim version follows the exact same shape, only with the passive `られる` already inside.\n\nFor an ichidan verb, drop the final `る` and add `させられる`: `食べる` → `食べさせられる`, \"to be made to eat.\" The two irregulars come along quietly: `する` → `させられる`, and `来る` → `来させられる`.\n\nThis matters more than it might look, because Japanese turns countless nouns into verbs with `する` — `勉強する` (study), `残業する` (work overtime), `掃除する` (clean). Every one of those can become `〜させられる`, which is exactly why this pattern is the everyday voice of complaint about duties you never asked for.\n\nSo at that izakaya, you finally have your line: `私は部長に残業させられた`, \"I was made to work overtime by the department head.\" Notice `部長に` — the person who forced you is marked with `に`, just like the agent \"by whom\" in any passive sentence.",
      bodyZh:
        "五段动词需要用 `-a` 段腾出位置接 `せられる`,但二类和三类动词更简单——就像你最初学纯使役 `させる` 时一样。被迫这一版沿用完全相同的形态,只是把被动 `られる` 已经内含其中。\n\n二类动词去掉词尾 `る`,加上 `させられる`:`食べる` → `食べさせられる`,「被迫吃」。两个不规则动词也随之而来:`する` → `させられる`,`来る` → `来させられる`。\n\n这一点比看上去更重要,因为日语用 `する` 把无数名词变成动词——`勉強する`(学习)、`残業する`(加班)、`掃除する`(打扫)。它们每一个都能变成 `〜させられる`,这正是此句型成为抱怨「莫名其妙被摊上的差事」的日常用语的原因。\n\n于是在居酒屋,你终于有了那句台词:`私は部長に残業させられた`,「我被部长逼着加了班」。注意 `部長に`——强迫你的人用 `に` 标示,就和任何被动句里「被谁」的施事者一样。",
      examples: [
        {
          jp: "私は野菜を食べさせられた",
          reading: "わたしはやさいをたべさせられた",
          en: "I was made to eat the vegetables.",
          zh: "我被逼着把蔬菜吃了。",
          code: `import type { ProperNoun, IchidanVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 野菜 = ProperNoun<"野菜">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// 私 + は + 野菜を + [食べ stem] + させられた
type 私は野菜を食べさせられた = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<野菜, "を">}\${食べる["stem"]}させられた\`;
`,
        },
        {
          jp: "私は部長に残業させられた",
          reading: "わたしはぶちょうにざんぎょうさせられた",
          en: "I was made to work overtime by the department head.",
          zh: "我被部长逼着加了班。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 部長 = ProperNoun<"部長">;
type 残業 = ProperNoun<"残業">;
type する = IrregularVerb & { dictionary: "する" };

// 私は + 部長に + 残業 + [する causative させ] + られた
type 私は部長に残業させられた = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<部長, "に">}\${残業}\${ConjugateVerb<する, "使役形">}られた\`;
`,
        },
      ],
    },
    {
      id: "i03-3",
      titleEn: "The spoken contraction: 〜される",
      titleZh: "口语缩约形:〜される",
      bodyEn:
        "Say `飲ませられる` out loud and you will feel why it rarely survives intact in casual speech: the `せ` and the `られ` pile up into a mouthful. Japanese, like any spoken language, smooths over repeated sounds, so for godan verbs `〜せられる` slides down to `〜される`. `飲ませられる` becomes `飲まされる`; `待たせられる` becomes `待たされる`. You build it from the same `-a` causative stem, just capping it with `される` instead.\n\nThere is one guardrail. Verbs whose causative stem already ends in `さ` — the `〜す` group like `話す` (stem `話さ`) — do not contract, because that would create an ugly `ささ`. So `話させられる` stays as it is. And remember, this shortcut belongs to godan verbs alone; Group II and Group III verbs keep their full `〜させられる`.\n\nThis contracted form is what you will actually hear among friends. Stuck in a clinic waiting room far too long, you would grumble `一時間も待たされた`, \"I was kept waiting a whole hour.\" The `も` after `一時間` adds that exasperated \"a whole hour, can you believe it.\" It is the natural, lived-in voice of the causative-passive.",
      bodyZh:
        "把 `飲ませられる` 念出声,你就会明白它为何在口语里很少完整存活:`せ` 和 `られ` 堆在一起十分拗口。日语和任何口头语言一样会把重复的音磨平,所以五段动词的 `〜せられる` 滑落成 `〜される`。`飲ませられる` 变成 `飲まされる`;`待たせられる` 变成 `待たされる`。用同样的 `-a` 段使役词干,改接 `される` 即可。\n\n有一条防护栏。使役词干本身已以 `さ` 结尾的动词——`〜す` 类,如 `話す`(词干 `話さ`)——不缩约,否则会冒出难听的 `ささ`。所以 `話させられる` 保持原样。还要记住,这条捷径只属于五段动词;二类、三类动词仍用完整的 `〜させられる`。\n\n这个缩约形才是你在朋友之间真正会听到的。在诊所候诊室里干等了太久,你会嘟囔 `一時間も待たされた`,「我被迫等了整整一个小时」。`一時間` 后面的 `も` 添上了那种「整整一个小时,你敢信」的恼火。它正是使役被动最自然、最接地气的声音。",
      examples: [
        {
          jp: "私は歌を歌わされた",
          reading: "わたしはうたをうたわされた",
          en: "I was made to sing a song.",
          zh: "我被逼着唱了首歌。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 歌 = ProperNoun<"歌">;
type 歌う = GodanVerb & { stem: "歌"; ending: "う" };

// 私は + 歌を + [歌う causative stem 歌わ] + された (contraction of 歌わせられた)
type 私は歌を歌わされた = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<歌, "を">}\${ConjugateVerb<歌う, "使役形">}された\`;
`,
        },
        {
          jp: "一時間も待たされた",
          reading: "いちじかんもまたされた",
          en: "I was kept waiting for a whole hour.",
          zh: "我被迫等了整整一个小时。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 一時間 = ProperNoun<"一時間">;
type 待つ = GodanVerb & { stem: "待"; ending: "つ" };

// 一時間も + [待つ causative stem 待た] + された
type 一時間も待たされた = \`\${PhraseWithParticle<一時間, "も">}\${ConjugateVerb<待つ, "使役形">}された\`;
`,
        },
      ],
    },
    {
      id: "i03-4",
      titleEn: "Expressing reluctance & spontaneity",
      titleZh: "表达无奈与情不自禁",
      bodyEn:
        "By now the mechanics are settled, so let's name the feeling the form is really for. Most of the time `〜させられる` is the language of reluctance: the subject did the action, but did not want to, and someone else is to blame. That blamed agent is marked with `に`. When parents reminisce, `子供は毎日勉強させられる` (\"children are made to study every day\") quietly admits the kids would rather be doing anything else — it is the same form you would use to tell a friend your parents made you take piano lessons as a child.\n\nBut the form has a gentler second life. Sometimes nothing is forcing you against your will at all; instead, something draws an emotion out of you spontaneously, almost involuntarily. A great comedian `笑わせる`s you — makes you laugh — and from your side that becomes `笑わされた`, \"I couldn't help laughing.\" There is no victim and no blame here, just the honest sense that the reaction came whether you planned it or not.\n\nThe most beloved member of this family is `考えさせられる`, \"to be made to think.\" A film or a conversation `考えさせられる`s you, leaving you turning it over long afterward — \"it really gave me food for thought.\" When you reach for this softer shade, drop the accusing `に` agent; the point is not who did it to you but that the feeling welled up on its own.",
      bodyZh:
        "到这里变形规则已经稳了,我们来给这个形式真正要表达的情感命名。多数时候 `〜させられる` 是无奈的语言:主语做了那件事,却并不情愿,而该怪的是别人。被怪的施事者用 `に` 标示。父母回忆往事时说 `子供は毎日勉強させられる`(「孩子们每天都被逼着学习」),悄悄承认孩子其实更想干别的——这正是你告诉朋友「小时候爸妈逼我学钢琴」时会用的同一个形式。\n\n但这个形式还有更柔和的第二种生命。有时根本没人违背你的意愿强迫你;而是某事情不自禁地、几乎不由自主地把一种情绪从你身上引出来。出色的喜剧演员把你 `笑わせる`——逗你笑——从你这一边就成了 `笑わされた`,「我被逗得忍不住笑了」。这里没有受害者,也没有责备,只是诚实地承认:那反应不管你计划与否都来了。\n\n这一家族里最受喜爱的成员是 `考えさせられる`,「令人深思」。一部电影或一次谈话让你 `考えさせられる`,事后久久回味——「真是发人深省」。当你想取这层更柔和的意味时,就略去带责备意味的 `に` 施事者;重点不在于谁对你做了什么,而在于那份情绪是自己涌上来的。",
      examples: [
        {
          jp: "子供は毎日勉強させられる",
          reading: "こどもはまいにちべんきょうさせられる",
          en: "Children are made to study every day.",
          zh: "孩子们每天都被逼着学习。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 子供 = ProperNoun<"子供">;
type 毎日 = ProperNoun<"毎日">;
type 勉強 = ProperNoun<"勉強">;
type する = IrregularVerb & { dictionary: "する" };

// 子供は + 毎日 + 勉強 + [する causative させ] + られる
type 子供は毎日勉強させられる = \`\${PhraseWithParticle<子供, "は">}\${毎日}\${勉強}\${ConjugateVerb<する, "使役形">}られる\`;
`,
        },
        {
          jp: "私は笑わされた",
          reading: "わたしはわらわされた",
          en: "I couldn't help being made to laugh.",
          zh: "我被逗得忍不住笑了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 笑う = GodanVerb & { stem: "笑"; ending: "う" };

// 私は + [笑う causative stem 笑わ] + された (spontaneous reaction)
type 私は笑わされた = \`\${PhraseWithParticle<私, "は">}\${ConjugateVerb<笑う, "使役形">}された\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
