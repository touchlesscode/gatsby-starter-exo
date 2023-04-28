import Cors from "cors"
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
  
  // Temporary for debugging
  res.json({query: `Sample Data`})
  res.end()
  return
}