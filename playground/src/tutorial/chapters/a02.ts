import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a02",
  level: "advanced",
  order: 2,
  titleEn: "〜ものだ / 〜ことだ",
  titleZh: "〜ものだ／〜ことだ",
  summaryEn:
    "Two sentence-final expressions built on the formal nouns もの and こと. `〜ものだ` states a general truth or the natural way things are, and—after a past-tense verb—voices warm nostalgia (“I used to…”). `〜ことだ` delivers pointed advice (“the thing to do is…”) and, after an adjective, becomes an exclamation. Same surface shape だ, very different jobs.",
  summaryZh:
    "两个建立在形式名词 もの 和 こと 之上的句末表达。`〜ものだ` 用来陈述普遍真理、事物本来的样子;接在动词过去式后,则抒发怀旧之情(「过去常常……」)。`〜ことだ` 用来提出忠告(「该做的事就是……」),接在形容词后则构成感叹。同样以 だ 结尾,职责却大不相同。",
  points: [
    {
      id: "a02-1",
      titleEn: "〜ものだ — general truth / the way things are",
      titleZh: "〜ものだ ——普遍真理／事物本然",
      bodyEn:
        "Attach `ものだ` to the plain (dictionary) form of a verb or adjective to state something as a general, almost self-evident truth — how things essentially are or what naturally happens.\n\nThe `もの` here is a formal noun (it does not mean a physical “thing”); `だ` is the plain copula. This is the voice of proverbs and life wisdom: `子供は遊ぶものだ` — “Children are creatures that play / children just naturally play.” In polite speech `だ` becomes `です`.",
      bodyZh:
        "把 `ものだ` 接在动词或形容词的简体(辞书形)之后,可以把某事陈述为一种普遍的、近乎不言自明的真理 —— 事物本来如此,或某事自然会发生。\n\n这里的 `もの` 是形式名词(并非指具体的「东西」);`だ` 是简体系动词。这是谚语与人生道理的口吻:`子供は遊ぶものだ` ——「小孩子就是爱玩的」。礼貌体里 `だ` 会变成 `です`。",
      examples: [
        {
          jp: "子供は遊ぶものだ",
          reading: "こどもはあそぶものだ",
          en: "Children just naturally play (that's what children do).",
          zh: "小孩子就是爱玩的。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 子供 = ProperNoun<"子供">;
type 遊ぶ = GodanVerb & { stem: "遊"; ending: "ぶ" };

// 子供 + は + 遊ぶ(辞書形) + ものだ
type 子供は遊ぶものだ = \`\${PhraseWithParticle<子供, "は">}\${ConjugateVerb<遊ぶ, "辞書形">}ものだ\`;
`,
        },
        {
          jp: "時間は早く過ぎるものだ",
          reading: "じかんははやくすぎるものだ",
          en: "Time naturally passes quickly.",
          zh: "时间总是过得很快的。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 時間 = ProperNoun<"時間">;
type 過ぎる = IchidanVerb & { stem: "過ぎ"; ending: "る" };

// 時間 + は + 早く + 過ぎる(辞書形) + ものだ
type 時間は早く過ぎるものだ = \`\${PhraseWithParticle<時間, "は">}早く\${ConjugateVerb<過ぎる, "辞書形">}ものだ\`;
`,
        },
      ],
    },
    {
      id: "a02-2",
      titleEn: "〜たものだ — nostalgia (“I used to…”)",
      titleZh: "〜たものだ ——怀旧(「过去常常……」)",
      bodyEn:
        "After the past (`た`) form of a verb, `ものだ` no longer states a truth — it looks back fondly on a habit or scene from the past. `昔はよく泳いだものだ` means “Back then I used to swim a lot,” coloured with warm reminiscence rather than plain fact.\n\nThe adverb `よく` (often) and time words like `昔` (long ago) frequently appear, reinforcing the recollective mood.",
      bodyZh:
        "接在动词的过去式(`た`形)之后,`ものだ` 就不再陈述真理,而是深情地回顾过去的习惯或情景。`昔はよく泳いだものだ` 意为「以前我常常游泳」,带着温暖的怀念,而非单纯的事实。\n\n常与副词 `よく`(经常)以及 `昔`(从前)等时间词搭配,强化追忆的语气。",
      examples: [
        {
          jp: "昔はよく泳いだものだ",
          reading: "むかしはよくおよいだものだ",
          en: "Back then I used to swim a lot.",
          zh: "以前我常常去游泳。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 昔 = ProperNoun<"昔">;
type 泳ぐ = GodanVerb & { stem: "泳"; ending: "ぐ" };

// 昔 + は + よく + 泳いだ(た形) + ものだ
type 昔はよく泳いだものだ = \`\${PhraseWithParticle<昔, "は">}よく\${ConjugateVerb<泳ぐ, "た形">}ものだ\`;
`,
        },
        {
          jp: "子供の頃はよく遊んだものだ",
          reading: "こどものころはよくあそんだものだ",
          en: "When I was a child I used to play a lot.",
          zh: "小时候我常常玩耍。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 子供の頃 = ProperNoun<"子供の頃">;
type 遊ぶ = GodanVerb & { stem: "遊"; ending: "ぶ" };

// 子供の頃 + は + よく + 遊んだ(た形) + ものだ
type 子供の頃はよく遊んだものだ = \`\${PhraseWithParticle<子供の頃, "は">}よく\${ConjugateVerb<遊ぶ, "た形">}ものだ\`;
`,
        },
      ],
    },
    {
      id: "a02-3",
      titleEn: "〜ことだ — advice (“the thing to do is…”)",
      titleZh: "〜ことだ ——忠告(「该做的就是……」)",
      bodyEn:
        "Attach `ことだ` to the dictionary form of a verb to give firm, direct advice: “what you should do is…”. `毎日練習することだ` — “The thing to do is practise every day.” It singles out one concrete action as the recommended course.\n\nUnlike `ものだ` (a general truth about the world), `ことだ` is aimed at a specific listener and a specific situation. For a negative recommendation, use the `〜ない` form before `ことだ`.",
      bodyZh:
        "把 `ことだ` 接在动词辞书形之后,可以给出坚定、直接的忠告:「你该做的就是……」。`毎日練習することだ` ——「你要做的就是每天练习」。它把某个具体的动作单独点出,作为推荐的做法。\n\n与陈述世界普遍真理的 `ものだ` 不同,`ことだ` 针对的是特定的听者与特定的情境。若要给出否定的建议,在 `ことだ` 前用 `〜ない` 形。",
      examples: [
        {
          jp: "毎日練習することだ",
          reading: "まいにちれんしゅうすることだ",
          en: "The thing to do is to practise every day.",
          zh: "你要做的就是每天练习。",
          code: `import type { IrregularVerb, ConjugateVerb } from "typed-japanese";

type 練習する = IrregularVerb & { dictionary: "する" };

// 毎日 + 練習 + する(辞書形) + ことだ
type 毎日練習することだ = \`毎日練習\${ConjugateVerb<練習する, "辞書形">}ことだ\`;
`,
        },
        {
          jp: "まず医者に聞くことだ",
          reading: "まずいしゃにきくことだ",
          en: "First, you should ask a doctor.",
          zh: "首先,你应该去问医生。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 医者 = ProperNoun<"医者">;
type 聞く = GodanVerb & { stem: "聞"; ending: "く" };

// まず + 医者 + に + 聞く(辞書形) + ことだ
type まず医者に聞くことだ = \`まず\${PhraseWithParticle<医者, "に">}\${ConjugateVerb<聞く, "辞書形">}ことだ\`;
`,
        },
      ],
    },
    {
      id: "a02-4",
      titleEn: "〜ことだ — exclamation after adjectives",
      titleZh: "〜ことだ ——形容词后的感叹",
      bodyEn:
        "After an adjective, `ことだ` shifts to an exclamation, expressing the speaker's strong feeling: “How … it is!”. `素晴らしいことだ` — “What a wonderful thing!” / “How wonderful!”\n\nWith a na-adjective the form is `〜なことだ` (the な linking the stem). This usage emphasises an emotional reaction rather than giving advice; intonation and context tell the two `ことだ` apart.",
      bodyZh:
        "接在形容词之后,`ことだ` 转为感叹,表达说话人强烈的情感:「真是……啊!」。`素晴らしいことだ` ——「真是太好了!」\n\n接な形容词时用 `〜なことだ`(以 な 连接词干)。这种用法强调情感反应,而非提出忠告;靠语调和语境来区分两种 `ことだ`。",
      examples: [
        {
          jp: "素晴らしいことだ",
          reading: "すばらしいことだ",
          en: "How wonderful!",
          zh: "真是太好了!",
          code: `import type { IAdjective, ConjugateAdjective } from "typed-japanese";

type 素晴らしい = IAdjective & { stem: "素晴らし"; ending: "い" };

// 素晴らしい(基本形) + ことだ
type 素晴らしいことだ = \`\${ConjugateAdjective<素晴らしい, "基本形">}ことだ\`;
`,
        },
        {
          jp: "本当に幸せなことだ",
          reading: "ほんとうにしあわせなことだ",
          en: "It really is a happy thing!",
          zh: "真是一件幸福的事啊!",
          code: `import type { NaAdjective, ConjugateAdjective } from "typed-japanese";

type 幸せ = NaAdjective & { stem: "幸せ" };

// 本当に + 幸せ(基本形=幸せな) + ことだ
type 本当に幸せなことだ = \`本当に\${ConjugateAdjective<幸せ, "基本形">}ことだ\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
