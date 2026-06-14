import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { lookup } from "../vocab/dictionary";
import { POS_LABEL } from "../vocab/types";
import { useLang } from "../context/lang";
import styles from "./VocabWord.module.css";

type Variant = "chip" | "plain";

interface Props {
  word: string;
  /** override the displayed surface (e.g. an inflected form); lookup still uses `word` */
  display?: string;
  variant?: Variant;
}

export default function VocabWord({ word, display, variant = "chip" }: Props) {
  const { lang, t } = useLang();
  const entry = lookup(word);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const label = display ?? word;
  if (!entry) {
    // No dictionary entry — render as inert text.
    return <span className={variant === "chip" ? styles.chipPlain : ""}>{label}</span>;
  }

  const toggle = () => {
    const r = ref.current?.getBoundingClientRect();
    if (r) setPos({ top: r.bottom + 6, left: r.left });
    setOpen((o) => !o);
  };

  return (
    <>
      <button
        ref={ref}
        type="button"
        className={variant === "chip" ? styles.chip : styles.inline}
        onClick={toggle}
        aria-expanded={open}
      >
        <span className={`jp ${styles.word}`}>{label}</span>
        {variant === "chip" && <span className={`jp ${styles.reading}`}>{entry.reading}</span>}
      </button>

      {open &&
        pos &&
        createPortal(
          <>
            <div className={styles.backdrop} onClick={() => setOpen(false)} />
            <div className={styles.popover} style={{ top: pos.top, left: pos.left }}>
              <div className={styles.popHead}>
                <span className={`jp ${styles.popWord}`}>{entry.word}</span>
                <span className={`jp ${styles.popReading}`}>{entry.reading}</span>
              </div>
              <div className={styles.popMeta}>
                <span className={styles.romaji}>{entry.romaji}</span>
                <span className={styles.posTag}>{t(POS_LABEL[entry.pos].en, POS_LABEL[entry.pos].zh)}</span>
              </div>
              <p className={styles.meaning}>{lang === "zh" ? entry.zh : entry.en}</p>
              <p className={styles.meaningAlt}>{lang === "zh" ? entry.en : entry.zh}</p>
            </div>
          </>,
          document.body
        )}
    </>
  );
}
