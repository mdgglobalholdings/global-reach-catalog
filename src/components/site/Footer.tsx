import { Link } from "@tanstack/react-router";
import { COMPANY, telLink, whatsappLink } from "@/lib/company";

export function Footer() {
  return (
    <footer className="bg-noir text-ivoire/50">
      {/* Bande or */}
      <div className="h-px bg-gradient-to-r from-transparent via-or-prestige/50 to-transparent" />

      <div className="mx-auto max-w-[1280px] px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Marque */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/images/logo-mdg.jpeg" alt="MDG GLOBAL HOLDINGS" className="size-12 rounded-full object-cover ring-2 ring-or-prestige/30" />
              <div>
                <div className="font-display text-sm text-white tracking-wider">{COMPANY.name}</div>
                <div className="label-mono mt-0.5 text-or-prestige/60">{COMPANY.tagline}</div>
              </div>
            </div>
            <p className="mt-5 text-xs text-ivoire/40 leading-relaxed max-w-[26ch]">
              Votre partenaire pour entreprendre, acheter et développer au-delà des frontières.
            </p>
            <div className="mt-5 space-y-2 font-mono text-[10px] uppercase tracking-[0.15em]">
              <div className="text-ivoire/30">Logistique · Import-Export · Transport</div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-or-prestige/60 mb-5">Navigation</h3>
            <nav className="space-y-3">
              {[
                { to: "/", label: "Accueil" },
                { to: "/a-propos", label: "À propos" },
                { to: "/activites", label: "Nos activités" },
                { to: "/catalogue", label: "Catalogue", search: { categorie: "", q: "", tri: "recent", dispo: "" } },
                { to: "/services", label: "Logistique" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  {...('search' in item ? { search: item.search } : {})}
                  className="block font-mono text-[10px] uppercase tracking-[0.12em] text-ivoire/40 smooth-transition hover:text-or-lumiere"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-or-prestige/60 mb-5">Services</h3>
            <nav className="space-y-3">
              {[
                { to: "/assistance-visa", label: "Mobilité & Visa" },
                { to: "/actualites", label: "Actualités" },
                { to: "/contact", label: "Contact" },
                { to: "/mentions-legales", label: "Mentions légales" },
                { to: "/politique-confidentialite", label: "Confidentialité" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block font-mono text-[10px] uppercase tracking-[0.12em] text-ivoire/40 smooth-transition hover:text-or-lumiere"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-or-prestige/60 mb-5">Contact</h3>
            <dl className="space-y-3 font-mono text-[10px] leading-relaxed">
              <div>
                <dt className="text-ivoire/25 uppercase tracking-wider mb-1">Burkina Faso</dt>
                <dd>
                  <a href={telLink(COMPANY.phoneBf)} className="text-ivoire/50 hover:text-or-lumiere smooth-transition">{COMPANY.phoneBf}</a>
                </dd>
              </div>
              <div>
                <dt className="text-ivoire/25 uppercase tracking-wider mb-1">Chine</dt>
                <dd>
                  <a href={telLink(COMPANY.phoneCn)} className="text-ivoire/50 hover:text-or-lumiere smooth-transition">{COMPANY.phoneCn}</a>
                </dd>
              </div>
              <div>
                <dt className="text-ivoire/25 uppercase tracking-wider mb-1">Email</dt>
                <dd>
                  <a href={`mailto:${COMPANY.email}`} className="text-ivoire/50 hover:text-or-lumiere smooth-transition">{COMPANY.email}</a>
                </dd>
              </div>
              <div>
                <dt className="text-ivoire/25 uppercase tracking-wider mb-1">Adresse</dt>
                <dd className="text-ivoire/40">{COMPANY.city}, {COMPANY.country}</dd>
              </div>
            </dl>

            <a
              href={whatsappLink("Bonjour MDG GLOBAL HOLDINGS")}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-md border border-or-prestige/30 py-2.5 font-mono text-[10px] uppercase tracking-[0.15em] text-or-lumiere smooth-transition hover:bg-or-prestige/10"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-or-prestige/10">
        <div className="mx-auto max-w-[1280px] px-5 py-5 flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-ivoire/25">
            © {new Date().getFullYear()} {COMPANY.name} · Tous droits réservés
          </div>
          <div className="flex gap-5 font-mono text-[9px] uppercase tracking-[0.15em]">
            <Link to="/mentions-legales" className="text-ivoire/25 hover:text-or-lumiere smooth-transition">Mentions</Link>
            <Link to="/politique-confidentialite" className="text-ivoire/25 hover:text-or-lumiere smooth-transition">Politique</Link>
            <Link to="/conditions-utilisation" className="text-ivoire/25 hover:text-or-lumiere smooth-transition">Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
