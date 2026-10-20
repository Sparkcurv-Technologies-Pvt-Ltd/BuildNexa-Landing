import DevicePreview from "./DevicePreview.jsx";

export default function Cta() {
  return (
    <>
      {/* ============ CTA ============ */}
      <section className="cta" aria-labelledby="cta-title">
        <div className="lamp" aria-hidden="true" data-inview><div className="lamp__glow"></div><div className="lamp__cone"></div><div className="lamp__line"></div></div>
        <div className="cta__rings" aria-hidden="true" data-parallax="0.1"><i></i><i></i><i></i><i></i></div>
        <div className="cta__marquee" aria-hidden="true">
          <div className="cta__marquee-track"><span>Let's build — Let's build — Let's build — Let's build — </span><span>Let's build — Let's build — Let's build — Let's build — </span></div>
        </div>
        <div className="container cta__content">
          {/* Kept for accessibility (section is aria-labelledby this id) — the device preview below stands in for it visually. */}
          <h2 id="cta-title" className="sr-only">Have something ambitious in mind? Let's engineer it together.</h2>

          <DevicePreview />

          <div className="cta__actions" data-reveal style={{ "--d": ".3s" }}>
            <a href="#contact" className="btn btn--primary btn--xl" data-magnetic><span>Start the conversation</span><svg className="btn__icon" aria-hidden="true"><use href="#i-arrow"/></svg></a>
            <a href="mailto:hello@buildnexa.io" className="cta__mail">hello@buildnexa.io</a>
          </div>
        </div>
      </section>
    </>
  );
}
