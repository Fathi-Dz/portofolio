import { motion } from "framer-motion";
import { useLang } from "../../Language/Language"; // <-- pakai bahasa
import aboutData from "../../assets/data/About/about.json";

export default function AboutSection() {
  const { t } = useLang();

  return (
    <section
      className="
        relative w-full min-h-screen 
        px-8 md:px-20 py-28
        flex flex-col md:flex-row items-center 
        gap-20 bg-[var(--color-primary)]
        overflow-hidden
      "
    >

      {/* LEFT TEXT */}
      <div className="w-full md:w-1/2 z-20 space-y-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, x: -60, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="
            text-4xl md:text-6xl font-black 
            tracking-tight text-[var(--color-secondary)]
          "
        >
          {t(aboutData.name.id, aboutData.name.en)}
        </motion.h2>

        {/* LINE ANIMATION */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-[3px] bg-[var(--color-secondary)] rounded-full"
        ></motion.div>

        {/* DESC 1 */}
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
          className="
            text-[15px] md:text-[18px] leading-relaxed 
            font-medium max-w-[520px]
            text-[var(--color-accent)] font-poppins
          "
        >
          {t(aboutData.desc1.id, aboutData.desc1.en)}
        </motion.p>

        {/* DESC 2 */}
        <motion.p
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="
            text-[15px] md:text-[18px] leading-relaxed 
            font-medium max-w-[520px]
            text-[var(--color-accent)] font-poppins
          "
        >
          {t(aboutData.desc2.id, aboutData.desc2.en)}
        </motion.p>

      </div>

      {/* RIGHT SIDE DECORATION */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="
          w-full md:w-1/2 flex justify-center
        "
      >
        <div
          className="
            w-[280px] h-[280px] md:w-[340px] md:h-[340px]
            rounded-3xl border-[3px] border-[var(--color-secondary)]
            opacity-40
            flex items-center justify-center
            font-black text-xl md:text-2xl text-[var(--color-secondary)]
            tracking-widest
          "
        >
          {`< ABOUT />`}
        </div>
      </motion.div>

      {/* HUGE BACKGROUND TEXT */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="
          absolute bottom-0 left-0 
          font-black leading-none pointer-events-none select-none
          text-[55px] sm:text-[110px] md:text-[160px] lg:text-[190px]
          text-[var(--color-secondary)]
          opacity-10
        "
      >
        ABOUT
      </motion.h1>
    </section>
  );
}
