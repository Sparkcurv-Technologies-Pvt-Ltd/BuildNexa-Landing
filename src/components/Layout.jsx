import Chrome from "./Chrome.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Overlays from "./Overlays.jsx";

export default function Layout({ children }) {
  return (
    <>
      <Chrome />
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <Overlays />
    </>
  );
}
