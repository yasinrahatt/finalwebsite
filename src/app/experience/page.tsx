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
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-8 sm:py-20 lg:py-28">
        <SectionLabel>Experience</SectionLabel>
        <h1 className="text-4xl font-black leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
          Academic Experience
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-700 sm:mt-8 sm:text-xl sm:leading-9">
          Teaching support, research assistance, and international
          collaboration across Tokyo International University, Montclair State
          University, and the Wilson Center.
        </p>

        <div className="mt-10 border-t border-black/10 sm:mt-12">
          {academicExperience.map((item) => (
            <ExperienceRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
