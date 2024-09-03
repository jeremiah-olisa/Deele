/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#141718",
        yellow: "#FFAB00"
      },
      fontFamily: {
        inter: ['inter', 'sans'],
      }
    },
  },
  plugins: [],
}

