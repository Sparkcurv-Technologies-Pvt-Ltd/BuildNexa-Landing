const ALL = [
  { href: "/daily-progress-reporting", label: "Daily Progress Reporting & WBS" },
  { href: "/procurement", label: "Procurement" },
  { href: "/ra-billing", label: "RA Billing" },
  { href: "/solar-epc", label: "Solar EPC" },
  { href: "/tally-integration", label: "Tally Integration" },
];

// Plain <a> tags, not client-side nav: every BuildNexa page is a separately prerendered
// document (see scripts/prerender.js), so a full reload is what actually re-primes the
// reveal animations, header state and contact-form validation for the next page.
export default function RelatedPages({ exclude }) {
  const items = ALL.filter((p) => p.href !== exclude);
  return (
    <nav className="related-pages" aria-label="Related BuildNexa pages" data-reveal>
      <div className="container">
        <p className="eyebrow">Explore more</p>
        <ul>
          {items.map((p) => (
            <li key={p.href}><a href={p.href}>{p.label}</a></li>
          ))}
          <li><a href="/">BuildNexa home</a></li>
        </ul>
      </div>
    </nav>
  );
}
