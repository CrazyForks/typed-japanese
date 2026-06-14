import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e14",
  level: "elementary",
  order: 14,
  titleEn: "Permission & prohibition",
  titleZh: "许可与禁止",
  summaryEn:
    "Once you can make the te-form (〜て) of a verb, two everyday patterns open up: `〜てもいいです` to grant permission (“you may…”) and `〜てはいけません` to forbid (“you must not…”). This chapter shows how to ask for permission, give it, and tell someone something is not allowed.",
  summaryZh:
    "学会动词的「て形」之后,就能掌握两个日常句型:`〜てもいいです` 用来给予许可(「可以……」),`〜てはいけません` 用来表示禁止(「不可以……」)。本章讲解如何请求许可、给予许可,以及告诉对方某事不被允许。",
  points: [
    {
      id: "e14-1",
      titleEn: "〜てもいいです — permission (“may / it's OK to”)",
      titleZh: "〜てもいいです —— 许可(「可以……」)",
      bodyEn:
        "Attach `もいいです` to the te-form of a verb to say that an action is permitted: “it's OK to…”, “you may…”. The literal sense is “even if you do X, it's fine”.\n\nTo *ask* for permission, add the question particle `か`: `〜てもいいですか` (“May I…?”). A common reply granting it is `はい、いいですよ` (“Yes, go ahead”).\n\nThe te-form is the only part that changes by verb type: `食べる`→`食べて`, `吸う`→`吸って`, `する`→`して`. Everything after it stays the same.",
      bodyZh:
        "在动词的「て形」后接 `もいいです`,表示某个动作被允许:「可以……」「……也行」。字面意思是「即使做 X 也没关系」。\n\n要*请求*许可时,加上疑问助词 `か`:`〜てもいいですか`(「我可以……吗?」)。常见的许可回答是 `はい、いいですよ`(「可以,请便」)。\n\n随动词类型变化的只有「て形」这一部分:`食べる`→`食べて`、`吸う`→`吸って`、`する`→`して`。其后的部分保持不变。",
      examples: [
        {
          jp: "ここで写真を撮ってもいいです",
          reading: "ここでしゃしんをとってもいいです",
          en: "You may take photos here.",
          zh: "这里可以拍照。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 撮る = GodanVerb & { stem: "撮"; ending: "る" };

// ここで + 写真を + 撮って (te-form) + もいいです
type ここで写真を撮ってもいいです = \`ここで写真を\${ConjugateVerb<撮る, "て形">}もいいです\`;
`,
        },
        {
          jp: "この本を借りてもいいですか",
          reading: "このほんをかりてもいいですか",
          en: "May I borrow this book?",
          zh: "我可以借这本书吗?",
          code: `import type { IchidanVerb, ConjugateVerb } from "typed-japanese";

type 借りる = IchidanVerb & { stem: "借り"; ending: "る" };

// この本を + 借りて (te-form) + もいいですか
type この本を借りてもいいですか = \`この本を\${ConjugateVerb<借りる, "て形">}もいいですか\`;
`,
        },
        {
          jp: "ここで休んでもいいです",
          reading: "ここでやすんでもいいです",
          en: "You may rest here.",
          zh: "可以在这里休息。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 休む = GodanVerb & { stem: "休"; ending: "む" };

// ここで + 休んで (te-form) + もいいです
type ここで休んでもいいです = \`ここで\${ConjugateVerb<休む, "て形">}もいいです\`;
`,
        },
      ],
    },
    {
      id: "e14-2",
      titleEn: "〜てはいけません — prohibition (“must not”)",
      titleZh: "〜てはいけません —— 禁止(「不可以……」)",
      bodyEn:
        "Attach `はいけません` to the te-form to forbid an action: “you must not…”, “…is not allowed”. It is the natural opposite of `〜てもいいです` and has a firm, rule-stating tone, common on signs and in instructions.\n\nIn casual speech this contracts to `〜ちゃだめ` / `〜ちゃいけない`, but the polite `〜てはいけません` is what you'll use in most everyday situations.",
      bodyZh:
        "在动词的「て形」后接 `はいけません`,表示禁止某个动作:「不可以……」「不允许……」。它是 `〜てもいいです` 的反义说法,语气坚定、带有规定的意味,常见于告示牌和说明中。\n\n口语里会缩约成 `〜ちゃだめ` / `〜ちゃいけない`,但在大多数日常场合,用礼貌体的 `〜てはいけません` 即可。",
      examples: [
        {
          jp: "ここでタバコを吸ってはいけません",
          reading: "ここでタバコをすってはいけません",
          en: "You must not smoke here.",
          zh: "这里不可以吸烟。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 吸う = GodanVerb & { stem: "吸"; ending: "う" };

// ここで + タバコを + 吸って (te-form) + はいけません
type ここでタバコを吸ってはいけません = \`ここでタバコを\${ConjugateVerb<吸う, "て形">}はいけません\`;
`,
        },
        {
          jp: "ここに入ってはいけません",
          reading: "ここにはいってはいけません",
          en: "You must not enter here.",
          zh: "这里不可以进入。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 入る = GodanVerb & { stem: "入"; ending: "る" };

// ここに + 入って (te-form) + はいけません
type ここに入ってはいけません = \`ここに\${ConjugateVerb<入る, "て形">}はいけません\`;
`,
        },
        {
          jp: "ここで写真を撮ってはいけません",
          reading: "ここでしゃしんをとってはいけません",
          en: "You must not take photos here.",
          zh: "这里不可以拍照。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 撮る = GodanVerb & { stem: "撮"; ending: "る" };

// ここで + 写真を + 撮って (te-form) + はいけません
type ここで写真を撮ってはいけません = \`ここで写真を\${ConjugateVerb<撮る, "て形">}はいけません\`;
`,
        },
      ],
    },
    {
      id: "e14-3",
      titleEn: "Asking and answering: permission vs. refusal",
      titleZh: "问与答:许可与拒绝",
      bodyEn:
        "Put the two patterns together in a mini-dialogue. You ask with `〜てもいいですか`; the answer is either permission (`はい、〜てもいいです`) or a refusal that often uses `〜てはいけません` (“no, you must not”).\n\nNotice that the verb's te-form is identical in the question and in both answers — only the tail (`もいいですか` vs `はいけません`) flips. Mastering one te-form gives you the whole exchange.",
      bodyZh:
        "把两个句型放进一段小对话里。提问用 `〜てもいいですか`;回答要么是许可(`はい、〜てもいいです`),要么是常用 `〜てはいけません` 的拒绝(「不,不可以」)。\n\n注意:无论是提问还是两种回答,动词的「て形」都完全相同 —— 变化的只是词尾(`もいいですか` 对 `はいけません`)。掌握一个「て形」,整段对话就都会了。",
      examples: [
        {
          jp: "ここで電話を使ってもいいですか",
          reading: "ここででんわをつかってもいいですか",
          en: "May I use the phone here?",
          zh: "这里可以打电话吗?",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 使う = GodanVerb & { stem: "使"; ending: "う" };

// ここで + 電話を + 使って (te-form) + もいいですか
type ここで電話を使ってもいいですか = \`ここで電話を\${ConjugateVerb<使う, "て形">}もいいですか\`;
`,
        },
        {
          jp: "いいえ、ここで電話を使ってはいけません",
          reading: "いいえ、ここででんわをつかってはいけません",
          en: "No, you must not use the phone here.",
          zh: "不,这里不可以打电话。",
          code: `import type { GodanVerb, ConjugateVerb } from "typed-japanese";

type 使う = GodanVerb & { stem: "使"; ending: "う" };

// いいえ、 + ここで + 電話を + 使って (te-form) + はいけません
type いいえここで電話を使ってはいけません = \`いいえ、ここで電話を\${ConjugateVerb<使う, "て形">}はいけません\`;
`,
        },
      ],
    },
  ],
};

export default chapter;
