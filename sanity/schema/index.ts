import { SchemaTypeDefinition } from 'sanity'

// Documents
import page from './documents/page'

// Locales
import localeString from './localeObjects/localeString'
import localeText from './localeObjects/localeText'
import localeUrl from './localeObjects/localeUrl'
import localeRichText from './localeObjects/localeRichText'

// Objects
import link from './objects/link'
import linkAction from './objects/linkAction'
import note from './objects/note'
import richText from './objects/richText'
import seo from './objects/seo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents ======================================
    page,
    // Locales ======================================
    localeString,
    localeRichText,
    localeText,
    localeUrl,
    // Objects ======================================
    link,
    linkAction, 
    note,
    richText,
    seo,
  ],
}
