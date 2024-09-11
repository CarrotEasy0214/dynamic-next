import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      ms: "43.75rem", //700px
      mm: "48.375rem",
      md: "76.25rem", //1220px
      lg: "62.5rem", //1000px
      xl: "87.5rem", //1400px
      xxl: "106.25rem",
    },
  },
  plugins: [],
};
export default config;
