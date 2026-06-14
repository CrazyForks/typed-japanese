import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e18",
  level: "elementary",
  order: 18,
  titleEn: "Potential form",
  titleZh: "可能形",
  summaryEn:
    "The potential form (可能形) expresses ability or possibility — “can do / be able to do”. This chapter covers how godan verbs change their final う-row sound to the corresponding え-row sound plus る, how ichidan verbs take 〜られる, and the special verb する → できる. You'll also see that the object of a potential verb is often marked with が rather than を.",
  summaryZh:
    "可能形(かのうけい)表示能力或可能性,即「能、会、可以做某事」。本章介绍五段动词如何把词尾的「う段」音变为对应的「え段」音再加る、一段动词如何接「〜られる」,以及特殊动词 する → できる。同时还会看到:可能动词的宾语常用助词 が 而非 を 来提示。",
  points: [
    {
      id: "e18-1",
      titleEn: "Godan verbs: う-row → え-row + る",
      titleZh: "五段动词:う段 → え段 + る",
      bodyEn:
        "For godan (五段) verbs, the potential form changes the final syllable from the う-row to the matching え-row sound, then adds `る`. So `話す` (to speak) → `話せる` (can speak), `飲む` (to drink) → `飲める` (can drink), `行く` (to go) → `行ける` (can go).\n\nA potential verb behaves like an ichidan verb afterwards: `話せる` → `話せます`, `話せない`, and so on. The thing one is able to do is usually marked with `が` instead of `を`.",
      bodyZh:
        "五段动词的可能形,把词尾从「う段」变为对应的「え段」音,再加 `る`。例如 `話す`(说)→ `話せる`(会说)、`飲む`(喝)→ `飲める`(能喝)、`行く`(去)→ `行ける`(能去)。\n\n变成可能形之后,该动词就像一段动词一样活用:`話せる` → `話せます`、`話せない` 等。能做的对象通常用 `が` 而不是 `を` 来提示。",
      examples: [
        {
          jp: "私は日本語が話せる",
          reading: "わたしはにほんごがはなせる",
          en: "I can speak Japanese.",
          zh: "我会说日语。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 日本語 = ProperNoun<"日本語">;
type 話す = GodanVerb & { stem: "話"; ending: "す" };

// 可能形 of 話す returns 話せ → append る = 話せる
type 私は日本語が話せる = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<日本語, "が">}\${ConjugateVerb<話す, "可能形">}る\`;
`,
        },
        {
          jp: "お酒が飲めますか",
          reading: "おさけがのめますか",
          en: "Can you drink alcohol?",
          zh: "你能喝酒吗?",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type お酒 = ProperNoun<"お酒">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 飲める → polite question: 飲めますか
type お酒が飲めますか = \`\${PhraseWithParticle<お酒, "が">}\${ConjugateVerb<飲む, "可能形">}ますか\`;
`,
        },
        {
          jp: "明日は行けない",
          reading: "あしたはいけない",
          en: "I can't go tomorrow.",
          zh: "明天我去不了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 明日 = ProperNoun<"明日">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 行ける → negative: 行けない
type 明日は行けない = \`\${PhraseWithParticle<明日, "は">}\${ConjugateVerb<行く, "可能形">}ない\`;
`,
        },
      ],
    },
    {
      id: "e18-2",
      titleEn: "Ichidan verbs: 〜られる",
      titleZh: "一段动词:〜られる",
      bodyEn:
        "For ichidan (一段) verbs, drop the final `る` and add `られる`. So `食べる` (to eat) → `食べられる` (can eat), `見る` (to see) → `見られる` (can see).\n\nIn casual modern speech many speakers drop the `ら` and say `食べれる`, `見れる` — this is the so-called ら抜き言葉 (“ra-dropped speech”). It is common but still considered non-standard in formal writing, so we use the full `られる` here.",
      bodyZh:
        "一段动词去掉词尾的 `る`,加上 `られる`。例如 `食べる`(吃)→ `食べられる`(能吃)、`見る`(看)→ `見られる`(能看)。\n\n现代口语中很多人会省去 `ら`,说成 `食べれる`、`見れる` —— 这就是所谓的「ら抜き言葉」(去ら说法)。它很常见,但在正式书面语中仍被视为不规范,所以这里使用完整的 `られる`。",
      examples: [
        {
          jp: "私は刺身が食べられる",
          reading: "わたしはさしみがたべられる",
          en: "I can eat sashimi.",
          zh: "我能吃生鱼片。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 刺身 = ProperNoun<"刺身">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// 可能形 of 食べる returns 食べられ → append る = 食べられる
type 私は刺身が食べられる = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<刺身, "が">}\${ConjugateVerb<食べる, "可能形">}る\`;
`,
        },
        {
          jp: "ここから富士山が見られる",
          reading: "ここからふじさんがみられる",
          en: "You can see Mt. Fuji from here.",
          zh: "从这里能看到富士山。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type ここ = ProperNoun<"ここ">;
type 富士山 = ProperNoun<"富士山">;
type 見る = IchidanVerb & { stem: "見"; ending: "る" };

// 見る → 見られる
type ここから富士山が見られる = \`\${PhraseWithParticle<ここ, "から">}\${PhraseWithParticle<富士山, "が">}\${ConjugateVerb<見る, "可能形">}る\`;
`,
        },
      ],
    },
    {
      id: "e18-3",
      titleEn: "Irregular: する → できる, 来る → 来られる",
      titleZh: "不规则:する → できる、来る → 来られる",
      bodyEn:
        "The two irregular verbs have memorable potential forms. `する` (to do) becomes `できる` (can do) — this is why `日本語ができる` means “can do / be good at Japanese”. Compound verbs follow suit: `勉強する` → `勉強できる`.\n\n`来る` (to come) becomes `来られる` (can come), patterning like an ichidan potential.",
      bodyZh:
        "两个不规则动词的可能形需要记住。`する`(做)变成 `できる`(会做)—— 这正是 `日本語ができる` 表示「会日语、擅长日语」的原因。复合动词同理:`勉強する` → `勉強できる`。\n\n`来る`(来)变成 `来られる`(能来),活用方式与一段动词的可能形相同。",
      examples: [
        {
          jp: "私はピアノができる",
          reading: "わたしはぴあのができる",
          en: "I can play the piano.",
          zh: "我会弹钢琴。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type ピアノ = ProperNoun<"ピアノ">;
type する = IrregularVerb & { dictionary: "する" };

// 可能形 of する returns でき → append る = できる
type 私はピアノができる = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<ピアノ, "が">}\${ConjugateVerb<する, "可能形">}る\`;
`,
        },
        {
          jp: "明日来られますか",
          reading: "あしたこられますか",
          en: "Can you come tomorrow?",
          zh: "你明天能来吗?",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 明日 = ProperNoun<"明日">;
type 来る = IrregularVerb & { dictionary: "来る" };

// 可能形 of 来る returns 来られ → polite question: 来られますか
type 明日来られますか = \`\${明日}\${ConjugateVerb<来る, "可能形">}ますか\`;
`,
        },
      ],
    },
    {
      id: "e18-4",
      titleEn: "Marking the object with が",
      titleZh: "用 が 提示宾语",
      bodyEn:
        "With a normal action verb the object takes `を` (`本を読む` — read a book). But with the potential form, the object is typically marked with `が`, because the sentence now describes a state of ability rather than a direct action: `本が読める` — “(I) can read a book”. Both `を` and `が` are heard in casual speech, but `が` is the textbook standard.",
      bodyZh:
        "普通的动作动词用 `を` 提示宾语(`本を読む` —— 读书)。但用可能形时,宾语通常用 `が` 提示,因为句子描述的是「能不能做」这种状态,而非直接的动作:`本が読める` ——「能读书」。口语中 `を` 和 `が` 都能听到,但 `が` 是教科书里的标准用法。",
      examples: [
        {
          jp: "漢字が読める",
          reading: "かんじがよめる",
          en: "I can read kanji.",
          zh: "我能读汉字。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 漢字 = ProperNoun<"漢字">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };

// object marked with が + 読める
type 漢字が読める = \`\${PhraseWithParticle<漢字, "が">}\${ConjugateVerb<読む, "可能形">}る\`;
`,
        },
        {
          jp: "私は車が運転できる",
          reading: "わたしはくるまがうんてんできる",
          en: "I can drive a car.",
          zh: "我会开车。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 車 = ProperNoun<"車">;
type 運転する = IrregularVerb & { dictionary: "する" };

// 運転する → 運転できる; here we spell 運転 then できる via 可能形 + る
type 私は車が運転できる = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<車, "が">}運転\${ConjugateVerb<運転する, "可能形">}る\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
