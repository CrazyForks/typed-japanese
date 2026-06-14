import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e11",
  level: "elementary",
  order: 11,
  titleEn: "〜ています",
  titleZh: "〜ています进行与状态",
  summaryEn:
    "Attach `います` to a verb's te-form to get `〜ています`. This one pattern covers three closely related meanings: an action in progress (“is doing”), a state that resulted from a past action (“has done / is in the state of”), and a habitual or repeated action. Which reading applies depends on the verb and the context.",
  summaryZh:
    "把 `います` 接在动词的「て形」后面,就得到 `〜ています`。这一个句型涵盖三种密切相关的含义:正在进行的动作(「正在做」)、由过去动作产生并持续的状态(「已经…着/处于…状态」),以及习惯性、反复的动作。具体取哪一种含义,取决于动词本身和上下文。",
  points: [
    {
      id: "e11-1",
      titleEn: "Progressive: an action in progress",
      titleZh: "进行:正在进行的动作",
      bodyEn:
        "The most basic use of `〜ています` is the present progressive: an action that is happening right now, like English “is/are doing”. Build it as **te-form + います**.\n\nThe te-form is the same form you learned for requests and linking; just add `います`. For example `食べる → 食べて → 食べています` (is eating), `読む → 読んで → 読んでいます` (is reading).",
      bodyZh:
        "`〜ています` 最基本的用法是现在进行时:表示此刻正在发生的动作,相当于英语的「is/are doing」。构成方式是 **て形 + います**。\n\nて形 就是你学过的、用于请求和连接的那个形式,只要再加上 `います` 即可。例如 `食べる → 食べて → 食べています`(正在吃)、`読む → 読んで → 読んでいます`(正在读)。",
      examples: [
        {
          jp: "私はパンを食べています",
          reading: "わたしはパンをたべています",
          en: "I am eating bread.",
          zh: "我正在吃面包。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 食べる = IchidanVerb & { type: "ichidan"; stem: "食べ"; ending: "る" };

// 私 + は + パン + を + 食べて(て形) + います
type 私はパンを食べています = \`\${PhraseWithParticle<私, "は">}パンを\${ConjugateVerb<食べる, "て形">}います\`;
`,
        },
        {
          jp: "弟は本を読んでいます",
          reading: "おとうとはほんをよんでいます",
          en: "My little brother is reading a book.",
          zh: "弟弟正在看书。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 弟 = ProperNoun<"弟">;
type 読む = GodanVerb & { type: "godan"; stem: "読"; ending: "む" };

// 読む(む godan) → て形 = 読んで → 読んでいます
type 弟は本を読んでいます = \`\${PhraseWithParticle<弟, "は">}本を\${ConjugateVerb<読む, "て形">}います\`;
`,
        },
      ],
    },
    {
      id: "e11-2",
      titleEn: "Resultant state",
      titleZh: "结果状态",
      bodyEn:
        "With verbs describing an instantaneous change — like `結婚する` (to marry), `知る` (to come to know), `住む` (to take up residence) — `〜ています` does **not** mean the action is in progress. Instead it describes the **state that remains after** the change.\n\nSo `結婚しています` means “is married” (not “is in the middle of getting married”), and `知っています` means “know” (the state after coming to know). English often uses a simple present or present perfect here.",
      bodyZh:
        "对于表示瞬间变化的动词 —— 例如 `結婚する`(结婚)、`知る`(知道、得知)、`住む`(居住)—— `〜ています` **不**表示动作正在进行,而是表示变化发生**之后所留下的状态**。\n\n因此 `結婚しています` 意思是「(已经)结婚了/处于已婚状态」(而不是「正在举行婚礼」),`知っています` 意思是「知道」(得知之后的状态)。英语在这里常用一般现在时或现在完成时。",
      examples: [
        {
          jp: "姉は結婚しています",
          reading: "あねはけっこんしています",
          en: "My older sister is married.",
          zh: "姐姐已经结婚了。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 姉 = ProperNoun<"姉">;
type する = IrregularVerb & { type: "irregular"; dictionary: "する" };

// 結婚 + する → て形 = して → 結婚しています (resultant state: is married)
type 姉は結婚しています = \`\${PhraseWithParticle<姉, "は">}結婚\${ConjugateVerb<する, "て形">}います\`;
`,
        },
        {
          jp: "私はその人を知っています",
          reading: "わたしはそのひとをしっています",
          en: "I know that person.",
          zh: "我认识那个人。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 知る = GodanVerb & { type: "godan"; stem: "知"; ending: "る" };

// 知る(る godan) → て形 = 知って → 知っています (state: know)
type 私はその人を知っています = \`\${PhraseWithParticle<私, "は">}その人を\${ConjugateVerb<知る, "て形">}います\`;
`,
        },
        {
          jp: "兄は東京に住んでいます",
          reading: "あにはとうきょうにすんでいます",
          en: "My older brother lives in Tokyo.",
          zh: "哥哥住在东京。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 兄 = ProperNoun<"兄">;
type 東京 = ProperNoun<"東京">;
type 住む = GodanVerb & { type: "godan"; stem: "住"; ending: "む" };

// 住む → て形 = 住んで → 住んでいます (ongoing state: lives)
type 兄は東京に住んでいます = \`\${PhraseWithParticle<兄, "は">}\${PhraseWithParticle<東京, "に">}\${ConjugateVerb<住む, "て形">}います\`;
`,
        },
      ],
    },
    {
      id: "e11-3",
      titleEn: "Habitual / repeated action",
      titleZh: "习惯 / 反复的动作",
      bodyEn:
        "`〜ています` also expresses a habitual or repeated action over a span of time — what someone does regularly, such as a job or a daily routine. Time expressions like `毎日` (every day) make this reading clear.\n\nFor example `働いています` can mean “works (somewhere as a job)”, and `毎日勉強しています` means “studies every day”.",
      bodyZh:
        "`〜ています` 还可以表示在一段时间内习惯性、反复进行的动作 —— 某人经常做的事,比如工作或日常作息。`毎日`(每天)之类的时间词能让这一含义更明确。\n\n例如 `働いています` 可以表示「(在某处)工作」,`毎日勉強しています` 表示「每天都在学习」。",
      examples: [
        {
          jp: "父は銀行で働いています",
          reading: "ちちはぎんこうではたらいています",
          en: "My father works at a bank.",
          zh: "父亲在银行工作。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 父 = ProperNoun<"父">;
type 銀行 = ProperNoun<"銀行">;
type 働く = GodanVerb & { type: "godan"; stem: "働"; ending: "く" };

// 働く(く godan) → て形 = 働いて → 働いています
type 父は銀行で働いています = \`\${PhraseWithParticle<父, "は">}\${PhraseWithParticle<銀行, "で">}\${ConjugateVerb<働く, "て形">}います\`;
`,
        },
        {
          jp: "私は毎日日本語を勉強しています",
          reading: "わたしはまいにちにほんごをべんきょうしています",
          en: "I study Japanese every day.",
          zh: "我每天学习日语。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type する = IrregularVerb & { type: "irregular"; dictionary: "する" };

// 毎日 (every day) marks the habitual reading; 勉強 + して + います
type 私は毎日日本語を勉強しています = \`\${PhraseWithParticle<私, "は">}毎日日本語を勉強\${ConjugateVerb<する, "て形">}います\`;
`,
        },
      ],
    },
    {
      id: "e11-4",
      titleEn: "Negative and question forms",
      titleZh: "否定与疑问",
      bodyEn:
        "To negate, change `います` to `いません`: `〜ていません` (“is not doing / has not done”). To ask, add the question particle `か`: `〜ていますか`.\n\nThese behave just like the polite `ます/ません/ますか` you already know — only `います` changes; the te-form in front stays the same.",
      bodyZh:
        "要表示否定,把 `います` 换成 `いません`:`〜ていません`(「没在做 / 还没做」)。要提问,在末尾加疑问助词 `か`:`〜ていますか`。\n\n这与你已经学过的礼貌体 `ます/ません/ますか` 完全一样 —— 只有 `います` 发生变化,前面的 て形 保持不变。",
      examples: [
        {
          jp: "彼はまだ来ていません",
          reading: "かれはまだきていません",
          en: "He hasn't come yet.",
          zh: "他还没来。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 来る = IrregularVerb & { type: "irregular"; dictionary: "来る" };

// 来る → て形 = 来て → 来ていません (negative)
type 彼はまだ来ていません = \`\${PhraseWithParticle<彼, "は">}まだ\${ConjugateVerb<来る, "て形">}いません\`;
`,
        },
        {
          jp: "今何を書いていますか",
          reading: "いまなにをかいていますか",
          en: "What are you writing now?",
          zh: "你现在在写什么?",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 書く = GodanVerb & { type: "godan"; stem: "書"; ending: "く" };

// 書く → て形 = 書いて → 書いていますか (question)
type 今何を書いていますか = \`今何を\${ConjugateVerb<書く, "て形">}いますか\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
