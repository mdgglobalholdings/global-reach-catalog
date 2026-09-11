import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/site/QuoteForm";
import { COMPANY, telLink, whatsappLink } from "@/lib/company";

const TITLE = "Contact & Devis — MDG GLOBAL HOLDINGS | Réponse sous 24h";
const DESCRIPTION =
  "Contactez MDG GLOBAL HOLDINGS à Ouagadougou : WhatsApp, téléphone, email. Devis personnalisé sous 24h pour véhicules, engins, logistique, sourcing international et assistance visa.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#eeeee6" }}>
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-base sm:text-lg font-bold uppercase tracking-widest text-or-prestige">Contact</p>
          <h1 className="mt-2 text-lg sm:text-xl font-bold uppercase leading-snug text-noir max-w-[36ch]">
            Parlons de votre projet
          </h1>
          <p className="mt-4 max-w-[52ch] text-noir/65 leading-relaxed text-sm sm:text-base">
            Notre équipe commerciale vous répond sous 24 heures ouvrées avec une offre personnalisée.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#f5f5ee" }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">

            {/* Coordonnées */}
            <div>
              <div className="gold-line" />
              <h2 className="mt-6 text-2xl uppercase">Nos coordonnées</h2>
              <p className="mt-3 text-sm text-noir/65">
                Du lundi au samedi, 08h00–18h00 (GMT)
              </p>

              <dl className="mt-8 space-y-5">
                {[
                  { label: "Burkina Faso", value: COMPANY.phoneBf, href: telLink(COMPANY.phoneBf) },
                  { label: "Chine / International", value: COMPANY.phoneCn, href: telLink(COMPANY.phoneCn) },
                  { label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                  { label: "Site web", value: COMPANY.website, href: `https://${COMPANY.website}` },
                ].map((c) => (
                  <div key={c.label}>
                    <dt className="label-mono text-or-prestige/60">{c.label}</dt>
                    <dd className="mt-1">
                      <a href={c.href} className="text-foreground hover:text-or-prestige smooth-transition text-sm font-medium">{c.value}</a>
                    </dd>
                  </div>
                ))}
                <div>
                  <dt className="label-mono text-or-prestige/60">Adresse</dt>
                  <dd className="mt-1 text-sm">{COMPANY.city}, {COMPANY.country}</dd>
                </div>
              </dl>

              {/* Boutons rapides */}
              <div className="mt-8 space-y-3">
                <a
                  href={whatsappLink("Bonjour MDG GLOBAL HOLDINGS, je souhaite un devis.")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold flex items-center justify-center gap-2 rounded-md"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.397 5.61L0 24l6.545-1.717A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.213-3.727.977.998-3.645-.234-.374A9.818 9.818 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/>
                  </svg>
                  Écrire sur WhatsApp
                </a>
                <a
                  href={telLink(COMPANY.phoneBf)}
                  className="flex items-center justify-center gap-2 rounded-md border border-or-prestige/30 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-or-prestige smooth-transition hover:bg-or-prestige/5"
                >
                  Appeler maintenant
                </a>
              </div>

              {/* Garanties */}
              <div className="mt-10 space-y-3">
                {["Réponse sous 24 heures ouvrées", "Devis gratuit et sans engagement", "Interlocuteur unique dédié"].map((g) => (
                  <div key={g} className="flex items-center gap-3 text-sm text-noir/65">
                    <span className="text-or-prestige font-bold">✓</span>
                    {g}
                  </div>
                ))}
              </div>
            </div>

            {/* Formulaire de devis */}
            <div>
              <div className="gold-line" />
              <h2 className="mt-6 text-2xl uppercase">Demande de devis</h2>
              <p className="mt-2 text-sm text-noir/65">
                Décrivez votre besoin. Notre équipe prépare une offre personnalisée.
              </p>
              <div className="mt-6">
                <QuoteForm defaultSubject="Demande de devis — MDG GLOBAL HOLDINGS" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
