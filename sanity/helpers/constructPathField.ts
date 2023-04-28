import { defineField, SlugRule, SlugValue, ValidationBuilder } from 'sanity'
import slugify from 'slugify'

const PATHS_IN_USE = ['/preview', '/studio']

function formatSlug(input: string, pathStart: string) {
  const slug = slugify(input, { lower: true, strict: true, locale: 'en' })
  return `${pathStart}${slug}`
}

/**
 * Source : https://www.sanity.io/docs/slug-type#d5066a58b95a
 */
// export function isUniqueAcrossAllDocuments(slug, options) {
//   const { document } = options
//
//   const id = document._id.replace(/^drafts\./, '')
//   const params = {
//     draft: `drafts.${id}`,
//     published: id,
//     slug,
//   }
//
//   const query = `!defined(*[!(_id in [$draft, $published]) && path.current == $slug][0]._id)`
//
//   return client.fetch(query, params)
// }

export const validatePath: (
  pathStart: string,
) => ValidationBuilder<SlugRule, SlugValue> = (pathStart) => (Rule) =>
  Rule.required().custom((value) => {
    if (!value) {
      return true
    }

    const { current } = value

    if (!current) return true

    if (PATHS_IN_USE.includes(current)) return `This path is already taken`

    if (!current.startsWith(pathStart)) {
      return `Path must begin with "${pathStart}". Click "Generate" to reset.`
    }

    if (current.slice(pathStart.length).split('').includes('/')) {
      return `Path cannot have another "/" after "${pathStart}"`
    }

    if (current !== '/' && current === pathStart) {
      return `Path cannot be empty`
    }

    if (current !== '/' && current.endsWith('/')) {
      return `Path cannot end with "/"`
    }

    return true
  })

export function constructPathField(
  title: string,
  source?: string,
  prefix?: string,
) {
  const pathStart = prefix ? `${prefix}/` : `/`

  return defineField({
    title,
    name: `slug`,
    type: `slug`,
    options: {
      source,
      slugify: (value: string) => formatSlug(value, pathStart),
    },
    validation: validatePath(pathStart),
  })
}
