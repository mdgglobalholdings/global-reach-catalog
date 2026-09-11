import { Link } from "@tanstack/react-router";

import type { ProductWithRelations } from "@/lib/catalog.server";
import { AVAILABILITY_LABELS } from "@/lib/company";

function Badge({ product }: { product: ProductWithRelations }) {
  if (product.is_new) {
    return (
      <span className="absolute left-2 top-2 rounded bg-gradient-to-b from-amberhot to-amber px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-ink">
        Nouveau
      </span>
    );
  }
  if (product.availability === "disponible") {
    return (
      <span className="absolute left-2 top-2 rounded bg-navy px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-white">
        Disponible
      </span>
    );
  }
  return (
    <span className="absolute left-2 top-2 rounded bg-chrome px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-ink ring-1 ring-black/10">
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
      className="group block overflow-hidden rounded-xl bg-card ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative overflow-hidden bg-chrome/20">
        {image ? (
          <img
            src={image}
            alt={product.name}
            loading="lazy"
            width={800}
            height={600}
            className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="grid aspect-[4/3] w-full place-items-center bg-chrome label-mono text-ink/30">
            <div className="text-center">
              <div className="text-2xl mb-2">📷</div>
              Photo à venir
            </div>
          </div>
        )}
        <Badge product={product} />
      </div>
      <div className="p-4">
        <div className="label-mono text-ink/45">{product.brand ?? "MDG"}</div>
        <h3 className="mt-1 font-semibold leading-tight line-clamp-2 text-ink group-hover:text-amberhot transition-colors">
          {product.name}
        </h3>
        {product.year && (
          <div className="label-mono mt-2 text-ink/40">Année : {product.year}</div>
        )}
        <div className="mt-3 flex items-center justify-between">
          <span className="font-mono text-[11px] text-ink/60 font-semibold">
            {product.price_text?.trim() ? product.price_text : "Sur demande"}
          </span>
          <span className="text-sm font-semibold text-amberhot smooth-transition group-hover:translate-x-1">
            Voir → 
          </span>
        </div>
      </div>
    </Link>
  );
}
