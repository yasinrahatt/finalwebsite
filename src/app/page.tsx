import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Mail, Newspaper } from "lucide-react";
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
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
          <h1 className="text-5xl font-black leading-none text-ink sm:text-7xl">
            Yasin Rahat
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-700">
            {academicBio}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#research-focus"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:bg-accent"
            >
              Know more
              <ArrowRight size={16} />
            </a>
            <Link
              href="/documents"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-surface px-6 py-3 text-sm font-bold text-ink shadow-line transition hover:border-accent/40"
            >
              Writing
            </Link>
          </div>

          <div id="research-focus" className="mt-16 scroll-mt-28">
            <h2 className="text-3xl font-black text-ink">Research focus</h2>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-neutral-600">
              Current interests spanning politics, mobility, education, and AI.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="border-l-2 border-accent/70 bg-warm/80 px-4 py-3 text-base font-medium text-neutral-700"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-black text-ink">Methods and skills</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {methodsAndSkills.map((skill) => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warm">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-black/10 pb-4">
            <div>
              <h2 className="text-3xl font-black text-ink">
                Academic experience
              </h2>
              <p className="mt-2 max-w-2xl text-lg leading-8 text-neutral-600">
                Teaching support, research assistance, and international
                collaboration.
              </p>
            </div>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-surface px-5 py-2.5 text-sm font-bold text-ink shadow-line transition hover:border-accent hover:text-accent"
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

      <section id="writing-samples" className="scroll-mt-28 bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="border-b border-black/10 pb-4">
            <h2 className="text-3xl font-black text-ink">Writing Library</h2>
            <p className="mt-2 max-w-2xl text-lg leading-8 text-neutral-600">
              Selected research and policy writing—open a category to read the
              PDFs.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
                  className="group rounded-lg border border-black/10 bg-surface p-6 shadow-line transition hover:-translate-y-1 hover:border-accent/30"
                >
                  <h3 className="text-xl font-black leading-tight text-ink">
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
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="border-b border-black/10 pb-4">
            <h2 className="text-3xl font-black text-ink">
              Published in policy analysis media
            </h2>
            <p className="mt-2 max-w-2xl text-lg leading-8 text-neutral-600">
              Articles and analysis published in policy and international
              affairs outlets.
            </p>
          </div>
          <div>
            {mediaPublications.map((article) => (
              <article
                key={article.id}
                className="grid gap-5 border-b border-black/10 py-6 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div className="flex gap-4">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface text-ink shadow-line">
                    <Newspaper size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <Pill>{article.outlet}</Pill>
                      <Pill>{article.date}</Pill>
                    </div>
                    <h3 className="mt-3 text-xl font-black leading-tight text-ink sm:text-2xl">
                      {article.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-base leading-7 text-neutral-600">
                      {article.description}
                    </p>
                  </div>
                </div>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:bg-accent"
                >
                  Read article
                  <ExternalLink size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-5 pb-20 sm:px-8 lg:pb-28">
          <article className="rounded-lg bg-ink p-6 text-white shadow-line sm:p-8">
            <h2 className="text-2xl font-black">Academic contact</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/75">
              For PhD committees, supervisors, research samples, or
              collaboration inquiries.
            </p>
            <a
              href="mailto:2rahatyasin@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-lg text-white/85 transition hover:text-white"
            >
              <Mail size={18} />
              2rahatyasin@gmail.com
            </a>
          </article>
        </div>
      </section>
    </>
  );
}
