/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: "#fbf5f0",
          100: "#f3e6dc",
          200: "#e7cbb7",
          300: "#d9a783",
          400: "#c68150",
          500: "#b66d3f",
          600: "#975533",
          700: "#754129",
          900: "#2b201b",
        },
      },
    },
  },
  plugins: [],
};