import type { GatsbyConfig } from "gatsby"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.mydomain.com`,
  },
  plugins: [
  {
    resolve: 'gatsby-source-sanity',
    options: {
      projectId: process.env.GATSBY_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.GATSBY_PUBLIC_SANITY_DATASET
    }
  }, 
  `gatsby-plugin-postcss`, 
  `gatsby-plugin-image`, 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: `src/images/icons/icon.png`
    }
  }, 
  `gatsby-plugin-sharp`, 
  `gatsby-transformer-sharp`, 
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `./src/images/`
    },
    __key: `images`
  },
  ]
};

export default config