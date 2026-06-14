import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i05",
  level: "intermediate",
  order: 5,
  titleEn: "Humble & polite 謙譲語・丁寧語",
  titleZh: "谦让语与郑重语",
  summaryEn:
    "Japanese 敬語 (keigo) has three registers; this chapter covers two of them. 謙譲語 (humble language) lowers the speaker to raise the listener, and 丁寧語 (polite/courteous language) simply makes speech more formal. You'll meet the productive `お〜する` humble pattern, a set of special humble verbs that replace ordinary ones, and `でございます`, the extra-polite copula heard in shops and announcements.",
  summaryZh:
    "日语的敬语(敬語)分为三大类,本章介绍其中两类。谦让语(謙譲語)通过贬低说话者一方来抬高对方,郑重语(丁寧語)则单纯让措辞更为正式。你将学到可大量套用的谦让句型 `お〜する`、一组替换普通动词的特殊谦让动词,以及在商店和广播中常听到的超礼貌系动词 `でございます`。",
  points: [
    {
      id: "i05-1",
      titleEn: "お〜する — the humble pattern",
      titleZh: "お〜する ——谦让句型",
      bodyEn:
        "When *you* do something *for* or *toward* a person you respect, you humble your own action with the frame `お + [ます-stem] + する`. The verb's polite stem (ます形) sits between `お` and `する`, e.g. 持つ → 持ち → `お持ちします` (“I'll carry it (for you)”).\n\nThe `する` part conjugates normally, so the everyday polite ending is `します`. This pattern works with most native Group I and II verbs; it does not attach to verbs that already have a dedicated humble form (those come next).",
      bodyZh:
        "当「你」为尊敬的对象做某事、或动作朝向对方时,要用 `お + [ます形词干] + する` 这一框架来谦卑地表达自己的动作。动词的礼貌词干(ます形)夹在 `お` 与 `する` 之间,例如 持つ → 持ち → `お持ちします`(「我来(替您)拿」)。\n\n其中的 `する` 照常变化,所以日常礼貌结尾就是 `します`。该句型适用于大多数和语一类、二类动词;已有专用谦让形的动词不适用(见下一节)。",
      examples: [
        {
          jp: "お持ちします",
          reading: "おもちします",
          en: "I'll carry it (for you).",
          zh: "我来(替您)拿。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 持つ = GodanVerb & { stem: "持"; ending: "つ" };

// お + 持ち (ます形) + します
type お持ちします = \`お\${ConjugateVerb<持つ, "ます形">}します\`;
`,
        },
        {
          jp: "私がお送りします",
          reading: "わたしがおおくりします",
          en: "I'll see you off / send it.",
          zh: "由我来送(您/它)。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 送る = GodanVerb & { stem: "送"; ending: "る" };

// 私 + が + お + 送り (ます形) + します
type 私がお送りします = \`\${PhraseWithParticle<私, "が">}お\${ConjugateVerb<送る, "ます形">}します\`;
`,
        },
        {
          jp: "ここでお待ちします",
          reading: "ここでおまちします",
          en: "I'll wait here.",
          zh: "我在这里等候。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type ここ = ProperNoun<"ここ">;
type 待つ = GodanVerb & { stem: "待"; ending: "つ" };

// ここ + で + お + 待ち (ます形) + します
type ここでお待ちします = \`\${PhraseWithParticle<ここ, "で">}お\${ConjugateVerb<待つ, "ます形">}します\`;
`,
        },
      ],
    },
    {
      id: "i05-2",
      titleEn: "Special humble verbs",
      titleZh: "特殊谦让动词",
      bodyEn:
        "Some common verbs have their own irreplaceable humble forms instead of using `お〜する`. Memorise them as set pairs: 言う → 申す (`申します`, “my name is…”), 行く/来る → 参る (`参ります`, “I'll come/go”), もらう/食べる/飲む → いただく (`いただきます`), and する itself → いたす (`いたします`).\n\nLike ordinary verbs they conjugate, so the polite forms are simply `申します`, `参ります`, `いただきます`, `いたします` — the ます-stem of a Group I verb plus ます.",
      bodyZh:
        "一些常用动词有自己专属、不可替换的谦让形,而非套用 `お〜する`。请把它们作为固定对照记忆:言う → 申す(`申します`,「我叫……」)、行く/来る → 参る(`参ります`,「我来/去」)、もらう/食べる/飲む → いただく(`いただきます`)、する 本身 → いたす(`いたします`)。\n\n它们和普通动词一样变位,所以礼貌形就是 `申します`、`参ります`、`いただきます`、`いたします`——即一类动词的 ます形词干加上 ます。",
      examples: [
        {
          jp: "田中と申します",
          reading: "たなかともうします",
          en: "My name is Tanaka.",
          zh: "我叫田中。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 田中 = ProperNoun<"田中">;
type 申す = GodanVerb & { stem: "申"; ending: "す" };

// 田中 + と + 申し (ます形) + ます
type 田中と申します = \`\${PhraseWithParticle<田中, "と">}\${ConjugateVerb<申す, "ます形">}ます\`;
`,
        },
        {
          jp: "すぐ参ります",
          reading: "すぐまいります",
          en: "I'll come right away.",
          zh: "我马上就来。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type すぐ = ProperNoun<"すぐ">;
type 参る = GodanVerb & { stem: "参"; ending: "る" };

// すぐ + 参り (ます形) + ます
type すぐ参ります = \`\${すぐ}\${ConjugateVerb<参る, "ます形">}ます\`;
`,
        },
        {
          jp: "私がいたします",
          reading: "わたしがいたします",
          en: "I will do it.",
          zh: "由我来做。",
          code: `import type { ProperNoun, PhraseWithParticle, GodanVerb, ConjugateVerb } from "typed-japanese";

type 私 = ProperNoun<"私">;
type いたす = GodanVerb & { stem: "いた"; ending: "す" };

// 私 + が + いたし (ます形) + ます
type 私がいたします = \`\${PhraseWithParticle<私, "が">}\${ConjugateVerb<いたす, "ます形">}ます\`;
`,
        },
      ],
    },
    {
      id: "i05-3",
      titleEn: "でございます — the extra-polite copula",
      titleZh: "でございます ——超礼貌系动词",
      bodyEn:
        "`でございます` is the most courteous form of the copula `です`. Built from the humble/polite verb ござる, it is the standard register of shop staff, receptionists, and station announcements: `Noun でございます` = “(it) is Noun” said very politely.\n\nIt slots in exactly where `です` would: `こちらは受付でございます` (“This is the reception desk”). Note it is 丁寧語 — it does not raise the listener, it just elevates the overall tone.",
      bodyZh:
        "`でございます` 是系动词 `です` 最郑重的形式。它由谦恭动词 ござる 构成,是店员、前台和车站广播的标准用语:`名词 でございます` 即非常礼貌地说「(这)是某物」。\n\n它的位置与 `です` 完全相同:`こちらは受付でございます`(「这里是接待处」)。请注意它属于丁寧語——并不抬高对方,只是整体提升语气。",
      examples: [
        {
          jp: "こちらは受付でございます",
          reading: "こちらはうけつけでございます",
          en: "This is the reception desk.",
          zh: "这里是接待处。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type こちら = ProperNoun<"こちら">;
type 受付 = ProperNoun<"受付">;

// こちら + は + 受付 + でございます
type こちらは受付でございます = \`\${PhraseWithParticle<こちら, "は">}\${受付}でございます\`;
`,
        },
        {
          jp: "営業中でございます",
          reading: "えいぎょうちゅうでございます",
          en: "We are open (for business).",
          zh: "正在营业中。",
          code: `import type { ProperNoun } from "typed-japanese";

type 営業中 = ProperNoun<"営業中">;

// 営業中 + でございます
type 営業中でございます = \`\${営業中}でございます\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
