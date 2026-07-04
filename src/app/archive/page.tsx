import type { Metadata } from "next";
import { ArchiveSection } from "@/components/ArchiveSection";

export const metadata: Metadata = {
  title: "My Academics and Research | Yasin Rahat’s Memo",
  description:
    "A searchable research shelf for policy papers, policy briefs, research papers, book chapters, op-eds, and selected academic work.",
};

export default function ArchivePage() {
  return <ArchiveSection />;
}
