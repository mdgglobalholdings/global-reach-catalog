import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

import { COMPANY, whatsappLink } from "@/lib/company";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/activites", label: "Nos activités" },
  { to: "/catalogue", label: "Catalogue", search: { categorie: "", q: "", tri: "recent", dispo: "" } },
  { to: "/services", label: "Logistique" },
  { to: "/assistance-visa", label: "Mobilité" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-or-prestige/20 bg-noir/98 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/images/logo-mdg.jpeg"
            alt="MDG GLOBAL HOLDINGS"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-or-prestige/40"
          />
          <div className="leading-none hidden sm:block">
            <div className="font-display text-base tracking-widest text-white sm:text-lg">
              {COMPANY.name}
            </div>
            <div className="label-mono mt-1 tracking-[0.28em] text-or-prestige/80">
              L'excellence au-delà des frontières
            </div>
          </div>
        </Link>

        {/* Navigation desktop */}
        <div className="hidden items-center gap-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ivoire/60 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              {...('search' in item ? { search: item.search } : {})}
              className="smooth-transition hover:text-or-lumiere relative group"
              activeProps={{ className: "text-or-lumiere" }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-or-prestige to-or-lumiere smooth-transition group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* WhatsApp flottant desktop */}
          <a
            href={whatsappLink("Bonjour MDG GLOBAL HOLDINGS, je souhaite obtenir des informations.")}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-md border border-or-prestige/30 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-or-lumiere smooth-transition hover:bg-or-prestige/10 hover:border-or-lumiere lg:flex"
          >
            <svg className="size-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.397 5.61L0 24l6.545-1.717A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.213-3.727.977.998-3.645-.234-.374A9.818 9.818 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/>
            </svg>
            WhatsApp
          </a>

          <Link
            to="/contact"
            className="btn-gold hidden rounded-md px-5 py-2.5 sm:inline-block"
          >
            Devis
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-md border border-or-prestige/20 text-ivoire smooth-transition hover:border-or-prestige/50 xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-or-prestige/15 bg-noir xl:hidden">
          <div className="mx-auto grid max-w-[1280px] gap-1 px-5 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                {...('search' in item ? { search: item.search } : {})}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-md px-3 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ivoire/70 smooth-transition hover:bg-or-prestige/5 hover:text-or-lumiere"
                activeProps={{ className: "text-or-lumiere bg-or-prestige/5" }}
              >
                {item.label}
                <span className="text-or-prestige/40">›</span>
              </Link>
            ))}
            <hr className="my-2 border-or-prestige/10" />
            <a
              href={whatsappLink("Bonjour MDG GLOBAL HOLDINGS")}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-md bg-or-prestige/10 px-3 py-3 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-or-lumiere"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
