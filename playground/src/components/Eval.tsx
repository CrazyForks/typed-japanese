import { useMemo, useState } from "react";
import { useLang } from "../context/lang";

/**
 * Eval view — renders the committed parsing-accuracy benchmark results as-is.
 *
 * Data source: playground/eval/history/bench-*.json, imported eagerly via
 * import.meta.glob. Each future round commits a new bench-NNN.json (+ updates
 * benchmark-scoreboard.md); once that PR merges and the playground redeploys,
 * the new round appears here automatically — no code change needed.
 */
interface PerItem {
  id: string;
  source: string;
  chapter: string | null;
  jp: string;
  total: number;
  verdict: "conforms" | "needs-work";
  issueCount: number;
}
interface Proposal {
  target: "ts-def" | "prompt" | "content";
  title: string;
  confidence?: string;
}
interface RoundResult {
  round: number;
  sampled: number;
  scored: number;
  roundScore: number;
  byDimension: Record<string, number>;
  perItem: PerItem[];
  proposals: Proposal[];
}

const modules = import.meta.glob<RoundResult>("../../eval/history/bench-*.json", {
  eager: true,
  import: "default",
});
const ROUNDS: RoundResult[] = Object.values(modules).sort(
  (a, b) => a.round - b.round
);

// --- Hard eval: real codex annotate pipeline on the hard-cases set ---
interface HardItem {
  id: string;
  jp: string;
  en: string;
  category: string;
  modelability: "full" | "partial" | "classical-literal";
  difficulty: "hard" | "very-hard";
  passed: boolean;
  attempts: number;
  resolved: string | null;
  error: string | null;
}
interface HardRound {
  round: number;
  ran: number;
  passed: number;
  passRate: number;
  byCategory: Record<string, { ran: number; passed: number }>;
  items: HardItem[];
}
const hardModules = import.meta.glob<HardRound>("../../eval/history/hard-*.json", {
  eager: true,
  import: "default",
});
const HARD_ROUNDS: HardRound[] = Object.values(hardModules).sort(
  (a, b) => a.round - b.round
);

// The six rubric dimensions, in order, with short bilingual labels.
const DIMS: { key: string; en: string; zh: string }[] = [
  { key: "D1", en: "POS", zh: "词类" },
  { key: "D2", en: "Decomp", zh: "分解" },
  { key: "D3", en: "Particle", zh: "助词" },
  { key: "D4", en: "Conjug.", zh: "活用" },
  { key: "D5", en: "Resolve", zh: "还原" },
  { key: "D6", en: "Idiom", zh: "地道" },
];

const REPO = "https://github.com/typedgrammar/typed-japanese/tree/main/playground/eval";
const pct = (x: number | undefined) =>
  x == null ? "—" : `${(x * 100).toFixed(1)}%`;

function ConformanceBar({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 rounded-full bg-surface-2 overflow-hidden min-w-[60px]">
        <div
          className="h-full bg-sakura-500 rounded-full"
          style={{ width: `${Math.round(value * 100)}%` }}
        />
      </div>
      <span className="tabular-nums text-ink-700 font-semibold w-[52px] text-right">
        {pct(value)}
      </span>
    </div>
  );
}

const CAT_LABEL: Record<string, { en: string; zh: string }> = {
  "relative-clause": { en: "Relative clause", zh: "连体修饰节" },
  "causative-passive-keigo": { en: "Causative-passive", zh: "使役被动" },
  "keigo-chains": { en: "Keigo chains", zh: "敬语叠加" },
  "nominalization-embedding": { en: "Nominalization", zh: "名词化嵌套" },
  "aux-verb-chains": { en: "Aux-verb chains", zh: "补助动词链" },
  "conditional-concessive": { en: "Conditional", zh: "条件让步" },
  "quotation-modality": { en: "Quotation", zh: "引用情态" },
  "long-multiclause": { en: "Multi-clause", zh: "多句复合" },
  "classical-formal": { en: "Classical", zh: "文语古典" },
};

