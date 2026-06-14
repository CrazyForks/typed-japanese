import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e05",
  level: "elementary",
  order: 5,
  titleEn: "Verbs: ます-form & を",
  titleZh: "动词ます形与宾语を",
  summaryEn:
    "This chapter introduces the polite verb form `〜ます`, used for present and future actions, its negative `〜ません`, and the object particle `を` that marks the thing a verb acts on. Together they let you say sentences like “I drink coffee” or “I don't watch TV”.",
  summaryZh:
    "本章介绍礼貌体动词形式 `〜ます`(表示现在和将来的动作)、其否定形式 `〜ません`,以及标记动作对象的宾语助词 `を`。掌握它们后,你就能说出「我喝咖啡」「我不看电视」这样的句子。",
  points: [
    {
      id: "e05-1",
      titleEn: "The polite form 〜ます — present & future",
      titleZh: "礼貌体 〜ます ——现在与将来",
      bodyEn:
        "The dictionary form of a verb (e.g. `飲む`, to drink) is plain. The polite form replaces the dictionary ending with the `ます`-stem plus `ます`. For *godan* verbs the final sound shifts to the *i*-row: `飲む` → `飲み` → `飲みます`. For *ichidan* verbs you simply drop `る`: `食べる` → `食べ` → `食べます`.\n\nThe `〜ます` form covers both the present (“I drink”) and the future/habitual (“I will drink”, “I drink every day”). Japanese makes no separate future tense — context decides.",
      bodyZh:
        "动词的辞书形(如 `飲む`,喝)是简体。礼貌体把辞书形词尾换成「ます形词干 + ます」。五段动词词尾要变到「い段」:`飲む` → `飲み` → `飲みます`。一段动词只需去掉 `る`:`食べる` → `食べ` → `食べます`。\n\n`〜ます` 形既表示现在(「我喝」),也表示将来或习惯(「我会喝」「我每天喝」)。日语没有独立的将来时,由上下文决定时态。",
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
type ご飯 = ProperNoun<"ご飯">;
type 食べる = IchidanVerb & { type: "ichidan"; stem: "食べ"; ending: "る" };

// 私 + は + 毎日 + ご飯 + を + 食べ(ます形) + ます
type 私は毎日ご飯を食べます = \`\${PhraseWithParticle<私, "は">}毎日\${PhraseWithParticle<ご飯, "を">}\${ConjugateVerb<食べる, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "e05-2",
      titleEn: "The object particle を",
      titleZh: "宾语助词 を",
      bodyEn:
        "The particle `を` (pronounced *o*) marks the direct object — the thing the action is done to. The pattern is `Object を Verb`: `本を読みます` (read a book), `テレビを見ます` (watch TV).\n\nNote that `を` is written with its own special kana but always read as *o*. It attaches directly after the object noun and is immediately followed (eventually) by the verb.",
      bodyZh:
        "助词 `を`(读作 *o*)用来标记直接宾语 —— 即动作所及的对象。句型为「宾语 を 动词」:`本を読みます`(读书)、`テレビを見ます`(看电视)。\n\n注意 `を` 用专门的假名书写,但一律读作 *o*。它紧跟在宾语名词之后,后面(最终)接动词。",
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
        "To make a polite verb negative, replace `ます` with `ません`: `飲みます` → `飲みません` (do not / will not drink). The `ます`-stem stays the same; only the ending changes.\n\nLike the affirmative, `〜ません` covers both present and future: `今日はお酒を飲みません` means “I won't drink alcohol today.”",
      bodyZh:
        "把礼貌体动词变否定,只需将 `ます` 换成 `ません`:`飲みます` → `飲みません`(不喝 / 不会喝)。「ます形词干」不变,只改词尾。\n\n与肯定形一样,`〜ません` 同时涵盖现在与将来:`今日はお酒を飲みません` 意为「我今天不喝酒」。",
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
        "To turn a polite verb sentence into a yes/no question, add the question particle `か` after `ます`: `飲みますか` (“Do you drink?”). Word order does not change.\n\nThe same works for the negative — `食べませんか` can be a genuine question (“Won't you eat?”) or a soft invitation (“Why don't we eat?”).",
      bodyZh:
        "要把礼貌体动词句变成是非疑问句,在 `ます` 后加疑问助词 `か`:`飲みますか`(「你喝吗?」)。语序不变。\n\n否定形同理 —— `食べませんか` 既可以是真正的疑问(「你不吃吗?」),也可以是委婉的邀请(「要不要一起吃?」)。",
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

type ご飯 = ProperNoun<"ご飯">;
type 食べる = IchidanVerb & { type: "ichidan"; stem: "食べ"; ending: "る" };

// 一緒に + ご飯 + を + 食べ(ます形) + ませんか
type 一緒にご飯を食べませんか = \`一緒に\${PhraseWithParticle<ご飯, "を">}\${ConjugateVerb<食べる, "ます形">}ませんか\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
