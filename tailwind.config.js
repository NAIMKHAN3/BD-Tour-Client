/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#94be1f",
      },
      backgroundColor: {
        primary: "#94be1f",
      },
    },
  },
  plugins: [],
}