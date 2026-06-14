import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i09",
  level: "intermediate",
  order: 9,
  titleEn: "Appearance & hearsay",
  titleZh: "样态与传闻",
  summaryEn:
    "Japanese has a family of sentence-final expressions for talking about how things *seem* and what you've *heard*. This chapter sorts out three that learners constantly confuse: `〜そうだ` (it looks like… / I hear that…), `〜らしい` (it seems / apparently, based on evidence or rumour), and `〜みたい` (it's like… / it seems, casual). The key is which form of the preceding word they attach to, and how confident or second-hand the claim is.",
  summaryZh:
    "日语有一组用于表达「看起来怎样」和「听说怎样」的句末表达。本章理清三个最容易混淆的:`〜そうだ`(看起来……/ 听说……)、`〜らしい`(似乎、好像,基于见闻或传闻)、`〜みたい`(像……/ 似乎,口语)。关键在于它们各自接在前词的哪种形式之后,以及说话人的判断有多确定、信息是否来自二手。",
  points: [
    {
      id: "i09-1",
      titleEn: "〜そうだ (appearance) — “it looks like…”",
      titleZh: "〜そうだ(样态)——「看起来……」",
      bodyEn:
        "This `そうだ` expresses a judgement made from what you can *see* — an impression about something that hasn't been confirmed yet. It attaches to **stems**, not plain forms:\n\n- *i*-adjective: drop the final `い` → `おいしい` → `おいしそう` (“looks delicious”).\n- *na*-adjective: just the stem → `元気` → `元気そう` (“looks well”).\n- verb: the `ます`-stem → `降る` → `降り` → `降りそう` (“looks like it'll rain”).\n\nAdd `です` to make it polite. Note the exception `いい` → `よさそう` (not 〜いそう).",
      bodyZh:
        "这个 `そうだ` 表达的是凭眼前所*见*作出的判断——对尚未确认之事的直观印象。它接在**词干**之后,而非简体形:\n\n- *i* 形容词:去掉词尾 `い` → `おいしい` → `おいしそう`(「看起来好吃」)。\n- *na* 形容词:直接用词干 → `元気` → `元気そう`(「看起来很有精神」)。\n- 动词:用 `ます` 词干 → `降る` → `降り` → `降りそう`(「看起来要下雨」)。\n\n加 `です` 即为礼貌体。注意特例 `いい` → `よさそう`(不是 〜いそう)。",
      examples: [
        {
          jp: "このケーキはおいしそうです",
          reading: "このケーキはおいしそうです",
          en: "This cake looks delicious.",
          zh: "这块蛋糕看起来很好吃。",
          code: `import type { ProperNoun, IAdjective, PhraseWithParticle } from "typed-japanese";

type このケーキ = ProperNoun<"このケーキ">;
type おいしい = IAdjective & { stem: "おいし"; ending: "い" };

// i-adjective: drop い (= stem) + そうです
type このケーキはおいしそうです = \`\${PhraseWithParticle<このケーキ, "は">}\${おいしい["stem"]}そうです\`;
`,
        },
        {
          jp: "雨が降りそうです",
          reading: "あめがふりそうです",
          en: "It looks like it's going to rain.",
          zh: "看起来要下雨了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 雨 = ProperNoun<"雨">;
type 降る = GodanVerb & { stem: "降"; ending: "る" };

// verb: ます-stem (降り) + そうです
type 雨が降りそうです = \`\${PhraseWithParticle<雨, "が">}\${ConjugateVerb<降る, "ます形">}そうです\`;
`,
        },
        {
          jp: "彼は元気そうです",
          reading: "かれはげんきそうです",
          en: "He looks well / in good spirits.",
          zh: "他看起来很有精神。",
          code: `import type { ProperNoun, NaAdjective, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 元気 = NaAdjective & { stem: "元気" };

// na-adjective: stem + そうです
type 彼は元気そうです = \`\${PhraseWithParticle<彼, "は">}\${元気["stem"]}そうです\`;
`,
        },
      ],
    },
    {
      id: "i09-2",
      titleEn: "〜そうだ (hearsay) — “I hear that…”",
      titleZh: "〜そうだ(传闻)——「听说……」",
      bodyEn:
        "Confusingly, `そうだ` has a *second* meaning: reporting information you got from somewhere else (the news, a friend, a book). This hearsay `そうだ` attaches to the **plain form** of the whole clause — exactly the opposite of the appearance `そうだ`, which used stems.\n\nCompare: `降りそうだ` (looks like it'll rain — appearance) vs `降るそうだ` (I hear it'll rain — hearsay). You often pair it with `〜によると` (“according to…”). Unlike `〜らしい`, hearsay `そうだ` reports the source's words fairly faithfully.",
      bodyZh:
        "容易混淆的是,`そうだ` 还有*第二个*意思:转述从别处得到的信息(新闻、朋友、书本)。这个传闻 `そうだ` 接在整个小句的**简体形**之后——与接词干的样态 `そうだ` 正好相反。\n\n对比:`降りそうだ`(看起来要下雨——样态)与 `降るそうだ`(听说要下雨——传闻)。它常与 `〜によると`(「据……说」)搭配。与 `〜らしい` 不同,传闻 `そうだ` 较为忠实地转述消息来源的原话。",
      examples: [
        {
          jp: "明日は雨が降るそうです",
          reading: "あしたはあめがふるそうです",
          en: "I hear it's going to rain tomorrow.",
          zh: "听说明天会下雨。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 明日 = ProperNoun<"明日">;
type 雨 = ProperNoun<"雨">;
type 降る = GodanVerb & { stem: "降"; ending: "る" };

// plain (dictionary) form 降る + そうです
type 明日は雨が降るそうです = \`\${PhraseWithParticle<明日, "は">}\${PhraseWithParticle<雨, "が">}\${ConjugateVerb<降る, "辞書形">}そうです\`;
`,
        },
        {
          jp: "田中さんは来週来るそうです",
          reading: "たなかさんはらいしゅうくるそうです",
          en: "I hear Mr. Tanaka is coming next week.",
          zh: "听说田中先生下周来。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 田中さん = ProperNoun<"田中さん">;
type 来週 = ProperNoun<"来週">;
type 来る = IrregularVerb & { dictionary: "来る" };

// plain form 来る + そうです
type 田中さんは来週来るそうです = \`\${PhraseWithParticle<田中さん, "は">}\${来週}\${ConjugateVerb<来る, "辞書形">}そうです\`;
`,
        },
      ],
    },
    {
      id: "i09-3",
      titleEn: "〜らしい — “it seems / apparently”",
      titleZh: "〜らしい ——「似乎、好像」",
      bodyEn:
        "`らしい` expresses a judgement based on outside information you trust but haven't fully verified — things you've heard or read, plus your own reasoning. It feels a little more detached than hearsay `そうだ`: “apparently / it seems that…”.\n\nIt attaches directly to a **noun** or to the **plain form** of verbs and *i*-adjectives (drop `だ` after nouns and *na*-adjectives): `学生らしい` (“seems to be a student”), `おいしいらしい` (“apparently tasty”), `行くらしい` (“seems they're going”).",
      bodyZh:
        "`らしい` 表达基于可信但未完全证实的外部信息所作的判断——听来的、读到的,再加上自己的推理。它比传闻 `そうだ` 更显客观疏离:「似乎 / 好像……」。\n\n它直接接**名词**,或接动词、*i* 形容词的**简体形**(名词和 *na* 形容词后去掉 `だ`):`学生らしい`(「好像是学生」)、`おいしいらしい`(「好像很好吃」)、`行くらしい`(「似乎要去」)。",
      examples: [
        {
          jp: "彼は学生らしいです",
          reading: "かれはがくせいらしいです",
          en: "He seems to be a student.",
          zh: "他好像是学生。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 学生 = ProperNoun<"学生">;

// noun + らしいです (no だ)
type 彼は学生らしいです = \`\${PhraseWithParticle<彼, "は">}\${学生}らしいです\`;
`,
        },
        {
          jp: "あの店は安いらしいです",
          reading: "あのみせはやすいらしいです",
          en: "Apparently that shop is cheap.",
          zh: "听说那家店很便宜。",
          code: `import type { ProperNoun, IAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type あの店 = ProperNoun<"あの店">;
type 安い = IAdjective & { stem: "安"; ending: "い" };

// i-adjective plain form 安い + らしいです
type あの店は安いらしいです = \`\${PhraseWithParticle<あの店, "は">}\${ConjugateAdjective<安い, "基本形">}らしいです\`;
`,
        },
      ],
    },
    {
      id: "i09-4",
      titleEn: "〜みたい — “like… / it seems (casual)”",
      titleZh: "〜みたい ——「像…… / 似乎(口语)」",
      bodyEn:
        "`みたい` is the casual cousin of `〜のようだ`. It has two related jobs:\n\n1. **Resemblance** — “like / similar to”: `子供みたい` (“like a child”).\n2. **Conjecture** — “it seems / looks like”, much like casual `らしい`: `雨みたい` (“looks like rain”).\n\nIt attaches directly to a **noun** or to the **plain form** of verbs and *i*-adjectives (drop `だ` after nouns/*na*-adjectives). Because it behaves like a *na*-adjective, you can add `です` for politeness: `子供みたいです`.",
      bodyZh:
        "`みたい` 是 `〜のようだ` 的口语版,有两个相关用法:\n\n1. **比喻**——「像、类似」:`子供みたい`(「像小孩」)。\n2. **推测**——「似乎、好像」,与口语的 `らしい` 相近:`雨みたい`(「好像要下雨」)。\n\n它直接接**名词**,或接动词、*i* 形容词的**简体形**(名词 /*na* 形容词后去掉 `だ`)。由于它像 *na* 形容词一样活用,可加 `です` 变礼貌体:`子供みたいです`。",
      examples: [
        {
          jp: "彼は子供みたいです",
          reading: "かれはこどもみたいです",
          en: "He's like a child.",
          zh: "他像个小孩。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 子供 = ProperNoun<"子供">;

// noun + みたいです (resemblance)
type 彼は子供みたいです = \`\${PhraseWithParticle<彼, "は">}\${子供}みたいです\`;
`,
        },
        {
          jp: "外は雨みたいです",
          reading: "そとはあめみたいです",
          en: "It looks like it's raining outside.",
          zh: "外面好像在下雨。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 外 = ProperNoun<"外">;
type 雨 = ProperNoun<"雨">;

// noun + みたいです (conjecture)
type 外は雨みたいです = \`\${PhraseWithParticle<外, "は">}\${雨}みたいです\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
