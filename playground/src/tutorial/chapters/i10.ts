import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i10",
  level: "intermediate",
  order: 10,
  titleEn: "〜はず / 〜べき / 〜わけ",
  titleZh: "〜はず／〜べき／〜わけ",
  summaryEn:
    "Three formal nouns that let you reason about the world rather than just describe it. `〜はずだ` states what *should* logically be true based on what you know; `〜べきだ` states what one *ought* to do as a matter of duty or good sense; and `〜わけだ` says “that's why / no wonder”, presenting something as the natural conclusion of what came before. All three attach to a plain-form clause, so the grammar is light — the work is choosing the right one.",
  summaryZh:
    "三个形式名词,让你不只是描述世界,更能对世界进行推理。`〜はずだ` 根据已知信息陈述「按理应当如此」;`〜べきだ` 从义务或常理出发陈述「应该这么做」;`〜わけだ` 则表示「难怪、原来如此」,把某事呈现为前文的自然结论。三者都接在简体形小句之后,语法负担很轻 —— 难点在于选对哪一个。",
  points: [
    {
      id: "i10-1",
      titleEn: "〜はずだ — “should / is expected to”",
      titleZh: "〜はずだ ——「按理应当、估计」",
      bodyEn:
        "`はず` is a formal noun meaning “(logical) expectation”. You attach it to a plain-form predicate to say “it should be the case that …”, based on evidence or reasoning — not on hope. A verb or い-adjective connects directly (`来るはず`, `高いはず`); a noun or な-adjective links with `の` (`学生のはず`).\n\nThis is *inference*, not obligation: 「彼は来るはずです」 means “he ought to be coming (I have grounds to expect it)”, not “he is obliged to come”. To say something turned out contrary to expectation, use the past `〜はずだった` (“was supposed to …”).",
      bodyZh:
        "`はず` 是表示「(合乎逻辑的)预期」的形式名词。把它接在简体谓语后,表示「按道理应该……」,依据的是证据或推理,而非主观愿望。动词、い形容词直接连接(`来るはず`、`高いはず`);名词和な形容词则用 `の` 连接(`学生のはず`)。\n\n它表达的是「推断」而非「义务」:「彼は来るはずです」意为「他应该会来(我有理由这样预期)」,而不是「他有义务来」。若结果与预期相反,可用过去式 `〜はずだった`(「本应……」)。",
      examples: [
        {
          jp: "彼は来るはずです",
          reading: "かれはくるはずです",
          en: "He should be coming (I expect him to).",
          zh: "他应该会来。",
          code: `import type { ProperNoun, PhraseWithParticle, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 来る = IrregularVerb & { dictionary: "来る" };

// 彼 + は + 来る (辞書形) + はずです
type 彼は来るはずです = \`\${PhraseWithParticle<彼, "は">}\${ConjugateVerb<来る, "辞書形">}はずです\`;
`,
        },
        {
          jp: "この本は高いはずだ",
          reading: "このほんはたかいはずだ",
          en: "This book is bound to be expensive.",
          zh: "这本书估计很贵。",
          code: `import type { ProperNoun, PhraseWithParticle, IAdjective, ConjugateAdjective } from "typed-japanese";

type この本 = ProperNoun<"この本">;
type 高い = IAdjective & { stem: "高"; ending: "い" };

// この本 + は + 高い (基本形) + はずだ
type この本は高いはずだ = \`\${PhraseWithParticle<この本, "は">}\${ConjugateAdjective<高い, "基本形">}はずだ\`;
`,
        },
        {
          jp: "彼女は学生のはずです",
          reading: "かのじょはがくせいのはずです",
          en: "She is supposed to be a student.",
          zh: "她应该是学生。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 彼女 = ProperNoun<"彼女">;
type 学生 = ProperNoun<"学生">;

// 彼女 + は + 学生 + の + はずです (noun links with の)
type 彼女は学生のはずです = \`\${PhraseWithParticle<彼女, "は">}\${PhraseWithParticle<学生, "の">}はずです\`;
`,
        },
      ],
    },
    {
      id: "i10-2",
      titleEn: "〜べきだ — “ought to / should”",
      titleZh: "〜べきだ ——「应该、理应」",
      bodyEn:
        "`べき` expresses what is *right* to do — duty, propriety, or strong advice. It attaches to a verb's dictionary form: 「言うべきだ」 (“ought to say it”), 「行くべきだ」 (“ought to go”). The negative is 「〜べきではない」 (“ought not to”).\n\nOne irregular point: with `する`, both 「するべき」 and the older 「すべき」 are accepted, with 「すべき」 sounding more formal. Unlike `はず` (a prediction), `べき` is a *judgment about behavior*, so it is not normally used for things outside one's control, and it is rarely directed bluntly at a social superior.",
      bodyZh:
        "`べき` 表达「应当」去做的事 —— 义务、情理或强烈建议。它接在动词辞书形之后:「言うべきだ」(「应该说」)、「行くべきだ」(「应该去」)。否定为「〜べきではない」(「不应该」)。\n\n一个不规则之处:接 `する` 时,「するべき」与较古雅的「すべき」均可,后者更显正式。与表预测的 `はず` 不同,`べき` 是对「行为」的价值判断,因此通常不用于无法掌控的事,也很少直接对长辈、上级使用。",
      examples: [
        {
          jp: "本当のことを言うべきだ",
          reading: "ほんとうのことをいうべきだ",
          en: "You ought to tell the truth.",
          zh: "你应该说实话。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 本当のこと = ProperNoun<"本当のこと">;
type 言う = GodanVerb & { stem: "言"; ending: "う" };

// 本当のこと + を + 言う (辞書形) + べきだ
type 本当のことを言うべきだ = \`\${PhraseWithParticle<本当のこと, "を">}\${ConjugateVerb<言う, "辞書形">}べきだ\`;
`,
        },
        {
          jp: "今すぐ病院へ行くべきです",
          reading: "いますぐびょういんへいくべきです",
          en: "You should go to the hospital right now.",
          zh: "你应该马上去医院。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 病院 = ProperNoun<"病院">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 今すぐ + 病院 + へ + 行く (辞書形) + べきです
type 今すぐ病院へ行くべきです = \`今すぐ\${PhraseWithParticle<病院, "へ">}\${ConjugateVerb<行く, "辞書形">}べきです\`;
`,
        },
        {
          jp: "そんなことを言うべきではない",
          reading: "そんなことをいうべきではない",
          en: "You ought not to say such a thing.",
          zh: "不应该说那样的话。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type そんなこと = ProperNoun<"そんなこと">;
type 言う = GodanVerb & { stem: "言"; ending: "う" };

// そんなこと + を + 言う (辞書形) + べきではない (negative)
type そんなことを言うべきではない = \`\${PhraseWithParticle<そんなこと, "を">}\${ConjugateVerb<言う, "辞書形">}べきではない\`;
`,
        },
      ],
    },
    {
      id: "i10-3",
      titleEn: "〜わけだ — “that's why / no wonder”",
      titleZh: "〜わけだ ——「难怪、原来如此」",
      bodyEn:
        "`わけ` is a formal noun meaning “reason / the way things are”. `〜わけだ` presents a statement as the natural, logical consequence of something already known: “so that means …”, “no wonder …”. It attaches like `はず` — verbs and い-adjectives directly, nouns/な-adjectives via `の` (or `な` for な-adjectives).\n\nCompare it to `はず`: `はず` looks *forward* to what you predict, while `わけ` looks *back*, fitting a fact you've just learned into a chain of reasoning. 「寒いわけだ、雪が降っている」 — “No wonder it's cold; it's snowing.” Watch out for two relatives: 「〜わけではない」 (“it's not that …”) and 「〜わけがない」 (“there's no way …”), which mean very different things.",
      bodyZh:
        "`わけ` 是表示「道理、缘由、情形」的形式名词。`〜わけだ` 把一句话呈现为已知事实的自然、合乎逻辑的结果:「这么说来……」「难怪……」。其接续与 `はず` 相同 —— 动词、い形容词直接接,名词和な形容词用 `の`(な形容词也可用 `な`)。\n\n与 `はず` 对比:`はず` 朝「前」预测,`わけ` 朝「后」推断,把刚得知的事实纳入推理链。「寒いわけだ、雪が降っている」——「难怪这么冷,在下雪呢。」另需留意两个近亲:「〜わけではない」(「并不是说……」)与「〜わけがない」(「不可能……」),含义大不相同。",
      examples: [
        {
          jp: "寒いわけだ",
          reading: "さむいわけだ",
          en: "No wonder it's cold.",
          zh: "难怪这么冷。",
          code: `import type { IAdjective, ConjugateAdjective } from "typed-japanese";

type 寒い = IAdjective & { stem: "寒"; ending: "い" };

// 寒い (基本形) + わけだ
type 寒いわけだ = \`\${ConjugateAdjective<寒い, "基本形">}わけだ\`;
`,
        },
        {
          jp: "毎日勉強したわけです",
          reading: "まいにちべんきょうしたわけです",
          en: "So that means you studied every day.",
          zh: "这么说,你是每天都学习了。",
          code: `import type { IrregularVerb, ConjugateVerb } from "typed-japanese";

type する = IrregularVerb & { dictionary: "する" };

// 毎日 + 勉強 + した (た形) + わけです
type 毎日勉強したわけです = \`毎日勉強\${ConjugateVerb<する, "た形">}わけです\`;
`,
        },
        {
          jp: "彼は日本人なわけだ",
          reading: "かれはにほんじんなわけだ",
          en: "So that's why — he's Japanese, after all.",
          zh: "原来如此,他是日本人嘛。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 日本人 = ProperNoun<"日本人">;

// 彼 + は + 日本人 + な + わけだ (noun + な before わけ)
type 彼は日本人なわけだ =\`\${PhraseWithParticle<彼, "は">}\${日本人}なわけだ\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