function HardEvalSection() {
  const { t } = useLang();
  const [open, setOpen] = useState<number>(
    HARD_ROUNDS.length ? HARD_ROUNDS[HARD_ROUNDS.length - 1]!.round : 0
  );
  if (!HARD_ROUNDS.length) return null;
  const latest = HARD_ROUNDS[HARD_ROUNDS.length - 1]!;

  return (
    <div className="mb-9">
      <h3 className="m-0 font-heading text-[1.2rem] font-extrabold text-ink-900">
        {t("Hard eval — real codex pipeline", "高难度评测 —— 真实 codex 流水线")}
      </h3>
      <p className="mt-2 mb-4 text-[0.92rem] text-ink-500 leading-relaxed max-w-[68ch]">
        {t(
          "A much harder set: every sentence is run through the real `codex exec` annotate pipeline, and a case passes only if codex produces a snippet that type-checks AND resolves byte-identically to the target. Pass-rate is the honest end-to-end accuracy; classical-literal cases are reported separately since the library cannot fully express them.",
          "一组难度高得多的句子：每句都经过真实的 `codex exec` 标注流水线，只有当 codex 生成的代码既能通过类型检查、又能逐字还原出原句时才算通过。通过率即端到端的真实准确度；文语古典句因类型库无法完全表达，单独统计。"
        )}
      </p>

      {/* trend */}
      <div className="rounded-2xl border border-border bg-surface overflow-hidden mb-5">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[0.86rem]">
            <thead>
              <tr className="text-ink-400 text-left">
                <th className="font-semibold px-5 py-2.5">{t("Round", "轮次")}</th>
                <th className="font-semibold px-3 py-2.5 min-w-[160px]">{t("Pass rate", "通过率")}</th>
                <th className="font-semibold px-3 py-2.5 text-right whitespace-nowrap">{t("Passed", "通过")}</th>
                <th className="font-semibold px-3 py-2.5 text-right whitespace-nowrap">{t("Modelable", "可建模")}</th>
              </tr>
            </thead>
            <tbody>
              {HARD_ROUNDS.map((r) => {
                const mod = r.items.filter((x) => x.modelability !== "classical-literal");
                const modPass = mod.filter((x) => x.passed).length;
                return (
                  <tr
                    key={r.round}
                    className={`border-t border-border cursor-pointer ${r.round === open ? "bg-surface-2" : ""}`}
                    onClick={() => setOpen(r.round)}
                  >
                    <td className="px-5 py-2.5 font-semibold text-ink-700 tabular-nums">{String(r.round).padStart(3, "0")}</td>
                    <td className="px-3 py-2.5"><ConformanceBar value={r.passRate} /></td>
                    <td className="px-3 py-2.5 text-right tabular-nums text-ink-500">{r.passed}/{r.ran}</td>
                    <td className="px-3 py-2.5 text-right tabular-nums text-ink-500">{pct(mod.length ? modPass / mod.length : undefined)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* latest round per-case */}
      <div className="rounded-2xl border border-border bg-surface overflow-hidden">
        <div className="px-5 py-3 border-b border-border text-[0.82rem] text-ink-400">
          {t(`Round ${String(latest.round).padStart(3, "0")} — every hard case`, `第 ${String(latest.round).padStart(3, "0")} 轮 —— 全部难句`)}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[0.86rem]">
            <thead>
              <tr className="text-ink-400 text-left">
                <th className="font-semibold px-5 py-2">{t("Sentence", "句子")}</th>
                <th className="font-semibold px-3 py-2 whitespace-nowrap">{t("Category", "类别")}</th>
                <th className="font-semibold px-3 py-2 text-right whitespace-nowrap">{t("Result", "结果")}</th>
              </tr>
            </thead>
            <tbody>
              {latest.items.map((it) => (
                <tr key={it.id} className="border-t border-border align-top">
                  <td className="px-5 py-2 font-jp text-ink-900 max-w-[460px]">{it.jp}</td>
                  <td className="px-3 py-2 text-ink-400 whitespace-nowrap">
                    {t(CAT_LABEL[it.category]?.en ?? it.category, CAT_LABEL[it.category]?.zh ?? it.category)}
                    {it.difficulty === "very-hard" && <span className="ml-1 text-[0.7rem] text-sakura-600">★</span>}
                  </td>
                  <td className="px-3 py-2 text-right whitespace-nowrap">
                    {it.passed ? (
                      <span className="text-[0.78rem] font-semibold text-emerald-600">
                        {t(`pass · ${it.attempts}× `, `通过 · ${it.attempts}次`)}
                      </span>
                    ) : it.modelability === "classical-literal" ? (
                      <span className="text-[0.78rem] font-semibold text-ink-400">{t("classical", "文语")}</span>
                    ) : (
                      <span className="text-[0.78rem] font-semibold text-amber-600">{t("miss", "未通过")}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function Eval() {
  const { lang, t } = useLang();
  const first = ROUNDS.length ? ROUNDS[0] : undefined;
  const last = ROUNDS.length ? ROUNDS[ROUNDS.length - 1] : undefined;
  const [open, setOpen] = useState<number>(last?.round ?? 0);
  const delta = useMemo(
    () => (first && last ? last.roundScore - first.roundScore : 0),
    [first, last]
  );

  if (!ROUNDS.length) {
    return (
      <p className="text-ink-500">
        {t("No eval rounds recorded yet.", "暂无评测轮次记录。")}
      </p>
    );
  }

  return (
    <div className="max-w-[920px]">
      <div className="mb-6">
        <h2 className="m-0 font-heading text-[1.5rem] font-extrabold text-ink-900">
          {t("Parsing accuracy eval", "解析准确度评测")}
        </h2>
        <p className="mt-2 mb-0 text-[0.92rem] text-ink-500 leading-relaxed max-w-[68ch]">
          {t(
            "Two complementary measures: a hard end-to-end eval that runs the real codex annotate pipeline on difficult sentences, and a fixed rubric benchmark scored by independent reviewers. Both are shown as recorded.",
            "两套互补的指标：高难度端到端评测（用真实 codex 标注流水线处理难句），以及由独立评审按评分标准打分的固定基准。均如实展示记录结果。"
          )}
        </p>
        <a
          className="inline-block mt-2 text-[0.85rem] font-semibold text-sakura-600 no-underline hover:underline"
          href={REPO}
          target="_blank"
          rel="noreferrer"
        >
          {t("Rubric & methodology", "评分标准与方法")} →
        </a>
      </div>

      <HardEvalSection />

      <h3 className="m-0 mb-1 font-heading text-[1.2rem] font-extrabold text-ink-900">
        {t("Fixed benchmark — rubric scoring", "固定基准 —— 评分标准打分")}
      </h3>
      <p className="mt-1 mb-4 text-[0.9rem] text-ink-500 leading-relaxed max-w-[68ch]">
        {t(
          "The same grammar examples scored every round across six rubric dimensions (0–12). A comparable trend; conformance is the mean item score.",
          "每轮对同一批语法示例、按六个评分维度打分（0–12）。趋势可比，Conformance 为各条目得分均值。"
        )}
      </p>

      {/* Trend overview */}
      <div className="rounded-2xl border border-border bg-surface overflow-hidden mb-7">
        <div className="flex items-baseline justify-between px-5 py-3 border-b border-border">
          <h3 className="m-0 text-[1rem] font-bold text-ink-900">
            {t("Trend", "趋势")}
          </h3>
          <span className="text-[0.82rem] text-ink-400">
            {t(
              `${ROUNDS.length} rounds · ${delta >= 0 ? "+" : ""}${(delta * 100).toFixed(1)} pts overall`,
              `${ROUNDS.length} 轮 · 累计 ${delta >= 0 ? "+" : ""}${(delta * 100).toFixed(1)} 分`
            )}
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[0.86rem]">
            <thead>
              <tr className="text-ink-400 text-left">
                <th className="font-semibold px-5 py-2.5">{t("Round", "轮次")}</th>
                <th className="font-semibold px-3 py-2.5 min-w-[160px]">
                  {t("Conformance", "符合度")}
                </th>
                {DIMS.map((d) => (
                  <th key={d.key} className="font-semibold px-3 py-2.5 text-right whitespace-nowrap">
                    <span title={d.key}>{lang === "zh" ? d.zh : d.en}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROUNDS.map((r) => (
                <tr
                  key={r.round}
                  className={`border-t border-border ${r.round === open ? "bg-surface-2" : ""}`}
                >
                  <td className="px-5 py-2.5 font-semibold text-ink-700 tabular-nums">
                    {String(r.round).padStart(3, "0")}
                  </td>
                  <td className="px-3 py-2.5">
                    <ConformanceBar value={r.roundScore} />
                  </td>
                  {DIMS.map((d) => (
                    <td
                      key={d.key}
                      className="px-3 py-2.5 text-right tabular-nums text-ink-500 whitespace-nowrap"
                    >
                      {pct(r.byDimension?.[d.key])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Per-round detail */}
      <h3 className="m-0 mb-3 text-[1rem] font-bold text-ink-900">
        {t("Rounds", "各轮明细")}
      </h3>
      <div className="flex flex-col gap-3">
        {[...ROUNDS].reverse().map((r) => {
          const isOpen = r.round === open;
          return (
            <div
              key={r.round}
              className="rounded-2xl border border-border bg-surface overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-3.5 cursor-pointer text-left bg-transparent border-0"
                onClick={() => setOpen(isOpen ? -1 : r.round)}
                aria-expanded={isOpen}
              >
                <span className="flex items-baseline gap-3">
                  <span className="font-bold text-ink-900">
                    {t("Round", "第")} {String(r.round).padStart(3, "0")}
                  </span>
                  <span className="text-[0.85rem] text-ink-400">
                    {r.scored}/{r.sampled} {t("items", "条")}
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <span className="tabular-nums font-semibold text-sakura-600">
                    {pct(r.roundScore)}
                  </span>
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-ink-300 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-4 border-t border-border">
                  <table className="w-full border-collapse text-[0.86rem] mt-1">
                    <thead>
                      <tr className="text-ink-400 text-left">
                        <th className="font-semibold py-2 pr-3">{t("Sentence", "句子")}</th>
                        <th className="font-semibold py-2 px-3 whitespace-nowrap">{t("Source", "来源")}</th>
                        <th className="font-semibold py-2 px-3 text-right whitespace-nowrap">{t("Score", "得分")}</th>
                        <th className="font-semibold py-2 pl-3 text-right whitespace-nowrap">{t("Verdict", "判定")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {r.perItem.map((it) => (
                        <tr key={it.id} className="border-t border-border">
                          <td className="py-2 pr-3 font-jp text-ink-900">{it.jp}</td>
                          <td className="py-2 px-3 text-ink-400 whitespace-nowrap">
                            {it.chapter ?? it.source}
                          </td>
                          <td className="py-2 px-3 text-right tabular-nums text-ink-700">
                            {it.total}/12
                          </td>
                          <td className="py-2 pl-3 text-right whitespace-nowrap">
                            <span
                              className={
                                it.verdict === "conforms"
                                  ? "text-[0.78rem] font-semibold text-emerald-600"
                                  : "text-[0.78rem] font-semibold text-amber-600"
                              }
                            >
                              {it.verdict === "conforms"
                                ? t("conforms", "符合")
                                : t("needs work", "待改进")}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {r.proposals?.length > 0 && (
                    <div className="mt-4">
                      <div className="text-[0.8rem] font-semibold text-ink-400 mb-1.5">
                        {t("Fix proposals from this round", "本轮提出的改进建议")}
                      </div>
                      <ul className="m-0 pl-0 list-none flex flex-col gap-1.5">
                        {r.proposals.map((p, i) => (
                          <li key={i} className="flex items-start gap-2 text-[0.85rem]">
                            <span className="mt-[2px] flex-none text-[0.7rem] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-surface-2 text-ink-500">
                              {p.target}
                            </span>
                            <span className="text-ink-700">{p.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
