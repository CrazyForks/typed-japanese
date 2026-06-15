/**
 * Hash-based routing — the URL is the single source of truth for navigation, so
 * tab switches, cross-section jumps (Glossary → example, Foundations → chapter),
 * the selected chapter/article, and the UI language all work with the browser's
 * Back / Forward buttons and are shareable as links.
 *
 * Hash shape:  #/<section>[/<sub>]?ex=<anchor>&lang=<en|zh>
 *   #/foundations            #/foundations/architecture
 *   #/course                 #/course/e01           #/course/e01?ex=ex-e01-e01-2-0
 *   #/glossary               #/playground
 *
 * Hash routing (not the History API) is deliberate: it needs no server rewrite,
 * so it works as-is on GitHub Pages.
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type Tab = "concepts" | "tutorial" | "glossary" | "playground";
export type Lang = "en" | "zh";

export interface Route {
  tab: Tab;
  /** Foundations: selected article id. */
  article?: string;
  /** Course: selected chapter id. */
  chapter?: string;
  /** Course: an example anchor to scroll to (from a Glossary "used in" link). */
  ex?: string;
  /** UI language. Always present once normalized. */
  lang: Lang;
}

/** Patch passed to navigate() — every field optional, merged onto the current route. */
export type RoutePatch = Partial<Route>;

interface RouteCtx {
  route: Route;
  navigate: (patch: RoutePatch, opts?: { replace?: boolean }) => void;
}

const Ctx = createContext<RouteCtx | null>(null);
const LANG_KEY = "tj-lang";

// tab <-> url segment (the URL says "course"/"foundations"; code says the tab id)
const TAB_TO_SEG: Record<Tab, string> = {
  concepts: "foundations",
  tutorial: "course",
  glossary: "glossary",
  playground: "playground",
};
const SEG_TO_TAB: Record<string, Tab> = {
  foundations: "concepts",
  course: "tutorial",
  glossary: "glossary",
  playground: "playground",
};

function storedLang(): Lang {
  if (typeof localStorage !== "undefined") {
    const v = localStorage.getItem(LANG_KEY);
    if (v === "en" || v === "zh") return v;
  }
  return "en";
}

function parseHash(hash: string): Route {
  const raw = hash.replace(/^#\/?/, "");
  const [path = "", qs] = raw.split("?");
  const segs = path.split("/").filter(Boolean);
  // Default landing is the Grammar Course; the first chapter points to Foundations.
  const tab = SEG_TO_TAB[segs[0] ?? ""] ?? "tutorial";
  const params = new URLSearchParams(qs ?? "");
  const langParam = params.get("lang");
  const lang: Lang =
    langParam === "zh" || langParam === "en" ? langParam : storedLang();

  const route: Route = { tab, lang };
  const sub = segs[1];
  if (tab === "concepts" && sub) route.article = decodeURIComponent(sub);
  if (tab === "tutorial" && sub) route.chapter = decodeURIComponent(sub);
  const ex = params.get("ex");
  if (ex && tab === "tutorial") route.ex = ex;
  return route;
}

function formatHash(r: Route): string {
  const segs = [TAB_TO_SEG[r.tab]];
  if (r.tab === "concepts" && r.article) segs.push(encodeURIComponent(r.article));
  if (r.tab === "tutorial" && r.chapter) segs.push(encodeURIComponent(r.chapter));
  const params = new URLSearchParams();
  if (r.tab === "tutorial" && r.ex) params.set("ex", r.ex);
  if (r.lang) params.set("lang", r.lang);
  const qs = params.toString();
  return `#/${segs.join("/")}${qs ? `?${qs}` : ""}`;
}

export function RouteProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>(() =>
    parseHash(typeof location !== "undefined" ? location.hash : "")
  );
  const ref = useRef(route);
  ref.current = route;

  // Normalize the URL on first load so it always reflects the full state.
  useEffect(() => {
    const normalized = formatHash(ref.current);
    if (location.hash !== normalized) {
      history.replaceState(null, "", normalized);
    }
    const onChange = () => setRoute(parseHash(location.hash));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const navigate = useCallback(
    (patch: RoutePatch, opts?: { replace?: boolean }) => {
      const prev = ref.current;
      const tabChanged = patch.tab !== undefined && patch.tab !== prev.tab;
      const next: Route = { ...prev, ...patch };
      // Switching section drops the other sections' sub-targets unless the patch
      // explicitly sets them.
      if (tabChanged) {
        if (!("article" in patch)) next.article = undefined;
        if (!("chapter" in patch)) next.chapter = undefined;
        if (!("ex" in patch)) next.ex = undefined;
      }
      const h = formatHash(next);
      if (h === location.hash) {
        setRoute(next); // hash identical (e.g. clearing ex) — sync state directly
        return;
      }
      if (opts?.replace) {
        history.replaceState(null, "", h);
        setRoute(next);
      } else {
        location.hash = h; // pushes a history entry; hashchange updates state
      }
    },
    []
  );

  return <Ctx.Provider value={{ route, navigate }}>{children}</Ctx.Provider>;
}

export function useRoute(): RouteCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useRoute must be used within RouteProvider");
  return ctx;
}
