const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Tell Us Straighter`,
    description:
      "Providing colored commentary, in black & white. " +
      "A living time capsule of one man's journey to becoming a modern full stack engineer.",
    author: `@bitwhys`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: path.resolve(
          __dirname,
          "src",
          "styles",
          "typography.js"
        ),
      },
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatFile: true,
        analyzerMode: "static",
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.jsx?$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
  ],
}
