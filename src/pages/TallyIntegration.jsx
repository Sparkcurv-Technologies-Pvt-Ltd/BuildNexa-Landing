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
  serviceType: "Tally-integrated construction ERP",
  provider: { "@type": "Organization", name: "BuildNexa", url: "https://buildnexa.io/" },
  description: "Ledger & Tally Export writes the period's vouchers as Tally-compatible XML for the statutory auditor, alongside GST tax codes and a TDS register.",
  areaServed: "IN",
};

export default function TallyIntegration() {
  usePageSeo(pageByPath("/tally-integration"));
  return (
    <>
      <PageHero
        index="TALLY"
        eyebrow="Works with the tools you already use"
        title={<>Your books stay in Tally. <em>BuildNexa feeds them.</em></>}
        lead="Ledger & Tally Export writes the period's vouchers as Tally-compatible XML for your statutory auditor, so switching to BuildNexa doesn't mean switching accountants off Tally."
      />

      <section className="section" aria-labelledby="tally-how-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" data-reveal>How the export works</p>
            <h2 id="tally-how-title" className="section-title" data-split>One ledger, <em>two destinations.</em></h2>
          </div>
          <ul className="ticks" data-reveal>
            <li>Every purchase bill, GRN, RA bill, payment and journal entry posts to BuildNexa's own chart of accounts first.</li>
            <li>Ledger & Tally Export writes that period's vouchers out as Tally-compatible XML, ready for your statutory auditor.</li>
            <li>GST tax codes and the TDS register (194C / 194I / 194J / 194Q) travel with the export, so nothing needs re-entering by hand.</li>
            <li>Period lock & year-end stop postings into a closed period before the export is taken, so the numbers in Tally match what BuildNexa shows.</li>
          </ul>
        </div>
      </section>

      <PageFaq items={faqsByIds(["tally", "gst-tds", "cancel-mistake"])} />
      <RelatedPages exclude="/tally-integration" />
      <Cta />
      <Contact />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
    </>
  );
}
