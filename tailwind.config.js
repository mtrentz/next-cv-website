const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      lightPrimary: colors.slate,
      lightSecondary: colors.white,
      lightAccent: colors.cyan,
      darkPrimary: colors.gray,
      darkSecondary: colors.black,
      darkAccent: colors.cyan,
    }
  },
  plugins: [],
}
