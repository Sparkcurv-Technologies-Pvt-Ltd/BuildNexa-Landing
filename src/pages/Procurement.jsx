import PageHero from "../components/PageHero.jsx";
import PageFaq from "../components/PageFaq.jsx";
import RelatedPages from "../components/RelatedPages.jsx";
import Cta from "../components/Cta.jsx";
import Contact from "../components/Contact.jsx";
import usePageSeo from "../hooks/usePageSeo.js";
import { pageByPath } from "../seo.js";
import { faqsByIds } from "../data/faqs.js";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Construction procurement software",
  provider: { "@type": "Organization", name: "BuildNexa", url: "https://buildnexa.io/" },
  description: "Materials: Indent → Requisition → RFQ → PO → GRN → Bill → Payment. Subcontracts: Service Requisition → Work Order → JMR → Service Bill.",
  areaServed: "IN",
};

export default function Procurement() {
  usePageSeo(pageByPath("/procurement"));
  return (
    <>
      <PageHero
        index="PROC"
        eyebrow="Procurement"
        title={<>From indent to payment, <em>on one ledger.</em></>}
        lead="Materials: Indent → Requisition → RFQ → PO → GRN → Bill → Payment. Subcontracts: Service Requisition → Work Order → JMR → Service Bill. Every line is tied to a WBS item."
      />

      <section className="section" aria-labelledby="proc-how-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" data-reveal>How it connects</p>
            <h2 id="proc-how-title" className="section-title" data-split>Every document, <em>one trail.</em></h2>
          </div>
          <ul className="ticks" data-reveal>
            <li>PO lines carry the WBS item, so an approved PO fills in the Materials DPR's quantity ordered.</li>
            <li>The GRN updates stock and the DPR together, and the purchase bill is three-way matched to it.</li>
            <li>Service requisitions become work orders; a contractor JMR is capped at the work-order quantity plus 10%, and its service bill splits retention and TDS automatically.</li>
            <li>A nightly integrity check ties stock, GR/IR clearing and journal balance back to the ledger, so nothing drifts quietly out of sync.</li>
          </ul>
        </div>
      </section>

      <PageFaq items={faqsByIds(["dpr-sync", "cancel-mistake", "roles"])} />
      <RelatedPages exclude="/procurement" />
      <Cta />
      <Contact />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
    </>
  );
}
