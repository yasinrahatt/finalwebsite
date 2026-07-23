import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Compass,
  Coffee,
  Handshake,
  MapPin,
  NotebookPen,
  Train,
} from "lucide-react";
import { ArchiveSection } from "@/components/ArchiveSection";
import { Hero } from "@/components/Hero";
import { PodcastSection } from "@/components/PodcastSection";
import { SectionLabel } from "@/components/SectionLabel";
import { WritingCard } from "@/components/WritingCard";
import { getPublishedPosts } from "@/lib/posts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Memo | Yasin Rahat",
  description:
    "A public notebook on study abroad, thoughts about society and the world, AI, migration, founder life, and travel.",
};

const categories = [
  {
    title: "Founder Journal",
    description: "Building The Abroad Company, AbroadMates, and ApplicationMate.",
  },
  {
    title: "Thought Notes",
    description:
      "Short reflections on society, memory, power, and the world outside the self.",
  },
  {
    title: "Travel Stories",
    description:
      "Personal travel notes from cities, trains, campuses, and late walks.",
  },
  {
    title: "Podcast",
    description:
      "Study abroad conversations, Italy strategy, scholarships, and mentor stories.",
  },
];

const founderStories = [
  "Why I started The Abroad Company",
  "What AbroadMates taught me about trust",
  "Why ApplicationMate is more than software",
];

const travelStories = [
  {
    title: "Tokyo after rain",
    description: "Small streets, train platforms, convenience-store light.",
    icon: MapPin,
  },
  {
    title: "Dhaka in the margins",
    description: "Heat, family rooms, old roads, and things left unsaid.",
    icon: NotebookPen,
  },
  {
    title: "Window-seat notes",
    description: "The private theatre of buses, stations, and departures.",
    icon: Train,
  },
  {
    title: "Campus evenings",
    description: "Cafes, libraries, rented rooms, and becoming a student.",
    icon: Coffee,
  },
];

const mentorshipPoints = [
  "Study abroad direction",
  "Italy roadmap and scholarships",
  "Application strategy",
  "Personal decision-making",
];

const philosophySections = [
  {
    label: "Company philosophy",
    title: "AbroadMates should feel like trust, not a transaction.",
    body: "I believe a student company should operate with clarity, patience, and responsibility. AbroadMates should explain the real path, show the tradeoffs, protect students from pressure, and make every application feel less lonely.",
    icon: Building2,
  },
  {
    label: "Personal philosophy",
    title: "Pay attention, keep moving, and build something useful.",
    body: "I see life as a long practice of noticing people, places, systems, and small choices. I care about movement, memory, work, friendship, public life, and becoming the kind of person who leaves better tools behind.",
    icon: Compass,
  },
];

