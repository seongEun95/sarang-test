import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans)", "sans-serif"],
        mono: ["var(--font-black-han-sans)", "monospace"],
      },
      backgroundImage: {
        "sarang-bg": "url('/sarang-bg.png')",
      },
      animation: {
        "fade-out": "fadeOut 0.3s ease-out both",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
