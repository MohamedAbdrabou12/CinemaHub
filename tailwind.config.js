/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1a73e8',
          dark: '#60a5fa'
        },
        background: {
          light: '#ffffff',
          dark: '#1a1a1a'
        },
        text: {
          light: '#1a1a1a',
          dark: '#ffffff'
        }
      }
    },
  },
  plugins: [],
};
