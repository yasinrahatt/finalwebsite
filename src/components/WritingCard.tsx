import Link from "next/link";
import type { Post } from "@/data/posts";
import { Pill } from "@/components/Pill";

type WritingCardProps = {
  post: Post;
};

export function WritingCard({ post }: WritingCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-black/10 bg-surface p-6 shadow-soft transition hover:-translate-y-1 hover:border-accent/30">
      <p className="text-sm font-bold text-accent">{post.type}</p>
      <h3 className="mt-5 text-2xl font-black leading-tight text-ink">
        <Link href={`/writing/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="mt-5 flex-1 text-base leading-8 text-neutral-600">
        {post.summary}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Pill key={tag}>{tag}</Pill>
        ))}
      </div>
    </article>
  );
}
