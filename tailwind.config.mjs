/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 enables class strategy instead of system
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
