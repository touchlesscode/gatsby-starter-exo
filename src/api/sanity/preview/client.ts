import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../../../../libs/sanity-studio/env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
