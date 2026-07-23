import type { Metadata } from "next";
import { Download } from "lucide-react";
import { DocumentRow } from "@/components/DocumentRow";
import { SectionLabel } from "@/components/SectionLabel";
import {
  academicCv,
  academicWorks,
  writingShelves,
} from "@/data/academic";

export const metadata: Metadata = {
  title: "Writing Library | Yasin Rahat",
  description:
    "Publications and selected research, book chapters, and policy papers across AI, international relations, policy, and transitional justice.",
};

export default function DocumentsPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-8 sm:py-20 lg:py-28">
        <SectionLabel>Writing Library</SectionLabel>
        <h1 className="text-4xl font-black leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
          Writing Library
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-700 sm:mt-8 sm:text-xl sm:leading-9">
          Selected academic writing across international relations, human
          rights, political economy, and policy—research first, then applied
          policy papers.
        </p>

        <article className="mt-8 grid gap-4 rounded-lg border border-black/10 bg-surface p-5 shadow-line sm:mt-10 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-5 sm:p-6">
          <div className="min-w-0">
            <p className="text-sm font-bold text-accent">Curriculum vitae</p>
            <h2 className="mt-2 text-xl font-black text-ink sm:text-2xl">
              {academicCv.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-neutral-600 sm:text-base">
              {academicCv.description}
            </p>
          </div>
          {academicCv.pdf ? (
            <a
              href={academicCv.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-accent sm:w-fit sm:py-2.5"
            >
              <Download size={16} />
              Open PDF
            </a>
          ) : (
            <span className="inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-warm px-5 py-3 text-sm font-bold text-neutral-500 sm:w-fit sm:py-2.5">
              PDF coming soon
            </span>
          )}
        </article>

        <div className="mt-12 space-y-12 sm:mt-14 sm:space-y-14">
          {writingShelves.map((shelf) => {
            const works = academicWorks.filter(
              (work) => work.shelf === shelf.id,
            );

            if (works.length === 0) {
              return null;
            }

            return (
              <section
                key={shelf.id}
                id={shelf.id}
                className="scroll-mt-24 sm:scroll-mt-28"
              >
                <div className="border-b border-black/10 pb-4">
                  <h2 className="text-2xl font-black text-ink sm:text-3xl">
                    {shelf.title}
                  </h2>
                  <p className="mt-2 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                    {shelf.description}
                  </p>
                </div>
                <div>
                  {works.map((work) => (
                    <DocumentRow key={work.id} work={work} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
