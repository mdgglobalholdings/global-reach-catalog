import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";

import { QuoteForm } from "@/components/site/QuoteForm";
import { getProduct, getProducts } from "@/lib/catalog.functions";
import { AVAILABILITY_LABELS, COMPANY, whatsappLink } from "@/lib/company";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/catalogue/$slug")({
  loader: async ({ params }) => {
    const product = await getProduct({ data: { slug: params.slug } });
    if (!product) throw notFound();
    const related = await getProducts({
      data: { category: product.categories?.slug ?? undefined, limit: 4 },
    });
    return { product, related: related.filter((p) => p.id !== product.id).slice(0, 4) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Produit indisponible — MDG GLOBAL HOLDINGS" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.product;
    const title = `${p.name} — Catalogue MDG GLOBAL HOLDINGS`;
    const description =
      p.summary?.slice(0, 155) ??
      `${p.name} disponible auprès de MDG GLOBAL HOLDINGS. Demandez votre devis sous 24h.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProductPage,
});

type Spec = { label?: string; value?: string };

function ProductPage() {
  const { product, related } = Route.useLoaderData();
  const images = [
    ...(product.cover_url ? [{ id: "cover", url: product.cover_url, alt: product.name }] : []),
    ...(product.product_images ?? [])
      .slice()
      .sort((a, b) => a.position - b.position)
      .map((i) => ({ id: i.id, url: i.url, alt: i.alt ?? product.name })),
  ];
  const [active, setActive] = useState(0);
  const specs = (Array.isArray(product.specs) ? product.specs : []) as Spec[];

  return (
    <main>
      <div className="mx-auto max-w-[1200px] px-5 pt-8">
        <nav className="label-mono text-ink/40" aria-label="Fil d'ariane">
          <Link to="/" className="hover:text-amberhot">
            Accueil
          </Link>{" "}
          /{" "}
          <Link
            to="/catalogue"
            search={{ categorie: "", q: "", tri: "recent", dispo: "" }}
            className="hover:text-amberhot"
          >
            Catalogue
          </Link>{" "}
          / <span className="text-ink/70">{product.name}</span>
        </nav>
      </div>

      <section className="mx-auto grid max-w-[1200px] gap-10 px-5 py-8 lg:grid-cols-2">
        <div>
          {images.length ? (
            <>
              <img
                src={images[active]?.url}
                alt={images[active]?.alt ?? product.name}
                width={1200}
                height={900}
                className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-black/5"
              />
              {images.length > 1 ? (
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {images.map((img, i) => (
                    <button
                      key={img.id}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Voir l'image ${i + 1}`}
                      className={`overflow-hidden rounded-md ring-2 ${i === active ? "ring-amber" : "ring-black/5"}`}
                    >
                      <img
                        src={img.url}
                        alt={img.alt ?? product.name}
                        loading="lazy"
                        width={200}
                        height={150}
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              ) : null}
            </>
          ) : (
            <div className="grid aspect-[4/3] w-full place-items-center rounded-xl bg-chrome label-mono text-ink/30">
              Photo à venir
            </div>
          )}
        </div>

        <div>
          <div className="eyebrow text-amberhot">{product.categories?.name ?? "Catalogue"}</div>
          <h1 className="mt-3 text-4xl uppercase leading-[0.95]">{product.name}</h1>
          <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.15em]">
            <span className="rounded bg-navy px-3 py-1.5 text-noir">
              {AVAILABILITY_LABELS[product.availability] ?? product.availability}
            </span>
            {product.brand ? (
              <span className="rounded bg-muted px-3 py-1.5 text-ink/70">{product.brand}</span>
            ) : null}
            {product.year ? (
              <span className="rounded bg-muted px-3 py-1.5 text-ink/70">{product.year}</span>
            ) : null}
            {product.origin ? (
              <span className="rounded bg-muted px-3 py-1.5 text-ink/70">
                Origine {product.origin}
              </span>
            ) : null}
          </div>

          {product.summary ? (
            <p className="mt-5 text-muted-foreground">{product.summary}</p>
          ) : null}

          <div className="mt-6 rounded-xl bg-card p-5 ring-1 ring-black/5">
            <div className="label-mono text-ink/45">Prix</div>
            <div className="font-display text-2xl">
              {product.price_text?.trim() ? product.price_text : "Sur demande"}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#devis"
                className="pill rounded-md bg-gradient-to-b from-amberhot to-amber px-6 py-3 font-bold text-ink ring-1 ring-white/40"
              >
                Demander un devis
              </a>
              <a
                href={whatsappLink(`Bonjour, je suis intéressé par : ${product.name}`)}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-muted px-6 py-3 font-medium ring-1 ring-black/5"
              >
                WhatsApp · {COMPANY.phoneBf}
              </a>
            </div>
          </div>

          {specs.length ? (
            <div className="mt-6">
              <h2 className="text-xl uppercase">Caractéristiques</h2>
              <dl className="mt-4 grid gap-px overflow-hidden rounded-xl bg-black/5 sm:grid-cols-2">
                {specs.map((s, i) => (
                  <div key={i} className="bg-card px-4 py-3">
                    <dt className="label-mono text-ink/45">{s.label}</dt>
                    <dd className="text-sm font-medium">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}
        </div>
      </section>

      {product.description ? (
        <section className="mx-auto max-w-[1200px] px-5 pb-8">
          <h2 className="text-xl uppercase">Description</h2>
          <p className="mt-3 max-w-[70ch] whitespace-pre-line text-muted-foreground">
            {product.description}
          </p>
        </section>
      ) : null}

      <section id="devis" className="bg-emeraude/20 py-16">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-5 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="eyebrow text-amberhot">Devis</div>
            <h2 className="mt-3 text-3xl uppercase">Demandez une offre</h2>
            <p className="mt-3 max-w-[42ch] text-muted-foreground">
              Indiquez la quantité, la destination et le délai souhaité. Nous revenons vers vous
              sous 24 heures ouvrées avec un prix rendu.
            </p>
          </div>
          <QuoteForm
            productId={product.id}
            productName={product.name}
            defaultSubject={`Devis — ${product.name}`}
          />
        </div>
      </section>

      {related.length ? (
        <section className="mx-auto max-w-[1200px] px-5 py-16">
          <h2 className="text-2xl uppercase">Produits similaires</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
