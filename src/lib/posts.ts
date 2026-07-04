import { posts as staticPosts, type Post } from "@/data/posts";
import { getSupabaseClient, type BlogPostRow } from "@/lib/supabase";

const postSelect = "title, slug, date, type, summary, tags, category, content, status";

function mapRowToPost(row: BlogPostRow): Post {
  return {
    title: row.title,
    slug: row.slug,
    date: row.date,
    type: row.type,
    summary: row.summary,
    tags: row.tags ?? [],
    category: row.category,
    content: row.content
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean),
  };
}

export async function getPublishedPosts() {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return staticPosts;
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .select(postSelect)
    .eq("status", "published")
    .order("date", { ascending: false });

  if (error || !data) {
    return staticPosts;
  }

  const publishedPosts = (data as BlogPostRow[]).map(mapRowToPost);
  const publishedSlugs = new Set(publishedPosts.map((post) => post.slug));
  const fallbackPosts = staticPosts.filter((post) => !publishedSlugs.has(post.slug));

  return [...publishedPosts, ...fallbackPosts];
}

export async function getPublishedPostBySlug(slug: string) {
  const supabase = getSupabaseClient();

  if (supabase) {
    const { data } = await supabase
      .from("blog_posts")
      .select(postSelect)
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();

    if (data) {
      return mapRowToPost(data as BlogPostRow);
    }
  }

  return staticPosts.find((post) => post.slug === slug);
}
