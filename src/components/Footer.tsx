import Link from "next/link";
import { Mail } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Academic Experience", href: "/experience" },
  { label: "Writing Library", href: "/documents" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:gap-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_auto] lg:py-16">
        <div>
          <Link href="/" className="text-2xl font-black">
            Yasin Rahat
          </Link>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:mt-5 sm:text-base sm:leading-8">
            Research on digital propaganda, political communication, student
            mobility, education access, and AI systems for public
            decision-making.
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-3 text-sm text-white/70 sm:text-base"
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
