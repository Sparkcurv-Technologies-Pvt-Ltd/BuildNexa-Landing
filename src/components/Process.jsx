const STAGES = [
  { n: "01", title: "Organisation setup", body: "Companies, chart of accounts, tax codes, numbering and approval workflows.", doc: "PO/FY2627/####", tag: "Masters" },
  { n: "02", title: "Client & project", body: "Client with GSTIN and retention defaults, then the project and its contract value.", doc: "SPV-001 · 120 MWp", tag: "Clients · Projects" },
  { n: "03", title: "WBS & weightages", body: "Engineering, Procurement and Construction items whose weightages drive % complete.", doc: "412 items · 100%", tag: "WBS" },
  { n: "04", title: "Procure & build", body: "POs, GRNs, work orders and JMRs post straight into the DPR.", doc: "GRN/FY2627/0087", tag: "Procurement · DPR" },
  { n: "05", title: "Bill & collect", body: "RA bills on cumulative % complete, client payments and the client ledger.", doc: "RA-07 · 64% billed", tag: "RA bills · Payments" },
  { n: "06", title: "Close & audit", body: "Period close, financial statements and a Tally export for your auditor.", doc: "Mar-27 · locked", tag: "Reports · Tally" },
];

export default function Process() {
  return (
    <>
      {/* ============ PROCESS (connected document chain) ============ */}
      <section className="section" id="process" aria-labelledby="process-title">
        <div className="container">
          <div className="section-head">
            <span className="section-index">06</span>
            <p className="eyebrow" data-reveal>How a project travels</p>
            <h2 id="process-title" className="section-title" data-split>From setup to audit, <em>one connected journey.</em></h2>
            <p className="section-lead" data-reveal style={{ "--d": ".08s" }}>
              Every stage hands its documents to the next — nothing is re-typed, and every number traces back to the document that caused it.
            </p>
          </div>

          <div className="chain" data-reveal>
            <ol className="chain__list">
              {STAGES.map((s, i) => (
                <li className="chain__node" key={s.n} style={{ "--i": i }}>
                  <span className="chain__dot" aria-hidden="true">{s.n}</span>
                  {i < STAGES.length - 1 && <span className="chain__link" aria-hidden="true"><i></i></span>}
                  <div className="chain__card">
                    <span className="chain__doc">{s.doc}</span>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                    <span className="chain__tag">{s.tag}</span>
                  </div>
                </li>
              ))}
            </ol>

            <dl className="chain__foot">
              <div className="chain__stat">
                <dt>Materials DPR</dt>
                <dd><b><span data-count="62">0</span>%</b><span className="meter" aria-hidden="true"><span style={{ "--w": "62%" }}></span></span></dd>
              </div>
              <div className="chain__stat">
                <dt>Journal balance</dt>
                <dd><b>Dr = Cr</b><span className="pill pill--live">balanced</span></dd>
              </div>
              <div className="chain__stat">
                <dt>Nightly integrity checks</dt>
                <dd><b><span data-count="9">0</span>/9</b><span className="pill pill--live">passed</span></dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
