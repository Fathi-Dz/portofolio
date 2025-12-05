import { FaInstagram, FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";

// FOTO (NORMAL IMPORT)
import logo from "../../assets/asset/logo/logos.webp";

// DATA JSON
import FooterData from "../../assets/data/Footer/Footer.json";

export default function Footer() {
  return (
    <footer
      className="
        w-full 
        bg-[var(--color-secondary)] 
        text-[var(--color-accent)] 
        py-14 
        flex flex-col items-center
        relative
        overflow-hidden
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2 
          w-[480px] h-[480px]
          bg-[var(--color-primary)]/10
          blur-[140px]
          rounded-full
        "
      />

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
        <a href={FooterData.socials.instagram}>
          <FaInstagram className="hover:text-[var(--color-primary)] transition" />
        </a>
        <a href={FooterData.socials.linkedin}>
          <FaLinkedin className="hover:text-[var(--color-primary)] transition" />
        </a>
        <a href={FooterData.socials.github}>
          <FaGithub className="hover:text-[var(--color-primary)] transition" />
        </a>
        <a href={FooterData.socials.behance}>
          <FaBehance className="hover:text-[var(--color-primary)] transition" />
        </a>
      </div>

      {/* CONTACT */}
      <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400 mb-10">
        <p>✉️ {FooterData.email}</p>
        <p>📞 {FooterData.phone}</p>
      </div>

      {/* LINE */}
      <div className="w-[80%] border-t border-gray-700/50 mb-6" />

      {/* COPYRIGHT */}
      <p className="text-xs text-gray-500 tracking-widest uppercase opacity-70">
        {FooterData.copyright}
      </p>
    </footer>
  );
}
