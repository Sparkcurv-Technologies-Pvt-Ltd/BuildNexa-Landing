// Single source of truth for per-route <title>/description, used by scripts/prerender.js
// (writes them into each route's dist/<path>/index.html) and by src/hooks/usePageSeo.js
// (keeps them correct if a visitor navigates client-side, e.g. via the back/forward cache).
export const PAGES = [
  {
    path: "/",
    title: "BuildNexa — Construction ERP for Projects, Procurement & Finance",
    description: "BuildNexa is a construction and solar EPC ERP: WBS and daily progress reporting, procure-to-pay, inventory, RA billing, finance and Tally-compatible export — every document tied to one ledger.",
  },
  {
    path: "/daily-progress-reporting",
    title: "Construction Daily Progress Reporting (DPR) & WBS Software | BuildNexa",
    description: "Run Engineering, Materials and Construction DPR on one WBS. Purchase orders and GRNs update the Materials DPR automatically, and billed subcontract work updates the Construction DPR — nobody re-types site progress.",
  },
  {
    path: "/procurement",
    title: "Construction Procurement Software — Indent to Payment | BuildNexa",
    description: "Materials: Indent → Requisition → RFQ → PO → GRN → Bill → Payment. Subcontracts: Service Requisition → Work Order → JMR → Service Bill. Every line is tied to the WBS and posts to the same ledger.",
  },
  {
    path: "/ra-billing",
    title: "RA Billing Software for Contractors | BuildNexa",
    description: "RA bills calculated as contract value × cumulative % complete, less what's already been billed. Retention and TDS defaults come from the client master, so nobody re-types them.",
  },
  {
    path: "/solar-epc",
    title: "Solar EPC Project Management Software | BuildNexa",
    description: "Capture DC/AC capacity on the project and reuse WBS templates from the Setup Library. Engineering, Procurement and Construction progress roll up by weightage into overall % complete, which drives RA billing.",
  },
  {
    path: "/tally-integration",
    title: "Tally-Integrated Construction ERP | BuildNexa",
    description: "Ledger & Tally Export writes the period's vouchers as Tally-compatible XML for your statutory auditor, alongside GST tax codes and a TDS register covering sections 194C, 194I, 194J and 194Q.",
  },
];

export function pageByPath(path) {
  return PAGES.find((p) => p.path === path) ?? PAGES[0];
}
