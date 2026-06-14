import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i06",
  level: "intermediate",
  order: 6,
  titleEn: "The 〜ば conditional & 〜ば〜ほど",
  titleZh: "〜ば条件与〜ば〜ほど",
  summaryEn:
    "Someone hands you a gadget and asks how it works; you want to say “if you press this, the light comes on” — a clean, general rule. Back in chapter 16 you learned two “if” forms, `〜たら` (if/once, then) and `〜と` (automatic consequence), but neither states a neutral logical condition the way `〜ば` does. This chapter builds `〜ば` from the 仮定形 (hypothetical base), adds its negative `〜なければ`, and unlocks the elegant `〜ば〜ほど` pattern for “the more …, the more …”.",
  summaryZh:
    "有人把一个小装置递给你,问怎么用;你想说「一按这个,灯就亮」——一条干净、普遍的规则。早在第 16 章你就学过两种「如果」:`〜たら`(如果/一旦……就)和 `〜と`(自然而然的结果),但它们都不像 `〜ば` 那样陈述一个中性的逻辑条件。本章将从「仮定形(假定形)」构造出 `〜ば`,补上它的否定形式 `〜なければ`,并解锁优雅的 `〜ば〜ほど` 句型,意为「越……越……」。",
  points: [
    {
      id: "i06-1",
      titleEn: "Forming the 〜ば conditional (仮定形 + ば)",
      titleZh: "构成 〜ば 条件(仮定形 + ば)",
      bodyEn:
        "You already own two kinds of “if”. `〜たら` from chapter 16 was situational — “once this happens, then…”; `〜と` was automatic — “whenever A, B inevitably follows”. But suppose you just want to state a plain logical link, the kind you'd put in an instruction manual or a proverb: “if you hurry, you'll make it.” That neutral, hypothetical “if” is exactly what `〜ば` is for. The name 仮定形 literally means “hypothetical form”, so the grammar is purpose-built to present a pure condition-then-result connection.\n\nHere is how to build it. For godan verbs, shift the final `-u` sound to the matching `-e` sound and add `ば`: 急ぐ → 急げ + ば → `急げば`, 読む → 読め + ば → `読めば`. That `-e` base is the `仮定形`. For ichidan verbs, drop `る` and add `れば`: 食べる → `食べれば`, 考える → `考えれば`. The two irregulars are する → `すれば` and 来る → `来れば`. And い-adjectives swap `い` for `ければ`: 安い → `安ければ`, 高い → `高ければ`.\n\nThe shape is always two clauses: the `〜ば` clause names the condition, and the main clause gives the result. Picture yourself at the station glancing at the departures board — 急げば、間に合います, “if you hurry, you'll make it in time.” Or browsing a shop and thinking 安ければ、買います, “if it's cheap, I'll buy it.”\n\nThere is one nuance worth filing away early: because `〜ば` is so condition-focused, it leans toward general truths and hypotheticals. With seasonal or factual inevitabilities it reads almost like “when” — 春が来れば、暖かくなる, “when spring comes, it gets warm.” Save the situational, this-particular-time “if” for `〜たら`; reach for `〜ば` when you mean the rule itself.",
      bodyZh:
        "你已经掌握了两种「如果」。第 16 章的 `〜たら` 是情境性的——「一旦发生这件事,然后……」;`〜と` 是自动的——「每当 A,B 就必然随之而来」。但假设你只想陈述一个纯粹的逻辑联系,就像说明书或谚语里那种:「快点的话就来得及。」这种中性的、假设性的「如果」正是 `〜ば` 的用武之地。「仮定形」一词字面就是「假定的形态」,所以这套语法天生就是用来呈现一条干净的「条件—结果」连接的。\n\n变形方法如下。五段动词把词尾的 `-u` 音改成对应的 `-e` 音再加 `ば`:急ぐ → 急げ + ば → `急げば`,読む → 読め + ば → `読めば`。这个 `-e` 形即 `仮定形`。一段动词去掉 `る` 加 `れば`:食べる → `食べれば`,考える → `考えれば`。两个不规则动词为 する → `すれば`、来る → `来れば`。而い形容词把 `い` 换成 `ければ`:安い → `安ければ`,高い → `高ければ`。\n\n句式永远是两个分句:`〜ば` 从句陈述条件,主句给出结果。想象你站在车站瞥一眼发车时刻表——急げば、間に合います,「快点的话,就来得及」。或者在店里逛着心想 安ければ、買います,「便宜的话我就买」。\n\n有个值得早早记下的细微差别:正因为 `〜ば` 高度聚焦于条件本身,它偏向用于普遍真理和假设。对于季节或事实上的必然,它读起来几乎像「当……时」——春が来れば、暖かくなる,「春天一来,天气就会变暖」。情境性的、特定这一次的「如果」请留给 `〜たら`;当你说的是规则本身时,就用 `〜ば`。",
      examples: [
        {
          jp: "急げば、間に合います",
          reading: "いそげば、まにあいます",
          en: "If you hurry, you'll make it in time.",
          zh: "如果快点的话,就来得及。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 急ぐ = GodanVerb & { stem: "急"; ending: "ぐ" };
type 間に合う = GodanVerb & { stem: "間に合"; ending: "う" };

// 急ぐ(仮定形)=急げ → +ば → 急げば
type 急げば間に合います = \`\${ConjugateVerb<急ぐ, "仮定形">}ば、\${ConjugateVerb<間に合う, "ます形">}ます\`;
`,
        },
        {
          jp: "安ければ、買います",
          reading: "やすければ、かいます",
          en: "If it's cheap, I'll buy it.",
          zh: "如果便宜的话,我就买。",
          code: `import type { IAdjective, GodanVerb, ConjugateVerb } from "typed-japanese";

type 安い = IAdjective & { stem: "安"; ending: "い" };
type 買う = GodanVerb & { stem: "買"; ending: "う" };

// い-adjective: 安 + ければ → 安ければ
type 安ければ買います = \`\${安い["stem"]}ければ、\${ConjugateVerb<買う, "ます形">}ます\`;
`,
        },
        {
          jp: "春が来れば、暖かくなる",
          reading: "はるがくれば、あたたかくなる",
          en: "When spring comes, it gets warm.",
          zh: "春天一来,天气就会变暖。",
          code: `import type { IrregularVerb, IAdjective, ConjugateVerb, ProperNoun, PhraseWithParticle } from "typed-japanese";

type 来る = IrregularVerb & { dictionary: "来る" };
type 暖かい = IAdjective & { stem: "暖か"; ending: "い" };

// 来る(仮定形)=来れ → +ば → 来れば ; 暖か + くなる
type 春が来れば暖かくなる = \`\${PhraseWithParticle<ProperNoun<"春">, "が">}\${ConjugateVerb<来る, "仮定形">}ば、\${暖かい["stem"]}くなる\`;
`,
        },
      ],
    },
    {
      id: "i06-2",
      titleEn: "Negative conditional: 〜なければ",
      titleZh: "否定条件:〜なければ",
      bodyEn:
        "Often the condition you want to set is a negative one: “if you don't practice…”, “if I don't go…”. You already have the raw material for this — the plain negative `ない形` from chapter 13. The trick is to treat that `ない` as if it were an い-adjective: take the negative base, and instead of ending in `い`, end in `ければ`. In other words, just attach `なければ` to the negative stem. 行く → 行か(ない) → `行かなければ`; する → し(ない) → `しなければ`.\n\nThe logic mirrors the affirmative perfectly. Where `〜ば` says “if it holds, then…”, `〜なければ` says “if it does not hold, then…”. So 練習しなければ上手になりません reads literally “if you don't practice, you won't become skilled” — a coach's blunt advice at the end of a lesson.\n\nThis form is also the hidden engine behind something you met back in chapter 17: obligation. `〜なければなりません` (“must / have to”) is nothing more than this negative conditional plus なりません — literally “if you don't do it, it won't do.” So 行かなければなりません, “I have to go,” is really “if-I-don't-go, that-won't-do.” Seeing the seam between `〜なければ` and `なりません` makes that whole obligation pattern feel built rather than memorized.\n\nOne small caution: don't confuse `〜なければ` (the condition “if not”) with the full `〜なければならない` (the obligation). The conditional half can stand on its own, as in the practice example — you only add ならない / なりません when you specifically mean must.",
      bodyZh:
        "你想设的条件常常是个否定条件:「不练习的话……」「我不去的话……」。其实你早就有了构造它的原料——第 13 章的简体否定 `ない形`。诀窍是把这个 `ない` 当成一个い形容词来处理:取否定词干,词尾不收 `い` 而收 `ければ`。换句话说,就是在否定词干后接 `なければ`。行く → 行か(ない) → `行かなければ`;する → し(ない) → `しなければ`。\n\n它的逻辑与肯定形完全对称。`〜ば` 说「成立的话,就……」,`〜なければ` 就说「不成立的话,就……」。于是 練習しなければ上手になりません 字面就是「不练习的话,就不会变熟练」——一句教练在课末给出的直白忠告。\n\n这个形式还是你在第 17 章见过的「义务」表达背后的隐藏引擎。`〜なければなりません`(「必须/不得不」)无非就是这个否定条件加上 なりません——字面意为「如果不做,就不行」。所以 行かなければなりません「我必须去」,实际上是「不去的话—那可不行」。看清 `〜なければ` 与 `なりません` 之间的接缝,会让整个义务句型像是被搭建出来的,而不是死记硬背来的。\n\n一点小提醒:别把 `〜なければ`(「如果不」这个条件)和完整的 `〜なければならない`(义务)混为一谈。条件那一半可以单独成立,正如练习例句所示——只有当你确实想表达「必须」时,才补上 ならない / なりません。",
      examples: [
        {
          jp: "行かなければなりません",
          reading: "いかなければなりません",
          en: "I have to go.",
          zh: "我必须去。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 行く(ない形)=行か → +なければなりません
type 行かなければなりません = \`\${ConjugateVerb<行く, "ない形">}なければなりません\`;
`,
        },
        {
          jp: "練習しなければ上手になりません",
          reading: "れんしゅうしなければじょうずになりません",
          en: "If you don't practice, you won't get good at it.",
          zh: "不练习的话就不会变熟练。",
          code: `import type { IrregularVerb, ConjugateVerb, ProperNoun } from "typed-japanese";

type する = IrregularVerb & { dictionary: "する" };
type 練習 = ProperNoun<"練習">;
type 上手 = ProperNoun<"上手">;

// する(ない形)=し → 練習し + なければ ; 上手になりません
type 練習しなければ上手になりません = \`\${練習}\${ConjugateVerb<する, "ない形">}なければ\${上手}になりません\`;
`,
        },
      ],
    },
    {
      id: "i06-3",
      titleEn: "〜ば〜ほど — “the more …, the more …”",
      titleZh: "〜ば〜ほど ——「越……越……」",
      bodyEn:
        "Here is a thought you couldn't yet express: scaling two things together. You're writing a recipe note and want to say “the longer you simmer it, the tastier it gets,” or texting a friend “the sooner you reply, the better.” In English you reach for “the more …, the more …”; Japanese builds the very same idea by doubling the `〜ば` conditional onto itself.\n\nThe pattern is `Vば Vる + ほど` for verbs, and `Aければ Aい + ほど` for い-adjectives. You say the same word twice: first in its `〜ば` form (the condition), then in its dictionary/basic form followed by `ほど`. That `ほど` originally means “extent”, so the literal sense is “if you read it, to the extent that you read it…” — Japanese is quite literally measuring how far the condition is pushed. For a verb: 読めば 読む + ほど → `読めば読むほど`. For an い-adjective: 高ければ 高い + ほど → `高ければ高いほど`. The result clause then names what climbs along with it.\n\nSo flipping through a gripping novel you'd say 読めば読むほど面白い, “the more you read it, the more interesting it gets.” Haggling over quality you might shrug 高ければ高いほどいい, “the higher the price, the better.” And ichidan verbs follow the same recipe — 考えれば考えるほど分からなくなる, “the more I think about it, the less I understand,” a phrase you'll genuinely want when a problem only deepens the harder you stare at it.\n\nTwo things to watch. First, the inner word must match — the same verb or adjective appears on both sides; you don't mix two different words here. Second, notice the result can itself shrink rather than grow: in the last example the thing that increases is the not-understanding (`分からなくなる`), so “the more … the more” comfortably covers “the more … the less” too.",
      bodyZh:
        "这里有一个你此前还无法表达的想法:让两件事一起递进。你在写一份食谱备注,想说「炖得越久越好吃」,或者给朋友发消息「越早回越好」。英语里你会用「the more …, the more …」;日语则把 `〜ば` 条件形叠加到它自身,来表达完全相同的意思。\n\n句型是动词的 `Vば Vる + ほど`,和い形容词的 `Aければ Aい + ほど`。同一个词说两遍:先用它的 `〜ば` 形(条件),再用辞书形/基本形接 `ほど`。`ほど` 本义是「程度」,所以字面意思是「如果你读它,达到你读它的那个程度……」——日语简直是在丈量条件被推进到了多远。动词:読めば 読む + ほど → `読めば読むほど`。い形容词:高ければ 高い + ほど → `高ければ高いほど`。之后的结果从句说明随之攀升的东西。\n\n于是翻看一本引人入胜的小说,你会说 読めば読むほど面白い,「越读越有意思」。讨价还价谈品质时,你可能耸耸肩 高ければ高いほどいい,「越贵越好」。一段动词遵循同样的配方——考えれば考えるほど分からなくなる,「越想越搞不懂」,当一个问题越盯越乱时,你会真心想用上这句话。\n\n有两点要留意。第一,里面的词必须一致——两侧出现的是同一个动词或形容词,这里不能混用两个不同的词。第二,注意结果本身可以是递减而非递增:在最后那个例子里,递增的恰恰是「搞不懂」(`分からなくなる`),所以「越……越……」也从容地涵盖了「越……越不……」。",
      examples: [
        {
          jp: "読めば読むほど面白い",
          reading: "よめばよむほどおもしろい",
          en: "The more you read it, the more interesting it gets.",
          zh: "越读越有意思。",
          code: `import type { GodanVerb, IAdjective, ConjugateVerb, ConjugateAdjective } from "typed-japanese";

type 読む = GodanVerb & { stem: "読"; ending: "む" };
type 面白い = IAdjective & { stem: "面白"; ending: "い" };

// 読め(仮定形)+ば + 読む(辞書形)+ ほど + 面白い
type 読めば読むほど面白い = \`\${ConjugateVerb<読む, "仮定形">}ば\${ConjugateVerb<読む, "辞書形">}ほど\${ConjugateAdjective<面白い, "基本形">}\`;
`,
        },
        {
          jp: "高ければ高いほどいい",
          reading: "たかければたかいほどいい",
          en: "The higher (the price), the better.",
          zh: "越贵越好。",
          code: `import type { IAdjective, ConjugateAdjective } from "typed-japanese";

type 高い = IAdjective & { stem: "高"; ending: "い" };
type いい = IAdjective & { stem: "い"; ending: "い"; irregular: true };

// 高 + ければ + 高い(基本形)+ ほど + いい
type 高ければ高いほどいい = \`\${高い["stem"]}ければ\${ConjugateAdjective<高い, "基本形">}ほど\${ConjugateAdjective<いい, "基本形">}\`;
`,
        },
        {
          jp: "考えれば考えるほど分からなくなる",
          reading: "かんがえればかんがえるほどわからなくなる",
          en: "The more I think about it, the less I understand.",
          zh: "越想越搞不懂。",
          code: `import type { IchidanVerb, GodanVerb, ConjugateVerb } from "typed-japanese";

type 考える = IchidanVerb & { stem: "考え"; ending: "る" };
type 分かる = GodanVerb & { stem: "分か"; ending: "る" };

// ichidan: 考え + れば + 考える(辞書形)+ ほど ; 分か(ない形)+ なくなる
type 考えれば考えるほど分からなくなる = \`\${考える["stem"]}れば\${ConjugateVerb<考える, "辞書形">}ほど\${ConjugateVerb<分かる, "ない形">}なくなる\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
