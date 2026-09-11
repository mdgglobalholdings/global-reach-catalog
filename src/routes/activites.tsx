import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import { POLES, COMPANY } from "@/lib/company";

const TITLE = "Nos Activités — MDG GLOBAL HOLDINGS | Commerce, Logistique, Véhicules";
const DESCRIPTION =
  "Découvrez les 6 pôles d'activité de MDG GLOBAL HOLDINGS : commerce international, véhicules & équipements, logistique, mobilité, agriculture et hôtellerie.";

export const Route = createFileRoute("/activites")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ActivitesPage,
});

function ActivitesPage() {
  return (
    <main>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#eeeee6" }}>
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />
        <div className="mx-auto max-w-[1280px] px-5 py-20">
          <div className="eyebrow text-or-prestige">Nos activités</div>
          <h1 className="mt-4 max-w-[18ch] text-5xl font-bold uppercase leading-[0.92] text-noir md:text-7xl">
            Un groupe.{" "}<span className="text-gold">Plusieurs expertises.</span>{" "}Une seule vision.
          </h1>
          <p className="mt-6 max-w-[58ch] text-noir/65 leading-relaxed text-lg">
            MDG GLOBAL HOLDINGS développe des activités complémentaires qui couvrent l'ensemble
            de la chaîne commerciale internationale — du sourcing à la livraison, en passant
            par la logistique et la mobilité.
          </p>
        </div>
      </section>

      {/* Les 6 pôles */}
      <section className="py-20" style={{ backgroundColor: "#f5f5ee" }}>
        <div className="mx-auto max-w-[1280px] px-5 space-y-24">
          {POLES.map((pole, index) => (
            <article
              key={pole.id}
              className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>figure]:order-first" : ""}`}
            >
              <figure className="overflow-hidden rounded-2xl ring-1 ring-black/5">
                <img
                  src={pole.image}
                  alt={pole.title}
                  loading="lazy"
                  width={1000}
                  height={700}
                  className="aspect-[4/3] w-full object-cover smooth-transition hover:scale-105"
                />
              </figure>

              <div>
                <div className="text-5xl mb-2">{pole.icon}</div>
                <div className="gold-line mt-4" />
                <h2 className="mt-5 text-3xl uppercase">{pole.title}</h2>
                <p className="label-mono mt-2 text-or-prestige">{pole.subtitle}</p>
                <p className="mt-5 text-muted-foreground leading-relaxed">{pole.description}</p>

                <ul className="mt-6 grid grid-cols-2 gap-2">
                  {pole.services.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="text-or-prestige font-bold">—</span>
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to={pole.link} className="btn-gold rounded-md">
                    En savoir plus
                  </Link>
                  <Link to="/contact" className="rounded-md border border-or-prestige/30 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-or-prestige smooth-transition hover:bg-or-prestige/5">
                    Nous contacter
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Note agriculture & hôtellerie */}
      <section className="py-16 text-noir">
        <div className="mx-auto max-w-[1280px] px-5 text-center">
          <div className="gold-line mx-auto" />
          <h2 className="mt-8 text-2xl uppercase">Agriculture, Élevage & Hôtellerie</h2>
          <p className="mt-4 max-w-[60ch] mx-auto text-noir/65 leading-relaxed">
            Ces pôles sont en cours de développement. Les projets agricoles, d'élevage et
            hôteliers du groupe seront présentés prochainement. Contactez-nous pour toute
            opportunité de partenariat ou de co-investissement.
          </p>
          <Link to="/contact" className="btn-gold mt-8 inline-block rounded-md">
            Discuter d'un projet
          </Link>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
