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
        light: '#FFFFFF',
        secondary_light: '#F1F1F1',
        accent_light: '#9333EA',

        dark: '#121212',
        secondary_dark: '#393226',
        accent_dark: '#95A991',

        light_brown: '#8F6E5D',
        dark_brown: '#60574A'
      }
    },
  },
  plugins: [],
}
