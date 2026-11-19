export default function PageHero({ index, eyebrow, title, lead }) {
  return (
    <section className="section page-hero" aria-labelledby="page-hero-title">
      <div className="container">
        <div className="section-head">
          <a className="breadcrumb" href="/">← BuildNexa</a>
          {index && <span className="section-index">{index}</span>}
          <p className="eyebrow" data-reveal>{eyebrow}</p>
          <h1 id="page-hero-title" className="section-title" data-split>{title}</h1>
          <span className="divider" aria-hidden="true"></span>
          {lead && <p className="section-lead" data-reveal>{lead}</p>}
        </div>
      </div>
    </section>
  );
}
