import { Link } from "@tanstack/react-router";
import { COMPANY, telLink, whatsappLink } from "@/lib/company";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-or-prestige/30 bg-ivoire/98 backdrop-blur-md shadow-lg md:hidden">
      <div className="grid grid-cols-3 gap-1 p-2">
        <Link to="/contact" className="btn-gold rounded-md py-3 text-center text-xs">Devis</Link>
        <a
          href={whatsappLink("Bonjour MDG GLOBAL HOLDINGS")}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-or-prestige/40 py-3 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-or-prestige font-semibold"
        >
          WhatsApp
        </a>
        <a
          href={telLink(COMPANY.phoneBf)}
          className="rounded-md border border-noir/15 py-3 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-noir/60"
        >
          Appeler
        </a>
      </div>
    </div>
  );
}
