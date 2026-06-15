import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { CHAPTERS } from "../tutorial/chapters";
import { LEVEL_META } from "../tutorial/levels";
import { exampleAnchorId, type Chapter, type Example, type Level } from "../tutorial/types";
import { useLang } from "../context/lang";
import { useRoute } from "../context/route";
import { extractWords } from "../vocab/extract";
import Analyzer from "./Analyzer";
import VocabWord from "./VocabWord";
import styles from "./Tutorial.module.css";

const LEVELS: Level[] = ["elementary", "intermediate", "advanced"];

/** Render text with `code` spans and paragraph breaks. */
function RichText({ text }: { text: string }): ReactNode {
  return (
    <>
      {text.split(/\n\s*\n/).map((para, i) => (
        <p key={i} className={styles.para}>
          {para.split(/(`[^`]+`)/).map((seg, j) =>
            seg.startsWith("`") && seg.endsWith("`") ? (
              <code key={j} className="tj-code">
                {seg.slice(1, -1)}
              </code>
            ) : (
              <span key={j}>{seg}</span>
            )
          )}
        </p>
      ))}
    </>
  );
}

export default function Tutorial() {
  const { lang, t } = useLang();
  const { route, navigate } = useRoute();
  const [query, setQuery] = useState("");
  // The selected chapter is driven by the URL, so Back / Forward move between
  // chapters and a deep-link (Foundations / Glossary) lands on the right one.
  const activeId =
    route.chapter && CHAPTERS.some((c) => c.id === route.chapter)
      ? route.chapter
      : CHAPTERS[0]?.id ?? "";
  const [drawerExample, setDrawerExample] = useState<Example | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [flash, setFlash] = useState<string | null>(null);
  const pendingAnchor = useRef<string | null>(null);

  // The route can point at an example (a Glossary "used in" link). Capture the
  // anchor, then strip it from the URL so re-clicking the same link re-fires.
  useEffect(() => {
    if (!route.ex) return;
    pendingAnchor.current = route.ex;
    navigate({ ex: undefined }, { replace: true });
  }, [route.ex, navigate]);

  // After the target chapter has rendered, scroll the example into view and
  // flash it. Runs after every render until the anchor element exists.
  useLayoutEffect(() => {
    const anchor = pendingAnchor.current;
    if (!anchor) return;
    const el = document.getElementById(anchor);
    if (!el) return;
    pendingAnchor.current = null;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    setFlash(anchor);
    const timer = window.setTimeout(
      () => setFlash((f) => (f === anchor ? null : f)),
      1800
    );
    return () => window.clearTimeout(timer);
  });

  const byLevel = useMemo(() => {
    const q = query.trim().toLowerCase();
    const groups: Record<Level, Chapter[]> = {
      elementary: [],
      intermediate: [],
      advanced: [],
    };
    for (const c of CHAPTERS) {
      const hay = `${c.titleEn} ${c.titleZh} ${c.id}`.toLowerCase();
      if (!q || hay.includes(q)) groups[c.level].push(c);
    }
    for (const l of LEVELS)
      groups[l].sort((a, b) => a.order - b.order);
    return groups;
  }, [query]);

  const active = useMemo(
    () => CHAPTERS.find((c) => c.id === activeId) ?? CHAPTERS[0] ?? null,
    [activeId]
  );

  const openExample = (ex: Example) => {
    setDrawerExample(ex);
    setDrawerOpen(true);
  };

  if (CHAPTERS.length === 0) {
    return <p className="tj-subtle">No chapters found.</p>;
  }

  return (
    <div className={styles.layout}>
      {/* ---- sidebar ---- */}
      <aside className={styles.sidebar}>
        <input
          className={`tj-input ${styles.search}`}
          placeholder={t("Search chapters…", "搜索章节…")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <nav className={styles.nav}>
          {LEVELS.map((level) => {
            const chapters = byLevel[level];
            if (chapters.length === 0) return null;
            const meta = LEVEL_META[level];
            return (
              <div key={level} className={styles.group}>
                <div className={styles.groupTitle}>
                  <span>{meta.emoji}</span>
                  {t(meta.en, meta.zh)}
                  <span className={`jp ${styles.groupJp}`}>{meta.jp}</span>
                </div>
                {chapters.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className={`${styles.chapterLink} ${c.id === activeId ? styles.chapterActive : ""}`}
                    onClick={() => navigate({ chapter: c.id })}
                  >
                    <span className={styles.chapterNum}>{c.order}</span>
                    <span>{t(c.titleEn, c.titleZh)}</span>
                  </button>
                ))}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* ---- chapter content ---- */}
      <article className={styles.content}>
        {active && (
          <>
            <header className={styles.chapterHead}>
              <span className={`tj-chip ${styles.levelChip}`}>
                {LEVEL_META[active.level].emoji} {t(LEVEL_META[active.level].en, LEVEL_META[active.level].zh)} · {active.order}
              </span>
              <h2 className={styles.chapterTitle}>{t(active.titleEn, active.titleZh)}</h2>
              <p className={styles.chapterSummary}>{t(active.summaryEn, active.summaryZh)}</p>
            </header>

            {active.id === CHAPTERS[0]?.id && (
              <button
                type="button"
                className={styles.foundationsNote}
                onClick={() =>
                  navigate({ tab: "concepts", article: "architecture" })
                }
              >
                <span className={styles.foundationsNoteText}>
                  {t(
                    "New to Japanese? Read the Foundations primer first — it shows how a sentence is built, the way you'd learn a programming language.",
                    "刚接触日语？建议先读一遍《原理》—— 它会像学编程语言那样，讲清楚一句日语是怎么搭起来的。"
                  )}
                </span>
                <span className={styles.foundationsNoteCta}>
                  {t("Open Foundations", "打开原理")} →
                </span>
              </button>
            )}

            {active.points.map((pt) => (
              <section key={pt.id} className={styles.point}>
                <h3 className={styles.pointTitle}>{t(pt.titleEn, pt.titleZh)}</h3>
                <div className={styles.body}>
                  <RichText text={t(pt.bodyEn, pt.bodyZh)} />
                </div>

                <div className={styles.examples}>
                  {pt.examples.map((ex, i) => {
                    const anchor = exampleAnchorId(active.id, pt.id, i);
                    return (
                    <div
                      key={i}
                      id={anchor}
                      className={`tj-card ${styles.example} ${flash === anchor ? styles.exampleFlash : ""}`}
                    >
                      <button
                        type="button"
                        className={`jp ${styles.exJp}`}
                        onClick={() => openExample(ex)}
                        title={t("Analyze in Typed Japanese", "用 Typed Japanese 解析")}
                      >
                        {ex.jp}
                      </button>
                      {ex.reading && (
                        <span className={`jp ${styles.exReading}`}>{ex.reading}</span>
                      )}
                      <span className={styles.exTrans}>{lang === "zh" ? ex.zh : ex.en}</span>
                      <button
                        type="button"
                        className={`tj-btn ${styles.analyzeBtn}`}
                        onClick={() => openExample(ex)}
                      >
                        🔬 {t("Analyze", "解析")}
                      </button>
                      <div className={styles.vocabRow}>
                        <span className={styles.vocabLabel}>{t("Words", "词汇")}</span>
                        {extractWords(ex.code).map((w, k) => (
                          <VocabWord key={k} word={w.word} />
                        ))}
                      </div>
                    </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </>
        )}
      </article>

      {/* ---- analyzer drawer ---- */}
      {drawerOpen && (
        <div className={styles.scrim} onClick={() => setDrawerOpen(false)} />
      )}
      <aside className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}>
        <div className={styles.drawerHead}>
          <h3 className="tj-panel-title">{t("Structure", "结构解析")}</h3>
          <button type="button" className="tj-btn" onClick={() => setDrawerOpen(false)}>
            {t("Close", "关闭")} ✕
          </button>
        </div>
        <div className={styles.drawerBody}>
          {drawerExample && (
            <Analyzer
              code={drawerExample.code}
              gloss={lang === "zh" ? drawerExample.zh : drawerExample.en}
            />
          )}
        </div>
      </aside>
    </div>
  );
}
