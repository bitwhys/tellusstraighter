module.exports = {
  siteMetadata: {
    title: "Tell Us Straighter",
    tagLine: "Providing colored commentary, in black & white",
    description:
      "Providing colored commentary, in black & white. One man's journey of becoming a full stack engineer.",
    author: "@bitwhys",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "blog",
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md", ".markdown"],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Tell Us Starter",
        short_name: "Tell Us Straighter",
        start_url: "/",
        background_color: "#ff0844",
        theme_color: "#ff0844",
        display: "minimal-ui",
        icon: `${__dirname}/content/images/avatar.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.jsx?$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop", "production"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/gatsby-plugin-theme-ui/typography.js`,
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
  ],
}
