import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a08",
  level: "advanced",
  order: 8,
  titleEn: "〜ことなく / 〜抜きで — without doing; leaving out",
  titleZh: "〜ことなく／〜抜きで ——「不…而…」「省去…」",
  summaryEn:
    "Picture writing a tribute to a colleague: \"she worked her whole career without ever once complaining.\" With the て-form chains from ch.10 you could link actions that do happen, and with `〜ずに` (which you just met inside `〜ずにはいられない` in ch.39) you got a first taste of the literary \"without doing\" — but you still lack clean tools to say an action happened without an accompanying one, or to mark a thing deliberately left out. This chapter gives you three: `〜ことなく` (\"without ever doing\", polished and absolute), `〜ずに` (\"without doing\", compact and literary), and `〜抜きで` (\"leaving out / minus\" a thing).",
  summaryZh:
    "想象你在为一位同事写颂词:「她整个职业生涯都不曾抱怨过一句。」用第10章的 て形接续,你能把「确实发生」的动作串起来;在第39章的 `〜ずにはいられない` 里,你也初尝了书面的「不…」—— 但你仍缺少干净的工具来表达「在不做某动作的情况下做另一件事」,或标示某个被特意省去的东西。本章给你三件工具:`〜ことなく`(郑重而绝对的「(始终)不…而…」)、`〜ずに`(紧凑书面的「不…就/而…」)、以及 `〜抜きで`(「省去/不要」某物)。",
  points: [
    {
      id: "a08-1",
      titleEn: "〜ことなく — without ever doing",
      titleZh: "〜ことなく ——「(始终)不…而…」",
      bodyEn:
        "Suppose you want to honor someone in a speech or write a line in a report: \"the machine ran for ten years without ever stopping.\" In casual speech you'd reach for `〜ないで` (\"without doing\"), but it sounds too everyday for a tribute. Japanese reaches instead for `〜ことなく`, which carries a dignified, written weight and an absolute \"not even once\" ring.\n\nThe build is simple: take a verb in its dictionary form (辞書形, ch.12) and attach `ことなく`. So `休む` (\"to rest\") becomes `休むことなく` = \"without (ever) resting\". The whole thing then leads into your main clause.\n\nWhy this shape? Remember `こと` from ch.12/ch.35 turns a verb into an abstract \"the matter of doing\" — a noun. `〜ことなく` literally says \"the matter of resting being absent\", and that nominalized framing is exactly what gives it its polished, almost ceremonial tone. It's the difference between \"he didn't rest and worked\" and \"he worked without ever resting.\"\n\nYou'll see it most with sustained, continuous actions — working, struggling, persevering — which is why it pairs so naturally with tributes: `彼は休むことなく働く` (\"he works without ever resting\"), `あきらめることなく続けた` (\"kept going without giving up\").\n\nA tip: reserve `〜ことなく` for writing and formal speech. Saying it to a friend about ordering coffee would sound oddly grand — there, plain `〜ないで` fits better.",
      bodyZh:
        "设想你要在演讲中赞美某人,或在报告里写一句:「这台机器运转了十年,从未停过。」日常口语里你会用 `〜ないで`(「不…而…」),但对颂词来说太家常了。日语转而使用 `〜ことなく`,它带着庄重的书面分量,以及「连一次都没有」的绝对语气。\n\n构造很简单:取动词的辞书形(原形,第12章)加上 `ことなく`。于是 `休む`(休息)变成 `休むことなく` =「(一直)不休息地」。整段再接入你的主句。\n\n为什么是这个形状?回想第12/35章里的 `こと`,它把动词变成抽象的「…这件事」—— 一个名词。`〜ことなく` 字面上说的是「休息这件事不存在」,正是这种名词化的措辞,赋予它那份打磨过的、近乎仪式感的语气。这就是「他没休息地工作」与「他自始至终不休息地工作」之间的差别。\n\n它最常与持续性动作搭配 —— 工作、奋斗、坚持 —— 所以与颂词如此契合:`彼は休むことなく働く`(他不休息地工作)、`あきらめることなく続けた`(毫不放弃地坚持了下去)。\n\n一个提示:`〜ことなく` 请留给书面与正式场合。对朋友说点咖啡的事用它会显得过于隆重 —— 那种场合,普通的 `〜ないで` 更合适。",
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
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 彼女 = ProperNoun<"彼女">;
type あきらめる = IchidanVerb & { stem: "あきらめ"; ending: "る" };
type 続ける = IchidanVerb & { stem: "続け"; ending: "る" };

// 彼女 + は + あきらめる(辞書形) + ことなく + 続けた(た形)
type 彼女はあきらめることなく続けた = \`\${PhraseWithParticle<彼女, "は">}\${ConjugateVerb<あきらめる, "辞書形">}ことなく\${ConjugateVerb<続ける, "た形">}\`;
`,
        },
      ],
    },
    {
      id: "a08-2",
      titleEn: "〜ずに — without doing (literary)",
      titleZh: "〜ずに ——「不…(就/而)…」(书面)",
      bodyEn:
        "You already met `〜ずに` hiding inside `〜ずにはいられない` back in ch.39 (\"can't help but…\"). On its own, `〜ずに` is the compact, literary twin of casual `〜ないで` — both mean \"without doing\" — and it's the tool for reports and narration where `〜ないで` would feel too chatty. Think of a progress report: \"the project proceeded without any delay,\" or a morning routine: \"I leave without eating breakfast.\"\n\nHere's the build. Take the verb's negative `ない` stem (the part before `ない`, ch.13) and add `ずに`: `言う → 言わ → 言わずに` (\"without saying\"), `食べる → 食べ → 食べずに` (\"without eating\"). It's really the classical negative form, which is why it feels a notch more formal than the everyday `〜ないで` you'd say out loud.\n\nThere is exactly one irregular you must burn into memory: `する → せずに`, never ✗`しずに`. So \"without making a reservation\" is `予約せずに`, and \"without studying\" is `勉強せずに`. This `せ` echoes the same irregular stem you saw in `せざるを得ない` and `せずにはいられない` in ch.39 — once you know one, you know them all.\n\nIn use, `〜ずに` marks the action you skipped: you did the main thing instead of, or while leaving out, this one. `何も言わずに帰った` paints a vivid scene — someone walking out the door, no goodbye, nothing said. That's the everyday tribute-or-grievance flavor `〜ずに` does so well.\n\nQuick contrast to keep straight: `〜ことなく` is grander and stresses \"not even once\" over a span of time; `〜ずに` is lighter and simply notes one omitted action right before the main one.",
      bodyZh:
        "你其实在第39章的 `〜ずにはいられない`(「不能不…」)里已经见过 `〜ずに`。单独使用时,`〜ずに` 是口语 `〜ないで` 的紧凑书面双胞胎 —— 两者都意为「不…而…」—— 在报告与叙述中,`〜ないで` 会显得太随意,这时就该用它。想想进度报告:「项目毫无延误地推进」,或晨间习惯:「我不吃早饭就出门」。\n\n构造如下:取动词的否定 `ない` 词干(`ない` 前面那部分,第13章)加 `ずに`:`言う → 言わ → 言わずに`(不说)、`食べる → 食べ → 食べずに`(不吃)。它本质上是古典否定形,这正是它比口头常说的 `〜ないで` 高一档的原因。\n\n有且只有一个特例必须刻进脑子:`する → せずに`,绝不是 ✗`しずに`。所以「不预约」是 `予約せずに`,「不学习」是 `勉強せずに`。这个 `せ` 与第39章 `せざるを得ない`、`せずにはいられない` 中的不规则词干如出一辙 —— 记住一个,便全都通了。\n\n使用时,`〜ずに` 标示你跳过的那个动作:你做主句的事,是「没做/略去」这件事的情况下进行的。`何も言わずに帰った` 描出一幅鲜活画面 —— 有人走出门去,没有道别,一言未发。这正是 `〜ずに` 最擅长的、那种日常颂赞或抱怨的味道。\n\n一个便于区分的对比:`〜ことなく` 更隆重,强调一段时间里「连一次都没有」;`〜ずに` 更轻,只是点出紧接主句之前被省去的一个动作。",
      examples: [
        {
          jp: "何も言わずに帰った",
          reading: "なにもいわずにかえった",
          en: "He went home without saying anything.",
          zh: "他什么也没说就回去了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 何 = ProperNoun<"何">;
type 言う = GodanVerb & { stem: "言"; ending: "う" };
type 帰る = GodanVerb & { stem: "帰"; ending: "る" };

// 何 + も + 言わ(ない形) + ずに + 帰った(た形)
type 何も言わずに帰った = \`\${PhraseWithParticle<何, "も">}\${ConjugateVerb<言う, "ない形">}ずに\${ConjugateVerb<帰る, "た形">}\`;
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
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 予約 = ProperNoun<"予約">;
type 来る = IrregularVerb & { dictionary: "来る" };

// する is irregular here: する → せずに (せ is kana, kept literal); 来 + た形(来た)
type 予約せずに来た = \`\${予約}せずに\${ConjugateVerb<来る, "た形">}\`;
`,
        },
      ],
    },
    {
      id: "a08-3",
      titleEn: "〜抜きで — leaving out / excluding",
      titleZh: "〜抜きで ——「省去…」「不要…」",
      bodyEn:
        "The previous two patterns drop an action. But sometimes what you want to leave out is a thing: \"a burger, hold the onions,\" or \"let's talk — small talk aside.\" For that Japanese hands you `〜抜きで`.\n\n`抜き` comes from the verb `抜く` (\"to pull out, to remove\"), so the image is wonderfully concrete: you grab the unwanted item and yank it out. Attach `抜きで` to a noun and you get \"with that thing pulled out / minus it\": `わさび抜きで` = \"without wasabi\", `冗談抜きで` = \"joking aside\". The frame is `Noun + 抜きで + main clause`.\n\nThis is exactly the phrase to know at a restaurant. Hand the counter your order with `わさび抜きで寿司を注文した` and you've cleanly said \"sushi, hold the wasabi.\" The item is normally included; you're deliberately omitting it, and the `抜く` (\"pull out\") imagery makes that intent unmistakable.\n\nIt also works figuratively. `冗談抜きで話そう` literally pulls the jokes out of the conversation — \"let's get serious, jokes aside\" — a natural way to open a frank talk. Same move: take the usual ingredient (here, the banter) and remove it.\n\nSo line up the three: `〜ずに` removes an action you skipped, `〜ことなく` removes an action across a whole span, and `〜抜きで` removes a thing or ingredient. Reach for `抜きで` whenever the thing left out is a noun.",
      bodyZh:
        "前两个句型去掉的是动作。但有时你想省去的是一个东西:「汉堡,不要洋葱」,或「来谈谈吧 —— 客套话先放一边」。为此日语给你 `〜抜きで`。\n\n`抜き` 来自动词 `抜く`(「抽出、去掉」),所以意象格外具体:你抓住那个不想要的东西,一把抽掉。把 `抜きで` 接在名词后,就得到「把那东西抽掉/不加它」:`わさび抜きで` =「不要芥末」,`冗談抜きで` =「玩笑话先放一边、说正经的」。结构是「名词 + 抜きで + 主句」。\n\n这正是在餐厅必备的一句。把点单递到柜台 `わさび抜きで寿司を注文した`,你就干净利落地说了「寿司,不要芥末」。这东西本来是包含的;你特意省略它,而 `抜く`(抽出)的意象让这份意图毫不含糊。\n\n它也能用于比喻。`冗談抜きで話そう` 字面上把玩笑从对话里抽走 ——「别开玩笑,我们认真谈谈吧」—— 是开启一场坦诚交谈的自然说法。同样的动作:取出惯常的成分(这里是玩笑),把它移走。\n\n于是把三者排好:`〜ずに` 去掉你跳过的一个动作,`〜ことなく` 去掉一整段时间里的动作,而 `〜抜きで` 去掉一个事物或成分。只要被省去的是名词,就用 `抜きで`。",
      examples: [
        {
          jp: "わさび抜きで寿司を注文した",
          reading: "わさびぬきですしをちゅうもんした",
          en: "I ordered sushi without wasabi.",
          zh: "我点了不要芥末的寿司。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type わさび = ProperNoun<"わさび">;
type 抜き = ProperNoun<"抜き">;
type 寿司 = ProperNoun<"寿司">;
type 注文 = ProperNoun<"注文">;

// わさび + 抜き + で + 寿司 + を + 注文 + した(kana)
type わさび抜きで寿司を注文した = \`\${わさび}\${抜き}で\${PhraseWithParticle<寿司, "を">}\${注文}した\`;
`,
        },
        {
          jp: "冗談抜きで話そう",
          reading: "じょうだんぬきではなそう",
          en: "Let's talk, joking aside.",
          zh: "别开玩笑,我们认真谈谈吧。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type 冗談 = ProperNoun<"冗談">;
type 抜き = ProperNoun<"抜き">;
type 話す = GodanVerb & { stem: "話"; ending: "す" };

// 冗談 + 抜き + で + 話そ(意向形) + う
type 冗談抜きで話そう = \`\${冗談}\${抜き}で\${ConjugateVerb<話す, "意向形">}う\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
