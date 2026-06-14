import { useState } from "react";
import Tutorial from "./components/Tutorial";
import Playground from "./components/Playground";
import Glossary from "./components/Glossary";
import { useLang } from "./context/lang";
import styles from "./App.module.css";

type Tab = "tutorial" | "glossary" | "playground";

export default function App() {
  const { lang, setLang, t } = useLang();
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
          📖 {t("Grammar Course", "语法教程")}
        </button>
        <button
          className={`${styles.tab} ${tab === "glossary" ? styles.tabActive : ""}`}
          onClick={() => setTab("glossary")}
        >
          📚 {t("Glossary", "词汇表")}
        </button>
        <button
          className={`${styles.tab} ${tab === "playground" ? styles.tabActive : ""}`}
          onClick={() => setTab("playground")}
        >
          🧪 {t("Playground", "演练场")}
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
    </div>
  );
}
