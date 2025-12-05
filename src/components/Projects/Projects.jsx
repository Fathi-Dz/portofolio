import { motion } from "framer-motion";
import projectData from "../../assets/data/project/project.json";
import { useLang } from "../../Language/Language";

// IMPORT GAMBAR DI SINI
import project from "../../assets/asset/projects/project.webp";
import project1 from "../../assets/asset/projects/project1.webp";

// MAP FILE → VARIABLE
const imgMap = {
  "project.jpg": project,
  "project1.jpg": project1
};

export default function ProjectSection() {
  const { lang } = useLang();

  return (
    <section className="relative w-full bg-[var(--color-secondary)] py-20 px-6">

      {/* LEFT TITLE */}
      <h1
        className="
          absolute left-[-2vw] top-132
          -translate-y-1/2 -translate-x-[40%]
          text-[16vw] md:text-[7vw]
          font-bold text-primary/10
          rotate-90 whitespace-nowrap
          pointer-events-none select-none tracking-widest
          md:left-[-3vw] sm:left-[-10vw] sm:text-[22vw]
        "
      >
        {lang === "id" ? "PROJEK" : "PROJECTS"}
      </h1>

      {/* LIST PROJECTS */}
      <div className="max-w-4xl mx-auto space-y-20 relative z-10">
        {projectData.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: p.side === "left" ? -120 : 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`flex items-center gap-8 ${p.side === "right" ? "flex-row-reverse" : ""}`}
          >

            {/* IMAGE (SUDAH FIX) */}
            <motion.img
              src={imgMap[p.img]}
              alt={p.title[lang]}
              whileHover={{ scale: 1.05, rotateX: 10, rotateY: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-1/2 h-60 object-cover rounded-xl shadow-xl"
            />

            {/* TITLE */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="
                text-[var(--color-primary)]
                font-bold text-3xl md:text-4xl
                tracking-wide
                bg-gradient-to-r from-[var(--color-primary)]/70 to-[var(--color-primary)]/30
                bg-clip-text text-transparent
              "
            >
              {p.title[lang]}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
