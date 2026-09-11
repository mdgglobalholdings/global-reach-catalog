import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";

const TITLE = "Services : import-export, logistique et sourcing — MDG GLOBAL HOLDINGS";
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
      <section className="bg-ink text-noir">
        <div className="mx-auto max-w-[1200px] px-5 py-16">
          <div className="eyebrow text-or-prestige">Services</div>
          <h1 className="mt-4 max-w-[18ch] text-4xl uppercase leading-[0.95] md:text-6xl">
            De la commande à la livraison
          </h1>
          <p className="mt-5 max-w-[58ch] text-noir/65">
            Un interlocuteur unique pour l'ensemble de la chaîne : achat, transport, douane et
            distribution.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="rounded-xl bg-card p-6 ring-1 ring-black/5">
              <div className="h-1 w-10 rounded bg-gradient-to-r from-amberhot to-amber" />
              <h2 className="mt-5 text-xl uppercase">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <ul className="mt-4 space-y-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink/55">
                {s.points.map((p) => (
                  <li key={p}>— {p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-emeraude/20 py-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="eyebrow text-or-prestige">Méthode</div>
          <h2 className="mt-3 text-3xl uppercase">Comment nous travaillons</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-xl bg-card p-6 ring-1 ring-black/5">
                <div className="font-display text-3xl text-amberhot">{s.n}</div>
                <h3 className="mt-3 text-lg uppercase">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="pill mt-10 inline-block rounded-md bg-gradient-to-b from-amberhot to-amber px-6 py-3 font-bold text-ink ring-1 ring-white/40"
          >
            Lancer une demande
          </Link>
        </div>
      </section>

      <CtaBand title="Un projet d'import à cadrer ?" />
    </main>
  );
}
