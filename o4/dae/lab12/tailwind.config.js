/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pokeRed: "#ef5350",
        pokeYellow: "#ffcb05",
        pokeBlue: "#3b4cca",
      },
    },
  },
  plugins: [],
}
