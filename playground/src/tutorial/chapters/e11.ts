import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e11",
  level: "elementary",
  order: 11,
  titleEn: "〜ています",
  titleZh: "〜ています进行与状态",
  summaryEn:
    "You're on the train and your friend texts \"where are you?\" — you want to say \"I'm on my way right now\", not \"I go\". So far `食べます` has covered habits and the future, but not the action happening at this very moment, nor a state that still holds (\"the window is open\", \"I'm married\"). This chapter fuses the te-form from chapter 10 with `います` from chapter 3 to build `〜ています`, one pattern that handles an action in progress, a lingering result, and a habit.",
  summaryZh:
    "你在电车上,朋友发来消息「你在哪儿?」——你想说的是「我正在路上」,而不是「我去」。到目前为止,`食べます` 涵盖了习惯和将来,却说不出此刻正在发生的动作,也说不出至今仍然成立的状态(「窗户开着」「我已婚」)。本章把第 10 章的「て形」和第 3 章的 `います` 拼接起来,组成 `〜ています` 这一个句型,它能同时表达正在进行的动作、动作留下的状态,以及习惯。",
  points: [
    {
      id: "e11-1",
      titleEn: "Progressive: an action in progress",
      titleZh: "进行:正在进行的动作",
      bodyEn:
        "In chapter 5 you learned that `食べます` means both \"I eat\" (as a habit) and \"I will eat\" (in the future). What it could never do is pin down this exact moment: a friend calls, hears chewing, and asks what you're doing — you want to say \"I'm eating right now\", and plain `食べます` is too vague for that.\n\nJapanese solves this by reusing two pieces you already own. Take the te-form from chapter 10 (the connector form behind `〜てください`), and attach `います` — the same `います` that meant \"exists\" for living things back in chapter 3. The intuition is beautiful: an action in progress is literally \"the doing, ongoing — it exists right now\". So `食べる → 食べて → 食べています` (is eating), and `読む → 読んで → 読んでいます` (is reading).\n\nPicture answering the phone while at your desk: `今、本を読んでいます` — \"I'm reading a book right now\". The te-form does all the conjugation work you practiced last chapter, and `います` simply rides along on the end, unchanged.",
      bodyZh:
        "在第 5 章你学过 `食べます` 既表示「我吃」(习惯),也表示「我将要吃」(将来)。但它始终无法锁定此时此刻:朋友打来电话,听见你在咀嚼,问你在干嘛——你想说「我正在吃」,而单纯的 `食べます` 对此太含糊了。\n\n日语用你已经掌握的两块零件解决了这个问题。取来第 10 章的「て形」(也就是 `〜てください` 背后的那个连接形式),再接上 `います`——正是第 3 章里表示有生命物「存在」的那个 `います`。这个思路很妙:正在进行的动作,字面上就是「这个动作,持续着——此刻存在」。于是 `食べる → 食べて → 食べています`(正在吃),`読む → 読んで → 読んでいます`(正在读)。\n\n想象你坐在书桌前接起电话:`今、本を読んでいます`——「我现在正在看书」。所有变形工作都由你上一章练过的 て形 完成,而 `います` 只是原封不动地跟在末尾。",
      examples: [
        {
          jp: "私はパンを食べています",
          reading: "わたしはパンをたべています",
          en: "I am eating bread.",
          zh: "我正在吃面包。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type パン = ProperNoun<"パン">;
type 食べる = IchidanVerb & { type: "ichidan"; stem: "食べ"; ending: "る" };

// 私 + は + パン + を + 食べて(て形) + います
type 私はパンを食べています = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<パン, "を">}\${ConjugateVerb<食べる, "て形">}います\`;
`,
        },
        {
          jp: "弟は本を読んでいます",
          reading: "おとうとはほんをよんでいます",
          en: "My little brother is reading a book.",
          zh: "弟弟正在看书。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 弟 = ProperNoun<"弟">;
type 本 = ProperNoun<"本">;
type 読む = GodanVerb & { type: "godan"; stem: "読"; ending: "む" };

// 読む(む godan) → て形 = 読んで → 読んでいます
type 弟は本を読んでいます = \`\${PhraseWithParticle<弟, "は">}\${PhraseWithParticle<本, "を">}\${ConjugateVerb<読む, "て形">}います\`;
`,
        },
      ],
    },
    {
      id: "e11-2",
      titleEn: "Resultant state",
      titleZh: "结果状态",
      bodyEn:
        "Here's where the same form does something surprising. With certain verbs, `〜ています` does NOT mean \"in the middle of doing\" — it means \"the result is still in effect\". Imagine someone asks about your sister and you reply `結婚しています`. This does not mean she's in the middle of her wedding ceremony; it means she got married and is now in the married state.\n\nThe verbs that behave this way describe an instantaneous change — a flip from one situation to another: `結婚する` (to marry), `知る` (to come to know), `住む` (to take up residence). For these, there's no ongoing \"doing\" to picture, because the change happens in a single moment. So `〜ています` naturally points at the only thing that lingers: the resulting state. That's the deep logic — both readings are \"the situation continues to exist now\", which is exactly what `います` always meant.\n\nThis is why `知っています` means \"I know\" (the state after learning), and `東京に住んでいます` means \"I live in Tokyo\". When a new acquaintance asks where you're based, `東京に住んでいます` is your everyday answer. One pitfall worth flagging: `知っています` means \"I know\", but its negative is the bare `知りません` (\"I don't know\"), not `知っていません` — a quirk you can simply memorize for now.",
      bodyZh:
        "接下来,同一个形式做出了一件令人意外的事。对某些动词,`〜ています` 并不表示「正在做」——而是表示「结果至今仍然有效」。设想有人问起你姐姐,你回答 `結婚しています`。这并不是说她正在举行婚礼,而是说她结了婚,如今处于已婚状态。\n\n会这样表现的动词,描述的都是瞬间的变化——从一种状况一下子翻到另一种:`結婚する`(结婚)、`知る`(得知)、`住む`(住下)。对这些动词,根本没有「持续在做」的画面可言,因为变化只发生在一瞬间。于是 `〜ています` 自然就指向唯一会留存下来的东西:产生的状态。这正是它深层的逻辑——两种读法其实都是「这个状况此刻仍然存在」,而这恰恰就是 `います` 一贯的含义。\n\n因此 `知っています` 意思是「我知道/认识」(得知之后的状态),`東京に住んでいます` 意思是「我住在东京」。新认识的人问你住哪儿,`東京に住んでいます` 就是日常的答法。有一个小陷阱要提醒:`知っています` 表示「我知道」,但它的否定是单独的 `知りません`(「我不知道」),而不是 `知っていません`——这个特例眼下记住即可。",
      examples: [
        {
          jp: "姉は結婚しています",
          reading: "あねはけっこんしています",
          en: "My older sister is married.",
          zh: "姐姐已经结婚了。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 姉 = ProperNoun<"姉">;
type 結婚 = ProperNoun<"結婚">;
type する = IrregularVerb & { type: "irregular"; dictionary: "する" };

// 結婚 + する → て形 = して → 結婚しています (resultant state: is married)
type 姉は結婚しています = \`\${PhraseWithParticle<姉, "は">}\${結婚}\${ConjugateVerb<する, "て形">}います\`;
`,
        },
        {
          jp: "私はその人を知っています",
          reading: "わたしはそのひとをしっています",
          en: "I know that person.",
          zh: "我认识那个人。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 人 = ProperNoun<"人">;
type 知る = GodanVerb & { type: "godan"; stem: "知"; ending: "る" };

// 知る(る godan) → て形 = 知って → 知っています (state: know)
type 私はその人を知っています = \`\${PhraseWithParticle<私, "は">}その\${PhraseWithParticle<人, "を">}\${ConjugateVerb<知る, "て形">}います\`;
`,
        },
        {
          jp: "兄は東京に住んでいます",
          reading: "あにはとうきょうにすんでいます",
          en: "My older brother lives in Tokyo.",
          zh: "哥哥住在东京。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 兄 = ProperNoun<"兄">;
type 東京 = ProperNoun<"東京">;
type 住む = GodanVerb & { type: "godan"; stem: "住"; ending: "む" };

// 住む → て形 = 住んで → 住んでいます (ongoing state: lives)
type 兄は東京に住んでいます = \`\${PhraseWithParticle<兄, "は">}\${PhraseWithParticle<東京, "に">}\${ConjugateVerb<住む, "て形">}います\`;
`,
        },
      ],
    },
    {
      id: "e11-3",
      titleEn: "Habitual / repeated action",
      titleZh: "习惯 / 反复的动作",
      bodyEn:
        "There's one more reading that flows naturally from the same idea. If an action repeats steadily over a long stretch of time — a job, a daily routine — then in a loose sense it's \"ongoing\" across your life, even though you're not doing it this very second. So `〜ています` also covers the habitual.\n\nThink of introducing your family: `父は銀行で働いています` — \"my father works at a bank\". He isn't necessarily at his desk right now; the point is that working there is his ongoing situation. Context tells these apart, and time words like `毎日` (every day) make the habitual reading unmistakable: `毎日勉強しています` can only mean \"studies every day\", not \"is studying this instant\".\n\nNotice this is the same `〜ています` from the first two points — Japanese didn't invent a new grammar piece for habits. The te-form plus `います` keeps meaning \"this is going on\"; whether \"going on\" lands as right-now, a result, or a routine is read off the verb and the surrounding words.",
      bodyZh:
        "还有一种读法,也是从同一个思路自然延伸出来的。如果一个动作在很长一段时间里稳定地反复发生——一份工作、一项日常作息——那么在宽泛的意义上,它在你的生活中是「持续着」的,哪怕此刻这一秒你并没有在做。所以 `〜ています` 也涵盖习惯性的动作。\n\n想象你在介绍家人:`父は銀行で働いています`——「我父亲在银行工作」。他此刻未必正坐在办公桌前;重点是「在那里工作」是他持续的状况。靠上下文就能区分这几种含义,而 `毎日`(每天)之类的时间词更能让习惯义毫不含糊:`毎日勉強しています` 只能是「每天都学习」,而不是「这一瞬间正在学习」。\n\n请注意,这跟前两点是同一个 `〜ています`——日语并没有为习惯另造一套语法。て形 加 `います` 始终表示「这件事在持续」;至于「持续」落在此刻、结果还是日常,要从动词和周围的词里读出来。",
      examples: [
        {
          jp: "父は銀行で働いています",
          reading: "ちちはぎんこうではたらいています",
          en: "My father works at a bank.",
          zh: "父亲在银行工作。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 父 = ProperNoun<"父">;
type 銀行 = ProperNoun<"銀行">;
type 働く = GodanVerb & { type: "godan"; stem: "働"; ending: "く" };

// 働く(く godan) → て形 = 働いて → 働いています
type 父は銀行で働いています = \`\${PhraseWithParticle<父, "は">}\${PhraseWithParticle<銀行, "で">}\${ConjugateVerb<働く, "て形">}います\`;
`,
        },
        {
          jp: "私は毎日日本語を勉強しています",
          reading: "わたしはまいにちにほんごをべんきょうしています",
          en: "I study Japanese every day.",
          zh: "我每天学习日语。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 毎日 = ProperNoun<"毎日">;
type 日本語 = ProperNoun<"日本語">;
type 勉強 = ProperNoun<"勉強">;
type する = IrregularVerb & { type: "irregular"; dictionary: "する" };

// 毎日 (every day) marks the habitual reading; 勉強 + して + います
type 私は毎日日本語を勉強しています = \`\${PhraseWithParticle<私, "は">}\${毎日}\${PhraseWithParticle<日本語, "を">}\${勉強}\${ConjugateVerb<する, "て形">}います\`;
`,
        },
      ],
    },
    {
      id: "e11-4",
      titleEn: "Negative and question forms",
      titleZh: "否定与疑问",
      bodyEn:
        "You'll constantly need to say someone is NOT doing something, or to ask whether they are. Picture a colleague who's late: you check and report `彼はまだ来ていません` — \"he hasn't come yet\". Or you're on the phone and ask `今何を書いていますか` — \"what are you writing now?\"\n\nThe mechanics are reassuringly familiar, because `います` conjugates exactly like the polite `ます` you've used since chapter 5. For the negative, flip `います` to `いません`: `〜ていません`. For a question, tack on the particle `か` from chapter 1: `〜ていますか`. The te-form in front never changes — only the `います` tail moves, just as only the `ます` tail moved on plain verbs.\n\nThat's the whole payoff of building this pattern from parts you already know: nothing new to memorize for negatives and questions. If you can already form `来ません` and `書きますか`, you can instantly form `来ていません` and `書いていますか`.",
      bodyZh:
        "你会经常需要说某人「没在做」某事,或者询问对方是否在做。设想一位同事迟到了:你查看后汇报 `彼はまだ来ていません`——「他还没来」。又或者你在打电话,问 `今何を書いていますか`——「你现在在写什么?」\n\n它的构造让人安心,因为 `います` 的变化方式跟你从第 5 章就开始用的礼貌体 `ます` 完全一样。表示否定,把 `います` 翻成 `いません`:`〜ていません`。表示疑问,加上第 1 章学的助词 `か`:`〜ていますか`。前面的 て形 始终不变——只有末尾的 `います` 在动,就像普通动词里只有 `ます` 在动一样。\n\n这正是用你已经熟悉的零件来搭建这个句型的回报:否定和疑问都不需要再背新东西。只要你已经会变 `来ません` 和 `書きますか`,你立刻就能变出 `来ていません` 和 `書いていますか`。",
      examples: [
        {
          jp: "彼はまだ来ていません",
          reading: "かれはまだきていません",
          en: "He hasn't come yet.",
          zh: "他还没来。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 来る = IrregularVerb & { type: "irregular"; dictionary: "来る" };

// 来る → て形 = 来て → 来ていません (negative)
type 彼はまだ来ていません = \`\${PhraseWithParticle<彼, "は">}まだ\${ConjugateVerb<来る, "て形">}いません\`;
`,
        },
        {
          jp: "今何を書いていますか",
          reading: "いまなにをかいていますか",
          en: "What are you writing now?",
          zh: "你现在在写什么?",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 今 = ProperNoun<"今">;
type 何 = ProperNoun<"何">;
type 書く = GodanVerb & { type: "godan"; stem: "書"; ending: "く" };

// 書く → て形 = 書いて → 書いていますか (question)
type 今何を書いていますか = \`\${今}\${PhraseWithParticle<何, "を">}\${ConjugateVerb<書く, "て形">}いますか\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
