import { defineField, defineType } from 'sanity'
//import * as locales from '../../helpers/locales.json'
import { MdLink } from 'react-icons/md'

export const locales = [
  {
    id: 'en',
    label: 'English',
    shortLabel: 'EN',
    isDefault: true,
  },
]


const icon = () => <MdLink />

export default defineType({
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    defineField({
      title: 'Accessibility Label',
      name: 'accessibilityLabel',
      type: 'localeString',
      description: `When the title don't describe user's action please fill this field. For example when title is "Explore" extend it by giving more information e.g. "Explore Men's Shoe Collection"`,
    }),
    defineField({
      title: 'Link type',
      name: 'linkType',
      type: 'string',
      initialValue: 'internal',
      options: {
        list: [
          { title: 'Internal', value: 'internal' },
          { title: 'External', value: 'external' },
          { title: 'Phone', value: 'phone' },
          { title: 'E-Mail', value: 'email' },
          { title: 'File', value: 'file' },
          { title: 'Link Action', value: 'linkAction' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({
      name: 'internal',
      type: 'reference',
      to: [
        { type: 'page' },
      ],
      hidden: ({ parent }) => parent?.linkType !== 'internal',
    }),
    defineField({
      name: 'query',
      type: 'string',
      hidden: ({ parent }) => parent?.linkType !== 'internal',
      validation: (Rule) =>
        Rule.custom((query) => {
          if (!query) {
            return true
          }
          return query?.startsWith('?') ? true : "Query should start with '?'."
        }),
    }),
    defineField({
      name: 'external',
      type: 'localeUrl',
      title: 'External URL',
      hidden: ({ parent }) => parent?.linkType !== 'external',
    }),
    defineField({
      name: 'phone',
      type: 'localeString',
      title: 'Phone Number',
      hidden: ({ parent }) => parent?.linkType !== 'phone',
      validation: (Rule) =>
        Rule.custom((phone: any, context: any) => {
          if (context.parent.linkType === 'phone') {
            if (phone && locales.some((locale) => !!phone[locale.id])) {
              return true
            }
            return 'Please provide phone number.'
          }

          return true
        }),
    }),
    defineField({
      name: 'email',
      type: 'localeString',
      title: 'E-mail',
      hidden: ({ parent }) => parent?.linkType !== 'email',
      validation: (Rule) =>
        Rule.custom((emails: any, context: any) => {
          if (context.parent.linkType === 'email') {
            const re =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (
              emails &&
              locales.some((locale) => re.test(emails[locale.id]))
            ) {
              return true
            }
            return 'Please provide valid mail.'
          }

          return true
        }),
    }),
    defineField({
      title: 'File',
      name: 'file',
      type: 'file',
      options: {
        accept: '.pdf,.zip,.rar,.7zip',
      },
      hidden: ({ parent }) => parent?.linkType !== 'file',
      validation: (Rule) =>
        Rule.custom((file, context: any) => {
          if (context.parent.linkType === 'file') {
            if (file) {
              return true
            }
            return 'Please upload/select a file.'
          }

          return true
        }),
    }),
    defineField({
      name: 'linkAction',
      type: 'linkAction',
      title: 'Link Action',
      hidden: ({ parent }) => parent?.linkType !== 'linkAction',
    }),
  ],
  icon,
})
