import type { VocabEntry } from "../types";

/**
 * Supplementary content nouns: a few standalone words, plus the parts surfaced
 * when collapsed-phrase examples were decomposed (e.g. 机の上 → 机 + の + 上,
 * この本 → この + 本).
 */
const entries: VocabEntry[] = [
  { word: "練習", reading: "れんしゅう", romaji: "renshuu", pos: "noun", en: "practice", zh: "练习" },
  { word: "机", reading: "つくえ", romaji: "tsukue", pos: "noun", en: "desk", zh: "桌子" },
  { word: "上", reading: "うえ", romaji: "ue", pos: "noun", en: "top, above, on", zh: "上面" },
  { word: "頃", reading: "ころ", romaji: "koro", pos: "noun", en: "time, period (around when)", zh: "时候" },
  { word: "趣味", reading: "しゅみ", romaji: "shumi", pos: "noun", en: "hobby, interest", zh: "爱好；兴趣" },
  { word: "ケーキ", reading: "ケーキ", romaji: "kēki", pos: "noun", en: "cake", zh: "蛋糕" },
  { word: "こと", reading: "こと", romaji: "koto", pos: "noun", en: "thing, matter (abstract)", zh: "事情" },
  { word: "本当", reading: "ほんとう", romaji: "hontō", pos: "noun", en: "truth, reality", zh: "真的；真实" },
  { word: "道理", reading: "どうり", romaji: "dōri", pos: "noun", en: "reason, logic; no wonder", zh: "道理；难怪" },
  { word: "わけ", reading: "わけ", romaji: "wake", pos: "noun", en: "reason; (in 〜わけにはいかない) way/grounds", zh: "道理；缘由" },
  { word: "いく", reading: "いく", romaji: "iku", pos: "verb-godan", en: "to go", zh: "去" },
  { word: "早い", reading: "はやい", romaji: "hayai", pos: "i-adjective", en: "early; fast", zh: "早；快" },
  { word: "もらう", reading: "もらう", romaji: "morau", pos: "verb-godan", en: "to receive, to get", zh: "得到；收到" },
];

export default entries;
