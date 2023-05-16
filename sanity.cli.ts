import { defineCliConfig } from 'sanity/cli'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { loadEnv } from 'vite';
import dotenv from 'dotenv'

dotenv.config() // load env vars from .env

export default defineCliConfig({
  graphql: [{
    tag: "default",
    workspace: 'default',
    id: 'default',
    playground: true,
  }],
  vite: (prev) => ({
    ...prev,   
    plugins: [...prev.plugins, nodePolyfills({util: true})],
    define: {
      ...prev.define,
      process: {
        env: {
          GATSBY_PUBLIC_SANITY_PROJECT_ID: process.env.GATSBY_PUBLIC_SANITY_PROJECT_ID,
          GATSBY_PUBLIC_SANITY_DATASET: process.env.GATSBY_PUBLIC_SANITY_DATASET,
          GATSBY_PUBLIC_SANITY_API_TOKEN: process.env.GATSBY_PUBLIC_SANITY_API_TOKEN,
          GATSBY_PUBLIC_SANITY_API_VERSION: process.env.GATSBY_PUBLIC_SANITY_API_VERSION,
        }
      }
    },     
  }),
})
