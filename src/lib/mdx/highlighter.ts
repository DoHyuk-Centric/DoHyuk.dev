import "server-only";
import { getSingletonHighlighter } from "shiki";
import type { Options as RehypePrettyCodeOptions } from "rehype-pretty-code";

// Explicit allowlist: loading every bundled Shiki language at once is what
// caused a severe cold-start slowdown before. getSingletonHighlighter caches
// the instance across calls, so this only pays the loading cost once per
// process. Add a language here (and nowhere else) when a post needs it.
const LANGUAGES = ["typescript", "tsx", "javascript", "jsx", "bash", "json", "css", "html"] as const;
const THEME = "github-light";

export const rehypePrettyCodeOptions: RehypePrettyCodeOptions = {
  theme: THEME,
  keepBackground: true,
  defaultLang: "text",
  getHighlighter: () =>
    getSingletonHighlighter({
      langs: [...LANGUAGES],
      themes: [THEME],
    }),
};
