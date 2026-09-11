import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { ProductCard } from "@/components/site/ProductCard";
import { getCategories, getProducts } from "@/lib/catalog.functions";
import { AVAILABILITY_OPTIONS } from "@/lib/company";

const TITLE = "Catalogue Import-Export : Véhicules, Engins & Équipements | MDG GLOBAL HOLDINGS";
const DESCRIPTION =
  "Découvrez le catalogue MDG GLOBAL HOLDINGS : véhicules d'occasion, engins de chantier, pièces détachées, groupes électrogènes et électronique. Filtres par secteur, recherche avancée et devis sous 24h. Sourcing Chine-Afrique garanti.";

type Search = {
  categorie: string;
  q: string;
  tri: string;
  dispo: string;
};

export const Route = createFileRoute("/catalogue/")({
  validateSearch: (search: Partial<Search>): Search => ({
    categorie: typeof search.categorie === "string" ? search.categorie : "",
    q: typeof search.q === "string" ? search.q : "",
    tri: typeof search.tri === "string" ? search.tri : "recent",
    dispo: typeof search.dispo === "string" ? search.dispo : "",
  }),
  loaderDeps: ({ search }) => search,
  loader: async ({ deps }) => ({
    categories: await getCategories(),
    products: await getProducts({
      data: {
        category: deps.categorie || undefined,
        search: deps.q || undefined,
        availability: deps.dispo || undefined,
        sort: deps.tri || undefined,
      },
    }),
  }),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: CataloguePage,
});

function CataloguePage() {
  const { categories, products } = Route.useLoaderData();
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/catalogue/" });

  const roots = categories.filter((c) => !c.parent_id);
  const update = (patch: Partial<Search>) =>
    navigate({ search: { ...search, ...patch } });

  const selectClass =
    "rounded-md border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-amber focus:ring-2 focus:ring-amber/30";

  return (
    <main>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-16">
          <div className="eyebrow text-amber">Catalogue</div>
          <h1 className="mt-4 max-w-[18ch] text-4xl uppercase leading-[0.95] md:text-6xl">
            Matériel disponible et sur commande
          </h1>
          <p className="mt-5 max-w-[58ch] text-chrome/70">
            Notre catalogue est une vitrine : aucune vente en ligne. Sélectionnez un produit et
            recevez une offre chiffrée sous 24 heures ouvrées.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            update({ q: String(fd.get("q") ?? "") });
          }}
          className="grid gap-3 rounded-xl bg-card p-4 ring-1 ring-black/5 md:grid-cols-[2fr_1fr_1fr_1fr]"
        >
          <input
            name="q"
            defaultValue={search.q}
            placeholder="Rechercher : pickup, minipelle, pneus..."
            aria-label="Rechercher un produit"
            className={selectClass}
          />
          <select
            value={search.categorie}
            onChange={(e) => update({ categorie: e.target.value })}
            aria-label="Filtrer par secteur"
            className={selectClass}
          >
            <option value="">Tous les secteurs</option>
            {roots.map((c) => (
              <option key={c.id} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
          <select
            value={search.dispo}
            onChange={(e) => update({ dispo: e.target.value })}
            aria-label="Filtrer par disponibilité"
            className={selectClass}
          >
            <option value="">Toute disponibilité</option>
            {AVAILABILITY_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <select
            value={search.tri}
            onChange={(e) => update({ tri: e.target.value })}
            aria-label="Trier les résultats"
            className={selectClass}
          >
            <option value="recent">Plus récents</option>
            <option value="ancien">Plus anciens</option>
            <option value="nom">Nom A-Z</option>
          </select>
        </form>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="label-mono text-ink/50">
            {products.length} produit{products.length > 1 ? "s" : ""}
          </div>
          {search.categorie || search.q || search.dispo ? (
            <Link
              to="/catalogue"
              search={{ categorie: "", q: "", tri: "recent", dispo: "" }}
              className="font-mono text-[11px] uppercase tracking-[0.15em] underline decoration-amber decoration-2 underline-offset-4"
            >
              Réinitialiser les filtres
            </Link>
          ) : null}
        </div>

        {products.length ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-xl bg-card p-10 text-center ring-1 ring-black/5">
            <p className="text-muted-foreground">
              Aucun produit ne correspond à votre recherche. Contactez-nous : nous sourçons sur
              demande.
            </p>
            <Link
              to="/contact"
              className="pill mt-5 inline-block rounded-md bg-gradient-to-b from-amberhot to-amber px-6 py-3 font-bold text-ink ring-1 ring-white/40"
            >
              Demander un sourcing
            </Link>
          </div>
        )}
      </section>

      <CtaBand />
    </main>
  );
}
