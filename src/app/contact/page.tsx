import type { Metadata } from "next";
import { ExternalLink, Mail } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { googleScholarUrl } from "@/data/academic";

export const metadata: Metadata = {
  title: "Contact | Yasin Rahat",
  description:
    "Contact Yasin Rahat for PhD committees, supervision, research samples, and collaboration inquiries.",
};

export default function ContactPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-8 sm:py-20 lg:py-28">
        <SectionLabel>Contact</SectionLabel>
        <h1 className="text-4xl font-black leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
          Contact
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-700 sm:mt-8 sm:text-xl sm:leading-9">
          For PhD committees, supervisors, research samples, publication
          questions, or collaboration inquiries, email is the fastest way to
          reach me.
        </p>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2">
          <article className="rounded-lg bg-ink p-5 text-white shadow-line sm:p-8">
            <h2 className="text-xl font-black sm:text-2xl">Email</h2>
            <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
              I read every academic inquiry and reply as soon as I can.
            </p>
            <a
              href="mailto:2rahatyasin@gmail.com"
              className="mt-5 inline-flex max-w-full items-center gap-2 break-all text-base text-white/85 transition hover:text-white sm:text-lg"
            >
              <Mail size={18} className="shrink-0" />
              2rahatyasin@gmail.com
            </a>
          </article>

          <article className="rounded-lg border border-black/10 bg-surface p-5 shadow-line sm:p-8">
            <h2 className="text-xl font-black text-ink sm:text-2xl">
              Google Scholar
            </h2>
            {googleScholarUrl ? (
              <>
                <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">
                  Publications and citations are listed on Google Scholar.
                </p>
                <a
                  href={googleScholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-base font-bold text-ink transition hover:text-accent sm:text-lg"
                >
                  View profile
                  <ExternalLink size={18} />
                </a>
              </>
            ) : (
              <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">
                A Google Scholar profile link will be added here when the
                profile is public.
              </p>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
