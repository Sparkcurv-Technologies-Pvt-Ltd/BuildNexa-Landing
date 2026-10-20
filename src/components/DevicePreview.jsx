// Desktop window with a phone overlapping its bottom-right corner. Both show actual
// BuildNexa screenshots (company names, GSTINs and org name replaced with placeholder
// data) — buildnexa-previewsite.png for the window, buildnexa-previewsite-mobile.png
// (the app's own mobile layout) for the phone screen and, below 640px, for the window
// too (swapped in via <picture>, since shrinking the desktop screenshot that far would
// make its text unreadably small).
// Styles: device-preview.css (real px/rem sizes, not container-width units).

export default function DevicePreview() {
  return (
    <figure className="dp" aria-label="BuildNexa interface preview">
      <span className="dp__glow" aria-hidden="true" />

      <div className="dp__window">
        <div className="dp__bar">
          <span className="dp__dots" aria-hidden="true"><i /><i /><i /></span>
          <span className="dp__url">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            <span>app.buildnexa.io/companies</span>
          </span>
        </div>

        <picture>
          <source media="(max-width: 640px)" srcSet="/assets/img/buildnexa-previewsite-mobile.png" />
          <img
            className="dp__shot"
            src="/assets/img/buildnexa-previewsite.png"
            width="1365" height="680"
            alt="BuildNexa Companies screen: sidebar with Masters open, four summary cards and a company list"
          />
        </picture>
      </div>

      <div className="dp__phone">
        <div className="dp__screen">
          <img
            className="dp__phone-shot"
            src="/assets/img/buildnexa-previewsite-mobile.png"
            width="251" height="540"
            alt="BuildNexa's mobile layout: the Companies screen on a phone"
          />
        </div>
      </div>
    </figure>
  );
}
