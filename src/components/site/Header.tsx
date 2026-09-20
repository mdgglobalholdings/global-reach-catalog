import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { COMPANY, whatsappLink } from "@/lib/company";
import { useLang, ROUTE_MAP, type Lang } from "@/lib/i18n/index";

export function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const NAV = [
    { to: lang === "en" ? "/" : "/", label: t.nav.home },
    { to: lang === "en" ? "/about" : "/a-propos", label: t.nav.about },
    { to: lang === "en" ? "/activities" : "/activites", label: t.nav.activities },
    { to: lang === "en" ? "/logistics" : "/services", label: t.nav.logistics },
    { to: lang === "en" ? "/mobility" : "/assistance-visa", label: t.nav.mobility },
    { to: lang === "en" ? "/contact" : "/contact", label: t.nav.contact },
  ] as const;

  function switchLang(newLang: Lang) {
    setLang(newLang);
    // Naviguer vers l'équivalent dans la nouvelle langue
    const mapped = ROUTE_MAP[pathname]?.[newLang];
    if (mapped && mapped !== pathname) {
      navigate({ to: mapped });
    }
  }

  const langLabel = lang === "fr" ? "Langue" : "Language";
  const frLabel   = lang === "fr" ? "Français" : "French";
  const enLabel   = lang === "fr" ? "Anglais"  : "English";

  const [langOpen, setLangOpen] = useState(false);

  const LangSwitcher = () => (
    <div className="relative">
      {/* Bouton principal */}
      <button
        type="button"
        onClick={() => setLangOpen(v => !v)}
        className="flex items-center gap-1.5 rounded-md border border-or-prestige/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-white/80 smooth-transition hover:border-or-prestige/60 hover:text-or-lumiere"
      >
        {langLabel}
        <svg className={`size-3 opacity-60 smooth-transition ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {/* Overlay transparent pour fermer */}
      {langOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
      )}
      {/* Liste déroulante */}
      {langOpen && (
        <div className="absolute right-0 top-full mt-1 flex flex-col rounded-md border border-or-prestige/20 shadow-xl overflow-hidden z-50" style={{ backgroundColor: "#021807", minWidth: "120px" }}>
          <button
            type="button"
            onClick={() => { switchLang("fr"); setLangOpen(false); }}
            className={`px-4 py-3 text-left font-mono text-[10px] uppercase tracking-wide smooth-transition hover:bg-or-prestige/10 ${lang === "fr" ? "text-or-lumiere font-bold" : "text-white/70"}`}
          >
            {frLabel}
          </button>
          <button
            type="button"
            onClick={() => { switchLang("en"); setLangOpen(false); }}
            className={`px-4 py-3 text-left font-mono text-[10px] uppercase tracking-wide smooth-transition hover:bg-or-prestige/10 ${lang === "en" ? "text-or-lumiere font-bold" : "text-white/70"}`}
          >
            {enLabel}
          </button>
        </div>
      )}
    </div>
  );

  return (
    <nav className="sticky top-0 z-40 border-b border-or-prestige/20" style={{ backgroundColor: "#021807" }}>
      <div className="h-0.5" style={{ background: "linear-gradient(90deg,#BF9128,#F2DE83,#BF9128)" }} />
      <div className="mx-auto flex h-16 sm:h-20 max-w-[1280px] items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
          <img src="/images/logo-mdg.jpeg" alt="MDG GLOBAL HOLDINGS"
            className="size-10 sm:size-12 rounded-full object-cover ring-2 ring-or-prestige/50 shadow-sm shrink-0" />
          <div className="hidden sm:block leading-none min-w-0">
            <div className="font-display text-sm truncate" style={{ color: "#D4A017", letterSpacing: "0.05em" }}>
              MDG GLOBAL HOLDINGS
            </div>
            <div className="label-mono mt-1 font-bold italic" style={{ color: "#ffffff", fontSize: "0.58rem", letterSpacing: "0.06em" }}>
              {t.tagline}
            </div>
          </div>
        </Link>

        {/* Nav desktop */}
        <div className="hidden items-center gap-3 xl:gap-4 font-mono text-[10px] uppercase tracking-[0.15em] text-ivoire/70 xl:flex">
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
          {/* Sélecteur de langue desktop */}
          <div className="hidden xl:flex">
            <LangSwitcher />
          </div>

          <a href={whatsappLink(lang === "en" ? "Hello MDG GLOBAL HOLDINGS" : "Bonjour MDG GLOBAL HOLDINGS")}
            target="_blank" rel="noreferrer"
            className="hidden items-center gap-2 rounded-md border border-or-prestige/40 bg-or-prestige/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-or-lumiere smooth-transition hover:bg-or-prestige/20 lg:flex whitespace-nowrap">
            WhatsApp
          </a>
          <Link to="/contact" className="btn-gold hidden rounded-md px-4 py-2.5 sm:inline-block text-xs whitespace-nowrap">
            {t.nav.quote}
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

            {/* Sélecteur de langue mobile */}
            <div className="px-4 py-3">
              <LangSwitcher />
            </div>

            <div className="pt-2 pb-1 grid grid-cols-2 gap-2">
              <a href={whatsappLink(lang === "en" ? "Hello MDG GLOBAL HOLDINGS" : "Bonjour MDG GLOBAL HOLDINGS")}
                target="_blank" rel="noreferrer" onClick={() => setOpen(false)}
                className="btn-gold rounded-md py-3 text-center text-[10px]">WhatsApp</a>
              <Link to="/contact" onClick={() => setOpen(false)}
                className="rounded-md border border-or-prestige/40 py-3 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-or-lumiere">
                {t.nav.quote}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
