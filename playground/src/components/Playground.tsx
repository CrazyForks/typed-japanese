import { useState } from "react";
import { SNIPPETS } from "../data/examples";
import { GENERATED_SNIPPETS } from "../data/examples.generated";
import Analyzer from "./Analyzer";

// Hand-curated examples first, then any AI-generated ones (appended by
// `bun run annotate`). Both index into the same flat list the Analyzer reads.
const ALL = [...SNIPPETS, ...GENERATED_SNIPPETS];
const CURATED_COUNT = SNIPPETS.length;

export default function Playground() {
  const [index, setIndex] = useState(0);
  const active = ALL[index] ?? ALL[0]!;

  const chip = (start: number, end: number) =>
    ALL.slice(start, end).map((s, i) => {
      const real = start + i;
      return (
        <button
          key={s.id}
          type="button"
          className={`tj-chip cursor-pointer border border-border ${real === index ? "bg-sakura-500 text-on-accent border-sakura-500" : ""}`}
          onClick={() => setIndex(real)}
        >
          {s.title}
        </button>
      );
    });

  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="tj-label">Examples</span>
        <div className="flex gap-[7px] flex-wrap">{chip(0, CURATED_COUNT)}</div>
      </div>

      {GENERATED_SNIPPETS.length > 0 && (
        <div className="flex items-center gap-3 flex-wrap">
          <span className="tj-label">✨ Generated</span>
          <div className="flex gap-[7px] flex-wrap">
            {chip(CURATED_COUNT, ALL.length)}
          </div>
        </div>
      )}

      <Analyzer code={active.code} gloss={active.en} />

      <p className="tj-subtle text-center m-0">
        Edit the code — the structure re-parses live. Click any node to highlight
        the source it came from. Every value is computed by the TypeScript
        compiler running in your browser.
      </p>
    </div>
  );
}
