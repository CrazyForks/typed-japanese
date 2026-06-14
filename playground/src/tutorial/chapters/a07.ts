import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a07",
  level: "advanced",
  order: 7,
  titleEn: "〜かのようだ / 〜とばかりに",
  titleZh: "〜かのようだ／〜とばかりに",
  summaryEn:
    "You're telling a friend about the moment your coworker went pale — and you want to say he froze as if he'd seen a ghost, even though there was no ghost. Back in ch.29 `〜みたい` and `〜らしい` let you say something genuinely resembles or apparently is the case, but they can't make that vivid contrary-to-fact leap. This chapter adds `〜かのようだ` (“as if / as though,” explicitly imagined) and `〜とばかりに` (“as if to say…,” reading the unspoken line behind a glare or a gesture).",
  summaryZh:
    "你正在跟朋友讲同事脸色发白的那一刻——你想说他僵在那里,仿佛见了鬼,可其实根本没有鬼。第29章的 `〜みたい`、`〜らしい` 能表达「确实像」或「看来是」,却没法做出这种与事实相反的生动跳跃。本章补上 `〜かのようだ`(「仿佛、好像」,明确点出是想象)和 `〜とばかりに`(「仿佛在说……似的」,读出一个瞪视或手势背后那句没说出口的话)。",
  points: [
    {
      id: "a07-1",
      titleEn: "〜かのようだ — “as if / as though”",
      titleZh: "〜かのようだ ——「仿佛、好像」",
      bodyEn:
        "From ch.29 you already have `〜みたい` and `〜ようだ` for “it seems / it's like.” But those report a genuine resemblance: 雨が降りそう says it really does look like rain. What you couldn't yet do is make a deliberately contrary-to-fact comparison — “he stood there as if he'd seen a ghost,” where everyone knows there is no ghost. That counterfactual flavor is exactly what `〜かのようだ` adds.\n\nThe secret ingredient is the little question particle `か` from ch.1. By slipping `か` in front of `ようだ`, the sentence literally frames the comparison as “in the manner of a question of whether…” — it tags the likeness as merely entertained, not asserted. That doubt-particle is why `〜かのようだ` feels imagined while plain `〜ようだ` feels observed.\n\nIt attaches to the plain form of a clause. Verbs and i-adjectives connect directly (`知らない + かのようだ`, `見ている + かのようだ`), while a noun first takes `である` (`天使 + であるかのようだ`). Very often you'll also see the adverb `まるで` (“just like / exactly as if”) earlier in the sentence, leaning into the comparison.\n\nPicture a coworker who clearly broke the printer, then strolls past it whistling. You mutter `彼は何も知らないかのようだ` — he's acting as though he knows nothing about it. Nobody believes the act; the `か` makes that knowing wink audible.\n\nOne caution: `かのようだ` is literary and emphatic. In a casual chat about the weather you'd still reach for `〜みたい`; save `かのようだ` for storytelling, description, and writing where you want that staged, almost theatrical comparison.",
      bodyZh:
        "第29章你已经有了 `〜みたい`、`〜ようだ` 来表达「好像、似乎」。但那些说的是真实的相似:雨が降りそう 是说看上去真的要下雨了。你还做不到的,是有意做出与事实相反的比喻——「他站在那儿,仿佛见了鬼」,而大家都知道根本没有鬼。这种「与事实相反」的味道,正是 `〜かのようだ` 所添加的。\n\n秘诀在第1章那个小小的疑问助词 `か`。把 `か` 塞在 `ようだ` 之前,整句就字面上把这个比喻框成「仿佛是『是否……』的一个疑问」——它给这份相似贴上「只是设想」而非「断言」的标签。正是这个表怀疑的助词,使 `〜かのようだ` 透着想象的味道,而单纯的 `〜ようだ` 则透着观察的味道。\n\n它接在分句的简体形之后。动词、形容词直接连接(`知らない + かのようだ`、`見ている + かのようだ`),名词则先加 `である`(`天使 + であるかのようだ`)。句中还常在前面放副词 `まるで`(「简直就像、宛如」),把比喻推得更足。\n\n设想一个同事明明弄坏了打印机,却吹着口哨从旁边走过。你嘟囔一句 `彼は何も知らないかのようだ`——他装出一副对此毫不知情的样子。没人信他这套;那个 `か` 让这心照不宣的揶揄听得出来。\n\n一点提醒:`かのようだ` 偏书面、偏强调。闲聊天气时你还是会用 `〜みたい`;把 `かのようだ` 留给讲故事、做描写以及写作——你想要那种摆出来、近乎戏剧化的比喻时再用。",
      examples: [
        {
          jp: "彼は何も知らないかのようだ",
          reading: "かれはなにもしらないかのようだ",
          en: "He acts as if he knows nothing.",
          zh: "他一副什么都不知道的样子。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 彼 = ProperNoun<"彼">;
type 何も = ProperNoun<"何も">;
type 知る = GodanVerb & { stem: "知"; ending: "る" };

// 彼は + 何も + 知ら(ない形) + ない + かのようだ
type 彼は何も知らないかのようだ = \`\${PhraseWithParticle<彼, "は">}\${何も}\${ConjugateVerb<知る, "ない形">}ないかのようだ\`;
`,
        },
        {
          jp: "夢を見ているかのようだ",
          reading: "ゆめをみているかのようだ",
          en: "It is as if I were dreaming.",
          zh: "简直就像在做梦一样。",
          code: `import type { ProperNoun, IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 夢 = ProperNoun<"夢">;
type 見る = IchidanVerb & { stem: "見"; ending: "る" };

// 夢を + 見て(て形) + いる + かのようだ
type 夢を見ているかのようだ = \`\${PhraseWithParticle<夢, "を">}\${ConjugateVerb<見る, "て形">}いるかのようだ\`;
`,
        },
        {
          jp: "彼女はまるで天使であるかのようだ",
          reading: "かのじょはまるでてんしであるかのようだ",
          en: "She is just as if she were an angel.",
          zh: "她简直宛如天使一般。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

// A noun takes である before かのようだ; まるで reinforces the comparison.
type 彼女 = ProperNoun<"彼女">;
type まるで = ProperNoun<"まるで">;
type 天使 = ProperNoun<"天使">;
type である = ProperNoun<"である">;

// 彼女は + まるで + 天使 + である + かのようだ
type 彼女はまるで天使であるかのようだ = \`\${PhraseWithParticle<彼女, "は">}\${まるで}\${天使}\${である}かのようだ\`;
`,
        },
      ],
    },
    {
      id: "a07-2",
      titleEn: "〜かのように — adverbial “as if”",
      titleZh: "〜かのように ——副词性的「仿佛地」",
      bodyEn:
        "Often the “as if” comparison doesn't end the sentence — it describes the manner of something else. You don't want to say “it's as if spring came” as a full stop; you want “it's warm, as if spring had come,” where the imagined comparison colors the adjective 暖かい. For that you swap the sentence-final `だ` for the adverbial `に`, exactly the same move you saw with `〜ように` back in ch.28. `〜かのようだ` becomes `〜かのように`, and it now attaches to a following predicate: `[plain clause] かのように [predicate]`.\n\nIt helps to hold the two side by side. The plain `〜ように` from ch.28 (“so that / in the way that”) describes a real way of doing something; bolt the doubt-particle `か` onto its front and `〜かのように` describes an imagined way — a figurative “as if,” not a literal “like.” Same adverbial slot, but the `か` keeps the comparison firmly in the realm of make-believe.\n\nThink of stepping outside in early February to an unseasonable warm spell. You'd tell a friend `春が来たかのように暖かい` — it's warm as though spring had arrived, even though the calendar says otherwise. The clause `春が来た` paints the fictional scene, and `かのように` lets it pour straight into the adjective that follows.\n\nA practical tip: whatever comes right before `かのように` stays in plain form — `来た`, `降っている`, `知らない` — and the real predicate (`暖かい`, `白い`, a verb) lands afterward. Once you can spot that two-part shape, these sentences read effortlessly.",
      bodyZh:
        "「仿佛」的比喻往往不是用来结句,而是用来描写另一件事的样子。你不想说「仿佛春天来了」就打住;你想说「暖和得仿佛春天来了」,让这个想象的比喻去渲染形容词 暖かい。为此,你把句末的 `だ` 换成副词性的 `に`——正是第28章 `〜ように` 那个变化。`〜かのようだ` 于是变成 `〜かのように`,接在后面的谓语之前:`[简体分句] かのように [谓语]`。\n\n把两者并排看会更清楚。第28章那个普通的 `〜ように`(「为了……地、以……的方式」)描写的是真实的做法;在它前面装上表怀疑的 `か`,`〜かのように` 描写的就是想象的方式——一种比喻性的「仿佛」,而非字面的「像」。同一个副词位置,但 `か` 把比喻牢牢锁在虚构的范畴里。\n\n想象二月初你走出门,撞上一段反常的暖天。你会对朋友说 `春が来たかのように暖かい`——暖和得仿佛春天已经来了,尽管日历并不这么说。`春が来た` 这个分句铺出那幅虚构的画面,`かのように` 让它径直灌进后面的形容词。\n\n一个实用窍门:`かのように` 紧挨前面的部分一律用简体形——`来た`、`降っている`、`知らない`——真正的谓语(`暖かい`、`白い`、某个动词)落在其后。一旦你能认出这一前一后的结构,这类句子读起来就毫不费力。",
      examples: [
        {
          jp: "春が来たかのように暖かい",
          reading: "はるがきたかのようにあたたかい",
          en: "It is warm, as if spring had come.",
          zh: "暖和得仿佛春天来了一样。",
          code: `import type { IrregularVerb, ConjugateVerb, IAdjective, ConjugateAdjective } from "typed-japanese";

type 来る = IrregularVerb & { dictionary: "来る" };
type 暖かい = IAdjective & { stem: "暖か"; ending: "い" };

// 春が + 来た(た形) + かのように + 暖かい(基本形)
type 春が来たかのように暖かい = \`春が\${ConjugateVerb<来る, "た形">}かのように\${ConjugateAdjective<暖かい, "基本形">}\`;
`,
        },
        {
          jp: "雪が降っているかのように白い",
          reading: "ゆきがふっているかのようにしろい",
          en: "It is white, as if snow were falling.",
          zh: "白得仿佛正在下雪一样。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, IAdjective, ConjugateAdjective, PhraseWithParticle } from "typed-japanese";

type 雪 = ProperNoun<"雪">;
type 降る = GodanVerb & { stem: "降"; ending: "る" };
type 白い = IAdjective & { stem: "白"; ending: "い" };

// 雪が + 降って(て形) + いる + かのように + 白い(基本形)
type 雪が降っているかのように白い = \`\${PhraseWithParticle<雪, "が">}\${ConjugateVerb<降る, "て形">}いるかのように\${ConjugateAdjective<白い, "基本形">}\`;
`,
        },
      ],
    },
    {
      id: "a07-3",
      titleEn: "〜とばかりに — “as if to say …”",
      titleZh: "〜とばかりに ——「仿佛在说……似的」",
      bodyEn:
        "`〜かのようだ` compares a scene to an imagined state. But sometimes what you want to capture isn't a state — it's an attitude, a line someone all but spoke without opening their mouth. Recounting an argument, you want “she slammed the door as if to say we're done.” She said nothing; her body said everything. That's the job of `〜とばかりに`.\n\nThe shape recycles two familiar pieces. The quotation particle `と` from ch.20 marks the unspoken line, and `ばかり` means “just / nothing but” — so the words are quoted as if that were the entire message behind the action. You put the quoted utterance first (often a command or a short outburst), then `とばかりに`, then the main verb: `「…」とばかりに [verb]`. Literally, “with an air that all but said …”.\n\nImagine standing frozen at a doorway while your boss jerks his chin toward the exit. No words, but the meaning is unmistakable, and you'd later describe it as `早く行けとばかりに彼を見た` — he looked at me as if to say “Go, quickly.” Notice the quoted part `早く行け` is a blunt command form; `とばかりに` then reports that the glare carried that command without it ever being uttered.\n\nBecause it reads body language, `〜とばかりに` pairs most naturally with verbs of looking, smiling, walking, slamming — actions a bystander can see. It's vivid and decidedly literary, the kind of line you meet in a novel rather than in a text to a friend, so treasure it for narration and description.",
      bodyZh:
        "`〜かのようだ` 把眼前的情景比作一种想象的状态。但有时你想捕捉的不是状态,而是一种神态——某人没张嘴,却几乎把一句话说尽了。讲述一场争吵时,你想说「她摔上门,仿佛在说『我们完了』」。她什么也没说,可她的姿态说尽了一切。这正是 `〜とばかりに` 的任务。\n\n这个结构重用了两个熟面孔。第20章的引用助词 `と` 标出那句没说出口的话,`ばかり` 意为「只、净是」——于是这句话被引用得仿佛就是动作背后的全部讯息。你把被引用的话放在前面(常是命令或一句短促的发作),接 `とばかりに`,再接主要动词:`「…」とばかりに [动词]`。字面就是「摆出一副几乎要说『……』的架势」。\n\n想象你僵在门口,上司朝出口扬了扬下巴。没有一个字,可意思再清楚不过,事后你会这样描述:`早く行けとばかりに彼を見た`——他看着我,仿佛在说「快走」。注意被引用的 `早く行け` 是生硬的命令形;`とばかりに` 接着告诉我们,那一瞪虽未出声,却带着这道命令。\n\n因为它读的是肢体语言,`〜とばかりに` 最自然地跟「看、笑、走、摔」这类旁人看得见的动作搭配。它生动而十分书面,是小说里会遇到、而非给朋友发消息会写的句子,所以把它珍藏给叙述和描写吧。",
      examples: [
        {
          jp: "早く行けとばかりに彼を見た",
          reading: "はやくいけとばかりにかれをみた",
          en: "He looked at me as if to say, “Go, quickly.”",
          zh: "他看着我,仿佛在说「快走」似的。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, IchidanVerb, PhraseWithParticle } from "typed-japanese";

type 早く = ProperNoun<"早く">;
type 彼 = ProperNoun<"彼">;
type 行く = GodanVerb & { stem: "行"; ending: "く" };
type 見る = IchidanVerb & { stem: "見"; ending: "る" };

// 早く + 行け(命令形) + とばかりに + 彼を + 見た(た形)
type 早く行けとばかりに彼を見た = \`\${早く}\${ConjugateVerb<行く, "命令形">}とばかりに\${PhraseWithParticle<彼, "を">}\${ConjugateVerb<見る, "た形">}\`;
`,
        },
        {
          jp: "待っていたとばかりに笑った",
          reading: "まっていたとばかりにわらった",
          en: "He smiled as if to say, “I've been waiting for this.”",
          zh: "他笑了,仿佛在说「我就等着这一刻」似的。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 待つ = GodanVerb & { stem: "待"; ending: "つ" };
type 笑う = GodanVerb & { stem: "笑"; ending: "う" };

// 待って(て形) + いた + とばかりに + 笑った(た形)
type 待っていたとばかりに笑った = \`\${ConjugateVerb<待つ, "て形">}いたとばかりに\${ConjugateVerb<笑う, "た形">}\`;
`,
        },
        {
          jp: "何も聞いていないとばかりに歩いた",
          reading: "なにもきいていないとばかりにあるいた",
          en: "She walked on as if to say she had heard nothing.",
          zh: "她径自走着,仿佛在说什么都没听见似的。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb } from "typed-japanese";

type 何も = ProperNoun<"何も">;
type 聞く = GodanVerb & { stem: "聞"; ending: "く" };
type 歩く = GodanVerb & { stem: "歩"; ending: "く" };

// 何も + 聞いて(て形) + いない + とばかりに + 歩いた(た形)
type 何も聞いていないとばかりに歩いた = \`\${何も}\${ConjugateVerb<聞く, "て形">}いないとばかりに\${ConjugateVerb<歩く, "た形">}\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
