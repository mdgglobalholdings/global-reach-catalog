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
      <span className="absolute left-3 top-3 rounded bg-emeraude px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-white">
        Disponible
      </span>
    );
  }
  return (
    <span className="absolute left-3 top-3 rounded bg-noir/80 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-white">
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
      className="group block overflow-hidden rounded-xl bg-white border border-or-prestige/15 smooth-transition hover:shadow-xl hover:-translate-y-2 hover:border-or-prestige/50"
    >
      <div className="relative overflow-hidden bg-muted">
        {image ? (
          <img src={image} alt={product.name} loading="lazy" width={800} height={600}
            className="aspect-[4/3] w-full object-cover smooth-transition group-hover:scale-110 duration-500" />
        ) : (
          <div className="grid aspect-[4/3] w-full place-items-center bg-muted label-mono text-noir/25">
            <div className="text-center"><div className="text-3xl mb-2">📷</div>Photo à venir</div>
          </div>
        )}
        <Badge product={product} />
      </div>
      <div className="p-5">
        <div className="label-mono text-or-prestige">{product.brand ?? "MDG GLOBAL"}</div>
        <h3 className="mt-1.5 font-semibold leading-snug line-clamp-2 text-noir smooth-transition group-hover:text-or-prestige">
          {product.name}
        </h3>
        {product.year && <div className="label-mono mt-2 text-noir/40">Année {product.year}</div>}
        <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-3">
          <span className="font-mono text-[11px] text-noir/50 font-medium">
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
