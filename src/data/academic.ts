/**
 * Academic writing library (static).
 *
 * PDFs live in public/academic/. Set `pdf` to "/academic/....pdf".
 * Hungaricum application packet is kept in public/academic/_excluded/ (not listed).
 */

export const academicBio =
  "An aspiring researcher exploring digital propaganda, public communication, and the role of AI systems in shaping public decision-making, authoritarianism, and political narratives.";

export const focusAreas = [
  "Digital propaganda and political communication",
  "Authoritarianism and public narratives",
  "Migration and student mobility",
  "Policy analysis and public systems",
];

export const methodsAndSkills = [
  "Qualitative analysis",
  "Quantitative analysis",
  "Policy analysis",
  "Political communication",
];

export type AcademicExperience = {
  id: string;
  role: string;
  organization: string;
  organizationUrl?: string;
  location: string;
  period: string;
  description: string;
};

/** Reverse chronological */
export const academicExperience: AcademicExperience[] = [
  {
    id: "ra-iis",
    role: "Research Assistant",
    organization: "Institute for International Strategy and Emerging Technologies",
    organizationUrl: "https://tiu-iis.org",
    location: "Tokyo International University",
    period: "December 2025 – April 2026",
    description:
      "Supported Professor Christopher Lamont on research and publication work, including editing a book chapter, reviewing external research, and assisting with related scholarly preparation.",
  },
  {
    id: "aros-collaborator",
    role: "International Collaborator",
    organization: "Project AROS Lab",
    organizationUrl: "https://www.montclair.edu/project-aros-lab/",
    location: "Montclair State University",
    period: "September 2024 – August 2025",
    description:
      "Contributed to an international research collaboration linking Tokyo International University, Montclair State University, and the Wilson Center, supporting cross-institutional academic exchange over a one-year appointment.",
  },
  {
    id: "sa-human-rights",
    role: "Student Assistant",
    organization: "Human Rights",
    location: "Tokyo International University",
    period: "Fall 2020",
    description:
      "Assisted Professor Christopher Lamont, Dean of International Relations, with course operations for the Human Rights class, including exam preparation and attendance. This was a one-semester appointment and a first experience in instructional support.",
  },
];

/** Optional external profile — set when ready */
export const googleScholarUrl: string | null = null;

export type WorkStatus =
  | "Published"
  | "Forthcoming"
  | "Undergraduate Thesis"
  | "Research Paper"
  | "Working Paper"
  | "Under Review";

export type PolicyType =
  | "Position Paper"
  | "Policy Memo"
  | "Policy Paper"
  | "Policy Commentary"
  | "Policy Analysis";

export type WritingShelfId =
  | "publications"
  | "book-chapters"
  | "policy-papers";

export type AcademicWork = {
  id: string;
  shelf: WritingShelfId;
  title: string;
  year: string;
  description: string;
  /** Publications & Selected Research */
  status?: WorkStatus;
  /** Policy Papers type label */
  policyType?: PolicyType;
  /** Book chapters */
  coAuthors?: string[];
  bookTitle?: string;
  publisher?: string;
  /** Citation / access links — null until available */
  doi?: string | null;
  journalUrl?: string | null;
  publisherUrl?: string | null;
  googleScholarLink?: string | null;
  pdf?: string | null;
  /** True until exact published title/DOI are confirmed */
  citationPending?: boolean;
};

/**
 * Writing Library works currently on the site (PDFs in public/academic/).
 * Hungaricum application packet is excluded from the public library.
 * Add published AI papers / book chapters here when files and citations are ready.
 */
