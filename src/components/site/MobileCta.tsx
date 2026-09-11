import { Link } from "@tanstack/react-router";
import { COMPANY, telLink, whatsappLink } from "@/lib/company";
export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-or-prestige/30 shadow-lg md:hidden" style={{ backgroundColor: "rgba(2,24,7,0.98)", backdropFilter: "blur(8px)" }}>
      <div className="grid grid-cols-3 gap-1.5 p-2">
        <Link to="/contact" className="btn-gold rounded-md py-2.5 text-center text-[10px]">Devis</Link>
        <a href={whatsappLink("Bonjour MDG GLOBAL HOLDINGS")} target="_blank" rel="noreferrer"
          className="rounded-md border border-or-prestige/40 py-2.5 text-center font-mono text-[10px] uppercase tracking-[0.1em] text-or-lumiere font-semibold">
          WhatsApp
        </a>
        <a href={telLink(COMPANY.phoneBf)}
          className="rounded-md border border-white/15 py-2.5 text-center font-mono text-[10px] uppercase tracking-[0.1em] text-white/60">
          Appeler
        </a>
      </div>
    </div>
  );
}
