import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Newspaper } from "lucide-react";
import { ExperienceRow } from "@/components/ExperienceRow";
import { Pill } from "@/components/Pill";
import {
  academicBio,
  academicExperience,
  academicWorks,
  focusAreas,
  mediaPublications,
  methodsAndSkills,
  writingShelves,
} from "@/data/academic";

export const metadata: Metadata = {
  title: "Yasin Rahat — Academic Profile",
  description:
    "Research interests, academic experience, writing samples, CV, papers, and current research direction.",
};

export default function HomePage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-8 sm:py-20 lg:py-28">
          <h1 className="text-4xl font-black leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
            Yasin Rahat
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-700 sm:mt-8 sm:text-xl sm:leading-9">
            {academicBio}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            <a
              href="#research-focus"
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-accent sm:flex-none sm:px-6"
            >
              Know more
              <ArrowRight size={16} />
            </a>
            <Link
              href="/documents"
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-black/10 bg-surface px-5 py-3 text-sm font-bold text-ink shadow-line transition hover:border-accent/40 sm:flex-none sm:px-6"
            >
              Writing
            </Link>
          </div>

          <div id="research-focus" className="mt-12 scroll-mt-24 sm:mt-16 sm:scroll-mt-28">
            <h2 className="text-2xl font-black text-ink sm:text-3xl">
              Research focus
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              Current interests spanning politics, mobility, education, and AI.
            </p>
            <ul className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="border-l-2 border-accent/70 bg-warm/80 px-4 py-3 text-sm font-medium text-neutral-700 sm:text-base"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 sm:mt-16">
            <h2 className="text-2xl font-black text-ink sm:text-3xl">
              Methods and skills
            </h2>
            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
              {methodsAndSkills.map((skill) => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warm">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-8 sm:py-16 lg:py-20">
          <div className="flex flex-col gap-4 border-b border-black/10 pb-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-black text-ink sm:text-3xl">
                Academic experience
              </h2>
              <p className="mt-2 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                Teaching support, research assistance, and international
                collaboration.
              </p>
            </div>
            <Link
              href="/experience"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-surface px-5 py-2.5 text-sm font-bold text-ink shadow-line transition hover:border-accent hover:text-accent"
            >
              View all experience
              <ArrowRight size={16} />
            </Link>
          </div>
          <div>
            {academicExperience.map((item) => (
              <ExperienceRow key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="writing-samples" className="scroll-mt-24 bg-paper sm:scroll-mt-28">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-8 sm:py-16 lg:py-20">
          <div className="border-b border-black/10 pb-4">
            <h2 className="text-2xl font-black text-ink sm:text-3xl">
              Writing Library
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              Selected research and policy writing—open a category to read the
              PDFs.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
            {writingShelves.map((shelf) => {
              const count = academicWorks.filter(
                (work) => work.shelf === shelf.id,
              ).length;

              if (count === 0) {
                return null;
              }

              return (
                <Link
                  key={shelf.id}
                  href={`/documents#${shelf.id}`}
                  className="group rounded-lg border border-black/10 bg-surface p-5 shadow-line transition hover:-translate-y-1 hover:border-accent/30 sm:p-6"
                >
                  <h3 className="text-lg font-black leading-tight text-ink sm:text-xl">
                    {shelf.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {shelf.description}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ink transition group-hover:text-accent">
                    {count} {count === 1 ? "work" : "works"}
                    <ArrowRight size={15} />
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-warm">
        <div className="mx-auto max-w-5xl px-4 py-12 pb-16 sm:px-8 sm:py-16 sm:pb-20 lg:py-20 lg:pb-28">
          <div className="border-b border-black/10 pb-4">
            <h2 className="text-2xl font-black text-ink sm:text-3xl">
              Published in policy analysis media
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              Articles and analysis published in policy and international
              affairs outlets.
            </p>
          </div>
          <div>
            {mediaPublications.map((article) => (
              <article
                key={article.id}
                className="grid gap-4 border-b border-black/10 py-6 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-5"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap gap-2">
                    <Pill>{article.outlet}</Pill>
                    <Pill>{article.date}</Pill>
                  </div>
                  <h3 className="mt-3 text-lg font-black leading-snug text-ink sm:text-2xl sm:leading-tight">
                    {article.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
                    {article.description}
                  </p>
                </div>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-accent sm:w-fit sm:py-2.5"
                >
                  Read article
                  <ExternalLink size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
