import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e06",
  level: "elementary",
  order: 6,
  titleEn: "Particles で, へ, に",
  titleZh: "助词 で、へ、に",
  summaryEn:
    "Three small particles do most of the heavy lifting in Japanese sentences about doing things. `で` marks the means or the place where an action happens; `へ` and `に` mark the direction you move toward; and `に` also marks a point in time. This chapter sorts out who does what.",
  summaryZh:
    "三个小小的助词,承担了「做某事」类句子里的大部分工作。`で` 表示动作的手段或发生的场所;`へ` 和 `に` 表示移动的方向;`に` 还可以表示时间点。本章帮你理清它们各自的分工。",
  points: [
    {
      id: "e06-1",
      titleEn: "で — place of an action",
      titleZh: "で ——动作发生的场所",
      bodyEn:
        "When something *happens* somewhere, mark that place with `で`: `Place で Verb`. This is the location where an action takes place — eating, studying, working — as opposed to merely existing there.\n\nContrast `で` with `に`: `に` points to a static location of existence (covered later), while `で` is the stage on which an action is performed.",
      bodyZh:
        "当某个动作*发生*在某处时,用 `で` 标记那个场所:「场所 で 动词」。它表示动作进行的地点 —— 吃饭、学习、工作 —— 而不仅仅是「存在于此」。\n\n把 `で` 和 `に` 区分开来:`に` 指向静态的存在地点(后面会讲),而 `で` 是动作上演的舞台。",
      examples: [
        {
          jp: "図書館で勉強します",
          reading: "としょかんでべんきょうします",
          en: "I study at the library.",
          zh: "我在图书馆学习。",
          code: `import type { ProperNoun, PhraseWithParticle, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 図書館 = ProperNoun<"図書館">;
type する = IrregularVerb & { dictionary: "する" };

// 図書館 + で (place of action) + 勉強 + します
type 図書館で勉強します = \`\${PhraseWithParticle<図書館, "で">}勉強\${ConjugateVerb<する, "ます形">}ます\`;
`,
        },
        {
          jp: "レストランで食べます",
          reading: "レストランでたべます",
          en: "I eat at the restaurant.",
          zh: "我在餐厅吃饭。",
          code: `import type { ProperNoun, PhraseWithParticle, IchidanVerb, ConjugateVerb } from "typed-japanese";

type レストラン = ProperNoun<"レストラン">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

type レストランで食べます = \`\${PhraseWithParticle<レストラン, "で">}\${ConjugateVerb<食べる, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "e06-2",
      titleEn: "で — means or method",
      titleZh: "で ——手段或方法",
      bodyEn:
        "The same particle `で` also marks the *means* by which you do something — a tool, a vehicle, a language: `Means で Verb`. English reaches for several prepositions here (“by”, “with”, “in”), but Japanese uses one `で`.\n\nSo `バスで` is “by bus”, `はしで` is “with chopsticks”, and `日本語で` is “in Japanese”.",
      bodyZh:
        "同一个助词 `で` 也用来标记做某事所凭借的*手段* —— 工具、交通方式、语言:「手段 で 动词」。英语在这里要用好几个介词(by、with、in),而日语只用一个 `で`。\n\n所以 `バスで` 是「坐公交」,`はしで` 是「用筷子」,`日本語で` 是「用日语」。",
      examples: [
        {
          jp: "バスで行きます",
          reading: "バスでいきます",
          en: "I go by bus.",
          zh: "我坐公交去。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type バス = ProperNoun<"バス">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// バス + で (means) + 行きます
type バスで行きます = \`\${PhraseWithParticle<バス, "で">}\${ConjugateVerb<行く, "ます形">}ます\`;
`,
        },
        {
          jp: "日本語で話します",
          reading: "にほんごではなします",
          en: "I speak in Japanese.",
          zh: "我用日语说。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 日本語 = ProperNoun<"日本語">;
type 話す = GodanVerb & { stem: "話"; ending: "す" };

type 日本語で話します = \`\${PhraseWithParticle<日本語, "で">}\${ConjugateVerb<話す, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "e06-3",
      titleEn: "へ / に — direction of movement",
      titleZh: "へ / に ——移动的方向",
      bodyEn:
        "With verbs of motion (`行く` go, `来る` come, `帰る` return), the destination takes `へ` or `に`: `Destination へ/に Verb`. Both are correct and largely interchangeable here.\n\n`へ` (pronounced *e*) stresses the *direction* of travel; `に` stresses the *goal* you arrive at. In everyday speech `に` is the more common choice, but `へ` feels a touch more elegant.",
      bodyZh:
        "和移动类动词(`行く` 去、`来る` 来、`帰る` 回)搭配时,目的地用 `へ` 或 `に`:「目的地 へ/に 动词」。两者都正确,在这里基本可以互换。\n\n`へ`(读作 *e*)强调行进的*方向*;`に` 强调到达的*目标*。日常口语里 `に` 更常用,而 `へ` 显得稍微文雅一些。",
      examples: [
        {
          jp: "学校へ行きます",
          reading: "がっこうへいきます",
          en: "I go to school.",
          zh: "我去学校。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 学校 = ProperNoun<"学校">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 学校 + へ (direction) + 行きます
type 学校へ行きます = \`\${PhraseWithParticle<学校, "へ">}\${ConjugateVerb<行く, "ます形">}ます\`;
`,
        },
        {
          jp: "家に帰ります",
          reading: "いえにかえります",
          en: "I return home.",
          zh: "我回家。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 家 = ProperNoun<"家">;
type 帰る = GodanVerb & { stem: "帰"; ending: "る" };

// 家 + に (destination) + 帰ります
type 家に帰ります = \`\${PhraseWithParticle<家, "に">}\${ConjugateVerb<帰る, "ます形">}ます\`;
`,
        },
        {
          jp: "日本へ来ます",
          reading: "にほんへきます",
          en: "I come to Japan.",
          zh: "我来日本。",
          code: `import type { ProperNoun, PhraseWithParticle, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 日本 = ProperNoun<"日本">;
type 来る = IrregularVerb & { dictionary: "来る" };

// 来る の ます形 → 来 (then append ます)
type 日本へ来ます = \`\${PhraseWithParticle<日本, "へ">}\${ConjugateVerb<来る, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "e06-4",
      titleEn: "に — point in time",
      titleZh: "に ——时间点",
      bodyEn:
        "`に` also pins an action to a *specific point in time*: `Time に Verb`. Use it with clock times, days of the week, dates, and months — anything you could number.\n\nNote the asymmetry: relative time words like 今日 (today) or 明日 (tomorrow) take **no** particle, while a clock time such as 7時 (7 o'clock) **needs** `に`. So you say `7時に` but plain `明日`.",
      bodyZh:
        "`に` 还能把动作钉在一个*具体的时间点*上:「时间 に 动词」。它用于钟点、星期、日期、月份 —— 凡是能用数字表示的时间。\n\n注意这种不对称:像 今日(今天)、明日(明天)这类相对时间词**不加**助词,而 7時(七点)这样的钟点**必须**加 `に`。所以说 `7時に`,却只说 `明日`。",
      examples: [
        {
          jp: "7時に起きます",
          reading: "しちじにおきます",
          en: "I get up at seven o'clock.",
          zh: "我七点起床。",
          code: `import type { ProperNoun, PhraseWithParticle, IchidanVerb, ConjugateVerb } from "typed-japanese";

type 七時 = ProperNoun<"7時">;
type 起きる = IchidanVerb & { stem: "起き"; ending: "る" };

// 7時 + に (point in time) + 起きます
type 七時に起きます = \`\${PhraseWithParticle<七時, "に">}\${ConjugateVerb<起きる, "ます形">}ます\`;
`,
        },
        {
          jp: "日曜日に休みます",
          reading: "にちようびにやすみます",
          en: "I rest on Sunday.",
          zh: "我星期天休息。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 日曜日 = ProperNoun<"日曜日">;
type 休む = GodanVerb & { stem: "休"; ending: "む" };

type 日曜日に休みます = \`\${PhraseWithParticle<日曜日, "に">}\${ConjugateVerb<休む, "ます形">}ます\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
