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
        secondary_light: '#F9FAFB',
        accent_light: '#7E22CE',

        dark: '#121212',
        secondary_dark: '#393226',
        accent_dark: '#95A991',

        light_brown: '#8F6E5D',
        dark_brown: '#60574A'
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      'xl': { max: '1279px' },
      'lg': { max: '1023px' },
      'md': { max: '767px' },
      'sm': { max: '639px' },
      'xs': { max: '479px' },
    }
  },
  plugins: [],
}
