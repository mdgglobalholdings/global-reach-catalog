import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { getCategories } from "@/lib/catalog.functions";
import { SECTORS } from "@/lib/company";

const TITLE = "Secteurs d'activité — MDG GLOBAL HOLDINGS";
const DESCRIPTION =
  "Véhicules et engins, pièces et consommables, équipements et énergie, électronique et électroménager : découvrez les quatre secteurs couverts par MDG GLOBAL HOLDINGS.";

export const Route = createFileRoute("/secteurs")({
  loader: async () => ({ categories: await getCategories() }),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: SecteursPage,
});

function SecteursPage() {
  const { categories } = Route.useLoaderData();

  return (
    <main>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-16">
          <div className="eyebrow text-amber">Secteurs</div>
          <h1 className="mt-4 max-w-[20ch] text-4xl uppercase leading-[0.95] md:text-6xl">
            Quatre secteurs, une chaîne d'approvisionnement
          </h1>
          <p className="mt-5 max-w-[58ch] text-chrome/70">
            De l'engin de chantier au smartphone, nous sourçons, contrôlons et acheminons le
            matériel dont vos activités ont besoin.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] space-y-16 px-5 py-16">
        {SECTORS.map((sector, index) => {
          const root = categories.find((c) => c.slug === sector.slug);
          const subs = root ? categories.filter((c) => c.parent_id === root.id) : [];
          return (
            <article
              key={sector.slug}
              className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 ? "lg:[&>figure]:order-2" : ""}`}
            >
              <figure className="overflow-hidden rounded-xl ring-1 ring-black/5">
                <img
                  src={sector.image}
                  alt={sector.name}
                  loading="lazy"
                  width={1000}
                  height={750}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </figure>
              <div>
                <div className="eyebrow text-amberhot">{sector.sub}</div>
                <h2 className="mt-3 text-3xl uppercase">{sector.name}</h2>
                <p className="mt-4 text-white/70">
                  {root?.description ??
                    "Sourcing international, contrôle qualité avant expédition et livraison suivie jusqu'à destination."}
                </p>
                {subs.length ? (
                  <div>
                    <h3 className="mt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-ink/50">
                      Sous-catégories
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {subs.map((s) => (
                        <li key={s.id}>
                          <Link
                            to="/catalogue"
                            search={{ categorie: s.slug, q: "", tri: "recent", dispo: "" }}
                            className="inline-block rounded-md bg-gradient-to-b from-amber/20 to-amber/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-amber/80 ring-1 ring-amber/20 transition-colors hover:bg-gradient-to-b hover:from-amber/30 hover:to-amber/20 hover:ring-amber/40"
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <Link
                  to="/catalogue"
                  search={{ categorie: sector.slug, q: "", tri: "recent", dispo: "" }}
                  className="pill mt-6 inline-block rounded-md bg-gradient-to-b from-amberhot to-amber px-6 py-3 font-bold text-ink ring-1 ring-white/40"
                >
                  Voir le catalogue → {subs.length > 0 ? `(${subs.length} catégories)` : ""}
                </Link>
              </div>
            </article>
          );
        })}
      </section>

      <CtaBand />
    </main>
  );
}
