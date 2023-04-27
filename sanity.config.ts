/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...]].tsx` route
*/

import { visionTool } from '@sanity/vision'
import { shopstory } from "@shopstory/sanity";
import { mediaAssetSource } from "sanity-plugin-media";

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { defaultDocumentNode, structure } from './sanity/structure'
import { apiVersion, dataset, projectId, readToken } from './sanity/env'
import { schema } from './sanity/schema'


export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({defaultDocumentNode, structure}),
    shopstory({
      accessToken: process.env.GATSBY_PUBLIC_SHOPSTORY_API_TOKEN,
      canvasUrl: '/studio-canvas',
      locales: [
        {
          code: 'en',
          isDefault: true,
        },
      ],
      assetSource: mediaAssetSource,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})

