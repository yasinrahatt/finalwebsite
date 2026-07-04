import Link from "next/link";
import { Mail } from "lucide-react";

const footerLinks = [
  { label: "Writing", href: "/writing" },
  { label: "Founder Story", href: "/#founder-story" },
  { label: "Travel Stories", href: "/#travel-stories" },
  { label: "Podcast", href: "/podcast" },
  { label: "Research", href: "/archive" },
  { label: "Academic Profile", href: "/academic" },
  { label: "Contact", href: "mailto:2rahatyasin@gmail.com" },
  { label: "About", href: "/about" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_auto] lg:py-16">
        <div>
          <Link href="/" className="text-2xl font-black">
            Yasin Rahat
          </Link>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
            Writing, founder notes, podcast conversations, thought notes, and
            travel stories about study abroad, borders, power, AI, and
            opportunity.
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="grid gap-3 text-base text-white/70 sm:grid-cols-2"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              {link.label === "Contact" ? <Mail size={16} /> : null}
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
