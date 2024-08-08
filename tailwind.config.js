/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          
          "0%": {backgroundPosition: "0% 50%"},
          "100%": {backgroundPosition: "100% 50%"},
        },
      },
      animation: {
        gradient: "gradient 4s linear infinite",
      },
      
    },
  },
  plugins: [],
};