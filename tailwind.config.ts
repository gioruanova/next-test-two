// tailwind.config.ts
import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.{css}" // incluye tus CSS Modules
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
