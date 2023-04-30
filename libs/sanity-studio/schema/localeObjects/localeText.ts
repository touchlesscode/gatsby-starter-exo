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
  name: 'localeText',
  title: 'Locale Text',
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
      title: `${lang.shortLabel}`,
      name: lang.id,
      type: 'text',
      fieldset: lang.isDefault ? undefined : 'translations',
    }),
  ),
})
