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
        dark: "#342415",
      },
      width: {
        "fit-content": "fit-content",
      },
      height: {
        c10: "10%",
        c20: "20%",
        c30: "30%",
        c50: "50%",
        c70: "70%",
        c80: "80%",
        c90: "90%",
        c100: "100%",
      },
      fontWeight: {
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
    },
  },
  plugins: [],
}
