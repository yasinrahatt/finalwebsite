import Link from "next/link";
import { Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
  { label: "Research Notes", href: "/archive" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-paper/95">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-2xl font-black text-ink"
            aria-label="Yasin Rahat home"
          >
            YR<span className="text-accent">.</span>
          </Link>
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="mailto:2rahatyasin@gmail.com"
              aria-label="Email Yasin Rahat"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-surface text-ink shadow-line transition hover:border-accent hover:text-accent"
            >
              <Mail size={18} />
            </a>
            <a
              href="mailto:2rahatyasin@gmail.com"
              className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent"
            >
              Let&apos;s connect
            </a>
          </div>
        </div>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-neutral-600 sm:justify-center"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-3 lg:flex">
          <a
            href="mailto:2rahatyasin@gmail.com"
            aria-label="Email Yasin Rahat"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-surface text-ink shadow-line transition hover:border-accent hover:text-accent"
          >
            <Mail size={18} />
          </a>
          <a
            href="mailto:2rahatyasin@gmail.com"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent"
          >
            Let&apos;s connect
          </a>
        </div>
      </div>
    </header>
  );
}
