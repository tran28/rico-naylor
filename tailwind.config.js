/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['var(--font-cormorant)', ...fontFamily.serif],
        bebas: ['var(--font-bebas-neue)', ...fontFamily.sans],
        nunito: ['var(--font-nunito)', ...fontFamily.sans]
      },
      colors: {
        dark: '#191919',
        light: '#F1F1F1',
        light_brown: '#8F6E5D',
        dark_brown: '#60574A',
        accent_green: '#95A991'
      }
    },
  },
  plugins: [],
}
