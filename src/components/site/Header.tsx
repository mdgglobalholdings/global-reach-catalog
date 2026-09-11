import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

import { COMPANY } from "@/lib/company";

const NAV = [
  { to: "/catalogue", label: "Catalogue" },
  { to: "/secteurs", label: "Secteurs" },
  { to: "/services", label: "Services" },
  { to: "/guides", label: "Guides" },
  { to: "/assistance-visa", label: "Visa" },
  { to: "/actualites", label: "Actualités" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-md bg-gradient-to-br from-chrome to-steel text-[11px] font-black text-ink ring-1 ring-white/30">
            MDG
          </div>
          <div className="leading-none">
            <div className="font-display text-base tracking-wide text-white sm:text-lg">
              {COMPANY.name}
            </div>
            <div className="label-mono mt-1 tracking-[0.3em] text-amber">
              {COMPANY.city} · Intl
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-chrome/70 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition-colors hover:text-amber"
              activeProps={{ className: "text-amber" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="pill hidden rounded-md bg-gradient-to-b from-amberhot to-amber px-4 py-2 text-sm font-semibold text-ink ring-1 ring-white/40 sm:inline-block"
          >
            Devis
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-md text-chrome ring-1 ring-white/15 lg:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-ink lg:hidden">
          <div className="mx-auto grid max-w-[1200px] gap-1 px-5 py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 font-mono text-[12px] uppercase tracking-[0.18em] text-chrome/80 hover:bg-white/5 hover:text-amber"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
