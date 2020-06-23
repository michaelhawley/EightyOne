module.exports = {
  siteMetadata: {
    title: `EightyOne`,
    description: `A blog by Michael`,
    author: `Michael Hawley`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-transformer-remark`,
      options:{
        plugins: [
          {
            resolve: "gatsby-remark-grid-tables"
          },
          {
            resolve: "gatsby-remark-images-grid"
          },
        
          { resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              quality: 100,
            },
          },

        
        ],
      }
    },

        // {
    //   resolve: `gatsby-transformer-remark`,
    //   options:{
    //     plugins: [
    //       { resolve: "gatsby-remark-images-grid",
    //         options: {
    //           className: "myCustomClassName",
    //           gridGap: "20px",
    //           margin: "20px auto",
    //       },
    //       },
    //     ],
    //   }
    // },
    




    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },


    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogPosts`,
        path: `${__dirname}/src/blogPosts`,
      },
    },


    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
