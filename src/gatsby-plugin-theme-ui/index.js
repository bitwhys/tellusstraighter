const colors = {
  text: "#333",
  background: "#fff",
  primary: "#ff0844",
  secondary: "#1a1e1d",
  muted: "#EDF2F7",
  modes: {
    dark: {
      text: "#fff",
      background: "#1a1e1d",
      primary: "#ff0844",
      muted: "#33374D",
    },
  },
}

const theme = {
  colors,
  fonts: {
    body: "alverata",
    heading: "poppins",
    ui: "poppins",
    brand: "alverata",
  },
  breakpoints: [568, 768, 992, 1200],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {},
}

export default theme
