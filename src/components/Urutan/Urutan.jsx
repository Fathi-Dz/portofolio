export default function TableOfContents() {
  return (
    <section
      className="w-full min-h-screen px-10 md:px-20 py-10 relative"
      style={{
        background: '#f4f4f4 url("https://grainy-gradients.vercel.app/noise.svg")'
      }}
    >

      {/* BIG TEXT TOP LEFT on desktop — but moves to RIGHT on mobile/tablet */}
      <div
        className="
          absolute top-0
          /* MOBILE & TABLET: text di kanan */
          right-0 left-auto text-right pr-5

          /* DESKTOP: balik ke kiri */
          md:left-0 md:right-auto md:text-left md:pl-5

          leading-none
        "
      >
        <h1 className="text-[60px] sm:text-[80px] md:text-[120px] font-black -mb-4">
          table of
        </h1>
        <h1 className="text-[60px] sm:text-[80px] md:text-[120px] font-black">
          contents
        </h1>
      </div>

      {/* RIGHT BOTTOM MENU */}
      <div
        className="
          absolute bottom-10 right-10 md:right-20
          text-right font-bold text-[20px] md:text-[25px] tracking-wide
        "
      >
        <div className="flex items-center justify-end mb-2">
          <span className="mr-3">1</span>
          <span className="text-right w-[200px]">INTRODUCTION</span>
        </div>

        <div className="flex items-center justify-end mb-2">
          <span className="mr-3">2</span>
          <span className="text-right w-[200px]">EXPERIENCE</span>
        </div>

        <div className="flex items-center justify-end mb-2">
          <span className="mr-3">3</span>
          <span className="text-right w-[200px]">SKILLS</span>
        </div>

        <div className="flex items-center justify-end mb-2">
          <span className="mr-3">4</span>
          <span className="text-right w-[200px]">PROJECT</span>
        </div>

        <div className="flex items-center justify-end">
          <span className="mr-3">5</span>
          <span className="text-right w-[200px]">CONTACT</span>
        </div>
      </div>

    </section>
  );
}
