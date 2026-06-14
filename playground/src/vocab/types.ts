/**
 * Vocabulary table schema. The dictionary is the single source of truth for how
 * every word in the tutorial is read and what it means. A compiler check
 * (scripts/verify-vocab.mjs) guarantees every word used in the course's Typed
 * Japanese snippets indexes into this table.
 */
export type PartOfSpeech =
  | "noun"
  | "pronoun"
  | "verb-godan"
  | "verb-ichidan"
  | "verb-irregular"
  | "i-adjective"
  | "na-adjective"
  | "adverb"
  | "particle"
  | "copula"
  | "conjunction"
  | "interjection"
  | "counter"
  | "number"
  | "expression"
  | "suffix"
  | "prefix";

export interface VocabEntry {
  /** Headword — the exact surface used in the tutorial (dictionary form). */
  word: string;
  /** Kana reading (hiragana/katakana). */
  reading: string;
  /** Hepburn romaji. */
  romaji: string;
  pos: PartOfSpeech;
  en: string;
  zh: string;
}

export const POS_LABEL: Record<PartOfSpeech, { en: string; zh: string }> = {
  noun: { en: "noun", zh: "名词" },
  pronoun: { en: "pronoun", zh: "代词" },
  "verb-godan": { en: "godan verb", zh: "五段动词" },
  "verb-ichidan": { en: "ichidan verb", zh: "一段动词" },
  "verb-irregular": { en: "irregular verb", zh: "不规则动词" },
  "i-adjective": { en: "i-adjective", zh: "い形容词" },
  "na-adjective": { en: "na-adjective", zh: "な形容词" },
  adverb: { en: "adverb", zh: "副词" },
  particle: { en: "particle", zh: "助词" },
  copula: { en: "copula", zh: "系动词" },
  conjunction: { en: "conjunction", zh: "连词" },
  interjection: { en: "interjection", zh: "感叹词" },
  counter: { en: "counter", zh: "量词" },
  number: { en: "number", zh: "数词" },
  expression: { en: "expression", zh: "词组" },
  suffix: { en: "suffix", zh: "后缀" },
  prefix: { en: "prefix", zh: "前缀" },
};
