import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/site/QuoteForm";
import { useLang } from "@/lib/i18n/index";

export const Route = createFileRoute("/mobility")({
  head: () => ({
    meta: [
      { title: "Mobility & Visa Assistance — MDG GLOBAL HOLDINGS" },
      { name: "description", content: "Administrative support for your business trips and sourcing missions: file preparation, invitation letter, consular appointment and follow-up." },
    ],
  }),
  component: MobilityEN,
});

function MobilityEN() {
  const { t } = useLang();
  const m = t.mobility;
  const STEPS = [
    { n: "01", title: m.step1Title, text: m.step1Text },
    { n: "02", title: m.step2Title, text: m.step2Text },
    { n: "03", title: m.step3Title, text: m.step3Text },
    { n: "04", title: m.step4Title, text: m.step4Text },
  ];
  const SERVICES = [m.s1, m.s2, m.s3, m.s4, m.s5, m.s6];
  return (
    <main>
      <section className="relative overflow-hidden" style={{ backgroundColor: "#eeeee6" }}>
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-base sm:text-lg font-bold uppercase tracking-widest text-or-prestige">{m.label}</p>
          <h1 className="mt-2 text-lg sm:text-xl font-bold uppercase leading-snug text-noir">{m.heroTitle}</h1>
          <p className="mt-4 max-w-[58ch] text-noir/65 leading-relaxed text-sm sm:text-base">{m.heroText}</p>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: "#f5f5ee" }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <p className="text-base sm:text-lg font-bold uppercase tracking-widest text-or-prestige">{m.processLabel}</p>
          <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold uppercase text-noir">{m.processTitle}</h2>
          <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-xl bg-white border border-or-prestige/20 p-6 smooth-transition hover:border-or-prestige/50 hover:shadow-md">
                <div className="text-gold font-display text-3xl">{s.n}</div>
                <h3 className="mt-4 text-lg font-bold uppercase text-noir">{s.title}</h3>
                <p className="mt-2 text-sm text-noir/65 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 overflow-hidden" style={{ backgroundColor: "#eeeee6" }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-base sm:text-lg font-bold uppercase tracking-widest text-or-prestige">{m.servicesLabel}</p>
              <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold uppercase text-noir">{m.servicesTitle}</h2>
              <ul className="mt-6 space-y-3">
                {SERVICES.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-noir/70 border-b border-or-prestige/10 pb-3">
                    <span className="text-or-prestige font-bold mt-0.5">—</span>{s}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-noir/45 leading-relaxed">{m.disclaimer}</p>
            </div>
            <QuoteForm defaultSubject={m.formSubject} />
          </div>
        </div>
      </section>
    </main>
  );
}
