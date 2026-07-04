import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Pill } from "@/components/Pill";
import { posts as staticPosts } from "@/data/posts";
import { getPublishedPostBySlug } from "@/lib/posts";

export const revalidate = 60;

type WritingPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return staticPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: WritingPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    return {
      title: "Writing | Yasin Rahat’s Memo",
    };
  }

  return {
    title: `${post.title} | Yasin Rahat’s Memo`,
    description: post.summary,
  };
}

export default async function WritingPostPage({
  params,
}: WritingPostPageProps) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-paper">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-sm font-bold text-accent"
        >
          <ArrowLeft size={16} />
          Back to writing
        </Link>

        <div className="mt-10 flex flex-wrap gap-2">
          <Pill tone="red">{post.type}</Pill>
          <Pill>{post.category}</Pill>
          <Pill>
            {new Intl.DateTimeFormat("en", {
              month: "long",
              day: "numeric",
              year: "numeric",
            }).format(new Date(post.date))}
          </Pill>
        </div>

        <h1 className="mt-8 text-5xl font-black leading-none text-ink sm:text-7xl">
          {post.title}
        </h1>
        <p className="mt-8 text-2xl leading-10 text-neutral-700">
          {post.summary}
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>

        <div className="mt-14 space-y-7 border-t border-black/10 pt-12 text-xl leading-10 text-neutral-800">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
