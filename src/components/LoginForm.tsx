"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const supabase = getSupabaseClient();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!supabase) {
      setMessage("Add your Supabase URL and anon key before logging in.");
      return;
    }

    setIsSending(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/admin`,
      },
    });

    setIsSending(false);
    setMessage(
      error
        ? error.message
        : "Check your email. The magic link will take you to the publisher.",
    );
  }

  if (!supabase) {
    return (
      <div className="rounded-lg border border-black/10 bg-surface p-6 shadow-line">
        <h2 className="text-2xl font-black text-ink">Publishing is not connected yet</h2>
        <p className="mt-4 text-lg leading-8 text-neutral-700">
          Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to
          `.env.local`, then restart the site.
        </p>
        <Link
          href="/admin"
          className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
        >
          View publisher setup
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-black/10 bg-surface p-6 shadow-line"
    >
      <label className="block">
        <span className="text-sm font-bold uppercase text-neutral-500">Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="mt-3 h-14 w-full rounded-lg border border-black/10 bg-paper px-4 text-lg outline-none transition focus:border-accent"
        />
      </label>
      <button
        type="submit"
        disabled={isSending}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Mail size={17} />
        {isSending ? "Sending link" : "Send login link"}
      </button>
      {message ? (
        <p className="mt-5 rounded-lg bg-warm p-4 text-neutral-700">{message}</p>
      ) : null}
    </form>
  );
}
