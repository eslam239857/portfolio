import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { 950: "#05070f", 900: "#080b16", 800: "#0d1222", 700: "#141a2e", 600: "#1d2540" },
        electric: { DEFAULT: "#3b82ff", soft: "#7aa7ff" },
        violet: { glow: "#8b5cf6" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        spin360: { to: { transform: "rotate(360deg)" } },
        blink: { "50%": { opacity: "0" } },
        drift: { "0%,100%": { transform: "translate(0,0)" }, "50%": { transform: "translate(30px,-20px)" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        spin360: "spin360 10s linear infinite",
        blink: "blink 1s steps(1) infinite",
        drift: "drift 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
