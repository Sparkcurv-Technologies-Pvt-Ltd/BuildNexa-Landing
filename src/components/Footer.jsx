export default function Footer() {
  return (
    <>
      {/* ============ FOOTER ============ */}
      <footer className="footer">
      <div className="slash slash--footer" aria-hidden="true"></div>
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="/" className="brand" aria-label="BuildNexa — home">
              <img className="brand__logo" src="/assets/buildnexa-icon-96.png" width="36" height="36" alt=""/>
              <span className="brand__name">Build<b>Nexa</b><span className="brand__tm">™</span></span>
            </a>
            <p>Construction ERP for projects, procurement, finance and more.</p>
            <a href="mailto:hello@buildnexa.io" className="footer__mail">hello@buildnexa.io</a>
          </div>
          <nav className="footer__col" aria-label="Company">
            <h3>Company</h3>
            <ul><li><a href="/">Home</a></li><li><a href="#about">About</a></li><li><a href="#why">Why BuildNexa</a></li><li><a href="#process">Process</a></li><li><a href="#work">Projects</a></li><li><a href="#faq">FAQs</a></li><li><a href="#contact">Contact</a></li></ul>
          </nav>
          <nav className="footer__col" aria-label="Services">
            <h3>Modules</h3>
            <ul><li><a href="/daily-progress-reporting">Daily Progress Reporting</a></li><li><a href="/procurement">Procurement</a></li><li><a href="/ra-billing">RA Billing</a></li><li><a href="/solar-epc">Solar EPC</a></li><li><a href="/tally-integration">Tally Integration</a></li><li><a href="#services">Inventory &amp; Stores</a></li><li><a href="#services">Finance &amp; Accounting</a></li></ul>
          </nav>
          <div className="footer__col">
            <h3>Stay in the loop</h3>
            <form className="newsletter" data-newsletter noValidate>
              <label htmlFor="nl-email" className="sr-only">Email address</label>
              <input id="nl-email" type="email" placeholder="you@company.com" required autoComplete="email"/>
              <button type="submit" aria-label="Subscribe"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button>
            </form>
            <p className="newsletter__msg" role="status" aria-live="polite" data-newsletter-msg></p>
          </div>
        </div>
      
        <div className="footer__word" aria-hidden="true">BuildNexa</div>
      
        <div className="footer__bottom">
          <p>© <span data-year>2026</span> BuildNexa. All rights reserved.</p>
          <a href="#top" className="to-top">Back to top <svg aria-hidden="true"><use href="#i-arrow"/></svg></a>
        </div>
      </div>
      </footer>
    </>
  );
}
