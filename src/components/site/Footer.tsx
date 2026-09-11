import { Link } from "@tanstack/react-router";

import { COMPANY, telLink, whatsappLink } from "@/lib/company";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-chrome/60">
      <div className="mx-auto max-w-[1200px] px-5 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Marque */}
          <div>
            <div className="font-display text-lg text-white">{COMPANY.name}</div>
            <div className="label-mono mt-1 tracking-[0.25em] text-amber">{COMPANY.tagline}</div>
            <div className="mt-4 flex gap-3">
              <a
                href={whatsappLink("Bonjour MDG GLOBAL HOLDINGS")}
                target="_blank"
                rel="noreferrer"
                className="grid size-8 place-items-center rounded-md bg-white/5 text-white transition-colors hover:bg-amberhot hover:text-ink"
                title="WhatsApp"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 14.8c-.4.1-.47-.17-.74-.91-.17-.43-.89-2.4-1.03-2.84-.12-.32-.3-.38-.52-.4-.2-.02-1.08-.14-2.13-.98-.78-.68-1.3-1.53-1.45-1.85-.04-.1-.17-.25.01-.4.25-.2.56-.47.84-.62.2-.1.33-.27.25-.43-.1-.2-1.43-3.59-1.97-4.84-.26-.58-.5-.5-.68-.51-.16-.01-.34-.02-.52-.02-.55 0-1.08.27-1.36.81-.56 1.09-2.14 5.18-2.14 5.18 0 2.89 2.04 4.79 3.98 5.15 2.08.38 3.92-.48 4.7-1.63.25-.38.44-.98.44-1.65 0-.22-.02-.41-.07-.58z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-white">Navigation</h3>
            <nav className="mt-4 space-y-2 font-mono text-[11px] uppercase tracking-[0.12em]">
              <Link to="/" className="block hover:text-amber">
                Accueil
              </Link>
              <Link
                to="/catalogue"
                search={{ categorie: "", q: "", tri: "recent", dispo: "" }}
                className="block hover:text-amber"
              >
                Catalogue
              </Link>
              <Link to="/secteurs" className="block hover:text-amber">
                Secteurs
              </Link>
              <Link to="/services" className="block hover:text-amber">
                Services
              </Link>
              <Link to="/guides" className="block hover:text-amber">
                Guides
              </Link>
            </nav>
          </div>

          {/* À propos */}
          <div>
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-white">Entreprise</h3>
            <nav className="mt-4 space-y-2 font-mono text-[11px] uppercase tracking-[0.12em]">
              <Link to="/a-propos" className="block hover:text-amber">
                À propos
              </Link>
              <Link to="/assistance-visa" className="block hover:text-amber">
                Assistance visa
              </Link>
              <Link to="/actualites" className="block hover:text-amber">
                Actualités
              </Link>
              <Link to="/contact" className="block hover:text-amber">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-white">Contact</h3>
            <dl className="mt-4 space-y-2 font-mono text-[10px] leading-relaxed">
              <div>
                <dt className="text-white/50">Localisation</dt>
                <dd>{COMPANY.city}, {COMPANY.country}</dd>
              </div>
              <div>
                <dt className="text-white/50">Email</dt>
                <dd>
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-amber">
                    {COMPANY.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-white/50">Téléphone</dt>
                <dd>
                  <a href={telLink(COMPANY.phoneBf)} className="hover:text-amber">
                    {COMPANY.phoneBf}
                  </a>
                  <br />
                  <a href={telLink(COMPANY.phoneCn)} className="hover:text-amber">
                    {COMPANY.phoneCn}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-[1200px] px-5 py-4 font-mono text-[10px] uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} {COMPANY.name} · Tous droits réservés · <Link to="/">Accueil</Link>
        </div>
      </div>
    </footer>
  );
}
