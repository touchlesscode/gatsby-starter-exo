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
  name: 'localeUrl',
  title: 'Locale Url',
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
      type: 'url',
      fieldset: lang.isDefault ? undefined : 'translations',
    }),
  ),
})
