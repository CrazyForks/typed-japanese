import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i14",
  level: "intermediate",
  order: 14,
  titleEn: "Connectives",
  titleZh: "连接词",
  summaryEn:
    "Sentences grow up when clauses start to link. This chapter covers the everyday Japanese connectives: `から` and `ので` for giving reasons (“because”), `が` and `けど` for contrast (“but / although”), and `し` for piling up reasons or qualities (“and what's more”). Each one attaches to the end of a clause and joins it to the next, so getting the form right — plain or polite — is the whole game.",
  summaryZh:
    "当句子开始把分句连接起来时,表达才真正成熟。本章介绍日语中最常用的连接词:表示原因的 `から` 与 `ので`(「因为」)、表示转折的 `が` 与 `けど`(「但是 / 虽然」),以及用于罗列原因或性质的 `し`(「而且、再加上」)。它们都接在分句末尾,把前后两句连起来,所以关键在于用对前面的形式——简体还是礼貌体。",
  points: [
    {
      id: "i14-1",
      titleEn: "から / ので — giving a reason",
      titleZh: "から / ので ——陈述原因",
      bodyEn:
        "Both `から` and `ので` mean “because”, attaching to the **reason** clause: `[reason] から/ので、[result]`. The difference is tone. `から` is direct and subjective — it states the speaker's own grounds — so it's common for personal reasons, excuses, and commands. `ので` is softer and more objective, presenting the reason as a natural cause, which makes it sound more polite.\n\nConnection: `から` attaches to a plain or polite predicate (`高いから`, `行きますから`). `ので` prefers the plain form for verbs and i-adjectives (`忙しいので`), and after a noun or na-adjective it becomes `なので` (`雨なので`).",
      bodyZh:
        "`から` 和 `ので` 都表示「因为」,接在**原因**分句之后:`[原因] から/ので、[结果]`。区别在语气。`から` 直接、主观——陈述说话人自己的理由——常用于个人原因、辩解和命令。`ので` 较委婉、客观,把原因当作自然的因果来呈现,因而显得更礼貌。\n\n接续:`から` 可接简体或礼貌体谓语(`高いから`、`行きますから`)。`ので` 在动词和形容词后多用简体(`忙しいので`),接在名词或形容动词后则变成 `なので`(`雨なので`)。",
      examples: [
        {
          jp: "高いから買いません",
          reading: "たかいからかいません",
          en: "I won't buy it because it's expensive.",
          zh: "因为太贵了,我不买。",
          code: `import type { IAdjective, ConjugateAdjective, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 高い = IAdjective & { stem: "高"; ending: "い" };
type 買う = GodanVerb & { stem: "買"; ending: "う" };

// 高い (基本形) + から (reason) + 買い (ます形) + ません
type 高いから買いません = \`\${PhraseWithParticle<ConjugateAdjective<高い, "基本形">, "から">}\${ConjugateVerb<買う, "ます形">}ません\`;
`,
        },
        {
          jp: "忙しいので行きません",
          reading: "いそがしいのでいきません",
          en: "I won't go because I'm busy.",
          zh: "因为很忙,我不去。",
          code: `import type { IAdjective, ConjugateAdjective, GodanVerb, ConjugateVerb } from "typed-japanese";

type 忙しい = IAdjective & { stem: "忙し"; ending: "い" };
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 忙しい (基本形) + ので (reason) + 行き (ます形) + ません
type 忙しいので行きません = \`\${ConjugateAdjective<忙しい, "基本形">}ので\${ConjugateVerb<行く, "ます形">}ません\`;
`,
        },
        {
          jp: "雨なので休みます",
          reading: "あめなのでやすみます",
          en: "I'll take a rest because it's raining.",
          zh: "因为下雨,我休息。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type 雨 = ProperNoun<"雨">;
type 休む = GodanVerb & { stem: "休"; ending: "む" };

// 雨 + なので (noun + ので) + 休み (ます形) + ます
type 雨なので休みます = \`\${雨}なので\${ConjugateVerb<休む, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "i14-2",
      titleEn: "が / けど — but, although",
      titleZh: "が / けど ——但是、虽然",
      bodyEn:
        "`が` and `けど` both mark a contrast between two clauses: `[clause A] が/けど、[clause B]`, “A, but B”. `が` is the more formal, written-feeling connective and usually follows the polite form (`高いですが`). `けど` (and its tidier cousin `けれど`) is conversational and follows either plain or polite forms (`高いけど`).\n\nBeyond outright contradiction, both are also used as a soft, non-committal lead-in — “It's a bit expensive, but…” — leaving the rest implied. Don't confuse this clause-linking `が` with the subject-marking particle `が`; here it sits at the end of a whole clause.",
      bodyZh:
        "`が` 和 `けど` 都表示前后两个分句的转折:`[分句 A] が/けど、[分句 B]`,即「A,但是 B」。`が` 更正式、偏书面,通常接礼貌体(`高いですが`)。`けど`(以及更整齐的 `けれど`)偏口语,简体、礼貌体都能接(`高いけど`)。\n\n除了表示明显的对立,两者还常作为委婉的开场白——「虽然有点贵,不过……」——把后半句留给对方意会。注意不要把这个连接分句的 `が` 和作主语标记的助词 `が` 混淆;这里的 `が` 位于整个分句的末尾。",
      examples: [
        {
          jp: "高いですが買います",
          reading: "たかいですがかいます",
          en: "It's expensive, but I'll buy it.",
          zh: "虽然贵,但我还是买。",
          code: `import type { IAdjective, ConjugateAdjective, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 高い = IAdjective & { stem: "高"; ending: "い" };
type 買う = GodanVerb & { stem: "買"; ending: "う" };

// 高いです (丁寧形) + が (contrast) + 買い (ます形) + ます
type 高いですが買います = \`\${PhraseWithParticle<ConjugateAdjective<高い, "丁寧形">, "が">}\${ConjugateVerb<買う, "ます形">}ます\`;
`,
        },
        {
          jp: "安いけど買いません",
          reading: "やすいけどかいません",
          en: "It's cheap, but I won't buy it.",
          zh: "虽然便宜,但我不买。",
          code: `import type { IAdjective, ConjugateAdjective, GodanVerb, ConjugateVerb } from "typed-japanese";

type 安い = IAdjective & { stem: "安"; ending: "い" };
type 買う = GodanVerb & { stem: "買"; ending: "う" };

// 安い (基本形) + けど (contrast) + 買い (ます形) + ません
type 安いけど買いません = \`\${ConjugateAdjective<安い, "基本形">}けど\${ConjugateVerb<買う, "ます形">}ません\`;
`,
        },
        {
          jp: "行きますが遅れます",
          reading: "いきますがおくれます",
          en: "I'll go, but I'll be late.",
          zh: "我会去,不过会迟到。",
          code: `import type { GodanVerb, ConjugateVerb, IchidanVerb } from "typed-japanese";

type 行く = GodanVerb & { stem: "行"; ending: "く" };
type 遅れる = IchidanVerb & { stem: "遅れ"; ending: "る" };

// 行き (ます形) + ますが (polite + contrast) + 遅れ (ます形) + ます
type 行きますが遅れます = \`\${ConjugateVerb<行く, "ます形">}ますが\${ConjugateVerb<遅れる, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "i14-3",
      titleEn: "〜し — and what's more",
      titleZh: "〜し ——而且、再加上",
      bodyEn:
        "`し` stacks up reasons or qualities, often with a “not only… but also…” flavour: `[A] し、[B] し、…`. Unlike a plain list, `し` implies that each item is a *contributing reason* for some conclusion — “It's cheap, and it's tasty too (so let's eat here).”\n\nIt attaches to the plain form of verbs and i-adjectives (`安いし`), and after nouns or na-adjectives you insert `だ` (`便利だし`). A single `し` clause can also stand alone to hint that more reasons exist. You can list one quality with `し` and finish with a polite predicate, as in `安いし便利です`.",
      bodyZh:
        "`し` 用来叠加原因或性质,常带有「不仅……而且……」的语气:`[A] し、[B] し、……`。与单纯的并列不同,`し` 暗示每一项都是得出某结论的*理由之一*——「又便宜,(而且)又好吃(所以就在这儿吃吧)」。\n\n它接动词和形容词的简体(`安いし`),接名词或形容动词时要加 `だ`(`便利だし`)。单独一个 `し` 分句也能暗示「还有别的理由」。可以先用 `し` 列出一项性质,再以礼貌体谓语收尾,如 `安いし便利です`。",
      examples: [
        {
          jp: "安いし便利です",
          reading: "やすいしべんりです",
          en: "It's cheap, and convenient too.",
          zh: "又便宜,而且方便。",
          code: `import type { IAdjective, NaAdjective, ConjugateAdjective } from "typed-japanese";

type 安い = IAdjective & { stem: "安"; ending: "い" };
type 便利 = NaAdjective & { stem: "便利" };

// 安い (基本形) + し + 便利です (na-adj 丁寧形)
type 安いし便利です = \`\${ConjugateAdjective<安い, "基本形">}し\${ConjugateAdjective<便利, "丁寧形">}\`;
`,
        },
        {
          jp: "雨だし寒いです",
          reading: "あめだしさむいです",
          en: "It's raining, and it's cold too.",
          zh: "又下雨,而且又冷。",
          code: `import type { ProperNoun, IAdjective, ConjugateAdjective } from "typed-japanese";

type 雨 = ProperNoun<"雨">;
type 寒い = IAdjective & { stem: "寒"; ending: "い" };

// 雨 + だし (noun + し) + 寒いです (丁寧形)
type 雨だし寒いです = \`\${雨}だし\${ConjugateAdjective<寒い, "丁寧形">}\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
