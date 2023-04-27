import type { Config } from "@shopstory/core";
import sanityConfig from "../../../sanity.config";
import {sanityPlugin} from '@shopstory/sanity';  

export const shopstoryConfig: Config = {
  // ...
  plugins: [
    sanityPlugin({
      dataset: sanityConfig.dataset,
      projectId: sanityConfig.projectId,
      token: process.env.GATSBY_PUBLIC_SANITY_API_TOKEN,
    }),
  ],
};