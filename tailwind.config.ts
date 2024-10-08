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
        "foreground-rgb": "rgb(var(--foreground-rgb))",
        "background-rgb": "rgb(var(--background-rgb))",
        "dark-blue-rgb": "rgb(var(--dark-blue-rgb))",
        "blue-rgb": "rgb(var(--blue-rgb))",
        "yellow-rgb": "rgb(var(--yellow-rgb))",
        "dark-yellow-rgb": "rgb(var(--dark-yellow-rgb))",
        "purple-rgb": "rgb(var(--purple-rgb))",
        "gradient-cyan-end": "rgb(var(--gradient-cyan-end))",
        "gradient-cyan-start": "rgb(var(--gradient-cyan-start))",
        "text-rgb": "var(--text-rgb)",
        "text-title-rgb": "rbg(var(--text-title-rgb))",
        "text-muted": "rgb(var(--text-muted))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        logoAnimation: {
          "0%": { fill: "transparent", stroke: "transparent" },
          "100%": { fill: "currentColor", stroke: "currentColor" },
        },
        fadeInRight: {
          "0%": {
            opacity: "0",
            transform: "translate(100%, 0%) rotate(-45deg)",
            
          },
          "100%": {
            opacity: "100%",
            transform: "translate(0%, 10%) rotate(0deg)",
          },
        },
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translate(-100%, 0%) rotate(45deg)",
          },
          "100%": {
            opacity: "100%",
            transform: "translate(0%, 10%) rotate(0deg)",
          },
        }
      },
      animation: {
        logoAnimation: "fillAnimation 2s forwards",
        fadeInRight: "fadeInRight 1.5s forwards",
        fadeInLeft: "fadeInLeft 1.5s forwards",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;

