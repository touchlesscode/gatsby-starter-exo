import { defineField, defineType } from 'sanity'

export const locales = [
  {
    id: 'en',
    label: 'English',
    shortLabel: 'EN',
    isDefault: true,
  },
]

export default defineType({
  name: 'localeString',
  title: 'Locale String',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: locales && locales.map((lang) =>
    defineField({
      title: `${lang.label}`,
      name: lang.id,
      type: 'string',
      fieldset: lang.isDefault ? undefined : 'translations',
    }),
  ),
})
