import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#fffdf8",
        warm: "#f4f3ef",
        surface: "#ffffff",
        ink: "#050505",
        accent: "#b91c1c",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(5, 5, 5, 0.08)",
        line: "0 0 0 1px rgba(5, 5, 5, 0.08)",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Helvetica Neue",
          "Helvetica",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "var(--font-sans)",
          "Helvetica Neue",
          "Helvetica",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
