import type { Metadata } from "next";
import { ExperienceRow } from "@/components/ExperienceRow";
import { SectionLabel } from "@/components/SectionLabel";
import { academicExperience } from "@/data/academic";

export const metadata: Metadata = {
  title: "Experience | Yasin Rahat",
  description:
    "Academic experience: teaching support, research assistance, and international collaboration.",
};

export default function ExperiencePage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Experience</SectionLabel>
        <h1 className="text-5xl font-black leading-none text-ink sm:text-7xl">
          Academic Experience
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-700">
          Teaching support, research assistance, and international
          collaboration across Tokyo International University, Montclair State
          University, and the Wilson Center.
        </p>

        <div className="mt-12 border-t border-black/10">
          {academicExperience.map((item) => (
            <ExperienceRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
