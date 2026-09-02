import { createFileRoute } from "@tanstack/react-router";

import { QuoteForm } from "@/components/site/QuoteForm";
import { COMPANY, telLink, whatsappLink } from "@/lib/company";

const TITLE = "Contact et demande de devis — MDG GLOBAL HOLDINGS";
const DESCRIPTION =
  "Contactez MDG GLOBAL HOLDINGS à Ouagadougou : devis sous 24h pour vos véhicules, engins, pièces et équipements. Téléphone, WhatsApp et e-mail.";

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
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-16">
          <div className="eyebrow text-amber">Contact</div>
          <h1 className="mt-4 max-w-[18ch] text-4xl uppercase leading-[0.95] md:text-6xl">
            Parlons de votre besoin
          </h1>
          <p className="mt-5 max-w-[56ch] text-chrome/70">
            Réponse chiffrée sous 24 heures ouvrées, du lundi au samedi.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1200px] gap-8 px-5 py-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-2xl uppercase">Coordonnées</h2>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="label-mono text-ink/45">Adresse</dt>
              <dd>
                {COMPANY.city}, {COMPANY.country}
              </dd>
            </div>
            <div>
              <dt className="label-mono text-ink/45">E-mail</dt>
              <dd>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-amberhot">
                  {COMPANY.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label-mono text-ink/45">Burkina Faso</dt>
              <dd>
                <a href={telLink(COMPANY.phoneBf)} className="hover:text-amberhot">
                  {COMPANY.phoneBf}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label-mono text-ink/45">Chine</dt>
              <dd>
                <a href={telLink(COMPANY.phoneCn)} className="hover:text-amberhot">
                  {COMPANY.phoneCn}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label-mono text-ink/45">Horaires</dt>
              <dd>Lun – Sam · 08h00 – 18h00 (GMT)</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={whatsappLink("Bonjour MDG GLOBAL HOLDINGS, je souhaite un devis.")}
              target="_blank"
              rel="noreferrer"
              className="pill rounded-md bg-gradient-to-b from-amberhot to-amber px-6 py-3 text-center font-bold text-ink ring-1 ring-white/40"
            >
              Écrire sur WhatsApp
            </a>
            <a
              href={telLink(COMPANY.phoneBf)}
              className="rounded-md bg-muted px-6 py-3 text-center font-medium ring-1 ring-black/5"
            >
              Appeler maintenant
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl uppercase">Demande de devis</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Décrivez le matériel recherché, la quantité et la destination.
          </p>
          <div className="mt-5">
            <QuoteForm defaultSubject="Demande de devis" />
          </div>
        </div>
      </section>
    </main>
  );
}
