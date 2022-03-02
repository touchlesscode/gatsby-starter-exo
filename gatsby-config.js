module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "ju3h49o8",
      "dataset": "production"
    }
  }, "gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icons/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
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
  {
    resolve: "gatsby-omni-font-loader",
    options: {
      mode: "async",
      enableListener: true,
      interval: 400,
      preconnect: ["https://fonts.gstatic.com"],
      web: [{
        /* Exact name of the font as defied in @font-face CSS rule */
        name: "Work Sans",
        /* URL to the font CSS file with @font-face definition */
        file: "https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap",
      },
      ],
    }
  }]
};