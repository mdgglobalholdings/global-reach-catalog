import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { ProductCard } from "@/components/site/ProductCard";
import { getNews, getProducts } from "@/lib/catalog.functions";
import { COMPANY, POLES, STATS, VALUES, whatsappLink } from "@/lib/company";
import { getOrganizationSchema, getLocalBusinessSchema } from "@/lib/schema";

const TITLE = "MDG GLOBAL HOLDINGS — Groupe International | Import-Export, Logistique, Véhicules";
const DESCRIPTION =
  "MDG GLOBAL HOLDINGS : votre partenaire pour entreprendre au-delà des frontières. Import-export Chine-Afrique, logistique internationale, véhicules et équipements, assistance visa. Ouagadougou, Burkina Faso.";

export const Route = createFileRoute("/")({
  loader: async () => ({
    featured: await getProducts({ data: { featured: true, limit: 4 } }),
    news: await getNews({ data: { limit: 2 } }),
  }),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mdgglobalholdings.com" },
      { name: "robots", content: "index, follow" },
    ],
    scripts: [
      { type: "application/ld+json", innerHTML: JSON.stringify(getOrganizationSchema()) },
      { type: "application/ld+json", innerHTML: JSON.stringify(getLocalBusinessSchema()) },
    ],
  }),
  component: Home,
});

