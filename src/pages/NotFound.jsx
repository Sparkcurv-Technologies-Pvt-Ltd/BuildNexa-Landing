import usePageSeo from "../hooks/usePageSeo.js";

// Content-level only: the server still returns HTTP 200 for unknown paths (that fix is in
// nginx, outside this repo), but visitors at least land somewhere useful instead of a blank
// homepage with no explanation.
export default function NotFound() {
  usePageSeo({ path: "/404", title: "Page not found | BuildNexa", description: "That page doesn't exist on buildnexa.io. Here's how to get back to what you were looking for." });
  return (
    <section className="section" aria-labelledby="404-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow" data-reveal>404</p>
          <h1 id="404-title" className="section-title" data-split>That page <em>doesn't exist.</em></h1>
          <span className="divider" aria-hidden="true"></span>
          <p className="section-lead" data-reveal>The link may be old or mistyped. Here's where to go instead.</p>
        </div>
        <ul className="ticks" data-reveal>
          <li><a href="/">BuildNexa home</a></li>
          <li><a href="/daily-progress-reporting">Daily Progress Reporting & WBS</a></li>
          <li><a href="/procurement">Procurement</a></li>
          <li><a href="/ra-billing">RA Billing</a></li>
          <li><a href="/solar-epc">Solar EPC</a></li>
          <li><a href="/tally-integration">Tally Integration</a></li>
        </ul>
      </div>
    </section>
  );
}
