import type { Metadata } from "next";
import { SectionLabel } from "@/components/SectionLabel";
import { WritingCard } from "@/components/WritingCard";
import { getPublishedPosts } from "@/lib/posts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Writing | Yasin Rahat’s Memo",
  description:
    "Essays, founder journals, thought notes, and travel stories by Yasin Rahat.",
};

export default async function WritingPage() {
  const posts = await getPublishedPosts();

  return (
    <section className="bg-warm">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Writing</SectionLabel>
        <h1 className="max-w-4xl text-6xl font-black leading-none text-ink sm:text-8xl">
          latest notes
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-700">
          Essays, thought notes, founder journals, and travel stories from the
          same larger question: how people move through borders, institutions,
          memory, and change.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <WritingCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
