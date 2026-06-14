import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i06",
  level: "intermediate",
  order: 6,
  titleEn: "The 〜ば conditional & 〜ば〜ほど",
  titleZh: "〜ば条件与〜ば〜ほど",
  summaryEn:
    "The 〜ば form is the “provisional” conditional — “if A (holds), then B”. It is built from the 仮定形 (hypothetical base) of verbs and adjectives. This chapter covers how to form 〜ば for each word type, its negative counterpart 〜なければ, and the very useful 〜ば〜ほど pattern meaning “the more …, the more …”.",
  summaryZh:
    "〜ば形是「假定条件」——「如果 A(成立),那么 B」。它由动词、形容词的「仮定形(假定形)」构成。本章介绍各类词如何变成 〜ば、其否定形式 〜なければ,以及非常实用的 〜ば〜ほど 句型,意为「越……越……」。",
  points: [
    {
      id: "i06-1",
      titleEn: "Forming the 〜ば conditional (仮定形 + ば)",
      titleZh: "构成 〜ば 条件(仮定形 + ば)",
      bodyEn:
        "The 〜ば conditional expresses a general, logical “if”: *if the condition holds, the result follows*.\n\nHow to form it:\n\n- **Godan verbs**: change the final `-u` sound to the matching `-e` sound and add `ば` — 急ぐ → 急げ + ば → `急げば`, 読む → 読め + ば → `読めば`. In Typed Japanese this `-e` base is the `仮定形`.\n- **Ichidan verbs**: drop `る` and add `れば` — 食べる → `食べれば`, 考える → `考えれば`.\n- **Irregular verbs**: する → `すれば`, 来る → `来れば`.\n- **い-adjectives**: replace `い` with `ければ` — 安い → `安ければ`, 高い → `高ければ`.\n\nThe 〜ば clause states the condition; the main clause states the result.",
      bodyZh:
        "〜ば 条件句表示一种普遍的、逻辑上的「如果」:*只要条件成立,结果就随之而来*。\n\n变形方法:\n\n- **五段动词**:把词尾的 `-u` 音改成对应的 `-e` 音再加 `ば` —— 急ぐ → 急げ + ば → `急げば`,読む → 読め + ば → `読めば`。在 Typed Japanese 中这个 `-e` 形即 `仮定形`。\n- **一段动词**:去掉 `る` 加 `れば` —— 食べる → `食べれば`,考える → `考えれば`。\n- **不规则动词**:する → `すれば`,来る → `来れば`。\n- **い形容词**:把 `い` 换成 `ければ` —— 安い → `安ければ`,高い → `高ければ`。\n\n〜ば 从句陈述条件,主句陈述结果。",
      examples: [
        {
          jp: "急げば、間に合います",
          reading: "いそげば、まにあいます",
          en: "If you hurry, you'll make it in time.",
          zh: "如果快点的话,就来得及。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 急ぐ = GodanVerb & { stem: "急"; ending: "ぐ" };
type 間に合う = GodanVerb & { stem: "間に合"; ending: "う" };

// 急ぐ(仮定形)=急げ → +ば → 急げば
type 急げば間に合います = \`\${ConjugateVerb<急ぐ, "仮定形">}ば、\${ConjugateVerb<間に合う, "ます形">}ます\`;
`,
        },
        {
          jp: "安ければ、買います",
          reading: "やすければ、かいます",
          en: "If it's cheap, I'll buy it.",
          zh: "如果便宜的话,我就买。",
          code: `import type { IAdjective, GodanVerb, ConjugateVerb } from "typed-japanese";

type 安い = IAdjective & { stem: "安"; ending: "い" };
type 買う = GodanVerb & { stem: "買"; ending: "う" };

// い-adjective: 安 + ければ → 安ければ
type 安ければ買います = \`\${安い["stem"]}ければ、\${ConjugateVerb<買う, "ます形">}ます\`;
`,
        },
        {
          jp: "春が来れば、暖かくなる",
          reading: "はるがくれば、あたたかくなる",
          en: "When spring comes, it gets warm.",
          zh: "春天一来,天气就会变暖。",
          code: `import type { IrregularVerb, IAdjective, ConjugateVerb, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 来る = IrregularVerb & { dictionary: "来る" };
type 暖かい = IAdjective & { stem: "暖か"; ending: "い" };

// 来る(仮定形)=来れ → +ば → 来れば ; 暖か + くなる
type 春が来れば暖かくなる = \`\${PhraseWithParticle<ProperNoun<"春">, "が">}\${ConjugateVerb<来る, "仮定形">}ば、\${暖かい["stem"]}くなる\`;
`,
        },
      ],
    },
    {
      id: "i06-2",
      titleEn: "Negative conditional: 〜なければ",
      titleZh: "否定条件:〜なければ",
      bodyEn:
        "To say “if … not”, take the plain negative `ない形` of a verb, drop the final `い`, and add `ければ` — i.e. attach `なければ` to the negative base. 行く → 行か(ない) → `行かなければ`; する → し(ない) → `しなければ`.\n\nThis pattern is the backbone of `〜なければなりません` (“must / have to”, literally “if you don't …, it won't do”), one of the most common ways to express obligation in Japanese.",
      bodyZh:
        "要表达「如果不……」,取动词的简体否定 `ない形`,去掉词尾的 `い`,再加 `ければ` —— 也就是在否定词干后接 `なければ`。行く → 行か(ない) → `行かなければ`;する → し(ない) → `しなければ`。\n\n这个句型是 `〜なければなりません`(「必须/不得不」,字面意为「如果不……就不行」)的核心,是日语中表示义务最常见的说法之一。",
      examples: [
        {
          jp: "行かなければなりません",
          reading: "いかなければなりません",
          en: "I have to go.",
          zh: "我必须去。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 行く(ない形)=行か → +なければなりません
type 行かなければなりません = \`\${ConjugateVerb<行く, "ない形">}なければなりません\`;
`,
        },
        {
          jp: "練習しなければ上手になりません",
          reading: "れんしゅうしなければじょうずになりません",
          en: "If you don't practice, you won't get good at it.",
          zh: "不练习的话就不会变熟练。",
          code: `import type { IrregularVerb, ConjugateVerb, ProperNoun } from "typed-japanese";

type する = IrregularVerb & { dictionary: "する" };
type 上手 = ProperNoun<"上手">;

// する(ない形)=し → 練習し + なければ ; 上手になりません
type 練習しなければ上手になりません = \`練習\${ConjugateVerb<する, "ない形">}なければ\${上手}になりません\`;
`,
        },
      ],
    },
    {
      id: "i06-3",
      titleEn: "〜ば〜ほど — “the more …, the more …”",
      titleZh: "〜ば〜ほど ——「越……越……」",
      bodyEn:
        "Repeating the same word in the pattern `Vば Vる + ほど` (or `Aければ Aい + ほど`) means “the more X, the more (something happens)”. The first occurrence is the 〜ば conditional; the second is the dictionary/basic form followed by `ほど`.\n\n- Verb: 読めば 読む + ほど → `読めば読むほど` (“the more you read…”).\n- い-adjective: 高ければ 高い + ほど → `高ければ高いほど` (“the higher…”).\n\nThe result clause then describes what increases along with it.",
      bodyZh:
        "在 `Vば Vる + ほど`(或 `Aければ Aい + ほど`)句型中重复同一个词,表示「越 X,就越(怎么样)」。第一次出现用 〜ば 条件形,第二次用辞书形/基本形再接 `ほど`。\n\n- 动词:読めば 読む + ほど → `読めば読むほど`(「越读……」)。\n- い形容词:高ければ 高い + ほど → `高ければ高いほど`(「越高……」)。\n\n之后的结果从句描述随之递增的内容。",
      examples: [
        {
          jp: "読めば読むほど面白い",
          reading: "よめばよむほどおもしろい",
          en: "The more you read it, the more interesting it gets.",
          zh: "越读越有意思。",
          code: `import type { GodanVerb, IAdjective, ConjugateVerb, ConjugateAdjective } from "typed-japanese";

type 読む = GodanVerb & { stem: "読"; ending: "む" };
type 面白い = IAdjective & { stem: "面白"; ending: "い" };

// 読め(仮定形)+ば + 読む(辞書形)+ ほど + 面白い
type 読めば読むほど面白い = \`\${ConjugateVerb<読む, "仮定形">}ば\${ConjugateVerb<読む, "辞書形">}ほど\${ConjugateAdjective<面白い, "基本形">}\`;
`,
        },
        {
          jp: "高ければ高いほどいい",
          reading: "たかければたかいほどいい",
          en: "The higher (the price), the better.",
          zh: "越贵越好。",
          code: `import type { IAdjective, ConjugateAdjective } from "typed-japanese";

type 高い = IAdjective & { stem: "高"; ending: "い" };
type いい = IAdjective & { stem: "い"; ending: "い"; irregular: true };

// 高 + ければ + 高い(基本形)+ ほど + いい
type 高ければ高いほどいい = \`\${高い["stem"]}ければ\${ConjugateAdjective<高い, "基本形">}ほど\${ConjugateAdjective<いい, "基本形">}\`;
`,
        },
        {
          jp: "考えれば考えるほど分からなくなる",
          reading: "かんがえればかんがえるほどわからなくなる",
          en: "The more I think about it, the less I understand.",
          zh: "越想越搞不懂。",
          code: `import type { IchidanVerb, GodanVerb, ConjugateVerb } from "typed-japanese";

type 考える = IchidanVerb & { stem: "考え"; ending: "る" };
type 分かる = GodanVerb & { stem: "分か"; ending: "る" };

// ichidan: 考え + れば + 考える(辞書形)+ ほど ; 分か(ない形)+ なくなる
type 考えれば考えるほど分からなくなる = \`\${考える["stem"]}れば\${ConjugateVerb<考える, "辞書形">}ほど\${ConjugateVerb<分かる, "ない形">}なくなる\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
