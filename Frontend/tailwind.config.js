/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alliance: ['"Alliance No.1"', 'sans-serif'],
        'alliance-no2': ['"Alliance No.2"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}