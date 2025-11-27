import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import gsap from "gsap";
import imgHero from "../../assets/asset/Hero/hero.png";
import "./Hero.css";

const Hero = () => {
  const introRef = useRef(null);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const lightRef = useRef(null);

  // PARALLAX ----------------------------------------------------
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-30, 30], [10, -10]);
  const rotateY = useTransform(x, [-30, 30], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * 0.08);
    y.set(offsetY * 0.08);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // INTRO GSAP ---------------------------------------------------
  useEffect(() => {
    const intro = introRef.current;
    const hero = heroRef.current;
    const text = textRef.current;
    const light = lightRef.current;

    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 1 },
    });

    // Split reveal mask
    tl.fromTo(
      intro,
      { clipPath: "inset(0 0 100% 0)" },
      { clipPath: "inset(0 0 0% 0)", duration: 1.3 }
    );

    // Glitch scale pop
    tl.fromTo(
      text,
      { opacity: 0, scale: 0.7, filter: "blur(20px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1 },
      "-=0.6"
    );

    // Light sweep
    tl.fromTo(
      light,
      { x: "-150%" },
      { x: "150%", duration: 1.2 },
      "-=1"
    );

    // Whole intro fades out
    tl.to(intro, {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.9,
      delay: 0.7,
    });

    // Hero section appears
    tl.to(
      hero,
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
      },
      "-=0.5"
    );
  }, []);

  return (
    <>
      {/* INTRO */}
      <div
        ref={introRef}
        className="
          fixed inset-0 z-[9999]
          bg-[var(--color-secondary)]
          flex items-center justify-center
          overflow-hidden
        "
      >
        {/* LIGHT SWEEP */}
        <div
          ref={lightRef}
          className="
            absolute top-0 left-0 w-[40%] h-full
            bg-gradient-to-r from-transparent via-white/40 to-transparent
            blur-3xl opacity-40
          "
        ></div>

        {/* GLITCH TEXT */}
        <h1
          ref={textRef}
          className="
            text-[11vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw]
            font-[var(--font-bebas)]
            text-[var(--color-primary)]
            tracking-widest select-none
          "
          style={{
            textShadow: `
              0 0 20px rgba(255,255,255,0.3),
              0 0 40px rgba(255,255,255,0.15)
            `,
          }}
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
          transition-all duration-[1500ms]
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

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />
      </section>
    </>
  );
};

export default Hero;
