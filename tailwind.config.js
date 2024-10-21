/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'], // Adjust this path according to your project structure
  theme: {
    extend: {
      colors: {
        ZuttoGreen: '#16c913',
        ZuttoGreenDark: '#228B22',
        ZuttoBlue: '#A8E6CE',
        ZuttoGray: "#333333",
        ZuttoBlack: "#1F1F1F",
        ZuttoWhite: "#F7F7F7",
        ZuttoRed: '#FF6F61'
      },
    },
  },
  plugins: [],
}
