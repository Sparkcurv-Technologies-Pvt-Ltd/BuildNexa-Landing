import { useEffect } from "react";

// The real <title>/description/canonical for each route are already correct in the HTML
// that scripts/prerender.js writes for that route, so this only matters if a visitor ever
// navigates client-side without a full reload (BuildNexa's own links always do a full
// reload — see src/routes.js — so this is a safety net, not the primary mechanism).
function setMeta(selector, create, attr, value) {
  if (!value) return;
  let el = document.querySelector(selector);
  if (!el) { el = create(); document.head.appendChild(el); }
  el.setAttribute(attr, value);
}

export default function usePageSeo({ path, title, description }) {
  useEffect(() => {
    if (title) document.title = title;
    const url = `https://buildnexa.io${path === "/" ? "/" : path}`;
    setMeta('meta[name="description"]', () => { const m = document.createElement("meta"); m.setAttribute("name", "description"); return m; }, "content", description);
    setMeta('link[rel="canonical"]', () => { const l = document.createElement("link"); l.setAttribute("rel", "canonical"); return l; }, "href", url);
    setMeta('meta[property="og:title"]', () => { const m = document.createElement("meta"); m.setAttribute("property", "og:title"); return m; }, "content", title);
    setMeta('meta[property="og:description"]', () => { const m = document.createElement("meta"); m.setAttribute("property", "og:description"); return m; }, "content", description);
    setMeta('meta[property="og:url"]', () => { const m = document.createElement("meta"); m.setAttribute("property", "og:url"); return m; }, "content", url);
  }, [path, title, description]);
}
