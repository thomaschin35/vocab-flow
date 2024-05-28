/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#29A49D",
        secondary: {
          DEFAULT: "#D4A664",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          DEFAULT: "#F1F1F1",
          100: "#C7C7C7", //outline
          200: "#707070", // text
          // 300: "#D3DFDD", // gray for cards background
        },
      },
      fontFamily: {
        hblack: ["HelveticaNeueBlack", "sans-serif"],
        hbold: ["HelveticaNeueBold", "sans-serif"],
        hheavy: ["HelveticaNeueHeavy", "sans-serif"],
        hitalic: ["HelveticaNeueItalic", "sans-serif"],
        hlight: ["HelveticaNeueLight", "sans-serif"],
        hmedium: ["HelveticaNeueMedium", "sans-serif"],
        hreg: ["HelveticaNeueRoman", "sans-serif"],
        hthin: ["HelveticaNeueThin", "sans-serif"],
      },
    },
  },
  plugins: [],
}

