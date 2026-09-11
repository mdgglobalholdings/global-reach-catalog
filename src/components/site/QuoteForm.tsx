import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { AlertCircle } from "lucide-react";

import { submitQuoteRequest } from "@/lib/catalog.functions";

type Props = {
  productId?: string;
  productName?: string;
  defaultSubject?: string;
};

type FormErrors = {
  full_name?: string;
  email?: string;
  message?: string;
};

export function QuoteForm({ productId, productName, defaultSubject }: Props) {
  const submit = useServerFn(submitQuoteRequest);
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    
    // Validation client-side
    const newErrors: FormErrors = {};
    const full_name = String(fd.get("full_name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!full_name || full_name.length < 2) {
      newErrors.full_name = "Le nom complet est requis (minimum 2 caractères)";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Veuillez entrer une adresse email valide";
    }
    
    if (!message || message.length < 5) {
      newErrors.message = "La description est requise (minimum 5 caractères)";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Veuillez corriger les erreurs du formulaire");
      return;
    }

    setErrors({});
    setPending(true);
    try {
      await submit({
        data: {
          full_name,
          company: String(fd.get("company") ?? "") || undefined,
          email,
          phone: String(fd.get("phone") ?? "") || undefined,
          country: String(fd.get("country") ?? "") || undefined,
          subject: String(fd.get("subject") ?? "") || undefined,
          message,
          product_id: productId,
          product_name: productName,
        },
      });
      setDone(true);
      form.reset();
      toast.success("Demande envoyée. Nous revenons vers vous sous 24h.");
    } catch {
      toast.error("L'envoi a échoué. Réessayez ou contactez-nous par WhatsApp.");
    } finally {
      setPending(false);
    }
  }

  const inputClass =
    "w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-amber focus:ring-2 focus:ring-amber/30";

  if (done) {
    return (
      <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 p-6 ring-1 ring-emerald-200/50">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-full bg-emerald-100 p-1">
            <svg className="size-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-emerald-900">Demande reçue</h3>
            <p className="mt-2 text-sm text-emerald-700">
              Merci ! Votre demande est bien enregistrée. Notre équipe commerciale vous répond sous 24 heures
              ouvrées avec les disponibilités et une offre détaillée.
            </p>
            <p className="mt-3 text-xs text-emerald-600">
              📧 Vérifiez votre boîte email (et spam) | 💬 Vous pouvez aussi nous contacter par WhatsApp
            </p>
            <button
              type="button"
              onClick={() => setDone(false)}
              className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-700 underline decoration-emerald-400 decoration-2 underline-offset-4 hover:text-emerald-900"
            >
              ← Envoyer une autre demande
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-xl bg-card p-5 ring-1 ring-black/5">
      {productName ? (
        <div className="label-mono rounded-md bg-muted px-3 py-2 text-ink/60">
          Produit concerné : {productName}
        </div>
      ) : null}
      
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label-mono text-ink/50" htmlFor="full_name">
            Nom complet * {errors.full_name && <span className="text-red-600">*</span>}
          </label>
          <input 
            id="full_name" 
            name="full_name" 
            required 
            className={`mt-1 ${inputClass} ${errors.full_name ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}`}
            aria-invalid={!!errors.full_name}
          />
          {errors.full_name && (
            <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle className="size-3" /> {errors.full_name}
            </p>
          )}
        </div>
        <div>
          <label className="label-mono text-ink/50" htmlFor="company">
            Société
          </label>
          <input id="company" name="company" className={`mt-1 ${inputClass}`} />
        </div>
        <div>
          <label className="label-mono text-ink/50" htmlFor="email">
            E-mail * {errors.email && <span className="text-red-600">*</span>}
          </label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            required 
            className={`mt-1 ${inputClass} ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}`}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle className="size-3" /> {errors.email}
            </p>
          )}
        </div>
        <div>
          <label className="label-mono text-ink/50" htmlFor="phone">
            Téléphone / WhatsApp
          </label>
          <input id="phone" name="phone" className={`mt-1 ${inputClass}`} />
        </div>
        <div>
          <label className="label-mono text-ink/50" htmlFor="country">
            Pays
          </label>
          <input id="country" name="country" className={`mt-1 ${inputClass}`} />
        </div>
        <div>
          <label className="label-mono text-ink/50" htmlFor="subject">
            Objet
          </label>
          <input
            id="subject"
            name="subject"
            defaultValue={defaultSubject}
            className={`mt-1 ${inputClass}`}
          />
        </div>
      </div>
      
      <div>
        <label className="label-mono text-ink/50" htmlFor="message">
          Votre besoin * {errors.message && <span className="text-red-600">*</span>}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Type de matériel, quantité, délai souhaité, destination..."
          className={`mt-1 ${inputClass} ${errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}`}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
            <AlertCircle className="size-3" /> {errors.message}
          </p>
        )}
      </div>
      
      <button
        type="submit"
        disabled={pending}
        className="pill mt-2 rounded-md bg-gradient-to-b from-amberhot to-amber px-6 py-3 font-bold text-ink ring-1 ring-white/40 disabled:opacity-60 smooth-transition hover:shadow-lg"
      >
        {pending ? "Envoi..." : "Envoyer la demande"}
      </button>
    </form>
  );
}
