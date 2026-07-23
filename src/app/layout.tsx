import type { Metadata } from "next";
import { Archivo, Instrument_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { createElement } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yasin Rahat — Academic Profile",
  description:
    "Research on digital propaganda, political communication, student mobility, education access, and AI systems for public decision-making.",
  openGraph: {
    title: "Yasin Rahat — Academic Profile",
    description:
      "Research on digital propaganda, political communication, student mobility, education access, and AI systems for public decision-making.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return createElement(
    "html",
    { lang: "en" },
    createElement(
      "body",
      { className: `${instrumentSans.variable} ${archivo.variable}` },
      createElement(Header),
      createElement("main", null, children),
      createElement(Footer),
    ),
  );
}
