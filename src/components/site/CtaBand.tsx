import { COMPANY, telLink, whatsappLink } from "@/lib/company";

type Props = { title?: string; text?: string };
export function CtaBand({ title = "Vous cherchez un partenaire de confiance ?", text = "Contactez-nous pour discuter de votre projet et recevoir une offre sous 24 heures." }: Props) {
  return (
    <section className="py-12 sm:py-16" style={{ backgroundColor: "#021807" }}>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-or-prestige/25 p-6 sm:p-10 md:p-14">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-[50ch]">
              <div className="gold-line" />
              <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold uppercase text-white">{title}</h2>
              <p className="mt-3 text-sm sm:text-base text-white/65 leading-relaxed">{text}</p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto md:shrink-0">
              <a href={whatsappLink("Bonjour MDG GLOBAL HOLDINGS, je souhaite un devis.")} target="_blank" rel="noreferrer"
                className="btn-gold rounded-md text-center text-xs sm:text-sm py-3 sm:py-3.5">
                WhatsApp · {COMPANY.phoneBf}
              </a>
              <a href={telLink(COMPANY.phoneBf)}
                className="rounded-md border border-or-prestige/40 py-3 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-white/70 smooth-transition hover:bg-or-prestige/10">
                Appeler · {COMPANY.phoneBf}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