function Home() {
  const { featured, news } = Route.useLoaderData();

  return (
    <main>

      {/* ═══ HERO ═══ */}
      <section className="relative isolate min-h-[92vh] flex items-center overflow-hidden bg-noir text-white">
        <img
          src="/images/hero-port.jpg"
          alt="Commerce international MDG GLOBAL HOLDINGS"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-25"
        />
        {/* Overlay dégradé premium */}
        <div className="absolute inset-0 bg-gradient-to-br from-noir via-noir/90 to-emeraude/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/80 via-transparent to-transparent" />

        {/* Lignes décoratives */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-or-prestige/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-or-prestige/20 to-transparent" />

        <div className="relative mx-auto max-w-[1280px] px-5 py-24 md:py-32">
          {/* Badge */}
          <div className="rise mb-8 inline-flex items-center gap-2 rounded-full border border-or-prestige/30 bg-or-prestige/10 px-4 py-1.5">
            <span className="size-1.5 rounded-full bg-or-lumiere" />
            <span className="label-mono text-or-lumiere/90">Groupe international · Burkina Faso</span>
          </div>

          <h1 className="rise max-w-[14ch] text-5xl uppercase leading-[0.88] md:text-7xl lg:text-8xl">
            <span className="text-gold">MDG</span>
            <br />
            <span className="text-white">GLOBAL</span>
            <br />
            <span className="text-white">HOLDINGS</span>
          </h1>

          <p className="rise mt-6 font-mono text-sm uppercase tracking-[0.25em] text-or-prestige/80">
            {COMPANY.tagline}
          </p>

          <p className="rise mt-6 max-w-[54ch] text-lg text-ivoire/65 leading-relaxed">
            {COMPANY.positioning}
          </p>

          <div className="rise mt-10 flex flex-wrap gap-4">
            <Link to="/activites" className="btn-gold rounded-md">
              Découvrir nos activités
            </Link>
            <Link to="/contact" className="btn-outline-gold rounded-md">
              Demander un devis
            </Link>
          </div>

          {/* Mentions */}
          <p className="rise mt-12 font-mono text-[10px] uppercase tracking-[0.3em] text-ivoire/35">
            {COMPANY.tagline2}
          </p>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-or-prestige/15 bg-or-prestige/10 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-noir/70 px-6 py-5 text-center backdrop-blur">
                <div className="text-gold font-display text-3xl">{s.value}</div>
                <div className="label-mono mt-2 text-ivoire/45">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ POSITIONNEMENT ═══ */}
      <section className="bg-noir py-20 text-white">
        <div className="mx-auto max-w-[1280px] px-5">
          <div className="mx-auto max-w-[760px] text-center">
            <div className="gold-line mx-auto" />
            <h2 className="mt-8 text-3xl uppercase md:text-4xl">
              Votre partenaire pour entreprendre,<br />acheter et développer au-delà des frontières
            </h2>
            <p className="mt-6 text-ivoire/60 leading-relaxed">
              MDG GLOBAL HOLDINGS accompagne particuliers, entreprises, investisseurs et partenaires dans leurs
              opérations commerciales et leurs projets à l'international. Grâce à notre réseau en Afrique,
              en Asie, en Europe et au Moyen-Orient, nous facilitons l'accès à des produits, équipements,
              véhicules et solutions adaptés à vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 6 PÔLES D'ACTIVITÉS ═══ */}
      <section className="bg-gradient-to-b from-noir to-emeraude py-24 text-white">
        <div className="mx-auto max-w-[1280px] px-5">
          <div className="text-center">
            <div className="eyebrow text-or-prestige/70">Nos pôles</div>
            <h2 className="mt-4 text-4xl uppercase">
              Un groupe.&nbsp;
              <span className="text-gold">Plusieurs expertises.</span>
              &nbsp;Une seule vision.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {POLES.map((pole) => (
              <Link
                key={pole.id}
                to={pole.link}
                {...(pole.id === "vehicules" ? { search: { categorie: "", q: "", tri: "recent", dispo: "" } } : {})}
                className="card-prestige group block p-7"
              >
                <div className="text-4xl mb-4">{pole.icon}</div>
                <div className="gold-line" />
                <h3 className="mt-5 text-xl uppercase text-white">{pole.title}</h3>
                <p className="label-mono mt-1 text-or-prestige/70">{pole.subtitle}</p>
                <p className="mt-4 text-sm text-ivoire/50 leading-relaxed">{pole.description}</p>
                <div className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-or-lumiere smooth-transition group-hover:gap-3">
                  En savoir plus <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CATALOGUE SÉLECTION ═══ */}
      {featured.length > 0 && (
        <section className="bg-paper py-20">
          <div className="mx-auto max-w-[1280px] px-5">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="eyebrow text-or-prestige">Catalogue</div>
                <h2 className="mt-3 text-4xl uppercase">Sélection du moment</h2>
              </div>
              <Link
                to="/catalogue"
                search={{ categorie: "", q: "", tri: "recent", dispo: "" }}
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-or-prestige underline decoration-or-prestige underline-offset-4"
              >
                Tout le catalogue
              </Link>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ NOS VALEURS ═══ */}
      <section className="bg-noir py-20 text-white">
        <div className="mx-auto max-w-[1280px] px-5">
          <div className="text-center">
            <div className="eyebrow text-or-prestige/70">Nos engagements</div>
            <h2 className="mt-4 text-4xl uppercase">Ce qui nous distingue</h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-or-prestige/15 md:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-noir px-6 py-10 smooth-transition hover:bg-emeraude/40">
                <div className="gold-line" />
                <h3 className="mt-6 text-xl uppercase text-or-lumiere">{v.title}</h3>
                <p className="mt-3 text-sm text-ivoire/50 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRÉSENCE MONDIALE ═══ */}
      <section className="bg-gradient-to-br from-emeraude to-noir py-20 text-white">
        <div className="mx-auto max-w-[1280px] px-5">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <div className="eyebrow text-or-prestige/70">Notre réseau</div>
              <h2 className="mt-4 text-4xl uppercase">Présence mondiale,<br />ancrage africain</h2>
              <p className="mt-6 text-ivoire/60 leading-relaxed max-w-[48ch]">
                Basé à Ouagadougou au Burkina Faso, MDG GLOBAL HOLDINGS opère avec des relais permanents
                en Chine pour le sourcing, et des partenaires en Europe et au Moyen-Orient.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { zone: "Afrique de l'Ouest", desc: "Siège & marché principal" },
                  { zone: "Asie (Chine)", desc: "Sourcing & contrôle qualité" },
                  { zone: "Europe", desc: "Partenaires & fournisseurs" },
                  { zone: "Moyen-Orient", desc: "Marchés & opportunités" },
                ].map((z) => (
                  <div key={z.zone} className="rounded-lg border border-or-prestige/15 bg-noir/40 p-4">
                    <div className="font-semibold text-or-lumiere text-sm">{z.zone}</div>
                    <div className="label-mono mt-1 text-ivoire/40">{z.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-xl border border-or-prestige/20 bg-noir/60 p-8 text-center">
                <div className="text-6xl mb-4">🌍</div>
                <div className="font-display text-5xl text-gold">15+</div>
                <div className="label-mono mt-2 text-ivoire/50">Pays desservis</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-or-prestige/20 bg-noir/60 p-6 text-center">
                  <div className="font-display text-3xl text-gold">24h</div>
                  <div className="label-mono mt-2 text-ivoire/50">Réponse devis</div>
                </div>
                <div className="rounded-xl border border-or-prestige/20 bg-noir/60 p-6 text-center">
                  <div className="font-display text-3xl text-gold">6</div>
                  <div className="label-mono mt-2 text-ivoire/50">Pôles d'activité</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ACTUALITÉS ═══ */}
      {news.length > 0 && (
        <section className="bg-paper py-20">
          <div className="mx-auto max-w-[1280px] px-5">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="eyebrow text-or-prestige">Actualités</div>
                <h2 className="mt-3 text-4xl uppercase">Arrivages & informations</h2>
              </div>
              <Link
                to="/actualites"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-or-prestige underline decoration-or-prestige underline-offset-4"
              >
                Toutes les actualités
              </Link>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {news.map((n) => (
                <Link
                  key={n.id}
                  to="/actualites/$slug"
                  params={{ slug: n.slug }}
                  className="group overflow-hidden rounded-xl bg-white ring-1 ring-black/5 smooth-transition hover:shadow-xl hover:-translate-y-1"
                >
                  {n.cover_url && (
                    <img src={n.cover_url} alt={n.title} loading="lazy" width={800} height={450}
                      className="aspect-[16/9] w-full object-cover" />
                  )}
                  <div className="p-6">
                    <div className="label-mono text-or-prestige/60">
                      {new Date(n.published_at).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}
                    </div>
                    <h3 className="mt-3 text-lg uppercase leading-tight">{n.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{n.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ CTA FINAL ═══ */}
      <section className="relative overflow-hidden bg-noir py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-emeraude/30 to-noir" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-or-prestige/40 to-transparent" />
        <div className="relative mx-auto max-w-[1280px] px-5 text-center">
          <div className="gold-line mx-auto" />
          <h2 className="mt-8 text-4xl uppercase md:text-5xl">
            Un projet ? Un besoin ?
          </h2>
          <p className="mt-5 max-w-[52ch] mx-auto text-ivoire/60 leading-relaxed">
            Contactez-nous pour discuter de votre projet et recevoir une offre personnalisée sous 24 heures ouvrées.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold rounded-md">
              Demander un devis
            </Link>
            <a
              href={whatsappLink("Bonjour MDG GLOBAL HOLDINGS, je souhaite un renseignement.")}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-gold rounded-md"
            >
              WhatsApp · {COMPANY.phoneBf}
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
