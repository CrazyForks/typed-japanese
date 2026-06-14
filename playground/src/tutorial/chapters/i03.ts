import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i03",
  level: "intermediate",
  order: 3,
  titleEn: "Causative-passive 使役受身",
  titleZh: "使役被动",
  summaryEn:
    "The causative-passive form `〜させられる` says that the subject was *made* to do something — usually against their will. It stacks the causative (make/let) and the passive (be -ed) on top of each other, so it is the go-to pattern for expressing reluctance, obligation, or being forced. This chapter builds the form for each verb group, adds the spoken contraction `〜される`, and shows how it works inside real sentences.",
  summaryZh:
    "使役被动形「〜させられる」表示主语「被迫」做某事 —— 通常是不情愿的。它把使役(让/叫)和被动(被)叠加在一起,因此是表达「无奈、被强迫、不得不」的核心句型。本章会分别讲解各类动词的变形、口语缩约形「〜される」,并演示它在真实句子中的用法。",
  points: [
    {
      id: "i03-1",
      titleEn: "Group I (godan): 〜（a）せられる",
      titleZh: "一类动词(五段):〜(a)せられる",
      bodyEn:
        "Take the causative stem of a godan verb — the `-a` row (the same base you use for `ない`) — and attach `せられる`. For `飲む` the causative stem is `飲ま`, giving `飲ませられる` (“to be made to drink”).\n\nThe whole thing conjugates like an ichidan verb, so the past is `〜せられた` and the polite present is `〜せられます`. Think of it as causative `〜せる` with passive `〜られる` glued on the end.",
      bodyZh:
        "取五段动词的使役词干 —— 即 `-a` 段(和接 `ない` 时相同的形态),再加上 `せられる`。`飲む` 的使役词干是 `飲ま`,于是得到 `飲ませられる`(被迫喝)。\n\n整体像一类(下一段)动词那样变化,所以过去式是 `〜せられた`,礼貌体现在式是 `〜せられます`。可以理解为使役 `〜せる` 后面再粘上被动 `〜られる`。",
      examples: [
        {
          jp: "弟は薬を飲ませられた",
          reading: "おとうとはくすりをのませられた",
          en: "My little brother was made to take the medicine.",
          zh: "弟弟被迫吃了药。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 弟 = ProperNoun<"弟">;
type 飲む = GodanVerb & { stem: "飲"; ending: "む" };

// 弟 + は + 薬を + [飲む causative stem 飲ま] + せられた
type 弟は薬を飲ませられた = \`\${PhraseWithParticle<弟, "は">}薬を\${ConjugateVerb<飲む, "使役形">}せられた\`;
`,
        },
        {
          jp: "毎日塾に行かせられます",
          reading: "まいにちじゅくにいかせられます",
          en: "I am made to go to cram school every day.",
          zh: "我每天都被逼着去补习班。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 行く = GodanVerb & { stem: "行"; ending: "く" };

// 毎日塾に + [行く causative stem 行か] + せられます
type 毎日塾に行かせられます = \`毎日塾に\${ConjugateVerb<行く, "使役形">}せられます\`;
`,
        },
      ],
    },
    {
      id: "i03-2",
      titleEn: "Group II (ichidan) & Group III (irregular): 〜させられる",
      titleZh: "二类(上下一段)与三类(不规则):〜させられる",
      bodyEn:
        "For ichidan verbs, drop the final `る` and add `させられる`: `食べる` → `食べさせられる`. The irregular verbs follow suit: `する` → `させられる`, `来る` → `来させられる`.\n\nBecause so many `する`-verbs exist (`勉強する`, `残業する`…), `〜させられる` is extremely common for describing duties you are forced into.",
      bodyZh:
        "二类动词去掉词尾 `る`,加上 `させられる`:`食べる` → `食べさせられる`。不规则动词同理:`する` → `させられる`,`来る` → `来させられる`。\n\n由于 `する` 类动词非常多(`勉強する`、`残業する` 等),`〜させられる` 在描述「被迫承担的任务」时极为常见。",
      examples: [
        {
          jp: "私は野菜を食べさせられた",
          reading: "わたしはやさいをたべさせられた",
          en: "I was made to eat the vegetables.",
          zh: "我被逼着把蔬菜吃了。",
          code: `import type { ProperNoun, IchidanVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 食べる = IchidanVerb & { stem: "食べ"; ending: "る" };

// 私 + は + 野菜を + [食べ stem] + させられた
type 私は野菜を食べさせられた = \`\${PhraseWithParticle<私, "は">}野菜を\${食べる["stem"]}させられた\`;
`,
        },
        {
          jp: "私は部長に残業させられた",
          reading: "わたしはぶちょうにざんぎょうさせられた",
          en: "I was made to work overtime by the department head.",
          zh: "我被部长逼着加了班。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 部長 = ProperNoun<"部長">;
type する = IrregularVerb & { dictionary: "する" };

// 私は + 部長に + 残業 + [する causative させ] + られた
type 私は部長に残業させられた = \`\${PhraseWithParticle<私, "は">}\${PhraseWithParticle<部長, "に">}残業\${ConjugateVerb<する, "使役形">}られた\`;
`,
        },
      ],
    },
    {
      id: "i03-3",
      titleEn: "The spoken contraction: 〜される",
      titleZh: "口语缩约形:〜される",
      bodyEn:
        "In everyday speech the godan ending `〜せられる` contracts to `〜される`: `飲ませられる` → `飲まされる`, `待たせられる` → `待たされる`. Build it from the same causative stem plus `される`.\n\nNote: verbs whose causative stem already ends in `さ` (the `〜す` group, e.g. `話す`) do **not** contract, to avoid `ささ`. Group II and III verbs never use this contraction.",
      bodyZh:
        "在日常口语中,五段动词的词尾 `〜せられる` 会缩约成 `〜される`:`飲ませられる` → `飲まされる`,`待たせられる` → `待たされる`。用同样的使役词干加上 `される` 即可。\n\n注意:使役词干本身以 `さ` 结尾的动词(`〜す` 类,如 `話す`)不缩约,以免出现 `ささ`。二类、三类动词也不使用这种缩约形。",
      examples: [
        {
          jp: "私は歌を歌わされた",
          reading: "わたしはうたをうたわされた",
          en: "I was made to sing a song.",
          zh: "我被逼着唱了首歌。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 歌う = GodanVerb & { stem: "歌"; ending: "う" };

// 私は + 歌を + [歌う causative stem 歌わ] + された (contraction of 歌わせられた)
type 私は歌を歌わされた = \`\${PhraseWithParticle<私, "は">}歌を\${ConjugateVerb<歌う, "使役形">}された\`;
`,
        },
        {
          jp: "一時間も待たされた",
          reading: "いちじかんもまたされた",
          en: "I was kept waiting for a whole hour.",
          zh: "我被迫等了整整一个小时。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 待つ = GodanVerb & { stem: "待"; ending: "つ" };

// 一時間も + [待つ causative stem 待た] + された
type 一時間も待たされた = \`一時間も\${ConjugateVerb<待つ, "使役形">}された\`;
`,
        },
      ],
    },
    {
      id: "i03-4",
      titleEn: "Expressing reluctance & spontaneity",
      titleZh: "表达无奈与情不自禁",
      bodyEn:
        "Beyond literal coercion, `〜させられる` carries a strong nuance of *reluctance* — the subject did it but did not want to. The agent who forced the action is marked with `に`.\n\nIt also has a softer use: when something *makes you feel* an emotion spontaneously, as in `笑わされる` (“to be made to laugh”) or `考えさせられる` (“to be made to think / food for thought”), often with no blame attached at all.",
      bodyZh:
        "除了字面上的强迫,`〜させられる` 还带有强烈的「无奈」语气 —— 主语做了,但并不情愿。施加动作的人用 `に` 标示。\n\n它还有较柔和的用法:当某事使你「不由自主」产生某种情绪时,如 `笑わされる`(被逗笑)、`考えさせられる`(令人深思),往往完全不含责备之意。",
      examples: [
        {
          jp: "子供は毎日勉強させられる",
          reading: "こどもはまいにちべんきょうさせられる",
          en: "Children are made to study every day.",
          zh: "孩子们每天都被逼着学习。",
          code: `import type { ProperNoun, IrregularVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 子供 = ProperNoun<"子供">;
type する = IrregularVerb & { dictionary: "する" };

// 子供は + 毎日 + 勉強 + [する causative させ] + られる
type 子供は毎日勉強させられる = \`\${PhraseWithParticle<子供, "は">}毎日勉強\${ConjugateVerb<する, "使役形">}られる\`;
`,
        },
        {
          jp: "私は笑わされた",
          reading: "わたしはわらわされた",
          en: "I couldn't help being made to laugh.",
          zh: "我被逗得忍不住笑了。",
          code: `import type { ProperNoun, GodanVerb, ConjugateVerb, PhraseWithParticle } from "typed-japanese";

type 私 = ProperNoun<"私">;
type 笑う = GodanVerb & { stem: "笑"; ending: "う" };

// 私は + [笑う causative stem 笑わ] + された (spontaneous reaction)
type 私は笑わされた = \`\${PhraseWithParticle<私, "は">}\${ConjugateVerb<笑う, "使役形">}された\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
