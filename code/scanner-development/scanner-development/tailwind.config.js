/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#132649',
        'secondary': "#695eef",
        "icons": "#1be060",
        "hexa": "#73dce9"


      },
      backgroundImage: {
        'login': "url('loginbackground.jpg')",
      }
    },
    fontFamily: {
      Outfit: ['Outfit', 'sans-serif'],
    },
  },
  plugins: [],
}