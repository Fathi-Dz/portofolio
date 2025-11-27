import aboutData from "../../assets/data/About/about.json";

export default function AboutSection() {
  return (
    <section
      className="
        relative w-full min-h-screen 
        px-8 md:px-20 py-20 
        flex flex-col md:flex-row items-center gap-16
        overflow-hidden bg-[var(--color-primary)]
      "
    >

      {/* LEFT TEXT */}
      <div className="w-full md:w-1/2 z-20">
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-[var(--color-secondary)]">
          {aboutData.name}
        </h2>

        <p className="text-[15px] md:text-[18px] leading-relaxed font-medium max-w-[520px] text-[var(--color-accent)]">
          {aboutData.desc1}
        </p>

        <p className="mt-4 text-[15px] md:text-[18px] leading-relaxed font-medium max-w-[520px] text-[var(--color-accent)]">
          {aboutData.desc2}
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden md:flex w-full md:w-1/2 justify-center z-20">
        <img
          src={aboutData.image}
          alt={aboutData.name}
          className="w-[300px] md:w-[360px] lg:w-[420px] rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* HUGE BACKGROUND TEXT */}
      <h1
        className="
          absolute bottom-0 left-0 
          font-black leading-none select-none pointer-events-none
          opacity-10
          text-[65px]
          sm:text-[110px]
          md:text-[160px]
          lg:text-[190px]
          text-[var(--color-accent)]
        "
      >
        about me
      </h1>
    </section>
  );
}
