/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container:{
        xs:"375px",
        sm:"640px",
        md:"768px",
        lg:"1024px",
        xl: "1140px"

      },
      colors:{
        primary: "#888888",
        secondary: "#222831",
        danger: "#ff0000",
        success: "#00ff00",
      },
      fontFamily:{
        dancing:["Dancing Script", "cursive"],
        sans:["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}
