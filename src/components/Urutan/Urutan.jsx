import { useLang } from "../../Language/Language"; // <-- pakai bahasa

export default function TableOfContents() {
  const { lang } = useLang();

  return (
    <section
      className="w-full min-h-screen px-10 md:px-20 py-10 relative"
      style={{
        background: '#f4f4f4 url("https://grainy-gradients.vercel.app/noise.svg")'
      }}
    >

      {/* BIG TEXT TOP LEFT / RIGHT */}
      <div
        className="
          absolute top-0
          right-0 left-auto text-right pr-5
          md:left-0 md:right-auto md:text-left md:pl-5
          leading-none
        "
      >
        <h1 className="text-[60px] sm:text-[80px] md:text-[120px] font-black -mb-4">
          {lang === "id" ? "daftar" : "table of"}
        </h1>
        <h1 className="text-[60px] sm:text-[80px] md:text-[120px] font-black">
          {lang === "id" ? "isi" : "contents"}
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
          <span className="text-right w-[200px]">
            {lang === "id" ? "PENGANTAR" : "INTRODUCTION"}
          </span>
        </div>

        <div className="flex items-center justify-end mb-2">
          <span className="mr-3">2</span>
          <span className="text-right w-[200px]">
            {lang === "id" ? "PENGALAMAN" : "EXPERIENCE"}
          </span>
        </div>

     <div className="flex items-center justify-end mb-2">
  <span className="mr-3">3</span>
  <span className="text-right w-[200px]">
    {lang === "id" ? "KEAHLIAN" : "SKILLS"}
  </span>
</div>


        <div className="flex items-center justify-end mb-2">
          <span className="mr-3">4</span>
          <span className="text-right w-[200px]">
            {lang === "id" ? "PROYEK" : "PROJECT"}
          </span>
        </div>

        <div className="flex items-center justify-end">
          <span className="mr-3">5</span>
          <span className="text-right w-[200px]">
            {lang === "id" ? "KONTAK" : "CONTACT"}
          </span>
        </div>
      </div>

    </section>
  );
}
