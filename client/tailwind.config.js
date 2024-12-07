/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        faltu: 'var(--font-color)',
      },
      backgroundColor: {
        faltu: 'var(--background-color)',
      },
      colors: {
        link: 'var(--link-color)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode: ['class', '[data-theme="dark"]'],

}