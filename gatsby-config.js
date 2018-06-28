module.exports = {
    siteMetadata: {
      name: 'Gatsby Template',
      title: 'Gatsby Typescript Starter Template',
      description: 'Description of the site',
    },
    plugins: [
      `gatsby-plugin-typescript`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "Gatsby-Typescript-Template",
          short_name: "GTS-Template",
          start_url: "/",
          background_color: null,
          theme_color: null,
          display: "minimal-ui",
          icon: "src/images/monogram.svg",
        },
      },
      `gatsby-plugin-offline`,
    ],
}