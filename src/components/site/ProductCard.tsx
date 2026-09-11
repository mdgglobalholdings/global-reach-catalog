import { Link } from "@tanstack/react-router";
import type { ProductWithRelations } from "@/lib/catalog.server";
import { AVAILABILITY_LABELS } from "@/lib/company";

function Badge({ product }: { product: ProductWithRelations }) {
  if (product.is_new) {
    return (
      <span className="absolute left-3 top-3 rounded bg-gradient-to-r from-or-prestige to-or-lumiere px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-noir">
        Nouveau
      </span>
    );
  }
  if (product.availability === "disponible") {
    return (
      <span className="absolute left-3 top-3 rounded bg-emeraude px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-or-lumiere">
        Disponible
      </span>
    );
  }
  return (
    <span className="absolute left-3 top-3 rounded bg-noir/70 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-ivoire/70 ring-1 ring-or-prestige/20">
      {AVAILABILITY_LABELS[product.availability] ?? product.availability}
    </span>
  );
}

export function ProductCard({ product }: { product: ProductWithRelations }) {
  const image = product.cover_url ?? product.product_images?.[0]?.url ?? null;

  return (
    <Link
      to="/catalogue/$slug"
      params={{ slug: product.slug }}
      className="group block overflow-hidden rounded-xl bg-emeraude/10 border border-or-prestige/15 smooth-transition hover:shadow-2xl hover:-translate-y-2 hover:border-or-prestige/50"
    >
      <div className="relative overflow-hidden bg-muted">
        {image ? (
          <img
            src={image}
            alt={product.name}
            loading="lazy"
            width={800}
            height={600}
            className="aspect-[4/3] w-full object-cover smooth-transition group-hover:scale-110 duration-500"
          />
        ) : (
          <div className="grid aspect-[4/3] w-full place-items-center bg-noir/5 label-mono text-foreground/20">
            <div className="text-center">
              <div className="text-3xl mb-2">📷</div>
              Photo à venir
            </div>
          </div>
        )}
        <Badge product={product} />
      </div>
      <div className="p-5">
        <div className="label-mono text-or-prestige/60">{product.brand ?? "MDG GLOBAL"}</div>
        <h3 className="mt-1.5 font-semibold leading-snug line-clamp-2 smooth-transition text-white group-hover:text-or-lumiere">
          {product.name}
        </h3>
        {product.year && (
          <div className="label-mono mt-2 text-foreground/35">Année {product.year}</div>
        )}
        <div className="mt-4 flex items-center justify-between border-t border-or-prestige/15 pt-3">
          <span className="font-mono text-[11px] text-white/60 font-medium">
            {product.price_text?.trim() ? product.price_text : "Prix sur demande"}
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-or-prestige smooth-transition group-hover:tracking-[0.25em]">
            Devis →
          </span>
        </div>
      </div>
    </Link>
  );
}
