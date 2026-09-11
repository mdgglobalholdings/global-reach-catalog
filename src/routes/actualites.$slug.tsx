import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { getNews, getNewsItem } from "@/lib/catalog.functions";

export const Route = createFileRoute("/actualites/$slug")({
  loader: async ({ params }) => {
    const item = await getNewsItem({ data: { slug: params.slug } });
    if (!item) throw notFound();
    const related = await getNews({ data: { limit: 3 } });
    return { item, related: related.filter((n) => n.id !== item.id).slice(0, 2) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Actualité introuvable — MDG GLOBAL HOLDINGS" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.item.title} — MDG GLOBAL HOLDINGS`;
    const description =
      loaderData.item.excerpt?.slice(0, 155) ?? "Actualité de MDG GLOBAL HOLDINGS.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: NewsDetail,
});

function NewsDetail() {
  const { item, related } = Route.useLoaderData();

  return (
    <main>
      <article className="mx-auto max-w-[820px] px-5 py-14">
        <nav className="label-mono text-ink/40" aria-label="Fil d'ariane">
          <Link to="/actualites" className="hover:text-amberhot">
            Actualités
          </Link>{" "}
          / <span className="text-ink/70">{item.title}</span>
        </nav>
        <div className="label-mono mt-6 text-amberhot">
          {new Date(item.published_at).toLocaleDateString("fr-FR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </div>
        <h1 className="mt-3 text-4xl uppercase leading-[0.95]">{item.title}</h1>
        {item.excerpt ? <p className="mt-4 text-lg text-white/70">{item.excerpt}</p> : null}
        {item.cover_url ? (
          <img
            src={item.cover_url}
            alt={item.title}
            width={1200}
            height={750}
            className="mt-8 aspect-[16/10] w-full rounded-xl object-cover ring-1 ring-black/5"
          />
        ) : null}
        {item.body ? (
          <div className="mt-8 whitespace-pre-line leading-relaxed text-ink/80">{item.body}</div>
        ) : null}
      </article>

      {related.length ? (
        <section className="border-t border-black/5 bg-emeraude/20 py-16">
          <div className="mx-auto max-w-[1200px] px-5">
            <h2 className="text-2xl uppercase">À lire aussi</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {related.map((n) => (
                <Link
                  key={n.id}
                  to="/actualites/$slug"
                  params={{ slug: n.slug }}
                  className="overflow-hidden rounded-xl bg-emeraude/10 border border-or-prestige/15 transition-shadow hover:shadow-lg"
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
                    <h3 className="mt-3 text-lg uppercase leading-tight">{n.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-white/70">{n.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand />
    </main>
  );
}
