module.exports = {
  trailingSlash: 'ignore',
  jsxRuntime: "automatic",
  graphqlTypegen: {
    typesOutputPath: `gatsby-types.d.ts`,
  },
  flags: {
    DEV_SSR: false,
    FAST_DEV: true,
    PARTIAL_HYDRATION: false,
    PARALLEL_SOURCING: false,
    DETECT_NODE_MUTATIONS: false,
  },
  siteMetadata: {
    siteUrl: `https://www.mydomain.com`,
  },
  plugins: [
  {
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "ju3h49o8",
      "dataset": "production"
    }
  }, 
  "gatsby-plugin-postcss", 
  "gatsby-plugin-image", 
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