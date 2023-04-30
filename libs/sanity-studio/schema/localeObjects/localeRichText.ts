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
  name: 'localeRichText',
  title: 'Locale RichText',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: locales.map((lang) => 
    ({
        title: `${lang.label}`,
        name: lang.id ? lang.id : 'en',
        type: 'string',
        fieldset: lang.isDefault ? undefined : 'translations',
    })
  ),
  
})
