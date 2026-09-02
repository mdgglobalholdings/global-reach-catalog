import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { getNewsItem } from "@/lib/catalog.functions";

export const Route = createFileRoute("/actualites/$slug")({
  loader: async ({ params }) => {
    const item = await getNewsItem({ data: { slug: params.slug } });
    if (!item) throw notFound();
    return { item };
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
  const { item } = Route.useLoaderData();

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
        {item.excerpt ? <p className="mt-4 text-lg text-muted-foreground">{item.excerpt}</p> : null}
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

      <CtaBand />
    </main>
  );
}
