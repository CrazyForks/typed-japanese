import { useEffect, useState } from "react";
import styles from "./FontLab.module.css";

/**
 * FontLab — a dev-only floating panel for trying out tutorial fonts.
 *
 * It overrides three CSS custom properties live on :root:
 *   --font-ui      Latin + Chinese prose (the bulk of the explanation text)
 *   --font-jp      Japanese example sentences / kana / kanji
 *   --font-heading the big titles (app title, chapter title, point title)
 *
 * Each preset bundles a coordinated CN + JP + heading stack so switching gives
 * a cohesive look rather than a Frankenstein mix. Mounted only when
 * import.meta.env.DEV is true, so production never loads the web fonts.
 */

type Preset = {
  id: string;
  name: string;
  note: string;
  /** swatch: a short Japanese sample shown in --font-jp */
  ui: string;
  jp: string;
  heading: string;
};

const PRESETS: Preset[] = [
  {
    id: "default",
    name: "黑体 · 当前默认",
    note: "无衬线 Gothic，技术文档感",
    ui: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    jp: '"Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", sans-serif',
    heading: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  },
  {
    id: "system-mincho",
    name: "系统宋体／明朝",
    note: "macOS 自带，无需联网",
    ui: '"Songti SC", "STSong", "SimSun", serif',
    jp: '"Hiragino Mincho ProN", "Yu Mincho", "YuMincho", "Noto Serif JP", serif',
    heading: '"Songti SC", "Hiragino Mincho ProN", "Yu Mincho", serif',
  },
  {
    id: "noto-serif",
    name: "思源宋体 · Noto Serif",
    note: "CN/JP 协调的经典衬线",
    ui: '"Noto Serif SC", "Noto Serif JP", serif',
    jp: '"Noto Serif JP", "Noto Serif SC", serif',
    heading: '"Noto Serif JP", "Noto Serif SC", serif',
  },
  {
    id: "shippori",
    name: "しっぽり明朝 · Shippori",
    note: "纤细优雅的日系明朝",
    ui: '"Noto Serif SC", "Shippori Mincho", serif',
    jp: '"Shippori Mincho", "Noto Serif JP", serif',
    heading: '"Shippori Mincho", "Noto Serif SC", serif',
  },
  {
    id: "zen-old",
    name: "Zen Old Mincho",
    note: "沉静古典，留白感强",
    ui: '"Noto Serif SC", "Zen Old Mincho", serif',
    jp: '"Zen Old Mincho", "Noto Serif JP", serif',
    heading: '"Zen Old Mincho", "Noto Serif SC", serif',
  },
  {
    id: "lxgw",
    name: "霞鹜文楷 · LXGW WenKai",
    note: "楷体，CN+JP 一体，最像课本",
    ui: '"LXGW WenKai", "Noto Serif SC", serif',
    jp: '"LXGW WenKai", "Noto Serif JP", serif',
    heading: '"LXGW WenKai", serif',
  },
  {
    id: "klee",
    name: "Klee One · 教科書体",
    note: "日本教科书手写感",
    ui: '"LXGW WenKai", "Klee One", "Noto Serif SC", serif',
    jp: '"Klee One", "LXGW WenKai", serif',
    heading: '"Klee One", "LXGW WenKai", serif',
  },
  {
    id: "zen-maru",
    name: "Zen Maru Gothic · 圆体",
    note: "圆润亲切，仍属黑体",
    ui: '"Zen Maru Gothic", "PingFang SC", system-ui, sans-serif',
    jp: '"Zen Maru Gothic", "Hiragino Maru Gothic ProN", sans-serif',
    heading: '"Zen Maru Gothic", sans-serif',
  },
];

// Web fonts pulled on demand (dev only). Google Fonts subsets CJK by
// unicode-range, so only the glyphs in view get downloaded.
const FONT_LINKS = [
  "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Noto+Serif+JP:wght@400;600;700&family=Shippori+Mincho:wght@400;600;700&family=Zen+Old+Mincho:wght@400;600;700&family=Klee+One:wght@400;600&family=Zen+Maru+Gothic:wght@400;500;700&display=swap",
  "https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.7.0/style.css",
];

const STORAGE_KEY = "fontlab-preset";

function applyPreset(p: Preset) {
  const root = document.documentElement;
  root.style.setProperty("--font-ui", p.ui);
  root.style.setProperty("--font-jp", p.jp);
  root.style.setProperty("--font-heading", p.heading);
}

function clearPreset() {
  const root = document.documentElement;
  root.style.removeProperty("--font-ui");
  root.style.removeProperty("--font-jp");
  root.style.removeProperty("--font-heading");
}

export default function FontLab() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Inject the web-font stylesheets once.
  useEffect(() => {
    FONT_LINKS.forEach((href) => {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);

  // Restore last choice.
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    const p = PRESETS.find((x) => x.id === saved);
    if (p) {
      applyPreset(p);
      setActive(p.id);
    }
  }, []);

  function choose(p: Preset) {
    if (p.id === "default") {
      clearPreset();
      localStorage.removeItem(STORAGE_KEY);
      setActive(null);
      return;
    }
    applyPreset(p);
    localStorage.setItem(STORAGE_KEY, p.id);
    setActive(p.id);
  }

  return (
    <>
      <button
        className={styles.fab}
        onClick={() => setOpen((o) => !o)}
        title="字体实验室（仅本地开发可见）"
      >
        Aa 字体
      </button>

      {open && (
        <div className={styles.panel}>
          <div className={styles.head}>
            <strong>字体实验室</strong>
            <span className={styles.devTag}>DEV</span>
            <button className={styles.close} onClick={() => setOpen(false)}>
              ×
            </button>
          </div>
          <p className={styles.hint}>
            点击切换正文 / 日语 / 标题字体，效果即时生效，选择会被记住。
          </p>
          <div className={styles.list}>
            {PRESETS.map((p) => {
              const isActive =
                active === p.id || (active === null && p.id === "default");
              return (
                <button
                  key={p.id}
                  className={`${styles.preset} ${isActive ? styles.presetActive : ""}`}
                  onClick={() => choose(p)}
                >
                  <div className={styles.presetMeta}>
                    <span className={styles.presetName}>{p.name}</span>
                    <span className={styles.presetNote}>{p.note}</span>
                  </div>
                  <div className={styles.swatch}>
                    <span
                      className={styles.swatchHeading}
                      style={{ fontFamily: p.heading }}
                    >
                      存在句：あります
                    </span>
                    <span
                      className={styles.swatchBody}
                      style={{ fontFamily: p.ui }}
                    >
                      想象你身处一个陌生的街区，
                    </span>
                    <span
                      className={styles.swatchJp}
                      style={{ fontFamily: p.jp }}
                    >
                      場所 に 事物 が あります。
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
