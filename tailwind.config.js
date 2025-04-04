/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C4FFB',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
        jakarta: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
        changa: ['"Changa One"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        heading: ['72px', { lineHeight: '1.1' }],
        description: ['20px', { lineHeight: '1.6' }],
        button: ['16px', { lineHeight: '1.4' }],
        link: ['16px', { lineHeight: '1.4' }],
        hat: ['14px', { lineHeight: '1.3', letterSpacing: '0.05em' }],
      },
    },
  },
  plugins: [],
}
