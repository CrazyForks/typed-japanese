import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a01",
  level: "advanced",
  order: 1,
  titleEn: "Advanced & business keigo",
  titleZh: "高级与商务敬语",
  summaryEn:
    "Picture yourself about to send your first email to a client, or picking up a ringing office phone. From chapters 24 and 25 you can already build a clean honorific verb (`お読みになる`, `いらっしゃる`) or a humble one (`お〜する`, `いただく`) — but knowing each piece doesn't tell you how to frame a whole message. This chapter covers the real-world rituals: the over-correction `二重敬語` to avoid, the maximally deferential request pattern `お／ご〜いただく`, and the frozen openers and closers that wrap almost every business email and call.",
  summaryZh:
    "想象你正要给客户发出第一封邮件,或拿起响个不停的办公室电话。第 24、25 章已经教会你造出干净的尊敬语动词(`お読みになる`、`いらっしゃる`)和自谦语动词(`お〜する`、`いただく`)——但会拼每个零件,并不等于会组织一整段话。本章讲的是真实场景里的「礼仪」:应当避免的过度修饰 `二重敬語`、最为谦恭的请求句型 `お／ご〜いただく`,以及几乎包裹住每封商务邮件、每通商务电话的固定开头与结尾套话。",
  points: [
    {
      id: "a01-1",
      titleEn: "二重敬語 — don't stack honorifics twice",
      titleZh: "二重敬語 ——不要把敬语叠加两次",
      bodyEn:
        "In chapter 24 you learned two separate ways to make a verb respectful: a dedicated honorific verb like `おっしゃる` (the special honorific of “to say”), and the general pattern `お〜になる`. Each one already does the whole job of raising your listener. The trap, the moment you have both tools, is to reach for both at once — and that produces `二重敬語`, doubled honorifics.\n\nThe classic mistake is `おっしゃられる`. Here `おっしゃる` is already honorific, and the speaker, wanting to sound extra-respectful, glues the honorific `〜られる` from chapter 24 on top. Think of why this feels wrong: keigo raises a verb's social register, so applying it twice is like SHOUTING a word that is already capitalized. It reads as anxious over-politeness, not deeper respect. The correct word is simply `おっしゃる`.\n\nThe rule of thumb is: raise the verb exactly once. Either use a special honorific verb on its own (`おっしゃる`, `いらっしゃる`, `召し上がる`), or use `お〜になる` — but never combine the two. So `お読みになる` is correct, while `お読みになられる` stacks `お〜になる` and `〜られる` together and is wrong.\n\nWhere does this bite in real life? You are introducing your manager's words in a meeting and want to be deferential, so the instinct is to pile on. Resist it: `部長がおっしゃいました` is perfectly, fully respectful. Adding more does not add politeness — it only signals that you are unsure of the rules.",
      bodyZh:
        "第 24 章教过你两种把动词变尊敬的独立办法:专用尊敬动词,例如 `おっしゃる`(「说」的特殊尊敬语);以及通用句型 `お〜になる`。这两种办法各自就已经完成了「抬高对方」这件事。可一旦你手里同时握着两件工具,陷阱就来了——你会忍不住两件一起用,于是造出 `二重敬語`(双重敬语)。\n\n典型错误是 `おっしゃられる`。这里 `おっしゃる` 本身已经是尊敬语,而说话人为了显得更恭敬,又把第 24 章的尊敬助动词 `〜られる` 贴了上去。想想为什么这听起来别扭:敬语本就是在抬高动词的社会等级,抬两次就像把一个已经大写的词再「喊」一遍——给人的感觉是紧张过度,而非更深的敬意。正确说法就是 `おっしゃる`。\n\n要诀是:把一个动词「抬高一次」就好。要么单独使用专用尊敬动词(`おっしゃる`、`いらっしゃる`、`召し上がる`),要么使用 `お〜になる`——但绝不能两者并用。因此 `お読みになる` 正确,而 `お読みになられる` 把 `お〜になる` 和 `〜られる` 叠在一起,是错误的。\n\n这在现实里什么时候会绊倒你?当你在会上转述上司的话、想表现得恭敬时,本能就是层层加码。请克制:`部長がおっしゃいました` 已经是完全充分的尊敬说法。再加东西不会更礼貌——只会暴露你对规则没把握。",
      examples: [
        {
          jp: "先生がおっしゃいました",
          reading: "せんせいがおっしゃいました",
          en: "The teacher said (it). [single honorific — correct]",
          zh: "老师说了。(单重敬语,正确)",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 先生 = ProperNoun<"先生">;
// おっしゃる is an honorific verb on its own (raise once only). Its ます形 is the
// irregular おっしゃい (not おっしゃり), so we spell that morpheme as a literal.
type おっしゃいました = ProperNoun<"おっしゃいました">;

// 先生 + が + おっしゃいました
type 先生がおっしゃいました = \`\${PhraseWithParticle<先生, "が">}\${おっしゃいました}\`;
`,
        },
        {
          jp: "社長が本をお読みになります",
          reading: "しゃちょうがほんをおよみになります",
          en: "The company president reads a book. [お〜になる — correct]",
          zh: "社长读书。(お〜になる 句型,正确)",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 社長 = ProperNoun<"社長">;
type 本 = ProperNoun<"本">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };

// 社長 + が + 本 + を + お + 読み(ます形) + になり(ます形) + ます
// Use お〜になる ONCE; do not add 〜られる on top of it.
type 社長が本をお読みになります = \`\${PhraseWithParticle<社長, "が">}\${PhraseWithParticle<本, "を">}お\${ConjugateVerb<読む, "ます形">}になります\`;
`,
        },
      ],
    },
    {
      id: "a01-2",
      titleEn: "お／ご〜いただく — humbly receiving an action",
      titleZh: "お／ご〜いただく ——自谦地「承蒙对方做某事」",
      bodyEn:
        "From chapter 33 you know `いただく` as the humble version of `もらう`, “to receive.” And from chapter 24 you can ask someone to do something with `お〜くださる`, where the other person is the giver. Up to now, though, you could only point the spotlight at the doer. The problem in polite business speech is that the most deferential stance is to make yourself the humble receiver of a kindness — and that is exactly what `お／ご〜いただく` lets you do.\n\nThe pattern is `お` + a verb's ます-stem + `いただく` (and `ご` + a サ変 noun + `いただく`, e.g. `ご確認いただく`). It frames the other person's action as a favour that you yourself humbly receive. Why is this the politest framing? Because instead of commanding them (“do this”), you describe their action as a gift flowing to you — the same deference as receiving with both hands.\n\nFor requests, lean on the potential form from chapter 18: `〜いただけますか` / `〜いただけませんか`, literally “might I receive your doing…?” This is markedly softer than the plain `〜ください`. Picture answering the office phone when the person your caller wants is away — you say `少々お待ちいただけますか` rather than the blunt `待ってください`, and the caller feels asked, not ordered.\n\nFor thanks, use the past `〜いただきました` or `〜いただき、ありがとうございます` to express gratitude for a completed favour. A shop greeting a customer says `ご来店いただきありがとうございます` — “thank you for the visit I received from you.” Compare the gentle `ご連絡いただけますか` (“could I trouble you to contact me?”) with the flat `連絡してください`, and you can hear the whole register lift.",
      bodyZh:
        "第 33 章里你已学过 `いただく` 是 `もらう`「收到」的自谦语;第 24 章又教过用 `お〜くださる` 请对方做某事,其中对方是「给予者」。可到目前为止,你只能把镜头对准「动作的执行者」。商务礼貌语的难点在于:最谦恭的姿态,是把自己摆成「承蒙好意的接受者」——而这正是 `お／ご〜いただく` 能做到的。\n\n句型是 `お` + 动词ます形词干 + `いただく`(サ变名词则用 `ご` + 名词 + `いただく`,如 `ご確認いただく`)。它把对方的动作表述为「我承蒙对方为我做」的恩惠。为什么这是最礼貌的框架?因为你不是在命令对方(「做这个」),而是把对方的动作描述成流向自己的一份馈赠——就像双手承接一样恭敬。\n\n请求时,借用第 18 章的可能形:`〜いただけますか`／`〜いただけませんか`,字面是「能否承蒙您…?」,比直白的 `〜ください` 委婉得多。设想你接起办公室电话,而对方要找的人不在——你会说 `少々お待ちいただけますか`,而不是生硬的 `待ってください`,让来电者感到是被「请求」而非被「命令」。\n\n致谢时,用过去式 `〜いただきました` 或 `〜いただき、ありがとうございます` 表达对已完成恩惠的感谢。店家迎接顾客会说 `ご来店いただきありがとうございます`——「承蒙您的光临」。把柔和的 `ご連絡いただけますか`(「能否劳烦您联系我?」)和平淡的 `連絡してください` 一对比,整个语气的抬升就听得出来了。",
      examples: [
        {
          jp: "少々お待ちいただけますか",
          reading: "しょうしょうおまちいただけますか",
          en: "Could I ask you to wait a moment?",
          zh: "能请您稍等一下吗?",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type 少々 = ProperNoun<"少々">;
type 待つ = GodanVerb & { stem: "待"; ending: "つ" };

// 少々 + お + 待ち(ます形) + いただけますか
// お〜いただく in the potential-question form: politest request.
type 少々お待ちいただけますか = \`\${少々}お\${ConjugateVerb<待つ, "ます形">}いただけますか\`;
`,
        },
        {
          jp: "資料をご確認いただきました",
          reading: "しりょうをごかくにんいただきました",
          en: "(You) kindly checked the documents. [I received that favour]",
          zh: "承蒙您确认了资料。",
          code: `import type { ProperNoun } from "typed-japanese";

type 資料 = ProperNoun<"資料">;
// ご + [サ変 noun 確認] + いただきました — humble thanks for a completed action.
type 確認 = ProperNoun<"確認">;

// 資料を + ご + 確認 + いただきました
type 資料をご確認いただきました = \`\${資料}をご\${確認}いただきました\`;
`,
        },
        {
          jp: "ご来店いただきありがとうございます",
          reading: "ごらいてんいただきありがとうございます",
          en: "Thank you for visiting our store.",
          zh: "感谢您光临本店。",
          code: `import type { ProperNoun } from "typed-japanese";

type 来店 = ProperNoun<"来店">;

// ご + 来店 + いただき + ありがとうございます
type ご来店いただきありがとうございます = \`ご\${来店}いただきありがとうございます\`;
`,
        },
      ],
    },
    {
      id: "a01-3",
      titleEn: "Business set phrases — fixed openers and closers",
      titleZh: "商务套话 ——固定的开头与结尾",
      bodyEn:
        "You now have all the grammar you need to build polite sentences from scratch — but real business Japanese rarely does. A surprising amount of an email or phone call is pre-fabricated: a handful of frozen formulas that frame the message before any real content arrives. Up to now you'd have tried to compose an opening line word by word; the problem is that natives expect the ritual phrase, and a freshly-built sentence in its place reads as oddly out-of-tune.\n\nWhy are these phrases frozen? Because in business, rituals signal in-group competence faster than fresh wording does. Reciting the expected formula tells the other side “I know how this is done,” which is exactly the reassurance a client or a senior colleague is listening for. So learn them as whole units rather than parsing each word.\n\nThree carry most of the weight. `お世話になっております` (“thank you for your continued support”) opens nearly every email or call to a client — you say it even on first contact, as a kind of social warm-up. `よろしくお願いいたします` (“I look forward to working with you / please take care of this”) closes them; notice the humble `いたします` from chapter 25, the humble form of `する`, doing the work of lowering yourself. And `恐れ入りますが…` (“I'm terribly sorry to trouble you, but…”) is a cushioning phrase you place just before a request to soften it.\n\nPut them together in a scene: you phone a supplier, open with `いつもお世話になっております`, and when you need them to hold, you cushion it — `恐れ入りますが、少々お待ちください`. The `恐れ入りますが` signals you know you're imposing, and the `が` (the soft “but” from chapter 34) hands gently off to the request that follows.",
      bodyZh:
        "现在你已经具备从零造出礼貌句子的全部语法——可真实的商务日语很少这么做。邮件和电话里有相当大一部分其实是「预制件」:一小批固定套语,在正式内容出场之前先为整段话定调。此前你大概会逐字去拼一句开场白;问题在于,母语者期待的是那句「仪式化的套话」,你临场造的句子放在那个位置,反而显得格格不入。\n\n这些套语为什么是「冻结」的?因为在商务场合,「仪式」比新造的措辞更快地传递出「我是圈内人、懂规矩」的信号。背出对方预期的那句套话,等于告诉对方「这事我懂怎么办」——而这正是客户或前辈想听到的那份安心。所以请把它们当作整体记忆,而不要逐字拆解。\n\n三句承担了大部分分量。`お世話になっております`(「一直承蒙关照」)几乎是每封发给客户的邮件、每通电话的开场白——哪怕是初次联系也照说不误,算是一种社交暖场。`よろしくお願いいたします`(「请多关照/拜托您了」)用来收尾;注意其中第 25 章学过的自谦语 `いたします`(`する` 的自谦形),正起着「压低自己」的作用。而 `恐れ入りますが…`(「实在不好意思,劳烦您…」)是一句缓冲语,放在请求之前用来柔化语气。\n\n把它们放进一个场景:你打电话给供应商,先用 `いつもお世話になっております` 开场,需要对方稍候时再加缓冲——`恐れ入りますが、少々お待ちください`。`恐れ入りますが` 表明你知道这是在打扰对方,而句末的 `が`(第 34 章那个柔和的「但是」)则轻轻把话头交给随后的请求。",
      examples: [
        {
          jp: "いつもお世話になっております",
          reading: "いつもおせわになっております",
          en: "Thank you, as always, for your support.",
          zh: "一直以来承蒙您关照。",
          code: `import type { ProperNoun } from "typed-japanese";

type お世話 = ProperNoun<"お世話">;

// いつも + お世話 + になっております (fixed opener)
type いつもお世話になっております = \`いつも\${お世話}になっております\`;
`,
        },
        {
          jp: "どうぞよろしくお願いいたします",
          reading: "どうぞよろしくおねがいいたします",
          en: "I sincerely look forward to working with you.",
          zh: "今后还请您多多关照。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb } from "typed-japanese";

type お願い = ProperNoun<"お願い">;
// いたす is the humble form of する; here as いたします.
type する = IrregularVerb & { dictionary: "する" };

// どうぞよろしく + お願い + いたし(ます形) + ます
type どうぞよろしくお願いいたします = \`どうぞよろしく\${お願い}いた\${ConjugateVerb<する, "ます形">}ます\`;
`,
        },
        {
          jp: "恐れ入りますが、少々お待ちください",
          reading: "おそれいりますが、しょうしょうおまちください",
          en: "I'm sorry to trouble you, but please wait a moment.",
          zh: "实在不好意思,请您稍等一下。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, ConnectedPhrases } from "typed-japanese";

type 恐れ = ProperNoun<"恐れ">;
type 少々 = ProperNoun<"少々">;
type 入る = GodanVerb & { stem: "入"; ending: "る" };
type 待つ = GodanVerb & { stem: "待"; ending: "つ" };

// 恐れ + 入り(ます形) + ますが  →  cushioning opener
type 恐れ入りますが = \`\${恐れ}\${ConjugateVerb<入る, "ます形">}ますが\`;
// 少々 + お + 待ち(ます形) + ください
type 少々お待ちください = \`\${少々}お\${ConjugateVerb<待つ, "ます形">}ください\`;

// join the two clauses with 、
type 恐れ入りますが少々お待ちください = ConnectedPhrases<恐れ入りますが, 少々お待ちください>;
`,
        },
      ],
    },
  ],
};

export default chapter;
