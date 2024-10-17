/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mainFont: "poppins,sans-serif",
      },
      colors: {
        black1: "#222",
        black2: "#333",
      },
    },
  },
  plugins: [],
};
