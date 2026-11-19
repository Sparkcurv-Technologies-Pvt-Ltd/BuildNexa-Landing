// Runs after `vite build` and `vite build --ssr`: writes each route into its own
// dist/<path>/index.html (dist/index.html for "/"), so every page is a real, separately
// crawlable URL. Each route keeps the same build-hashed JS/CSS and the same Open Graph /
// JSON-LD block from the index.html Vite just built — only <title>, the description, and
// the canonical/og:url change per route, via tag-shaped (not content-shaped) regexes so
// this keeps working if the homepage copy changes later.
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { PAGES } from "../src/seo.js";

const { render } = await import("../dist-ssr/entry-server.js");
const templateUrl = new URL("../dist/index.html", import.meta.url);
const template = await readFile(templateUrl, "utf8");

const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error(`prerender: ${marker} not found in dist/index.html`);

function withHead(html, { title, description, url }) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${description}" />`);
}

for (const page of PAGES) {
  const body = render(page.path);
  const html = withHead(template, { title: page.title, description: page.description, url: `https://buildnexa.io${page.path}` })
    .replace(marker, `<div id="root">${body}</div>`);
  const outUrl = page.path === "/" ? templateUrl : new URL(`../dist${page.path}/index.html`, import.meta.url);
  await mkdir(dirname(fileURLToPath(outUrl)), { recursive: true });
  await writeFile(outUrl, html);
  console.log(`prerender: wrote ${page.path === "/" ? "/" : page.path + "/"}`);
}

await rm(new URL("../dist-ssr", import.meta.url), { recursive: true, force: true });
