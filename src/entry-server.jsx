import { renderToString } from "react-dom/server";
import App from "./App.jsx";

// Used only by scripts/prerender.js at build time: the page's HTML goes into dist/index.html,
// so crawlers that don't run JavaScript (GPTBot, ClaudeBot, PerplexityBot…) still read the content.
export function render() {
  return renderToString(<App />);
}
