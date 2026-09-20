import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import { useLang } from "@/lib/i18n/index";

export const Route = createFileRoute("/logistics")({
  head: () => ({
    meta: [
      { title: "Logistics & Services — MDG GLOBAL HOLDINGS | Import-Export, Freight, Customs" },
      { name: "description", content: "International sourcing, sea and air freight, customs clearance, distribution and visa assistance: MDG GLOBAL HOLDINGS services for your Africa-Asia-Europe projects." },
    ],
  }),
  component: LogisticsEN,
});

function LogisticsEN() {
  const { t } = useLang();
  const lg = t.logistics;
  const SERVICES = [
    { title: lg.s1Title, text: lg.s1Text, points: [lg.s1p1, lg.s1p2, lg.s1p3] },
    { title: lg.s2Title, text: lg.s2Text, points: [lg.s2p1, lg.s2p2, lg.s2p3] },
    { title: lg.s3Title, text: lg.s3Text, points: [lg.s3p1, lg.s3p2, lg.s3p3] },
    { title: lg.s4Title, text: lg.s4Text, points: [lg.s4p1, lg.s4p2, lg.s4p3] },
    { title: lg.s5Title, text: lg.s5Text, points: [lg.s5p1, lg.s5p2, lg.s5p3] },
    { title: lg.s6Title, text: lg.s6Text, points: [lg.s6p1, lg.s6p2, lg.s6p3] },
  ];
  const STEPS = [
    { n: "01", title: lg.step1Title, text: lg.step1Text },
    { n: "02", title: lg.step2Title, text: lg.step2Text },
    { n: "03", title: lg.step3Title, text: lg.step3Text },
    { n: "04", title: lg.step4Title, text: lg.step4Text },
  ];
  return (
    <main>
      <section className="relative overflow-hidden" style={{ backgroundColor: "#eeeee6" }}>
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-base sm:text-lg font-bold uppercase tracking-widest text-or-prestige">{lg.label}</p>
          <h1 className="mt-2 text-lg sm:text-xl font-bold uppercase leading-snug text-noir">{lg.heroTitle}</h1>
          <p className="mt-4 max-w-[58ch] text-noir/65 leading-relaxed text-sm sm:text-base">{lg.heroText}</p>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: "#f5f5ee" }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.title} className="rounded-xl bg-white border border-or-prestige/20 p-7 smooth-transition hover:border-or-prestige/50 hover:shadow-lg hover:-translate-y-1">
                <div className="gold-line" />
                <h2 className="mt-5 text-xl font-bold uppercase text-noir">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-noir/65">{s.text}</p>
                <ul className="mt-4 space-y-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-or-prestige">
                  {s.points.map((p) => <li key={p}>— {p}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: "#eeeee6" }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <p className="text-base sm:text-lg font-bold uppercase tracking-widest text-or-prestige">{lg.methodLabel}</p>
          <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold uppercase text-noir">{lg.methodTitle}</h2>
          <div className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-xl bg-white border border-or-prestige/20 p-6 smooth-transition hover:border-or-prestige/50 hover:shadow-md">
                <div className="text-gold font-display text-3xl">{s.n}</div>
                <h3 className="mt-4 text-lg font-bold uppercase text-noir">{s.title}</h3>
                <p className="mt-2 text-sm text-noir/65 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn-gold mt-10 inline-block rounded-md">{lg.cta}</Link>
        </div>
      </section>
      <CtaBand title={lg.ctaTitle} />
    </main>
  );
}
