/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          500: '#4070F4',
          600: '#3461E0',
        }
      }
    },
  },
  plugins: [],
};