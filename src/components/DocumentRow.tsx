import {
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
} from "lucide-react";
import { Pill } from "@/components/Pill";
import type { AcademicWork } from "@/data/academic";

type DocumentRowProps = {
  work: AcademicWork;
};

function LinkChip({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-surface px-3.5 py-1.5 text-xs font-bold text-ink shadow-line transition hover:border-accent hover:text-accent"
    >
      {label}
      <ExternalLink size={12} />
    </a>
  );
}

export function DocumentRow({ work }: DocumentRowProps) {
  const typeLabel = work.policyType ?? work.status;
  const links: { href: string; label: string }[] = [];

  if (work.doi) {
    const doiHref = work.doi.startsWith("http")
      ? work.doi
      : `https://doi.org/${work.doi.replace(/^doi:/i, "")}`;
    links.push({ href: doiHref, label: "DOI" });
  }
  if (work.journalUrl) {
    links.push({ href: work.journalUrl, label: "Journal" });
  }
  if (work.publisherUrl) {
    links.push({ href: work.publisherUrl, label: "Publisher" });
  }
  if (work.googleScholarLink) {
    links.push({ href: work.googleScholarLink, label: "Google Scholar" });
  }

  const metaParts: string[] = [];
  if (work.coAuthors && work.coAuthors.length > 0) {
    metaParts.push(`With ${work.coAuthors.join(", ")}`);
  }
  if (work.bookTitle) {
    metaParts.push(work.bookTitle);
  }
  if (work.publisher) {
    metaParts.push(work.publisher);
  }

  return (
    <article className="border-b border-black/10 py-6 last:border-b-0 sm:py-7">
      <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-5">
        <div className="flex min-w-0 gap-3 sm:gap-4">
          <div className="mt-1 hidden h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-warm text-ink sm:flex">
            {work.shelf === "publications" ? (
              <GraduationCap size={20} strokeWidth={1.75} />
            ) : (
              <FileText size={20} strokeWidth={1.75} />
            )}
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2">
              {typeLabel ? <Pill>{typeLabel}</Pill> : null}
              <Pill>{work.year}</Pill>
              {work.citationPending ? <Pill>Confirm citation</Pill> : null}
            </div>
            <h3 className="mt-3 text-lg font-black leading-snug text-ink sm:text-2xl sm:leading-tight">
              {work.title}
            </h3>
            {metaParts.length > 0 ? (
              <p className="mt-2 text-sm font-medium leading-6 text-neutral-500">
                {metaParts.join(" · ")}
              </p>
            ) : null}
            <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
              {work.description}
            </p>
            {links.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {links.map((link) => (
                  <LinkChip
                    key={link.label}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {work.pdf ? (
          <a
            href={work.pdf}
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
      </div>
    </article>
  );
}
