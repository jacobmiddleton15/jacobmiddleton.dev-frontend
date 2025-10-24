/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enables class strategy instead of system
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
};
