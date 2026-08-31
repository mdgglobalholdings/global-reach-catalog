import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";

import { submitQuoteRequest } from "@/lib/catalog.functions";

type Props = {
  productId?: string;
  productName?: string;
  defaultSubject?: string;
};

export function QuoteForm({ productId, productName, defaultSubject }: Props) {
  const submit = useServerFn(submitQuoteRequest);
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    setPending(true);
    try {
      await submit({
        data: {
          full_name: String(fd.get("full_name") ?? ""),
          company: String(fd.get("company") ?? "") || undefined,
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? "") || undefined,
          country: String(fd.get("country") ?? "") || undefined,
          subject: String(fd.get("subject") ?? "") || undefined,
          message: String(fd.get("message") ?? ""),
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
      <div className="rounded-xl bg-card p-6 ring-1 ring-black/5">
        <div className="eyebrow text-amberhot">Merci</div>
        <p className="mt-3 text-sm text-muted-foreground">
          Votre demande est bien enregistrée. Notre équipe commerciale vous répond sous 24 heures
          ouvrées avec les disponibilités et une offre adaptée.
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-ink underline decoration-amber decoration-2 underline-offset-4"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 rounded-xl bg-card p-5 ring-1 ring-black/5">
      {productName ? (
        <div className="label-mono rounded-md bg-muted px-3 py-2 text-ink/60">
          Produit concerné : {productName}
        </div>
      ) : null}
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="label-mono text-ink/50" htmlFor="full_name">
            Nom complet *
          </label>
          <input id="full_name" name="full_name" required className={`mt-1 ${inputClass}`} />
        </div>
        <div>
          <label className="label-mono text-ink/50" htmlFor="company">
            Société
          </label>
          <input id="company" name="company" className={`mt-1 ${inputClass}`} />
        </div>
        <div>
          <label className="label-mono text-ink/50" htmlFor="email">
            E-mail *
          </label>
          <input id="email" name="email" type="email" required className={`mt-1 ${inputClass}`} />
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
          Votre besoin *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Type de matériel, quantité, délai souhaité, destination..."
          className={`mt-1 ${inputClass}`}
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="pill mt-1 rounded-md bg-gradient-to-b from-amberhot to-amber px-6 py-3 font-bold text-ink ring-1 ring-white/40 disabled:opacity-60"
      >
        {pending ? "Envoi..." : "Envoyer la demande"}
      </button>
    </form>
  );
}
