import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  tone?: "light" | "red" | "dark";
};

export function Pill({ children, tone = "light" }: PillProps) {
  const tones = {
    light: "bg-warm text-neutral-700",
    red: "bg-red-50 text-accent",
    dark: "bg-ink text-white",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm leading-none ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
