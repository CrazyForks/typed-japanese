import { useCallback, useMemo, useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import type { Monaco, OnMount } from "@monaco-editor/react";
import { SNIPPETS } from "../data/examples";
import { LIB_FILES } from "../data/libSources";
import {
  analyze,
  buildTree,
  collectTexts,
  type AliasSummary,
  type CompositionNode,
} from "../analysis/parse";
import { resolveValues } from "../analysis/resolve";
import CompositionTree from "./CompositionTree";
import styles from "./SentenceComposer.module.css";

type StandaloneEditor = ReturnType<Monaco["editor"]["create"]>;
type Disposable = ReturnType<Monaco["editor"]["onDidChangeMarkers"]>;
type Decorations = ReturnType<StandaloneEditor["createDecorationsCollection"]>;

const MODEL_PATH = "file:///main.ts";

interface MonacoMarker {
  message: string;
  severity: number;
  startLineNumber: number;
}
interface MonacoUri {
  toString(): string;
}
interface Diag {
  message: string;
  line: number;
  isError: boolean;
}

function applyResolved(
  node: CompositionNode,
  map: Map<string, string | null>
): CompositionNode {
  return {
    ...node,
    resolved: map.get(node.text) ?? null,
    children: node.children.map((c) => applyResolved(c, map)),
  };
}

function findNode(node: CompositionNode, id: string): CompositionNode | null {
  if (node.id === id) return node;
  for (const c of node.children) {
    const hit = findNode(c, id);
    if (hit) return hit;
  }
  return null;
}

export default function SentenceComposer() {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [aliases, setAliases] = useState<AliasSummary[]>([]);
  const [selectedAlias, setSelectedAlias] = useState<string | null>(null);
  const [tree, setTree] = useState<CompositionNode | null>(null);
  const [diagnostics, setDiagnostics] = useState<Diag[]>([]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  const editorRef = useRef<StandaloneEditor | null>(null);
  const monacoRef = useRef<Monaco | null>(null);
  const markerSubRef = useRef<Disposable | null>(null);
  const decorationsRef = useRef<Decorations | null>(null);
  const selectedAliasRef = useRef<string | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tokenRef = useRef(0);

  const activeSnippet = SNIPPETS[snippetIndex] ?? SNIPPETS[0]!;

  const refreshDiagnostics = useCallback(() => {
    const monaco = monacoRef.current;
    const ed = editorRef.current;
    const model = ed?.getModel();
    if (!monaco || !model) return;
    const markers: MonacoMarker[] = monaco.editor.getModelMarkers({
      resource: model.uri,
    });
    setDiagnostics(
      markers
        .map((m) => ({
          message: m.message,
          line: m.startLineNumber,
          isError: m.severity === monaco.MarkerSeverity.Error,
        }))
        .sort((a, b) => a.line - b.line)
    );
  }, []);

  const runAnalysis = useCallback(
    async (forceDefault = false) => {
      const ed = editorRef.current;
      const monaco = monacoRef.current;
      if (!ed || !monaco) return;
      const token = ++tokenRef.current;
      const code = ed.getValue();

      const a = await analyze(code);
      if (token !== tokenRef.current) return;
      setAliases(a.aliases);

      const current = selectedAliasRef.current;
      let alias =
        !forceDefault && current && a.aliases.some((x) => x.name === current)
          ? current
          : a.defaultAlias;
      selectedAliasRef.current = alias;
      setSelectedAlias(alias);
      if (!alias) {
        setTree(null);
        return;
      }

      const built = await buildTree(code, alias);
      if (token !== tokenRef.current) return;
      if (!built) {
        setTree(null);
        return;
      }

      const texts = Array.from(collectTexts(built));
      const map = await resolveValues(monaco, code, texts);
      if (token !== tokenRef.current) return;
      setTree(applyResolved(built, map));
    },
    []
  );

  const scheduleAnalysis = useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => void runAnalysis(), 350);
  }, [runAnalysis]);

  const handleMount: OnMount = useCallback(
    (ed, monaco) => {
      editorRef.current = ed;
      monacoRef.current = monaco;
      decorationsRef.current = ed.createDecorationsCollection();

      const ts = monaco.languages.typescript;
      ts.typescriptDefaults.setCompilerOptions({
        target: ts.ScriptTarget.ES2020,
        moduleResolution: ts.ModuleResolutionKind.NodeJs,
        module: ts.ModuleKind.ESNext,
        strict: true,
        noEmit: true,
        esModuleInterop: true,
        allowNonTsExtensions: true,
        skipLibCheck: true,
      });
      ts.typescriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false,
        diagnosticCodesToIgnore: [6133, 6196, 6192, 6198, 6205],
      });
      for (const f of LIB_FILES) ts.typescriptDefaults.addExtraLib(f.contents, f.path);

      markerSubRef.current?.dispose();
      markerSubRef.current = monaco.editor.onDidChangeMarkers((uris: readonly MonacoUri[]) => {
        const model = ed.getModel();
        if (model && uris.some((u) => u.toString() === model.uri.toString())) {
          refreshDiagnostics();
        }
      });

      setReady(true);
      void runAnalysis(true);
    },
    [refreshDiagnostics, runAnalysis]
  );

  const loadSnippet = useCallback(
    (index: number) => {
      const next = SNIPPETS[index];
      const ed = editorRef.current;
      if (!next || !ed) return;
      setSnippetIndex(index);
      setSelectedNodeId(null);
      decorationsRef.current?.clear();
      selectedAliasRef.current = null;
      ed.setValue(next.code);
      void runAnalysis(true);
    },
    [runAnalysis]
  );

  const pickAlias = useCallback(
    (name: string) => {
      selectedAliasRef.current = name;
      setSelectedAlias(name);
      setSelectedNodeId(null);
      decorationsRef.current?.clear();
      void runAnalysis();
    },
    [runAnalysis]
  );

  const handleSelectNode = useCallback((node: CompositionNode) => {
    setSelectedNodeId(node.id);
    const ed = editorRef.current;
    const monaco = monacoRef.current;
    const model = ed?.getModel();
    if (!ed || !monaco || !model) return;
    const s = model.getPositionAt(node.start);
    const e = model.getPositionAt(node.end);
    const range = new monaco.Range(s.lineNumber, s.column, e.lineNumber, e.column);
    ed.revealRangeInCenterIfOutsideViewport(range);
    decorationsRef.current?.set([
      { range, options: { inlineClassName: styles.hl, className: styles.hlLine } },
    ]);
  }, []);

  const errorCount = useMemo(
    () => diagnostics.filter((d) => d.isError).length,
    [diagnostics]
  );
  const selectedNode = useMemo(
    () => (tree && selectedNodeId ? findNode(tree, selectedNodeId) : null),
    [tree, selectedNodeId]
  );

  return (
    <div className={styles.wrap}>
      <div className={styles.snippetBar}>
        <span className="tj-label">Examples</span>
        <div className={styles.chips}>
          {SNIPPETS.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`tj-chip ${styles.chip} ${i === snippetIndex ? styles.chipActive : ""}`}
              onClick={() => loadSnippet(i)}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.panes}>
        {/* ---- editor ---- */}
        <section className={`tj-card ${styles.editorPane}`}>
          <div className={styles.paneHead}>
            <h2 className="tj-panel-title">TypeScript</h2>
            {ready &&
              (errorCount === 0 ? (
                <span className={`${styles.badge} ${styles.ok}`}>✓ Type-checks</span>
              ) : (
                <span className={`${styles.badge} ${styles.err}`}>
                  {errorCount} error{errorCount === 1 ? "" : "s"}
                </span>
              ))}
          </div>
          <Editor
            className={styles.editor}
            theme="light"
            language="typescript"
            path={MODEL_PATH}
            defaultValue={activeSnippet.code}
            onMount={handleMount}
            onChange={scheduleAnalysis}
            loading={<div className={styles.loading}>Loading TypeScript…</div>}
            options={{
              fontSize: 13.5,
              fontFamily: "var(--font-mono)",
              minimap: { enabled: false },
              wordWrap: "on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 2,
              lineNumbersMinChars: 3,
              padding: { top: 12, bottom: 12 },
            }}
          />
          {diagnostics.length > 0 && (
            <ul className={styles.diagList}>
              {diagnostics.map((d, i) => (
                <li
                  key={i}
                  className={`${styles.diag} ${d.isError ? styles.diagErr : ""}`}
                >
                  <span className={styles.diagLine}>L{d.line}</span>
                  {d.message}
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* ---- composition ---- */}
        <section className={`tj-card ${styles.treePane}`}>
          <div className={styles.paneHead}>
            <h2 className="tj-panel-title">Sentence structure</h2>
            {aliases.length > 1 && (
              <select
                className={`tj-select ${styles.aliasSelect}`}
                value={selectedAlias ?? ""}
                onChange={(e) => pickAlias(e.target.value)}
                aria-label="Type to visualise"
              >
                {aliases.map((a) => (
                  <option key={a.name} value={a.name}>
                    {a.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className={styles.sentenceHead}>
            <span className={`jp ${styles.sentence}`}>
              {tree?.resolved ? `「${tree.resolved}」` : "—"}
            </span>
            <span className={styles.gloss}>{activeSnippet.en}</span>
          </div>

          <div className={styles.treeScroll}>
            {tree ? (
              <CompositionTree
                node={tree}
                selectedId={selectedNodeId}
                onSelect={handleSelectNode}
              />
            ) : (
              <p className="tj-subtle">
                Define a <code className="tj-code">type</code> alias whose value is
                a phrase, and its structure appears here.
              </p>
            )}
          </div>

          {selectedNode && (
            <div className={styles.detail}>
              <code className={`tj-code ${styles.detailCode}`}>{selectedNode.text}</code>
              {selectedNode.resolved && (
                <span className={`jp ${styles.detailVal}`}>「{selectedNode.resolved}」</span>
              )}
            </div>
          )}
        </section>
      </div>

      <p className={`tj-subtle ${styles.hint}`}>
        Edit the code on the left — the structure re-parses live. Click any node to
        highlight the source it came from. Every value is computed by the
        TypeScript compiler running in your browser.
      </p>
    </div>
  );
}