export default async function MemoPage() {
  const posts = (await getPublishedPosts()).slice(0, 3);

  return (
    <>
      <Hero />

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-20 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <article
            key={category.title}
            className="rounded-lg border border-black/10 bg-surface p-6 shadow-line"
          >
            <h2 className="text-xl font-black text-ink">{category.title}</h2>
            <p className="mt-5 text-base leading-7 text-neutral-600">
              {category.description}
            </p>
          </article>
        ))}
      </section>

      <section id="latest-notes" className="bg-warm">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionLabel>Writing</SectionLabel>
              <h2 className="text-5xl font-black leading-none text-ink sm:text-7xl">
                latest notes
              </h2>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-700">
                Essays, thought notes, founder journals, and travel stories
                from the same larger question: how people move through borders,
                institutions, memory, and change.
              </p>
            </div>
            <Link
              href="/writing"
              className="w-fit rounded-full border border-black/10 bg-surface px-5 py-3 text-sm font-bold text-ink shadow-line transition hover:border-accent hover:text-accent"
            >
              View all writing
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {posts.map((post) => (
              <WritingCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section id="founder-story" className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.82fr_1fr] lg:py-28">
          <div>
            <SectionLabel>Founder Story</SectionLabel>
            <h2 className="text-5xl font-black leading-none text-ink sm:text-7xl">
              building in public
            </h2>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-700">
              I write about building The Abroad Company, AbroadMates, and
              ApplicationMate from lived frustration: confusing applications,
              broken trust, agency gatekeeping, and the need for student-first
              tools.
            </p>
            <Link
              href="/writing"
              className="mt-9 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:bg-accent"
            >
              Read founder journal
            </Link>
          </div>
          <div className="grid gap-5">
            {founderStories.map((story) => (
              <article key={story} className="rounded-lg bg-warm p-7">
                <h3 className="text-2xl font-black leading-tight text-ink">
                  {story}
                </h3>
                <p className="mt-5 text-lg leading-8 text-neutral-700">
                  A founder note connecting product decisions with migration,
                  access, trust, and real student behavior.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="travel-stories" className="bg-warm">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1fr] lg:py-28">
          <div>
            <SectionLabel>Travel Stories</SectionLabel>
            <h2 className="text-5xl font-black leading-none text-ink sm:text-7xl">
              travel as a private diary
            </h2>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-700">
              I write travel like memory: late walks, station lights, borrowed
              rooms, campus evenings, and the quiet distance between who I was
              when I arrived and who I became before leaving.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {travelStories.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-lg border border-black/10 bg-surface p-7 shadow-line transition hover:-translate-y-1 hover:border-accent/30"
              >
                <Icon size={28} className="text-accent" />
                <h3 className="mt-8 text-2xl font-black leading-tight text-ink">
                  {title}
                </h3>
                <p className="mt-5 text-base leading-7 text-neutral-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PodcastSection />

      <section id="mentorship" className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1fr] lg:items-center lg:py-28">
          <div>
            <SectionLabel>Mentorship</SectionLabel>
            <h2 className="text-5xl font-black leading-none text-ink sm:text-7xl">
              book a one-on-one with me
            </h2>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-700">
              I mentor students through AbroadMates on study abroad choices,
              Italy strategy, scholarships, applications, and the personal
              questions that come with moving across borders.
            </p>
            <a
              href="https://www.abroadmates.com/rahat-yasin"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:bg-accent"
            >
              Book through AbroadMates
              <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="rounded-[28px] border border-black/10 bg-surface p-7 shadow-line">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white">
              <Handshake size={25} />
            </div>
            <h3 className="mt-8 max-w-xl text-3xl font-black leading-tight text-ink">
              A focused session for students who want honest direction before
              making big decisions.
            </h3>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {mentorshipPoints.map((point) => (
                <p
                  key={point}
                  className="rounded-lg bg-warm px-4 py-3 text-base font-semibold text-neutral-700"
                >
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ArchiveSection />

      <section id="life-philosophy" className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <SectionLabel>Philosophy</SectionLabel>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
            <h2 className="text-5xl font-black leading-none text-ink sm:text-7xl">
              My Life&apos;s Philosophy
            </h2>
            <p className="max-w-2xl text-xl leading-9 text-neutral-700">
              A simple place for the beliefs underneath the work: how I think a
              company should serve people, and how I try to move through life.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {philosophySections.map(({ label, title, body, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[28px] border border-black/10 bg-surface p-7 shadow-line"
              >
                <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-accent">
                  <Icon size={22} />
                  {label}
                </div>
                <h3 className="mt-8 text-3xl font-black leading-tight text-ink">
                  {title}
                </h3>
                <p className="mt-6 text-lg leading-8 text-neutral-700">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1fr] lg:py-28">
          <div>
            <SectionLabel>About</SectionLabel>
            <h2 className="max-w-3xl text-5xl font-black leading-none text-ink sm:text-7xl">
              About Yasin Rahat
            </h2>
            <p className="mt-8 max-w-xl text-xl leading-9 text-neutral-700">
              Founder, writer, builder, and student of how people create better
              futures through education, migration, technology, and public
              life.
            </p>
          </div>
          <div className="rounded-lg border border-black/10 bg-surface p-7 text-xl leading-9 text-neutral-700 shadow-line">
            <p>
              I am Yasin Rahat, founder of The Abroad Company and builder of
              AbroadMates and ApplicationMate. I build student-first tools and
              write about study abroad, migration, AI, society, founder life,
              and the ordinary decisions that shape opportunity.
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
          </div>
        </div>
      </section>
    </>
  );
}
