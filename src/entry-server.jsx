import { renderToString } from "react-dom/server";
import App from "./App.jsx";

// Used only by scripts/prerender.js at build time: each route's HTML goes into its own
// dist/<path>/index.html, so crawlers that don't run JavaScript (GPTBot, ClaudeBot,
// PerplexityBot…) still read the content, no matter which page they land on.
export function render(path = "/") {
  return renderToString(<App path={path} />);
}
