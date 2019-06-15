module.exports = {
  siteMetadata: {
    title: "Portfolio",
    author: "Ben Rugman",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Just Another Hand`,
          },
          {
            family: `Lato`,
            variants: [`300`, `500`],
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sass-resources`,
      options: {
        resources: ["./src/styles/config.scss"],
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
