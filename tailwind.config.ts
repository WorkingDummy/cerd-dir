import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Crucial for your dark mode toggle to work
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Added src folder just in case
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;