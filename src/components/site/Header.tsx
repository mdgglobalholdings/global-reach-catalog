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
      {/* Liseré or en haut */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />

      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/images/logo-mdg.jpeg"
            alt="MDG GLOBAL HOLDINGS"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-or-prestige/50 shadow-sm"
          />
          <div className="hidden sm:block leading-none">
            <div className="font-display text-base tracking-widest text-white sm:text-lg">
              {COMPANY.name}
            </div>
            <div className="label-mono mt-1 tracking-[0.28em] text-or-prestige font-bold">
              {COMPANY.tagline}
            </div>
          </div>
        </Link>

        {/* Navigation desktop */}
        <div className="hidden items-center gap-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ivoire/70 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              {...('search' in item ? { search: item.search } : {})}
              className="smooth-transition hover:text-or-lumiere relative group"
              activeProps={{ className: "text-or-lumiere font-semibold" }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-or-prestige to-or-lumiere smooth-transition group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={whatsappLink("Bonjour MDG GLOBAL HOLDINGS, je souhaite des informations.")}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-md border border-or-prestige/40 bg-or-prestige/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-or-lumiere smooth-transition hover:bg-or-prestige/20 hover:border-or-lumiere lg:flex"
          >
            WhatsApp
          </a>
          <Link to="/contact" className="btn-gold hidden rounded-md px-5 py-2.5 sm:inline-block">
            Devis
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-md border border-or-prestige/30 text-white smooth-transition hover:border-or-prestige xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-or-prestige/20 xl:hidden" style={{ backgroundColor: "#021807" }}>
          <div className="mx-auto grid max-w-[1280px] gap-1 px-5 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                {...('search' in item ? { search: item.search } : {})}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-md px-3 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ivoire/70 smooth-transition hover:bg-or-prestige/10 hover:text-or-lumiere"
                activeProps={{ className: "text-or-prestige bg-or-prestige/5" }}
              >
                {item.label}
                <span className="text-or-prestige/40">›</span>
              </Link>
            ))}
            <hr className="my-2 border-or-prestige/15" />
            <a
              href={whatsappLink("Bonjour MDG GLOBAL HOLDINGS")}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn-gold rounded-md text-center py-3"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
