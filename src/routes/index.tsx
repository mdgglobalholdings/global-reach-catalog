import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import { getProducts } from "@/lib/catalog.functions";
import { COMPANY, POLES, whatsappLink } from "@/lib/company";
import { getOrganizationSchema, getLocalBusinessSchema } from "@/lib/schema";

const TITLE = "MDG GLOBAL HOLDINGS — Groupe International | Import-Export, Logistique, Véhicules";
const DESCRIPTION =
  "MDG GLOBAL HOLDINGS : votre partenaire pour entreprendre au-delà des frontières. Import-export Chine-Afrique, logistique internationale, véhicules et équipements, assistance visa. Ouagadougou, Burkina Faso.";

export const Route = createFileRoute("/")({
  loader: async () => ({
    featured: await getProducts({ data: { featured: true, limit: 4 } }),
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

const WHY_ITEMS = [
  {
    icon: "🌍",
    title: "Réseau international",
    text: "Partenaires et fournisseurs en Afrique, en Asie, en Europe et au Moyen-Orient.",
  },
  {
    icon: "⚡",
    title: "Réactivité",
    text: "Réponse rapide aux demandes de devis et accompagnement personnalisé.",
  },
  {
    icon: "🤝",
    title: "Solutions complètes",
    text: "Import-export, logistique, véhicules, agriculture et hôtellerie.",
  },
  {
    icon: "🛡️",
    title: "Confiance & transparence",
    text: "Un suivi rigoureux et des partenariats durables.",
  },
];

const ZONES = [
  { icon: "🌍", name: "Afrique", desc: "Marchés & opportunités" },
  { icon: "🌏", name: "Asie", desc: "Sourcing & fournisseurs" },
  { icon: "🌍", name: "Europe", desc: "Partenariats & échanges" },
  { icon: "🌙", name: "Moyen-Orient", desc: "Commerce & développement" },
];

function Home() {
  return (
    <main>

      {/* ═══ HERO ═══ */}
      <section className="relative isolate min-h-[100svh] flex items-center overflow-hidden">
        {/* Image de fond port/conteneurs */}
        <img
          src="/images/hero-port.jpg"
          alt="Commerce international MDG GLOBAL HOLDINGS"
          className="absolute inset-0 size-full object-cover"
        />
        {/* Overlay sombre premium */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, rgba(2,24,7,0.92) 40%, rgba(2,24,7,0.6) 100%)" }} />
        {/* Liseré or en haut */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />

        <div className="relative mx-auto w-full max-w-[1280px] px-5 py-20">

          {/* Badge */}
          <div className="rise mb-5 inline-flex items-center gap-2">
            <div className="h-0.5 w-8 bg-gradient-to-r from-or-prestige to-or-lumiere" />
            <span className="label-mono text-or-lumiere font-semibold tracking-[0.3em]">MDG GLOBAL HOLDINGS</span>
          </div>

          {/* Titre */}
          <h1 className="rise max-w-[14ch] text-[clamp(2.8rem,8vw,6.5rem)] uppercase leading-[0.88] text-white">
            L'excellence<br />
            <span className="text-gold">au-delà des</span><br />
            frontières
          </h1>

          {/* Sous-titre */}
          <p className="rise mt-6 max-w-[44ch] text-white/80 leading-relaxed text-base md:text-lg">
            Un groupe international au service du commerce, de la logistique et du développement de projets.
          </p>

          {/* Boutons */}
          <div className="rise mt-8 flex flex-wrap gap-4">
            <Link to="/activites" className="btn-gold rounded-md flex items-center gap-2">
              Découvrir nos activités <span>→</span>
            </Link>
            <Link
              to="/contact"
              className="rounded-md border-2 border-white/40 bg-white/5 px-8 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white backdrop-blur-sm smooth-transition hover:border-or-prestige hover:bg-or-prestige/10"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 6 PÔLES ═══ */}
      <section className="py-20" style={{ backgroundColor: "#f5f5ee" }}>
        <div className="mx-auto max-w-[1280px] px-5">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-or-prestige" />
              <span className="eyebrow text-or-prestige">Nos pôles</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-or-prestige" />
            </div>
            <h2 className="text-4xl uppercase text-noir">
              Un groupe. Plusieurs expertises.<br />
              <span className="text-gold">Une seule vision.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {POLES.map((pole) => (
              <Link
                key={pole.id}
                to={pole.link}
                className="group block overflow-hidden rounded-xl bg-white border border-or-prestige/15 smooth-transition hover:border-or-prestige/50 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image du pôle */}
                <figure className="overflow-hidden">
                  <img
                    src={pole.image}
                    alt={pole.title}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover smooth-transition group-hover:scale-105 duration-500"
                  />
                </figure>
                {/* Icône en surimpression */}
                <div className="px-6 pt-5 pb-6">
                  <div className="text-3xl mb-3">{pole.icon}</div>
                  <h3 className="text-lg uppercase text-noir">{pole.title}</h3>
                  <p className="mt-2 text-sm text-noir/60 leading-relaxed">{pole.description}</p>
                  <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-or-prestige smooth-transition group-hover:gap-3">
                    En savoir plus <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ À PROPOS ═══ */}
      <section className="py-0 overflow-hidden" style={{ backgroundColor: "#f5f5ee" }}>
        <div className="mx-auto max-w-[1280px] px-5 py-16">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            {/* Image bâtiment */}
            <figure className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/images/hero-port.jpg"
                alt="MDG GLOBAL HOLDINGS siège"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              {/* Badge sur image */}
              <div className="absolute inset-0 flex items-end">
                <div className="w-full p-8" style={{ background: "linear-gradient(to top, rgba(2,24,7,0.9) 0%, transparent 100%)" }}>
                  <p className="text-white text-2xl font-bold uppercase leading-tight">
                    Bâtir des ponts<br />entre l'Afrique<br />et le monde.
                  </p>
                </div>
              </div>
            </figure>

            {/* Texte */}
            <div>
              <div className="eyebrow text-or-prestige mb-3">À propos</div>
              <h2 className="text-4xl uppercase text-noir">Qui sommes-nous ?</h2>
              <div className="mt-4 gold-line" />
              <p className="mt-6 text-noir/70 leading-relaxed">
                MDG GLOBAL HOLDINGS est un groupe diversifié à vocation internationale, basé à Ouagadougou, au Burkina Faso.
              </p>
              <p className="mt-4 text-noir/70 leading-relaxed">
                Nous développons des activités dans plusieurs secteurs, notamment le commerce international, l'import-export, la logistique et le transport international, le négoce, les véhicules et équipements, la mobilité internationale, l'agriculture et l'élevage, ainsi que l'hôtellerie et la restauration.
              </p>
              <p className="mt-4 text-noir/70 leading-relaxed">
                Notre ambition est de créer des connexions fiables entre les marchés africains et les opportunités internationales, en proposant à nos clients et partenaires des solutions adaptées, un suivi rigoureux et un service fondé sur la fiabilité, la qualité et la transparence.
              </p>
              <Link to="/a-propos" className="mt-8 inline-flex items-center gap-2 rounded-md border-2 border-noir/20 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-noir smooth-transition hover:border-or-prestige hover:text-or-prestige">
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ POURQUOI MDG ═══ */}
      <section className="py-20" style={{ backgroundColor: "#eeeee6" }}>
        <div className="mx-auto max-w-[1280px] px-5">
          <h2 className="text-center text-3xl uppercase text-noir mb-12">
            Pourquoi choisir MDG GLOBAL HOLDINGS ?
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {WHY_ITEMS.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white border border-or-prestige/15 p-6 smooth-transition hover:border-or-prestige/50 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-full border border-or-prestige/30 bg-or-prestige/8 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-sm uppercase text-noir">{item.title}</h3>
                <p className="mt-2 text-sm text-noir/60 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RÉSEAU INTERNATIONAL ═══ */}
      <section className="py-20" style={{ backgroundColor: "#021807" }}>
        <div className="mx-auto max-w-[1280px] px-5 text-center">
          <h2 className="text-4xl uppercase text-white">Notre réseau international</h2>
          <div className="mt-2 gold-line mx-auto" />
          <p className="mt-6 text-white/70 max-w-[60ch] mx-auto leading-relaxed">
            Des connexions stratégiques au service de vos projets.
          </p>
          <p className="mt-2 text-white/55 max-w-[72ch] mx-auto text-sm leading-relaxed">
            MDG GLOBAL HOLDINGS développe un réseau de partenaires, fournisseurs et assureurs commerciaux et vos projets internationaux.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {ZONES.map((z) => (
              <div
                key={z.name}
                className="rounded-xl border border-or-prestige/20 bg-white/5 p-6 text-center smooth-transition hover:border-or-prestige/50 hover:bg-white/10"
              >
                <div className="text-4xl mb-3">{z.icon}</div>
                <h3 className="text-or-lumiere font-bold uppercase text-lg">{z.name}</h3>
                <p className="mt-2 text-white/55 text-sm">{z.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-or-lumiere/80 font-bold text-lg italic">
            « Un réseau en construction. Une vision internationale. »
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
