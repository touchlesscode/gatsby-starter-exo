/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...]].tsx` route
 */

import { visionTool } from "@sanity/vision";
// import { mediaAssetSource } from "sanity-plugin-media";

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { defaultDocumentNode, structure } from "./libs/sanity-studio/structure";
import {
  apiVersion,
  dataset,
  projectId,
  readToken,
} from "./libs/sanity-studio/env";
import { schema } from "./libs/sanity-studio/schema";
import { shopstory } from "@shopstory/sanity";

export default defineConfig({
  basePath: "/studio",
  projectId,
  readToken,
  dataset,
  schema,
  plugins: [
    deskTool({ defaultDocumentNode, structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    shopstory({
      canvasUrl: "/shopstory-canvas",
      locales: [{ code: "en", isDefault: true }],
      accessToken: process.env.GATSBY_PUBLIC_SHOPSTORY_API_TOKEN,
    }),
  ],
});
