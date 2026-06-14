import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a05",
  level: "advanced",
  order: 5,
  titleEn: "Assertion suffixes",
  titleZh: "断定后缀",
  summaryEn:
    "A small family of `に〜ない` phrases lets a speaker assert how strongly a statement holds. `〜にすぎない` deflates a claim down to “merely / nothing more than”; `〜にほかならない` pins it down emphatically as “none other than / nothing but”; and `〜にちがいない` voices a confident inference, “(it) must be / surely is”. All three attach to the plain predicate that precedes them and live at the very end of the sentence, so the trick is choosing the right preceding form (plain verb/adjective, or a bare noun) and then appending the fixed suffix.",
  summaryZh:
    "一组 `に〜ない` 句型让说话人表明陈述成立的「强度」。`〜にすぎない` 把说法压低为「不过是、仅仅是」;`〜にほかならない` 强调地把它锁定为「正是、无非是」;`〜にちがいない` 则表达有把握的推断,「一定是、肯定是」。三者都接在前面的简体谓语之后,位于句末,所以关键在于选对前接形式(简体动词/形容词,或光杆名词),再把固定的后缀加上去。",
  points: [
    {
      id: "a05-1",
      titleEn: "〜にすぎない — merely, nothing more than",
      titleZh: "〜にすぎない ——不过是、仅仅是",
      bodyEn:
        "`〜にすぎない` says that something is *no more than* what precedes it — it downplays or limits a claim: “it is merely X / it does nothing more than X”. The literal sense is “does not exceed (すぎる) X”.\n\nIt attaches directly to a bare noun (`子供にすぎない`, “is merely a child”) and to the plain (dictionary/た) form of verbs and i-adjectives (`言い訳にすぎない`). Use it to puncture exaggeration or to insist that something is trivial. The whole thing closes the sentence; in polite speech you may add です → `にすぎません`.",
      bodyZh:
        "`〜にすぎない` 表示某事物*不超过*前接内容——用来贬低或限定一个说法:「不过是 X / 仅仅是做 X 而已」。字面意思是「不超过(すぎる)X」。\n\n它直接接光杆名词(`子供にすぎない`,「不过是个孩子」),也接动词和形容词的简体(辞书形/た形)(`言い訳にすぎない`)。常用于戳破夸张,或强调某事微不足道。整个结构收束全句;礼貌体可加 です,即 `にすぎません`。",
      examples: [
        {
          jp: "それは言い訳にすぎない",
          reading: "それはいいわけにすぎない",
          en: "That is merely an excuse.",
          zh: "那不过是借口而已。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type それ = ProperNoun<"それ">;
type 言い訳 = ProperNoun<"言い訳">;

// それ + は (topic) + 言い訳 + にすぎない
type それは言い訳にすぎない = \`\${PhraseWithParticle<それ, "は">}\${言い訳}にすぎない\`;
`,
        },
        {
          jp: "彼は子供にすぎません",
          reading: "かれはこどもにすぎません",
          en: "He is nothing more than a child.",
          zh: "他不过是个孩子罢了。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 子供 = ProperNoun<"子供">;

// 彼 + は (topic) + 子供 + にすぎません (polite)
type 彼は子供にすぎません = \`\${PhraseWithParticle<彼, "は">}\${子供}にすぎません\`;
`,
        },
      ],
    },
    {
      id: "a05-2",
      titleEn: "〜にほかならない — none other than, nothing but",
      titleZh: "〜にほかならない ——正是、无非是",
      bodyEn:
        "`〜にほかならない` is an emphatic identification: it asserts that something is *precisely* X and *nothing else* — “it is none other than X”. Literally “there is nothing other (ほか) than X”, it rules out every alternative.\n\nMost often it follows a bare noun (`努力にほかならない`, “is nothing but effort”), frequently in the explanatory shape `〜は〜にほかならない` to drive home a definition or the real reason behind something. It is formal and assertive, common in writing and speeches. Polite: `にほかなりません`.",
      bodyZh:
        "`〜にほかならない` 是一种强调性的认定:断言某事物*正是* X、*别无其他*——「无非就是 X」。字面意思是「除了 X 没有别的(ほか)」,排除一切其他可能。\n\n它最常接光杆名词(`努力にほかならない`,「无非是努力」),常以解释性的 `〜は〜にほかならない` 形式出现,用来强调某个定义或事情背后的真正原因。语气正式、果断,多见于书面和演讲。礼貌体:`にほかなりません`。",
      examples: [
        {
          jp: "成功は努力にほかならない",
          reading: "せいこうはどりょくにほかならない",
          en: "Success is nothing but effort.",
          zh: "成功无非就是努力。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 成功 = ProperNoun<"成功">;
type 努力 = ProperNoun<"努力">;

// 成功 + は (topic) + 努力 + にほかならない
type 成功は努力にほかならない = \`\${PhraseWithParticle<成功, "は">}\${努力}にほかならない\`;
`,
        },
        {
          jp: "これは証拠にほかなりません",
          reading: "これはしょうこにほかなりません",
          en: "This is none other than proof.",
          zh: "这正是证据,不会是别的。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type これ = ProperNoun<"これ">;
type 証拠 = ProperNoun<"証拠">;

// これ + は (topic) + 証拠 + にほかなりません (polite)
type これは証拠にほかなりません = \`\${PhraseWithParticle<これ, "は">}\${証拠}にほかなりません\`;
`,
        },
      ],
    },
    {
      id: "a05-3",
      titleEn: "〜にちがいない — must be, surely",
      titleZh: "〜にちがいない ——一定是、肯定是",
      bodyEn:
        "`〜にちがいない` expresses a confident inference: the speaker is almost certain something is the case — “(it) must be / surely is X”. Literally “there is no difference (ちがい), it can be nothing but X”, it is stronger than `だろう` but is still a judgement, not eyewitness fact.\n\nIt attaches to a bare noun (`彼にちがいない`, “it must be him”), to the plain form of verbs (`来るにちがいない`, “he'll surely come”), and to i-adjectives (`高いにちがいない`). Use it when the evidence makes you sure. Polite: `にちがいありません`.",
      bodyZh:
        "`〜にちがいない` 表达有把握的推断:说话人几乎确定某事如此——「一定是 / 肯定是 X」。字面意思是「没有差错(ちがい),只能是 X」,语气比 `だろう` 更强,但仍是判断,而非亲眼所见的事实。\n\n它接光杆名词(`彼にちがいない`,「一定是他」)、动词简体(`来るにちがいない`,「他肯定会来」),以及形容词(`高いにちがいない`)。在证据让你确信时使用。礼貌体:`にちがいありません`。",
      examples: [
        {
          jp: "犯人は彼にちがいない",
          reading: "はんにんはかれにちがいない",
          en: "The culprit must be him.",
          zh: "犯人一定是他。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 犯人 = ProperNoun<"犯人">;
type 彼 = ProperNoun<"彼">;

// 犯人 + は (topic) + 彼 + にちがいない
type 犯人は彼にちがいない = \`\${PhraseWithParticle<犯人, "は">}\${彼}にちがいない\`;
`,
        },
        {
          jp: "彼は来るにちがいない",
          reading: "かれはくるにちがいない",
          en: "He will surely come.",
          zh: "他肯定会来。",
          code: `import type { ProperNoun, PhraseWithParticle, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 来る = IrregularVerb & { dictionary: "来る" };

// 彼 + は (topic) + 来る (辞書形 = 来る) + にちがいない
type 彼は来るにちがいない = \`\${PhraseWithParticle<彼, "は">}\${ConjugateVerb<来る, "辞書形">}にちがいない\`;
`,
        },
        {
          jp: "あの店は高いにちがいありません",
          reading: "あのみせはたかいにちがいありません",
          en: "That shop must be expensive.",
          zh: "那家店肯定很贵。",
          code: `import type { ProperNoun, PhraseWithParticle, IAdjective, ConjugateAdjective } from "typed-japanese";

type あの店 = ProperNoun<"あの店">;
type 高い = IAdjective & { stem: "高"; ending: "い" };

// あの店 + は (topic) + 高い (基本形) + にちがいありません (polite)
type あの店は高いにちがいありません = \`\${PhraseWithParticle<あの店, "は">}\${ConjugateAdjective<高い, "基本形">}にちがいありません\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
