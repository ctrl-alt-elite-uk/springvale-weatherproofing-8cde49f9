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
        display: ["var(--font-manrope)", "var(--font-inter)", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "#000d21",
          deep: "#000814",
          raised: "#002347",
          soft: "#718bb5",
        },
        surface: {
          DEFAULT: "#f9f9fb",
          low: "#f3f3f6",
          high: "#e8e8ea",
          pure: "#ffffff",
        },
        slab: {
          DEFAULT: "#51606b",
          dim: "#43474e",
          mute: "#c4c6cf",
        },
        signal: {
          DEFAULT: "#e66100",
          deep: "#401600",
          tint: "#ffdbcb",
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        display: "-0.02em",
      },
      boxShadow: {
        ambient:
          "0 1px 2px rgba(0,13,33,0.04), 0 30px 60px -20px rgba(0,13,33,0.18)",
        lift: "0 40px 80px -40px rgba(0, 13, 33, 0.35)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
