import { Fragment, useMemo, useState } from "react";
import { VOCAB_LIST } from "../vocab/dictionary";
import { POS_LABEL, type PartOfSpeech } from "../vocab/types";
import { REVERSE_INDEX } from "../tutorial/reverseIndex.generated";
import { useLang } from "../context/lang";
import styles from "./Glossary.module.css";

const POS_GROUPS: { key: PartOfSpeech[]; en: string; zh: string }[] = [
  { key: ["noun", "pronoun"], en: "Nouns", zh: "名词" },
  { key: ["verb-godan", "verb-ichidan", "verb-irregular"], en: "Verbs", zh: "动词" },
  { key: ["i-adjective", "na-adjective"], en: "Adjectives", zh: "形容词" },
  { key: ["adverb"], en: "Adverbs", zh: "副词" },
  { key: ["particle", "copula", "suffix", "conjunction", "prefix"], en: "Grammar", zh: "语法词" },
];

type Props = {
  /** Jump to an example card in the tutorial tab. */
  onNavigate: (chapterId: string, anchor: string) => void;
};

export default function Glossary({ onNavigate }: Props) {
  const { lang, t } = useLang();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    const allowed = filter === null ? null : new Set(POS_GROUPS[filter]!.key);
    return VOCAB_LIST.filter((e) => {
      if (allowed && !allowed.has(e.pos)) return false;
      if (!q) return true;
      return (
        e.word.toLowerCase().includes(q) ||
        e.reading.includes(q) ||
        e.romaji.toLowerCase().includes(q) ||
        e.en.toLowerCase().includes(q) ||
        e.zh.includes(q)
      );
    });
  }, [query, filter]);

  return (
    <div className={styles.wrap}>
      <div className={styles.toolbar}>
        <input
          className={`tj-input ${styles.search}`}
          placeholder={t("Search word, reading, romaji or meaning…", "搜索词语、读音、罗马字或释义…")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className={styles.filters}>
          <button
            className={`tj-chip ${styles.filter} ${filter === null ? styles.filterActive : ""}`}
            onClick={() => setFilter(null)}
          >
            {t("All", "全部")}
          </button>
          {POS_GROUPS.map((g, i) => (
            <button
              key={i}
              className={`tj-chip ${styles.filter} ${filter === i ? styles.filterActive : ""}`}
              onClick={() => setFilter(i)}
            >
              {t(g.en, g.zh)}
            </button>
          ))}
        </div>
      </div>

      <p className="tj-subtle">
        {t(
          `${rows.length} of ${VOCAB_LIST.length} words`,
          `${rows.length} / ${VOCAB_LIST.length} 个词`
        )}
      </p>

      <div className={`tj-card ${styles.tableWrap}`}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{t("Word", "词语")}</th>
              <th>{t("Reading", "读音")}</th>
              <th>{t("Romaji", "罗马字")}</th>
              <th>{t("Type", "词性")}</th>
              <th>{t("Meaning", "释义")}</th>
              <th>{t("Used in", "用例")}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((e, i) => {
              const refs = REVERSE_INDEX[e.word] ?? [];
              const isOpen = expanded === e.word;
              return (
                <Fragment key={`${e.word}-${i}`}>
                  <tr
                    className={refs.length ? styles.rowClickable : undefined}
                    onClick={() =>
                      refs.length && setExpanded(isOpen ? null : e.word)
                    }
                  >
                    <td className={`jp ${styles.word}`}>{e.word}</td>
                    <td className={`jp ${styles.reading}`}>{e.reading}</td>
                    <td className={styles.romaji}>{e.romaji}</td>
                    <td>
                      <span className={styles.posTag}>{t(POS_LABEL[e.pos].en, POS_LABEL[e.pos].zh)}</span>
                    </td>
                    <td className={styles.meaning}>{lang === "zh" ? e.zh : e.en}</td>
                    <td className={styles.usedIn}>
                      {refs.length ? (
                        <span className={styles.usedBadge}>
                          {refs.length}
                          <span className={styles.caret}>{isOpen ? "▴" : "▾"}</span>
                        </span>
                      ) : (
                        <span className="tj-subtle">—</span>
                      )}
                    </td>
                  </tr>
                  {isOpen && refs.length > 0 && (
                    <tr className={styles.refRow}>
                      <td colSpan={6}>
                        <div className={styles.refList}>
                          {refs.map((r, k) => (
                            <button
                              key={k}
                              type="button"
                              className={styles.refItem}
                              onClick={() => onNavigate(r.chapterId, r.anchor)}
                              title={t("Open in the course", "在教程中打开")}
                            >
                              <span className={`jp ${styles.refJp}`}>{r.jp}</span>
                              <span className={styles.refCtx}>
                                {t(r.chapterTitleEn, r.chapterTitleZh)} ·{" "}
                                {t(r.pointTitleEn, r.pointTitleZh)}
                              </span>
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
