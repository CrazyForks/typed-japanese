import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i02",
  level: "intermediate",
  order: 2,
  titleEn: "Causative 使役",
  titleZh: "使役态",
  summaryEn:
    "The causative form (使役形) lets you say that someone makes or lets another person do something. Godan verbs take 〜せる, while ichidan and irregular verbs take 〜させる. The same form covers both coercion (“make X do”) and permission (“let X do”) — the particles and context tell them apart.",
  summaryZh:
    "使役态(使役形)用来表达「让/叫某人做某事」。五段动词变成「〜せる」,一段动词和不规则动词变成「〜させる」。同一个形式既能表示强制(「让某人做」)也能表示许可(「准许某人做」)—— 靠助词和语境来区分。",
  points: [
    {
      id: "i02-1",
      titleEn: "Forming the causative: 〜せる / 〜させる",
      titleZh: "使役态的构成:〜せる / 〜させる",
      bodyEn:
        "For a godan verb, change the final `-u` to the `-a` row and add `せる`: 飲む → 飲ま + せる → `飲ませる`. (Verbs ending in `う` use `わ`, e.g. 買う → 買わせる.)\n\nFor a ichidan verb, drop `る` and add `させる`: 食べる → 食べさせる. The two irregular verbs are `する → させる` and `来る → 来させる`. Every causative verb behaves like a new ichidan verb (it ends in `せる`), so it conjugates further just like 食べる.",
      bodyZh:
        "五段动词把词尾的 `-u` 段改成 `-a` 段再加 `せる`:飲む → 飲ま + せる → `飲ませる`。(以 `う` 结尾的动词用 `わ`,如 買う → 買わせる。)\n\n一段动词去掉 `る` 加 `させる`:食べる → 食べさせる。两个不规则动词是 `する → させる`、`来る → 来させる`。所有使役动词都以 `せる` 结尾,可视为新的一段动词,后续变形与 食べる 相同。",
      examples: [
        {
          jp: "飲ませる",
          reading: "のませる",
          en: "to make/let (someone) drink",
          zh: "让(某人)喝",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// godan 使役形 returns the -a stem 飲ま, then add せる
type 飲ませる = \`\${ConjugateVerb<飲む, "使役形">}せる\`;
`,
        },
        {
          jp: "行かせる",
          reading: "いかせる",
          en: "to make/let (someone) go",
          zh: "让(某人)去",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 行く = GodanVerb & { stem: "行"; ending: "く" };

type 行かせる = \`\${ConjugateVerb<行く, "使役形">}せる\`;
`,
        },
        {
          jp: "させる",
          reading: "させる",
          en: "to make/let (someone) do",
          zh: "让(某人)做",
          code: `import type { IrregularVerb, ConjugateVerb } from "typed-japanese";

type する = IrregularVerb & { dictionary: "する" };

// する 使役形 returns させ, then add る
type させる = \`\${ConjugateVerb<する, "使役形">}る\`;
`,
        },
      ],
    },
    {
      id: "i02-2",
      titleEn: "Making someone do: 〜に / 〜を … 使役",
      titleZh: "强制做某事:〜に / 〜を … 使役",
      bodyEn:
        "The causer is the subject (often marked `は`). For an intransitive verb the person made to act is marked with `を`: 子供を泣かせる “make the child cry”. For a transitive verb that person takes `に`, because `を` is already used by the object: 先生は学生に本を読ませる “the teacher makes the students read a book”.",
      bodyZh:
        "使役的施动者是主语(常用 `は` 提示)。对不及物动词,被驱使的人用 `を` 标记:子供を泣かせる「让孩子哭」。对及物动词,这个人用 `に` 标记,因为 `を` 已被宾语占用:先生は学生に本を読ませる「老师让学生读书」。",
      examples: [
        {
          jp: "母は弟を泣かせた",
          reading: "はははおとうとをなかせた",
          en: "Mother made my little brother cry.",
          zh: "妈妈把弟弟弄哭了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 母 = ProperNoun<"母">;
type 弟 = ProperNoun<"弟">;
type 泣く = GodanVerb & { stem: "泣"; ending: "く" };

// causative 泣かせる, then its plain past (ichidan-style): 泣かせ + た
type 母は弟を泣かせた = \`\${PhraseWithParticle<母, "は">}\${PhraseWithParticle<弟, "を">}\${ConjugateVerb<泣く, "使役形">}せた\`;
`,
        },
        {
          jp: "先生は学生に本を読ませる",
          reading: "せんせいはがくせいにほんをよませる",
          en: "The teacher makes the students read a book.",
          zh: "老师让学生读书。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 先生 = ProperNoun<"先生">;
type 学生 = ProperNoun<"学生">;
type 本 = ProperNoun<"本">;
type 読む = GodanVerb & { stem: "読"; ending: "む" };

type 先生は学生に本を読ませる = \`\${PhraseWithParticle<先生, "は">}\${PhraseWithParticle<学生, "に">}\${PhraseWithParticle<本, "を">}\${ConjugateVerb<読む, "使役形">}せる\`;
`,
        },
      ],
    },
    {
      id: "i02-3",
      titleEn: "Letting someone do: permission 使役",
      titleZh: "许可做某事:表许可的使役",
      bodyEn:
        "The very same form expresses permission — “let / allow someone to do”. The reading (coerce vs. allow) depends on context and is often clarified by adding `〜てあげる` (do as a favour) or `〜てください`.\n\nA common polite request is `〜させてください` “please let me do…”, built from the causative `て` form plus `ください`.",
      bodyZh:
        "完全相同的形式也能表示许可 ——「让/准许某人做」。究竟是强制还是许可取决于语境,常通过加 `〜てあげる`(为对方做)或 `〜てください` 来明确。\n\n一个常用的礼貌请求是 `〜させてください`「请让我做…」,由使役态的 `て` 形加 `ください` 构成。",
      examples: [
        {
          jp: "子供を遊ばせる",
          reading: "こどもをあそばせる",
          en: "to let the children play",
          zh: "让孩子们玩。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 子供 = ProperNoun<"子供">;
type 遊ぶ = GodanVerb & { stem: "遊"; ending: "ぶ" };

type 子供を遊ばせる = \`\${PhraseWithParticle<子供, "を">}\${ConjugateVerb<遊ぶ, "使役形">}せる\`;
`,
        },
        {
          jp: "行かせてください",
          reading: "いかせてください",
          en: "Please let me go.",
          zh: "请让我去。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 行く = GodanVerb & { stem: "行"; ending: "く" };

// causative 行かせる → て形 行かせて → 行かせてください
type 行かせてください = \`\${ConjugateVerb<行く, "使役形">}せてください\`;
`,
        },
      ],
    },
    {
      id: "i02-4",
      titleEn: "Polite causative: 〜せます / 〜させます",
      titleZh: "礼貌体使役:〜せます / 〜させます",
      bodyEn:
        "Because every causative verb ends in `せる` and inflects like an ichidan verb, the polite present is `〜せます` (and the negative `〜せません`, the past `〜せました`). Just drop the final `る` and add `ます`.",
      bodyZh:
        "由于使役动词都以 `せる` 结尾、按一段动词变形,礼貌体现在式就是 `〜せます`(否定 `〜せません`,过去 `〜せました`)。去掉词尾 `る` 加 `ます` 即可。",
      examples: [
        {
          jp: "母は私に野菜を食べさせます",
          reading: "ははわたしにやさいをたべさせます",
          en: "Mother makes me eat vegetables.",
          zh: "妈妈让我吃蔬菜。",
          code: `import type { ProperNoun, PhraseWithParticle } from "typed-japanese";

type 母 = ProperNoun<"母">;
type 私 = ProperNoun<"私">;
type 野菜 = ProperNoun<"野菜">;

// 食べる is ichidan: causative 食べさせる, polite 食べさせます (spelled literally)
type 母は私に野菜を食べさせます = \`\${PhraseWithParticle<母, "は">}\${PhraseWithParticle<私, "に">}\${PhraseWithParticle<野菜, "を">}食べさせます\`;
`,
        },
        {
          jp: "毎日子供に勉強させます",
          reading: "まいにちこどもにべんきょうさせます",
          en: "(I) make the child study every day.",
          zh: "每天让孩子学习。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 子供 = ProperNoun<"子供">;
type する = IrregularVerb & { dictionary: "する" };

// 勉強する → causative 勉強させる → polite 勉強させます (させ + ます)
type 毎日子供に勉強させます = \`毎日\${PhraseWithParticle<子供, "に">}勉強\${ConjugateVerb<する, "使役形">}ます\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
