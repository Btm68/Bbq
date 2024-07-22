/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          600: 'rgba(255, 193, 7, 0.4)', // Opacidad 0.4
        },
        lightgray: {
          300: 'rgba(211, 211, 211, 0.6)', // Opacidad 0.6
        },
        'custom-white': '#FFF8F0',
        customBlue: '#111D4A',
        'custom-bg': '#BC8315', // Botón menú
        'custom-hover': '#FFCF99', // Hover del botón menú
        'custom-text': '#111D4A', // Texto del botón
      },
    },
  },
  plugins: [],
}
