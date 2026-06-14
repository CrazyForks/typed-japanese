import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i01",
  level: "intermediate",
  order: 1,
  titleEn: "Passive 受身",
  titleZh: "被动态 受身",
  summaryEn:
    "The passive voice (受身) lets you tell a sentence from the perspective of the person affected by an action rather than the one doing it. You'll learn how to build the passive form 受身形 of verbs, the core pattern “A は B に 〜られる” (A is …-ed by B), and the distinctly Japanese “suffering passive” (迷惑の受身), which expresses that an event troubled or inconvenienced someone — even with intransitive verbs.",
  summaryZh:
    "被动态(受身)让你从「动作的承受者」而非「动作的发出者」的角度来叙述一件事。本章介绍动词被动形(受身形)的变化、核心句型「A は B に 〜られる」(A 被 B 做了某事),以及富有日语特色的「受害被动」(迷惑の受身)—— 用来表达某件事给人带来麻烦或困扰,甚至连不及物动词也能使用。",
  points: [
    {
      id: "i01-1",
      titleEn: "Forming the passive 受身形",
      titleZh: "构成被动形 受身形",
      bodyEn:
        "The passive is built on the passive stem `受身形` plus the ending `る`.\n\nFor **godan verbs**, the final `-u` shifts to the `-a` row and you add `れる`: `叱る → 叱ら + れる → 叱られる`, `言う → 言わ + れる → 言われる` (note `う` becomes `わ`, not `あ`).\n\nFor **ichidan verbs**, drop `る` and add `られる`: `食べる → 食べられる`. (This looks identical to the potential form — context tells them apart.)\n\nFor **irregular verbs**, `する → される` and `来る → 来られる`. A passive verb conjugates like an ichidan verb, so its past tense is `〜られた`.",
      bodyZh:
        "被动形由被动词干(受身形)加结尾 `る` 构成。\n\n**五段动词**:把词尾的 `-u` 音变为 `-a` 段,再加 `れる`:`叱る → 叱ら + れる → 叱られる`、`言う → 言わ + れる → 言われる`(注意 `う` 变成 `わ`,而不是 `あ`)。\n\n**一段动词**:去掉 `る` 加 `られる`:`食べる → 食べられる`。(形式与可能态完全相同,靠语境区分。)\n\n**不规则动词**:`する → される`、`来る → 来られる`。被动动词本身按一段动词变化,所以过去式是「〜られた」。",
      examples: [
        {
          jp: "言われる",
          reading: "いわれる",
          en: "to be told / to be said (to one)",
          zh: "被说;被告知",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 言う = GodanVerb & { stem: "言"; ending: "う" };

// godan 受身形 gives the -a stem 言わ; add れる
type 言われる = \`\${ConjugateVerb<言う, "受身形">}れる\`;
`,
        },
        {
          jp: "食べられる",
          reading: "たべられる",
          en: "to be eaten",
          zh: "被吃掉",
          code: `import type { IchidanVerb, ConjugateVerb } from "typed-japanese";

type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// ichidan 受身形 gives 食べられ; add る
type 食べられる = \`\${ConjugateVerb<食べる, "受身形">}る\`;
`,
        },
        {
          jp: "される",
          reading: "される",
          en: "to be done",
          zh: "被做",
          code: `import type { IrregularVerb, ConjugateVerb } from "typed-japanese";

type する = IrregularVerb & { dictionary: "する" };

// irregular 受身形 gives され; add る
type される = \`\${ConjugateVerb<する, "受身形">}る\`;
`,
        },
      ],
    },
    {
      id: "i01-2",
      titleEn: "A は B に 〜られる — “A is …-ed by B”",
      titleZh: "A は B に 〜られる ——「A 被 B…」",
      bodyEn:
        "In a passive sentence the **receiver** of the action becomes the topic (marked by `は` or `が`), and the **agent** — the one who performs the action — is marked by the particle `に` (“by”).\n\nSo the active sentence “the teacher scolded me” (先生が私を叱った) flips into “I was scolded by the teacher”: `私は先生に叱られた`. The object of the active verb becomes the subject, and the original subject moves behind `に`.",
      bodyZh:
        "在被动句中,动作的**承受者**成为主题(用 `は` 或 `が` 标记),而**施动者**(执行动作的人)用助词 `に`(「被…」)标记。\n\n因此主动句「老师骂了我」(先生が私を叱った)就翻转成「我被老师骂了」:`私は先生に叱られた`。主动句的宾语变成被动句的主语,原来的主语移到 `に` 之后。",
      examples: [
        {
          jp: "私は先生に叱られた",
          reading: "わたしはせんせいにしかられた",
          en: "I was scolded by the teacher.",
          zh: "我被老师骂了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 先生 = ProperNoun<"先生">;
type 叱る = GodanVerb & { stem: "叱"; ending: "る" };

// 私は + 先生に + 叱ら(受身形) + れた
type 私は先生に叱られた = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<先生, "に">}\${ConjugateVerb<叱る, "受身形">}れた\`;
`,
        },
        {
          jp: "私は友達に招待された",
          reading: "わたしはともだちにしょうたいされた",
          en: "I was invited by a friend.",
          zh: "我被朋友邀请了。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 友達 = ProperNoun<"友達">;
type する = IrregularVerb & { dictionary: "する" };

// 招待する is a noun + する verb: 招待 + され(受身形) + た
type 私は友達に招待された = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<友達, "に">}招待\${ConjugateVerb<する, "受身形">}た\`;
`,
        },
        {
          jp: "子供はみんなにほめられた",
          reading: "こどもはみんなにほめられた",
          en: "The child was praised by everyone.",
          zh: "这个孩子被大家表扬了。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 子供 = ProperNoun<"子供">;
type みんな = ProperNoun<"みんな">;
type ほめる = IchidanVerb & { stem: "ほめ"; ending: "る" };

// 子供は + みんなに + ほめられ(受身形) + た
type 子供はみんなにほめられた = \`\${PhraseWithParticle<子供, "は">}\${PhraseWithParticle<みんな, "に">}\${ConjugateVerb<ほめる, "受身形">}た\`;
`,
        },
      ],
    },
    {
      id: "i01-3",
      titleEn: "Possessor passive: having something of yours acted on",
      titleZh: "所有者被动:自己的东西被…",
      bodyEn:
        "When an action affects something that **belongs to you** — your bag, your foot, your work — Japanese often makes *you* the topic (the affected person) and keeps the thing as the direct object with `を`.\n\nThe pattern is `Person は Agent に Thing を 〜られる`. For example, instead of saying “my wallet was stolen,” Japanese prefers “I had my wallet stolen (on me)”: `私は財布を盗まれた`. This naturally carries a nuance of loss or annoyance.",
      bodyZh:
        "当动作影响到**属于你的东西**(你的包、你的脚、你的作品)时,日语常常把**你本人**作为主题(受影响的人),而那样东西仍用 `を` 作直接宾语。\n\n句型为「人 は 施动者 に 物 を 〜られる」。例如不说「我的钱包被偷了」,日语更习惯说「我被偷了钱包」:`私は財布を盗まれた`。这自然带有一种损失或不快的语气。",
      examples: [
        {
          jp: "私は財布を盗まれた",
          reading: "わたしはさいふをぬすまれた",
          en: "I had my wallet stolen.",
          zh: "我的钱包被偷了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 財布 = ProperNoun<"財布">;
type 盗む = GodanVerb & { stem: "盗"; ending: "む" };

// 私は + 財布を + 盗ま(受身形) + れた
type 私は財布を盗まれた = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<財布, "を">}\${ConjugateVerb<盗む, "受身形">}れた\`;
`,
        },
        {
          jp: "弟は犬に手を噛まれた",
          reading: "おとうとはいぬにてをかまれた",
          en: "My little brother got his hand bitten by a dog.",
          zh: "弟弟的手被狗咬了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 弟 = ProperNoun<"弟">;
type 犬 = ProperNoun<"犬">;
type 手 = ProperNoun<"手">;
type 噛む = GodanVerb & { stem: "噛"; ending: "む" };

// 弟は + 犬に + 手を + 噛ま(受身形) + れた
type 弟は犬に手を噛まれた = \`\${PhraseWithParticle<弟, "は">}\${PhraseWithParticle<犬, "に">}\${PhraseWithParticle<手, "を">}\${ConjugateVerb<噛む, "受身形">}れた\`;
`,
        },
      ],
    },
    {
      id: "i01-4",
      titleEn: "The suffering passive 迷惑の受身",
      titleZh: "受害被动 迷惑の受身",
      bodyEn:
        "Japanese has a special passive that exists purely to say an event **troubled or inconvenienced** the speaker — even when no one acted on the speaker directly, and even with **intransitive verbs** that have no object at all.\n\nThe classic case is rain: `雨に降られた` literally means “I was rained on,” i.e. the rain fell and it was a nuisance to me. Likewise `赤ちゃんに泣かれた` (“I had the baby cry on me”) frames the crying as something that bothered the speaker. English has no direct equivalent, so we usually translate it with phrases like “end up …-ed on me.”",
      bodyZh:
        "日语有一种特殊的被动,专门用来表达某件事给说话人**带来麻烦或困扰**—— 即使没有人对说话人直接施加动作,甚至连根本没有宾语的**不及物动词**也能这样用。\n\n最典型的就是下雨:`雨に降られた` 字面意思是「我被雨淋了」,即雨下了下来,这给我造成了困扰。同样 `赤ちゃんに泣かれた`(「我被婴儿哭了」)把哭这件事描述成困扰说话人的事。英语没有完全对应的说法,中文通常要补出「害得我…」之类的语气。",
      examples: [
        {
          jp: "雨に降られた",
          reading: "あめにふられた",
          en: "I got caught in the rain.",
          zh: "我被雨淋了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 雨 = ProperNoun<"雨">;
type 降る = GodanVerb & { stem: "降"; ending: "る" };

// intransitive 降る → suffering passive: 雨に + 降ら(受身形) + れた
type 雨に降られた = \`\${PhraseWithParticle<雨, "に">}\${ConjugateVerb<降る, "受身形">}れた\`;
`,
        },
        {
          jp: "私は赤ちゃんに泣かれた",
          reading: "わたしはあかちゃんになかれた",
          en: "I had the baby cry on me (and it troubled me).",
          zh: "婴儿一直哭,害得我很为难。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 赤ちゃん = ProperNoun<"赤ちゃん">;
type 泣く = GodanVerb & { stem: "泣"; ending: "く" };

// 私は + 赤ちゃんに + 泣か(受身形) + れた
type 私は赤ちゃんに泣かれた = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<赤ちゃん, "に">}\${ConjugateVerb<泣く, "受身形">}れた\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
