import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD23F",   // Yellow
        secondary: "#81B622", // Green
        dark: "#1C1C1C",      // Black
        cream: "#FFF8E7",     // Cream background
      },
      keyframes: {
        bounceY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        bounceY: "bounceY 1.8s ease-in-out infinite",
        fadeIn: "fadeIn 1s ease-in forwards",
      },
    },
  },
  plugins: [],
};

export default config;
