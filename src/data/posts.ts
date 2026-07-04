export type Post = {
  title: string;
  slug: string;
  date: string;
  type: string;
  summary: string;
  tags: string[];
  category: string;
  content: string[];
};

export const posts: Post[] = [
  {
    title: "Why I Started Building The Abroad Company",
    slug: "why-i-started-building-the-abroad-company",
    date: "2026-05-19",
    type: "Founder Journal",
    summary:
      "A personal note on agency gatekeeping, student trust, mentorship, and why students deserve more control over crossing borders.",
    tags: ["The Abroad Company", "AbroadMates", "Student Mobility"],
    category: "Founder Journal",
    content: [
      "This is a placeholder for a founder journal entry about why The Abroad Company exists.",
      "The full essay can later move into MDX while keeping this same title, slug, date, type, summary, tags, and category shape.",
    ],
  },
  {
    title: "Digital Disinformation and the 2024 Bangladesh Student Protests",
    slug: "digital-disinformation-2024-bangladesh-student-protests",
    date: "2026-05-12",
    type: "Thought Notes",
    summary:
      "A commentary track on propaganda, nationalist framing, social media manipulation, and how protestors get delegitimized.",
    tags: ["Bangladesh", "Student Movements", "Digital Politics"],
    category: "Thought Notes",
    content: [
      "This is a placeholder for a thought note on propaganda, student movements, and public narratives.",
      "Future versions can replace this placeholder with long-form analysis, citations, images, and embedded documents.",
    ],
  },
  {
    title: "Life Between Tokyo, Dhaka, and Turin",
    slug: "life-between-tokyo-dhaka-and-turin",
    date: "2026-05-05",
    type: "Travel Story",
    summary:
      "Travel notes on cities, universities, rail stations, student life, and the small systems that shape belonging.",
    tags: ["Japan", "Italy", "Bangladesh"],
    category: "Travel Stories",
    content: [
      "This is a placeholder for travel notes about the small systems that make a city feel possible or difficult.",
      "The post can later become an MDX story with photos, maps, and field notes.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
