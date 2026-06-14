import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a02",
  level: "advanced",
  order: 2,
  titleEn: "〜ものだ / 〜ことだ",
  titleZh: "〜ものだ／〜ことだ",
  summaryEn:
    "A friend just failed an exam and you want to say “don't worry — everyone fails sometimes, that's just life.” In plain Japanese you can already state the bare fact (誰でも失敗する, “everyone fails”), but you can't yet color it as a law of life, sigh over fond memories, hand out gentle advice, or cry out “how beautiful!”. This chapter adds two formal-noun endings that do exactly that: `〜ものだ`, which frames something as the natural order of the world (and after a past verb becomes warm nostalgia, “I used to…”), and `〜ことだ`, which points at one specific matter as the thing to do or the thing worth exclaiming over.",
  summaryZh:
    "朋友刚考砸了,你想安慰他:「别担心,谁都有失败的时候,人生本就如此。」用你已经学过的简体,你能陈述光秃秃的事实(誰でも失敗する,「谁都会失败」),却还无法把它渲染成人生的法则,无法对往事轻叹怀念,无法温柔地给出忠告,也无法脱口而出「真美啊!」。本章补上两个建立在形式名词之上的句末结尾:`〜ものだ` 把某事框定为世间本然的道理(接在过去式动词后则化为温暖的怀旧,「过去常常……」),`〜ことだ` 则把某一件具体的事点出来,作为该做之事,或作为值得感叹之处。",
  points: [
    {
      id: "a02-1",
      titleEn: "〜ものだ — general truth / the way things are",
      titleZh: "〜ものだ ——普遍真理／事物本然",
      bodyEn:
        "Back in chapter 13 you learned the plain (dictionary) form, and with it you could state a flat fact: `子供は遊ぶ` simply reports “children play.” But sometimes you don't want to report one occasion — you want to assert a built-in truth about the world, the way a proverb does: children just naturally play, that's their nature. Plain `だ` alone can't carry that weight.\n\nThis is where `ものだ` comes in. Attach it to the plain form of a verb or adjective and you stamp the statement as a general, almost self-evident truth — how things essentially are or what naturally happens. The word `もの` here is a formal noun: it does not point at a physical “thing,” it gestures at the nature of things, the order of the world. So `子供は遊ぶものだ` literally reads “children are the kind of beings that play,” and lands as “children just naturally play — that's what children do.”\n\nPicture consoling a friend who just bombed an exam. You'd say `誰でも失敗するものだ` — “everyone fails sometimes, that's just how it is.” Framing it as a law of life, rather than a comment on their bad day, is precisely what makes it comforting.\n\nIn polite speech the final `だ` simply becomes `です`, giving `〜ものです`. One caution: reserve `ものだ` for genuine general truths. Saying it about a one-time event (today's weather, a single person's choice) sounds odd, the way an English proverb sounds odd applied to a single afternoon.",
      bodyZh:
        "在第 13 章你学过简体(辞书形),用它可以陈述一个干巴巴的事实:`子供は遊ぶ` 只是报告「小孩子玩」。但有时你想说的并非某一次的情形,而是想断言一条关于世界本质的真理,就像谚语那样:小孩子天生就爱玩,这是他们的本性。光靠简体的 `だ`,撑不起这份分量。\n\n`ものだ` 正是为此而生。把它接在动词或形容词的简体之后,就给这句话盖上「普遍、近乎不言自明的真理」的印章 —— 事物本来如此,或某事自然会发生。这里的 `もの` 是形式名词:它并不指具体的「东西」,而是指向事物的本性、世界的秩序。所以 `子供は遊ぶものだ` 字面意思是「小孩子是那种会玩的存在」,落到中文便是「小孩子就是爱玩的 —— 这就是孩子」。\n\n设想你在安慰一个刚考砸的朋友,你会说 `誰でも失敗するものだ` ——「谁都有失败的时候,本来就是这样」。把它框定为人生的法则,而不是对他这倒霉一天的评论,正是这句话之所以能安慰人的关键。\n\n礼貌体里句末的 `だ` 直接换成 `です`,即 `〜ものです`。要提醒一点:`ものだ` 只留给真正的普遍真理。用它来说一次性的事(今天的天气、某个人的单次选择)会很别扭,就像把一句谚语硬套在某个下午上一样不伦不类。",
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
type 早く = ProperNoun<"早く">;
type 過ぎる = IchidanVerb & { stem: "過ぎ"; ending: "る" };

// 時間 + は + 早く + 過ぎる(辞書形) + ものだ
type 時間は早く過ぎるものだ = \`\${PhraseWithParticle<時間, "は">}\${早く}\${ConjugateVerb<過ぎる, "辞書形">}ものだ\`;
`,
        },
      ],
    },
    {
      id: "a02-2",
      titleEn: "〜たものだ — nostalgia (“I used to…”)",
      titleZh: "〜たものだ ——怀旧(「过去常常……」)",
      bodyEn:
        "You met the plain past `た` form in chapters 7 and 13, where it reported a finished action: `昔はよく泳いだ` means “back then I swam a lot.” That's accurate, but flat — it states the habit without any of the feeling that usually surrounds an old memory. At a class reunion, you don't just want to list what happened; you want to sigh over it.\n\nHere `ものだ` performs a small magic trick: attached to the past form instead of the dictionary form, it stops asserting a truth and starts looking back fondly. `昔はよく泳いだものだ` keeps the same facts but adds the warmth of reminiscence — “ah, I used to swim so much back then.” The intuition is the same `もの`-as-nature-of-things, now turned toward how things used to be, which is why it reads as gentle nostalgia rather than a bare report.\n\nThink of bumping into an old friend by the river where you both grew up. You glance at the water and say `子供の頃はよく遊んだものだ` — “we used to play here all the time when we were kids.” The `ものだ` is what makes it a shared, wistful memory rather than a dry timeline.\n\nThis usage almost always travels with the adverb `よく` (“often”) and a time word like `昔` (“long ago”) or `子供の頃` (“childhood”). Those signposts cue the listener that you're recalling a repeated past habit, which is exactly the mood `〜たものだ` is built to deliver.",
      bodyZh:
        "你在第 7 章和第 13 章见过简体过去式 `た` 形,它报告一个已完成的动作:`昔はよく泳いだ` 意为「以前我常游泳」。这没错,却很平淡 —— 它陈述了那个习惯,却不带任何通常萦绕在旧日回忆四周的情感。在同学会上,你想要的不只是罗列发生过的事,而是想对着它轻叹一声。\n\n这时 `ものだ` 施了个小魔法:接在过去式而非辞书形之后,它便不再断言真理,而开始深情地回望。`昔はよく泳いだものだ` 保留了同样的事实,却添上了追忆的温度 ——「啊,那时候我可没少游泳」。这里的直觉仍是「`もの` 即事物之本然」,只是如今转向了往昔的样子,所以读起来是温柔的怀旧,而非干巴巴的报告。\n\n想象你在儿时长大的那条河边偶遇老友,你望着水面说 `子供の頃はよく遊んだものだ` ——「小时候我们常常在这里玩」。正是这个 `ものだ`,把它变成一段共有的、带着惆怅的回忆,而不是一条冷冰冰的时间线。\n\n这个用法几乎总与副词 `よく`(经常)以及 `昔`(从前)、`子供の頃`(小时候)等时间词同行。这些路标提示听者:你在追忆一个反复出现的旧日习惯 —— 这正是 `〜たものだ` 天生要传递的氛围。",
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
        "In chapter 12 you met `こと` as a nominalizer that turns a verb into a noun-like idea — “the act of practising,” “the matter of asking a doctor.” That same `こと` powers a different ending now. Where `ものだ` zooms out to a truth about the whole world, sometimes you want to zoom in on one specific listener and tell them, point blank, the single thing they should do.\n\nAttach `ことだ` to the dictionary form of a verb and you deliver firm, direct advice: “what you should do is….” `毎日練習することだ` means “the thing to do is practise every day.” Because `こと` means “a matter,” you're literally singling out one matter and presenting it as the right course — it feels more pointed and more authoritative than a soft suggestion.\n\nImagine a stressed coworker venting about a problem they can't solve. Instead of a long pep talk you cut to the heart of it: `まず医者に聞くことだ` — “first thing, go ask a doctor.” The `ことだ` makes it sound like seasoned, no-nonsense advice from someone who's been there.\n\nFor a negative recommendation — telling someone what not to do — put the `〜ない` form (from chapter 13) before `ことだ`: 無理をしないことだ, “the thing is, don't overdo it.” Just keep in mind this advice register is direct and slightly elder-to-junior; with a superior you'd soften it with the gentler forms from earlier chapters instead.",
      bodyZh:
        "在第 12 章,你见过 `こと` 作为名词化助词,把动词变成类似名词的概念 ——「练习这件事」「问医生这件事」。如今同一个 `こと` 驱动着另一个结尾。`ものだ` 是拉远镜头去讲一条关于整个世界的真理,而有时你想拉近镜头,对着某一个具体的听者,直截了当地告诉他:你该做的唯一一件事是什么。\n\n把 `ことだ` 接在动词辞书形之后,你就给出了坚定、直接的忠告:「你该做的就是……」。`毎日練習することだ` 意为「你要做的就是每天练习」。因为 `こと` 意为「一件事」,你实际上是把某一件事单独拎出来,作为正确的做法呈现 —— 这比软绵绵的建议更有针对性,也更有分量。\n\n设想一位压力很大的同事在抱怨一个解决不了的难题,你不绕弯子,直击要害:`まず医者に聞くことだ` ——「首先,去问问医生」。这个 `ことだ` 听起来像是过来人给出的、干脆利落的老道忠告。\n\n若要给出否定的建议 —— 告诉别人不要做什么 —— 就在 `ことだ` 前用第 13 章的 `〜ない` 形:無理をしないことだ,「关键是别勉强自己」。只是要记得,这种忠告语气直接,略带长辈对晚辈的意味;对上级时,应改用前几章那些更委婉的说法来缓和。",
      examples: [
        {
          jp: "毎日練習することだ",
          reading: "まいにちれんしゅうすることだ",
          en: "The thing to do is to practise every day.",
          zh: "你要做的就是每天练习。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb } from "typed-japanese";

type 毎日 = ProperNoun<"毎日">;
type 練習 = ProperNoun<"練習">;
type 練習する = IrregularVerb & { dictionary: "する" };

// 毎日 + 練習 + する(辞書形) + ことだ
type 毎日練習することだ = \`\${毎日}\${練習}\${ConjugateVerb<練習する, "辞書形">}ことだ\`;
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
        "The same `ことだ` has one more job, and it's a warm one. You already know the i- and na-adjectives from chapter 8 (`素晴らしい`, “wonderful”; `幸せ`, “happy”), and you could say `素晴らしい` to mean “it's wonderful.” But that's a flat assessment. When a view stops you in your tracks, a flat statement isn't enough — you want to let the feeling spill out: how wonderful it is!\n\nPut `ことだ` after an adjective and the ending flips from advice to exclamation, voicing the speaker's strong emotion: “how … it is!”. `素晴らしいことだ` reads as “what a wonderful thing!” The logic is still `こと` = “a matter,” but now you're marveling at the matter rather than prescribing it — you're treating the wonderful-ness itself as something worth pausing over.\n\nPicture reaching a mountaintop after a long climb and the whole valley opening up below you. You breathe out `本当に幸せなことだ` — “it really is a happy thing, to be here.” It's the Japanese equivalent of an English speaker murmuring “how lovely…” to no one in particular.\n\nOne mechanical note: an i-adjective attaches directly (`素晴らしい` + `ことだ`), but a na-adjective needs its linking `な` first, giving `〜なことだ` — hence `幸せ` becomes `幸せなことだ`. And since this `ことだ` looks identical to the advice `ことだ` of the previous point, it's the rising, emotional intonation and the context that tell a listener you're exclaiming, not instructing.",
      bodyZh:
        "同一个 `ことだ` 还有一项任务,而且是温暖的一项。第 8 章你已学过い形容词和な形容词(`素晴らしい`,「了不起的」;`幸せ`,「幸福的」),你可以说 `素晴らしい` 表示「很棒」。但那只是一句平板的评价。当一片景色让你停下脚步,平板的陈述就不够了 —— 你想让情感倾泻而出:真是太美了!\n\n把 `ことだ` 接在形容词之后,这个结尾就从忠告翻转为感叹,道出说话人强烈的情感:「真是……啊!」。`素晴らしいことだ` 读作「真是太好了!」。逻辑仍是 `こと` =「一件事」,只是此刻你是在惊叹这件事,而非规定它 —— 你把这份「了不起」本身当作值得驻足回味的事。\n\n想象你历经长途攀登登上山顶,整片山谷在脚下豁然展开,你长舒一口气:`本当に幸せなことだ` ——「能站在这里,真是太幸福了」。这相当于一个英语者对着空气喃喃道一句「真美啊……」。\n\n一点机械上的提示:い形容词直接相接(`素晴らしい` + `ことだ`),而な形容词要先补上连接用的 `な`,变成 `〜なことだ` —— 所以 `幸せ` 要说成 `幸せなことだ`。又因为这个 `ことだ` 和上一节表忠告的 `ことだ` 长得一模一样,真正让听者明白你是在感叹而非指点的,是那上扬的、带着情绪的语调,以及当下的语境。",
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
          code: `import type { ProperNoun, NaAdjective, ConjugateAdjective } from "typed-japanese";

type 本当に = ProperNoun<"本当に">;
type 幸せ = NaAdjective & { stem: "幸せ" };

// 本当に + 幸せ(基本形=幸せな) + ことだ
type 本当に幸せなことだ = \`\${本当に}\${ConjugateAdjective<幸せ, "基本形">}ことだ\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
