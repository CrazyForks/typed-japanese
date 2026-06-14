import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a11",
  level: "advanced",
  order: 11,
  titleEn: "〜次第 / 〜上で / 〜限り / 〜反面",
  titleZh: "〜次第／〜上で／〜限り／〜反面",
  summaryEn:
    "Four versatile formal connectives. `〜次第` means “as soon as” after a verb stem, but “depending on” after a noun; `〜上で` marks the basis or the “upon doing X” stage on which something rests; `〜限り` sets the boundary “as long as / to the extent that”; and `〜反面` contrasts two sides of one thing, “on the other hand”. This chapter sorts out each shape and its typical partners.",
  summaryZh:
    "四个用途多样的书面接续表达。`〜次第` 接动词连用形时表示「一……就……」,接名词时表示「取决于、视……而定」;`〜上で` 标示「在……基础上」或「(做了)……之后」这一前提阶段;`〜限り` 划定「只要……、在……范围内」的界限;`〜反面` 对照同一事物的两面,意为「另一方面、反过来」。本章逐一厘清各自的接续与常见搭配。",
  points: [
    {
      id: "a11-1",
      titleEn: "〜次第 — as soon as / depending on",
      titleZh: "〜次第 ——「一……就……／取决于」",
      bodyEn:
        "`Verb-ます-stem 次第` means “as soon as / the moment that”. The action in the second clause begins immediately once the first is complete, and that second clause must point to the *future* — you cannot use it for past events.\n\nAttached to a noun, `Noun 次第` shifts meaning to “depending on / determined by”, as in 結果次第 (depending on the result). The same character carries both senses; the part of speech before it tells you which.",
      bodyZh:
        "`动词ます形词干 + 次第` 意为「一……就立刻……」。一旦前项完成,后项动作随即开始,且后项必须指向「未来」—— 不能用于已发生的过去之事。\n\n接在名词后时,`名词 + 次第` 转为「取决于、视……而定」之意,如 結果次第(视结果而定)。同一个词承载两种含义,由它前面的词性决定取哪一种。",
      examples: [
        {
          jp: "駅に着き次第連絡する",
          reading: "えきにつきしだいれんらくする",
          en: "I will contact you as soon as I arrive at the station.",
          zh: "一到车站就联系你。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 駅 = ProperNoun<"駅">;
type 着く = GodanVerb & { stem: "着"; ending: "く" };
type 連絡 = ProperNoun<"連絡">;

// 駅 に + 着き (ます形 stem of 着く) + 次第 + 連絡 + する (literal)
type 駅に着き次第連絡する = \`\${PhraseWithParticle<駅, "に">}\${ConjugateVerb<着く, "ます形">}次第\${連絡}する\`;
`,
        },
        {
          jp: "結果次第で決める",
          reading: "けっかしだいできめる",
          en: "We will decide depending on the result.",
          zh: "视结果而定。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb } from "typed-japanese";

type 結果 = ProperNoun<"結果">;
type 決める = IchidanVerb & { stem: "決め"; ending: "る" };

// 結果 + 次第で + 決める (辞書形)
type 結果次第で決める = \`\${結果}次第で\${ConjugateVerb<決める, "辞書形">}\`;
`,
        },
      ],
    },
    {
      id: "a11-2",
      titleEn: "〜上で — upon doing / in the course of",
      titleZh: "〜上で ——「在……之后／在……方面」",
      bodyEn:
        "`Verb-た形 上で` means “after doing X (and on that basis), …”. The first action is a deliberate prerequisite step; once it is done, the second clause proceeds in light of it — 確認した上で (after confirming).\n\nWith a noun it takes the form `Noun の上で` and means “in terms of / for the purpose of”, marking the domain in which something matters, e.g. 仕事の上で (in one's work). Read 上 as うえ here.",
      bodyZh:
        "`动词た形 + 上で` 意为「(先)做了 X 之后,在此基础上……」。前项是有意为之的前提步骤,完成后,后项据此进行 —— 確認した上で(确认之后)。\n\n接名词时用 `名词 の上で` 的形式,意为「在……方面、为了……」,标示某事所关涉的领域,如 仕事の上で(在工作方面)。此处 上 读作 うえ。",
      examples: [
        {
          jp: "書類を見た上で判断する",
          reading: "しょるいをみたうえではんだんする",
          en: "I will judge after looking at the documents.",
          zh: "看过文件之后再做判断。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 書類 = ProperNoun<"書類">;
type 見る = IchidanVerb & { stem: "見"; ending: "る" };
type 判断 = ProperNoun<"判断">;

// 書類 を + 見た (た形) + 上で + 判断 + する (literal)
type 書類を見た上で判断する = \`\${PhraseWithParticle<書類, "を">}\${ConjugateVerb<見る, "た形">}上で\${判断}する\`;
`,
        },
        {
          jp: "規則の上で問題ない",
          reading: "きそくのうえでもんだいない",
          en: "There is no problem in terms of the rules.",
          zh: "在规则方面没有问题。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 規則 = ProperNoun<"規則">;
type 問題 = ProperNoun<"問題">;

// 規則 の + 上で + 問題 + ない (literal)
type 規則の上で問題ない = \`\${PhraseWithParticle<規則, "の">}上で\${問題}ない\`;
`,
        },
      ],
    },
    {
      id: "a11-3",
      titleEn: "〜限り — as long as / to the extent that",
      titleZh: "〜限り ——「只要……／在……范围内」",
      bodyEn:
        "`Verb-辞書形 / Verb-ている 限り` means “as long as / so far as”. It sets a condition that holds for the whole stretch of the main clause: while that condition stands, the result holds — 生きている限り (as long as I live).\n\nIt also draws a boundary of knowledge or ability: 知る限り (as far as I know), できる限り (to the greatest extent possible). The image is a limit line beyond which the statement no longer applies.",
      bodyZh:
        "`动词辞书形／动词ている + 限り` 意为「只要……、就……的限度而言」。它设定一个贯穿整个主句的条件:只要该条件成立,结果便成立 —— 生きている限り(只要我还活着)。\n\n它也用来划定认知或能力的界限:知る限り(就我所知)、できる限り(尽最大可能)。其意象是一条界线,越过此线该陈述便不再适用。",
      examples: [
        {
          jp: "私が知る限り正しい",
          reading: "わたしがしるかぎりただしい",
          en: "As far as I know, it is correct.",
          zh: "就我所知是正确的。",
          code: `import type { ProperNoun, GodanVerb, IAdjective, ConjugateVerb, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 知る = GodanVerb & { stem: "知"; ending: "る" };
type 正しい = IAdjective & { stem: "正し"; ending: "い" };

// 私 が + 知る (辞書形) + 限り + 正しい (基本形)
type 私が知る限り正しい = \`\${PhraseWithParticle<私, "が">}\${ConjugateVerb<知る, "辞書形">}限り\${ConjugateAdjective<正しい, "基本形">}\`;
`,
        },
        {
          jp: "できる限り努力する",
          reading: "できるかぎりどりょくする",
          en: "I will make every possible effort.",
          zh: "尽最大努力。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb } from "typed-japanese";

type できる = IchidanVerb & { stem: "でき"; ending: "る" };
type 努力 = ProperNoun<"努力">;

// できる (辞書形) + 限り + 努力 + する (literal)
type できる限り努力する = \`\${ConjugateVerb<できる, "辞書形">}限り\${努力}する\`;
`,
        },
      ],
    },
    {
      id: "a11-4",
      titleEn: "〜反面 — on the other hand",
      titleZh: "〜反面 ——「另一方面／反过来」",
      bodyEn:
        "`〜反面` (read はんめん) contrasts two coexisting sides of *the same* subject: “while X, on the other hand Y.” Unlike a plain “but”, it stresses that both qualities belong to one thing at once — convenient yet expensive, kind yet strict.\n\nIt attaches to the plain form of verbs and i-adjectives, and to na-adjectives / nouns with `な` or `である`: 便利な反面, 厳しい反面. The two clauses are usually opposite in evaluation.",
      bodyZh:
        "`〜反面`(读作 はんめん)对照「同一」主体上并存的两面:「虽然 X,但另一方面 Y」。与单纯的「但是」不同,它强调两种性质同时属于一个事物 —— 既方便又贵、既温柔又严格。\n\n它接动词、い形容词的简体,接な形容词/名词时用 `な` 或 `である`:便利な反面、厳しい反面。前后两个小句在评价上通常相反。",
      examples: [
        {
          jp: "この町は静かな反面不便だ",
          reading: "このまちはしずかなはんめんふべんだ",
          en: "This town is quiet, but on the other hand inconvenient.",
          zh: "这个小镇虽然安静,另一方面却不方便。",
          code: `import type { ProperNoun, NaAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 町 = ProperNoun<"町">;
type 静か = NaAdjective & { stem: "静か" };
type 不便 = NaAdjective & { stem: "不便" };

// この + 町 は + 静かな (na-adj 基本形 → 静かな) + 反面 + 不便 + だ (literal copula)
type この町は静かな反面不便だ = \`この\${PhraseWithParticle<町, "は">}\${ConjugateAdjective<静か, "基本形">}反面\${不便["stem"]}だ\`;
`,
        },
        {
          jp: "この仕事は楽しい反面厳しい",
          reading: "このしごとはたのしいはんめんきびしい",
          en: "This job is fun, but on the other hand demanding.",
          zh: "这份工作有趣,另一方面也很严格。",
          code: `import type { ProperNoun, IAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 仕事 = ProperNoun<"仕事">;
type 楽しい = IAdjective & { stem: "楽し"; ending: "い" };
type 厳しい = IAdjective & { stem: "厳し"; ending: "い" };

// この + 仕事 は + 楽しい (基本形) + 反面 + 厳しい (基本形)
type この仕事は楽しい反面厳しい = \`この\${PhraseWithParticle<仕事, "は">}\${ConjugateAdjective<楽しい, "基本形">}反面\${ConjugateAdjective<厳しい, "基本形">}\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
