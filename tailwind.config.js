/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"] ,
        JosefinSans: ["Josefin Sans", "sans-serif"]

      },
      colors: {
        secondary:'#2C2C2C'
      }
    },
  },
  plugins: [],
}

