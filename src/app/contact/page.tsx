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
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Contact</SectionLabel>
        <h1 className="text-5xl font-black leading-none text-ink sm:text-7xl">
          Contact
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-700">
          For PhD committees, supervisors, research samples, publication
          questions, or collaboration inquiries, email is the fastest way to
          reach me.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <article className="rounded-lg bg-ink p-6 text-white shadow-line sm:p-8">
            <h2 className="text-2xl font-black">Email</h2>
            <p className="mt-3 text-base leading-7 text-white/75">
              I read every academic inquiry and reply as soon as I can.
            </p>
            <a
              href="mailto:2rahatyasin@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-lg text-white/85 transition hover:text-white"
            >
              <Mail size={18} />
              2rahatyasin@gmail.com
            </a>
          </article>

          <article className="rounded-lg border border-black/10 bg-surface p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">Google Scholar</h2>
            {googleScholarUrl ? (
              <>
                <p className="mt-3 text-base leading-7 text-neutral-600">
                  Publications and citations are listed on Google Scholar.
                </p>
                <a
                  href={googleScholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-lg font-bold text-ink transition hover:text-accent"
                >
                  View profile
                  <ExternalLink size={18} />
                </a>
              </>
            ) : (
              <p className="mt-3 text-base leading-7 text-neutral-600">
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
