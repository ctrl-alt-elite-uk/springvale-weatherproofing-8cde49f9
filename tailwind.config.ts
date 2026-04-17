import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        // CSS-var driven so a client's accent can be overridden in
        // app/layout.tsx without rebuilding Tailwind. `accent-foreground`
        // is auto-computed from luminance in lib/config.ts.
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
