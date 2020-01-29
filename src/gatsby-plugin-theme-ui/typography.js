import Typography from "typography"

const overrideStyles = () => ({
  // FIXME: taken from an example
  "@media only screen and (max-width: 548px)": {
    html: {
      "font-size": "90%",
    },
  },
})

const typography = new Typography({
  baseFontSize: "17px",
  baseLineHeight: 1.66,
  bodyFontFamily: ["alverata", "marcellus", "laila", "georgia", "serif"],
  headerFontFamily: ["Poppins", "Fira Sans", "Roboto Condensed", "sans-serif"],
  includeNormalize: false,
  overrideStyles,
})

// Hot reload typography in development
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
