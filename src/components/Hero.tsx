"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PenLine } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <p className="mb-8 font-serif text-2xl italic leading-none text-accent sm:text-3xl">
          Hey, welcome to
        </p>

        <h1 className="max-w-4xl text-6xl font-black leading-[0.92] text-ink sm:text-8xl lg:text-[9rem]">
          Yasin
          <br />
          Rahat&apos;s
          <br />
          memo.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-700">
          Here I write. This is my public notebook on study abroad, thoughts
          about society and the world, AI, migration, founder life, travel, and
          everything in between.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        className="lg:pl-4"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-accent shadow-soft">
          <Image
            src="/images/rahat-yasin-sketch.webp"
            alt="Sketch portrait of Yasin Rahat"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover object-bottom"
          />
          <div className="absolute bottom-7 right-7 z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-soft sm:h-16 sm:w-16">
            <ArrowRight size={26} />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-accent"
          >
            <PenLine size={17} />
            Read the latest
          </Link>
          <Link
            href="/archive"
            className="rounded-full border border-black/10 bg-surface px-5 py-3 text-sm font-bold text-ink shadow-line transition hover:border-accent hover:text-accent"
          >
            Browse research
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
