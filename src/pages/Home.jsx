import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Modules from "../components/Modules.jsx";
import Solutions from "../components/Solutions.jsx";
import Roles from "../components/Roles.jsx";
import Compliance from "../components/Compliance.jsx";
import Why from "../components/Why.jsx";
import Process from "../components/Process.jsx";
import Compare from "../components/Compare.jsx";
import Projects from "../components/Projects.jsx";
import Faq from "../components/Faq.jsx";
import Cta from "../components/Cta.jsx";
import Contact from "../components/Contact.jsx";
import usePageSeo from "../hooks/usePageSeo.js";
import { pageByPath } from "../seo.js";

export default function Home() {
  usePageSeo(pageByPath("/"));
  return (
    <>
      <Hero />
      <About />
      <Modules />
      <Solutions />
      <Roles />
      <Compliance />
      <Why />
      <Process />
      <Compare />
      <Projects />
      <Faq />
      <Cta />
      <Contact />
    </>
  );
}
