import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "safety-yellow": "#FFD028",
        "industrial-black": "#1A1A1A",
        "blueprint-blue": "#0047FF",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        oswald: ["var(--font-oswald)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
