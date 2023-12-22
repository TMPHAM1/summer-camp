module.exports = {
  siteMetadata: {
    title: `Justcamp Gatsby`,
  },
    pathPrefix: "/summer-camp",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    "gatsby-plugin-use-query-params",
  ],
};
