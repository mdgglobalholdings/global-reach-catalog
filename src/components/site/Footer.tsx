import { Link } from "@tanstack/react-router";
import { COMPANY, telLink, whatsappLink } from "@/lib/company";
import { useLang } from "@/lib/i18n/index";

export function Footer() {
  const { lang, t } = useLang();
  const f = t.footer;

  const NAV_LINKS = lang === "en"
    ? [
        { to: "/", label: t.nav.home },
        { to: "/about", label: t.nav.about },
        { to: "/activities", label: t.nav.activities },
        { to: "/logistics", label: t.nav.logistics },
        { to: "/mobility", label: t.nav.mobility },
        { to: "/contact", label: t.nav.contact },
      ]
    : [
        { to: "/", label: t.nav.home },
        { to: "/a-propos", label: t.nav.about },
        { to: "/activites", label: t.nav.activities },
        { to: "/services", label: t.nav.logistics },
        { to: "/assistance-visa", label: t.nav.mobility },
        { to: "/contact", label: t.nav.contact },
      ];

  const LEGAL_LINKS = lang === "en"
    ? [
        { to: "/legal-notice", label: f.legal },
        { to: "/privacy-policy", label: f.privacy },
        { to: "/terms-of-use", label: f.terms },
      ]
    : [
        { to: "/mentions-legales", label: f.legal },
        { to: "/politique-confidentialite", label: f.privacy },
        { to: "/conditions-utilisation", label: f.terms },
      ];

  return (
    <footer style={{ backgroundColor: "#021807" }} className="text-white">
      <div className="h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">

          {/* Marque */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/images/logo-mdg.jpeg" alt="MDG GLOBAL HOLDINGS"
                className="size-10 sm:size-12 rounded-full object-cover ring-2 ring-or-prestige/40 shadow-sm shrink-0" />
              <div>
                <div className="font-display text-xs sm:text-sm" style={{ color: "#D4A017", letterSpacing: "0.05em" }}>
                  MDG GLOBAL HOLDINGS
                </div>
                <div className="mt-0.5 font-bold italic" style={{ color: "#ffffff", fontSize: "0.58rem", letterSpacing: "0.06em" }}>
                  {f.tagline}
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-white/70 leading-relaxed max-w-[32ch]">{f.partner}</p>
            <div className="mt-3 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-white/40">{f.sectors}</div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white mb-4 sm:mb-6">{f.navigation}</h3>
            <nav className="space-y-2 sm:space-y-3">
              {NAV_LINKS.map((item) => (
                <Link key={item.to} to={item.to} className="block text-xs sm:text-sm text-white/70 smooth-transition hover:text-or-lumiere">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white mb-4 sm:mb-6">{f.contact}</h3>
            <dl className="space-y-3 text-xs sm:text-sm">
              {[
                { label: "Burkina Faso", value: COMPANY.phoneBf, href: telLink(COMPANY.phoneBf) },
                { label: lang === "en" ? "China" : "Chine", value: COMPANY.phoneCn, href: telLink(COMPANY.phoneCn) },
                { label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
              ].map((c) => (
                <div key={c.label}>
                  <dt className="font-bold text-or-prestige text-[9px] sm:text-[10px] uppercase tracking-wider mb-0.5">{c.label}</dt>
                  <dd><a href={c.href} className="text-white/70 hover:text-or-lumiere smooth-transition break-all">{c.value}</a></dd>
                </div>
              ))}
              <div>
                <dt className="font-bold text-or-prestige text-[9px] sm:text-[10px] uppercase tracking-wider mb-0.5">{f.address}</dt>
                <dd className="text-white/70">{COMPANY.city}, {COMPANY.country}</dd>
              </div>
            </dl>
            <a href={whatsappLink(lang === "en" ? "Hello MDG GLOBAL HOLDINGS" : "Bonjour MDG GLOBAL HOLDINGS")}
              target="_blank" rel="noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-md border-2 border-or-prestige bg-or-prestige/10 py-2.5 font-bold text-xs sm:text-sm uppercase tracking-wider text-or-lumiere smooth-transition hover:bg-or-prestige/20">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.397 5.61L0 24l6.545-1.717A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.213-3.727.977.998-3.645-.234-.374A9.818 9.818 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-or-prestige/20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-4 flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-center">
          <div className="text-[10px] sm:text-sm text-white/50">© {new Date().getFullYear()} MDG GLOBAL HOLDINGS · {f.bottom}</div>
          <div className="flex flex-wrap gap-3 sm:gap-5 text-[10px] sm:text-sm">
            {LEGAL_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="text-white/50 hover:text-or-lumiere smooth-transition">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