export const academicWorks: AcademicWork[] = [
  // —— Publications & Selected Research ——
  {
    id: "ba-thesis",
    shelf: "publications",
    title:
      "An Assessment of Potential Effectiveness: Analyzing the Mandate and Political Constraints of the Commission of Inquiry in Bangladesh",
    year: "2026",
    description:
      "Bachelor of Arts thesis, School of International Relations, Tokyo International University, examining the mandate and political constraints of Bangladesh's Commission of Inquiry.",
    status: "Undergraduate Thesis",
    pdf: "/academic/ba-thesis.pdf",
  },
  {
    id: "human-rights-research",
    shelf: "publications",
    title:
      "Neo-Slavery: Human Rights Violations of Migrant Construction Workers in the UAE",
    year: "2024",
    description:
      "Research paper on labor exploitation and human rights violations facing migrant construction workers in the United Arab Emirates.",
    status: "Research Paper",
    pdf: "/academic/human-rights-research-paper.pdf",
  },
  {
    id: "ir-china",
    shelf: "publications",
    title:
      "A Comparative Study of China–Bangladesh Relations: From the Status-Quo Period (1975–2001) to a 'More Revisionist' Period (2016–Present)",
    year: "2024",
    description:
      "Comparative analysis of China–Bangladesh relations across two eras, tracing the shift from status-quo diplomacy toward a more revisionist posture.",
    status: "Research Paper",
    pdf: "/academic/ir-china-final-paper.pdf",
  },
  {
    id: "ir-europe",
    shelf: "publications",
    title:
      "EU Trade Policy Expectations vs. Ground Realities: Human Rights and Labor Standards in Bangladesh's Fashion Industry",
    year: "2024",
    description:
      "Research paper on the gap between EU trade policy expectations and labor conditions in Bangladesh's garment industry.",
    status: "Research Paper",
    pdf: "/academic/ir-of-europe-research-paper.pdf",
  },
  {
    id: "political-economy",
    shelf: "publications",
    title:
      "Comparing the Effects of Political Uprising on Foreign Direct Investment Flows in Bangladesh and Sri Lanka: Evidence from the Immediate Aftermath",
    year: "2025",
    description:
      "Political economy analysis of how political uprisings affected FDI flows in Bangladesh and Sri Lanka in the immediate aftermath.",
    status: "Research Paper",
    pdf: "/academic/political-economy-paper.pdf",
  },
  // —— Book Chapters ——
  {
    id: "book-chapter-7",
    shelf: "book-chapters",
    title:
      "Justicecraft in the Age of Disinformation: Narratives and Counter-Narratives",
    year: "2026",
    description:
      "Chapter examining how disinformation and counter-narratives shaped Bangladesh's July 2024 Quota Reform Movement and the political uprising that followed, framed through Justicecraft.",
    coAuthors: ["Mahima Janin Shara", "Samina Luthfa"],
    status: "Forthcoming",
    pdf: "/academic/chapter-7-justicecraft-disinformation.pdf",
  },
  {
    id: "book-chapter-8",
    shelf: "book-chapters",
    title: "After Hijacked Justice: Rethinking Accountability Mechanisms",
    year: "2026",
    description:
      "Chapter critically examining the prospects for transitional justice in Bangladesh after the 2024 student-led uprising, including civil-society proposals for truth-telling, reparations, and institutional reform.",
    coAuthors: ["Shawlin Shahrier", "Christopher K. Lamont"],
    status: "Forthcoming",
    pdf: "/academic/chapter-8-after-hijacked-justice.pdf",
  },

  // —— Policy Papers ——
  {
    id: "asean-article",
    shelf: "policy-papers",
    title:
      "ASEAN in the Age of AI: How Technology Governance Tests ASEAN's Strategic Autonomy",
    year: "2026",
    description:
      "Policy analysis of how AI, semiconductors, and Indo-Pacific minilateral frameworks are testing ASEAN's consensus-based diplomacy and strategic autonomy.",
    policyType: "Policy Analysis",
    pdf: "/academic/asean-article.pdf",
  },
  {
    id: "position-maldives",
    shelf: "policy-papers",
    title:
      "Position Paper: The Republic of Maldives on Climate Action",
    year: "2025",
    description:
      "Position paper representing the Republic of Maldives, arguing for urgent collective climate action for a nation facing existential sea-level rise.",
    policyType: "Position Paper",
    pdf: "/academic/position-paper-maldives.pdf",
  },
  {
    id: "policy-memo-sea",
    shelf: "policy-papers",
    title:
      "Policy Memo: Regional Crisis-Management Mechanisms and Bangladesh",
    year: "2025",
    description:
      "Policy memo to the National Security Advisor of Bangladesh on the 2025 IISS Shangri-La Dialogue, regional crisis-management mechanisms, and the humanitarian corridor dilemma in Myanmar's Rakhine State.",
    policyType: "Policy Memo",
    pdf: "/academic/policy-memo-southeast-asia.pdf",
  },
  {
    id: "oped-sea",
    shelf: "policy-papers",
    title:
      "Minilaterals Are ASEAN's Way Out of the Tech War, Not Passive Hedging",
    year: "2026",
    description:
      "Op-ed arguing that ASEAN should engage Indo-Pacific minilaterals such as AUKUS, the Quad, and IPEF rather than rely on passive hedging in the US–China tech rivalry.",
    policyType: "Policy Commentary",
    pdf: "/academic/oped-southeast-asia.pdf",
  },
];

export const writingShelves: {
  id: WritingShelfId;
  title: string;
  description: string;
}[] = [
  {
    id: "publications",
    title: "Publications & Selected Research",
    description:
      "Undergraduate thesis and selected research papers in international relations, human rights, and political economy.",
  },
  {
    id: "book-chapters",
    title: "Book Chapters",
    description:
      "Collaborative chapters with title, co-authors, book, publisher, status, and links when available.",
  },
  {
    id: "policy-papers",
    title: "Policy Papers",
    description:
      "Applied policy writing labeled as position paper, policy memo, policy paper, or policy commentary.",
  },
];

/** CV kept separate from the Writing Library works */
export const academicCv = {
  title: "Academic CV",
  year: "2026",
  description: "Education, research, publications, and selected public work.",
  pdf: null as string | null, // → "/academic/cv.pdf"
};

export type MediaPublication = {
  id: string;
  title: string;
  outlet: string;
  date: string;
  url: string;
  description: string;
};

/** Articles published in policy analysis media — newest first */
export const mediaPublications: MediaPublication[] = [
  {
    id: "ipd-bangladesh-students",
    title:
      "How Bangladeshi Students Brought Down an Authoritarian Government",
    outlet: "International Policy Digest",
    date: "August 2024",
    url: "https://intpolicydigest.org/the-platform/how-bangladeshi-students-brought-down-an-authoritarian-government/",
    description:
      "How Bangladesh's quota reform protests grew into a nationwide movement that ended Sheikh Hasina's government, covering internet shutdowns, state violence, and digital accountability.",
  },
];
