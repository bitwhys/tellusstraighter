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
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatFile: true,
        analyzerMode: "static",
      },
    },
  ],
}
