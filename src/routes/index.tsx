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
    svg: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="#050804" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Réseau international",
    text: "Partenaires et fournisseurs en Afrique, en Asie, en Europe et au Moyen-Orient.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" className="size-6" fill="#050804">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: "Réactivité",
    text: "Réponse rapide aux demandes de devis et accompagnement personnalisé.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="#050804" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Solutions complètes",
    text: "Import-export, logistique, véhicules, agriculture et hôtellerie.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="#050804" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9,12 11,14 15,10"/>
      </svg>
    ),
    title: "Confiance & transparence",
    text: "Un suivi rigoureux et des partenariats durables.",
  },
];

const ZONES = [
  {
    name: "Afrique",
    desc: "Marchés &\nopportunités",
    map: "/images/map-afrique.png",
    isJpg: false,
  },
  {
    name: "Asie",
    desc: "Sourcing &\nfournisseurs",
    map: "/images/map-asie.png",
    isJpg: false,
  },
  {
    name: "Europe",
    desc: "Partenariats &\néchanges",
    map: "/images/map-europe.jpg",
    isJpg: true,
  },
  {
    name: "Moyen-Orient",
    desc: "Commerce &\ndéveloppement",
    map: "/images/map-moyen-orient.png",
    isJpg: false,
  },
];

function Home() {
  return (
    <main>

      {/* ═══ HERO ═══ */}
      <section className="relative isolate overflow-hidden" style={{ minHeight: "92vh" }}>
        {/* Image de fond plein écran très visible */}
        <img
          src="/images/hero-port.jpg"
          alt="Commerce international MDG GLOBAL HOLDINGS"
          className="absolute inset-0 size-full object-cover object-center"
        />
        {/* Overlay uniquement à gauche pour lisibilité du texte */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(2,24,7,0.88) 0%, rgba(2,24,7,0.72) 45%, rgba(2,24,7,0.15) 75%, rgba(2,24,7,0.0) 100%)",
          }}
        />
        {/* Liseré or en haut */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-or-prestige via-or-lumiere to-or-prestige" />

        {/* Contenu aligné à gauche, en bas */}
        <div className="relative flex h-full min-h-[92vh] flex-col justify-end pb-16 mx-auto max-w-[1280px] px-5">

          {/* Badge */}
          <div className="rise mb-4 flex items-center gap-3">
            <div className="h-0.5 w-8" style={{ background: "linear-gradient(90deg, #BF9128, #E8BD48)" }} />
            <span className="label-mono font-bold tracking-[0.35em] text-or-lumiere">MDG GLOBAL HOLDINGS</span>
          </div>

          {/* Titre massif — sur 3 lignes comme dans l'image */}
          <h1 className="rise text-white uppercase leading-[0.9]" style={{ fontSize: "clamp(3rem, 9vw, 7rem)", fontFamily: "Montserrat, sans-serif", fontWeight: 900 }}>
            L'excellence<br />
            <span style={{ background: "linear-gradient(135deg, #694A0C 0%, #BF9128 30%, #F2DE83 55%, #E8BD48 75%, #694A0C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              au-delà des
            </span><br />
            frontières
          </h1>

          {/* Sous-titre */}
          <p className="rise mt-5 max-w-[42ch] text-white/80 leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)" }}>
            Un groupe international au service du commerce,<br className="hidden sm:block" />
            de la logistique et du développement de projets.
          </p>

          {/* Boutons */}
          <div className="rise mt-8 flex flex-wrap gap-4">
            <Link to="/activites" className="btn-gold rounded-md flex items-center gap-2">
              Découvrir nos activités <span>→</span>
            </Link>
            <Link
              to="/contact"
              className="rounded-md px-8 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white smooth-transition"
              style={{ border: "2px solid rgba(255,255,255,0.45)", background: "rgba(255,255,255,0.06)", backdropFilter: "blur(4px)" }}
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
      <section className="py-16" style={{ backgroundColor: "#f5f5ee" }}>
        <div className="mx-auto max-w-[1280px] px-5">

          {/* Titre avec tirets or */}
          <div className="flex items-center justify-center gap-5 mb-12">
            <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(90deg, transparent, #BF9128)" }} />
            <h2 className="text-2xl uppercase text-noir text-center tracking-wide">
              Pourquoi choisir MDG GLOBAL HOLDINGS ?
            </h2>
            <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(90deg, #BF9128, transparent)" }} />
          </div>

          {/* 4 items horizontaux */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {WHY_ITEMS.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div
                  className="shrink-0 flex size-14 items-center justify-center rounded-full shadow-md"
                  style={{ background: "linear-gradient(135deg, #694A0C 0%, #BF9128 40%, #F2DE83 70%, #BF9128 100%)" }}
                >
                  {item.svg}
                </div>
                <div>
                  <h3 className="font-bold uppercase text-noir text-sm tracking-wide">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-noir/60 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RÉSEAU INTERNATIONAL ═══ */}
      <section className="py-16" style={{ backgroundColor: "#021807" }}>
        <div className="mx-auto max-w-[1280px] px-5 text-center">

          {/* Titre */}
          <h2 className="text-3xl uppercase text-white tracking-wide">Notre réseau international</h2>
          <p className="mt-3 text-white/70 text-lg">Des connexions stratégiques au service de vos projets.</p>
          <p className="mt-2 text-white/45 text-sm max-w-[72ch] mx-auto leading-relaxed">
            MDG GLOBAL HOLDINGS développe un réseau de partenaires, fournisseurs et assureurs commerciaux et vos projets internationaux.
          </p>

          {/* 4 zones — cartes blanches arrondies sur fond vert */}
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {ZONES.map((z) => (
              <div
                key={z.name}
                className="flex items-center gap-4 rounded-2xl px-5 py-4 text-left smooth-transition hover:bg-white/5"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(191,145,40,0.25)" }}
              >
                {/* Cercle or avec vraie image du continent */}
                <div
                  className="shrink-0 flex size-14 items-center justify-center rounded-full shadow-md overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #694A0C 0%, #BF9128 40%, #F2DE83 70%, #BF9128 100%)" }}
                >
                  <img
                    src={z.map}
                    alt={z.name}
                    className="size-9 object-contain"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
                <div>
                  <h3 className="font-bold uppercase text-white text-sm tracking-wide">{z.name}</h3>
                  <p className="mt-0.5 text-white/55 text-sm leading-snug whitespace-pre-line">{z.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Citation finale */}
          <p className="mt-10 text-or-lumiere font-bold text-lg italic">
            « Un réseau en construction. Une vision internationale. »
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
