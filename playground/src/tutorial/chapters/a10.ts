import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a10",
  level: "advanced",
  order: 10,
  titleEn: "〜ばかりか / 〜どころか / 〜のみならず",
  titleZh: "〜ばかりか／〜どころか／〜のみならず",
  summaryEn:
    "Three “not only …” connectives that escalate a statement, but each in its own direction. `〜ばかりか` adds a stronger, often surprising fact on top of the first (“not only X, but even Y”). `〜どころか` overturns an expectation (“far from X, actually the opposite”). `〜のみならず` is the formal, written counterpart of `ばかりか`, common in essays and speeches. This chapter pins down what each adds and the register it belongs to.",
  summaryZh:
    "三个表示「不仅……」的递进连接表达,但各自的方向不同。`〜ばかりか` 在前项之上叠加一个更强、往往出人意料的事实(「不仅 X,甚至 Y」)。`〜どころか` 推翻预期(「别说 X 了,反而相反」)。`〜のみならず` 是 `ばかりか` 的书面、正式对应形式,多见于论说文与演讲。本章厘清三者各自添加的内容及其语体。",
  points: [
    {
      id: "a10-1",
      titleEn: "〜ばかりか — not only … (but even)",
      titleZh: "〜ばかりか ——「不仅……(甚至)」",
      bodyEn:
        "`〜ばかりか` means “not only X, but even Y”. It presents X as already true, then adds Y, which goes a step *further* and is usually more extreme or surprising. The second part frequently carries `も` or `さえ` to underline the escalation.\n\nIt attaches to the plain form of verbs and i-adjectives, to na-adjectives + `な`, and directly to nouns. The added clause may be positive or negative, but it always pushes in the *same* direction as the first — unlike `どころか`, which reverses it.",
      bodyZh:
        "`〜ばかりか` 意为「不仅 X,甚至 Y」。它把 X 当作已然成立的事实,再补充 Y,而 Y 更进一层,通常更极端、更出人意料。后项常伴随 `も` 或 `さえ` 来强调递进。\n\n它接在动词、形容词的普通形之后,接在形容动词 + `な` 之后,也可直接接名词。补充的小句可正可负,但方向始终与前项*一致* —— 这一点与会反转方向的 `どころか` 不同。",
      examples: [
        {
          jp: "彼は英語ばかりか中国語も話す",
          reading: "かれはえいごばかりかちゅうごくごもはなす",
          en: "He speaks not only English but Chinese as well.",
          zh: "他不仅会说英语,还会说中文。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 英語 = ProperNoun<"英語">;
type 中国語 = ProperNoun<"中国語">;
type 話す = GodanVerb & { stem: "話"; ending: "す" };

// 彼 は + 英語 + ばかりか + 中国語 も + 話す (辞書形)
type 彼は英語ばかりか中国語も話す = \`\${PhraseWithParticle<彼, "は">}\${英語}ばかりか\${PhraseWithParticle<中国語, "も">}\${ConjugateVerb<話す, "辞書形">}\`;
`,
        },
        {
          jp: "彼女は美しいばかりか優しい",
          reading: "かのじょはうつくしいばかりかやさしい",
          en: "She is not only beautiful but also kind.",
          zh: "她不仅漂亮,而且温柔。",
          code: `import type { ProperNoun, IAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 彼女 = ProperNoun<"彼女">;
type 美しい = IAdjective & { stem: "美し"; ending: "い" };
type 優しい = IAdjective & { stem: "優し"; ending: "い" };

// 彼女 は + 美しい (基本形) + ばかりか + 優しい (基本形)
type 彼女は美しいばかりか優しい = \`\${PhraseWithParticle<彼女, "は">}\${ConjugateAdjective<美しい, "基本形">}ばかりか\${ConjugateAdjective<優しい, "基本形">}\`;
`,
        },
      ],
    },
    {
      id: "a10-2",
      titleEn: "〜どころか — far from … / on the contrary",
      titleZh: "〜どころか ——「别说……、反而」",
      bodyEn:
        "`〜どころか` overturns the listener's expectation: “far from X, in fact the opposite”. It says that the reality is not merely *not* X — it is at the other extreme. English equivalents are “far from …”, “let alone …”, and “on the contrary”.\n\nThere are two flavours. With a contrast (X どころか Y), Y is the surprising opposite (“far from rich, he's poor”). With a scaling phrase (X どころか Y も …ない), it denies even the smaller Y (“can't afford a car, let alone a house”). It attaches to plain forms and to bare nouns.",
      bodyZh:
        "`〜どころか` 推翻听者的预期:「别说 X 了,实际上正相反」。它表示现实不只是「并非 X」,而是走到了另一个极端。对应英语的 “far from …”“let alone …” 以及 “on the contrary”。\n\n它有两种用法。表对比(X どころか Y)时,Y 是出人意料的相反情况(「别说有钱,他穷得很」)。表程度递降(X どころか Y も …ない)时,连更小的 Y 都加以否定(「别说房子,连车都买不起」)。它接在普通形和裸名词之后。",
      examples: [
        {
          jp: "彼はお金持ちどころか貧乏だ",
          reading: "かれはおかねもちどころかびんぼうだ",
          en: "Far from being rich, he is poor.",
          zh: "他别说有钱了,反而很穷。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type お金持ち = ProperNoun<"お金持ち">;
type 貧乏 = ProperNoun<"貧乏">;

// 彼 は + お金持ち + どころか + 貧乏 だ
type 彼はお金持ちどころか貧乏だ = \`\${PhraseWithParticle<彼, "は">}\${お金持ち}どころか\${PhraseWithParticle<貧乏, "だ">}\`;
`,
        },
        {
          jp: "休むどころか働いた",
          reading: "やすむどころかはたらいた",
          en: "Far from resting, I worked.",
          zh: "别说休息了,反而干了活。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 休む = GodanVerb & { stem: "休"; ending: "む" };
type 働く = GodanVerb & { stem: "働"; ending: "く" };

// 休む (辞書形) + どころか + 働いた (た形)
type 休むどころか働いた = \`\${ConjugateVerb<休む, "辞書形">}どころか\${ConjugateVerb<働く, "た形">}\`;
`,
        },
      ],
    },
    {
      id: "a10-3",
      titleEn: "〜のみならず — not only … but also (formal)",
      titleZh: "〜のみならず ——「不仅……而且」(书面)",
      bodyEn:
        "`〜のみならず` is the literary, formal equivalent of `ばかりか` / `だけでなく`: “not only X but also Y”. You meet it in essays, news, and speeches rather than casual talk. The following clause typically adds a broader or weightier point and often carries `も`.\n\nIt attaches directly to nouns and to the plain form of verbs and i-adjectives; na-adjectives take `である` before it (静かであるのみならず). The phrase frames X as just one part of a larger truth that Y completes.",
      bodyZh:
        "`〜のみならず` 是 `ばかりか` / `だけでなく` 的文言、书面对应形式:「不仅 X,而且 Y」。它出现在论说文、新闻和演讲中,而非日常口语。后续小句通常补充范围更广或分量更重的内容,且常带 `も`。\n\n它直接接名词,以及动词、形容词的普通形;形容动词需先加 `である`(静かであるのみならず)。该表达把 X 视为更大事实的一部分,而由 Y 来补全。",
      examples: [
        {
          jp: "学生のみならず先生も来た",
          reading: "がくせいのみならずせんせいもきた",
          en: "Not only the students but also the teachers came.",
          zh: "不仅学生,连老师也来了。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 学生 = ProperNoun<"学生">;
type 先生 = ProperNoun<"先生">;
type 来る = IrregularVerb & { dictionary: "来る" };

// 学生 + のみならず + 先生 も + 来た (た形 of 来る)
type 学生のみならず先生も来た = \`\${学生}のみならず\${PhraseWithParticle<先生, "も">}\${ConjugateVerb<来る, "た形">}\`;
`,
        },
        {
          jp: "国内のみならず海外でも有名だ",
          reading: "こくないのみならずかいがいでもゆうめいだ",
          en: "It is famous not only domestically but also abroad.",
          zh: "它不仅在国内,在海外也很有名。",
          code: `import type { ProperNoun } from "typed-japanese";

type 国内 = ProperNoun<"国内">;
type 海外 = ProperNoun<"海外">;
type 有名 = ProperNoun<"有名">;

// 国内 + のみならず + 海外 + でも + 有名だ
type 国内のみならず海外でも有名だ = \`\${国内}のみならず\${海外}でも\${有名}だ\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
