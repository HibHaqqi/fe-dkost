/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "dark-purple": "#081A51",
      "light-white": "rgba(255,255,250,0.18)",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        stone: colors.warmGray,
        sky: colors.lightBlue,
        neutral: colors.trueGray,
        gray: colors.coolGray,
        slate: colors.blueGray,
        lime: colors.lime,
        rose: colors.rose,
      },
    },
  },

  plugins: [],
};
