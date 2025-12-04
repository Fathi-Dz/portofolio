import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import gsap from "gsap";
import imgHero from "../../assets/asset/Hero/hero.png";
import "../Hero/Hero.css";

import { useLang } from "../../Language/Language"; // ⬅️ ambil hook bahasa

const Hero = () => {
  const { lang, toggleLang } = useLang(); // ⬅️ pakai bahasa

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

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 40, letterSpacing: "8px" },
      { opacity: 1, y: 0, letterSpacing: "2px", duration: 0.9 },
      "-=0.5"
    );

    tl.to(
      [panel1.current, panel2.current, panel3.current, panel4.current],
      {
        xPercent: (i) => (i % 2 === 0 ? -150 : 150),
        opacity: 0,
        duration: 1,
        stagger: 0.1
      }
    );

    tl.to(intro, {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.5
    });

    tl.to(
      heroRef.current,
      { opacity: 1, filter: "blur(0px)", duration: 1.2 },
      "-=0.3"
    );
  }, []);

  return (
    <>
      {/* INTRO */}
      <div
        ref={introRef}
        className="
          fixed inset-0 z-[9999] overflow-hidden
          bg-black flex items-center justify-center
        "
      >
        <div ref={panel1} className="intro-panel bg-neutral-900"></div>
        <div ref={panel2} className="intro-panel bg-neutral-800"></div>
        <div ref={panel3} className="intro-panel bg-neutral-900"></div>
        <div ref={panel4} className="intro-panel bg-neutral-800"></div>

        <h1
          ref={textRef}
          className="
            text-[11vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw]
            font-[var(--font-bebas)]
            text-white tracking-[2px]
          "
        >
          {lang === "id" ? "SELAMAT DATANG" : "WELCOME"}
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
        {/* 🔥 SWITCH BAHASA (POJOK KANAN ATAS) */}
{/* Language Switch - Ultra Smooth */}
<div className="absolute top-6 right-6 z-50">
  <button
    onClick={toggleLang}
    className="
      relative flex items-center w-[90px] h-[38px] 
      bg-white/15 backdrop-blur-xl rounded-full 
      border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.25)]
      transition-all duration-500 hover:bg-white/25
    "
  >
    {/* Sliding Ball */}
    <span
      className={`
        absolute w-[42px] h-[32px] bg-white rounded-full 
        shadow-[0_2px_12px_rgba(0,0,0,0.25)]
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${lang === "id" ? "left-1" : "left-[47px]"}
      `}
    />

    {/* ID text */}
    <span
      className={`
        w-1/2 text-center text-sm font-semibold 
        transition-all duration-300
        ${lang === "id" ? "text-gray-900" : "text-white/70"}
      `}
    >
      ID
    </span>

    {/* EN text */}
    <span
      className={`
        w-1/2 text-center text-sm font-semibold
        transition-all duration-300
        ${lang === "en" ? "text-gray-900" : "text-white/70"}
      `}
    >
      EN
    </span>
  </button>
</div>



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
