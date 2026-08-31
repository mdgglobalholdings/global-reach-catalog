import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import {
  fetchCategories,
  fetchProducts,
  fetchProductBySlug,
  fetchNews,
  fetchNewsBySlug,
  insertQuoteRequest,
} from "./catalog.server";

export const getCategories = createServerFn({ method: "GET" }).handler(async () =>
  fetchCategories(),
);

const productQuerySchema = z.object({
  category: z.string().optional(),
  search: z.string().optional(),
  availability: z.string().optional(),
  sort: z.string().optional(),
  featured: z.boolean().optional(),
  limit: z.number().optional(),
});

export const getProducts = createServerFn({ method: "GET" })
  .inputValidator((data: unknown) => productQuerySchema.parse(data ?? {}))
  .handler(async ({ data }) => fetchProducts(data));

export const getProduct = createServerFn({ method: "GET" })
  .inputValidator((data: unknown) => z.object({ slug: z.string() }).parse(data))
  .handler(async ({ data }) => fetchProductBySlug(data.slug));

export const getNews = createServerFn({ method: "GET" })
  .inputValidator((data: unknown) => z.object({ limit: z.number().optional() }).parse(data ?? {}))
  .handler(async ({ data }) => fetchNews(data.limit));

export const getNewsItem = createServerFn({ method: "GET" })
  .inputValidator((data: unknown) => z.object({ slug: z.string() }).parse(data))
  .handler(async ({ data }) => fetchNewsBySlug(data.slug));

const quoteSchema = z.object({
  full_name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  country: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(5),
  product_id: z.string().uuid().optional(),
  product_name: z.string().optional(),
});

export const submitQuoteRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => quoteSchema.parse(data))
  .handler(async ({ data }) => insertQuoteRequest(data));
