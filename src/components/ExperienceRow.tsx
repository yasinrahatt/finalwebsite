import { ExternalLink } from "lucide-react";
import type { AcademicExperience } from "@/data/academic";

type ExperienceRowProps = {
  item: AcademicExperience;
};

export function ExperienceRow({ item }: ExperienceRowProps) {
  return (
    <article className="border-b border-black/10 py-7 last:border-b-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <h3 className="text-xl font-black leading-tight text-ink sm:text-2xl">
          {item.role}
        </h3>
        <p className="text-sm font-bold text-neutral-500">{item.period}</p>
      </div>
      <p className="mt-2 text-base font-medium text-neutral-700">
        {item.organizationUrl ? (
          <a
            href={item.organizationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-accent"
          >
            {item.organization}
            <ExternalLink size={14} />
          </a>
        ) : (
          item.organization
        )}
        <span className="text-neutral-400"> · </span>
        {item.location}
      </p>
      <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-600">
        {item.description}
      </p>
    </article>
  );
}
