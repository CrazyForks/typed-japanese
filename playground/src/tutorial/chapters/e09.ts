import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e09",
  level: "elementary",
  order: 9,
  titleEn: "Comparison",
  titleZh: "比较",
  summaryEn:
    "Picture yourself shopping with a friend, holding two coats and trying to say “this one is cheaper”. With the adjectives from chapter 8 you can call each one expensive, but not yet relate them. This chapter wires those qualities together: `A は B より〜` says one thing surpasses another, `A のほうが〜` picks the winner of a two-way choice, and `〜の中で〜がいちばん〜` crowns the single best in a group. The whole toolkit is built from just three new words — より (than), ほう (side/option), and いちばん (number one).",
  summaryZh:
    "想象你和朋友逛街,手里拿着两件外套,想说「这件更便宜」。靠第八章的形容词,你能分别说每件「贵」,却还不能把它们放在一起比较。本章就把这些性质连起来:`A は B より〜` 表示一方胜过另一方,`A のほうが〜` 在二选一中挑出胜者,`〜の中で〜がいちばん〜` 则在一组事物里加冕最突出的那一个。整套工具只用到三个新词 —— より(比)、ほう(一方)和 いちばん(第一)。",
  points: [
    {
      id: "e09-1",
      titleEn: "A は B より〜 — “A is more … than B”",
      titleZh: "A は B より〜 ——「A 比 B 更〜」",
      bodyEn:
        "In chapter 8 you learned to say `東京は大きい` (Tokyo is big). That stands on its own, but the moment a friend asks “bigger than what?” you need a way to bring a second thing into the sentence. English reaches for the ending “-er” plus the word “than”. Japanese has neither — and that turns out to be simpler, not harder.\n\nThe pattern is `A は B より` followed by the plain adjective. The new particle here is `より`, meaning “than / compared to”, and the trick is that it clings to B — the thing you are measuring against — not to A. So you literally stage the scene as “A, compared-to B, is big”. Crucially, the adjective `大きい` never changes shape; there is no comparative form to memorize.\n\nSay you and a friend are looking at a map debating city sizes. You point and say `東京は大阪より大きいです` — “Tokyo, next to Osaka, is the big one.” The は still marks your topic (Tokyo, as in chapter 1), and `大阪より` simply slots in the yardstick.\n\nThe same frame works for weather, prices, anything measurable. Stepping outside and shivering, you might tell a coworker `今日は昨日より寒いです` — today is colder than yesterday. One watch-out for English speakers: because `より` attaches after B, the order feels backwards at first. Keep telling yourself the reading is “compared-to-B”, and it will click.",
      bodyZh:
        "第八章里你学会了说 `東京は大きい`(东京大)。这句话本身成立,但朋友一旦反问「比什么大?」,你就需要把第二个事物拉进句子里。英语会用「-er」词尾加上「than」,中文会用「比」。日语两样都没有 —— 而这反倒让事情更简单,而不是更难。\n\n句型是 `A は B より` 加上原形形容词。这里的新助词是 `より`,意为「比、跟…相比」,关键在于它紧贴 B —— 也就是你拿来做标尺的那一方 —— 而不是 A。于是整句字面上像在搭一个场景:「A,跟 B 相比,大」。最要紧的是,形容词 `大きい` 形态完全不变,没有什么比较级需要背。\n\n假设你和朋友看着地图争论城市大小。你指着说 `東京は大阪より大きいです` ——「东京,挨着大阪一比,是大的那个。」这里的 は 仍然标出你的话题(东京,正如第一章所学),而 `大阪より` 只是把标尺嵌了进去。\n\n同样的框架适用于天气、价格、任何可衡量的东西。走出门打了个寒颤,你可以对同事说 `今日は昨日より寒いです` —— 今天比昨天冷。对习惯中文语序的人有一点要留意:`より` 接在 B 后面,所以语序和「比 B」相反。多提醒自己它读作「跟 B 相比」,慢慢就顺了。",
      examples: [
        {
          jp: "東京は大阪より大きいです",
          reading: "とうきょうはおおさかよりおおきいです",
          en: "Tokyo is bigger than Osaka.",
          zh: "东京比大阪大。",
          code: `import type { ProperNoun, PhraseWithParticle, IAdjective, ConjugateAdjective } from "typed-japanese";

type 東京 = ProperNoun<"東京">;
type 大阪 = ProperNoun<"大阪">;
type 大きい = IAdjective & { stem: "大き"; ending: "い" };

// 東京 + は + 大阪 + より + 大きいです
type 東京は大阪より大きいです = \`\${PhraseWithParticle<東京, "は">}\${大阪}より\${ConjugateAdjective<大きい, "丁寧形">}\`;
`,
        },
        {
          jp: "今日は昨日より寒いです",
          reading: "きょうはきのうよりさむいです",
          en: "Today is colder than yesterday.",
          zh: "今天比昨天冷。",
          code: `import type { ProperNoun, PhraseWithParticle, IAdjective, ConjugateAdjective } from "typed-japanese";

type 今日 = ProperNoun<"今日">;
type 昨日 = ProperNoun<"昨日">;
type 寒い = IAdjective & { stem: "寒"; ending: "い" };

type 今日は昨日より寒いです = \`\${PhraseWithParticle<今日, "は">}\${昨日}より\${ConjugateAdjective<寒い, "丁寧形">}\`;
`,
        },
      ],
    },
    {
      id: "e09-2",
      titleEn: "A のほうが〜 — “A is the more … one”",
      titleZh: "A のほうが〜 ——「A 这一方更〜」",
      bodyEn:
        "The `より` pattern is great when you already know the standard you're comparing against. But often the real question is the reverse: someone offers you two options and wants to know which one you'd pick. “Tea or coffee?” “Train or bus?” For that you need a way to point at one option and say “this side is the one”.\n\nJapanese has a perfect word for “side / one of two options”: `ほう` (方). You wrap it as `A のほうが〜` — the `の` links A to `ほう` (the same linking `の` from chapter 2), and `が` spotlights it as the chosen one. The whole phrase means “the A side is the more … one”. Notice you're not forcing A to be best in the universe — just the winner between the two on the table.\n\nA friend asks how you got across town faster. You answer `電車のほうが速いです` — the train is the faster one. No second option is even named aloud; `ほう` quietly implies “of the two we were just talking about”.\n\nVery naturally this pairs with `より` from the last point, and now the backwards order pays off: `コーヒーよりお茶のほうがいいです` puts the rejected option first (`コーヒーより`, “compared to coffee”) and the winner second (`お茶のほうが`, “tea is the better one”). On its own, `A のほうがいいです` is the everyday way to state a preference — “I'd rather have A” — and you'll reach for it constantly when ordering, planning, or choosing seats.",
      bodyZh:
        "当你已经知道要拿什么当标准时,`より` 句型很好用。但现实中常常是反过来:别人给你两个选项,想知道你挑哪个。「茶还是咖啡?」「电车还是公交?」这时你需要一种方式,指着其中一个说「就是这一边」。\n\n日语里恰好有个表示「一方、两者之一」的词:`ほう`(方)。把它包成 `A のほうが〜` —— `の` 把 A 连到 `ほう` 上(就是第二章那个起连接作用的 `の`),`が` 则把它标成被选中的那个。整个短语意思是「A 这一方更〜」。注意你并不是说 A 在全世界最强,只是在摆出来的两者之间胜出。\n\n朋友问你怎么更快穿过市区,你答 `電車のほうが速いです` —— 电车是更快的那个。另一个选项甚至不必说出口;`ほう` 悄悄含着「我们刚才说的那两者之中」。\n\n它和上一点的 `より` 搭配起来非常自然,这时那个「倒装」的语序就派上用场了:`コーヒーよりお茶のほうがいいです` 把落选的一方放前面(`コーヒーより`,「跟咖啡相比」),把胜者放后面(`お茶のほうが`,「茶是更好的那个」)。单独使用时,`A のほうがいいです` 就是日常表达偏好的说法 ——「我更想要 A」—— 点餐、安排计划、挑座位时你会一遍遍用到它。",
      examples: [
        {
          jp: "電車のほうが速いです",
          reading: "でんしゃのほうがはやいです",
          en: "The train is faster.",
          zh: "电车更快。",
          code: `import type { ProperNoun, PhraseWithParticle, IAdjective, ConjugateAdjective } from "typed-japanese";

type 電車 = ProperNoun<"電車">;
type 速い = IAdjective & { stem: "速"; ending: "い" };

// 電車 + の + ほう + が + 速いです
type 電車のほうが速いです = \`\${PhraseWithParticle<電車, "の">}ほう\${PhraseWithParticle<"", "が">}\${ConjugateAdjective<速い, "丁寧形">}\`;
`,
        },
        {
          jp: "コーヒーよりお茶のほうがいいです",
          reading: "コーヒーよりおちゃのほうがいいです",
          en: "Tea is better than coffee (I prefer tea).",
          zh: "比起咖啡,茶更好(我更想要茶)。",
          code: `import type { ProperNoun, PhraseWithParticle, IAdjective, ConjugateAdjective } from "typed-japanese";

type コーヒー = ProperNoun<"コーヒー">;
type お茶 = ProperNoun<"お茶">;
type いい = IAdjective & { stem: "い"; ending: "い"; irregular: true };

// コーヒー + より + お茶 + の + ほう + が + いいです
type コーヒーよりお茶のほうがいいです = \`\${コーヒー}より\${PhraseWithParticle<お茶, "の">}ほう\${PhraseWithParticle<"", "が">}\${ConjugateAdjective<いい, "丁寧形">}\`;
`,
        },
      ],
    },
    {
      id: "e09-3",
      titleEn: "〜の中で〜がいちばん〜 — “the most … of all”",
      titleZh: "〜の中で〜がいちばん〜 ——「在…之中最…」",
      bodyEn:
        "Two-way comparison only gets you so far. Sometimes you want the outright champion — the cheapest of everything on the menu, your single favorite fruit, the hottest season of the year. English glues “-est” onto the adjective; once again Japanese leaves the adjective alone and instead builds the superlative out of ordinary words.\n\nThere are three pieces. First name the group with `〜の中で`, literally “inside …, among …” — and yes, that `中` is the very same “inside” word you met with locations in chapter 3, now pointing inside a set rather than inside a box. Then mark the winner with `が`. Finally drop `いちばん` (一番, literally “number one”) right in front of the adjective. So the frame is `Group の中で X がいちばん〜`.\n\nThe nice thing is that `いちばん` is just an adverb meaning “most”; it never touches the adjective's form. Tell a friend about your fruit bowl and you'd say `果物の中でりんごがいちばん好きです` — among fruits, apples are the one I like most. Here `好き` is the な-adjective “likeable” from chapter 8, riding along unchanged.\n\nThe same shape scales to people and rankings. Describing your classroom, you might say `クラスの中で田中さんがいちばん背が高いです` — in the class, Tanaka is the tallest. Reuse this whenever you crown a “best”: a restaurant's signature dish, the warmest month, the fastest route. Just remember the order — set the stage with `の中で`, point with `が`, then say `いちばん` and the quality.",
      bodyZh:
        "二选一的比较能做的事有限。有时你想要的是绝对冠军 —— 菜单上最便宜的、你最爱的那种水果、一年里最热的季节。英语把「-est」粘到形容词上;日语又一次让形容词原封不动,而是用普通词搭出最高级。\n\n它有三个部件。先用 `〜の中で` 点出范围,字面是「在…里面、在…之中」—— 没错,这个 `中` 就是第三章讲位置时遇到的那个「里面」,只是现在指向一个集合的内部,而不是盒子的内部。接着用 `が` 标出胜出者。最后把 `いちばん`(一番,字面「第一」)直接放在形容词前面。于是框架是 `范围 の中で X がいちばん〜`。\n\n妙处在于 `いちばん` 只是个表示「最」的副词,完全不碰形容词的形态。跟朋友聊你的果盘时,你会说 `果物の中でりんごがいちばん好きです` —— 在水果之中,苹果是我最喜欢的。这里的 `好き` 就是第八章那个な形容词「喜欢」,原样搬过来用。\n\n同样的结构也适用于人和排名。描述班级时,你可以说 `クラスの中で田中さんがいちばん背が高いです` —— 全班里田中个子最高。每当你要加冕一个「最」时都能复用它:餐厅的招牌菜、最暖的月份、最快的路线。只要记住顺序 —— 用 `の中で` 搭好舞台,用 `が` 指出对象,再说 `いちばん` 加上那个性质。",
      examples: [
        {
          jp: "果物の中でりんごがいちばん好きです",
          reading: "くだもののなかでりんごがいちばんすきです",
          en: "Among fruits, I like apples the most.",
          zh: "在水果之中,我最喜欢苹果。",
          code: `import type { ProperNoun, PhraseWithParticle, NaAdjective, ConjugateAdjective } from "typed-japanese";

type 果物 = ProperNoun<"果物">;
type 中 = ProperNoun<"中">;
type りんご = ProperNoun<"りんご">;
type 好き = NaAdjective & { stem: "好き" };

// 果物 + の + 中 + で + りんご + が + いちばん + 好きです
type 果物の中でりんごがいちばん好きです = \`\${PhraseWithParticle<果物, "の">}\${中}で\${PhraseWithParticle<りんご, "が">}いちばん\${ConjugateAdjective<好き, "丁寧形">}\`;
`,
        },
        {
          jp: "クラスの中で田中さんがいちばん背が高いです",
          reading: "クラスのなかでたなかさんがいちばんせがたかいです",
          en: "In the class, Mr. Tanaka is the tallest.",
          zh: "全班里田中同学个子最高。",
          code: `import type { ProperNoun, PhraseWithParticle, IAdjective, ConjugateAdjective } from "typed-japanese";

type クラス = ProperNoun<"クラス">;
type 中 = ProperNoun<"中">;
type 田中さん = ProperNoun<"田中さん">;
type 背 = ProperNoun<"背">;
type 高い = IAdjective & { stem: "高"; ending: "い" };

// クラス + の + 中 + で + 田中さん + が + いちばん + 背 + が + 高いです
type クラスの中で田中さんがいちばん背が高いです = \`\${PhraseWithParticle<クラス, "の">}\${中}で\${PhraseWithParticle<田中さん, "が">}いちばん\${PhraseWithParticle<背, "が">}\${ConjugateAdjective<高い, "丁寧形">}\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
