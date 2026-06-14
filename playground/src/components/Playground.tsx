import { useState } from "react";
import { SNIPPETS } from "../data/examples";
import Analyzer from "./Analyzer";
import styles from "./Playground.module.css";

export default function Playground() {
  const [index, setIndex] = useState(0);
  const active = SNIPPETS[index] ?? SNIPPETS[0]!;

  return (
    <div className={styles.wrap}>
      <div className={styles.snippetBar}>
        <span className="tj-label">Examples</span>
        <div className={styles.chips}>
          {SNIPPETS.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`tj-chip ${styles.chip} ${i === index ? styles.chipActive : ""}`}
              onClick={() => setIndex(i)}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      <Analyzer code={active.code} gloss={active.en} />

      <p className={`tj-subtle ${styles.hint}`}>
        Edit the code — the structure re-parses live. Click any node to highlight
        the source it came from. Every value is computed by the TypeScript
        compiler running in your browser.
      </p>
    </div>
  );
}
