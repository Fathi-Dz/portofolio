import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import gsap from "gsap";
import imgHero from "../../assets/asset/Hero/hero.png";
import "../Hero/Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const textRef = useRef(null);

  const panel1 = useRef(null);
  const panel2 = useRef(null);
  const panel3 = useRef(null);
  const panel4 = useRef(null);

  // PARALLAX
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-30, 30], [10, -10]);
  const rotateY = useTransform(x, [-30, 30], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.08);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.08);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // INTRO ANIMATION
  useEffect(() => {
    const intro = introRef.current;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    // PANEL MASUK
    tl.fromTo(
      [panel1.current, panel2.current, panel3.current, panel4.current],
      {
        xPercent: (i) => (i % 2 === 0 ? -100 : 100),
        yPercent: (i) => (i < 2 ? -100 : 100),
        opacity: 0
      },
      {
        xPercent: 0,
        yPercent: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.08
      }
    );

    // TEXT MUNCUL — super clean
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 40, letterSpacing: "8px" },
      { opacity: 1, y: 0, letterSpacing: "2px", duration: 0.9 },
      "-=0.5"
    );

    // PANEL CUT OUT (premium banget)
    tl.to(
      [panel1.current, panel2.current, panel3.current, panel4.current],
      {
        xPercent: (i) => (i % 2 === 0 ? -150 : 150),
        opacity: 0,
        duration: 1,
        stagger: 0.1
      }
    );

    // INTRO FADE AWAY
    tl.to(intro, {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.5
    });

    // HERO MUNCUL
    tl.to(
      heroRef.current,
      { opacity: 1, filter: "blur(0px)", duration: 1.2 },
      "-=0.3"
    );
  }, []);

  return (
    <>
      {/* INTRO – CLEANEST VERSION */}
      <div
        ref={introRef}
        className="
          fixed inset-0 z-[9999] overflow-hidden
          bg-black flex items-center justify-center
        "
      >
        {/* 4 PANEL */}
        <div ref={panel1} className="intro-panel bg-neutral-900"></div>
        <div ref={panel2} className="intro-panel bg-neutral-800"></div>
        <div ref={panel3} className="intro-panel bg-neutral-900"></div>
        <div ref={panel4} className="intro-panel bg-neutral-800"></div>

        {/* CLEAN TEXT */}
        <h1
          ref={textRef}
          className="
            text-[11vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw]
            font-[var(--font-bebas)]
            text-white tracking-[2px]
          "
        >
          WELCOME
        </h1>
      </div>

      {/* HERO */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="
          relative min-h-screen w-full
          flex justify-center items-center
          px-4 sm:px-6 md:px-10
          overflow-hidden opacity-0
        "
        style={{ filter: "blur(20px)" }}
      >
        <motion.img
          src={imgHero}
          alt="Hero"
          style={{ x, y, rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="
            w-[80%] sm:w-[70%] md:w-[55%] lg:w-[45%] xl:w-[40%]
            max-w-[650px] object-contain z-10
          "
        />

        <div className="absolute inset-0 bg-black/40" />
      </section>
    </>
  );
};

export default Hero;
