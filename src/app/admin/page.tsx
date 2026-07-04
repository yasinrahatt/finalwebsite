import type { Metadata } from "next";
import { AdminPublisher } from "@/components/AdminPublisher";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Publisher | Yasin Rahat’s Memo",
  description: "Private blog publisher for Yasin Rahat’s Memo.",
};

export default function AdminPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Publisher</SectionLabel>
        <h1 className="text-5xl font-black leading-none text-ink sm:text-7xl">
          add a new piece
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-9 text-neutral-700">
          Write posts, choose a category, save drafts, and publish work to the
          site when Supabase is connected.
        </p>
        <div className="mt-10">
          <AdminPublisher />
        </div>
      </div>
    </section>
  );
}
