/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'matemasie': ['Matemasie', 'sans-serif'],
        'paytone': ['Paytone One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}