export type ArchiveItem = {
  title: string;
  type: string;
  year: string;
  topic: string;
};

export type WorkSection = {
  title: string;
  description: string;
};

export const workSections: WorkSection[] = [
  {
    title: "Policy paper",
    description: "Long-form policy arguments, evidence, and public systems analysis.",
  },
  {
    title: "Policy briefs",
    description: "Shorter, practical notes for institutions, programs, and decision-makers.",
  },
  {
    title: "Research papers",
    description: "Academic and technical papers across AI, mobility, politics, and education.",
  },
  {
    title: "Book chapters",
    description: "Longer reflective chapters for edited volumes and future collections.",
  },
  {
    title: "Op-ed",
    description: "Public-facing opinion essays on society, students, power, and opportunity.",
  },
];

export const archiveItems: ArchiveItem[] = [
  {
    title: "Digital Disinformation and the 2024 Bangladesh Quota Reform Protests",
    type: "Policy paper",
    year: "2025",
    topic: "Digital Propaganda",
  },
  {
    title: "Automated Essay Scoring with Availability Signals and Genetic Algorithms",
    type: "Research papers",
    year: "2026",
    topic: "AI and Document Engineering",
  },
  {
    title: "AI for Predicting Skill Deficits in Underprivileged Areas",
    type: "Research papers",
    year: "2025",
    topic: "AI for Development",
  },
  {
    title: "Italy as a Study Destination for Bangladeshi Students",
    type: "Policy briefs",
    year: "2026",
    topic: "Education and Migration",
  },
  {
    title: "Students, Borders, and the Quiet Work of Becoming",
    type: "Book chapters",
    year: "2026",
    topic: "Student Mobility",
  },
  {
    title: "Why Two Bangladeshi Students Decided to Fix Study Abroad Guidance",
    type: "Op-ed",
    year: "2025",
    topic: "Founder Story",
  },
];
