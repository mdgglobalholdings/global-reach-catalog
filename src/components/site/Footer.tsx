import { Link } from "@tanstack/react-router";

import { COMPANY } from "@/lib/company";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-chrome/60">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-6 px-5 py-10 md:flex-row md:items-start">
        <div>
          <div className="font-display text-lg text-white">{COMPANY.name}</div>
          <div className="label-mono mt-1 tracking-[0.25em] text-amber">{COMPANY.tagline}</div>
          <div className="mt-4 flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-[0.15em]">
            <Link
              to="/catalogue"
              search={{ categorie: "", q: "", tri: "recent", dispo: "" }}
              className="hover:text-amber"
            >
              Catalogue
            </Link>
            <Link to="/services" className="hover:text-amber">
              Services
            </Link>
            <Link to="/assistance-visa" className="hover:text-amber">
              Assistance visa
            </Link>
            <Link to="/contact" className="hover:text-amber">
              Contact
            </Link>
          </div>
        </div>
        <div className="font-mono text-[11px] leading-relaxed">
          {COMPANY.city}, {COMPANY.country}
          <br />
          {COMPANY.email}
          <br />
          {COMPANY.phoneBf}
          <br />
          {COMPANY.phoneCn}
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-[1200px] px-5 py-4 font-mono text-[10px] uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} {COMPANY.name}
        </div>
      </div>
    </footer>
  );
}
