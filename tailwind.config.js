const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)'
          },
          '50%': {
            transform: 'rotate(3deg)'
          },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
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
  darkMode: "class",
}
