import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e04",
  level: "elementary",
  order: 4,
  titleEn: "Numbers, time & counters",
  titleZh: "数字、时间与量词",
  summaryEn:
    "Everyday Japanese runs on numbers: prices in 〜円, clock time in 〜時〜分, and counting things with the right counter (〜つ, 〜人, 〜枚 …). You'll also learn から〜まで, the “from … to …” frame used for both place and time.",
  summaryZh:
    "日常日语离不开数字:用「〜円」说价格,用「〜時〜分」说时间,用合适的量词(「〜つ」「〜人」「〜枚」……)数东西。本章还会学到「から〜まで」——表示「从……到……」,既用于地点也用于时间。",
  points: [
    {
      id: "e04-1",
      titleEn: "Prices: 〜円 (yen)",
      titleZh: "价格:〜円(日元)",
      bodyEn:
        "Money is counted with the counter `円` (*en*, yen), placed directly after the number: `300円` = three hundred yen. To say how much something is, use the noun sentence you already know: `Topic は <price>円 です`.\n\nThe question word for price is `いくら` (“how much”): `これはいくらですか` — “How much is this?”.",
      bodyZh:
        "金额用量词 `円`(*en*,日元)来数,直接跟在数字后面:`300円` 就是三百日元。要说某物多少钱,用之前学过的名词句:「主题 は <价格>円 です」。\n\n表示价格的疑问词是 `いくら`(「多少钱」):`これはいくらですか` ——「这个多少钱?」。",
      examples: [
        {
          jp: "これは300円です",
          reading: "これはさんびゃくえんです",
          en: "This is 300 yen.",
          zh: "这个是 300 日元。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type これ = ProperNoun<"これ">;
type 値段 = ProperNoun<"300円">;

// これ + は (topic) + 300円 + です
type これは300円です = \`\${PhraseWithParticle<これ, "は">}\${値段}です\`;
`,
        },
        {
          jp: "この本は1500円です",
          reading: "このほんはせんごひゃくえんです",
          en: "This book is 1500 yen.",
          zh: "这本书是 1500 日元。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type この本 = ProperNoun<"この本">;
type 値段 = ProperNoun<"1500円">;

type この本は1500円です = \`\${PhraseWithParticle<この本, "は">}\${値段}です\`;
`,
        },
      ],
    },
    {
      id: "e04-2",
      titleEn: "Telling time: 〜時〜分",
      titleZh: "说时间:〜時〜分",
      bodyEn:
        "The hour is counted with `時` (*ji*) and the minute with `分` (*fun/pun*): `7時30分` = 7:30. A time-of-day word like `午前` (a.m.) or `午後` (p.m.) goes in front: `午後3時` = 3 p.m.\n\nTo ask the time, use `何時` (“what time”): `今何時ですか` — “What time is it now?”.",
      bodyZh:
        "小时用 `時`(*ji*)来数,分钟用 `分`(*fun/pun*)来数:`7時30分` 就是 7:30。表示时段的词如 `午前`(上午)、`午後`(下午)放在前面:`午後3時` 就是下午 3 点。\n\n询问时间用 `何時`(「几点」):`今何時ですか` ——「现在几点?」。",
      examples: [
        {
          jp: "今7時30分です",
          reading: "いましちじさんじゅっぷんです",
          en: "It is 7:30 now.",
          zh: "现在是 7 点 30 分。",
          code: `import type { ProperNoun } from "typed-japanese";

type 今 = ProperNoun<"今">;
type 時刻 = ProperNoun<"7時30分">;

// 今 (now) + 7時30分 + です
type 今7時30分です = \`\${今}\${時刻}です\`;
`,
        },
        {
          jp: "会議は午後3時からです",
          reading: "かいぎはごごさんじからです",
          en: "The meeting is from 3 p.m.",
          zh: "会议从下午 3 点开始。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 会議 = ProperNoun<"会議">;
type 午後3時 = ProperNoun<"午後3時">;

// 会議 + は + 午後3時 + から + です
type 会議は午後3時からです = \`\${PhraseWithParticle<会議, "は">}\${PhraseWithParticle<午後3時, "から">}です\`;
`,
        },
      ],
    },
    {
      id: "e04-3",
      titleEn: "Counters: 〜つ, 〜人, 〜枚",
      titleZh: "量词:〜つ、〜人、〜枚",
      bodyEn:
        "Japanese counts almost everything with a *counter* attached to the number. The all-purpose native counter is `〜つ` (for one through nine: 一つ, 二つ …). People use `〜人` (*nin*), and flat objects (paper, tickets, shirts) use `〜枚` (*mai*).\n\nThe counter phrase usually appears right before the verb or as a predicate: `りんごを三つ` (three apples), `学生が二人` (two students).",
      bodyZh:
        "日语数几乎所有东西都要给数字加上*量词*。最通用的固有量词是 `〜つ`(一到九:一つ、二つ……)。数人用 `〜人`(*nin*),数扁平物(纸、票、衬衫)用 `〜枚`(*mai*)。\n\n量词短语通常紧跟在动词前,或作谓语:`りんごを三つ`(三个苹果)、`学生が二人`(两名学生)。",
      examples: [
        {
          jp: "りんごを三つください",
          reading: "りんごをみっつください",
          en: "Three apples, please.",
          zh: "请给我三个苹果。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type りんご = ProperNoun<"りんご">;
type 三つ = ProperNoun<"三つ">;

// りんご + を (object) + 三つ + ください
type りんごを三つください = \`\${PhraseWithParticle<りんご, "を">}\${三つ}ください\`;
`,
        },
        {
          jp: "学生は二人です",
          reading: "がくせいはふたりです",
          en: "There are two students.",
          zh: "学生有两人。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 学生 = ProperNoun<"学生">;
type 二人 = ProperNoun<"二人">;

type 学生は二人です = \`\${PhraseWithParticle<学生, "は">}\${二人}です\`;
`,
        },
        {
          jp: "切符を二枚買います",
          reading: "きっぷをにまいかいます",
          en: "I will buy two tickets.",
          zh: "我要买两张票。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 切符 = ProperNoun<"切符">;
type 二枚 = ProperNoun<"二枚">;
type 買う = GodanVerb & { stem: "買"; ending: "う" };

// 切符 + を + 二枚 + 買い (ます形) + ます
type 切符を二枚買います = \`\${PhraseWithParticle<切符, "を">}\${二枚}\${ConjugateVerb<買う, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "e04-4",
      titleEn: "から〜まで — “from … to …”",
      titleZh: "から〜まで ——「从……到……」",
      bodyEn:
        "`から` means “from” and `まで` means “to / until”. Together they mark a range — of place or of time. Each particle attaches directly to the noun it follows: `東京から大阪まで` (from Tokyo to Osaka), `9時から5時まで` (from 9 to 5).\n\nEither half can stand alone: `3時から` (from 3 o'clock), `駅まで` (as far as the station).",
      bodyZh:
        "`から` 表示「从」,`まで` 表示「到 / 直到」。两者搭配标示一个范围——地点或时间。每个助词都直接接在它后面的名词上:`東京から大阪まで`(从东京到大阪)、`9時から5時まで`(从 9 点到 5 点)。\n\n两半也可单独使用:`3時から`(从 3 点起)、`駅まで`(到车站为止)。",
      examples: [
        {
          jp: "東京から大阪まで",
          reading: "とうきょうからおおさかまで",
          en: "From Tokyo to Osaka.",
          zh: "从东京到大阪。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 東京 = ProperNoun<"東京">;
type 大阪 = ProperNoun<"大阪">;

// 東京 + から + 大阪 + まで
type 東京から大阪まで = \`\${PhraseWithParticle<東京, "から">}\${PhraseWithParticle<大阪, "まで">}\`;
`,
        },
        {
          jp: "店は9時から5時までです",
          reading: "みせはくじからごじまでです",
          en: "The shop is open from 9 to 5.",
          zh: "店从 9 点开到 5 点。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 店 = ProperNoun<"店">;
type 九時 = ProperNoun<"9時">;
type 五時 = ProperNoun<"5時">;

// 店 + は + 9時 + から + 5時 + まで + です
type 店は9時から5時までです = \`\${PhraseWithParticle<店, "は">}\${PhraseWithParticle<九時, "から">}\${PhraseWithParticle<五時, "まで">}です\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
