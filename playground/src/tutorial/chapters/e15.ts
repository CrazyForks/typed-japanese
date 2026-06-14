import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e15",
  level: "elementary",
  order: 15,
  titleEn: "Desire: 〜たい / 〜がほしい",
  titleZh: "愿望：〜たい／〜がほしい",
  summaryEn:
    "How to say what you want. Attach `〜たい` to a verb's ます-stem to say “want to (do)”, use `〜がほしい` to say you want a thing, and negate `〜たい` as `〜たくない` to say you don't want to do something.",
  summaryZh:
    "如何表达自己的愿望。在动词的「ます形」词干后接 `〜たい` 表示「想做(某事)」,用 `〜がほしい` 表示「想要(某物)」,并把 `〜たい` 否定为 `〜たくない` 表示「不想做(某事)」。",
  points: [
    {
      id: "e15-1",
      titleEn: "〜たい — “want to do”",
      titleZh: "〜たい ——「想做」",
      bodyEn:
        "To express the desire to perform an action, take the `ます形` stem of a verb and add `たい`. For example `飲む` → `飲み` (ます-stem) → `飲みたい` (“want to drink”).\n\nThe object of a `〜たい` sentence is often marked with `が` instead of `を` (e.g. `水が飲みたい`), though `を` is also acceptable. `〜たい` conjugates like an *い*-adjective, so the whole phrase behaves like one. It describes the speaker's own desire; for other people you normally add `〜たがっている`.",
      bodyZh:
        "要表达想做某个动作,把动词的「ます形」词干加上 `たい`。例如 `飲む` → `飲み`(ます词干)→ `飲みたい`(「想喝」)。\n\n`〜たい` 句子的宾语常用 `が` 而非 `を` 来标记(如 `水が飲みたい`),不过用 `を` 也可以。`〜たい` 像 *い* 形容词一样活用,所以整个短语的变化规律和形容词相同。它表达说话人自身的愿望;表达他人愿望时一般用 `〜たがっている`。",
      examples: [
        {
          jp: "私は水が飲みたい",
          reading: "わたしはみずがのみたい",
          en: "I want to drink water.",
          zh: "我想喝水。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 水 = ProperNoun<"水">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 私 + は + 水 + が + 飲み(ます形) + たい
type 私は水が飲みたい = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<水, "が">}\${ConjugateVerb<飲む, "ます形">}たい\`;
`,
        },
        {
          jp: "寿司が食べたい",
          reading: "すしがたべたい",
          en: "I want to eat sushi.",
          zh: "我想吃寿司。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 寿司 = ProperNoun<"寿司">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// 寿司 + が + 食べ(ます形) + たい
type 寿司が食べたい = \`\${PhraseWithParticle<寿司, "が">}\${ConjugateVerb<食べる, "ます形">}たい\`;
`,
        },
        {
          jp: "日本へ行きたいです",
          reading: "にほんへいきたいです",
          en: "I want to go to Japan.",
          zh: "我想去日本。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 日本 = ProperNoun<"日本">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 日本 + へ + 行き(ます形) + たい + です (polite)
type 日本へ行きたいです = \`\${PhraseWithParticle<日本, "へ">}\${ConjugateVerb<行く, "ます形">}たいです\`;
`,
        },
      ],
    },
    {
      id: "e15-2",
      titleEn: "〜がほしい — “want a thing”",
      titleZh: "〜がほしい ——「想要某物」",
      bodyEn:
        "While `〜たい` expresses wanting to *do* something, `ほしい` expresses wanting to *have* a thing. The desired object is marked with `が`: `Noun が ほしい`.\n\n`ほしい` is itself an *い*-adjective, so add `です` for politeness (`ほしいです`). Like `〜たい`, it describes the speaker's own desire.",
      bodyZh:
        "`〜たい` 表达想「做」某事,而 `ほしい` 表达想「拥有」某物。所要的对象用 `が` 标记:「名词 が ほしい」。\n\n`ほしい` 本身是 *い* 形容词,所以加 `です` 即为礼貌体(`ほしいです`)。和 `〜たい` 一样,它表达说话人自身的愿望。",
      examples: [
        {
          jp: "私は車がほしい",
          reading: "わたしはくるまがほしい",
          en: "I want a car.",
          zh: "我想要一辆车。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 車 = ProperNoun<"車">;

// 私 + は + 車 + が + ほしい
type 私は車がほしい = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<車, "が">}ほしい\`;
`,
        },
        {
          jp: "新しいかばんがほしいです",
          reading: "あたらしいかばんがほしいです",
          en: "I want a new bag.",
          zh: "我想要一个新包。",
          code: `import type { ProperNoun, IAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 新しい = IAdjective & { stem: "新し"; ending: "い" };
type かばん = ProperNoun<"かばん">;

// 新しい(基本形) + かばん + が + ほしいです
type 新しいかばんがほしいです = \`\${ConjugateAdjective<新しい, "基本形">}\${PhraseWithParticle<かばん, "が">}ほしいです\`;
`,
        },
      ],
    },
    {
      id: "e15-3",
      titleEn: "Negative: 〜たくない",
      titleZh: "否定：〜たくない",
      bodyEn:
        "Because `〜たい` behaves like an *い*-adjective, you negate it the same way: drop the final `い` and add `くない`, giving `〜たくない` (“don't want to do”).\n\nFor example `飲みたい` → `飲みたくない` (“don't want to drink”). Add `です` for a polite negative: `〜たくないです` (or the more formal `〜たくありません`). The same pattern negates `ほしい` → `ほしくない` (“don't want it”).",
      bodyZh:
        "由于 `〜たい` 像 *い* 形容词一样活用,它的否定方式也相同:去掉词尾的 `い`,加上 `くない`,得到 `〜たくない`(「不想做」)。\n\n例如 `飲みたい` → `飲みたくない`(「不想喝」)。加 `です` 构成礼貌否定:`〜たくないです`(或更郑重的 `〜たくありません`)。同样的规则可把 `ほしい` 变成 `ほしくない`(「不想要」)。",
      examples: [
        {
          jp: "今日は働きたくない",
          reading: "きょうははたらきたくない",
          en: "I don't want to work today.",
          zh: "今天不想工作。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 今日 = ProperNoun<"今日">;
type 働く = GodanVerb & { stem: "働"; ending: "く" };

// 今日 + は + 働き(ます形) + たくない
type 今日は働きたくない = \`\${PhraseWithParticle<今日, "は">}\${ConjugateVerb<働く, "ます形">}たくない\`;
`,
        },
        {
          jp: "肉は食べたくないです",
          reading: "にくはたべたくないです",
          en: "I don't want to eat meat.",
          zh: "我不想吃肉。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 肉 = ProperNoun<"肉">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// 肉 + は + 食べ(ます形) + たくないです
type 肉は食べたくないです = \`\${PhraseWithParticle<肉, "は">}\${ConjugateVerb<食べる, "ます形">}たくないです\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
