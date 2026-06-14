import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a04",
  level: "advanced",
  order: 4,
  titleEn: "〜ざるを得ない / 〜ずにはいられない",
  titleZh: "〜ざるを得ない／〜ずにはいられない",
  summaryEn:
    "Two formal patterns built on the old negative base in 〜ず express that an action is unavoidable. `〜ざるを得ない` means “have no choice but to —”, framing the act as an external obligation one would rather refuse. `〜ずにはいられない` means “cannot help but —”, framing it as an internal urge one cannot suppress. This chapter contrasts the duty-driven and the impulse-driven flavours of “cannot not do it”.",
  summaryZh:
    "本章介绍两个建立在文语否定形「〜ず」之上的郑重句型,都用来表达「不得不」做某事。`〜ざるを得ない` 意为「除此之外别无选择」,强调外在的、令人不情愿的义务;`〜ずにはいられない` 意为「忍不住、不由得」,强调内心无法抑制的冲动。两者一个出于责任,一个出于本能,都在说「不能不做」。",
  points: [
    {
      id: "a04-1",
      titleEn: "〜ざるを得ない — have no choice but to",
      titleZh: "〜ざるを得ない ——「不得不」",
      bodyEn:
        "`〜ざるを得ない` (zaru o enai) attaches to a verb's **ない-stem** (the negative base, e.g. 行か-, 認め-) and means “cannot avoid doing —”, i.e. “have no choice but to —”. Literally it is the classical negative 〜ざる plus 得ない “cannot obtain”, so “cannot not do it”.\n\nThe tone is formal and reluctant: the speaker would rather not, but circumstances or duty force the action. Build it as `Verb-ない-stem + ざるを得ない` — note you drop the modern ない and append ざるを得ない directly to the stem.",
      bodyZh:
        "`〜ざるを得ない`(zaru o enai)接在动词的**ない形词干**(否定基,如 行か-、認め-)之后,意为「无法避免做某事」,即「不得不」。它由文语否定「〜ざる」加上「得ない」(无法得到)构成,字面即「不能不做」。\n\n语气郑重而无奈:说话人其实并不情愿,但形势或责任迫使其行动。构造方式为「动词ない形词干 + ざるを得ない」—— 注意要去掉现代的「ない」,把「ざるを得ない」直接接在词干上。",
      examples: [
        {
          jp: "私は行かざるを得ない",
          reading: "わたしはいかざるをえない",
          en: "I have no choice but to go.",
          zh: "我不得不去。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 私 は + 行か (ない形 stem) + ざるを得ない
type 私は行かざるを得ない = \`\${PhraseWithParticle<私, "は">}\${ConjugateVerb<行く, "ない形">}ざるを得ない\`;
`,
        },
        {
          jp: "失敗を認めざるを得ない",
          reading: "しっぱいをみとめざるをえない",
          en: "I have no choice but to admit the failure.",
          zh: "不得不承认失败。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 失敗 = ProperNoun<"失敗">;
type 認める = IchidanVerb & { stem: "認め"; ending: "る" };

// 失敗 を + 認め (ない形 stem) + ざるを得ない
type 失敗を認めざるを得ない = \`\${PhraseWithParticle<失敗, "を">}\${ConjugateVerb<認める, "ない形">}ざるを得ない\`;
`,
        },
      ],
    },
    {
      id: "a04-2",
      titleEn: "Irregular forms: する → せざるを得ない",
      titleZh: "不规则形:する → せざるを得ない",
      bodyEn:
        "Because `〜ざるを得ない` derives from classical grammar, the irregular verb `する` does **not** use its modern ない-stem (し). Instead it takes the classical base `せ`, giving `せざるを得ない`. So 我慢する (to endure) → 我慢せざるを得ない “have no choice but to put up with it”.\n\nThis `せ` form is fixed and must be memorised; you cannot derive it from the modern conjugation. Everything after the verb works exactly as in the previous point.",
      bodyZh:
        "由于 `〜ざるを得ない` 来自文语语法,不规则动词 `する` **不**使用现代的 ない形词干(し),而是取文语的「せ」,构成 `せざるを得ない`。因此 我慢する(忍耐)→ 我慢せざるを得ない「不得不忍耐」。\n\n这个「せ」形是固定的,需要记住,无法从现代变位推导出来。动词之后的部分则与上一节完全一致。",
      examples: [
        {
          jp: "私は我慢せざるを得ない",
          reading: "わたしはがまんせざるをえない",
          en: "I have no choice but to endure it.",
          zh: "我不得不忍耐。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 我慢 = ProperNoun<"我慢">;

// する verb: classical base せ → 我慢せざるを得ない (せ spelled literally)
type 私は我慢せざるを得ない = \`\${PhraseWithParticle<私, "は">}\${我慢}せざるを得ない\`;
`,
        },
        {
          jp: "計画を中止せざるを得ない",
          reading: "けいかくをちゅうしせざるをえない",
          en: "We have no choice but to cancel the plan.",
          zh: "不得不中止计划。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 計画 = ProperNoun<"計画">;
type 中止 = ProperNoun<"中止">;

// 計画 を + 中止 + せざるを得ない
type 計画を中止せざるを得ない = \`\${PhraseWithParticle<計画, "を">}\${中止}せざるを得ない\`;
`,
        },
      ],
    },
    {
      id: "a04-3",
      titleEn: "〜ずにはいられない — cannot help but",
      titleZh: "〜ずにはいられない ——「忍不住、不由得」",
      bodyEn:
        "`〜ずにはいられない` also attaches to the verb's **ない-stem**, but expresses an inner impossibility: “cannot help but —”, “cannot keep from —”. Literally “cannot exist (いられない) without doing (〜ずには)”, it describes an urge too strong to suppress.\n\nContrast with point 1: `〜ざるを得ない` is outer obligation (duty forces me), while `〜ずにはいられない` is inner compulsion (feeling overwhelms me). Build it as `Verb-ない-stem + ずにはいられない`.",
      bodyZh:
        "`〜ずにはいられない` 同样接在动词的**ない形词干**之后,但表达的是一种内心的「无法做到不…」:「忍不住」「不由得」。字面意为「不做(〜ずには)就无法保持(いられない)」,描述强烈到无法压抑的冲动。\n\n与第一节对比:`〜ざるを得ない` 是外在义务(责任逼我做),而 `〜ずにはいられない` 是内心冲动(情感压倒了我)。构造方式为「动词ない形词干 + ずにはいられない」。",
      examples: [
        {
          jp: "私は笑わずにはいられない",
          reading: "わたしはわらわずにはいられない",
          en: "I can't help but laugh.",
          zh: "我忍不住要笑。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 笑う = GodanVerb & { stem: "笑"; ending: "う" };

// 私 は + 笑わ (ない形 stem) + ずにはいられない
type 私は笑わずにはいられない = \`\${PhraseWithParticle<私, "は">}\${ConjugateVerb<笑う, "ない形">}ずにはいられない\`;
`,
        },
        {
          jp: "真実を疑わずにはいられない",
          reading: "しんじつをうたがわずにはいられない",
          en: "I can't help but doubt the truth.",
          zh: "我不由得怀疑起真相来。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 真実 = ProperNoun<"真実">;
type 疑う = GodanVerb & { stem: "疑"; ending: "う" };

// 真実 を + 疑わ (ない形 stem) + ずにはいられない
type 真実を疑わずにはいられない = \`\${PhraseWithParticle<真実, "を">}\${ConjugateVerb<疑う, "ない形">}ずにはいられない\`;
`,
        },
      ],
    },
    {
      id: "a04-4",
      titleEn: "Irregular forms: する → せずにはいられない",
      titleZh: "不规则形:する → せずにはいられない",
      bodyEn:
        "Just like `〜ざるを得ない`, the pattern `〜ずにはいられない` takes the classical base `せ` for `する`-verbs, not the modern し. So 心配する (to worry) → 心配せずにはいられない “cannot help worrying”, and 感動する (to be moved) → 感動せずにはいられない “cannot help but be moved”.\n\nRemember the `せ` is fixed for both patterns in this chapter. With this irregular form mastered, you can pair either ending with any する-noun.",
      bodyZh:
        "与 `〜ざるを得ない` 一样,`〜ずにはいられない` 对 `する` 类动词也取文语基「せ」,而不是现代的「し」。因此 心配する(担心)→ 心配せずにはいられない「忍不住担心」,感動する(感动)→ 感動せずにはいられない「不由得感动」。\n\n请记住:本章两个句型中的「せ」都是固定的。掌握了这个不规则形之后,你就可以把任一词尾接到任何「する 名词」上。",
      examples: [
        {
          jp: "私は心配せずにはいられない",
          reading: "わたしはしんぱいせずにはいられない",
          en: "I can't help but worry.",
          zh: "我忍不住担心。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 心配 = ProperNoun<"心配">;

// する verb: classical base せ → 心配せずにはいられない (せ spelled literally)
type 私は心配せずにはいられない = \`\${PhraseWithParticle<私, "は">}\${心配}せずにはいられない\`;
`,
        },
        {
          jp: "彼の歌に感動せずにはいられない",
          reading: "かれのうたにかんどうせずにはいられない",
          en: "I can't help but be moved by his song.",
          zh: "我不由得被他的歌打动。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 歌 = ProperNoun<"歌">;
type 感動 = ProperNoun<"感動">;

// 彼 の + 歌 に + 感動 + せずにはいられない
type 彼の歌に感動せずにはいられない = \`\${PhraseWithParticle<彼, "の">}\${PhraseWithParticle<歌, "に">}\${感動}せずにはいられない\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
