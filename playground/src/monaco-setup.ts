/**
 * Self-host Monaco and its language workers via Vite instead of loading them
 * from a CDN. The CDN default (used by @monaco-editor/react out of the box)
 * loads the TypeScript web worker cross-origin, which silently fails in many
 * browsers — leaving a syntax-only editor with no real type checking. Bundling
 * the workers locally makes the editor genuinely run TypeScript everywhere.
 *
 * Import this module once, before the app renders.
 */
import { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

self.MonacoEnvironment = {
  getWorker(_workerId: string, label: string) {
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

// Hand @monaco-editor/react our locally-bundled monaco instance.
loader.config({ monaco });

export { monaco };
