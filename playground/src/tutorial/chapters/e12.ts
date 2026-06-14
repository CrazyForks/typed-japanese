import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e12",
  level: "elementary",
  order: 12,
  titleEn: "Dictionary form & ability",
  titleZh: "辞书形与能力",
  summaryEn:
    "The dictionary form (辞書形) is the plain, uninflected shape of a verb — the form you look up in a dictionary. Beyond casual speech, it is the gateway to many grammar patterns. This chapter shows how to turn a verb into a noun-like concept with `こと`, then use that to say what you *can* do (〜ことができる) and what you *like* doing (〜ことが好きだ).",
  summaryZh:
    "辞书形(辞書形)是动词不经活用的原始形态 —— 也就是在词典里查到的形式。除了用于口语简体,它还是许多语法句型的入口。本章先讲如何用 `こと` 把动词变成名词性概念,再用它来表达「能做某事」(〜ことができる)和「喜欢做某事」(〜ことが好きだ)。",
  points: [
    {
      id: "e12-1",
      titleEn: "Dictionary form (辞書形)",
      titleZh: "辞书形(辞書形)",
      bodyEn:
        "Every verb has a *dictionary form* — the plain present/future form with no `ます`. For `る`-verbs (ichidan) it ends in `る`; for `う`-verbs (godan) it ends in one of `う く ぐ す つ ぬ ぶ む る`; the two irregulars are `する` and `来る`.\n\nThe dictionary form is the casual equivalent of the `ます` form: `食べる` = `食べます` (“eat”). It is also the building block for the patterns later in this chapter — you attach things directly to it.",
      bodyZh:
        "每个动词都有一个「辞书形」—— 不带 `ます` 的原形(表示现在/将来)。一类动词(一段动词)以 `る` 结尾;五段动词以 `う く ぐ す つ ぬ ぶ む る` 之一结尾;两个不规则动词是 `する` 和 `来る`。\n\n辞书形是 `ます` 形的简体对应:`食べる` = `食べます`(吃)。它同时也是本章后续句型的基础 —— 后面的成分会直接接在它上面。",
      examples: [
        {
          jp: "私は寿司を食べる",
          reading: "わたしはすしをたべる",
          en: "I eat sushi.",
          zh: "我吃寿司。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 寿司 = ProperNoun<"寿司">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// 私 + は + 寿司 + を + 食べる(辞書形)
type 私は寿司を食べる = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<寿司, "を">}\${ConjugateVerb<食べる, "辞書形">}\`;
`,
        },
        {
          jp: "毎日本を読む",
          reading: "まいにちほんをよむ",
          en: "(I) read books every day.",
          zh: "(我)每天看书。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 本 = ProperNoun<"本">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };

// 毎日 + 本 + を + 読む(辞書形)
type 毎日本を読む = \`毎日\${PhraseWithParticle<本, "を">}\${ConjugateVerb<読む, "辞書形">}\`;
`,
        },
      ],
    },
    {
      id: "e12-2",
      titleEn: "Nominalizing with こと",
      titleZh: "用 こと 名词化",
      bodyEn:
        "Placing `こと` after a dictionary-form verb turns the whole action into a noun-like concept: `読む` (to read) → `読むこと` (reading / the act of reading). This “nominalized” phrase can then take particles like any noun.\n\nThis is the key move behind both `〜ことができる` and `〜ことが好きだ` below: first make the verb into a *thing*, then talk about that thing.",
      bodyZh:
        "在辞书形动词后面加 `こと`,就把整个动作变成名词性的概念:`読む`(读)→ `読むこと`(读书这件事 / 阅读)。这个「名词化」后的短语之后就能像普通名词一样接助词。\n\n这正是下文 `〜ことができる` 和 `〜ことが好きだ` 的核心做法:先把动词变成一个「东西」,再去谈论这个东西。",
      examples: [
        {
          jp: "泳ぐことは楽しい",
          reading: "およぐことはたのしい",
          en: "Swimming is fun.",
          zh: "游泳很开心。",
          code: `import type { GodanVerb, ConjugateVerb, IAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 泳ぐ = GodanVerb & { stem: "泳"; ending: "ぐ" };
type 楽しい = IAdjective & { stem: "楽し"; ending: "い" };

// 泳ぐ(辞書形) + こと + は + 楽しい(基本形)
type 泳ぐことは楽しい = \`\${PhraseWithParticle<\`\${ConjugateVerb<泳ぐ, "辞書形">}こと\`, "は">}\${ConjugateAdjective<楽しい, "基本形">}\`;
`,
        },
        {
          jp: "本を読むことが好きです",
          reading: "ほんをよむことがすきです",
          en: "(I) like reading books.",
          zh: "(我)喜欢看书。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, NaAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 本 = ProperNoun<"本">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };
type 好き = NaAdjective & { stem: "好き" };

// 本を + 読むこと + が + 好きです(丁寧形)
type 本を読むことが好きです = \`\${PhraseWithParticle<本, "を">}\${PhraseWithParticle<\`\${ConjugateVerb<読む, "辞書形">}こと\`, "が">}\${ConjugateAdjective<好き, "丁寧形">}\`;
`,
        },
      ],
    },
    {
      id: "e12-3",
      titleEn: "Ability: 〜ことができる",
      titleZh: "能力:〜ことができる",
      bodyEn:
        "To say someone *can* do something, use `[dictionary verb] + ことができる` — literally “the act of …-ing is possible”. The polite form is `ことができます`. `できる` is the potential form of `する`, so the pattern means “…-ing can be done”.\n\nThis is one of two ways to express ability in Japanese (the other is the verb's potential form). The `ことができる` pattern is a little more formal and works uniformly for every verb.",
      bodyZh:
        "要表达某人「能」做某事,用 `[辞书形动词] + ことができる`,字面意思是「做……这件事是可能的」。礼貌形是 `ことができます`。`できる` 是 `する` 的可能形,所以这个句型表示「……是能做到的」。\n\n这是日语表达能力的两种方式之一(另一种是动词的可能形)。`ことができる` 句型略显郑重,且对所有动词都通用。",
      examples: [
        {
          jp: "私は日本語を話すことができます",
          reading: "わたしはにほんごをはなすことができます",
          en: "I can speak Japanese.",
          zh: "我会说日语。",
          code: `import type { ProperNoun, GodanVerb, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 日本語 = ProperNoun<"日本語">;
type 話す = GodanVerb & { stem: "話"; ending: "す" };
type する = IrregularVerb & { dictionary: "する" };

// できます = する の可能形(でき) + ます
// 私は + 日本語を + 話すこと + が + できます
type 私は日本語を話すことができます = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<日本語, "を">}\${PhraseWithParticle<\`\${ConjugateVerb<話す, "辞書形">}こと\`, "が">}\${ConjugateVerb<する, "可能形">}ます\`;
`,
        },
        {
          jp: "彼はピアノを弾くことができる",
          reading: "かれはピアノをひくことができる",
          en: "He can play the piano.",
          zh: "他会弹钢琴。",
          code: `import type { ProperNoun, GodanVerb, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type ピアノ = ProperNoun<"ピアノ">;
type 弾く = GodanVerb & { stem: "弾"; ending: "く" };
type する = IrregularVerb & { dictionary: "する" };

// できる = する の可能形(でき) + る
type 彼はピアノを弾くことができる = \`\${PhraseWithParticle<彼, "は">}\${PhraseWithParticle<ピアノ, "を">}\${PhraseWithParticle<\`\${ConjugateVerb<弾く, "辞書形">}こと\`, "が">}\${ConjugateVerb<する, "可能形">}る\`;
`,
        },
      ],
    },
    {
      id: "e12-4",
      titleEn: "Preference: 〜ことが好きだ",
      titleZh: "喜好:〜ことが好きだ",
      bodyEn:
        "`好き` (suki) is a `な`-adjective meaning “liked / favorite”. The thing you like is marked with `が`, so to say you like *doing* something you nominalize the verb first: `[dictionary verb] + ことが好きだ` (“…-ing is liked (by me)”). Polite: `ことが好きです`.\n\nThe same frame works for `嫌い` (disliked) and `上手 / 下手` (good at / bad at) — anything that takes `が` for its object.",
      bodyZh:
        "`好き`(suki)是一个 `な` 形容词,意思是「喜欢的、喜爱的」。所喜欢的对象用 `が` 标记,所以要说喜欢「做」某事,要先把动词名词化:`[辞书形动词] + ことが好きだ`(「……这件事(我)喜欢」)。礼貌形:`ことが好きです`。\n\n同样的框架也适用于 `嫌い`(讨厌)和 `上手 / 下手`(擅长 / 不擅长)—— 凡是用 `が` 接对象的词都行。",
      examples: [
        {
          jp: "私は泳ぐことが好きだ",
          reading: "わたしはおよぐことがすきだ",
          en: "I like swimming.",
          zh: "我喜欢游泳。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, NaAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 泳ぐ = GodanVerb & { stem: "泳"; ending: "ぐ" };
type 好き = NaAdjective & { stem: "好き" };

// 好きだ = 好き(な形容詞) + だ
// 私は + 泳ぐこと + が + 好き + だ
type 私は泳ぐことが好きだ = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<\`\${ConjugateVerb<泳ぐ, "辞書形">}こと\`, "が">}\${好き["stem"]}だ\`;
`,
        },
        {
          jp: "母は料理をすることが好きです",
          reading: "はははりょうりをすることがすきです",
          en: "My mother likes cooking.",
          zh: "我妈妈喜欢做饭。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, NaAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 母 = ProperNoun<"母">;
type 料理 = ProperNoun<"料理">;
type する = IrregularVerb & { dictionary: "する" };
type 好き = NaAdjective & { stem: "好き" };

// 母は + 料理を + すること + が + 好きです(丁寧形)
type 母は料理をすることが好きです = \`\${PhraseWithParticle<母, "は">}\${PhraseWithParticle<料理, "を">}\${PhraseWithParticle<\`\${ConjugateVerb<する, "辞書形">}こと\`, "が">}\${ConjugateAdjective<好き, "丁寧形">}\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
