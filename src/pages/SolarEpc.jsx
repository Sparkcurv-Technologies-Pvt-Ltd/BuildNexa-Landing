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
  serviceType: "Solar EPC project management software",
  provider: { "@type": "Organization", name: "BuildNexa", url: "https://buildnexa.io/" },
  description: "DC/AC capacity tracking, WBS templates for solar EPC delivery, and Engineering, Procurement and Construction progress rolling up by weightage into RA billing.",
  areaServed: "IN",
};

export default function SolarEpc() {
  usePageSeo(pageByPath("/solar-epc"));
  return (
    <>
      <PageHero
        index="SOLAR"
        eyebrow="Solar EPC developers"
        title={<>Built for solar EPC <em>delivery, not retrofitted to it.</em></>}
        lead="Capture DC/AC capacity on the project and reuse WBS templates from the Setup Library. Engineering, Procurement and Construction progress roll up by weightage into overall % complete, which drives RA billing."
      />

      <section className="section" aria-labelledby="solar-how-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" data-reveal>Where it started</p>
            <h2 id="solar-how-title" className="section-title" data-split>Solar first, <em>then every other site.</em></h2>
          </div>
          <ul className="ticks" data-reveal>
            <li>WBS templates from the Setup Library — DC/AC capacity and scope quantities ready on day one of a new project.</li>
            <li>Engineering, Materials and Construction DPR roll up by weightage into one overall % complete.</li>
            <li>RA bills are driven directly off that % complete, with retention and TDS defaults from the client master.</li>
            <li>The same modules — procurement, inventory, subcontracts, finance — also run building and infrastructure projects, so a mixed portfolio doesn't need a second system.</li>
          </ul>
        </div>
      </section>

      <PageFaq items={faqsByIds(["solar-only", "ra-bill-calc", "excel-import"])} />
      <RelatedPages exclude="/solar-epc" />
      <Cta />
      <Contact />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
    </>
  );
}
