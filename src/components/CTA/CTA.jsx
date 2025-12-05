import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "../../Language/Language";

// IMPORT IMAGE MANUAL
import emojiImg from "../../assets/asset/CTA/emoji.webp";

// IMPORT DATA JSON
import CTA from "../../assets/data/CTA/CTA.json";

export default function ThankYouSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-30% 0px -30% 0px",
    once: false
  });

  const { lang } = useLang();

  return (
    <section
      ref={ref}
      className="
        w-full min-h-screen
        bg-[var(--color-primary)]
        text-[var(--color-secondary)]
        flex flex-col items-center justify-center
        px-6 py-20 text-center relative
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          w-[60vw] h-[60vw]
          bg-[var(--color-secondary)]/5
          rounded-full blur-[140px]
        "
      />

      {/* TITLE */}
      <h1
        className="
          font-black leading-none
          text-[22vw] sm:text-[18vw] md:text-[13vw] lg:text-[11vw]
          tracking-[-2px] select-none 
          drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]
        "
      >
        {CTA.title[lang]}
      </h1>

      {/* SUBTITLE */}
      <p className="mt-4 text-sm md:text-lg opacity-70 tracking-wider font-medium">
        {CTA.subtitle[lang]}
      </p>

      {/* EMOJI */}
      <motion.img
        src={emojiImg}
        alt="emoji"
        animate={{ rotateY: isInView ? 0 : 180 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="
          w-[150px] sm:w-[180px] md:w-[220px] lg:w-[260px]
          mt-12 select-none
          drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]
        "
      />

      {/* BUTTON */}
      <motion.button
        whileHover={{ scale: 1.06, y: -3 }}
        whileTap={{ scale: 0.97 }}
        className="
          mt-12 px-10 py-3 rounded-xl 
          bg-white/10 border border-white/20
          hover:bg-white/20 transition-all duration-300
          text-sm md:text-base tracking-widest
          backdrop-blur-md font-normal font-poppins
        "
      >
        {CTA.button[lang]}
      </motion.button>

    </section>
  );
}
