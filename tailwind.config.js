/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fffffe",
        tertiary: "#bae8e8",
        secondary: "#e3f6f5",
        button: "#ffd803",
        headline: "#272343",
        paragraph: "#2d334a",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
