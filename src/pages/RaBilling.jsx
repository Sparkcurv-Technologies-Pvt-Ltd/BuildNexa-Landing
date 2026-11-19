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
  serviceType: "RA billing and client billing software for contractors",
  provider: { "@type": "Organization", name: "BuildNexa", url: "https://buildnexa.io/" },
  description: "RA bills calculated as contract value × cumulative % complete, less what's already billed, with retention and TDS defaults from the client master.",
  areaServed: "IN",
};

export default function RaBilling() {
  usePageSeo(pageByPath("/ra-billing"));
  return (
    <>
      <PageHero
        index="BILL"
        eyebrow="Clients & Billing"
        title={<>RA bills, calculated <em>the same way every time.</em></>}
        lead="Leads, tenders, proposals and contracts through to RA bills, client advances, client payments and the client ledger — with GST and TDS handled natively."
      />

      <section className="section" aria-labelledby="ra-how-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" data-reveal>Built for how contracting works here</p>
            <h2 id="ra-how-title" className="section-title" data-split>Compliance and billing, <em>handled natively.</em></h2>
          </div>
          <ul className="ticks" data-reveal>
            <li>At project level: contract value × cumulative % complete, less what has already been billed.</li>
            <li>Retention and TDS defaults (194C / 194I / 194J / 194Q) come from the client master, so nobody re-types them on every bill.</li>
            <li>GST tax codes, statutory approvals with expiry alerts, and period lock & year-end keep the books closeable with confidence.</li>
            <li>Ledger & Tally Export writes the period's vouchers as Tally-compatible XML for your statutory auditor.</li>
          </ul>
        </div>
      </section>

      <PageFaq items={faqsByIds(["ra-bill-calc", "gst-tds", "tally"])} />
      <RelatedPages exclude="/ra-billing" />
      <Cta />
      <Contact />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
    </>
  );
}
