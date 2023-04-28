/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...]].tsx` route
*/

import { visionTool } from '@sanity/vision'
import { mediaAssetSource } from "sanity-plugin-media";

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { defaultDocumentNode, structure } from './sanity/structure'
import { apiVersion, dataset, projectId, readToken } from './sanity/env'
import { schema } from './sanity/schema'


export default defineConfig({
  basePath: '/studio',
  projectId,
  readToken,
  dataset,
  schema,
  plugins: [
    deskTool({defaultDocumentNode, structure}),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})

