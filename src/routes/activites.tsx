import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import { POLES } from "@/lib/company";

const TITLE = "Nos Activités — MDG GLOBAL HOLDINGS | Commerce, Logistique, Véhicules";
const DESCRIPTION = "Découvrez les 6 pôles d'activité de MDG GLOBAL HOLDINGS : commerce international, véhicules & équipements, logistique, mobilité, agriculture et hôtellerie.";

export const Route = createFileRoute("/activites")({
  head: () => ({
    meta: [
      { title: TITLE }, { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ActivitesPage,
});

function ActivitesPage() {
  return (
    <main className="overflow-x-hidden">

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#eeeee6" }}>
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-16">
          {/* Eyebrow grand et gras */}
          <p className="text-base sm:text-xl font-bold uppercase tracking-widest text-or-prestige">Nos activités</p>
          {/* Sous-titre réduit */}
          <h1 className="mt-2 text-lg sm:text-2xl font-bold uppercase leading-snug text-noir max-w-[36ch]">
            Un groupe. <span className="text-gold">Plusieurs expertises.</span> Une seule vision.
          </h1>
          <p className="mt-4 max-w-[58ch] text-noir/65 leading-relaxed text-sm sm:text-base">
            MDG GLOBAL HOLDINGS développe des activités complémentaires qui couvrent l'ensemble
            de la chaîne commerciale internationale — du sourcing à la livraison, en passant
            par la logistique et la mobilité.
          </p>
        </div>
      </section>

      {/* Les 6 pôles — layout vertical (image + texte empilés sur mobile, côte à côte sur desktop) */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: "#f5f5ee" }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 space-y-14 sm:space-y-20">
          {POLES.map((pole, index) => (
            <article
              key={pole.id}
              className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>figure]:order-first" : ""}`}
            >
              {/* Image */}
              <figure className="overflow-hidden rounded-2xl border border-or-prestige/15 shadow-sm">
                <img
                  src={pole.image}
                  alt={pole.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover smooth-transition hover:scale-105"
                />
              </figure>

              {/* Contenu */}
              <div>
                <div className="text-4xl mb-3">{pole.icon}</div>
                <div className="gold-line" />
                <h2 className="mt-4 text-xl sm:text-2xl font-bold uppercase text-noir">{pole.title}</h2>
                <p className="label-mono mt-1 text-or-prestige">{pole.subtitle}</p>
                <p className="mt-4 text-sm sm:text-base text-noir/65 leading-relaxed">{pole.description}</p>

                {/* Liste VERTICALE — une seule colonne */}
                <ul className="mt-5 space-y-2">
                  {pole.services.map((s) => (
                    <li key={s} className="flex items-center gap-3 text-sm text-noir/70">
                      <span className="text-or-prestige font-bold shrink-0">—</span>
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link to={pole.link} className="btn-gold rounded-md text-center">
                    En savoir plus
                  </Link>
                  <Link to="/contact"
                    className="rounded-md border border-or-prestige/30 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-or-prestige smooth-transition hover:bg-or-prestige/5 text-center">
                    Nous contacter
                  </Link>
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
