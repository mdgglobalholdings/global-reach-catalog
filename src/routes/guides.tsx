import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";

const TITLE = "Guides & Ressources Import-Export | MDG GLOBAL HOLDINGS";
const DESCRIPTION =
  "Guides pratiques pour l'import-export, la logistique internationale, le sourcing en Chine et l'assistance administrative. Conseils d'experts MDG GLOBAL HOLDINGS.";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: GuidesPage,
});

const GUIDES = [
  {
    title: "Guide : Importer un véhicule depuis la Chine",
    category: "Import-Export",
    description:
      "Étapes complètes, délais, coûts, documentation et pièges à éviter pour importer un véhicule.",
    topics: ["Documentation", "Sourcing", "Transport", "Dédouanement"],
  },
  {
    title: "Engins de chantier : Comment sourcer au meilleur prix",
    category: "Sourcing",
    description:
      "Critères de sélection, fournisseurs fiables, inspection qualité et garantie commerciale.",
    topics: ["Inspection", "Garantie", "Fournisseurs", "Budget"],
  },
  {
    title: "Logistique : Fret maritime vs aérien - Bien choisir",
    category: "Logistique",
    description:
      "Comparaison des modes de transport, délais, coûts et impact environnemental.",
    topics: ["Fret", "Délais", "Coûts", "Comparaison"],
  },
  {
    title: "Dédouanement au Burkina Faso : Mode d'emploi",
    category: "Douane",
    description:
      "Documents requis, calcul des droits et taxes, et statut au dédouanement en temps réel.",
    topics: ["Douane", "Taxes", "Documents", "Délais"],
  },
  {
    title: "Pièces détachées : S'approvisionner régulièrement",
    category: "Négoce",
    description:
      "Stratégies de commandes récurrentes, stocks minimums et gestion logistique optimisée.",
    topics: ["Stock", "Approvisionnement", "Budget", "Suivi"],
  },
  {
    title: "Assistance visa : Préparer votre dossier",
    category: "Visa",
    description:
      "Pièces nécessaires, délais par pays, conseils d'entretien consulaire et erreurs à éviter.",
    topics: ["Documents", "Délais", "Entretien", "Pays"],
  },
];

const FAQS = [
  {
    q: "Quel est le délai moyen d'une commande complète ?",
    a: "En général 6-12 semaines selon le type de fret. Maritime : 4-8 semaines. Aérien : 2-4 semaines. Terrestre : 1-3 semaines.",
  },
  {
    q: "Avez-vous des partenaires de financement ?",
    a: "Oui, nous travaillons avec plusieurs institutions pour faciliter le financement des gros achats. Contactez-nous pour les modalités.",
  },
  {
    q: "Garantie commerciale sur les produits ?",
    a: "Oui, selon les produits et fournisseurs : 6-24 mois en général. Tous les détails figurent dans la facture commerciale.",
  },
  {
    q: "Peut-on annuler une commande une fois validée ?",
    a: "Oui, selon les conditions : avant sourcing (gratuit), après sourcing (frais administratifs), après envoi (frais logistiques).",
  },
];

function GuidesPage() {
  return (
    <main>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-16">
          <div className="eyebrow text-amber">Ressources</div>
          <h1 className="mt-4 max-w-[20ch] text-4xl uppercase leading-[0.95] md:text-6xl">
            Guides & Conseils pratiques
          </h1>
          <p className="mt-5 max-w-[60ch] text-chrome/70">
            Apprenez les meilleures pratiques pour vos achats à l'international, la logistique et
            l'accompagnement administratif.
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="eyebrow text-amberhot">Guides complets</div>
        <h2 className="mt-3 text-3xl uppercase">À lire et consulter</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {GUIDES.map((guide, i) => (
            <article
              key={i}
              className="rounded-xl bg-card p-6 ring-1 ring-black/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="label-mono text-amberhot">{guide.category}</div>
                  <h3 className="mt-3 text-lg uppercase leading-tight">{guide.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{guide.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {guide.topics.map((topic) => (
                      <span
                        key={topic}
                        className="inline-block rounded-full bg-muted px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink/60"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-amberhot hover:text-amber"
              >
                Demander ce guide →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ Avancée */}
      <section className="bg-emeraude/20 py-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="eyebrow text-amberhot">Questions fréquentes</div>
          <h2 className="mt-3 text-3xl uppercase">Réponses aux questions d'importateurs</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-xl bg-card p-6 ring-1 ring-black/5">
                <details className="group cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold text-ink hover:text-amberhot smooth-transition">
                    <span>{faq.q}</span>
                    <span className="ml-3 text-amber group-open:rotate-180 smooth-transition inline-block">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ressources externes */}
      <section className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="eyebrow text-amberhot">Ressources utiles</div>
        <h2 className="mt-3 text-3xl uppercase">Liens et organisations</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <a
            href="https://www.douanes.bf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-card p-6 ring-1 ring-black/5 transition-all hover:shadow-lg hover:bg-emeraude/20"
          >
            <div className="text-2xl mb-2">📋</div>
            <h3 className="uppercase font-semibold">Douanes Burkina Faso</h3>
            <p className="mt-2 text-sm text-muted-foreground">Tarifs douaniers, nomenclature HS et droits de douane.</p>
          </a>
          <a
            href="https://www.china-chamber.org"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-card p-6 ring-1 ring-black/5 transition-all hover:shadow-lg hover:bg-emeraude/20"
          >
            <div className="text-2xl mb-2">🏭</div>
            <h3 className="uppercase font-semibold">Chambre Commerce Chine</h3>
            <p className="mt-2 text-sm text-muted-foreground">Annuaires fournisseurs, certifications et normes.</p>
          </a>
          <a
            href="https://www.aduanex.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-card p-6 ring-1 ring-black/5 transition-all hover:shadow-lg hover:bg-emeraude/20"
          >
            <div className="text-2xl mb-2">🚢</div>
            <h3 className="uppercase font-semibold">Plateforme Logistique</h3>
            <p className="mt-2 text-sm text-muted-foreground">Comparateur fret maritime, aérien et terrestre.</p>
          </a>
        </div>
      </section>

      <CtaBand title="Vous avez d'autres questions ?" text="Notre équipe d'experts est disponible pour répondre à vos questions spécifiques." />
    </main>
  );
}
