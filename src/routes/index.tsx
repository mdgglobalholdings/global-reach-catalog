import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { ProductCard } from "@/components/site/ProductCard";
import { getNews, getProducts } from "@/lib/catalog.functions";
import { COMPANY, SECTORS } from "@/lib/company";

const TITLE = "MDG GLOBAL HOLDINGS — Import-Export Véhicules & Équipements | Sourcing Chine-Afrique";
const DESCRIPTION =
  "Négoce international MDG GLOBAL HOLDINGS à Ouagadougou : véhicules, engins de chantier, pièces détachées, équipements industriels et électronique. Sourcing Chine, logistique internationale, assistance visa et devis sous 24h.";

export const Route = createFileRoute("/")({
  loader: async () => ({
    featured: await getProducts({ data: { featured: true, limit: 8 } }),
    news: await getNews({ data: { limit: 3 } }),
  }),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Home,
});

const STATS = [
  { value: "15+", label: "Pays desservis" },
  { value: "24h", label: "Réponse devis" },
  { value: "4", label: "Domaines d'activité" },
  { value: "100%", label: "Suivi logistique" },
];

const DOMAINS = [
  {
    title: "Import & Export",
    text: "Sourcing, achat et acheminement de véhicules, engins et marchandises depuis l'Asie, l'Europe et le Moyen-Orient.",
  },
  {
    title: "Logistique internationale",
    text: "Fret maritime, aérien et terrestre, groupage, dédouanement et livraison porte-à-porte.",
  },
  {
    title: "Négoce & Distribution",
    text: "Commercialisation de véhicules, pièces détachées, équipements industriels et électroniques.",
  },
  {
    title: "Assistance visa & mobilité",
    text: "Accompagnement administratif pour vos déplacements d'affaires et missions à l'international.",
  },
];

const VALUES = [
  { title: "Fiabilité", text: "Fournisseurs contrôlés, matériel inspecté avant expédition." },
  { title: "Transparence", text: "Un interlocuteur unique, des coûts détaillés, aucun frais caché." },
  { title: "Réactivité", text: "Réponse chiffrée sous 24 heures ouvrées sur toute demande." },
  { title: "Proximité", text: "Présence au Burkina Faso et relais en Chine pour le sourcing." },
];

