import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { useLang } from "@/lib/i18n/index";

const FORMSPREE_ID = "mvkgonbz";
const CONTACT_EMAIL = "contact@mdgglobalholdings.com";

type Props = { productId?: string; productName?: string; defaultSubject?: string; };
type FormErrors = { full_name?: string; email?: string; message?: string; };

export function QuoteForm({ productId, productName, defaultSubject }: Props) {
  const { lang, t } = useLang();
  const f = t.form;
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const newErrors: FormErrors = {};
    const full_name = String(fd.get("full_name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    if (!full_name || full_name.length < 2) newErrors.full_name = f.errorName;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = f.errorEmail;
    if (!message || message.length < 5) newErrors.message = f.errorMessage;
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setErrors({});
    setPending(true);
    try {
      if (productName) fd.append("_product", productName);
      if (productId) fd.append("_product_id", productId);
      fd.append("_subject", String(fd.get("subject") || defaultSubject || (lang === "en" ? "New request — MDG GLOBAL HOLDINGS" : "Nouvelle demande — MDG GLOBAL HOLDINGS")));
      fd.append("_lang", lang);
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, { method: "POST", body: fd, headers: { Accept: "application/json" } });
      if (response.ok) { setDone(true); form.reset(); }
      else throw new Error("Formspree error");
    } catch { alert(f.errorSend); }
    finally { setPending(false); }
  }

  const inputClass = "w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-or-prestige focus:ring-2 focus:ring-or-prestige/30";

  if (done) {
    return (
      <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 p-6 ring-1 ring-emerald-200/50">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-full bg-emerald-100 p-1">
            <svg className="size-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <div>
            <h3 className="font-semibold text-emerald-900">{f.successTitle}</h3>
            <p className="mt-2 text-sm text-emerald-700">{f.successText}</p>
            <p className="mt-3 text-xs text-emerald-600">{f.successHint}</p>
            <button type="button" onClick={() => setDone(false)} className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-700 underline decoration-emerald-400 decoration-2 underline-offset-4 hover:text-emerald-900">
              {f.sendAnother}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 w-full min-w-0">
      <form onSubmit={onSubmit} className="grid gap-4 rounded-xl bg-white border border-or-prestige/20 p-5 shadow-sm w-full overflow-hidden">
        {productName && <div className="label-mono rounded-md bg-muted px-3 py-2 text-ink/60">{f.product}: {productName}</div>}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="label-mono text-ink/50" htmlFor="full_name">{f.fullName} *</label>
            <input id="full_name" name="full_name" required className={`mt-1 ${inputClass} ${errors.full_name ? "border-red-500" : ""}`} />
            {errors.full_name && <p className="mt-1 flex items-center gap-1 text-xs text-red-600"><AlertCircle className="size-3" /> {errors.full_name}</p>}
          </div>
          <div>
            <label className="label-mono text-ink/50" htmlFor="company">{f.company}</label>
            <input id="company" name="company" className={`mt-1 ${inputClass}`} />
          </div>
          <div>
            <label className="label-mono text-ink/50" htmlFor="email">{f.email} *</label>
            <input id="email" name="email" type="email" required className={`mt-1 ${inputClass} ${errors.email ? "border-red-500" : ""}`} />
            {errors.email && <p className="mt-1 flex items-center gap-1 text-xs text-red-600"><AlertCircle className="size-3" /> {errors.email}</p>}
          </div>
          <div>
            <label className="label-mono text-ink/50" htmlFor="phone">{f.phone}</label>
            <input id="phone" name="phone" className={`mt-1 ${inputClass}`} />
          </div>
          <div>
            <label className="label-mono text-ink/50" htmlFor="country">{f.country}</label>
            <input id="country" name="country" className={`mt-1 ${inputClass}`} />
          </div>
          <div>
            <label className="label-mono text-ink/50" htmlFor="subject">{f.subject}</label>
            <input id="subject" name="subject" placeholder={f.subjectPlaceholder} className={`mt-1 ${inputClass}`} />
          </div>
        </div>
        <div>
          <label className="label-mono text-ink/50" htmlFor="message">{f.message} *</label>
          <textarea id="message" name="message" required rows={5} placeholder={f.messagePlaceholder} className={`mt-1 ${inputClass} ${errors.message ? "border-red-500" : ""}`} />
          {errors.message && <p className="mt-1 flex items-center gap-1 text-xs text-red-600"><AlertCircle className="size-3" /> {errors.message}</p>}
        </div>
        <button type="submit" disabled={pending} className="pill mt-2 rounded-md bg-gradient-to-b from-amberhot to-amber px-6 py-3 font-bold text-ink ring-1 ring-white/40 disabled:opacity-60 smooth-transition hover:shadow-lg">
          {pending ? f.submitting : f.submit}
        </button>
      </form>
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-or-prestige/20" />
        <span className="text-xs font-mono uppercase tracking-widest text-noir/40">{lang === "en" ? "or" : "ou"}</span>
        <div className="h-px flex-1 bg-or-prestige/20" />
      </div>
      <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(defaultSubject || (lang === "en" ? "Contact — MDG GLOBAL HOLDINGS" : "Contact — MDG GLOBAL HOLDINGS"))}&body=${encodeURIComponent(lang === "en" ? "Hello,\n\nI am contacting you regarding...\n\nKind regards," : "Bonjour,\n\nJe vous contacte concernant...\n\nCordialement,")}`}
        className="flex items-center justify-center gap-3 rounded-xl border-2 border-or-prestige/40 bg-white px-6 py-4 text-sm font-semibold text-noir smooth-transition hover:border-or-prestige hover:bg-or-prestige/5 hover:shadow-md">
        <svg className="size-5 text-or-prestige" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
        {f.writeEmail}
        <span className="text-xs text-noir/50 font-normal">{CONTACT_EMAIL}</span>
      </a>
    </div>
  );
}
