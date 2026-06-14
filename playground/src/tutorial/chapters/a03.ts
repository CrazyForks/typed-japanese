import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a03",
  level: "advanced",
  order: 3,
  titleEn: "The 〜わけ family",
  titleZh: "〜わけ系列",
  summaryEn:
    "The formal noun `わけ` (“reason / the way things are”) anchors a small family of high-frequency expressions that look alike but mean very different things. `〜わけだ` draws a logical conclusion (“so that's why…”); `〜わけではない` partially denies one (“it's not that…”, “not necessarily”); and `〜わけにはいかない` says that circumstances — social, moral, or practical — make an action impossible (“I can't very well…”). Mastering the family is mostly about telling these three apart, since they all attach to the same plain-form clause.",
  summaryZh:
    "形式名词 `わけ`(「道理、缘由、情形」)衍生出一组高频表达,形似而义异。`〜わけだ` 得出合乎逻辑的结论(「难怪、原来如此」);`〜わけではない` 对结论作部分否定(「并不是说……」「未必」);`〜わけにはいかない` 则表示由于社会、道义或现实的缘故而「不能这么做」。掌握这一系列的关键在于区分三者 —— 它们都接在同样的简体小句之后。",
  points: [
    {
      id: "a03-1",
      titleEn: "〜わけだ — “so that's why / naturally”",
      titleZh: "〜わけだ ——「难怪、原来如此、当然」",
      bodyEn:
        "`〜わけだ` presents a statement as the natural, logical consequence of something just learned or already known: “so it follows that…”, “no wonder…”. It looks *backward*, fitting a new fact into a chain of reasoning, which is what distinguishes it from forward-looking `はず` (“should be”).\n\nIt attaches to a plain-form predicate: verbs and い-adjectives connect directly (`来るわけだ`, `眠いわけだ`), while nouns and な-adjectives take `な` (`日本人なわけだ`). A common spoken frame is 「道理で〜わけだ」 (“that explains why…”). Replace `だ` with `です` to make it polite.",
      bodyZh:
        "`〜わけだ` 把一句话呈现为刚得知或已知事实的自然、合乎逻辑的结果:「这么说来……」「难怪……」。它朝「后」推断,把新事实纳入推理链,这正是它与朝「前」预测的 `はず`(「按理应该」)的区别。\n\n它接在简体谓语之后:动词、い形容词直接连接(`来るわけだ`、`眠いわけだ`),名词和な形容词用 `な`(`日本人なわけだ`)。口语常用「道理で〜わけだ」的框架(「难怪……」)。把 `だ` 换成 `です` 即为礼貌体。",
      examples: [
        {
          jp: "道理で眠いわけだ",
          reading: "どうりでねむいわけだ",
          en: "No wonder I'm sleepy.",
          zh: "难怪这么困。",
          code: `import type { IAdjective, ConjugateAdjective } from "typed-japanese";

type 眠い = IAdjective & { stem: "眠"; ending: "い" };

// 道理で + 眠い (基本形) + わけだ
type 道理で眠いわけだ = \`道理で\${ConjugateAdjective<眠い, "基本形">}わけだ\`;
`,
        },
        {
          jp: "彼は来ないわけだ",
          reading: "かれはこないわけだ",
          en: "So that's why he isn't coming.",
          zh: "难怪他不来。",
          code: `import type { ProperNoun, PhraseWithParticle, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 来る = IrregularVerb & { dictionary: "来る" };

// 彼 + は + 来る (ない形 → 来) + ない + わけだ
type 彼は来ないわけだ = \`\${PhraseWithParticle<彼, "は">}\${ConjugateVerb<来る, "ない形">}ないわけだ\`;
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
type 彼は日本人なわけだ = \`\${PhraseWithParticle<彼, "は">}\${日本人}なわけだ\`;
`,
        },
      ],
    },
    {
      id: "a03-2",
      titleEn: "〜わけではない — “it's not that / not necessarily”",
      titleZh: "〜わけではない ——「并不是说……、未必」",
      bodyEn:
        "`〜わけではない` is a *partial* denial. Rather than flatly negating the predicate, it cancels a conclusion the listener might have drawn: “it's not that I dislike it”, “that doesn't necessarily mean…”. It softens, qualifies, and leaves room — very different from the plain negative 「嫌いだ → 嫌いではない」 (“I don't dislike it”), which states a fact outright.\n\nAttachment mirrors `わけだ`: verbs and い-adjectives connect directly (`わかるわけではない`), nouns and な-adjectives take `な` (`嫌いなわけではない`). The casual contraction is 「〜わけじゃない」. It often pairs with adverbs like `別に` or `全部` (“not *entirely*…”).",
      bodyZh:
        "`〜わけではない` 是一种「部分」否定。它并非直接否定谓语,而是取消听者可能得出的结论:「并不是说我讨厌」「这未必意味着……」。它起缓和、限定、留有余地的作用 —— 与直截了当陈述事实的普通否定「嫌いだ → 嫌いではない」(「我不讨厌」)截然不同。\n\n接续与 `わけだ` 相同:动词、い形容词直接接(`わかるわけではない`),名词和な形容词用 `な`(`嫌いなわけではない`)。口语缩约为「〜わけじゃない」。常与 `別に`、`全部` 等副词搭配(「未必全都……」)。",
      examples: [
        {
          jp: "野菜が嫌いなわけではない",
          reading: "やさいがきらいなわけではない",
          en: "It's not that I dislike vegetables.",
          zh: "我并不是讨厌蔬菜。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 野菜 = ProperNoun<"野菜">;

// 野菜 + が + 嫌い + な + わけではない (na-adjective + な)
type 野菜が嫌いなわけではない = \`\${PhraseWithParticle<野菜, "が">}嫌いなわけではない\`;
`,
        },
        {
          jp: "全部わかるわけではない",
          reading: "ぜんぶわかるわけではない",
          en: "I don't necessarily understand all of it.",
          zh: "我未必全都懂。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type わかる = GodanVerb & { stem: "わか"; ending: "る" };

// 全部 + わかる (辞書形) + わけではない
type 全部わかるわけではない = \`全部\${ConjugateVerb<わかる, "辞書形">}わけではない\`;
`,
        },
        {
          jp: "この店が高いわけではない",
          reading: "このみせがたかいわけではない",
          en: "It's not that this shop is expensive.",
          zh: "这家店并不算贵。",
          code: `import type { ProperNoun, PhraseWithParticle, IAdjective, ConjugateAdjective } from "typed-japanese";

type この店 = ProperNoun<"この店">;
type 高い = IAdjective & { stem: "高"; ending: "い" };

// この店 + が + 高い (基本形) + わけではない (い-adjective connects directly)
type この店が高いわけではない = \`\${PhraseWithParticle<この店, "が">}\${ConjugateAdjective<高い, "基本形">}わけではない\`;
`,
        },
      ],
    },
    {
      id: "a03-3",
      titleEn: "〜わけにはいかない — “I can't very well…”",
      titleZh: "〜わけにはいかない ——「不能、不可以」",
      bodyEn:
        "`〜わけにはいかない` expresses an impossibility rooted in *circumstances* — social obligation, morality, or common sense — rather than ability. The speaker may be perfectly *able* to do the thing, but doing it would be wrong, rude, or out of the question: “I can't just leave”, “I can't afford to give up”.\n\nIt attaches to a verb's dictionary form (`帰るわけにはいかない`, `諦めるわけにはいかない`). Contrast it with potential `〜られない` (“unable to”): the difference is *won't / mustn't* versus *can't physically*. With a verb in the ない形 + 「〜ないわけにはいかない」 it flips to a double negative meaning “I have no choice but to…”. The polite form is 「〜わけにはいきません」.",
      bodyZh:
        "`〜わけにはいかない` 表示因「情势」而不能 —— 出于社会义务、道义或常理,而非能力。说话者也许完全「有能力」做这件事,但做了便不妥、失礼或绝无可能:「不能就这样走掉」「不能放弃」。\n\n它接在动词辞书形之后(`帰るわけにはいかない`、`諦めるわけにはいかない`)。与可能态 `〜られない`(「做不到」)相对:区别在于「不该/不可以」与「客观上做不到」。若接动词的ない形构成「〜ないわけにはいかない」,则变为双重否定,意为「不得不……」。礼貌体为「〜わけにはいきません」。",
      examples: [
        {
          jp: "今帰るわけにはいかない",
          reading: "いまかえるわけにはいかない",
          en: "I can't just leave now.",
          zh: "现在不能就这样回去。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 帰る = GodanVerb & { stem: "帰"; ending: "る" };

// 今 + 帰る (辞書形) + わけにはいかない
type 今帰るわけにはいかない = \`今\${ConjugateVerb<帰る, "辞書形">}わけにはいかない\`;
`,
        },
        {
          jp: "ここで諦めるわけにはいかない",
          reading: "ここであきらめるわけにはいかない",
          en: "I can't afford to give up here.",
          zh: "不能在这里放弃。",
          code: `import type { IchidanVerb, ConjugateVerb } from "typed-japanese";

type 諦める = IchidanVerb & { stem: "諦め"; ending: "る" };

// ここで + 諦める (辞書形) + わけにはいかない
type ここで諦めるわけにはいかない = \`ここで\${ConjugateVerb<諦める, "辞書形">}わけにはいかない\`;
`,
        },
        {
          jp: "今日は休むわけにはいきません",
          reading: "きょうはやすむわけにはいきません",
          en: "I can't take the day off today.",
          zh: "今天不能请假。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 今日 = ProperNoun<"今日">;
type 休む = GodanVerb & { stem: "休"; ending: "む" };

// 今日 + は + 休む (辞書形) + わけにはいきません (polite)
type 今日は休むわけにはいきません = \`\${PhraseWithParticle<今日, "は">}\${ConjugateVerb<休む, "辞書形">}わけにはいきません\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
