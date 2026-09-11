import { Link } from "@tanstack/react-router";
import { COMPANY, telLink, whatsappLink } from "@/lib/company";

type Props = {
  title?: string;
  text?: string;
};

export function CtaBand({
  title = "Vous cherchez un partenaire de confiance ?",
  text = "Contactez-nous pour discuter de votre projet et recevoir une offre sous 24 heures.",
}: Props) {
  return (
    <section className="py-16 bg-noir">
      <div className="mx-auto max-w-[1280px] px-5">
        <div className="relative overflow-hidden rounded-2xl bg-noir p-10 md:p-14">
          {/* Dégradé de fond */}
          <div className="absolute inset-0 bg-gradient-to-br from-emeraude/30 via-noir to-noir pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-or-prestige/50 to-transparent" />

          <div className="relative flex flex-col items-start justify-between gap-8 text-white md:flex-row md:items-center">
            <div className="max-w-[50ch]">
              <div className="gold-line" />
              <h2 className="mt-5 text-3xl uppercase">{title}</h2>
              <p className="mt-3 text-ivoire/55 leading-relaxed">{text}</p>
            </div>
            <div className="flex w-full flex-col gap-3 md:w-auto shrink-0">
              <a
                href={whatsappLink("Bonjour MDG GLOBAL HOLDINGS, je souhaite un devis.")}
                target="_blank"
                rel="noreferrer"
                className="btn-gold rounded-md text-center"
              >
                WhatsApp · {COMPANY.phoneBf}
              </a>
              <a
                href={telLink(COMPANY.phoneBf)}
                className="rounded-md border border-or-prestige/30 py-3 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-or-lumiere smooth-transition hover:bg-or-prestige/10"
              >
                Appeler · {COMPANY.phoneBf}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
