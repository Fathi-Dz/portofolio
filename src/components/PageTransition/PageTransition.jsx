import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export default function TransitionWrapper({ children }) {
  const ref = useRef(null);

  // once: true → animasi cuma sekali
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: {
          opacity: 0,
          x: 120,
          filter: "blur(20px)",
          clipPath: "inset(0 0 100% 0)",
        },
        show: {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          clipPath: "inset(0 0 0 0)",
          transition: {
            duration: 1.2,
            ease: [0.25, 0.8, 0.25, 1],
          },
        },
      }}
      className="w-full relative"
    >
      {/* sub-overlay */}
      <motion.div
        initial={{ x: "-20%", opacity: 0 }}
        animate={isInView ? { x: "0%", opacity: 0.15 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none"
      />

      {children}
    </motion.section>
  );
}
