import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Hero from './components/Hero/Hero.jsx'
import Urutan from './components/Urutan/Urutan.jsx'
import About from './components/About/About.jsx'

function App() {
   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
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
      <About />
    </>
  )
}

export default App
