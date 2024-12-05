import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "rgb(59, 130, 246)",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      backgroundImage: {
        "gradient-radial-hero":
          "radial-gradient(circle at 50% -20%, theme(colors.accent / 0.2) 0%, transparent 70%)",
      },
    },
  },
} satisfies Config;
