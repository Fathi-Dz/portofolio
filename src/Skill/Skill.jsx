import { motion } from "framer-motion";
import * as Icons from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function SkillSection() {
  const skills = [
    {  icon: Icons.FaHtml5 },
    {  icon: Icons.FaCss3Alt },
    { icon: Icons.FaJs },
    {  icon: Icons.FaReact },
    {  icon: SiTailwindcss },
    { icon: Icons.FaFigma },
  ];

  const looped = [...skills, ...skills, ...skills];

  return (
    <section className="relative w-full bg-secondary py-20 overflow-hidden">
      {/* === BACKGROUND TEXT === */}
      <h1
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          font-hanson
          text-[20vw] md:text-[18vw] 
          text-[var(--color-secondary)]
          opacity-20 
          tracking-widest
          whitespace-nowrap
          pointer-events-none
          select-none
        "
      >
        SKILLS
      </h1>

      {/* === MARQUEE === */}
      <div className="relative z-10 mt-16 overflow-hidden whitespace-nowrap w-full">
        <motion.div
          className="flex gap-20 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {looped.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-secondary"
              >
                <Icon className="text-6xl" style={{ color: "var(--color-secondary)" }} />

                <p className="mt-3 text-lg font-bold">{skill.name}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
