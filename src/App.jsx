import { useEffect } from "react";
import Layout from "./components/Layout.jsx";
import { pageFor } from "./routes.js";
import initMain from "./effects/main.js";
import initKit from "./effects/kit.js";
import initDepth from "./effects/depth.js";
import initSmooth from "./effects/smooth.js";

// The interaction layer (reveals, parallax, video reel, form, menus…) works on the
// rendered DOM, so it starts once after the first render, in the original script order.
// BuildNexa's own links always do a full page reload between routes (src/routes.js), so
// "once" here really does mean once per page load, same as before routing existed.
let started = false;

export default function App({ path = "/" }) {
  useEffect(() => {
    if (started) return;
    started = true;
    initMain();
    initKit();
    initDepth();
    initSmooth();
  }, []);

  const Page = pageFor(path);

  return (
    <Layout>
      <Page />
    </Layout>
  );
}
