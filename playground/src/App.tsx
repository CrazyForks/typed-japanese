import SentenceComposer from "./components/SentenceComposer";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.logo}>🌸</span>
          <div>
            <h1 className={styles.title}>Typed Japanese Playground</h1>
            <p className={styles.tagline}>
              Write a Japanese sentence as a TypeScript type — see how it's
              composed, node by node.
            </p>
          </div>
        </div>
        <a
          className={styles.repo}
          href="https://github.com/typedgrammar/typed-japanese"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </header>

      <main className={styles.main}>
        <SentenceComposer />
      </main>

      <footer className={styles.footer}>
        The compiler resolves every conjugation — this is TypeScript's type system
        understanding Japanese grammar.
      </footer>
    </div>
  );
}
