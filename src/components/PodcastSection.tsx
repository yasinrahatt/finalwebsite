import { Headphones } from "lucide-react";
import { podcastEpisodes } from "@/data/podcast";
import { SectionLabel } from "@/components/SectionLabel";

export function PodcastSection() {
  return (
    <section id="podcast" className="bg-warm">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1fr] lg:py-28">
        <div>
          <SectionLabel>Podcast</SectionLabel>
          <h2 className="text-5xl font-black leading-none text-ink sm:text-7xl">
            conversations
          </h2>
          <p className="mt-8 max-w-xl text-xl leading-9 text-neutral-700">
            Episodes, clips, transcripts, and guest stories about study abroad,
            Italy, scholarships, mentors, student life, and building new
            futures across borders.
          </p>
        </div>
        <div className="grid gap-5">
          {podcastEpisodes.map((episode) => (
            <article
              key={episode.title}
              className="rounded-lg border border-black/10 bg-surface p-7 shadow-line"
            >
              <div className="flex items-center gap-3 text-accent">
                <Headphones size={22} />
                <span className="font-semibold">Episode</span>
              </div>
              <h3 className="mt-5 text-2xl font-black leading-tight text-ink sm:text-3xl">
                {episode.title}
              </h3>
              <p className="mt-4 text-lg text-neutral-600">{episode.guest}</p>
              <p className="mt-6 text-lg leading-8 text-neutral-700">
                {episode.theme}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
