import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import imgHero from "../../assets/asset/Hero/hero.png";
import "./Hero.css";

const Hero = () => {
  const introRef = useRef(null);
  const heroRef = useRef(null);

  // PARALLAX VALUES
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-20, 20], [10, -10]);
  const rotateY = useTransform(x, [-20, 20], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * 0.1);
    y.set(offsetY * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  /* -------------------------
        INTRO ANIMATION (SAMA)
  ------------------------- */

  useEffect(() => {
    const intro = introRef.current;
    const hero = heroRef.current;

    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => {
      intro.classList.add("intro-reveal");

      const t2 = setTimeout(() => {
        intro.style.display = "none";
        hero.classList.remove("opacity-0");

        document.body.style.overflow = "auto";
      }, 2300);

      intro._t2 = t2;
    }, 2500);

    intro._t1 = t1;

    return () => {
      if (intro._t1) clearTimeout(intro._t1);
      if (intro._t2) clearTimeout(intro._t2);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {/* INTRO SAMA */}
      <div
        id="intro"
        ref={introRef}
        className="
          fixed inset-0 flex flex-col justify-center items-center 
          bg-[var(--color-secondary)] text-[var(--color-primary)]
          z-[9999] font-[var(--font-bebas)]
        "
      >
        <h1
          id="intro-title"
          className="
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 
            font-bold tracking-[4px] fade-in-slow
          "
        >
          sabar dulu napa
        </h1>

        <p
          className="
            mt-3 text-sm md:text-base 
            tracking-[3px] fade-in-slow delay-300
          "
        >
          loading...
        </p>
      </div>

      {/* HERO */}
      <section
        id="home"
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="
          relative min-h-[100vh] flex justify-center items-center
          overflow-hidden opacity-0 transition-all duration-[2000ms]
        "
      >
        <motion.img
          src={imgHero}
          alt="Hero"
          style={{
            x,
            y,
            rotateX,
            rotateY,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="w-full max-w-[530px] relative z-10"
        />

        <div className="absolute inset-0 bg-black/40"></div>
      </section>
    </>
  );
};

export default Hero;
