import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i11",
  level: "intermediate",
  order: 11,
  titleEn: "〜ながら / 〜まま / 〜つつ",
  titleZh: "〜ながら／〜まま／〜つつ",
  summaryEn:
    "Picture eating breakfast while scrolling your phone, or walking out the door with the kitchen light still on — life is full of things that happen at the same time, and this chapter gives you three tools for it. `〜ながら` fuses two actions into one simultaneous moment (“while doing”); `〜まま` freezes a state and leaves it untouched while you do something else (“just as it is”); `〜つつ` is the bookish cousin of `〜ながら` that also picked up a “while / even though” flavor for formal writing.",
  summaryZh:
    "想象你一边吃早饭一边刷手机,或者厨房灯还亮着就出了门 —— 生活里满是同时发生的事,而这一章就给你三件工具来表达它们。`〜ながら` 把两个动作融成同一个瞬间(「一边…一边…」);`〜まま` 把一个状态冻结、保持不动地去做另一件事(「就那样、保持原状」);`〜つつ` 是 `〜ながら` 偏书面的表亲,在正式书写里还多了一层「一边…/尽管…」的味道。",
  points: [
    {
      id: "i11-1",
      titleEn: "〜ながら — doing two things at once",
      titleZh: "〜ながら ——「一边…一边…」",
      bodyEn:
        "Back in chapter 10 you learned `〜てから` to chain actions in sequence — first this, then that. And in chapter 11 `〜ています` let you describe one action in progress. But neither lets you say that two actions are happening together, in the same breath, by the same person — “I study WHILE listening to music.” That overlap is exactly what `〜ながら` is for.\n\nThe rule is pleasantly simple. Take a verb's ます-stem (the same stem from chapter 5 — just drop the `ます`) and glue `ながら` straight onto it. `食べる` → stem `食べ` → `食べながら`, “while eating.” Why the bare stem? Because the stem is Japanese's neutral, tense-less form of a verb; `ながら` rides on it like a backdrop, leaving the real grammar (tense, politeness) to the final verb.\n\nThat final verb is the point of the sentence. In `Aながら B`, B is what you're really doing and A is the accompanying side-action. Say a friend asks what you're up to and you reply `音楽を聞きながら勉強します` — the headline is that you're studying; the music is just playing alongside. Flip the order and the meaning shifts: studying-while-listening is a student's evening, listening-while-studying would put the music center stage.\n\nOne pitfall to remember: `〜ながら` requires a single subject doing both actions at once. You can walk and talk yourself, but you can't use it for “I cooked while my sister set the table” — that's two people, and you'd reach for a different connector.",
      bodyZh:
        "在第 10 章你学了 `〜てから`,把动作按顺序串起来 —— 先做这个,再做那个;第 11 章的 `〜ています` 又让你描述一个正在进行的动作。但这两者都没法表达两个动作同时发生、在同一口气里、由同一个人完成 ——「我一边听音乐一边学习」。这种重叠正是 `〜ながら` 要解决的。\n\n规则很轻松。取动词的 ます形词干(就是第 5 章那个词干 —— 去掉 `ます` 即可),把 `ながら` 直接粘上去。`食べる` → 词干 `食べ` → `食べながら`,「一边吃」。为什么用光秃秃的词干?因为词干是日语里中性、不带时态的形态;`ながら` 像背景一样附在它上面,把真正的语法(时态、礼貌度)都交给句末的动词去承担。\n\n句末那个动词才是句子的重心。在 `Aながら B` 里,B 是你真正在做的事,A 是伴随的副动作。比如朋友问你在干嘛,你答 `音楽を聞きながら勉強します` —— 主角是「学习」,音乐只是在旁边放着。把顺序反过来意思就变了:一边听音乐一边学习是学生的夜晚,一边学习一边听音乐则把音乐推到了台前。\n\n要记住一个陷阱:`〜ながら` 要求同一个主语同时做两件事。你可以自己又走又聊,但不能用它说「我做饭的时候姐姐摆桌子」—— 那是两个人,得换别的连接方式。",
      examples: [
        {
          jp: "音楽を聞きながら勉強します",
          reading: "おんがくをききながらべんきょうします",
          en: "I study while listening to music.",
          zh: "我一边听音乐一边学习。",
          code: `import type { ProperNoun, GodanVerb, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 音楽 = ProperNoun<"音楽">;
type 勉強 = ProperNoun<"勉強">;
type 聞く = GodanVerb & { stem: "聞"; ending: "く" };
type する = IrregularVerb & { dictionary: "する" };

// 音楽を + 聞き(ます-stem) + ながら + 勉強 + し(ます-stem) + ます
type 音楽を聞きながら勉強します = \`\${音楽}を\${ConjugateVerb<聞く, "ます形">}ながら\${勉強}\${ConjugateVerb<する, "ます形">}ます\`;
`,
        },
        {
          jp: "歩きながら話しましょう",
          reading: "あるきながらはなしましょう",
          en: "Let's talk while walking.",
          zh: "我们一边走一边聊吧。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 歩く = GodanVerb & { stem: "歩"; ending: "く" };
type 話す = GodanVerb & { stem: "話"; ending: "す" };

// 歩き(ます-stem) + ながら + 話し(ます-stem) + ましょう
type 歩きながら話しましょう = \`\${ConjugateVerb<歩く, "ます形">}ながら\${ConjugateVerb<話す, "ます形">}ましょう\`;
`,
        },
      ],
    },
    {
      id: "i11-2",
      titleEn: "〜まま — leaving a state unchanged",
      titleZh: "〜まま ——「保持原状/就那样」",
      bodyEn:
        "`〜ながら` linked two ongoing actions, but sometimes what carries over isn't an action — it's a state that should have changed but didn't. You put your shoes on, and the expected next move is to take them off before stepping inside; instead you walk in shoes-and-all. Up to now you had no clean way to flag “the situation is frozen, just as it was, and that's the noteworthy part.” That's the job of `〜まま`.\n\nThe form connects to the た-form you met in chapter 13 (`立った` → `立ったまま`, “while still standing”), and with nouns it links through `の` (`昔のまま`, “the same as it used to be”). The た-form makes sense here: it marks a state that has already been set in place — shoes already put on, light already switched on — and `まま` then says that finished state simply persists, untouched, into the next action.\n\nThe heart of the nuance is an expectation quietly broken. With `靴を履いたまま入りました`, the unspoken rule is that you remove your shoes at a Japanese entryway; `まま` highlights that you skipped that step. Likewise `電気をつけたまま寝ました` paints you dozing off with the light blazing — the natural “turn it off first” never happened.\n\nSo reach for `〜まま` whenever you'd say in English “with X still…” or “without bothering to…”: leaving the door open, going out in your pajamas, returning a borrowed book unread. It's the grammar of things left exactly as they were.",
      bodyZh:
        "`〜ながら` 连接的是两个正在进行的动作,但有时延续下来的不是动作,而是一个本该改变却没有改变的状态。你穿上了鞋,接下来理应在进门前脱掉;结果你却连鞋一起走了进来。在此之前,你没有一个干净的方式来标记「状况被冻住了,还是原来的样子,而这正是值得一提的地方」。这就是 `〜まま` 的活儿。\n\n这个形式接你在第 13 章见过的 た形(`立った` → `立ったまま`,「就那样站着」),接名词时通过 `の` 连接(`昔のまま`,「还是从前的样子」)。用 た形在这里很合理:它标记一个已经确立好的状态 —— 鞋已经穿上、灯已经打开 —— 而 `まま` 接着说,这个完成的状态就这样原封不动地延续到了下一个动作里。\n\n语感的核心是一个被悄悄打破的预期。`靴を履いたまま入りました` 里,没说出口的规矩是日本玄关要脱鞋;`まま` 凸显了你跳过了这一步。同样,`電気をつけたまま寝ました` 描绘出你灯火通明地睡着了的画面 —— 那个理所当然的「先关灯」从没发生。\n\n所以,凡是你在中文里会说「X 还……着就……」或「也不……就……」的时候,就用 `〜まま`:门开着没关、穿着睡衣出门、借的书没读就还了回去。它就是「一切照旧、原样不动」的语法。",
      examples: [
        {
          jp: "靴を履いたまま入りました",
          reading: "くつをはいたままはいりました",
          en: "I came in with my shoes still on.",
          zh: "我穿着鞋就进来了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type 靴 = ProperNoun<"靴">;
type 履く = GodanVerb & { stem: "履"; ending: "く" };
type 入る = GodanVerb & { stem: "入"; ending: "る" };

// 靴を + 履いた(た形) + まま + 入り(ます-stem) + ました
type 靴を履いたまま入りました = \`\${靴}を\${ConjugateVerb<履く, "た形">}まま\${ConjugateVerb<入る, "ます形">}ました\`;
`,
        },
        {
          jp: "電気をつけたまま寝ました",
          reading: "でんきをつけたままねました",
          en: "I fell asleep with the light still on.",
          zh: "我开着灯就睡着了。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb } from "typed-japanese";

type 電気 = ProperNoun<"電気">;
type つける = IchidanVerb & { stem: "つけ"; ending: "る" };
type 寝る = IchidanVerb & { stem: "寝"; ending: "る" };

// 電気を + つけた(た形) + まま + 寝(ます-stem) + ました
type 電気をつけたまま寝ました = \`\${電気}を\${ConjugateVerb<つける, "た形">}まま\${ConjugateVerb<寝る, "ます形">}ました\`;
`,
        },
      ],
    },
    {
      id: "i11-3",
      titleEn: "〜つつ — written “while / although”",
      titleZh: "〜つつ ——书面的「一边…/尽管…」",
      bodyEn:
        "You already own `〜ながら` for “while doing,” which is perfect for everyday speech. But open a newspaper, a business report, or a literary essay and you'll meet a more formal cousin: `〜つつ`. The problem it solves isn't a new meaning so much as a new register — sometimes you need the same idea in a tone that sounds polished and written rather than casual and spoken.\n\nMechanically it's a twin of `〜ながら`: take the ます-stem and attach `つつ`. `考える` → `考えつつ`, “while thinking.” In its plain use it means exactly what `〜ながら` does, just dressed in formal clothes — `未来を考えつつ歩きます` is the kind of reflective sentence you'd find in prose, not something you'd shout to a friend across the street.\n\nBut `〜つつ` has a second life that `〜ながら` lacks. Add `も` to make `〜つつも`, and it turns concessive: “even while / although.” This is the grammar of a formal report admitting tension — “while acknowledging the risk, we proceeded.” Here the two clauses don't just coexist, they pull against each other.\n\nYou can feel it in `悪いと知りつつも飲みました`: you knew it was bad for you, and yet you drank anyway. The `つつも` holds the contradiction in one elegant phrase — knowledge on one side, action against it on the other. Keep `〜つつ` for writing and formal speech; when you're simply chatting, `〜ながら` is still your everyday workhorse.",
      bodyZh:
        "表达「一边做…」你已经有了 `〜ながら`,它在日常口语里完美好用。但翻开报纸、商务报告或文学随笔,你会遇到一个更正式的表亲:`〜つつ`。它解决的与其说是新含义,不如说是一种新语域 —— 有时你需要把同一个意思,用一种听起来考究、书面而非随意、口语的语气说出来。\n\n机制上它和 `〜ながら` 是双胞胎:取 ます形词干,接上 `つつ`。`考える` → `考えつつ`,「一边思考」。在普通用法下它和 `〜ながら` 意思完全一样,只是穿上了正装 —— `未来を考えつつ歩きます` 是那种会出现在散文里的沉思句子,而不是你隔着马路冲朋友喊的话。\n\n但 `〜つつ` 还有一重 `〜ながら` 没有的身份。加上 `も` 变成 `〜つつも`,它就转为转折:「尽管…却…」。这是正式报告承认矛盾时的语法 ——「尽管认识到风险,我们仍推进了」。这里两个分句不只是并存,而是互相拉扯。\n\n你能在 `悪いと知りつつも飲みました` 里体会到这一点:你明知道对身体不好,却还是喝了。`つつも` 把这份矛盾收进一个优雅的短语里 —— 一边是认知,另一边是与之相悖的行动。`〜つつ` 留给书面语和正式场合;当你只是闲聊时,`〜ながら` 依然是你日常的主力。",
      examples: [
        {
          jp: "未来を考えつつ歩きます",
          reading: "みらいをかんがえつつあるきます",
          en: "I walk while thinking about the future.",
          zh: "我一边思考未来一边走。",
          code: `import type { ProperNoun, IchidanVerb, GodanVerb, ConjugateVerb } from "typed-japanese";

type 未来 = ProperNoun<"未来">;
type 考える = IchidanVerb & { stem: "考え"; ending: "る" };
type 歩く = GodanVerb & { stem: "歩"; ending: "く" };

// 未来を + 考え(ます-stem) + つつ + 歩き(ます-stem) + ます
type 未来を考えつつ歩きます = \`\${未来}を\${ConjugateVerb<考える, "ます形">}つつ\${ConjugateVerb<歩く, "ます形">}ます\`;
`,
        },
        {
          jp: "悪いと知りつつも飲みました",
          reading: "わるいとしりつつものみました",
          en: "Even though I knew it was bad, I drank it.",
          zh: "尽管知道不好,我还是喝了。",
          code: `import type { IAdjective, GodanVerb, ConjugateAdjective, ConjugateVerb } from "typed-japanese";

type 悪い = IAdjective & { stem: "悪"; ending: "い" };
type 知る = GodanVerb & { stem: "知"; ending: "る" };
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 悪い(基本形) + と + 知り(ます-stem) + つつも + 飲み(ます-stem) + ました
type 悪いと知りつつも飲みました = \`\${ConjugateAdjective<悪い, "基本形">}と\${ConjugateVerb<知る, "ます形">}つつも\${ConjugateVerb<飲む, "ます形">}ました\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
