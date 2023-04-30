import { DEFAULT_LOCALE_ID } from '../../constants'
import { defineField, defineType } from 'sanity'

export default defineType({
  preview: {
    select: {
      title: `metaTitle.${DEFAULT_LOCALE_ID}`,
      description: `metaDescription.${DEFAULT_LOCALE_ID}`,
    },
    prepare(selection) {
      const { title, description } = selection
      return {
        title: title,
        subtitle: description,
      }
    },
  },
  title: 'SEO',
  name: 'seo',
  type: 'object',
  fields: [
    defineField({
      title: 'Meta title',
      name: 'metaTitle',
      type: 'localeString',
    }),
    defineField({
      title: 'Meta description',
      name: 'metaDescription',
      type: 'localeText',
    }),
    defineField({
      title: 'Share title',
      name: 'ogTitle',
      type: 'localeString',
    }),
    defineField({
      title: 'Share description',
      name: 'ogDescription',
      type: 'localeText',
    }),
    defineField({
      title: 'Share image',
      name: 'ogImage',
      type: 'image',
    }),
    defineField({
      title: 'Alt image',
      name: 'ogAltImage',
      type: 'localeText',
    }),
  ],
})
