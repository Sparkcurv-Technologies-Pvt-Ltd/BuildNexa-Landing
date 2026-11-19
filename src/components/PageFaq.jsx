import { faqSchema } from "../data/faqs.js";

// A small, page-specific FAQ block (and matching FAQPage JSON-LD) for one of the dedicated
// pages — same FAQS data as the homepage accordion (src/data/faqs.js), just a shorter list
// scoped to that page's topic.
export default function PageFaq({ items }) {
  if (!items.length) return null;
  const schema = faqSchema(items);
  return (
    <section className="section page-faq" aria-labelledby="page-faq-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow" data-reveal>FAQ</p>
          <h2 id="page-faq-title" className="section-title" data-split>Questions on this, <em>answered.</em></h2>
        </div>
        <div className="acc-list" data-reveal>
          {items.map(({ q, a }, i) => (
            <details className="acc" name="page-faq" open={i === 0} key={q}>
              <summary>{q}<span className="acc__icon" aria-hidden="true"></span></summary>
              <div className="acc__body"><p>{a}</p></div>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </section>
  );
}
