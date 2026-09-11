import { Link } from "@tanstack/react-router";
import { COMPANY, telLink, whatsappLink } from "@/lib/company";

type Props = { title?: string; text?: string; };

export function CtaBand({
  title = "Vous cherchez un partenaire de confiance ?",
  text = "Contactez-nous pour discuter de votre projet et recevoir une offre sous 24 heures.",
}: Props) {
  return (
    <section className="py-16" style={{ backgroundColor: "#021807" }}>
      <div className="mx-auto max-w-[1280px] px-5">
        <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-or-prestige/25 p-10 md:p-14">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-[50ch]">
              <div className="gold-line" />
              <h2 className="mt-5 text-3xl font-bold uppercase text-white">{title}</h2>
              <p className="mt-3 text-white/65 leading-relaxed">{text}</p>
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
                className="rounded-md border border-or-prestige/40 py-3 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-white/70 smooth-transition hover:bg-or-prestige/10 hover:border-or-prestige"
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
