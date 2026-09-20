import { Link } from "@tanstack/react-router";
import { COMPANY, telLink, whatsappLink } from "@/lib/company";
import { useLang } from "@/lib/i18n/index";

export function MobileCta() {
  const { lang, t } = useLang();
  const m = t.mobileCta;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 flex h-16 items-stretch border-t border-or-prestige/20 md:hidden"
      style={{ backgroundColor: "#021807" }}>
      <Link to="/contact"
        className="flex flex-1 items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-noir font-bold"
        style={{ background: "linear-gradient(135deg,#694A0C 0%,#BF9128 30%,#F2DE83 55%,#E8BD48 75%,#694A0C 100%)" }}>
        {m.quote}
      </Link>
      <a href={whatsappLink(lang === "en" ? "Hello MDG GLOBAL HOLDINGS" : "Bonjour MDG GLOBAL HOLDINGS")}
        target="_blank" rel="noreferrer"
        className="flex flex-1 items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white border-x border-or-prestige/20 hover:bg-or-prestige/10">
        {m.whatsapp}
      </a>
      <a href={telLink(COMPANY.phoneBf)}
        className="flex flex-1 items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white hover:bg-or-prestige/10">
        {m.call}
      </a>
    </div>
  );
}
