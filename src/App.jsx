import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Hero from './components/Hero/Hero.jsx'
import Urutan from './components/Urutan/Urutan.jsx'
import About from './components/About/About.jsx'
import Skill from './Skill/Skill.jsx'
import Projects from './components/Projects/Projects.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
   useEffect(() => {
const lenis = new Lenis({
  duration: 1.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
      <Urutan />
      <Skill />
      <About />
      <Projects />
      <Footer />
    </>
  )
}

export default App
