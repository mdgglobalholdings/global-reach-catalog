import { Link } from "@tanstack/react-router";
import { COMPANY, telLink, whatsappLink } from "@/lib/company";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#eeeee6" }} className="text-noir">
      {/* Liseré or en haut */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-or-prestige to-transparent" />

      <div className="mx-auto max-w-[1280px] px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Marque */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/images/logo-mdg.jpeg" alt="MDG GLOBAL HOLDINGS"
                className="size-12 rounded-full object-cover ring-2 ring-or-prestige/40 shadow-sm" />
              <div>
                <div className="font-display text-sm text-noir tracking-wider">{COMPANY.name}</div>
                <div className="mt-0.5 text-or-prestige font-bold text-xs">{COMPANY.tagline}</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-noir/70 leading-relaxed max-w-[26ch]">
              Votre partenaire pour entreprendre, acheter et développer au-delà des frontières.
            </p>
            <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-noir/45">
              Logistique · Import-Export · Transport
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-noir mb-6">Navigation</h3>
            <nav className="space-y-3">
              {[
                { to: "/", label: "Accueil" },
                { to: "/a-propos", label: "À propos" },
                { to: "/activites", label: "Nos activités" },
                { to: "/services", label: "Logistique" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  {...('search' in item ? { search: item.search } : {})}
                  className="block text-sm text-noir/70 smooth-transition hover:text-or-prestige"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-noir mb-6">Services</h3>
            <nav className="space-y-3">
              {[
                { to: "/assistance-visa", label: "Mobilité & Visa" },
                { to: "/actualites", label: "Actualités" },
                { to: "/guides", label: "Guides" },
                { to: "/contact", label: "Contact" },
                { to: "/mentions-legales", label: "Mentions légales" },
              ].map((item) => (
                <Link key={item.label} to={item.to}
                  className="block text-sm text-noir/70 smooth-transition hover:text-or-prestige">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-noir mb-6">Contact</h3>
            <dl className="space-y-4 text-sm">
              {[
                { label: "Burkina Faso", value: COMPANY.phoneBf, href: telLink(COMPANY.phoneBf) },
                { label: "Chine", value: COMPANY.phoneCn, href: telLink(COMPANY.phoneCn) },
                { label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
              ].map((c) => (
                <div key={c.label}>
                  <dt className="font-bold text-or-prestige text-[10px] uppercase tracking-wider mb-1">{c.label}</dt>
                  <dd>
                    <a href={c.href} className="text-noir/70 hover:text-or-prestige smooth-transition">{c.value}</a>
                  </dd>
                </div>
              ))}
              <div>
                <dt className="font-bold text-or-prestige text-[10px] uppercase tracking-wider mb-1">Adresse</dt>
                <dd className="text-noir/70">{COMPANY.city}, {COMPANY.country}</dd>
              </div>
            </dl>

            {/* Bouton WhatsApp */}
            <a
              href={whatsappLink("Bonjour MDG GLOBAL HOLDINGS")}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-md border-2 border-or-prestige bg-or-prestige/8 py-3 font-bold text-sm uppercase tracking-wider text-or-prestige smooth-transition hover:bg-or-prestige/15"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.397 5.61L0 24l6.545-1.717A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.213-3.727.977.998-3.645-.234-.374A9.818 9.818 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-or-prestige/20">
        <div className="mx-auto max-w-[1280px] px-5 py-5 flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
          <div className="text-sm text-noir/60">
            © {new Date().getFullYear()} {COMPANY.name} · Tous droits réservés
          </div>
          <div className="flex flex-wrap gap-5 text-sm">
            <Link to="/mentions-legales" className="text-noir/60 hover:text-or-prestige smooth-transition">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="text-noir/60 hover:text-or-prestige smooth-transition">Politique</Link>
            <Link to="/conditions-utilisation" className="text-noir/60 hover:text-or-prestige smooth-transition">Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
