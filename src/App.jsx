import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";


import PageTransition from "./components/PageTransition/PageTransition.jsx";
const TransitionWrapper = PageTransition;
import Hero from "./components/Hero/Hero.jsx";
import Urutan from "./components/Urutan/Urutan.jsx";
import Skill from "./components/Skill/Skill.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import CTA from "./components/CTA/CTA.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
<Hero />
<TransitionWrapper><Urutan /></TransitionWrapper>
<TransitionWrapper><Skill /></TransitionWrapper>
<TransitionWrapper><About /></TransitionWrapper>
<TransitionWrapper><Projects /></TransitionWrapper>
<TransitionWrapper><CTA /></TransitionWrapper>
<TransitionWrapper><Footer /></TransitionWrapper>

    </>
  );
}

export default App;
