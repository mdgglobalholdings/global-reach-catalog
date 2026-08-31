import { Link } from "@tanstack/react-router";

import { COMPANY, telLink, whatsappLink } from "@/lib/company";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-1 p-2">
        <Link
          to="/contact"
          className="pill rounded-md bg-gradient-to-b from-amberhot to-amber py-3 text-center text-sm font-bold text-ink ring-1 ring-white/40"
        >
          Devis
        </Link>
        <a
          href={whatsappLink("Bonjour MDG GLOBAL HOLDINGS, je souhaite un renseignement.")}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-white/5 py-3 text-center text-sm font-medium text-white ring-1 ring-white/15"
        >
          WhatsApp
        </a>
        <a
          href={telLink(COMPANY.phoneBf)}
          className="rounded-md bg-white/5 py-3 text-center text-sm font-medium text-white ring-1 ring-white/15"
        >
          Appeler
        </a>
      </div>
    </div>
  );
}
