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
  serviceType: "Construction daily progress reporting (DPR) and WBS software",
  provider: { "@type": "Organization", name: "BuildNexa", url: "https://buildnexa.io/" },
  description: "WBS & weightages, Engineering, Materials and Construction DPR, Plan vs Actual, Master Schedule, Project 360 and daily progress reports on one ledger.",
  areaServed: "IN",
};

export default function DailyProgressReporting() {
  usePageSeo(pageByPath("/daily-progress-reporting"));
  return (
    <>
      <PageHero
        index="DPR"
        eyebrow="Projects & DPR"
        title={<>A daily progress report that <em>updates itself.</em></>}
        lead="WBS & weightages, Engineering, Materials and Construction DPR, Plan vs Actual, Master Schedule, Project 360 and daily progress reports — on the same ledger as procurement and finance."
      />

      <section className="section" aria-labelledby="dpr-how-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" data-reveal>How it stays current</p>
            <h2 id="dpr-how-title" className="section-title" data-split>Site progress, <em>without re-typing.</em></h2>
          </div>
          <ul className="ticks" data-reveal>
            <li>Tag a purchase-order line to a WBS item — when the PO is approved, quantity ordered fills in; when stores post the GRN, quantity received does too, and cancellations recompute it back.</li>
            <li>Subcontract work orders carry WBS items too — a contractor JMR (capped at the work-order quantity plus 10%) and its service bill move the Construction DPR.</li>
            <li>Workbook Import previews your existing Excel DPR trackers row by row — WBS items, scope quantities and dates — before it creates anything.</li>
            <li>Plan vs Actual, Master Schedule and Project 360 read from the same WBS, so there's one number for "where we actually are," not a separate spreadsheet.</li>
          </ul>
        </div>
      </section>

      <PageFaq items={faqsByIds(["excel-import", "dpr-sync", "cancel-mistake"])} />
      <RelatedPages exclude="/daily-progress-reporting" />
      <Cta />
      <Contact />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
    </>
  );
}
