import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export type PostStatus = "draft" | "published";

export type BlogPostRow = {
  id?: string;
  title: string;
  slug: string;
  date: string;
  type: string;
  summary: string;
  tags: string[] | null;
  category: string;
  content: string;
  status: PostStatus;
  author_id?: string | null;
};

export const publishingCategories = [
  "Founder Journal",
  "Thought Notes",
  "Travel Stories",
  "Reading Notes",
  "Podcast",
  "Research",
] as const;

export type PublishingCategory = (typeof publishingCategories)[number];

export function getSupabaseClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return null;
  }

  return createClient(url, anonKey);
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
