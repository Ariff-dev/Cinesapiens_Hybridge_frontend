/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#1A191F',
        'primary-text-color': '#F9AB00',
        'secondary-color-component': '#222028',
      },
    },
  },
  plugins: [],
}
