import { COMPANY, telLink, whatsappLink } from "@/lib/company";

type Props = {
  title?: string;
  text?: string;
};

export function CtaBand({
  title = "Vous cherchez un véhicule ou un équipement ?",
  text = "Contactez-nous pour connaître les disponibilités et recevoir une offre sous 24h.",
}: Props) {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-16">
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-gradient-to-br from-navy to-ink p-8 text-white ring-1 ring-white/10 md:flex-row md:items-center md:p-12">
        <div>
          <div className="eyebrow mb-3 text-amber">Contact</div>
          <h2 className="max-w-[22ch] text-3xl uppercase leading-tight">{title}</h2>
          <p className="mt-3 max-w-[44ch] text-chrome/70">{text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 md:w-auto">
          <a
            href={whatsappLink("Bonjour MDG GLOBAL HOLDINGS, je souhaite un devis.")}
            target="_blank"
            rel="noreferrer"
            className="pill rounded-md bg-gradient-to-b from-amberhot to-amber px-6 py-3 text-center font-bold text-ink ring-1 ring-white/40"
          >
            WhatsApp · {COMPANY.phoneBf}
          </a>
          <a
            href={telLink(COMPANY.phoneBf)}
            className="rounded-md bg-white/5 px-6 py-3 text-center font-medium ring-1 ring-white/15"
          >
            Appeler · {COMPANY.phoneBf}
          </a>
        </div>
      </div>
    </section>
  );
}
