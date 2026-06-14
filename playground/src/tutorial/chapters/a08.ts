import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a08",
  level: "advanced",
  order: 8,
  titleEn: "〜ことなく / 〜抜きで — without doing; leaving out",
  titleZh: "〜ことなく／〜抜きで ——「不…而…」「省去…」",
  summaryEn:
    "This chapter gathers the ways Japanese says an action happens *without* something else happening. `〜ことなく` is a formal “without ever doing”; `〜ずに` is its compact, somewhat literary cousin “without doing (and instead…)”; and `〜抜きで` means “leaving out / excluding” a thing. Together they let you describe what is skipped, omitted, or never done.",
  summaryZh:
    "本章汇集日语中表达「在不发生某动作的情况下做另一件事」的几种说法。`〜ことなく` 是郑重的「(始终)不…而…」;`〜ずに` 是它紧凑、略带书面色彩的近义形式「不…(就/而)…」;`〜抜きで` 则表示「省去/排除」某物。它们共同用来描述被跳过、被省略或始终未做的事。",
  points: [
    {
      id: "a08-1",
      titleEn: "〜ことなく — without ever doing",
      titleZh: "〜ことなく ——「(始终)不…而…」",
      bodyEn:
        "Attach `ことなく` to a verb's **dictionary form** to say an action is carried out *without* another action ever interrupting it: `休むことなく` = “without (ever) resting”. It is formal and written, often paired with continuous or sustained actions.\n\nStructurally it is `Verb(辞書形) + ことなく + main clause`. The nuance is stronger and more absolute than the plain negative — “not even once”, “the whole time without”.",
      bodyZh:
        "把 `ことなく` 接在动词的 **辞书形(原形)** 后,表示在「完全不做某动作」的状态下进行另一动作:`休むことなく` =「(一直)不休息地」。这是郑重、书面的说法,常与持续性动作搭配。\n\n结构为「动词(辞书形)+ ことなく + 主句」。语气比普通否定更强、更绝对 ——「一次也不」「自始至终都没有」。",
      examples: [
        {
          jp: "彼は休むことなく働く",
          reading: "かれはやすむことなくはたらく",
          en: "He works without ever resting.",
          zh: "他不休息地工作。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 休む = GodanVerb & { stem: "休"; ending: "む" };
type 働く = GodanVerb & { stem: "働"; ending: "く" };

// 彼 + は + 休む(辞書形) + ことなく + 働く(辞書形)
type 彼は休むことなく働く = \`\${PhraseWithParticle<彼, "は">}\${ConjugateVerb<休む, "辞書形">}ことなく\${ConjugateVerb<働く, "辞書形">}\`;
`,
        },
        {
          jp: "彼女はあきらめることなく続けた",
          reading: "かのじょはあきらめることなくつづけた",
          en: "She kept going without giving up.",
          zh: "她毫不放弃地坚持了下去。",
          code: `import type { ProperNoun, IchidanVerb, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 彼女 = ProperNoun<"彼女">;
type あきらめる = IchidanVerb & { stem: "あきらめ"; ending: "る" };
type 続く = GodanVerb & { stem: "続"; ending: "く" };

// 彼女 + は + あきらめる(辞書形) + ことなく + 続け(可能形は不要) → 続けた は 続ける の た形だが、ここでは literal で続けた
type 彼女はあきらめることなく続けた = \`\${PhraseWithParticle<彼女, "は">}\${ConjugateVerb<あきらめる, "辞書形">}ことなく続けた\`;
`,
        },
      ],
    },
    {
      id: "a08-2",
      titleEn: "〜ずに — without doing (literary)",
      titleZh: "〜ずに ——「不…(就/而)…」(书面)",
      bodyEn:
        "`〜ずに` is a compact, literary equivalent of `〜ないで` (“without doing”). Take a verb's **negative (ない) stem** and add `ずに`: `言う → 言わ → 言わずに` (“without saying”), `食べる → 食べ → 食べずに` (“without eating”).\n\nThe one irregular you must memorise is `する → せずに` (not ✗しずに). Use `〜ずに` to mark an omitted action: you did the main thing *instead of* / *while skipping* this one.",
      bodyZh:
        "`〜ずに` 是 `〜ないで`(「不…而…」)的紧凑书面形式。取动词的 **否定(ない)词干** 加 `ずに`:`言う → 言わ → 言わずに`(「不说」)、`食べる → 食べ → 食べずに`(「不吃」)。\n\n唯一必须记住的特例是 `する → せずに`(不是 ✗しずに)。用 `〜ずに` 标示被省去的动作:你做主句的事,是「没做/跳过」这件事的情况下进行的。",
      examples: [
        {
          jp: "何も言わずに帰った",
          reading: "なにもいわずにかえった",
          en: "He went home without saying anything.",
          zh: "他什么也没说就回去了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 何 = ProperNoun<"何">;
type 言う = GodanVerb & { stem: "言"; ending: "う" };

// 何 + も + 言わ(ない形) + ずに + 帰った(literal)
type 何も言わずに帰った = \`\${PhraseWithParticle<何, "も">}\${ConjugateVerb<言う, "ない形">}ずに帰った\`;
`,
        },
        {
          jp: "朝ご飯を食べずに学校へ行く",
          reading: "あさごはんをたべずにがっこうへいく",
          en: "I go to school without eating breakfast.",
          zh: "我不吃早饭就去学校。",
          code: `import type { ProperNoun, IchidanVerb, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 朝ご飯 = ProperNoun<"朝ご飯">;
type 学校 = ProperNoun<"学校">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 朝ご飯 + を + 食べ(ない形) + ずに + 学校 + へ + 行く(辞書形)
type 朝ご飯を食べずに学校へ行く = \`\${PhraseWithParticle<朝ご飯, "を">}\${ConjugateVerb<食べる, "ない形">}ずに\${PhraseWithParticle<学校, "へ">}\${ConjugateVerb<行く, "辞書形">}\`;
`,
        },
        {
          jp: "予約せずに来た",
          reading: "よやくせずにきた",
          en: "I came without making a reservation.",
          zh: "我没预约就来了。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 予約 = ProperNoun<"予約">;

// する is irregular here: する → せずに (NOT しずに). Spelled as a literal.
type 予約せずに来た = \`\${予約}せずに来た\`;
`,
        },
      ],
    },
    {
      id: "a08-3",
      titleEn: "〜抜きで — leaving out / excluding",
      titleZh: "〜抜きで ——「省去…」「不要…」",
      bodyEn:
        "`抜き` comes from the verb `抜く` (“to pull out, remove”). Attach `抜きで` to a **noun** to mean “leaving out / without / minus” that thing: `わさび抜きで` = “without wasabi”, `冗談抜きで` = “joking aside”.\n\nThe shape is `Noun + 抜きで + main clause`. Whereas `〜ずに` removes an *action*, `〜抜きで` removes a *thing or ingredient* — an item that is normally included but here deliberately omitted.",
      bodyZh:
        "`抜き` 来自动词 `抜く`(「抽出、去掉」)。把 `抜きで` 接在 **名词** 后,表示「省去/不加/排除」该事物:`わさび抜きで` =「不要芥末」,`冗談抜きで` =「玩笑话先放一边、说正经的」。\n\n结构为「名词 + 抜きで + 主句」。`〜ずに` 去掉的是一个 **动作**,而 `〜抜きで` 去掉的是一个 **事物或成分** —— 一件通常包含、但此处特意省略的东西。",
      examples: [
        {
          jp: "わさび抜きで寿司を注文した",
          reading: "わさびぬきですしをちゅうもんした",
          en: "I ordered sushi without wasabi.",
          zh: "我点了不要芥末的寿司。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type わさび = ProperNoun<"わさび">;
type 寿司 = ProperNoun<"寿司">;

// わさび + 抜きで + 寿司 + を + 注文した(literal)
type わさび抜きで寿司を注文した = \`\${わさび}抜きで\${PhraseWithParticle<寿司, "を">}注文した\`;
`,
        },
        {
          jp: "冗談抜きで話そう",
          reading: "じょうだんぬきではなそう",
          en: "Let's talk, joking aside.",
          zh: "别开玩笑,我们认真谈谈吧。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type 冗談 = ProperNoun<"冗談">;
type 話す = GodanVerb & { stem: "話"; ending: "す" };

// 冗談 + 抜きで + 話そ(意向形) + う
type 冗談抜きで話そう = \`\${冗談}抜きで\${ConjugateVerb<話す, "意向形">}う\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
