/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "color1-bg": "#08090A", // my custom hex color
        "color2-bg": "#262626",
      },
    },
  },
  plugins: [],
};
