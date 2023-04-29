import Cors from "cors"
import { client } from './preview/client'

const cors = Cors()

export default async function corsHandler(req, res) {
  // Run Cors middleware and handle errors.
  await new Promise((resolve, reject) => {
    cors(req, res, result => {
      if (result instanceof Error) {
        reject(result)
      }
      resolve(result)
    })
  })
  const { query } = req

  const Client = client.withConfig({ 
    useCdn: false, 
    token: process.env.GATSBY_PUBLIC_SANITY_API_TOKEN });

  async function getDraftPost() {
    const posts = await Client.fetch('*[_id == "drafts.9f5785f0-d633-4879-8a28-bc6c6e6a5f54"]')
    return posts
  }
  async function getPost() {
    const posts = await Client.fetch('*[_id == "9f5785f0-d633-4879-8a28-bc6c6e6a5f54"]')
    return posts
  }
  const posts = await getDraftPost()

  // Temporary for debugging
  res.json({query: query, posts: posts})
  res.end()
  return
}