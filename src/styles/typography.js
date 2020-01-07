import Typography from "typography"

const googleFonts = [
  {
    name: "Ek Mukta",
    styles: [500, 700],
  },
]

// eslint-disable-next-line no-unused-vars
const overrideStyles = ({ rhythm }) => ({
  "@media only screen and (max-width: 548px)": {
    html: {
      "font-size": "62.5%",
    },
  },
})

const typography = new Typography({
  googleFonts,
  baseFontSize: "17px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Ek Mukta", "Fira Sans", "Roboto Condensed", "sans-serif"],
  bodyFontFamily: ["alverata", "Georgia", "serif"],
  overrideStyles,
})

// Hot reload typography in development
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
export const { rhythm, scale } = typography
