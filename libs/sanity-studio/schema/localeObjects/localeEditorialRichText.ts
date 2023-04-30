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
  name: 'localeEditorialRichText',
  title: 'Locale Editorial RichText',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: locales.map((lang) =>
    defineField({
      title: `${lang.label}`,
      name: lang.id,
      type: 'editorialRichText',
      fieldset: lang.isDefault ? undefined : 'translations',
    }),
  ),
})
