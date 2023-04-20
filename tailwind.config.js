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
        dark: '#121212',
        light: '#FFFFFF',
        secondary_light: '#F1F1F1',
        accent_green: '#95A991',
        accent_red: '#F3254E'
      }
    },
  },
  plugins: [],
}
