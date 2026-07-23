"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", shortLabel: "Home", href: "/" },
  {
    label: "Academic Experience",
    shortLabel: "Experience",
    href: "/experience",
  },
  { label: "Writing Library", shortLabel: "Writing", href: "/documents" },
  { label: "Contact", shortLabel: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-4">
        <Link
          href="/"
          className="font-display shrink-0 text-2xl font-black text-ink"
          aria-label="Yasin Rahat home"
          onClick={() => setOpen(false)}
        >
          YR<span className="text-accent">.</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-x-6 text-sm font-medium text-neutral-600 md:flex"
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

        <div className="flex items-center gap-2">
          <a
            href="mailto:2rahatyasin@gmail.com"
            aria-label="Email Yasin Rahat"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-surface text-ink shadow-line transition hover:border-accent hover:text-accent"
          >
            <Mail size={18} />
          </a>
          <a
            href="mailto:2rahatyasin@gmail.com"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent sm:inline-flex"
          >
            Let&apos;s connect
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-surface text-ink shadow-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-black/10 bg-paper px-4 py-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-semibold text-ink transition hover:bg-warm hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {item.shortLabel}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
