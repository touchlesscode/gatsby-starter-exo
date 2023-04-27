import { defineField, defineType, Rule } from 'sanity'
import { constructPathField } from '../../helpers/constructPathField'
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list'
import { i18n_fields, DEFAULT_LOCALE_ID } from '../../constants'
import shopstoryBlock from './shopstory-block'

export const locales = [
  {
    id: 'en',
    label: 'English',
    shortLabel: 'EN',
    isDefault: true,
  },
]

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    {
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  orderings: [orderRankOrdering],
  fields: [
    // Minimum required configuration
    orderRankField({ type: 'utilityPage' }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (Rule) =>
        Rule.fields(
          locales.reduce(
            (acc, lang) => ({
              ...acc,
              [lang.id]: (fieldRule: Rule) => fieldRule.required().max(60),
            }),
            {},
          ),
        ),
      group: 'editorial',
    }),
    defineField({
      name: 'content',
      title: 'Blocks',
      type: 'array',
      of: [
         {
          type: "reference",
          to: [shopstoryBlock] // here add reference to schema of your shopstoryBlock document type
        },
      ],  
      group: 'editorial',
    }),
    { ...constructPathField('Path'), group: 'editorial' },
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  //icon: MdOutlineSupport,
  preview: {
    select: {
      title: `title.${DEFAULT_LOCALE_ID}`,
    },
  },
})
