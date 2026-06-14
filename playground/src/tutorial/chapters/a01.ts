import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a01",
  level: "advanced",
  order: 1,
  titleEn: "Advanced & business keigo",
  titleZh: "高级与商务敬语",
  summaryEn:
    "At the advanced level the challenge with keigo is no longer building it but using it cleanly. This chapter looks at 二重敬語 (doubled honorifics) — a common over-correction to avoid — the highly useful humble pattern `お／ご〜いただく` for asking and thanking, and the fixed set phrases that open and close almost every business email and phone call.",
  summaryZh:
    "到了高级阶段,敬语的难点不再是「怎么造」,而是「怎么用得干净得体」。本章讲解三件事:应当避免的常见过度修饰 ——「二重敬語」(双重敬语);极其实用的自谦句型 `お／ご〜いただく`(用于请求和致谢);以及几乎出现在每一封商务邮件、每一通商务电话开头与结尾的固定套话。",
  points: [
    {
      id: "a01-1",
      titleEn: "二重敬語 — don't stack honorifics twice",
      titleZh: "二重敬語 ——不要把敬语叠加两次",
      bodyEn:
        "`二重敬語` (double honorifics) means applying two honorific operations to a single verb. A classic error is `おっしゃられる`: `おっしゃる` is *already* the honorific form of “to say”, so adding the honorific `〜られる` on top is redundant. The correct word is simply `おっしゃる`.\n\nThe rule of thumb: raise the verb **once**. Use a dedicated honorific verb (`おっしゃる`, `いらっしゃる`, `召し上がる`) on its own, OR use the regular pattern `お〜になる`, but never combine them. So `お読みになる` is correct, while `お読みになられる` is double and wrong.",
      bodyZh:
        "`二重敬語`(双重敬语)指的是对同一个动词施加了两次敬语处理。典型错误是 `おっしゃられる`:`おっしゃる` 本身已经是「说」的尊敬语,再叠加尊敬助动词 `〜られる` 就重复了。正确说法就是 `おっしゃる`。\n\n要诀:把一个动词「抬高一次」即可。要么单独使用专用尊敬动词(`おっしゃる`、`いらっしゃる`、`召し上がる`),要么使用常规句型 `お〜になる`,但绝不能两者并用。因此 `お読みになる` 正确,而 `お読みになられる` 属于双重敬语,是错误的。",
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
type 読む = GodanVerb & { stem: "読"; ending: "む" };

// 社長 + が + 本を + お + 読み(ます形) + になり(ます形) + ます
// Use お〜になる ONCE; do not add 〜られる on top of it.
type 社長が本をお読みになります = \`\${PhraseWithParticle<社長, "が">}本をお\${ConjugateVerb<読む, "ます形">}になります\`;
`,
        },
      ],
    },
    {
      id: "a01-2",
      titleEn: "お／ご〜いただく — humbly receiving an action",
      titleZh: "お／ご〜いただく ——自谦地「承蒙对方做某事」",
      bodyEn:
        "`お＋[ます-stem]＋いただく` (and `ご＋[noun]＋いただく` for サ変 nouns) is the humble counterpart of `お〜くださる`. It frames the other person's action as something *you* humbly receive, so it is the politest way to make requests and to thank.\n\nFor requests, the potential form `〜いただけますか` / `〜いただけませんか` (“might I receive your doing…?”) is softer and more polite than `〜ください`. For thanks, the past `〜いただきました` / `〜いただき、ありがとうございます` expresses gratitude for a completed favour. Compare `ご連絡いただけますか` (“could I trouble you to contact me?”) with the blunter `連絡してください`.",
      bodyZh:
        "`お＋[ます形词干]＋いただく`(サ变名词则用 `ご＋[名词]＋いただく`)是 `お〜くださる` 的自谦版本。它把对方的动作表述为「我承蒙对方为我做」,因此是请求和致谢时最礼貌的说法。\n\n请求时,用可能形 `〜いただけますか`／`〜いただけませんか`(「能否承蒙您…?」)比 `〜ください` 更委婉、更礼貌。致谢时,用过去式 `〜いただきました`／`〜いただき、ありがとうございます` 表达对已完成恩惠的感谢。试比较 `ご連絡いただけますか`(「能否劳烦您联系我?」)与较生硬的 `連絡してください`。",
      examples: [
        {
          jp: "少々お待ちいただけますか",
          reading: "しょうしょうおまちいただけますか",
          en: "Could I ask you to wait a moment?",
          zh: "能请您稍等一下吗?",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 待つ = GodanVerb & { stem: "待"; ending: "つ" };

// 少々 + お + 待ち(ます形) + いただけますか
// お〜いただく in the potential-question form: politest request.
type 少々お待ちいただけますか = \`少々お\${ConjugateVerb<待つ, "ます形">}いただけますか\`;
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
        "Business Japanese runs on a small set of frozen formulas. Learn them as whole units rather than parsing each word.\n\n`お世話になっております` (“thank you for your continued support”) opens nearly every email or call to a client. `よろしくお願いいたします` (“I look forward to working with you / please take care of this”) closes them. `恐れ入りますが…` (“I'm terribly sorry to trouble you, but…”) softens a request that follows. Note the humble verb `いたします` (humble of `する`) inside `お願いいたします`.",
      bodyZh:
        "商务日语依靠一小批固定套语运转。把它们当作整体记忆,而不要逐字拆解。\n\n`お世話になっております`(「一直承蒙关照」)几乎是每封发给客户的邮件或每通电话的开场白;`よろしくお願いいたします`(「请多关照/拜托您了」)则用来收尾;`恐れ入りますが…`(「实在不好意思,劳烦您…」)用来缓和其后的请求。注意 `お願いいたします` 中的自谦动词 `いたします`(`する` 的自谦语)。",
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
          code: `import type { GodanVerb, ConjugateVerb, ConnectedPhrases } from "typed-japanese";

type 入る = GodanVerb & { stem: "入"; ending: "る" };
type 待つ = GodanVerb & { stem: "待"; ending: "つ" };

// 恐れ + 入り(ます形) + ますが  →  cushioning opener
type 恐れ入りますが = \`恐れ\${ConjugateVerb<入る, "ます形">}ますが\`;
// 少々 + お + 待ち(ます形) + ください
type 少々お待ちください = \`少々お\${ConjugateVerb<待つ, "ます形">}ください\`;

// join the two clauses with 、
type 恐れ入りますが少々お待ちください = ConnectedPhrases<恐れ入りますが, 少々お待ちください>;
`,
        },
      ],
    },
  ],
};

export default chapter;
