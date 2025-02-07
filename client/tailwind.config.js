/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    
    extend: {
      colors:{
        primary:"#1E88E5",
        light:"#252525"
      },
    },
  },
  plugins: [],
}