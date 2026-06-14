import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i10",
  level: "intermediate",
  order: 10,
  titleEn: "〜はず / 〜べき / 〜わけ",
  titleZh: "〜はず／〜べき／〜わけ",
  summaryEn:
    "Your train is late, and a worried friend asks if it's still coming — you want to say “it should arrive at three, I checked the schedule.” Until now you could say “you must” (`〜なければならない` from ch.17) or “probably” (`〜でしょう` from ch.19), but not “that's the logical expectation.” This chapter adds three formal nouns that each frame a reasoned conclusion: `〜はずだ` says what should be true given what you know, `〜べきだ` says what one ought to do, and `〜わけだ` says “that's why / no wonder.”",
  summaryZh:
    "电车晚点了,担心的朋友问你它还来不来,你想说「按时刻表看,三点应该会到」。到目前为止,你能说「必须」(第17课的 `〜なければならない`)或「大概」(第19课的 `〜でしょう`),却说不出「这是合乎逻辑的预期」。本课补上三个各自承载「推理结论」的形式名词:`〜はずだ` 陈述根据已知信息「按理应当如此」,`〜べきだ` 陈述「应该这么做」,`〜わけだ` 则表示「难怪、原来如此」。",
  points: [
    {
      id: "i10-1",
      titleEn: "〜はずだ — “should / is expected to”",
      titleZh: "〜はずだ ——「按理应当、估计」",
      bodyEn:
        "Back in ch.19 you learned `〜でしょう` for “probably” — a soft guess. But sometimes you don't want to sound like you're guessing; you have grounds. Your colleague hasn't shown up, but you know he left home on time, so you're not hoping he'll come — you logically expect it. Japanese hands you a dedicated tool for exactly this confident, evidence-based expectation: `はず`.\n\n`はず` is a formal noun meaning “(logical) expectation.” You attach it to a plain-form predicate to say “it should be the case that…,” reasoning from what you know rather than from hope. A verb or い-adjective connects directly (`来るはず`, `高いはず`); a noun or な-adjective links with `の` (`学生のはず`), the same `の` you met linking nouns back in ch.02.\n\nThe reason it's shaped this way is that `はず` is literally a noun — “the expectation that he comes” — so you build it like any noun phrase and cap it with `だ`/`です`. That's why it feels heavier and surer than `でしょう`: you're naming a fact-shaped expectation, not floating a maybe.\n\nPicture the late train: a friend frets, and you reassure them with 「三時に着くはずです」 — “it should arrive at three, I checked.” Crucially this is inference, not obligation. 「彼は来るはずです」 means “he ought to be coming (I have reason to expect it),” never “he is obliged to come” — that duty sense belongs to `べき` next.\n\nOne handy variant: if reality betrays your expectation, use the past `〜はずだった` — “it was supposed to…” As in 「彼は来るはずだった」, “he was supposed to come (but didn't).”",
      bodyZh:
        "第19课你学过表「大概」的 `〜でしょう` ——一种温和的猜测。但有时你并不想显得像在猜,你是有「依据」的:同事还没到,可你知道他准时出门了,所以你不是「希望」他来,而是合乎逻辑地「预期」他会来。日语为这种自信的、有据可循的预期准备了专门的工具:`はず`。\n\n`はず` 是表示「(合乎逻辑的)预期」的形式名词。把它接在简体谓语后,表示「按道理应该……」,依据的是已知信息而非主观愿望。动词、い形容词直接连接(`来るはず`、`高いはず`);名词和な形容词用 `の` 连接(`学生のはず`)——正是第02课里连接名词的那个 `の`。\n\n它之所以这样构造,是因为 `はず` 本身就是个名词——「他会来这件预期之事」——所以你像搭任何名词短语一样把它搭起来,末尾用 `だ`/`です` 收尾。这也是它比 `でしょう` 更有分量、更笃定的原因:你是在「点名」一个事实形态的预期,而不是抛出一个或许。\n\n想象那班晚点的电车:朋友焦急,你用「三時に着くはずです」安慰他——「按时刻表看,三点应该会到」。关键在于,这是「推断」而非「义务」:「彼は来るはずです」意为「他应该会来(我有理由这样预期)」,绝不是「他有义务来」——那层「义务」之意属于下一节的 `べき`。\n\n一个实用变体:若现实辜负了你的预期,可用过去式 `〜はずだった`——「本应……」。如「彼は来るはずだった」,「他本该来的(却没来)」。",
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
        "In ch.17 you learned `〜なければならない` for hard obligation — “you have no choice but to.” But not all “shoulds” are that absolute. When you tell a friend who hurt someone “you ought to apologize,” you're not citing a rule that forces them; you're appealing to what's right. `はず` couldn't help here — that was about prediction, not propriety. For the moral, advisory “should,” Japanese reaches for `べき`.\n\n`べき` is a formal noun expressing what is proper or right to do — duty, fittingness, or strong advice. It attaches to a verb's dictionary form: 「言うべきだ」 (“ought to say it”), 「行くべきだ」 (“ought to go”). The negative is 「〜べきではない」 (“ought not to”), reusing the `ではない` negation you've known since ch.01.\n\nThink of it as a judgment about behavior. A manager reviewing a draft says 「金曜日までに終わらせるべきです」 — “this should be done by Friday,” framing it as the right thing to do, not a brute command. Because it's a value judgment, `べき` doesn't fit things outside anyone's control (you wouldn't say the weather “ought to” clear up), and saying it bluntly to a superior can sound preachy — soften or rephrase in those cases.\n\nOne irregular point worth memorizing: with `する`, both 「するべき」 and the older, crisper 「すべき」 are accepted, with 「すべき」 sounding a touch more formal and bookish. Either is fine in conversation; pick 「すべき」 when you want a firmer, more written tone.",
      bodyZh:
        "第17课你学过表强义务的 `〜なければならない`——「别无选择,只能这么做」。但并非所有「应该」都那么绝对。当你对伤害了别人的朋友说「你应该道歉」时,你并不是搬出一条逼他的规则,而是诉诸「情理」。这里 `はず` 帮不上忙——它谈的是预测,不是情理。对于这种道德上、建议性的「应该」,日语动用的是 `べき`。\n\n`べき` 是表达「应当」去做之事的形式名词——义务、合宜或强烈建议。它接在动词辞书形之后:「言うべきだ」(「应该说」)、「行くべきだ」(「应该去」)。否定为「〜べきではない」(「不应该」),沿用的正是你从第01课起就熟悉的 `ではない` 否定。\n\n把它看作对「行为」的价值判断。主管审阅草稿时说「金曜日までに終わらせるべきです」——「这份报告应该在周五前完成」,把它框定为「理应如此」,而非生硬的命令。正因为是价值判断,`べき` 不适用于谁也无法掌控的事(你不会说天气「应该」放晴),而直接对长辈、上级使用又容易显得说教——这些场合宜婉转或改换说法。\n\n一个值得记住的不规则之处:接 `する` 时,「するべき」与较古雅利落的「すべき」均可,后者更显正式、书面。口语里两者都行;想要更坚定、更书面的语气时,就选「すべき」。",
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

type 今すぐ = ProperNoun<"今すぐ">;
type 病院 = ProperNoun<"病院">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 今すぐ + 病院 + へ + 行く (辞書形) + べきです
type 今すぐ病院へ行くべきです = \`\${今すぐ}\${PhraseWithParticle<病院, "へ">}\${ConjugateVerb<行く, "辞書形">}べきです\`;
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
        "Here's a feeling you've had but couldn't yet voice in Japanese: you've been shivering all morning, then you notice the heater was off the whole time — and it suddenly clicks. “Ah, no wonder it was cold.” That dawning realization, where a new fact snaps a puzzle into place, is exactly what `わけ` captures.\n\n`わけ` is a formal noun meaning “reason / the way things are.” `〜わけだ` presents a statement as the natural, logical consequence of something already known: “so that means…,” “no wonder…,” “that explains it.” It attaches just like `はず` — verbs and い-adjectives directly, nouns and な-adjectives via `な` (or `の`).\n\nThe cleanest way to keep it apart from `はず` is direction. `はず` looks forward: from what you know, you predict what should be true. `わけ` looks backward: a fact has just landed, and you fit it into a chain of reasoning that now makes sense. So 「寒いわけだ、雪が降っている」 — “No wonder it's cold; it's snowing.” The snow is the freshly-noticed cause; `わけ` voices the click.\n\nUse it in real conversation as a payoff line. Your friend says they aced the exam, and you reply 「毎日勉強したわけです」 — “so that means you studied every day,” reconstructing the reason behind the result. Or someone's Japanese is flawless and you learn why: 「日本人なわけだ」, “ah, he's Japanese, that explains it.”\n\nOne caution: two close relatives mean something quite different. 「〜わけではない」 means “it's not that…” (a gentle denial), and 「〜わけがない」 means “there's no way…” (flat impossibility). Don't let the shared `わけ` fool you — only bare `〜わけだ` carries the “that's why” sense.",
      bodyZh:
        "有一种感受你早有体会,却还没法用日语说出来:你一上午冷得发抖,这才发现暖气一直没开——刹那间豁然开朗。「啊,难怪这么冷。」这种新事实让谜题一下子归位的「恍然大悟」,正是 `わけ` 所捕捉的。\n\n`わけ` 是表示「道理、缘由、情形」的形式名词。`〜わけだ` 把一句话呈现为已知事实的自然、合乎逻辑的结果:「这么说来……」「难怪……」「原来如此」。其接续与 `はず` 相同——动词、い形容词直接接,名词和な形容词用 `な`(也可用 `の`)。\n\n要把它和 `はず` 分清,最干净的办法是看「方向」。`はず` 朝「前」看:从已知出发,预测「应该如此」。`わけ` 朝「后」看:一个事实刚刚落地,你把它纳入一条此刻终于说得通的推理链。于是「寒いわけだ、雪が降っている」——「难怪这么冷,在下雪呢」。雪是刚察觉到的成因,`わけ` 说出的就是那声「原来如此」。\n\n在真实对话里,把它当作「点睛」的回应句。朋友说自己考得很好,你回一句「毎日勉強したわけです」——「这么说,你是每天都学习了」,反推结果背后的缘由。或者有人日语好得无可挑剔,你得知原委后说「日本人なわけだ」,「啊,他是日本人,难怪」。\n\n一点提醒:两个近亲含义却大不相同。「〜わけではない」意为「并不是说……」(委婉否定),「〜わけがない」意为「不可能……」(断然否定)。别被共有的 `わけ` 误导——唯有单独的 `〜わけだ` 才承载「难怪、原来如此」之意。",
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
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 毎日 = ProperNoun<"毎日">;
type 勉強 = ProperNoun<"勉強">;
type する = IrregularVerb & { dictionary: "する" };

// 毎日 + 勉強 + した (た形) + わけです
type 毎日勉強したわけです = \`\${毎日}\${勉強}\${ConjugateVerb<する, "た形">}わけです\`;
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
