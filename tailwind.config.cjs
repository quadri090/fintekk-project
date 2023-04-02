/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'small': ['Light', 'sans-serif'],
        'average': ['Medium', 'sans-serif'],
        'big': ['Bold', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
