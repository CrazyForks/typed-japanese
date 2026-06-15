import { useState } from "react";
import Tutorial from "./components/Tutorial";
import Playground from "./components/Playground";
import Glossary from "./components/Glossary";
import FontLab from "./components/FontLab";
import { useLang } from "./context/lang";
import { useTheme } from "./context/theme";
import styles from "./App.module.css";

type Tab = "tutorial" | "glossary" | "playground";

export default function App() {
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [tab, setTab] = useState<Tab>("tutorial");
  const [jump, setJump] = useState<{ chapterId: string; anchor: string } | null>(
    null
  );

  const navigateToExample = (chapterId: string, anchor: string) => {
    setJump({ chapterId, anchor });
    setTab("tutorial");
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.logo}>🌸</span>
          <div>
            <h1 className={styles.title}>Typed Japanese</h1>
            <p className={styles.tagline}>
              {t(
                "Learn Japanese grammar as TypeScript types.",
                "用 TypeScript 类型学日语语法。"
              )}
            </p>
          </div>
        </div>

        <div className={styles.actions}>
          <div className={styles.langToggle} role="group" aria-label="Language">
            <button
              className={`${styles.langBtn} ${lang === "en" ? styles.langActive : ""}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              className={`${styles.langBtn} ${lang === "zh" ? styles.langActive : ""}`}
              onClick={() => setLang("zh")}
            >
              中文
            </button>
          </div>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={t("Toggle dark mode", "切换深色模式")}
            title={t("Toggle dark mode", "切换深色模式")}
          >
            {theme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <a
            className={styles.repo}
            href="https://github.com/typedgrammar/typed-japanese"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
        </div>
      </header>

      <nav className={styles.tabs}>
        <button
          className={`${styles.tab} ${tab === "tutorial" ? styles.tabActive : ""}`}
          onClick={() => setTab("tutorial")}
        >
          {t("Grammar Course", "语法教程")}
        </button>
        <button
          className={`${styles.tab} ${tab === "glossary" ? styles.tabActive : ""}`}
          onClick={() => setTab("glossary")}
        >
          {t("Glossary", "词汇表")}
        </button>
        <button
          className={`${styles.tab} ${tab === "playground" ? styles.tabActive : ""}`}
          onClick={() => setTab("playground")}
        >
          {t("Playground", "演练场")}
        </button>
      </nav>

      <main className={styles.main}>
        {tab === "tutorial" && (
          <Tutorial jump={jump} onJumpHandled={() => setJump(null)} />
        )}
        {tab === "glossary" && <Glossary onNavigate={navigateToExample} />}
        {tab === "playground" && <Playground />}
      </main>

      <footer className={styles.footer}>
        {t(
          "Conjugations resolved by TypeScript's type system — grammar you can verify.",
          "所有活用变形都由 TypeScript 类型系统推导 —— 可被编译器验证的语法。"
        )}
      </footer>

      <FontLab />
    </div>
  );
}
