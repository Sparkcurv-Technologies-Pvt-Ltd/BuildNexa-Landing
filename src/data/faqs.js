// One list feeds the homepage accordion, the full-site FAQPage JSON-LD, and the smaller
// per-topic FAQ blocks on the dedicated pages (src/pages/) — every answer is defined once.
export const FAQS = [
  { id: "what-is-buildnexa", q: "What is BuildNexa?", a: "BuildNexa is a construction ERP for contractors and solar EPC companies. It runs each project's WBS and daily progress report (DPR), procurement from indent to payment, stores and inventory, subcontract work orders, client RA billing and the general ledger in one web app, and every document posts to the same ledger." },
  { id: "excel-import", q: "Can we bring our existing Excel DPR trackers?", a: "Yes. Workbook Import previews your .xlsx row by row — WBS items, scope quantities and dates — before it creates anything. Templates are available from the Setup Library." },
  { id: "dpr-sync", q: "How does site progress reach the DPR without re-typing?", a: "Every PO, GRN and work-order line carries a WBS item, so ordered and received quantities update the Materials DPR and billed subcontract work updates the Construction DPR. If a document is cancelled, the quantities are recomputed." },
  { id: "tally", q: "Does BuildNexa work with Tally?", a: "Yes. Ledger & Tally Export exports the period's vouchers as Tally-compatible XML for your statutory auditor." },
  { id: "gst-tds", q: "Does BuildNexa handle GST and TDS?", a: "Yes. Bills carry GST tax codes, and the TDS register covers sections 194C, 194I, 194J and 194Q. Retention and TDS defaults are set per client and applied to RA bills." },
  { id: "ra-bill-calc", q: "How are client RA bills calculated?", a: "At project level: contract value × cumulative % complete, less what has already been billed. Retention and TDS defaults come from the client master, so nobody re-types them." },
  { id: "cancel-mistake", q: "What if a document was posted by mistake?", a: "Cancel it. The cancel guard first checks that nothing downstream still depends on it, then posts a reversal entry (never an edit), reverses any stock movement and recomputes the linked DPR quantities." },
  { id: "roles", q: "Who can see what?", a: "Each user has one organisation role — Org admin, Portfolio lead, Accounts, Procurement, Stores, HR or Member — plus project roles such as Project manager, Engineering, Procurement, Site or Viewer." },
  { id: "mobile", q: "Can site teams use it on a phone?", a: "Yes. BuildNexa runs in the browser and has a mobile layout, so site teams can log progress from a phone. There is no separate app to install." },
  { id: "solar-only", q: "Is it only for solar projects?", a: "No. BuildNexa started with solar EPC delivery, and the same WBS, procurement, inventory and finance modules run building, infrastructure and other construction projects." },
];

export function faqsByIds(ids) {
  return ids.map((id) => FAQS.find((f) => f.id === id)).filter(Boolean);
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}
