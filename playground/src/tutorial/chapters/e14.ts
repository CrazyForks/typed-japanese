import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e14",
  level: "elementary",
  order: 14,
  titleEn: "Permission & prohibition",
  titleZh: "许可与禁止",
  summaryEn:
    "You're standing in a temple and want to ask the host, “Is it OK to take a photo here?” — but so far you could only request actions (`〜てください`, ch.10), never ask whether they're allowed. This chapter reuses that same te-form to grant permission with `〜てもいいです` (“you may…”) and to forbid with `〜てはいけません` (“you must not…”). One form you already know, two new tails, and you can ask, allow, and refuse.",
  summaryZh:
    "你站在寺院里,想问主人:「这里可以拍照吗?」—— 但目前为止你只会请求别人做某事(`〜てください`,第10章),却不会问某事是否被允许。本章把你已经掌握的「て形」再利用一次:用 `〜てもいいです` 给予许可(「可以……」),用 `〜てはいけません` 表示禁止(「不可以……」)。一个旧形式,两个新词尾,你就能发问、答应和拒绝了。",
  points: [
    {
      id: "e14-1",
      titleEn: "〜てもいいです — permission (“may / it's OK to”)",
      titleZh: "〜てもいいです —— 许可(「可以……」)",
      bodyEn:
        "Back in chapter 10 the te-form let you ask someone to do something — `撮ってください`, “please take a photo.” But a request assumes the action is fine; it can't ask or state whether it's actually allowed. That's the gap this pattern fills.\n\nTake the te-form and attach `もいいです`: the action becomes permitted, “it's OK to…”, “you may…”. The `も` here is the same “even” you'll meet again later, so the literal reading is “even if you do X, it's fine” — Japanese grants permission by saying the action does no harm, rather than by issuing a license. That intuition is worth holding onto, because the prohibition pattern in the next point is built as its mirror image.\n\nTo turn a statement into a request for permission, just add the question particle `か` you've used since chapter 1: `〜てもいいですか`, “May I…?” A friendly reply granting it is `はい、いいですよ`, “Yes, go ahead.”\n\nPicture yourself at a friend's house asking `この本を借りてもいいですか` (“May I borrow this book?”), or a tour guide telling the group `ここで写真を撮ってもいいです` (“You may take photos here”). The only part that bends to the verb type is the te-form itself — `食べる`→`食べて`, `吸う`→`吸って`, `する`→`して` — and everything from `もいい` onward stays frozen, no matter the verb.",
      bodyZh:
        "在第10章,「て形」让你请别人做某事 —— `撮ってください`,「请拍照」。但请求本身已经假定这个动作没问题,它无法发问、也无法说明这件事究竟允不允许。这正是本句型要填补的空白。\n\n在「て形」后接 `もいいです`,动作就变成被许可的:「可以……」「……也行」。这里的 `も` 就是「连……也」的那个「も」,所以字面意思是「即使做 X 也没关系」—— 日语给予许可,是靠说「这么做没有坏处」,而不是颁发一张许可证。请记住这个直觉,因为下一点的禁止句型正是它的镜像。\n\n要把陈述变成请求许可,只需加上第1章就用过的疑问助词 `か`:`〜てもいいですか`,「我可以……吗?」常见而友好的许可回答是 `はい、いいですよ`,「可以,请便」。\n\n想象你在朋友家问 `この本を借りてもいいですか`(「我可以借这本书吗?」),或导游对大家说 `ここで写真を撮ってもいいです`(「这里可以拍照」)。随动词类型变化的只有「て形」本身 —— `食べる`→`食べて`、`吸う`→`吸って`、`する`→`して` —— 而 `もいい` 之后的部分,无论什么动词都保持不动。",
      examples: [
        {
          jp: "ここで写真を撮ってもいいです",
          reading: "ここでしゃしんをとってもいいです",
          en: "You may take photos here.",
          zh: "这里可以拍照。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type 写真 = ProperNoun<"写真">;
type 撮る = GodanVerb & { stem: "撮"; ending: "る" };

// ここで + 写真を + 撮って (te-form) + もいいです
type ここで写真を撮ってもいいです = \`ここで\${写真}を\${ConjugateVerb<撮る, "て形">}もいいです\`;
`,
        },
        {
          jp: "この本を借りてもいいですか",
          reading: "このほんをかりてもいいですか",
          en: "May I borrow this book?",
          zh: "我可以借这本书吗?",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb } from "typed-japanese";

type 本 = ProperNoun<"本">;
type 借りる = IchidanVerb & { stem: "借り"; ending: "る" };

// この + 本を + 借りて (te-form) + もいいですか
type この本を借りてもいいですか = \`この\${本}を\${ConjugateVerb<借りる, "て形">}もいいですか\`;
`,
        },
        {
          jp: "ここで休んでもいいです",
          reading: "ここでやすんでもいいです",
          en: "You may rest here.",
          zh: "可以在这里休息。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 休む = GodanVerb & { stem: "休"; ending: "む" };

// ここで + 休んで (te-form) + もいいです
type ここで休んでもいいです = \`ここで\${ConjugateVerb<休む, "て形">}もいいです\`;
`,
        },
      ],
    },
    {
      id: "e14-2",
      titleEn: "〜てはいけません — prohibition (“must not”)",
      titleZh: "〜てはいけません —— 禁止(「不可以……」)",
      bodyEn:
        "Permission tells you the door is open; now you need the sign that says it's closed. You already know how to say you simply won't do something (`〜ません`, ch.5), but that's a personal choice, not a rule. To state that an action is forbidden — for everyone, by the rules — Japanese uses a different shape.\n\nKeep the very same te-form and swap the tail: attach `はいけません` to forbid the action, “you must not…”, “…is not allowed.” It's the mirror of `〜てもいいです`. Where `も` (“even”) softened the verb into “even doing it is fine,” here `は` marks the action as the topic and `いけません` (“it won't do / it's no good”) delivers the verdict — literally “as for doing X, that won't do.” Same skeleton, opposite ruling.\n\nThis pattern has a firm, regulation-stating tone, so you'll meet it most often on signs and in instructions: `ここに入ってはいけません` posted on a gate, `ここでタバコを吸ってはいけません` on a wall, or a parent's quiet `触ってはいけません` (“you must not touch that”) to a reaching child.\n\nOne thing to watch: in casual speech this contracts to `〜ちゃだめ` or `〜ちゃいけない` (you'll hear `吸っちゃだめ` from a friend), but the polite `〜てはいけません` is what you should reach for in almost every everyday situation until you're sure of the relationship.",
      bodyZh:
        "许可告诉你门是开着的;现在你需要那块写着「禁止入内」的牌子。你已经会说自己「不做」某事(`〜ません`,第5章),但那是个人选择,不是规定。要表明一个动作被禁止 —— 对所有人、按规矩 —— 日语用的是另一种形态。\n\n保留同一个「て形」,只换词尾:接上 `はいけません` 表示禁止,「不可以……」「不允许……」。它是 `〜てもいいです` 的镜像。前面的 `も`(「连……也」)把动作软化成「连做它也没关系」,而这里的 `は` 把动作标成话题,`いけません`(「不行」)给出判决 —— 字面就是「至于做 X 这件事,那可不行」。骨架相同,判决相反。\n\n这个句型语气坚定、带有规定的意味,因此你最常在告示牌和说明里见到它:大门上贴的 `ここに入ってはいけません`、墙上的 `ここでタバコを吸ってはいけません`,或家长对伸手的孩子轻声说的 `触ってはいけません`(「那个不可以碰」)。\n\n要留意一点:口语里它会缩约成 `〜ちゃだめ` 或 `〜ちゃいけない`(朋友间会听到 `吸っちゃだめ`),但在几乎所有日常场合,在你确定彼此关系之前,都该用礼貌体的 `〜てはいけません`。",
      examples: [
        {
          jp: "ここでタバコを吸ってはいけません",
          reading: "ここでタバコをすってはいけません",
          en: "You must not smoke here.",
          zh: "这里不可以吸烟。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type タバコ = ProperNoun<"タバコ">;
type 吸う = GodanVerb & { stem: "吸"; ending: "う" };

// ここで + タバコを + 吸って (te-form) + はいけません
type ここでタバコを吸ってはいけません = \`ここで\${タバコ}を\${ConjugateVerb<吸う, "て形">}はいけません\`;
`,
        },
        {
          jp: "ここに入ってはいけません",
          reading: "ここにはいってはいけません",
          en: "You must not enter here.",
          zh: "这里不可以进入。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 入る = GodanVerb & { stem: "入"; ending: "る" };

// ここに + 入って (te-form) + はいけません
type ここに入ってはいけません = \`ここに\${ConjugateVerb<入る, "て形">}はいけません\`;
`,
        },
        {
          jp: "ここで写真を撮ってはいけません",
          reading: "ここでしゃしんをとってはいけません",
          en: "You must not take photos here.",
          zh: "这里不可以拍照。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type 写真 = ProperNoun<"写真">;
type 撮る = GodanVerb & { stem: "撮"; ending: "る" };

// ここで + 写真を + 撮って (te-form) + はいけません
type ここで写真を撮ってはいけません = \`ここで\${写真}を\${ConjugateVerb<撮る, "て形">}はいけません\`;
`,
        },
      ],
    },
    {
      id: "e14-3",
      titleEn: "Asking and answering: permission vs. refusal",
      titleZh: "问与答:许可与拒绝",
      bodyEn:
        "Now snap the two halves together into the exchange you'd actually have. Imagine boarding a quiet train and asking the attendant `ここで電話を使ってもいいですか` (“May I use the phone here?”). The reply comes back as either permission — `はい、〜てもいいです` — or a refusal that leans on the prohibition pattern: `いいえ、〜てはいけません`, “no, you must not.”\n\nHere's the payoff that ties this chapter together: look at the verb across all three lines. The te-form `使って` is byte-for-byte identical in the question, in a yes, and in a no. Nothing about the verb changes — only the tail flips between `もいいですか` and `はいけません`.\n\nThat's the whole design. The te-form you drilled back in chapter 10 is the shared root; permission and prohibition are just two endings you bolt on. Conjugate the verb once, and you've unlocked the entire ask-and-answer around what's allowed.",
      bodyZh:
        "现在把两半拼成你真正会用到的对话。想象你登上一列安静的列车,问乘务员 `ここで電話を使ってもいいですか`(「这里可以打电话吗?」)。回答要么是许可 —— `はい、〜てもいいです` —— 要么是借用禁止句型的拒绝:`いいえ、〜てはいけません`,「不,不可以」。\n\n这里有个把全章串起来的关键:看看三句话里的那个动词。「て形」`使って` 在提问、在肯定、在否定里都一字不差地相同。动词没有任何变化 —— 变的只是词尾,在 `もいいですか` 和 `はいけません` 之间切换。\n\n这就是整套设计。你在第10章反复练过的「て形」是共同的词根;许可和禁止不过是装在它后面的两个词尾。把动词变一次形,你就解锁了围绕「允不允许」的整段问答。",
      examples: [
        {
          jp: "ここで電話を使ってもいいですか",
          reading: "ここででんわをつかってもいいですか",
          en: "May I use the phone here?",
          zh: "这里可以打电话吗?",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type 電話 = ProperNoun<"電話">;
type 使う = GodanVerb & { stem: "使"; ending: "う" };

// ここで + 電話を + 使って (te-form) + もいいですか
type ここで電話を使ってもいいですか = \`ここで\${電話}を\${ConjugateVerb<使う, "て形">}もいいですか\`;
`,
        },
        {
          jp: "いいえ、ここで電話を使ってはいけません",
          reading: "いいえ、ここででんわをつかってはいけません",
          en: "No, you must not use the phone here.",
          zh: "不,这里不可以打电话。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type 電話 = ProperNoun<"電話">;
type 使う = GodanVerb & { stem: "使"; ending: "う" };

// いいえ、 + ここで + 電話を + 使って (te-form) + はいけません
type いいえここで電話を使ってはいけません = \`いいえ、ここで\${電話}を\${ConjugateVerb<使う, "て形">}はいけません\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
