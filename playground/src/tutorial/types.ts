/**
 * Content model for the grammar tutorial. Each chapter file under
 * tutorial/chapters/ default-exports a `Chapter`. All explanatory prose is
 * bilingual (English + 简体中文). Every example carries a self-contained Typed
 * Japanese `code` snippet whose last type alias resolves to the sentence — that
 * is what the Analyzer parses and decomposes.
 */
export type Level = "elementary" | "intermediate" | "advanced";

export interface Example {
  /** Full Japanese sentence (display + selection target). */
  jp: string;
  /** Kana reading, optional. */
  reading?: string;
  en: string;
  zh: string;
  /**
   * Self-contained Typed Japanese: imports + word definitions + a final type
   * alias that resolves to `jp`. Parsed by the Analyzer into a structure tree.
   */
  code: string;
}

export interface GrammarPoint {
  id: string;
  titleEn: string;
  titleZh: string;
  /** Markdown-ish explanation (paragraphs separated by blank lines). */
  bodyEn: string;
  bodyZh: string;
  examples: Example[];
}

export interface Chapter {
  /** Stable id, also the filename, e.g. "e01". */
  id: string;
  level: Level;
  /** Order within the level. */
  order: number;
  titleEn: string;
  titleZh: string;
  summaryEn: string;
  summaryZh: string;
  points: GrammarPoint[];
}