function Home() {
  const { featured, news } = Route.useLoaderData();

  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <img
          src="/images/hero-port.jpg"
          alt="Terminal portuaire de conteneurs au lever du jour"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/80 to-ink" />
        <div className="relative mx-auto max-w-[1200px] px-5 py-24 md:py-32">
          <div className="eyebrow rise text-amber">Négoce international · {COMPANY.city}</div>
          <h1 className="rise mt-5 max-w-[16ch] text-5xl uppercase leading-[0.92] md:text-7xl">
            L'excellence au-delà des frontières
          </h1>
          <p className="rise mt-6 max-w-[52ch] text-lg text-chrome/75">
            {COMPANY.name} importe, distribue et achemine véhicules, engins, pièces détachées et
            équipements industriels vers l'Afrique de l'Ouest — avec un suivi logistique de bout en
            bout.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/catalogue"
              search={{ categorie: "", q: "", tri: "recent", dispo: "" }}
              className="pill rounded-md bg-gradient-to-b from-amberhot to-amber px-7 py-3.5 font-bold text-ink ring-1 ring-white/40"
            >
              Voir le catalogue
            </Link>
            <Link
              to="/contact"
              className="rounded-md bg-white/5 px-7 py-3.5 font-medium ring-1 ring-white/15 hover:bg-white/10"
            >
              Demander un devis
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-ink/80 px-5 py-6">
                <div className="font-display text-3xl text-amber">{s.value}</div>
                <div className="label-mono mt-2 text-chrome/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domaines */}
      <section className="mx-auto max-w-[1200px] px-5 py-20">
        <div className="eyebrow text-amberhot">Nos domaines</div>
        <h2 className="mt-3 text-4xl uppercase">Un partenaire, quatre expertises</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {DOMAINS.map((d) => (
            <div
              key={d.title}
              className="rounded-xl bg-card p-6 ring-1 ring-black/5 transition-shadow hover:shadow-lg"
            >
              <div className="h-1 w-10 rounded bg-gradient-to-r from-amberhot to-amber" />
              <h3 className="mt-5 text-xl uppercase">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Secteurs */}
      <section className="bg-chrome/40 py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="eyebrow text-amberhot">Secteurs</div>
              <h2 className="mt-3 text-4xl uppercase">Ce que nous fournissons</h2>
            </div>
            <Link
              to="/secteurs"
              className="font-mono text-[11px] uppercase tracking-[0.15em] underline decoration-amber decoration-2 underline-offset-4"
            >
              Tous les secteurs
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SECTORS.map((s) => (
              <Link
                key={s.slug}
                to="/catalogue"
                search={{ categorie: s.slug, q: "", tri: "recent", dispo: "" }}
                className="group relative overflow-hidden rounded-xl bg-ink ring-1 ring-black/10"
              >
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-5">
                  <div className="text-lg font-bold uppercase text-white">{s.name}</div>
                  <div className="label-mono mt-1 text-amber">{s.sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nouveautés */}
      <section className="mx-auto max-w-[1200px] px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="eyebrow text-amberhot">Catalogue</div>
            <h2 className="mt-3 text-4xl uppercase">Sélection du moment</h2>
          </div>
          <Link
            to="/catalogue"
            search={{ categorie: "", q: "", tri: "recent", dispo: "" }}
            className="font-mono text-[11px] uppercase tracking-[0.15em] underline decoration-amber decoration-2 underline-offset-4"
          >
            Tout le catalogue
          </Link>
        </div>
        {featured.length ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-muted-foreground">Le catalogue est en cours de mise à jour.</p>
        )}
      </section>

      {/* Valeurs */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="eyebrow text-amber">Nos engagements</div>
          <h2 className="mt-3 text-4xl uppercase">Pourquoi nous choisir</h2>
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

      {/* Actualités */}
      {news.length ? (
        <section className="mx-auto max-w-[1200px] px-5 py-20">
          <div className="eyebrow text-amberhot">Actualités</div>
          <h2 className="mt-3 text-4xl uppercase">Arrivages & informations</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {news.map((n) => (
              <Link
                key={n.id}
                to="/actualites/$slug"
                params={{ slug: n.slug }}
                className="rounded-xl bg-card p-6 ring-1 ring-black/5 transition-shadow hover:shadow-lg"
              >
                <div className="label-mono text-ink/40">
                  {new Date(n.published_at).toLocaleDateString("fr-FR")}
                </div>
                <h3 className="mt-3 text-lg uppercase leading-tight">{n.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{n.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="mx-auto max-w-[1200px] px-5 py-20">
        <div className="text-center">
          <div className="eyebrow text-amberhot">Questions fréquentes</div>
          <h2 className="mt-3 text-4xl uppercase">Tout ce que vous devez savoir</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-card p-6 ring-1 ring-black/5">
            <h3 className="text-lg uppercase font-semibold">Quels sont les délais de livraison ?</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Nous proposons un devis détaillé sous 24h ouvrées. Les délais de livraison dépendent
              de votre localisation et du type de fret (maritime, aérien ou terrestre).
            </p>
          </div>
          <div className="rounded-xl bg-card p-6 ring-1 ring-black/5">
            <h3 className="text-lg uppercase font-semibold">Acceptez-vous les petites commandes ?</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Oui ! Nous traitons aussi bien les commandes unitaires que les gros volumes. Chaque
              demande est étudié individuellement pour vous proposer la meilleure offre.
            </p>
          </div>
          <div className="rounded-xl bg-card p-6 ring-1 ring-black/5">
            <h3 className="text-lg uppercase font-semibold">Quel est votre coût de sourcing ?</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Pas de frais de sourcing. Nos tarifs incluent la recherche de fournisseurs, le contrôle
              qualité et la logistique. Transparence garantie.
            </p>
          </div>
          <div className="rounded-xl bg-card p-6 ring-1 ring-black/5">
            <h3 className="text-lg uppercase font-semibold">Possibilité de paiement à crédit ?</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Contactez-nous directement pour discuter des conditions de paiement adaptées à votre
              situation. Nous étudions chaque dossier.
            </p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="pill rounded-md bg-gradient-to-b from-amberhot to-amber px-6 py-3 font-bold text-ink ring-1 ring-white/40"
          >
            D'autres questions ? Contactez-nous
          </Link>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="bg-gradient-to-r from-ink to-navy py-16 text-white">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <h2 className="text-3xl uppercase md:text-4xl">Besoin d'un matériel spécifique ?</h2>
          <p className="mt-4 text-chrome/75">
            Notre équipe de sourcing vous accompagne pour trouver exactement ce dont vous avez
            besoin, même en cas de demande spéciale.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="pill rounded-md bg-gradient-to-b from-amberhot to-amber px-8 py-3 font-bold text-ink ring-1 ring-white/40"
            >
              Nous contacter
            </Link>
            <Link
              to="/catalogue"
              search={{ categorie: "", q: "", tri: "recent", dispo: "" }}
              className="rounded-md bg-white/10 px-8 py-3 font-semibold ring-1 ring-white/15 hover:bg-white/15"
            >
              Parcourir le catalogue
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
