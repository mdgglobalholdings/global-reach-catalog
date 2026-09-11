import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { getNews } from "@/lib/catalog.functions";

const TITLE = "Actualités et arrivages — MDG GLOBAL HOLDINGS";
const DESCRIPTION =
  "Arrivages de véhicules et d'engins, nouveautés du catalogue et informations logistiques : suivez l'actualité de MDG GLOBAL HOLDINGS.";

export const Route = createFileRoute("/actualites/")({
  loader: async () => ({ news: await getNews({ data: {} }) }),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  const { news } = Route.useLoaderData();

  return (
    <main>
      <section className="bg-ink text-noir">
        <div className="mx-auto max-w-[1200px] px-5 py-16">
          <div className="eyebrow text-or-prestige">Actualités</div>
          <h1 className="mt-4 max-w-[18ch] text-4xl uppercase leading-[0.95] md:text-6xl">
            Arrivages & informations
          </h1>
          <p className="mt-5 max-w-[56ch] text-noir/65">
            Nouveaux lots, conteneurs en route et évolutions de nos services.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-16">
        {news.length ? (
          <div className="grid gap-5 md:grid-cols-3">
            {news.map((n) => (
              <Link
                key={n.id}
                to="/actualites/$slug"
                params={{ slug: n.slug }}
                className="overflow-hidden rounded-xl bg-card border border-or-prestige/15 smooth-transition hover:shadow-lg"
              >
                {n.cover_url ? (
                  <img
                    src={n.cover_url}
                    alt={n.title}
                    loading="lazy"
                    width={800}
                    height={500}
                    className="aspect-[16/10] w-full object-cover"
                  />
                ) : null}
                <div className="p-6">
                  <div className="label-mono text-ink/40">
                    {new Date(n.published_at).toLocaleDateString("fr-FR")}
                  </div>
                  <h2 className="mt-3 text-lg uppercase leading-tight">{n.title}</h2>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{n.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Aucune actualité pour le moment.</p>
        )}
      </section>

      <CtaBand />
    </main>
  );
}
