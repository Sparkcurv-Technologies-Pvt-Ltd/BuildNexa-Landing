import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/styles.css";
import "./styles/glass.css";
import "./styles/kit.css";
import "./styles/depth.css";
import "./styles/theme.css";
import "./styles/device-preview.css";

// The production build ships the page prerendered (scripts/prerender.js), so React hydrates it;
// `yarn dev` serves an empty #root and renders from scratch. The path picks which page
// (src/routes.js) to render — each route is prerendered into its own dist/<path>/index.html.
const root = document.getElementById("root");
const path = window.location.pathname;
if (root.hasChildNodes()) hydrateRoot(root, <App path={path} />);
else createRoot(root).render(<App path={path} />);
