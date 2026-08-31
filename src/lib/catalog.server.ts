import { createClient } from "@supabase/supabase-js";

import type { Database } from "@/integrations/supabase/types";

export type Category = Database["public"]["Tables"]["categories"]["Row"];
export type Product = Database["public"]["Tables"]["products"]["Row"];
export type ProductImage = Database["public"]["Tables"]["product_images"]["Row"];
export type NewsItem = Database["public"]["Tables"]["news"]["Row"];

export type ProductWithRelations = Product & {
  categories: Pick<Category, "id" | "name" | "slug" | "parent_id"> | null;
  product_images: ProductImage[];
};

function client() {
  return createClient<Database>(
    process.env["SUPABASE_URL"]!,
    process.env["SUPABASE_PUBLISHABLE_KEY"]!,
    { auth: { storage: undefined, persistSession: false, autoRefreshToken: false } },
  );
}

export async function fetchCategories(): Promise<Category[]> {
  const { data, error } = await client()
    .from("categories")
    .select("*")
    .order("position", { ascending: true });
  if (error) throw new Error(error.message);
  return data ?? [];
}

export type ProductQuery = {
  category?: string;
  search?: string;
  availability?: string;
  sort?: string;
  featured?: boolean;
  limit?: number;
};

export async function fetchProducts(query: ProductQuery): Promise<ProductWithRelations[]> {
  const supabase = client();

  let categoryIds: string[] | null = null;
  if (query.category) {
    const { data: cats } = await supabase.from("categories").select("id, slug, parent_id");
    const match = (cats ?? []).find((c) => c.slug === query.category);
    if (match) {
      const children = (cats ?? []).filter((c) => c.parent_id === match.id).map((c) => c.id);
      categoryIds = [match.id, ...children];
    } else {
      return [];
    }
  }

  let req = supabase
    .from("products")
    .select("*, categories(id, name, slug, parent_id), product_images(*)")
    .eq("is_published", true);

  if (categoryIds) req = req.in("category_id", categoryIds);
  if (query.availability) req = req.eq("availability", query.availability);
  if (query.featured) req = req.eq("is_featured", true);
  if (query.search) {
    const term = `%${query.search}%`;
    req = req.or(`name.ilike.${term},brand.ilike.${term},model.ilike.${term},summary.ilike.${term}`);
  }

  switch (query.sort) {
    case "nom":
      req = req.order("name", { ascending: true });
      break;
    case "ancien":
      req = req.order("created_at", { ascending: true });
      break;
    default:
      req = req.order("created_at", { ascending: false });
  }

  if (query.limit) req = req.limit(query.limit);

  const { data, error } = await req;
  if (error) throw new Error(error.message);
  return (data ?? []) as ProductWithRelations[];
}

export async function fetchProductBySlug(slug: string): Promise<ProductWithRelations | null> {
  const { data, error } = await client()
    .from("products")
    .select("*, categories(id, name, slug, parent_id), product_images(*)")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return (data as ProductWithRelations | null) ?? null;
}

export async function fetchNews(limit?: number): Promise<NewsItem[]> {
  let req = client()
    .from("news")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false });
  if (limit) req = req.limit(limit);
  const { data, error } = await req;
  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function fetchNewsBySlug(slug: string): Promise<NewsItem | null> {
  const { data, error } = await client()
    .from("news")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data ?? null;
}

export async function insertQuoteRequest(
  payload: Database["public"]["Tables"]["quote_requests"]["Insert"],
) {
  const { error } = await client().from("quote_requests").insert(payload);
  if (error) throw new Error(error.message);
  return { ok: true };
}
