import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import { useLang } from "@/lib/i18n/index";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MDG GLOBAL HOLDINGS | International Group based in Burkina Faso" },
      { name: "description", content: "MDG GLOBAL HOLDINGS is a diversified international group. International trade, logistics, vehicles, mobility, agriculture and hospitality. Ouagadougou, Burkina Faso." },
      { property: "og:title", content: "About — MDG GLOBAL HOLDINGS" },
      { rel: "alternate", hrefLang: "fr", href: "https://www.mdgglobalholdings.com/a-propos" },
      { rel: "alternate", hrefLang: "en", href: "https://www.mdgglobalholdings.com/about" },
    ],
  }),
  component: AboutPageEN,
});

const FlagBF = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-12 h-8 rounded shadow-sm">
    <rect width="900" height="300" fill="#EF2B2D"/><rect y="300" width="900" height="300" fill="#009A00"/>
    <polygon points="450,180 468,236 527,236 480,268 498,324 450,292 402,324 420,268 373,236 432,236" fill="#FFD700"/>
  </svg>
);
const FlagCN = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-12 h-8 rounded shadow-sm">
    <rect width="900" height="600" fill="#DE2910"/>
    <polygon points="150,100 171,166 240,166 185,205 206,271 150,232 94,271 115,205 60,166 129,166" fill="#FFDE00"/>
    <polygon points="270,60 279,88 308,88 285,104 294,132 270,116 246,132 255,104 232,88 261,88" fill="#FFDE00"/>
    <polygon points="330,120 339,148 368,148 345,164 354,192 330,176 306,192 315,164 292,148 321,148" fill="#FFDE00"/>
    <polygon points="330,200 339,228 368,228 345,244 354,272 330,256 306,272 315,244 292,228 321,228" fill="#FFDE00"/>
    <polygon points="270,260 279,288 308,288 285,304 294,332 270,316 246,332 255,304 232,288 261,288" fill="#FFDE00"/>
  </svg>
);
const FlagEU = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-12 h-8 rounded shadow-sm">
    <rect width="900" height="600" fill="#003399"/>
    {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => {
      const rad = (deg - 90) * Math.PI / 180;
      const cx = 450 + 180 * Math.cos(rad); const cy = 300 + 180 * Math.sin(rad);
      return <polygon key={i} points={`${cx},${cy-18} ${cx+5},${cy-5} ${cx+18},${cy-5} ${cx+8},${cy+4} ${cx+11},${cy+17} ${cx},${cy+9} ${cx-11},${cy+17} ${cx-8},${cy+4} ${cx-18},${cy-5} ${cx-5},${cy-5}`} fill="#FFCC00"/>;
    })}
  </svg>
);
const FlagAE = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-12 h-8 rounded shadow-sm">
    <rect width="900" height="600" fill="#fff"/><rect width="900" height="200" fill="#00732F"/>
    <rect y="400" width="900" height="200" fill="#000"/><rect width="250" height="600" fill="#FF0000"/>
  </svg>
);

function AboutPageEN() {
  const { t } = useLang();
  const a = t.about;
  const VALUES_EN = [
    { title: a.value1Title, text: a.value1Text },
    { title: a.value2Title, text: a.value2Text },
    { title: a.value3Title, text: a.value3Text },
    { title: a.value4Title, text: a.value4Text },
  ];
  const ZONES_EN = [
    { zone: a.zone1, flag: <FlagBF />, desc: a.zone1Desc },
    { zone: a.zone2, flag: <FlagCN />, desc: a.zone2Desc },
    { zone: a.zone3, flag: <FlagEU />, desc: a.zone3Desc },
    { zone: a.zone4, flag: <FlagAE />, desc: a.zone4Desc },
  ];
  return (
    <main>
      <section className="relative overflow-hidden" style={{ backgroundColor: "#eeeee6" }}>
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-base sm:text-lg font-bold uppercase tracking-widest text-or-prestige">{a.label}</p>
          <h1 className="mt-2 text-lg sm:text-xl font-bold uppercase leading-snug text-noir max-w-[36ch]">MDG GLOBAL HOLDINGS</h1>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: "#f5f5ee" }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="gold-line" />
            <h2 className="mt-6 text-xl sm:text-2xl lg:text-3xl font-bold uppercase text-noir">{a.whoTitle}</h2>
            <p className="mt-5 text-noir/70 leading-relaxed">{a.text1}</p>
            <p className="mt-4 text-noir/70 leading-relaxed">{a.text2}</p>
            <p className="mt-4 text-noir/70 leading-relaxed">{a.text3}</p>
            <p className="mt-4 text-noir/70 leading-relaxed">{a.text4}</p>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-or-prestige/20 shadow-sm">
            <img src="/images/hero-port.jpg" alt="MDG GLOBAL HOLDINGS" loading="lazy" width={1200} height={800} className="aspect-[4/3] w-full object-cover" />
          </figure>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: "#eeeee6" }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="rounded-2xl bg-white border border-or-prestige/20 p-10 shadow-sm">
              <div className="gold-line" />
              <h2 className="mt-6 text-2xl font-bold uppercase text-noir">{a.visionTitle}</h2>
              <p className="mt-4 text-noir/70 leading-relaxed text-lg italic">{a.visionText}</p>
            </div>
            <div className="rounded-2xl bg-white border border-or-prestige/20 p-10 shadow-sm">
              <div className="gold-line" />
              <h2 className="mt-6 text-2xl font-bold uppercase text-noir">{a.missionTitle}</h2>
              <p className="mt-4 text-noir/70 leading-relaxed text-lg italic">{a.missionText}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: "#f5f5ee" }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="text-center">
            <div className="eyebrow text-or-prestige">{a.valuesLabel}</div>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-noir">{a.valuesTitle}</h2>
          </div>
          <div className="mt-12 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES_EN.map((v) => (
              <div key={v.title} className="rounded-xl bg-white border border-or-prestige/20 p-7 smooth-transition hover:border-or-prestige/50 hover:shadow-lg hover:-translate-y-1">
                <div className="gold-line" />
                <h3 className="mt-6 text-xl font-bold uppercase text-noir">{v.title}</h3>
                <p className="mt-3 text-sm text-noir/65 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: "#eeeee6" }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="eyebrow text-or-prestige">{a.zonesLabel}</div>
            <h2 className="mt-4 text-xl sm:text-2xl font-bold uppercase text-noir">{a.zonesTitle}</h2>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {ZONES_EN.map((z) => (
              <div key={z.zone} className="rounded-xl bg-white border border-or-prestige/20 p-6 smooth-transition hover:border-or-prestige/50 hover:shadow-md">
                <div className="mb-3">{z.flag}</div>
                <h3 className="text-noir font-bold uppercase text-sm tracking-wider">{z.zone}</h3>
                <p className="mt-3 text-xs text-noir/60 leading-relaxed">{z.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title={a.ctaTitle} text={a.ctaText} />
    </main>
  );
}
