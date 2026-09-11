import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/site/QuoteForm";

const TITLE = "Mobilité & Assistance Visa — MDG GLOBAL HOLDINGS";
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

      {/* Hero — même style que À propos */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#eeeee6" }}>
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />
        <div className="mx-auto max-w-[1280px] px-5 py-20">
          <div className="eyebrow text-or-prestige">Mobilité & Assistance Visa</div>
          <h1 className="mt-4 max-w-[18ch] text-5xl font-bold uppercase leading-[0.92] text-noir md:text-7xl">
            Voyagez sans blocage administratif
          </h1>
          <p className="mt-6 max-w-[58ch] text-noir/65 leading-relaxed text-lg">
            Nous préparons et suivons votre dossier de visa pour vos déplacements d'affaires,
            missions de sourcing et salons professionnels.
          </p>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20" style={{ backgroundColor: "#f5f5ee" }}>
        <div className="mx-auto max-w-[1280px] px-5">
          <div className="eyebrow text-or-prestige">Notre processus</div>
          <h2 className="mt-4 text-3xl font-bold uppercase text-noir">Quatre étapes</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
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

      {/* Prestations + formulaire */}
      <section className="py-20" style={{ backgroundColor: "#eeeee6" }}>
        <div className="mx-auto max-w-[1280px] grid gap-10 px-5 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="eyebrow text-or-prestige">Nos prestations</div>
            <h2 className="mt-4 text-3xl font-bold uppercase text-noir">Ce que nous prenons en charge</h2>
            <ul className="mt-6 space-y-3">
              {SERVICES.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-noir/70 border-b border-or-prestige/10 pb-3">
                  <span className="text-or-prestige font-bold mt-0.5">—</span>
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-noir/45 leading-relaxed">
              MDG GLOBAL HOLDINGS est un prestataire d'accompagnement administratif. La décision
              d'octroi du visa relève exclusivement des autorités consulaires compétentes.
            </p>
          </div>
          <QuoteForm defaultSubject="Assistance visa & mobilité" />
        </div>
      </section>

    </main>
  );
}
