import { createFileRoute } from "@tanstack/react-router";

import { QuoteForm } from "@/components/site/QuoteForm";

const TITLE = "Assistance visa et mobilité internationale — MDG GLOBAL HOLDINGS";
const DESCRIPTION =
  "Accompagnement administratif pour vos voyages d'affaires et missions de sourcing : constitution du dossier, lettre d'invitation, rendez-vous consulaire et suivi.";

export const Route = createFileRoute("/assistance-visa")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: VisaPage,
});

const STEPS = [
  { n: "01", title: "Évaluation", text: "Analyse de votre profil, du motif du voyage et de la destination." },
  { n: "02", title: "Dossier", text: "Liste des pièces, vérification et mise en conformité des documents." },
  { n: "03", title: "Rendez-vous", text: "Prise de rendez-vous consulaire et préparation à l'entretien." },
  { n: "04", title: "Suivi", text: "Suivi du traitement jusqu'à la remise du visa et du billet." },
];

const SERVICES = [
  "Visa d'affaires et missions de sourcing",
  "Lettre d'invitation et attestation de prise en charge",
  "Réservation de vol et d'hébergement",
  "Assurance voyage",
  "Traduction et légalisation de documents",
  "Accompagnement sur place lors des salons et usines",
];

function VisaPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <img
          src="/images/sect-visa.jpg"
          alt="Voyage d'affaires international"
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 to-ink" />
        <div className="relative mx-auto max-w-[1200px] px-5 py-16">
          <div className="eyebrow text-amber">Assistance visa</div>
          <h1 className="mt-4 max-w-[18ch] text-4xl uppercase leading-[0.95] md:text-6xl">
            Voyagez sans blocage administratif
          </h1>
          <p className="mt-5 max-w-[58ch] text-chrome/70">
            Nous préparons et suivons votre dossier de visa pour vos déplacements d'affaires,
            missions de sourcing et salons professionnels.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="eyebrow text-amberhot">Processus</div>
        <h2 className="mt-3 text-3xl uppercase">Quatre étapes</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-xl bg-emeraude/10 border border-or-prestige/15 p-6">
              <div className="font-display text-3xl text-amberhot">{s.n}</div>
              <h3 className="mt-3 text-lg uppercase">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emeraude/20 py-16">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-5 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="eyebrow text-amberhot">Prestations</div>
            <h2 className="mt-3 text-3xl uppercase">Ce que nous prenons en charge</h2>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              {SERVICES.map((s) => (
                <li key={s} className="border-b border-black/5 pb-2">
                  — {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-white/70">
              MDG GLOBAL HOLDINGS est un prestataire d'accompagnement administratif ; la décision
              d'octroi du visa relève exclusivement des autorités consulaires.
            </p>
          </div>
          <QuoteForm defaultSubject="Assistance visa" />
        </div>
      </section>
    </main>
  );
}
