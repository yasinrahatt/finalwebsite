import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Academic Profile | Yasin Rahat",
  description:
    "Research interests, writing samples, academic CV, papers, and current research direction.",
};

const focusAreas = [
  "Digital propaganda and political communication",
  "Bangladesh student movements",
  "Authoritarianism and public narratives",
  "Migration and student mobility",
  "Education access",
  "AI systems for decision-making",
  "Document AI and automated essay scoring",
  "Policy analysis and public systems",
];

const sections = [
  {
    title: "Academic bio",
    body: "A concise academic biography for PhD committees, supervisors, and research collaborators. This space can hold current affiliation, education history, research direction, and relevant public work.",
  },
  {
    title: "Research interests",
    body: "Digital propaganda, political communication, Bangladesh student movements, migration, education access, and AI systems that shape decision-making in public institutions.",
  },
  {
    title: "Writing samples",
    body: "Selected essays, public analysis, research memos, and long-form writing samples will be linked here.",
  },
  {
    title: "Publications and papers",
    body: "A quiet list for research papers, working papers, conference submissions, and selected drafts.",
  },
  {
    title: "Policy papers",
    body: "Policy-facing work on student mobility, education access, digital politics, and public systems.",
  },
  {
    title: "Methods and skills",
    body: "Qualitative analysis, policy analysis, political communication, document AI, automated essay scoring, applied machine learning, and product research.",
  },
  {
    title: "CV download placeholder",
    body: "A downloadable academic CV can be added here when the file is ready.",
  },
  {
    title: "Google Scholar placeholder",
    body: "A Google Scholar profile link can be added here when the profile is public.",
  },
];

export default function AcademicPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Academic Profile</SectionLabel>
        <h1 className="text-5xl font-black leading-none text-ink sm:text-7xl">
          Academic Profile
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-700">
          Research interests, writing samples, academic CV, papers, and current
          research direction.
        </p>

        <div className="mt-12 rounded-lg border border-black/10 bg-surface p-6 shadow-line">
          <h2 className="text-2xl font-black text-ink">Academic focus areas</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <p
                key={area}
                className="rounded-lg bg-warm px-4 py-3 text-base font-medium text-neutral-700"
              >
                {area}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-lg border border-black/10 bg-surface p-6 shadow-line"
            >
              <h2 className="text-2xl font-black text-ink">{section.title}</h2>
              <p className="mt-4 text-lg leading-8 text-neutral-700">
                {section.body}
              </p>
            </article>
          ))}
          <article className="rounded-lg border border-black/10 bg-ink p-6 text-white shadow-line">
            <h2 className="text-2xl font-black">Contact</h2>
            <a
              href="mailto:2rahatyasin@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-lg text-white/80 transition hover:text-white"
            >
              <Mail size={18} />
              2rahatyasin@gmail.com
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
