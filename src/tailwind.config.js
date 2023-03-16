/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        light: '#F7F8FA',
        black: '#01272f',
        hilight: '#00c1bc',
        disabled: '#345259',
        grey: '#99a9ac',
        gunmetal: {
          light: '#32545a',
          DEFAULT: '#011f26',
          dark: '#011f26',
        },
        magenta: '#b50073',
        teal: '#00c1bc',
        'light-pink': '#fe84a8',
        accent: '#00c1bc',
        primary: '#01272f',
        disabled: '#345259',
        secondary: '#99a9ac',
        neutral: '#32545a',
        'neutral-700': '#011f26',
        error: '#b50073',
        'error-400': '#fe84a8',
        info: '#00c1bc',
      },
      fontFamily: {
        gordita: ['var(--font-gordita)']
      }
    },
  },
  plugins: [],
}
