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

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.logo}>🌸</span>
          <div>
            <h1 className={styles.title}>Typed Japanese</h1>
            <p className={styles.tagline}>
              {t(
                "Learn Japanese grammar — every sentence is a type the compiler can read.",
                "用 TypeScript 学日语语法 —— 每个句子都是编译器能读懂的类型。"
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
            GitHub ↗
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
        {tab === "tutorial" && <Tutorial />}
        {tab === "glossary" && <Glossary />}
        {tab === "playground" && <Playground />}
      </main>

      <footer className={styles.footer}>
        {t(
          "Conjugations resolved by TypeScript's type system — grammar you can verify.",
          "所有活用变形都由 TypeScript 类型系统推导 —— 可被编译器验证的语法。"
        )}
      </footer>

      {import.meta.env.DEV && <FontLab />}
    </div>
  );
}
