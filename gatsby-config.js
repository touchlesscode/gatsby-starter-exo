module.exports = {
  siteMetadata: {
    siteUrl: `https://www.exo.new`
  },
  plugins: [

  "gatsby-plugin-postcss", 
  "gatsby-plugin-image", 
  "gatsby-plugin-react-helmet", 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icons/icon.png"
    }
  }, 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-theme-exo`,
  },
  'gatsby-plugin-theme-ui',
  /*{
    resolve: `gatsby-plugin-rudderstack`,
    options: {
      prodKey: RUDDERSTACK_PROD_KEY,
      trackPage: true,
      trackPageDelay: 50,
      //devKey: `RUDDERSTACK_DEV_WRITE_KEY`,
      //dataPlaneUrl: `https://override-rudderstack-endpoint`,
      //controlPlaneUrl: `https://override-control-plane-url`,
      delayLoad: false,
      delayLoadTime: 1000,
      manualLoad: false,
      loadType: 'defer'
    }
  }*/
  ]
};