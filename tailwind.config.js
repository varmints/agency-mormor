/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: [],
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#ffffff",
      primary: colors.stone,
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.75rem"],
      lg: ["1.125rem", "2rem"],
      xl: ["1.25rem", "2.125rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.375rem"],
      "4xl": ["2.25rem", "2.75rem"],
      "5xl": ["3rem", "3.5rem"],
      "6xl": ["3.75rem", "4.25rem"],
    },
  },
  plugins: [],
};
