import Home from "./pages/Home.jsx";
import DailyProgressReporting from "./pages/DailyProgressReporting.jsx";
import Procurement from "./pages/Procurement.jsx";
import RaBilling from "./pages/RaBilling.jsx";
import SolarEpc from "./pages/SolarEpc.jsx";
import TallyIntegration from "./pages/TallyIntegration.jsx";
import NotFound from "./pages/NotFound.jsx";

// Every route here needs an entry in src/seo.js (title/description) and in
// public/sitemap.xml, and scripts/prerender.js writes one dist/<path>/index.html per entry.
export const ROUTES = {
  "/": Home,
  "/daily-progress-reporting": DailyProgressReporting,
  "/procurement": Procurement,
  "/ra-billing": RaBilling,
  "/solar-epc": SolarEpc,
  "/tally-integration": TallyIntegration,
};

export function pageFor(path) {
  return ROUTES[path] ?? NotFound;
}
