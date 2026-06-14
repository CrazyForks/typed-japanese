import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i15",
  level: "intermediate",
  order: 15,
  titleEn: "Nominalization の・こと, 〜とき",
  titleZh: "名词化の・こと与〜とき",
  summaryEn:
    "Japanese turns whole clauses into noun-like units so they can take particles and become subjects or objects. This chapter covers the two main nominalizers — `の` and `こと` — when each is preferred and where they overlap, plus the time expression `〜とき` (“when…”), which attaches to a plain-form clause to set the scene for the main event.",
  summaryZh:
    "日语可以把整个小句变成相当于名词的成分,从而接续助词、充当主语或宾语。本章介绍两个主要的名词化标记 —— `の` 与 `こと` —— 各自的偏好用法及其重叠之处,以及表示时间的 `〜とき`(「……的时候」):它接在简体形小句之后,为主句事件设定背景。",
  points: [
    {
      id: "i15-1",
      titleEn: "の as a nominalizer",
      titleZh: "名词化标记 の",
      bodyEn:
        "Attach `の` to the plain form of a verb or adjective to turn the whole clause into a noun phrase: `食べる` (to eat) → `食べるの` (the act of eating / eating). The resulting noun can then take any particle — `を`, `が`, `は`, and so on.\n\n`の` is preferred when the clause describes something concrete, immediate, or perceived directly: things you see, hear, like, or are good/bad at. For example `日本語を話すのは難しい` (“Speaking Japanese is hard”).",
      bodyZh:
        "在动词或形容词的简体形后接 `の`,即可把整个小句变成名词性短语:`食べる`(吃)→ `食べるの`(吃这件事)。变成名词后就能接任何助词 —— `を`、`が`、`は` 等。\n\n当小句描述的是具体、即时或可直接感知的事物时,偏向用 `の`:你所看到、听到、喜欢、或擅长/不擅长的事。例如 `日本語を話すのは難しい`(「说日语很难」)。",
      examples: [
        {
          jp: "食べるのが好きです",
          reading: "たべるのがすきです",
          en: "I like eating.",
          zh: "我喜欢吃东西。",
          code: `import type { IchidanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// 食べる (辞書形) + の (nominalizer) + が + 好きです
type 食べるのが好きです = \`\${PhraseWithParticle<\`\${ConjugateVerb<食べる, "辞書形">}の\`, "が">}好きです\`;
`,
        },
        {
          jp: "日本語を話すのは難しい",
          reading: "にほんごをはなすのはむずかしい",
          en: "Speaking Japanese is difficult.",
          zh: "说日语很难。",
          code: `import type { GodanVerb, ConjugateVerb, IAdjective, ConjugateAdjective, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 日本語 = ProperNoun<"日本語">;
type 話す = GodanVerb & { stem: "話"; ending: "す" };
type 難しい = IAdjective & { stem: "難し"; ending: "い" };

// 日本語 + を + 話す (辞書形) + の + は + 難しい (基本形)
type 日本語を話すのは難しい = \`\${PhraseWithParticle<日本語, "を">}\${PhraseWithParticle<\`\${ConjugateVerb<話す, "辞書形">}の\`, "は">}\${ConjugateAdjective<難しい, "基本形">}\`;
`,
        },
      ],
    },
    {
      id: "i15-2",
      titleEn: "こと as a nominalizer",
      titleZh: "名词化标记 こと",
      bodyEn:
        "`こと` also nominalizes a plain-form clause, but it leans toward the abstract: facts, habits, rules, and reported or general statements. `日本語を話すことは難しい` is fully grammatical, with a slightly more bookish feel than the `の` version.\n\nSome patterns are fixed and require one or the other. `こと` is obligatory before a copula in definitions and before set expressions like `〜ことができる` (can do) and `〜ことがある` (there are times when…). By contrast, verbs of perception (`見る`, `聞こえる`) demand `の`.",
      bodyZh:
        "`こと` 同样把简体形小句名词化,但更偏向抽象层面:事实、习惯、规则,以及转述或一般性的陈述。`日本語を話すことは難しい` 完全合乎语法,只是比用 `の` 的说法略显书面。\n\n有些句型固定只能用其一。在下定义、接系动词时,以及在固定表达 `〜ことができる`(能够)、`〜ことがある`(有时会……)之前,必须用 `こと`。相反,感知类动词(`見る`、`聞こえる`)则要求用 `の`。",
      examples: [
        {
          jp: "日本語を話すことは難しい",
          reading: "にほんごをはなすことはむずかしい",
          en: "Speaking Japanese is difficult.",
          zh: "说日语是很难的。",
          code: `import type { GodanVerb, ConjugateVerb, IAdjective, ConjugateAdjective, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 日本語 = ProperNoun<"日本語">;
type 話す = GodanVerb & { stem: "話"; ending: "す" };
type 難しい = IAdjective & { stem: "難し"; ending: "い" };

// 日本語 + を + 話す (辞書形) + こと + は + 難しい (基本形)
type 日本語を話すことは難しい = \`\${PhraseWithParticle<日本語, "を">}\${PhraseWithParticle<\`\${ConjugateVerb<話す, "辞書形">}こと\`, "は">}\${ConjugateAdjective<難しい, "基本形">}\`;
`,
        },
        {
          jp: "私の趣味は本を読むことです",
          reading: "わたしのしゅみはほんをよむことです",
          en: "My hobby is reading books.",
          zh: "我的爱好是读书。",
          code: `import type { GodanVerb, ConjugateVerb, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 私の趣味 = ProperNoun<"私の趣味">;
type 本 = ProperNoun<"本">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };

// 私の趣味 + は + 本 + を + 読む (辞書形) + こと + です
type 私の趣味は本を読むことです = \`\${PhraseWithParticle<私の趣味, "は">}\${PhraseWithParticle<本, "を">}\${ConjugateVerb<読む, "辞書形">}ことです\`;
`,
        },
        {
          jp: "日本語を話すことができます",
          reading: "にほんごをはなすことができます",
          en: "I can speak Japanese.",
          zh: "我会说日语。",
          code: `import type { GodanVerb, ConjugateVerb, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 日本語 = ProperNoun<"日本語">;
type 話す = GodanVerb & { stem: "話"; ending: "す" };

// 日本語 + を + 話す (辞書形) + こと + が + できます
type 日本語を話すことができます = \`\${PhraseWithParticle<日本語, "を">}\${PhraseWithParticle<\`\${ConjugateVerb<話す, "辞書形">}こと\`, "が">}できます\`;
`,
        },
      ],
    },
    {
      id: "i15-3",
      titleEn: "〜とき — “when…”",
      titleZh: "〜とき ——「……的时候」",
      bodyEn:
        "`とき` (時, “time”) sets up a temporal frame: `[clause] とき、[main clause]` means “when [clause], [main clause]”. The clause before `とき` is in plain form. A verb or i-adjective attaches directly (`食べるとき`, `寒いとき`); a noun or na-adjective links with `の` (`子供のとき` = “when I was a child”).\n\nThe tense of the verb before `とき` is relative: dictionary form means the main action happens *before/while* that event, while た-form means it happens *after* it. Here we focus on the basic dictionary-form pattern.",
      bodyZh:
        "`とき`(時,「时候」)用来设定一个时间框架:`[小句] とき、[主句]` 表示「当[小句]时,[主句]」。`とき` 前的小句用简体形。动词或イ形容词直接接续(`食べるとき`、`寒いとき`);名词或ナ形容词则用 `の` 连接(`子供のとき` =「小时候」)。\n\n`とき` 前动词的时态是相对的:辞书形表示主句动作发生在该事件*之前或同时*,而た形表示发生在其*之后*。此处我们着重于最基本的辞书形句型。",
      examples: [
        {
          jp: "本を読むとき、眼鏡をかけます",
          reading: "ほんをよむとき、めがねをかけます",
          en: "When I read books, I wear glasses.",
          zh: "看书的时候,我会戴眼镜。",
          code: `import type { GodanVerb, IchidanVerb, ConjugateVerb, ProperNoun, PhraseWithParticle, ConnectedPhrases } from "typed-japanese";

type 本 = ProperNoun<"本">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };
type 眼鏡 = ProperNoun<"眼鏡">;
type かける = IchidanVerb & { stem: "かけ"; ending: "る" };

type 本を読むとき = \`\${PhraseWithParticle<本, "を">}\${ConjugateVerb<読む, "辞書形">}とき\`;
type 眼鏡をかけます = \`\${PhraseWithParticle<眼鏡, "を">}\${ConjugateVerb<かける, "ます形">}ます\`;

// 本を読むとき + 、 + 眼鏡をかけます
type 本を読むとき眼鏡をかけます = ConnectedPhrases<本を読むとき, 眼鏡をかけます>;
`,
        },
        {
          jp: "子供のとき、よく泣きました",
          reading: "こどものとき、よくなきました",
          en: "When I was a child, I cried a lot.",
          zh: "小时候,我经常哭。",
          code: `import type { GodanVerb, ConjugateVerb, ProperNoun, PhraseWithParticle, ConnectedPhrases } from "typed-japanese";

type 子供 = ProperNoun<"子供">;
type よく = ProperNoun<"よく">;
type 泣く = GodanVerb & { stem: "泣"; ending: "く" };

// 子供 + の + とき
type 子供のとき = \`\${PhraseWithParticle<子供, "の">}とき\`;
// よく + 泣き (ます形) + ました
type よく泣きました = \`\${よく}\${ConjugateVerb<泣く, "ます形">}ました\`;

type 子供のときよく泣きました = ConnectedPhrases<子供のとき, よく泣きました>;
`,
        },
        {
          jp: "寒いとき、コートを着ます",
          reading: "さむいとき、コートをきます",
          en: "When it's cold, I wear a coat.",
          zh: "天冷的时候,我会穿大衣。",
          code: `import type { IAdjective, ConjugateAdjective, IchidanVerb, ConjugateVerb, ProperNoun, PhraseWithParticle, ConnectedPhrases } from "typed-japanese";

type 寒い = IAdjective & { stem: "寒"; ending: "い" };
type コート = ProperNoun<"コート">;
type 着る = IchidanVerb & { stem: "着"; ending: "る" };

// 寒い (基本形) + とき
type 寒いとき = \`\${ConjugateAdjective<寒い, "基本形">}とき\`;
// コート + を + 着 (ます形) + ます
type コートを着ます = \`\${PhraseWithParticle<コート, "を">}\${ConjugateVerb<着る, "ます形">}ます\`;

type 寒いときコートを着ます = ConnectedPhrases<寒いとき, コートを着ます>;
`,
        },
      ],
    },
  ],
};

export default chapter;
