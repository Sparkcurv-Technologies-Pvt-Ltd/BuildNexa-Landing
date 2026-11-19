import { FAQS, faqSchema } from "../data/faqs.js";

const schema = faqSchema(FAQS);

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      </section>
    </>
  );
}
