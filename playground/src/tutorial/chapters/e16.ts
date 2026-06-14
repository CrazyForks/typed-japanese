import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e16",
  level: "elementary",
  order: 16,
  titleEn: "Conditionals: 〜たら / 〜と",
  titleZh: "条件：〜たら／〜と",
  summaryEn:
    "Two everyday ways to say “if/when”. `〜たら` (formed from the た-form plus ら) is the most flexible conditional — “if/once X happens, then…”. `〜と` joins a plain-form clause to describe a natural, automatic consequence — “whenever X, Y inevitably follows”. This chapter shows when each one fits.",
  summaryZh:
    "两种最常用的「如果／一旦……就……」表达方式。`〜たら`(由「た形」加 `ら` 构成)是最灵活的条件句 ——「如果／一旦 X 发生,就……」。`〜と` 把一个简体小句连接起来,表示自然而必然的结果 ——「每当 X,就一定 Y」。本章讲解二者各自的适用场合。",
  points: [
    {
      id: "e16-1",
      titleEn: "〜たら — “if / once …, then …”",
      titleZh: "〜たら ——「如果／一旦……就……」",
      bodyEn:
        "The `〜たら` conditional is built directly from the た-form: take the plain past form of a verb and add `ら`. So `降る` → `降った` (た-form) → `降ったら` (“if/when it rains”), and `着く` → `着いた` → `着いたら` (“once I arrive”).\n\n`〜たら` is the broadest, most conversational conditional. It can mean “if” (a hypothetical) or “when/once” (something that will surely happen). The main clause usually describes what the speaker will do, intends, or discovers — including, with a past-tense main clause, an unexpected result (`薬を飲んだら、元気になりました` — “after I took the medicine, I felt better”).",
      bodyZh:
        "`〜たら` 条件句直接由「た形」构成:取动词的简体过去式,再加 `ら`。例如 `降る` → `降った`(た形)→ `降ったら`(「如果／一旦下雨」),`着く` → `着いた` → `着いたら`(「一旦到达」)。\n\n`〜たら` 是适用面最广、最口语化的条件表达。它既可表示「如果」(假设),也可表示「当／一旦」(必然会发生的事)。后半句通常说明说话人将要做、打算做或发现到的事 —— 当后半句用过去式时,还可表示意外的结果(`薬を飲んだら、元気になりました` ——「吃了药以后,(没想到)就好了」)。",
      examples: [
        {
          jp: "雨が降ったら、家にいます",
          reading: "あめがふったら、いえにいます",
          en: "If it rains, I'll stay home.",
          zh: "如果下雨,我就待在家里。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 雨 = ProperNoun<"雨">;
type 降る = GodanVerb & { stem: "降"; ending: "る" };

// 雨 + が + 降った(た形) + ら、家にいます
type 雨が降ったら家にいます = \`\${PhraseWithParticle<雨, "が">}\${ConjugateVerb<降る, "た形">}ら、家にいます\`;
`,
        },
        {
          jp: "駅に着いたら、電話します",
          reading: "えきについたら、でんわします",
          en: "Once I arrive at the station, I'll call you.",
          zh: "一到车站,我就给你打电话。",
          code: `import type { ProperNoun, GodanVerb, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 駅 = ProperNoun<"駅">;
type 着く = GodanVerb & { stem: "着"; ending: "く" };
type する = IrregularVerb & { dictionary: "する" };

// 駅 + に + 着いた(た形) + ら、電話 + し(ます形) + ます
type 駅に着いたら電話します = \`\${PhraseWithParticle<駅, "に">}\${ConjugateVerb<着く, "た形">}ら、電話\${ConjugateVerb<する, "ます形">}ます\`;
`,
        },
        {
          jp: "薬を飲んだら、元気になりました",
          reading: "くすりをのんだら、げんきになりました",
          en: "After I took the medicine, I felt better.",
          zh: "吃了药以后,(没想到)就好了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 薬 = ProperNoun<"薬">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 薬 + を + 飲んだ(た形) + ら、元気になりました (past result)
type 薬を飲んだら元気になりました = \`\${PhraseWithParticle<薬, "を">}\${ConjugateVerb<飲む, "た形">}ら、元気になりました\`;
`,
        },
      ],
    },
    {
      id: "e16-2",
      titleEn: "〜と — natural / automatic consequence",
      titleZh: "〜と —— 自然、必然的结果",
      bodyEn:
        "`〜と` attaches to the **plain (dictionary) form** of a verb: `押す` → `押すと`, `なる` → `なると`. It expresses a relationship where the second event always and automatically follows the first — laws of nature, machine behavior, habits, directions. Think “whenever A, B (inevitably) happens”.\n\nBecause the result is presented as automatic, the clause after `〜と` cannot be a command, request, invitation, or statement of the speaker's own will. For those you need `〜たら` instead. A comma after `と` is common but optional.",
      bodyZh:
        "`〜と` 接在动词的**简体(辞书形)**之后:`押す` → `押すと`,`なる` → `なると`。它表示后一件事总是、自动地随前一件事发生 —— 自然规律、机器运作、习惯、指路等。可理解为「每当 A,就(必然)B」。\n\n由于结果被视为自动发生,`〜と` 后面的小句不能是命令、请求、邀请或说话人自身的意志表达 —— 这些情况要改用 `〜たら`。`と` 后面常加逗号,但可省略。",
      examples: [
        {
          jp: "春になると、桜が咲きます",
          reading: "はるになると、さくらがさきます",
          en: "When spring comes, the cherry blossoms bloom.",
          zh: "一到春天,樱花就开了。",
          code: `import type { GodanVerb, ConjugateVerb, ConditionalPhrase } from "typed-japanese";

type なる = GodanVerb & { stem: "な"; ending: "る" };
type 咲く = GodanVerb & { stem: "咲"; ending: "く" };

// 春に + なる(辞書形) + と + 、桜が + 咲き(ます形) + ます
type 春になると桜が咲きます = ConditionalPhrase<\`春に\${ConjugateVerb<なる, "辞書形">}\`, "と", \`、桜が\${ConjugateVerb<咲く, "ます形">}ます\`>;
`,
        },
        {
          jp: "ボタンを押すと、ドアが開きます",
          reading: "ぼたんをおすと、どあがひらきます",
          en: "When you press the button, the door opens.",
          zh: "一按按钮,门就开了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle, ConditionalPhrase } from "typed-japanese";

type ボタン = ProperNoun<"ボタン">;
type 押す = GodanVerb & { stem: "押"; ending: "す" };
type 開く = GodanVerb & { stem: "開"; ending: "く" };

// ボタン + を + 押す(辞書形) + と + 、ドアが + 開き(ます形) + ます
type ボタンを押すとドアが開きます = ConditionalPhrase<\`\${PhraseWithParticle<ボタン, "を">}\${ConjugateVerb<押す, "辞書形">}\`, "と", \`、ドアが\${ConjugateVerb<開く, "ます形">}ます\`>;
`,
        },
        {
          jp: "右に曲がると、駅があります",
          reading: "みぎにまがると、えきがあります",
          en: "If you turn right, there's the station.",
          zh: "向右拐,就有车站。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle, ConditionalPhrase } from "typed-japanese";

type 右 = ProperNoun<"右">;
type 曲がる = GodanVerb & { stem: "曲が"; ending: "る" };

// 右 + に + 曲がる(辞書形) + と + 、駅があります
type 右に曲がると駅があります = ConditionalPhrase<\`\${PhraseWithParticle<右, "に">}\${ConjugateVerb<曲がる, "辞書形">}\`, "と", \`、駅があります\`>;
`,
        },
      ],
    },
    {
      id: "e16-3",
      titleEn: "Choosing 〜たら vs 〜と",
      titleZh: "〜たら 与 〜と 的选择",
      bodyEn:
        "Both translate as “if/when”, but they are not interchangeable. `〜と` reports an inevitable, repeatable consequence and forbids a will-based main clause — you cannot say “…と, let's go” or “…と, please call”. `〜たら` has no such restriction, so it's the natural choice when the second clause expresses your plan, request, or a one-time future event.\n\nA quick test: if the result is something you *decide* to do, use `〜たら` (`授業が終わったら、休みます` — “once class ends, I'll rest”). If the result happens *by itself*, `〜と` fits (`ボタンを押すと、ドアが開きます`).",
      bodyZh:
        "两者都译作「如果／当……」,但不能互换。`〜と` 陈述必然、可反复发生的结果,且后半句不能表示意志 —— 不能说「……と,一起去吧」或「……と,请打电话」。`〜たら` 没有这种限制,所以当后半句表达计划、请求或一次性的将来事件时,应选用 `〜たら`。\n\n一个简便判断法:如果结果是你*决定*要做的事,用 `〜たら`(`授業が終わったら、休みます` ——「下课后我就休息」);如果结果是*自然而然*发生的,用 `〜と`(`ボタンを押すと、ドアが開きます`)。",
      examples: [
        {
          jp: "授業が終わったら、休みます",
          reading: "じゅぎょうがおわったら、やすみます",
          en: "Once class ends, I'll take a rest.",
          zh: "下课以后,我就休息。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 授業 = ProperNoun<"授業">;
type 終わる = GodanVerb & { stem: "終わ"; ending: "る" };
type 休む = GodanVerb & { stem: "休"; ending: "む" };

// 授業 + が + 終わった(た形) + ら、休み(ます形) + ます  (speaker's plan → たら)
type 授業が終わったら休みます = \`\${PhraseWithParticle<授業, "が">}\${ConjugateVerb<終わる, "た形">}ら、\${ConjugateVerb<休む, "ます形">}ます\`;
`,
        },
        {
          jp: "お金を入れると、切符が出ます",
          reading: "おかねをいれると、きっぷがでます",
          en: "When you insert money, the ticket comes out.",
          zh: "投入钱,车票就出来了。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle, ConditionalPhrase } from "typed-japanese";

type お金 = ProperNoun<"お金">;
type 入れる = IchidanVerb & { stem: "入れ"; ending: "る" };

// お金 + を + 入れる(辞書形) + と + 、切符が出ます  (automatic result → と)
type お金を入れると切符が出ます = ConditionalPhrase<\`\${PhraseWithParticle<お金, "を">}\${ConjugateVerb<入れる, "辞書形">}\`, "と", \`、切符が出ます\`>;
`,
        },
      ],
    },
  ],
};

export default chapter;
