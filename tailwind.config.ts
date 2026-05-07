import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coal: "#061d2e",
        ink: "#09273d",
        smoke: "#123b59",
        navy: "#082338",
        navyDeep: "#041827",
        gold: "#c7a767",
        goldSoft: "#e2d0a3",
        crimson: "#9f2330",
        bone: "#f6f1e7",
      },
      fontFamily: {
        display: ["Oswald", "Impact", "Arial Narrow", "sans-serif"],
        body: ["Inter", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        gold: "0 18px 60px rgba(199, 167, 103, 0.18)",
        red: "0 18px 60px rgba(183, 31, 45, 0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;
