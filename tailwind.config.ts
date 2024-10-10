import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['"Comfortaa"', "sans-serif"],
      },
      backgroundImage: {
        nightsky: "url('/assets/nightsky.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
