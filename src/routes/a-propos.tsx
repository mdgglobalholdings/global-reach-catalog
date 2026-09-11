import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import { COMPANY, VALUES } from "@/lib/company";

const TITLE = "À propos — MDG GLOBAL HOLDINGS | Groupe international basé au Burkina Faso";
const DESCRIPTION =
  "MDG GLOBAL HOLDINGS est un groupe diversifié à vocation internationale. Commerce international, logistique, véhicules, mobilité, agriculture et hôtellerie. Ouagadougou, Burkina Faso.";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-noir text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-noir via-emeraude/25 to-noir" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-or-prestige/40 to-transparent" />
        <div className="relative mx-auto max-w-[1280px] px-5 py-20">
          <div className="eyebrow text-or-prestige/70">Qui sommes-nous</div>
          <h1 className="mt-4 max-w-[18ch] text-5xl uppercase leading-[0.92] md:text-7xl">
            {COMPANY.tagline}
          </h1>
          <p className="mt-6 max-w-[60ch] text-ivoire/60 leading-relaxed text-lg">
            MDG GLOBAL HOLDINGS est un groupe diversifié à vocation internationale, basé à{" "}
            {COMPANY.city}, {COMPANY.country}, connecté aux marchés africains, asiatiques,
            européens et du Moyen-Orient.
          </p>
        </div>
      </section>

      {/* Présentation principale */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-[1280px] px-5 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="gold-line" />
            <h2 className="mt-6 text-3xl uppercase">Qui sommes-nous ?</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              MDG GLOBAL HOLDINGS est un groupe diversifié à vocation internationale qui développe
              des activités dans le commerce international, la logistique, le négoce, les véhicules
              et équipements, la mobilité, l'agriculture, l'élevage ainsi que l'hôtellerie et la
              restauration.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Notre ambition est de créer des connexions fiables entre les marchés africains et les
              opportunités internationales — en proposant des solutions adaptées, un accompagnement
              rigoureux et un réseau de partenaires de confiance.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Grâce à notre présence à Ouagadougou et notre relais permanent en Chine pour le
              sourcing et le contrôle qualité, nous sommes en mesure de répondre à des demandes
              variées dans des délais compétitifs.
            </p>
          </div>
          <figure className="overflow-hidden rounded-2xl ring-1 ring-black/5">
            <img
              src="/images/hero-port.jpg"
              alt="MDG GLOBAL HOLDINGS opérations internationales"
              loading="lazy"
              width={1200}
              height={800}
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-noir text-white py-20">
        <div className="mx-auto max-w-[1280px] px-5">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-or-prestige/15 bg-emeraude/20 p-10">
              <div className="gold-line" />
              <h2 className="mt-6 text-2xl uppercase text-or-lumiere">Notre vision</h2>
              <p className="mt-4 text-ivoire/65 leading-relaxed text-lg">
                « Construire un groupe africain capable de connecter les opportunités, les marchés
                et les partenaires au-delà des frontières. »
              </p>
            </div>
            <div className="rounded-2xl border border-or-prestige/15 bg-emeraude/20 p-10">
              <div className="gold-line" />
              <h2 className="mt-6 text-2xl uppercase text-or-lumiere">Notre mission</h2>
              <p className="mt-4 text-ivoire/65 leading-relaxed text-lg">
                « Simplifier les opérations internationales et créer des opportunités durables
                pour nos clients, partenaires et investisseurs. »
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-[1280px] px-5">
          <div className="text-center">
            <div className="eyebrow text-or-prestige">Nos valeurs</div>
            <h2 className="mt-4 text-4xl uppercase">Ce qui nous définit</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="group rounded-xl border border-or-prestige/10 bg-card p-7 ring-1 ring-black/5 smooth-transition hover:border-or-prestige/50">
                <div className="gold-line" />
                <h3 className="mt-6 text-xl uppercase">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Présence géographique */}
      <section className="bg-noir text-white py-20">
        <div className="mx-auto max-w-[1280px] px-5">
          <div className="text-center mb-12">
            <div className="eyebrow text-or-prestige/70">Présence internationale</div>
            <h2 className="mt-4 text-4xl uppercase">Nos zones d'intervention</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { zone: "Afrique de l'Ouest", flag: "🇧🇫", desc: "Siège opérationnel à Ouagadougou, Burkina Faso. Marché principal avec livraisons dans toute la sous-région." },
              { zone: "Asie (Chine)", flag: "🇨🇳", desc: "Relais permanent pour le sourcing, le contrôle qualité avant expédition et les relations fournisseurs." },
              { zone: "Europe", flag: "🇪🇺", desc: "Accès à des fournisseurs certifiés européens et des équipements répondant aux normes internationales." },
              { zone: "Moyen-Orient", flag: "🌙", desc: "Accès aux marchés de Dubaï et des Émirats pour des produits compétitifs et une logistique optimisée." },
            ].map((z) => (
              <div key={z.zone} className="rounded-xl border border-or-prestige/15 bg-emeraude/10 p-6 smooth-transition hover:border-or-prestige/35">
                <div className="text-4xl mb-3">{z.flag}</div>
                <h3 className="text-or-lumiere font-semibold uppercase text-sm tracking-wider">{z.zone}</h3>
                <p className="mt-3 text-xs text-ivoire/50 leading-relaxed">{z.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Travaillons ensemble" text="Contactez-nous pour discuter de vos projets et opportunités d'affaires." />
    </main>
  );
}
