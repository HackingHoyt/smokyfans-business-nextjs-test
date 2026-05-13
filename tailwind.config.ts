import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#070b16",
        ember: "#f7a647",
        electric: "#34b5ff",
      },
      boxShadow: {
        glow: "0 0 24px rgba(52, 181, 255, 0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
