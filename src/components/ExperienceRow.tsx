import { ExternalLink } from "lucide-react";
import type { AcademicExperience } from "@/data/academic";

type ExperienceRowProps = {
  item: AcademicExperience;
};

export function ExperienceRow({ item }: ExperienceRowProps) {
  return (
    <article className="border-b border-black/10 py-6 last:border-b-0 sm:py-7">
      <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4 sm:gap-y-2">
        <h3 className="text-lg font-black leading-snug text-ink sm:text-2xl sm:leading-tight">
          {item.role}
        </h3>
        <p className="shrink-0 text-sm font-bold text-neutral-500">
          {item.period}
        </p>
      </div>
      <p className="mt-2 break-words text-sm font-medium leading-6 text-neutral-700 sm:text-base sm:leading-7">
        {item.organizationUrl ? (
          <a
            href={item.organizationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline items-center gap-1.5 transition hover:text-accent"
          >
            {item.organization}
            <ExternalLink size={14} className="ml-1 inline align-text-bottom" />
          </a>
        ) : (
          item.organization
        )}
        <span className="text-neutral-400"> · </span>
        {item.location}
      </p>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-600 sm:text-base">
        {item.description}
      </p>
    </article>
  );
}
