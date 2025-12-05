import { useLang } from "../../Language/Language";
import Urutan from "../../assets/data/urutan/Urutan.json";

export default function TableOfContents() {
  const { lang } = useLang();

  return (
    <section
      className="w-full min-h-screen px-10 md:px-20 py-10 relative"
      style={{
        background: '#f4f4f4 url("https://grainy-gradients.vercel.app/noise.svg")'
      }}
    >

      {/* BIG TEXT FROM JSON */}
      <div
        className="
          absolute top-0
          right-0 left-auto text-right pr-5
          md:left-0 md:right-auto md:text-left md:pl-5
          leading-none
        "
      >
        <h1 className="text-[60px] sm:text-[80px] md:text-[120px] font-black -mb-4">
          {Urutan.title[lang][0]}
        </h1>
        <h1 className="text-[60px] sm:text-[80px] md:text-[120px] font-black">
          {Urutan.title[lang][1]}
        </h1>
      </div>

      {/* MENU LIST FROM JSON */}
      <div
        className="
          absolute bottom-10 right-10 md:right-20
          text-right font-bold text-[20px] md:text-[25px] tracking-wide
        "
      >
        {Urutan.items.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-end mb-2"
          >
            <span className="mr-3">{item.no}</span>
            <span className="text-right w-[200px]">
              {item[lang]}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}
