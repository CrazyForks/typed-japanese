import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a12",
  level: "advanced",
  order: 12,
  titleEn: "Written & literary style",
  titleZh: "书面语与文语",
  summaryEn:
    "Formal Japanese writing — essays, news, theses, legal text — does not use the conversational `です・ます` style. Instead it relies on the written copula `である`, on compact classical negatives and obligations like `〜ぬ` and `〜ねばならぬ`, and on a handful of fossilised classical (文語) forms such as `〜べき` that still live inside modern prose. This chapter shows the patterns you read constantly but rarely say out loud.",
  summaryZh:
    "正式的日语书面语 —— 论文、新闻、学术、法律文书 —— 不使用口语的 `です・ます` 体,而是采用书面系动词 `である`,以及 `〜ぬ`、`〜ねばならぬ` 等简洁的文语否定与义务表达,还有像 `〜べき` 这样至今仍活在现代文章里的少数文语(古典语)残留形式。本章讲解这些你常读到、却很少说出口的句式。",
  points: [
    {
      id: "a12-1",
      titleEn: "である style — the written copula",
      titleZh: "である 体 —— 书面系动词",
      bodyEn:
        "In formal writing the copula `だ／です` is replaced by `である` (“is / to be”). It carries no politeness; it is simply the neutral, assertive register of essays and reports. A noun-predicate sentence becomes `A は B である`.\n\nNote that `である` takes a topic with `は` just like `です`, but the whole text stays in plain, impersonal style throughout — you never mix `である` and `です` in the same piece. Its negative is `ではない`, its past `であった`.",
      bodyZh:
        "正式书面语中,系动词 `だ／です` 由 `である`(「是」)替代。它不含敬意,只是论文、报告所用的中立、断定的语体。名词谓语句变为「A は B である」。\n\n`である` 同样用 `は` 提示主题,但整篇文章自始至终保持这种朴素、客观的文体 —— 同一篇里不会混用 `である` 与 `です`。其否定为 `ではない`,过去式为 `であった`。",
      examples: [
        {
          jp: "言語は文化である",
          reading: "げんごはぶんかである",
          en: "Language is culture.",
          zh: "语言即文化。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 言語 = ProperNoun<"言語">;
type 文化 = ProperNoun<"文化">;

// 言語 + は + 文化 + である (written copula)
type 言語は文化である = \`\${PhraseWithParticle<言語, "は">}\${文化}である\`;
`,
        },
        {
          jp: "これは重要な問題である",
          reading: "これはじゅうようなもんだいである",
          en: "This is an important problem.",
          zh: "这是一个重要的问题。",
          code: `import type { ProperNoun, NaAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type これ = ProperNoun<"これ">;
type 重要 = NaAdjective & { stem: "重要" };
type 問題 = ProperNoun<"問題">;

// これ + は + 重要な(基本形) + 問題 + である
type これは重要な問題である = \`\${PhraseWithParticle<これ, "は">}\${ConjugateAdjective<重要, "基本形">}\${問題}である\`;
`,
        },
      ],
    },
    {
      id: "a12-2",
      titleEn: "〜ねばならぬ / 〜ねばならない — must (literary)",
      titleZh: "〜ねばならぬ／〜ねばならない ——「必须」(文语)",
      bodyEn:
        "`〜ねばならぬ` is the classical, formal way to say “must / have to”. Take a verb's **negative (ない) stem** and add `ねばならぬ`: `行く → 行か → 行かねばならぬ` (“must go”), `食べる → 食べ → 食べねばならぬ` (“must eat”).\n\nThe ending `ぬ` is itself a classical negative (see the next point); softened to modern style it becomes `〜ねばならない`. The one irregular to memorise is `する → せねばならぬ` (not ✗しねばならぬ).",
      bodyZh:
        "`〜ねばならぬ` 是表达「必须、不得不」的古典、正式说法。取动词的 **否定(ない)词干** 加 `ねばならぬ`:`行く → 行か → 行かねばならぬ`(「必须去」)、`食べる → 食べ → 食べねばならぬ`(「必须吃」)。\n\n词尾 `ぬ` 本身就是文语否定(见下一节);换成现代语体即 `〜ねばならない`。唯一须记的特例是 `する → せねばならぬ`(不是 ✗しねばならぬ)。",
      examples: [
        {
          jp: "我々は行かねばならぬ",
          reading: "われわれはいかねばならぬ",
          en: "We must go.",
          zh: "我们必须前往。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 我々 = ProperNoun<"我々">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 我々 + は + 行か(ない形) + ねばならぬ
type 我々は行かねばならぬ = \`\${PhraseWithParticle<我々, "は">}\${ConjugateVerb<行く, "ない形">}ねばならぬ\`;
`,
        },
        {
          jp: "規則を守らねばならない",
          reading: "きそくをまもらねばならない",
          en: "One must obey the rules.",
          zh: "必须遵守规则。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 規則 = ProperNoun<"規則">;
type 守る = GodanVerb & { stem: "守"; ending: "る" };

// 規則 + を + 守ら(ない形) + ねばならない
type 規則を守らねばならない = \`\${PhraseWithParticle<規則, "を">}\${ConjugateVerb<守る, "ない形">}ねばならない\`;
`,
        },
        {
          jp: "努力せねばならぬ",
          reading: "どりょくせねばならぬ",
          en: "One must make an effort.",
          zh: "必须努力。",
          code: `import type { ProperNoun } from "typed-japanese";

type 努力 = ProperNoun<"努力">;

// する is irregular here: する → せねばならぬ (NOT しねばならぬ). Spelled as a literal.
type 努力せねばならぬ = \`\${努力}せねばならぬ\`;
`,
        },
      ],
    },
    {
      id: "a12-3",
      titleEn: "〜ぬ — the classical negative",
      titleZh: "〜ぬ —— 文语否定",
      bodyEn:
        "`〜ぬ` is the literary ancestor of `〜ない`. It attaches to the same **negative (ない) stem**: `知る → 知ら → 知らぬ` (“not knowing / unknown”), `言う → 言わ → 言わぬ` (“not saying”). You meet it in set phrases (`思わぬ事故` “an unexpected accident”), proverbs, and elevated prose.\n\nAs with `ねばならぬ`, the verb `する` is irregular: its `ぬ` form is `せぬ` (not ✗しぬ). The connective/attributive form before a noun is also `ぬ`, so `知らぬ人` = “a person one does not know”.",
      bodyZh:
        "`〜ぬ` 是 `〜ない` 的文语前身。它接在相同的 **否定(ない)词干** 之后:`知る → 知ら → 知らぬ`(「不知道的/未知的」)、`言う → 言わ → 言わぬ`(「不说的」)。它出现在固定短语(`思わぬ事故`「意外的事故」)、谚语和高雅文章中。\n\n与 `ねばならぬ` 一样,动词 `する` 是特例:其 `ぬ` 形为 `せぬ`(不是 ✗しぬ)。`ぬ` 在名词前作连体形也是同形,故 `知らぬ人` =「不认识的人」。",
      examples: [
        {
          jp: "彼は何も知らぬ",
          reading: "かれはなにもしらぬ",
          en: "He knows nothing.",
          zh: "他一无所知。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 何 = ProperNoun<"何">;
type 知る = GodanVerb & { stem: "知"; ending: "る" };

// 彼 + は + 何 + も + 知ら(ない形) + ぬ
type 彼は何も知らぬ = \`\${PhraseWithParticle<彼, "は">}\${PhraseWithParticle<何, "も">}\${ConjugateVerb<知る, "ない形">}ぬ\`;
`,
        },
        {
          jp: "知らぬ人に声をかけられた",
          reading: "しらぬひとにこえをかけられた",
          en: "A stranger spoke to me.",
          zh: "一个不认识的人跟我搭话了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 知る = GodanVerb & { stem: "知"; ending: "る" };
type 人 = ProperNoun<"人">;
type 声 = ProperNoun<"声">;

// 知ら(ない形) + ぬ + 人 + に + 声 + を + かけられた(literal)
type 知らぬ人に声をかけられた = \`\${ConjugateVerb<知る, "ない形">}ぬ\${PhraseWithParticle<人, "に">}\${PhraseWithParticle<声, "を">}かけられた\`;
`,
        },
      ],
    },
    {
      id: "a12-4",
      titleEn: "〜べき / 〜べし — classical traces in modern writing",
      titleZh: "〜べき／〜べし —— 现代文中的文语残留",
      bodyEn:
        "`べし` is a classical auxiliary meaning “should / ought to / must”. Its sentence-final form `べし` survives in slogans and maxims; its attributive form `べき` is fully alive in modern writing, modifying a following noun: `読むべき本` = “a book one should read”.\n\nAttach `べき` to a verb's **dictionary form**: `行く → 行くべき`, `守る → 守るべき`. The only quirk is `する`, which classically gives `すべき` (though `するべき` is also accepted today). `〜べき` is everywhere in editorials, reports, and formal advice.",
      bodyZh:
        "`べし` 是表示「应当、应该、必须」的文语助动词。其终止形 `べし` 留存于标语与格言;其连体形 `べき` 在现代书面语中完全通用,用来修饰后面的名词:`読むべき本` =「应该读的书」。\n\n把 `べき` 接在动词的 **辞书形(原形)** 后:`行く → 行くべき`、`守る → 守るべき`。唯一的特例是 `する`,文语作 `すべき`(如今 `するべき` 亦可)。`〜べき` 在社论、报告和正式建议中随处可见。",
      examples: [
        {
          jp: "今こそ行動すべし",
          reading: "いまこそこうどうすべし",
          en: "Now is the time to act.",
          zh: "正是该行动之时。",
          code: `import type { ProperNoun } from "typed-japanese";

type 今 = ProperNoun<"今">;
type 行動 = ProperNoun<"行動">;

// 今 + こそ + 行動 + すべし (classical する → すべし, spelled as literal)
type 今こそ行動すべし = \`\${今}こそ\${行動}すべし\`;
`,
        },
        {
          jp: "これは読むべき本である",
          reading: "これはよむべきほんである",
          en: "This is a book one should read.",
          zh: "这是一本应该读的书。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type これ = ProperNoun<"これ">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };
type 本 = ProperNoun<"本">;

// これ + は + 読む(辞書形) + べき + 本 + である
type これは読むべき本である = \`\${PhraseWithParticle<これ, "は">}\${ConjugateVerb<読む, "辞書形">}べき\${本}である\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
