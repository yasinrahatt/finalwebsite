"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import type { Session } from "@supabase/supabase-js";
import { Save, Send, ShieldCheck } from "lucide-react";
import {
  getSupabaseClient,
  publishingCategories,
  slugify,
  type PostStatus,
  type PublishingCategory,
} from "@/lib/supabase";

type FormState = {
  title: string;
  slug: string;
  date: string;
  category: PublishingCategory;
  summary: string;
  tags: string;
  content: string;
  status: PostStatus;
};

const initialForm: FormState = {
  title: "",
  slug: "",
  date: new Date().toISOString().slice(0, 10),
  category: "Founder Journal",
  summary: "",
  tags: "",
  content: "",
  status: "draft",
};

export function AdminPublisher() {
  const [session, setSession] = useState<Session | null>(null);
  const [form, setForm] = useState<FormState>(initialForm);
  const supabase = useMemo(() => getSupabaseClient(), []);
  const [isLoading, setIsLoading] = useState(() => Boolean(supabase));
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [slugWasEdited, setSlugWasEdited] = useState(false);

  useEffect(() => {
    if (!supabase) {
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setIsLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setForm((current) => ({
      ...current,
      [key]: value,
      slug:
        key === "title" && !slugWasEdited
          ? slugify(String(value))
          : current.slug,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!supabase || !session) {
      setMessage("Log in before saving a post.");
      return;
    }

    setIsSaving(true);
    setMessage("");

    const tags = form.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    const { error } = await supabase.from("blog_posts").insert({
      title: form.title,
      slug: form.slug,
      date: form.date,
      type: form.category,
      summary: form.summary,
      tags,
      category: form.category,
      content: form.content,
      status: form.status,
      author_id: session.user.id,
    });

    setIsSaving(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      form.status === "published"
        ? "Published. It will appear on the site after the next refresh."
        : "Saved as draft.",
    );
    setForm(initialForm);
    setSlugWasEdited(false);
  }

  if (!supabase) {
    return (
      <div className="rounded-lg border border-black/10 bg-surface p-6 shadow-line">
        <h2 className="text-2xl font-black text-ink">Connect Supabase first</h2>
        <p className="mt-4 text-lg leading-8 text-neutral-700">
          This publisher is ready, but it needs your Supabase project URL and
          anon key. Follow `PUBLISHING.md` and run the SQL in
          `supabase/schema.sql`.
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="rounded-lg border border-black/10 bg-surface p-6 text-neutral-700 shadow-line">
        Loading publisher...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="rounded-lg border border-black/10 bg-surface p-6 shadow-line">
        <h2 className="text-2xl font-black text-ink">Login required</h2>
        <p className="mt-4 text-lg leading-8 text-neutral-700">
          Use the private login page to send yourself a magic link.
        </p>
        <Link
          href="/login"
          className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-accent"
        >
          Go to login
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-black/10 bg-surface p-6 shadow-line"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block sm:col-span-2">
            <span className="text-sm font-bold uppercase text-neutral-500">Title</span>
            <input
              required
              value={form.title}
              onChange={(event) => updateField("title", event.target.value)}
              placeholder="A new note title"
              className="mt-3 h-14 w-full rounded-lg border border-black/10 bg-paper px-4 text-lg outline-none transition focus:border-accent"
            />
          </label>

          <label className="block">
            <span className="text-sm font-bold uppercase text-neutral-500">Slug</span>
            <input
              required
              value={form.slug}
              onChange={(event) => {
                setSlugWasEdited(true);
                updateField("slug", slugify(event.target.value));
              }}
              className="mt-3 h-14 w-full rounded-lg border border-black/10 bg-paper px-4 text-lg outline-none transition focus:border-accent"
            />
          </label>

          <label className="block">
            <span className="text-sm font-bold uppercase text-neutral-500">Date</span>
            <input
              type="date"
              required
              value={form.date}
              onChange={(event) => updateField("date", event.target.value)}
              className="mt-3 h-14 w-full rounded-lg border border-black/10 bg-paper px-4 text-lg outline-none transition focus:border-accent"
            />
          </label>

          <label className="block">
            <span className="text-sm font-bold uppercase text-neutral-500">Category</span>
            <select
              value={form.category}
              onChange={(event) =>
                updateField("category", event.target.value as PublishingCategory)
              }
              className="mt-3 h-14 w-full rounded-lg border border-black/10 bg-paper px-4 text-lg outline-none transition focus:border-accent"
            >
              {publishingCategories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-bold uppercase text-neutral-500">Status</span>
            <select
              value={form.status}
              onChange={(event) =>
                updateField("status", event.target.value as PostStatus)
              }
              className="mt-3 h-14 w-full rounded-lg border border-black/10 bg-paper px-4 text-lg outline-none transition focus:border-accent"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </label>

          <label className="block sm:col-span-2">
            <span className="text-sm font-bold uppercase text-neutral-500">Summary</span>
            <textarea
              required
              rows={3}
              value={form.summary}
              onChange={(event) => updateField("summary", event.target.value)}
              placeholder="A short description for cards and SEO."
              className="mt-3 w-full rounded-lg border border-black/10 bg-paper px-4 py-3 text-lg leading-8 outline-none transition focus:border-accent"
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="text-sm font-bold uppercase text-neutral-500">Tags</span>
            <input
              value={form.tags}
              onChange={(event) => updateField("tags", event.target.value)}
              placeholder="Study Abroad, AI, Founder Life"
              className="mt-3 h-14 w-full rounded-lg border border-black/10 bg-paper px-4 text-lg outline-none transition focus:border-accent"
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="text-sm font-bold uppercase text-neutral-500">Content</span>
            <textarea
              required
              rows={14}
              value={form.content}
              onChange={(event) => updateField("content", event.target.value)}
              placeholder="Write the post. Use blank lines between paragraphs."
              className="mt-3 w-full rounded-lg border border-black/10 bg-paper px-4 py-3 text-lg leading-8 outline-none transition focus:border-accent"
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={isSaving}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {form.status === "published" ? <Send size={17} /> : <Save size={17} />}
          {isSaving
            ? "Saving"
            : form.status === "published"
              ? "Publish post"
              : "Save draft"}
        </button>

        {message ? (
          <p className="mt-5 rounded-lg bg-warm p-4 text-neutral-700">{message}</p>
        ) : null}
      </form>

      <aside className="h-fit rounded-lg border border-black/10 bg-warm p-6 shadow-line">
        <div className="flex items-center gap-2 text-accent">
          <ShieldCheck size={20} />
          <span className="text-sm font-bold uppercase">Private publisher</span>
        </div>
        <p className="mt-5 text-base leading-7 text-neutral-700">
          Choose the category, write the post, and publish. Published posts can
          appear on the homepage and `/writing`; drafts stay private in
          Supabase.
        </p>
        <button
          type="button"
          onClick={() => supabase.auth.signOut()}
          className="mt-6 rounded-full border border-black/10 bg-surface px-5 py-2.5 text-sm font-bold text-ink shadow-line"
        >
          Sign out
        </button>
      </aside>
    </div>
  );
}
