/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,},
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    //plugin mdx e remark images
    {
      resolve:`gatsby-plugin-mdx`,
      options:{
        exstensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve:`gatsby-remark-images`,
            options:{
              maxWidth:1200,
            },
          },
        ],
      },
    },
    //google font
    {
      resolve:`gatsby-plugin-google-fonts`,
      options:{
        font:[
          `poppins\:700,700i`,
          `roboto\:400,400i,500,500i`,

        ],
        display:'swap',

        
      }
    },

  ],
}
