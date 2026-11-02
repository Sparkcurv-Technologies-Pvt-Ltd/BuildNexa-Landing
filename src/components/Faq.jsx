// One list feeds the accordion and the FAQPage JSON-LD, so the schema always matches what visitors read.
// Answers lead with the direct answer (answer engines quote the first sentence); keep them to product facts.
const FAQS = [
  { q: "What is BuildNexa?", a: "BuildNexa is a construction ERP for contractors and solar EPC companies. It runs each project's WBS and daily progress report (DPR), procurement from indent to payment, stores and inventory, subcontract work orders, client RA billing and the general ledger in one web app, and every document posts to the same ledger." },
  { q: "Can we bring our existing Excel DPR trackers?", a: "Yes. Workbook Import previews your .xlsx row by row — WBS items, scope quantities and dates — before it creates anything. Templates are available from the Setup Library." },
  { q: "How does site progress reach the DPR without re-typing?", a: "Every PO, GRN and work-order line carries a WBS item, so ordered and received quantities update the Materials DPR and billed subcontract work updates the Construction DPR. If a document is cancelled, the quantities are recomputed." },
  { q: "Does BuildNexa work with Tally?", a: "Yes. Ledger & Tally Export exports the period’s vouchers as Tally-compatible XML for your statutory auditor." },
  { q: "Does BuildNexa handle GST and TDS?", a: "Yes. Bills carry GST tax codes, and the TDS register covers sections 194C, 194I, 194J and 194Q. Retention and TDS defaults are set per client and applied to RA bills." },
  { q: "How are client RA bills calculated?", a: "At project level: contract value × cumulative % complete, less what has already been billed. Retention and TDS defaults come from the client master, so nobody re-types them." },
  { q: "What if a document was posted by mistake?", a: "Cancel it. The cancel guard first checks that nothing downstream still depends on it, then posts a reversal entry (never an edit), reverses any stock movement and recomputes the linked DPR quantities." },
  { q: "Who can see what?", a: "Each user has one organisation role — Org admin, Portfolio lead, Accounts, Procurement, Stores, HR or Member — plus project roles such as Project manager, Engineering, Procurement, Site or Viewer." },
  { q: "Can site teams use it on a phone?", a: "Yes. BuildNexa runs in the browser and has a mobile layout, so site teams can log progress from a phone. There is no separate app to install." },
  { q: "Is it only for solar projects?", a: "No. BuildNexa started with solar EPC delivery, and the same WBS, procurement, inventory and finance modules run building, infrastructure and other construction projects." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function Faq() {
  return (
    <>
      {/* ============ FAQ ============ */}
      <section className="section faq" id="faq" aria-labelledby="faq-title">
        <div className="container faq__grid">
          <div className="faq__aside">
            <span className="section-index">09</span>
            <p className="eyebrow" data-reveal>FAQ</p>
            <h2 id="faq-title" className="section-title" data-split>Questions, <em>answered.</em></h2>
            <p className="section-lead" data-reveal>Straight answers from how the platform works. Can't find what you're looking for?</p>
            <a href="#contact" className="btn btn--ghost" data-magnetic><span>Ask us directly</span></a>
          </div>
          <div className="acc-list" data-reveal>
            {FAQS.map(({ q, a }, i) => (
              <details className="acc" name="faq" open={i === 0} key={q}>
                <summary>{q}<span className="acc__icon" aria-hidden="true"></span></summary>
                <div className="acc__body"><p>{a}</p></div>
              </details>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      </section>
    </>
  );
}
