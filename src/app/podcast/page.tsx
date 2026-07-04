import type { Metadata } from "next";
import { PodcastSection } from "@/components/PodcastSection";

export const metadata: Metadata = {
  title: "Podcast | Yasin Rahat’s Memo",
  description:
    "Study abroad conversations, Italy strategy, scholarships, mentor stories, and student life.",
};

export default function PodcastPage() {
  return <PodcastSection />;
}
