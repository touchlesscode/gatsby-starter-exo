import { previewSecretDocumentId } from '../../../../libs/sanity-studio/env'
import { client } from './client'
import { getPreviewSecret } from '../../../../libs/sanity-studio/lib/previewSecret'

// Types

import type { NextApiRequest, NextApiResponse } from 'next'

// Initialize
export const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`
export const COOKIE_NAME_PRERENDER_DATA = `__gatsby_preview_data`
export const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse<string | void>
) {
  const readToken = process.env.GATSBY_PUBLIC_SANITY_API_TOKEN

  if (!readToken) {
    res.status(500).send('Misconfigured server')
    return
  }

  const { query } = req

  const secret = typeof query.secret === 'string' ? query.secret : undefined
  const slug = typeof query.slug === 'string' ? query.slug : undefined

  if (!secret) {
    res.status(401)
    res.send('Invalid secret')
    return
  }

  const authClient = client.withConfig({ useCdn: false, token: readToken })

  // The secret can't be stored in an env variable with a GATSBY_PUBLIC_ prefix, as it would make you
  // vulnerable to leaking the token to anyone. If you don't have an custom API with authentication
  // that can handle checking secrets, you may use https://github.com/sanity-io/sanity-studio-secrets
  // to store the secret in your dataset.
  const storedSecret = await getPreviewSecret({
    client: authClient,
    id: previewSecretDocumentId,
  })

  // This is the most common way to check for auth, but we encourage you to use your existing auth
  // infra to protect your token and securely transmit it to the client
  if (secret !== storedSecret) {
    return res.status(401).send('Invalid secret')
  }

  if (slug) {
    res.writeHead(307, { Location: `${slug}?token=${readToken}` })
    res.end()
    return
  }

  res.status(404).send('Slug query parameter is required')
  res.end()
}