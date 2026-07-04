import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "About | Yasin Rahat’s Memo",
  description:
    "About Yasin Rahat, founder, writer, and builder of student-first tools.",
};

export default function AboutPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1fr] lg:py-28">
        <div>
          <SectionLabel>About</SectionLabel>
          <h1 className="max-w-3xl text-5xl font-black leading-none text-ink sm:text-7xl">
            About Yasin Rahat
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-9 text-neutral-700">
            Founder, writer, builder, and student of how people create better
            futures through education, migration, technology, and public life.
          </p>
        </div>
        <div className="rounded-lg border border-black/10 bg-surface p-7 text-xl leading-9 text-neutral-700 shadow-line">
          <p>
            I am Yasin Rahat, founder of The Abroad Company and builder of
            AbroadMates and ApplicationMate. I build student-first tools and
            write about study abroad, migration, AI, society, founder life, and
            the ordinary decisions that shape opportunity.
          </p>
          <p className="mt-6">
            This public website keeps my work in one place: founder journal,
            thought notes, travel stories, podcast conversations, public
            research, and long-form thoughts.
          </p>
          <p className="mt-6">
            My academic profile stays separate as a quiet page for PhD
            committees, supervisors, research samples, CV, papers, and Google
            Scholar.
          </p>
          <Link
            href="/academic"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:bg-accent"
          >
            Academic profile
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
