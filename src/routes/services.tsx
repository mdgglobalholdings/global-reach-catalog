import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";

const TITLE = "Logistique & Services — MDG GLOBAL HOLDINGS | Import-Export, Fret, Dédouanement";
const DESCRIPTION =
  "Sourcing international, fret maritime et aérien, dédouanement, distribution et assistance visa : les services de MDG GLOBAL HOLDINGS pour vos projets Afrique-Asie-Europe.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    title: "Sourcing & achat",
    text: "Identification de fournisseurs fiables en Chine, à Dubaï et en Europe, négociation des prix, vérification des spécifications et contrôle qualité avant chargement.",
    points: ["Recherche fournisseurs", "Négociation", "Inspection pré-expédition"],
  },
  {
    title: "Fret & logistique",
    text: "Organisation du transport maritime, aérien et terrestre, groupage de conteneurs, assurance marchandise et suivi d'acheminement jusqu'à destination finale.",
    points: ["Maritime & aérien", "Groupage LCL / FCL", "Suivi temps réel"],
  },
  {
    title: "Dédouanement",
    text: "Constitution des dossiers, déclarations douanières, calcul des droits et taxes et enlèvement portuaire au Burkina Faso et dans la sous-région.",
    points: ["Documents & HS codes", "Droits et taxes", "Enlèvement portuaire"],
  },
  {
    title: "Négoce & distribution",
    text: "Vente de véhicules, engins, pièces détachées, groupes électrogènes et électronique, avec garantie commerciale et disponibilité de pièces.",
    points: ["Vente directe", "Commandes spéciales", "Pièces de rechange"],
  },
  {
    title: "Assistance visa & mobilité",
    text: "Accompagnement administratif complet pour les voyages d'affaires, missions de sourcing et déplacements professionnels à l'international.",
    points: ["Dossier & invitation", "Prise de rendez-vous", "Suivi du dossier"],
  },
  {
    title: "Conseil & accompagnement",
    text: "Étude de faisabilité, budget rendu destination, choix du matériel adapté à votre usage et à vos conditions d'exploitation.",
    points: ["Budget rendu", "Choix technique", "Planning d'import"],
  },
];

const STEPS = [
  { n: "01", title: "Votre besoin", text: "Vous décrivez le matériel, la quantité et la destination." },
  { n: "02", title: "Offre sous 24h", text: "Nous chiffrons le prix rendu, les délais et les options." },
  { n: "03", title: "Sourcing & contrôle", text: "Nous achetons et inspectons le matériel avant chargement." },
  { n: "04", title: "Transport & douane", text: "Fret, assurance, dédouanement et suivi jusqu'à livraison." },
];

function ServicesPage() {
  return (
    <main>

      {/* Hero — même style que À propos */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#eeeee6" }}>
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-14 sm:py-20">
          <div className="eyebrow text-or-prestige">Logistique & Services</div>
          <h1 className="mt-4 max-w-[18ch] text-3xl sm:text-3xl sm:text-5xl font-bold uppercase leading-[0.92] text-noir md:text-6xl lg:text-7xl">
            De la commande à la livraison
          </h1>
          <p className="mt-6 max-w-[58ch] text-noir/65 leading-relaxed text-lg">
            Un interlocuteur unique pour l'ensemble de la chaîne : achat, transport, douane et distribution.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ backgroundColor: "#f5f5ee" }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.title} className="rounded-xl bg-white border border-or-prestige/20 p-7 smooth-transition hover:border-or-prestige/50 hover:shadow-lg hover:-translate-y-1">
                <div className="gold-line" />
                <h2 className="mt-5 text-xl font-bold uppercase text-noir">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-noir/65">{s.text}</p>
                <ul className="mt-4 space-y-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-or-prestige">
                  {s.points.map((p) => (
                    <li key={p}>— {p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="py-20" style={{ backgroundColor: "#eeeee6" }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="eyebrow text-or-prestige">Notre méthode</div>
          <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold uppercase text-noir">Comment nous travaillons</h2>
          <div className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-xl bg-white border border-or-prestige/20 p-6 smooth-transition hover:border-or-prestige/50 hover:shadow-md">
                <div className="text-gold font-display text-3xl">{s.n}</div>
                <h3 className="mt-4 text-lg font-bold uppercase text-noir">{s.title}</h3>
                <p className="mt-2 text-sm text-noir/65 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn-gold mt-10 inline-block rounded-md">
            Lancer une demande
          </Link>
        </div>
      </section>

      <CtaBand title="Un projet d'import à cadrer ?" />
    </main>
  );
}
