import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
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
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Writing Library</SectionLabel>
        <h1 className="text-5xl font-black leading-none text-ink sm:text-7xl">
          Writing Library
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-700">
          Selected academic writing across international relations, human
          rights, political economy, and policy—research first, then applied
          policy papers.
        </p>

        <article className="mt-10 grid gap-5 rounded-lg border border-black/10 bg-surface p-6 shadow-line sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex gap-4">
            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-warm text-ink">
              <FileText size={20} strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-sm font-bold text-accent">Curriculum vitae</p>
              <h2 className="mt-2 text-2xl font-black text-ink">
                {academicCv.title}
              </h2>
              <p className="mt-2 text-base leading-7 text-neutral-600">
                {academicCv.description}
              </p>
            </div>
          </div>
          {academicCv.pdf ? (
            <a
              href={academicCv.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:bg-accent"
            >
              <Download size={16} />
              Open PDF
            </a>
          ) : (
            <span className="inline-flex w-fit items-center rounded-full border border-black/10 bg-warm px-5 py-2.5 text-sm font-bold text-neutral-500">
              PDF coming soon
            </span>
          )}
        </article>

        <div className="mt-14 space-y-14">
          {writingShelves.map((shelf) => {
            const works = academicWorks.filter(
              (work) => work.shelf === shelf.id,
            );

            if (works.length === 0) {
              return null;
            }

            return (
              <section key={shelf.id} id={shelf.id} className="scroll-mt-28">
                <div className="border-b border-black/10 pb-4">
                  <h2 className="text-3xl font-black text-ink">
                    {shelf.title}
                  </h2>
                  <p className="mt-2 text-lg leading-8 text-neutral-600">
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
