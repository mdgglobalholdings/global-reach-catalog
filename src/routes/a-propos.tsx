import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { COMPANY } from "@/lib/company";

const TITLE = "À propos de MDG GLOBAL HOLDINGS — Négoce international à Ouagadougou";
const DESCRIPTION =
  "MDG GLOBAL HOLDINGS, société de négoce et d'import-export basée à Ouagadougou avec un relais en Chine : mission, valeurs, expertise et présence internationale.";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { title: "Fiabilité", text: "Fournisseurs contrôlés et matériel inspecté avant expédition." },
  { title: "Transparence", text: "Coûts détaillés, aucun frais caché, un interlocuteur unique." },
  { title: "Réactivité", text: "Réponse chiffrée sous 24 heures ouvrées." },
  { title: "Proximité", text: "Équipe au Burkina Faso, relais permanent en Chine." },
];

const MILESTONES = [
  { year: "Origine", text: "Création de MDG GLOBAL HOLDINGS à Ouagadougou, autour du négoce de véhicules." },
  { year: "Expansion", text: "Ouverture d'un relais de sourcing en Chine et diversification vers les engins et l'énergie." },
  { year: "Aujourd'hui", text: "Quatre secteurs couverts, une logistique intégrée et un accompagnement visa." },
];

function AboutPage() {
  return (
    <main>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-16">
          <div className="eyebrow text-amber">À propos</div>
          <h1 className="mt-4 max-w-[20ch] text-4xl uppercase leading-[0.95] md:text-6xl">
            {COMPANY.tagline}
          </h1>
          <p className="mt-5 max-w-[60ch] text-chrome/70">
            {COMPANY.name} est une société de négoce et d'import-export basée à {COMPANY.city},{" "}
            {COMPANY.country}, avec un relais opérationnel en Chine pour le sourcing et le contrôle
            qualité.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl uppercase">Notre mission</h2>
          <p className="mt-4 text-muted-foreground">
            Rendre accessible aux entreprises et particuliers d'Afrique de l'Ouest du matériel
            fiable, au juste prix, avec une logistique maîtrisée de bout en bout. Nous supprimons
            les intermédiaires inutiles entre l'usine et votre chantier.
          </p>
          <p className="mt-4 text-muted-foreground">
            Chaque commande est suivie par un référent unique, de la sélection du fournisseur
            jusqu'à la livraison finale, avec un reporting clair à chaque étape.
          </p>
        </div>
        <figure className="overflow-hidden rounded-xl ring-1 ring-black/5">
          <img
            src="/images/hero-port.jpg"
            alt="Opérations logistiques portuaires"
            loading="lazy"
            width={1200}
            height={800}
            className="aspect-[4/3] w-full object-cover"
          />
        </figure>
      </section>

      <section className="bg-chrome/40 py-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="eyebrow text-amberhot">Parcours</div>
          <h2 className="mt-3 text-3xl uppercase">Notre trajectoire</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {MILESTONES.map((m) => (
              <div key={m.year} className="rounded-xl bg-card p-6 ring-1 ring-black/5">
                <div className="label-mono text-amberhot">{m.year}</div>
                <p className="mt-3 text-sm text-muted-foreground">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="eyebrow text-amber">Nos engagements</div>
          <h2 className="mt-3 text-3xl uppercase">Ce qui nous distingue</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl bg-white/10 md:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-ink px-6 py-8">
                <h3 className="text-xl uppercase text-amber">{v.title}</h3>
                <p className="mt-3 text-sm text-chrome/60">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones géographiques */}
      <section className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="eyebrow text-amberhot">Présence mondiale</div>
        <h2 className="mt-3 text-3xl uppercase">Nos zones d'intervention</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-xl bg-card p-6 ring-1 ring-black/5">
            <div className="h-1 w-10 rounded bg-gradient-to-r from-amberhot to-amber" />
            <h3 className="mt-5 text-xl uppercase">Afrique de l'Ouest</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Siège social : Ouagadougou, Burkina Faso</li>
              <li>• Marché prioritaire : Pays du Sahel</li>
              <li>• Livraison directe garantie</li>
              <li>• Équipe de suivi local 24/7</li>
            </ul>
          </div>
          <div className="rounded-xl bg-card p-6 ring-1 ring-black/5">
            <div className="h-1 w-10 rounded bg-gradient-to-r from-amberhot to-amber" />
            <h3 className="mt-5 text-xl uppercase">Asie (sourcing)</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Relais permanent en Chine</li>
              <li>• Accès à 500+ fournisseurs</li>
              <li>• Contrôle qualité avant expédition</li>
              <li>• Négociation de prix optimisée</li>
            </ul>
          </div>
          <div className="rounded-xl bg-card p-6 ring-1 ring-black/5">
            <div className="h-1 w-10 rounded bg-gradient-to-r from-amberhot to-amber" />
            <h3 className="mt-5 text-xl uppercase">Europe & Moyen-Orient</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Sourcing en Allemagne, France</li>
              <li>• Équipements certifiés Europe</li>
              <li>• Marché Dubaï et Émirats</li>
              <li>• Partenaires logistiques fiables</li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand title="Travaillons ensemble" />
    </main>
  );
}
