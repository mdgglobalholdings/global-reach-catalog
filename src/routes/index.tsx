import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { getProducts } from "@/lib/catalog.functions";
import { COMPANY, POLES, STATS, VALUES, whatsappLink } from "@/lib/company";
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

function Home() {
  const { featured } = Route.useLoaderData();

  return (
    <main>

      {/* ═══ HERO — fond ivoire avec image discrète ═══ */}
      <section className="relative isolate min-h-[100svh] flex items-center overflow-hidden" style={{ backgroundColor: "#f5f5ee" }}>
        <img
          src="/images/hero-port.jpg"
          alt="Commerce international MDG GLOBAL HOLDINGS"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-10"
        />
        {/* Overlay ivoire */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(245,245,238,0.97) 40%, rgba(245,245,238,0.85) 100%)" }} />
        {/* Liseré or en haut */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />
        {/* Liseré or en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-or-prestige/40 to-transparent" />

        <div className="relative mx-auto w-full max-w-[1280px] px-5 py-16">

          {/* Badge */}
          <div className="rise mb-6 inline-flex items-center gap-2 rounded-full border border-or-prestige/40 bg-or-prestige/8 px-4 py-1.5">
            <span className="size-1.5 rounded-full bg-or-prestige" />
            <span className="label-mono text-or-prestige">Groupe international · Burkina Faso</span>
          </div>

          {/* Titre sur une ligne */}
          <h1 className="rise whitespace-nowrap text-[clamp(1.6rem,5.5vw,4.5rem)] uppercase leading-none tracking-tight">
            <span className="text-gold">MDG GLOBAL HOLDINGS</span>
          </h1>

          {/* Slogan */}
          <p className="rise mt-3 font-mono text-[clamp(0.55rem,1.6vw,0.8rem)] uppercase tracking-[0.22em] text-or-prestige font-semibold">
            {COMPANY.tagline}
          </p>

          {/* Séparateur or */}
          <div className="rise mt-6 gold-line" />

          {/* Description — encre sombre */}
          <p className="rise mt-6 max-w-[54ch] text-base text-noir/80 leading-relaxed md:text-lg">
            {COMPANY.positioning}
          </p>

          {/* Boutons */}
          <div className="rise mt-8 flex flex-wrap gap-4">
            <Link to="/activites" className="btn-gold rounded-md">
              Découvrir nos activités
            </Link>
            <Link to="/contact" className="btn-outline-gold rounded-md">
              Demander un devis
            </Link>
          </div>

          {/* Mention métier */}
          <p className="rise mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-noir/35">
            {COMPANY.tagline2}
          </p>

          {/* Stats — fond blanc sur ivoire */}
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-xl bg-white border border-or-prestige/20 px-6 py-5 text-center shadow-sm">
                <div className="text-gold font-display text-3xl">{s.value}</div>
                <div className="label-mono mt-2 text-noir/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ POSITIONNEMENT — vert émeraude profond ═══ */}
      <section className="py-20" style={{ backgroundColor: "#021807" }}>
        <div className="mx-auto max-w-[1280px] px-5">
          <div className="mx-auto max-w-[760px] text-center">
            <div className="gold-line mx-auto" />
            <h2 className="mt-8 text-3xl font-bold uppercase text-white md:text-4xl">
              Votre partenaire pour entreprendre, acheter et développer au-delà des frontières
            </h2>
            <p className="mt-6 text-white/75 leading-relaxed">
              MDG GLOBAL HOLDINGS accompagne particuliers, entreprises, investisseurs et partenaires dans leurs
              opérations commerciales et leurs projets à l'international. Grâce à notre réseau en Afrique,
              en Asie, en Europe et au Moyen-Orient, nous facilitons l'accès à des produits, équipements,
              véhicules et solutions adaptés à vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 6 PÔLES — fond ivoire blanc cassé ═══ */}
      <section className="py-24" style={{ backgroundColor: "#f5f5ee" }}>
        <div className="mx-auto max-w-[1280px] px-5">
          <div className="text-center">
            <div className="eyebrow text-or-prestige">Nos pôles</div>
            <h2 className="mt-4 text-4xl font-bold uppercase text-noir">
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
                <h3 className="mt-5 text-xl font-bold uppercase text-noir">{pole.title}</h3>
                <p className="label-mono mt-1 text-or-prestige">{pole.subtitle}</p>
                <p className="mt-4 text-sm text-noir/65 leading-relaxed">{pole.description}</p>
                <div className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-or-prestige smooth-transition group-hover:gap-3">
                  En savoir plus <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VALEURS — vert émeraude profond ═══ */}
      <section className="py-20" style={{ backgroundColor: "#021807" }}>
        <div className="mx-auto max-w-[1280px] px-5">
          <div className="text-center">
            <div className="eyebrow text-or-prestige/80">Nos engagements</div>
            <h2 className="mt-4 text-4xl font-bold uppercase text-white">Ce qui nous distingue</h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-xl border border-or-prestige/20 bg-white/5 px-6 py-10 smooth-transition hover:border-or-prestige/50 hover:bg-white/10 hover:-translate-y-1">
                <div className="gold-line" />
                <h3 className="mt-6 text-xl font-bold uppercase text-or-lumiere">{v.title}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRÉSENCE MONDIALE — fond ivoire + accents or/vert ═══ */}
      <section className="py-20" style={{ backgroundColor: "#f5f5ee" }}>
        <div className="mx-auto max-w-[1280px] px-5">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <div className="eyebrow text-or-prestige">Notre réseau</div>
              <h2 className="mt-4 text-4xl font-bold uppercase text-noir">
                Présence mondiale,<br />ancrage africain
              </h2>
              <div className="mt-4 gold-line" />
              <p className="mt-6 text-noir/70 leading-relaxed max-w-[48ch]">
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
                  <div key={z.zone} className="rounded-xl bg-white border border-or-prestige/20 p-4 smooth-transition hover:border-or-prestige/50">
                    <div className="font-bold text-noir text-sm">{z.zone}</div>
                    <div className="label-mono mt-1 text-noir/50">{z.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-xl bg-white border border-or-prestige/25 p-8 text-center shadow-sm">
                <div className="text-6xl mb-4">🌍</div>
                <div className="font-display text-5xl text-gold">15+</div>
                <div className="label-mono mt-2 text-noir/50">Pays desservis</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white border border-or-prestige/25 p-6 text-center shadow-sm">
                  <div className="font-display text-3xl text-gold">24h</div>
                  <div className="label-mono mt-2 text-noir/50">Réponse devis</div>
                </div>
                <div className="rounded-xl bg-white border border-or-prestige/25 p-6 text-center shadow-sm">
                  <div className="font-display text-3xl text-gold">6</div>
                  <div className="label-mono mt-2 text-noir/50">Pôles d'activité</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL — vert émeraude profond ═══ */}
      <section className="py-24 relative" style={{ backgroundColor: "#021807" }}>
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />
        <div className="mx-auto max-w-[1280px] px-5 text-center">
          <div className="gold-line mx-auto" />
          <h2 className="mt-8 text-4xl font-bold uppercase text-white md:text-5xl">
            <span className="whitespace-nowrap">Un projet&nbsp;? Un besoin&nbsp;?</span>
          </h2>
          <p className="mt-5 max-w-[52ch] mx-auto text-white/70 leading-relaxed">
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
