import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import { useLang } from "@/lib/i18n/index";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Our Activities — MDG GLOBAL HOLDINGS | Trade, Logistics, Vehicles" },
      { name: "description", content: "Discover the 6 business divisions of MDG GLOBAL HOLDINGS: international trade, vehicles & equipment, logistics, mobility, agriculture and hospitality." },
    ],
  }),
  component: ActivitiesEN,
});

function ActivitiesEN() {
  const { t } = useLang();
  const act = t.activities;
  const POLES_EN = [
    { id: "commerce", title: "International Trade", subtitle: "Import · Export · Trading", icon: "🌍", description: "International sourcing, purchasing, import, export, trading and distribution.", services: ["International sourcing", "Supplier research", "Import-Export", "Trading", "Distribution"], image: "/images/hero-port.jpg", link: "/logistics" },
    { id: "vehicules", title: "Vehicles & Equipment", subtitle: "Vehicles · Trucks · Machinery", icon: "🚛", description: "Passenger vehicles, SUVs, vans, trucks, buses, construction machinery and industrial equipment.", services: ["Passenger vehicles & SUVs", "Trucks & Buses", "Construction machinery", "Agricultural machinery", "Industrial equipment", "Spare parts"], image: "/images/sect-vehicules.jpg", link: "/logistics" },
    { id: "logistique", title: "Logistics & Transport", subtitle: "Sea · Air · Road", icon: "🚢", description: "Sea, air and road transport, groupage, customs clearance and door-to-door delivery.", services: ["Sea freight", "Air freight", "Road transport", "LCL/FCL groupage", "Customs clearance", "Door-to-door delivery"], image: "/images/hero-port.jpg", link: "/logistics" },
    { id: "mobilite", title: "Mobility & Visa Assistance", subtitle: "Visa · Administration · Mobility", icon: "✈️", description: "Administrative support, international mobility and assistance with procedures.", services: ["Administrative support", "File preparation", "Procedural guidance", "International mobility"], image: "/images/sect-visa.jpg", link: "/mobility" },
    { id: "agriculture", title: "Agriculture & Livestock", subtitle: "Production · Livestock · Processing", icon: "🌾", description: "Agricultural production, livestock, processing and product marketing.", services: ["Agricultural production", "Livestock", "Processing", "Marketing", "Project development"], image: "/images/sect-agriculture.jpg", link: "/contact" },
    { id: "hotellerie", title: "Hospitality & Catering", subtitle: "Accommodation · Catering · Events", icon: "🏨", description: "Accommodation, catering, hotel services and tourism project development.", services: ["Hotels", "Accommodation", "Catering", "Events", "Project development"], image: "/images/sect-hotellerie.jpg", link: "/contact" },
  ];

  return (
    <main className="overflow-x-hidden">
      <section className="relative overflow-hidden" style={{ backgroundColor: "#eeeee6" }}>
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-base sm:text-xl font-bold uppercase tracking-widest text-or-prestige">{act.label}</p>
          <h1 className="mt-2 text-lg sm:text-2xl font-bold uppercase leading-snug text-noir max-w-[36ch]">
            One group. <span className="text-gold">Multiple expertise.</span> One vision.
          </h1>
          <p className="mt-4 max-w-[58ch] text-noir/65 leading-relaxed text-sm sm:text-base">{act.heroText}</p>
        </div>
      </section>
      <section className="py-12 sm:py-16" style={{ backgroundColor: "#f5f5ee" }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 space-y-14 sm:space-y-20">
          {POLES_EN.map((pole, index) => (
            <article key={pole.id} className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>figure]:order-first" : ""}`}>
              <figure className="overflow-hidden rounded-2xl border border-or-prestige/15 shadow-sm">
                <img src={pole.image} alt={pole.title} loading="lazy" className="aspect-[4/3] w-full object-cover smooth-transition hover:scale-105" />
              </figure>
              <div>
                <div className="text-4xl mb-3">{pole.icon}</div>
                <div className="gold-line" />
                <h2 className="mt-4 text-xl sm:text-2xl font-bold uppercase text-noir">{pole.title}</h2>
                <p className="label-mono mt-1 text-or-prestige">{pole.subtitle}</p>
                <p className="mt-4 text-sm sm:text-base text-noir/65 leading-relaxed">{pole.description}</p>
                <ul className="mt-5 space-y-2">
                  {pole.services.map((s) => (
                    <li key={s} className="flex items-center gap-3 text-sm text-noir/70">
                      <span className="text-or-prestige font-bold shrink-0">—</span>{s}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link to={pole.link} className="btn-gold rounded-md text-center">{act.learnMore}</Link>
                  <Link to="/contact" className="rounded-md border border-or-prestige/30 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-or-prestige smooth-transition hover:bg-or-prestige/5 text-center">{act.contact}</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
