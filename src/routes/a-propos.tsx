import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import { COMPANY, VALUES } from "@/lib/company";

const TITLE = "À propos — MDG GLOBAL HOLDINGS | Groupe international basé au Burkina Faso";
const DESCRIPTION = "MDG GLOBAL HOLDINGS est un groupe diversifié à vocation internationale. Commerce international, logistique, véhicules, mobilité, agriculture et hôtellerie. Ouagadougou, Burkina Faso.";

export const Route = createFileRoute("/a-propos")({
head: () => ({ meta: [{ title: TITLE },{ name: "description", content: DESCRIPTION },{ property: "og:title", content: TITLE },{ property: "og:description", content: DESCRIPTION }] }),
component: AboutPage,
});

function AboutPage() {
return (
<main>
{/* Hero */}
<section className="relative overflow-hidden" style={{ backgroundColor: "#eeeee6" }}>
<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />
<div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-16">
<p className="text-base sm:text-lg font-bold uppercase tracking-widest text-or-prestige">Qui sommes-nous</p>
<h1 className="mt-2 text-lg sm:text-xl font-bold uppercase leading-snug text-noir max-w-[36ch]">{COMPANY.tagline}</h1>
<p className="mt-4 max-w-[60ch] text-noir/65 leading-relaxed text-sm sm:text-base">
MDG GLOBAL HOLDINGS est un groupe diversifié à vocation internationale, basé à {COMPANY.city}, {COMPANY.country}, connecté aux marchés africains, asiatiques, européens et du Moyen-Orient.
</p>
</div>
</section>

{/* QUI SOMMES-NOUS — texte à gauche, photo à droite */}
<section className="py-20" style={{ backgroundColor: "#f5f5ee" }}>
<div className="mx-auto max-w-[1280px] px-4 sm:px-6 grid gap-12 lg:grid-cols-2 items-center">
<div>
<div className="gold-line" />
<h2 className="mt-6 text-xl sm:text-2xl lg:text-3xl font-bold uppercase text-noir">Qui sommes-nous ?</h2>
<p className="mt-5 text-noir/70 leading-relaxed">
MDG GLOBAL HOLDINGS est un groupe diversifié à vocation internationale, basé à Ouagadougou, au Burkina Faso.
</p>
<p className="mt-4 text-noir/70 leading-relaxed">
Le groupe développe des activités dans plusieurs secteurs, notamment le commerce international, l'import-export, la logistique et le transport international, le négoce, les véhicules et équipements, la mobilité internationale, l'agriculture et l'élevage, ainsi que l'hôtellerie et la restauration.
</p>
<p className="mt-4 text-noir/70 leading-relaxed">
Notre vocation est de créer des connexions fiables entre les marchés africains et les opportunités internationales, en nous appuyant sur un réseau de partenaires et de fournisseurs à travers différents marchés.
</p>
<p className="mt-4 text-noir/70 leading-relaxed">
Nous accompagnons nos clients et partenaires dans leurs projets en proposant des solutions adaptées, un suivi rigoureux et un service fondé sur la fiabilité, la qualité et la transparence.
</p>
</div>
<figure className="overflow-hidden rounded-2xl border border-or-prestige/20 shadow-sm">
<img src="/images/hero-port.jpg" alt="MDG GLOBAL HOLDINGS" loading="lazy" width={1200} height={800} className="aspect-[4/3] w-full object-cover" />
</figure>
</div>
</section>

{/* Vision & Mission */}
<section className="py-20" style={{ backgroundColor: "#eeeee6" }}>
<div className="mx-auto max-w-[1280px] px-4 sm:px-6">
<div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
<div className="rounded-2xl bg-white border border-or-prestige/20 p-10 shadow-sm">
<div className="gold-line" />
<h2 className="mt-6 text-2xl font-bold uppercase text-noir">Notre vision</h2>
<p className="mt-4 text-noir/70 leading-relaxed text-lg italic">
« Construire un groupe africain capable de connecter les opportunités, les marchés et les partenaires au-delà des frontières. »
</p>
</div>
<div className="rounded-2xl bg-white border border-or-prestige/20 p-10 shadow-sm">
<div className="gold-line" />
<h2 className="mt-6 text-2xl font-bold uppercase text-noir">Notre mission</h2>
<p className="mt-4 text-noir/70 leading-relaxed text-lg italic">
« Simplifier les opérations internationales et créer des opportunités durables pour nos clients, partenaires et investisseurs. »
</p>
</div>
</div>
</div>
</section>

{/* Valeurs */}
<section className="py-20" style={{ backgroundColor: "#f5f5ee" }}>
<div className="mx-auto max-w-[1280px] px-4 sm:px-6">
<div className="text-center">
<div className="eyebrow text-or-prestige">Nos valeurs</div>
<h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-noir">Ce qui nous définit</h2>
</div>
<div className="mt-12 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
{VALUES.map((v) => (
<div key={v.title} className="rounded-xl bg-white border border-or-prestige/20 p-7 smooth-transition hover:border-or-prestige/50 hover:shadow-lg hover:-translate-y-1">
<div className="gold-line" />
<h3 className="mt-6 text-xl font-bold uppercase text-noir">{v.title}</h3>
<p className="mt-3 text-sm text-noir/65 leading-relaxed">{v.text}</p>
</div>
))}
</div>
</div>
</section>

{/* Zones */}
<section className="py-20" style={{ backgroundColor: "#eeeee6" }}>
<div className="mx-auto max-w-[1280px] px-4 sm:px-6">
<div className="text-center mb-12">
<div className="eyebrow text-or-prestige">Présence internationale</div>
<h2 className="mt-4 text-xl sm:text-2xl font-bold uppercase text-noir">Nos zones d'intervention</h2>
</div>
<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
{[
{ zone: "Afrique de l'Ouest", flag: "🇧🇫", desc: "Siège opérationnel à Ouagadougou, Burkina Faso. Marché principal avec livraisons dans toute la sous-région." },
{ zone: "Asie (Chine)", flag: "🇨🇳", desc: "Relais permanent pour le sourcing, le contrôle qualité avant expédition et les relations fournisseurs." },
{ zone: "Europe", flag: "🇪🇺", desc: "Accès à des fournisseurs certifiés européens et des équipements répondant aux normes internationales." },
{ zone: "Moyen-Orient", flag: "🌙", desc: "Accès aux marchés de Dubaï et des Émirats pour des produits compétitifs." },
].map((z) => (
<div key={z.zone} className="rounded-xl bg-white border border-or-prestige/20 p-6 smooth-transition hover:border-or-prestige/50 hover:shadow-md">
<div className="text-4xl mb-3">{z.flag}</div>
<h3 className="text-noir font-bold uppercase text-sm tracking-wider">{z.zone}</h3>
<p className="mt-3 text-xs text-noir/60 leading-relaxed">{z.desc}</p>
</div>
))}
</div>
</div>
</section>

<CtaBand title="Travaillons ensemble" text="Contactez-nous pour discuter de vos projets et opportunités d'affaires." />
</main>
);
}
