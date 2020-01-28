const colors = {
  text: "#333",
  background: "#fff",
  primary: "#ff0844",
  secondary: "#1a1e1d",
  modes: {
    dark: {
      text: "#fff",
      background: "#1a1e1d",
      primary: "#ff0844",
    },
  },
}

export default {
  colors,
  fonts: {
    body: "Muli, Roboto, sans-serif",
    heading: "Alverta, Merriweather, serif",
    monospace: "Muli, monospace",
  },
  fontWeight: {
    body: 400,
    heading: 500,
    bold: 700,
    black: 900,
  },
  lineHeight: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}
