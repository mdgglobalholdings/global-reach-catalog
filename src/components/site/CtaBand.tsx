import { Link } from "@tanstack/react-router";
import { whatsappLink } from "@/lib/company";
import { useLang } from "@/lib/i18n/index";

interface Props { title?: string; text?: string; }

export function CtaBand({ title, text }: Props) {
  const { lang, t } = useLang();
  const c = t.ctaBand;
  return (
    <section className="py-14 sm:py-16" style={{ backgroundColor: "#021807" }}>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl uppercase text-white">{title ?? c.title}</h2>
        <p className="mt-3 text-white/65 text-sm sm:text-base max-w-[55ch] mx-auto leading-relaxed">{text ?? c.text}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-gold rounded-md px-8 py-3.5">{c.cta}</Link>
          <a href={whatsappLink(lang === "en" ? "Hello MDG GLOBAL HOLDINGS" : "Bonjour MDG GLOBAL HOLDINGS")}
            target="_blank" rel="noreferrer"
            className="rounded-md border-2 border-white/20 px-8 py-3.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white smooth-transition hover:border-white/50">
            {c.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
