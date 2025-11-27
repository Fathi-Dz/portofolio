import { FaInstagram, FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import logo from "../../assets/asset/logo/logos.png";

export default function Footer() {
  return (
    <footer className="
      w-full 
      bg-[var(--color-secondary)] 
      text-[var(--color-accent)] 
      py-14 
      flex flex-col items-center
      relative
      overflow-hidden
    ">

      {/* BACKGROUND GLOW */}
      <div className="
        absolute top-0 left-1/2 -translate-x-1/2 
        w-[480px] h-[480px]
        bg-[var(--color-primary)]/10
        blur-[140px]
        rounded-full
      "></div>


      {/* LOGO */}
      <img 
        src={logo} 
        alt="logo"
        className="
          w-20 mb-8 
          opacity-80 hover:opacity-100 
          transition duration-300
        "
      />


      {/* ICONS */}
<div className="flex items-center gap-8 mb-6 text-2xl">
  {[FaInstagram, FaLinkedin, FaGithub, FaBehance].map((Icon, i) => (
    <a
      key={i}
      href="#"
      className="
        group transition-all duration-300
        text-[var(--color-accent)]
        hover:text-[var(--color-primary)]
        scale-100 hover:scale-125
        hover:-translate-y-1
        hover:drop-shadow-[0_0_10px_var(--color-primary)]
      "
    >
      <Icon className="transition-all duration-300 group-hover:rotate-6" />
    </a>
  ))}
</div>



      {/* CONTACT */}
      <div className="
        flex flex-col md:flex-row 
        items-center gap-4 
        text-sm 
        text-gray-400 
        mb-10
      ">
        <p className="flex items-center gap-2">
          ✉️ beje.dev@gmail.com
        </p>
        <p className="flex items-center gap-2">
          📞 +62 895 xxx xxxx
        </p>
      </div>


      {/* LINE */}
      <div className="
        w-[80%] 
        border-t border-gray-700/50 
        mb-6
      "></div>


      {/* COPYRIGHT */}
      <p className="
        text-xs text-gray-500 tracking-widest
        uppercase 
        opacity-70
      ">
        Designed by @beje — UI/UX Developer
      </p>
    </footer>
  );
}
