import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { COMPANY, whatsappLink } from "@/lib/company";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/activites", label: "Nos activités" },
  { to: "/services", label: "Logistique" },
  { to: "/assistance-visa", label: "Mobilité" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-40 border-b border-or-prestige/20" style={{ backgroundColor: "#021807" }}>
      <div className="h-0.5" style={{ background: "linear-gradient(90deg,#BF9128,#F2DE83,#BF9128)" }} />
      <div className="mx-auto flex h-16 sm:h-20 max-w-[1280px] items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
          <img src="/images/logo-mdg.jpeg" alt="MDG GLOBAL HOLDINGS"
            className="size-10 sm:size-12 rounded-full object-cover ring-2 ring-or-prestige/50 shadow-sm shrink-0" />
          <div className="hidden sm:block leading-none min-w-0">
            <div className="font-display text-sm tracking-widest text-white truncate">MDG GLOBAL HOLDINGS</div>
            <div className="label-mono mt-1 tracking-[0.2em] text-or-prestige font-bold">{COMPANY.tagline}</div>
          </div>
        </Link>

        {/* Nav desktop */}
        <div className="hidden items-center gap-4 xl:gap-5 font-mono text-[10px] uppercase tracking-[0.15em] text-ivoire/70 xl:flex">
          {NAV.map((item) => (
            <Link key={item.to} to={item.to}
              className="smooth-transition hover:text-or-lumiere relative group whitespace-nowrap"
              activeProps={{ className: "text-or-lumiere font-semibold" }}>
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-or-prestige to-or-lumiere smooth-transition group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a href={whatsappLink("Bonjour MDG GLOBAL HOLDINGS")} target="_blank" rel="noreferrer"
            className="hidden items-center gap-2 rounded-md border border-or-prestige/40 bg-or-prestige/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-or-lumiere smooth-transition hover:bg-or-prestige/20 lg:flex whitespace-nowrap">
            WhatsApp
          </a>
          <Link to="/contact" className="btn-gold hidden rounded-md px-4 py-2.5 sm:inline-block text-xs whitespace-nowrap">
            Devis
          </Link>
          <button type="button" onClick={() => setOpen(v => !v)}
            aria-label={open ? "Fermer" : "Menu"}
            className="grid size-9 sm:size-10 place-items-center rounded-md border border-or-prestige/30 text-white xl:hidden shrink-0">
            {open ? <X className="size-4 sm:size-5" /> : <Menu className="size-4 sm:size-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-or-prestige/20 xl:hidden" style={{ backgroundColor: "#021807" }}>
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-3 space-y-1">
            {NAV.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-md px-4 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ivoire/70 smooth-transition hover:bg-or-prestige/10 hover:text-or-lumiere"
                activeProps={{ className: "text-or-lumiere bg-or-prestige/10" }}>
                {item.label}
                <span className="text-or-prestige/50 text-base">›</span>
              </Link>
            ))}
            <div className="pt-2 pb-1 grid grid-cols-2 gap-2">
              <a href={whatsappLink("Bonjour MDG GLOBAL HOLDINGS")} target="_blank" rel="noreferrer"
                onClick={() => setOpen(false)}
                className="btn-gold rounded-md py-3 text-center text-[10px]">WhatsApp</a>
              <Link to="/contact" onClick={() => setOpen(false)}
                className="rounded-md border border-or-prestige/40 py-3 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-or-lumiere">
                Devis
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
