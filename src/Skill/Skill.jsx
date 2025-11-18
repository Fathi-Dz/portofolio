import { motion } from "framer-motion";
import * as Icons from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function SkillSection() {
  const skills = [
    { name: "HTML", icon: Icons.FaHtml5 },
    { name: "CSS", icon: Icons.FaCss3Alt },
    { name: "Javascript", icon: Icons.FaJs },
    { name: "React", icon: Icons.FaReact },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Figma", icon: Icons.FaFigma },
  ];

  const looped = [...skills, ...skills];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-secondary">

      {/* ===== BIG BACKGROUND TEXT ===== */}
      <h1
        className="
          absolute top-0 left-0 w-full 
          text-[18vw] sm:text-[14vw] md:text-[10vw] 
          font-black text-primary 
          opacity-10 tracking-tight 
          px-10 select-none pointer-events-none
        "
        style={{ lineHeight: 0.9 }}
      >
        SKILLS
      </h1>

      {/* ===== MARQUEE ===== */}
      <div className="mt-[25vw] sm:mt-[18vw] md:mt-[12vw] overflow-hidden whitespace-nowrap w-full">

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
                className="flex flex-col items-center text-primary"
              >
                <Icon className="text-6xl md:text-7xl" />
                <p className="mt-3 text-lg md:text-xl font-bold">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
