/** // @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        suwannaphum: ["Suwannaphum", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        beigeOil: "#8f8868",
        beigeLight: "#e0d6c2",
        pink: "#976c54",
        beigeMedium: "#b5a38d",
        brown: "#342415",
      },
      width: {
        "fit-content": "fit-content",
      },
    },
  },
  plugins: [],
}
