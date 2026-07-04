"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { archiveItems, workSections } from "@/data/archive";
import { Pill } from "@/components/Pill";
import { SectionLabel } from "@/components/SectionLabel";

export function ArchiveSection() {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return archiveItems;
    }

    return archiveItems.filter((item) =>
      [item.title, item.type, item.year, item.topic]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  return (
    <section id="archive" className="bg-warm">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <SectionLabel>Research</SectionLabel>
            <h2 className="text-5xl font-black leading-none text-ink sm:text-7xl">
              My Academics and Research
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-700">
              A searchable shelf for policy papers, policy briefs, research
              papers, book chapters, op-eds, and selected public-facing
              academic work.
            </p>
          </div>

          <label className="relative block">
            <span className="sr-only">Search research</span>
            <Search
              size={20}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-neutral-500"
            />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search research"
              className="h-14 w-full rounded-full border border-black/10 bg-surface pl-14 pr-5 text-base outline-none shadow-line transition placeholder:text-neutral-400 focus:border-accent"
            />
          </label>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {workSections.map((section) => (
            <article
              key={section.title}
              className="rounded-lg border border-black/10 bg-surface p-5 shadow-line"
            >
              <h3 className="text-xl font-black leading-tight text-ink">
                {section.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-neutral-600">
                {section.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4">
          {filteredItems.map((item) => (
            <article
              key={item.title}
              className="grid gap-5 rounded-lg border border-black/10 bg-surface p-6 shadow-line sm:grid-cols-[1fr_auto] sm:items-center"
            >
              <div>
                <div className="flex flex-wrap gap-2">
                  <Pill>{item.type}</Pill>
                  <Pill>{item.year}</Pill>
                  <Pill>{item.topic}</Pill>
                </div>
                <h3 className="mt-4 text-xl font-black leading-tight text-ink sm:text-2xl">
                  {item.title}
                </h3>
              </div>
              <button
                type="button"
                className="w-fit rounded-full border border-black/10 bg-surface px-5 py-2.5 text-sm font-bold text-ink shadow-line"
                aria-label={`Open ${item.title}`}
              >
                Open
              </button>
            </article>
          ))}
        </div>

        {filteredItems.length === 0 ? (
          <p className="mt-8 rounded-lg border border-black/10 bg-surface p-6 text-neutral-600 shadow-line">
            No research items match that search yet.
          </p>
        ) : null}
      </div>
    </section>
  );
}
