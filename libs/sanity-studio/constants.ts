export const PLUGIN_NAME = 'table'
export const TABLE_TYPE = 'table'
export const ROWS_TYPE = 'rows'
export const ROW_TYPE = 'row'
export const CELLS_TYPE = 'cells'

// Currency code (ISO 4217) to use when displaying prices in the studio
// https://en.wikipedia.org/wiki/ISO_4217
export const DEFAULT_CURRENCY_CODE = 'USD'

// Document types which:
// - cannot be created in the 'new document' menu
// - cannot be duplicated, unpublished or deleted
export const LOCKED_DOCUMENT_TYPES = ['settings', 'home', 'media.tag']
export const LOCKED_DOCUMENT_IDS = []

// Document types which:
// - cannot be created in the 'new document' menu
// - cannot be duplicated, unpublished or deleted
// - are from the Sanity Connect Shopify app - and can be linked to on Shopify
export const SHOPIFY_DOCUMENT_TYPES = ['product', 'productVariant', 'collection']

// References to include in 'internal' links
export const PAGE_REFERENCES = [
  {type: 'collection'},
  {type: 'home'},
  {type: 'page'},
  {type: 'product'},
]

// API version to use when using the Sanity client within the studio
// https://www.sanity.io/help/studio-client-specify-api-version
export const SANITY_API_VERSION = process.env.GATSBY_SANITY_API_VERSION || '2021-03-25'

// Your Shopify store ID.
// This is your unique store URL (e.g. 'my-store-name.myshopify.com').
// Set this to enable helper links in document status banners and shortcut links on products and collections.
export const SHOPIFY_STORE_ID = 'my-store-name.myshopify.com';

export const DEFAULT_LOCALE_ID = 'en';

export const i18n_fields = (refType: string) => [
  {
    name: 'i18n_lang',
    type: 'string',
    hidden: true,
  },
  {
    name: 'i18n_base',
    type: 'reference',
    to: [{type: refType}],
    hidden: true,
  },
  {
    name: 'i18n_refs',
    type: 'array',
    hidden: true,
    of: [
      {
        type: 'reference',
        to: [{type: refType}],
      },
    ],
  },
]

export const ROUTE_BASE_JOURNAL = '/journal'
export const ROUTE_BASE_JOURNAL_CATEGORIES = '/journal/categories'
export const ROUTE_FILTERED_COLLECTIONS = '/f'
export const ROUTE_BASE_ACCOUNT_HOME = '/account'
export const ROUTE_BASE_ACCOUNT_LOGIN = '/account/login'
export const ROUTE_BASE_ACCOUNT_FORGOT_PASSWORD = '/account/forgot'
export const ROUTE_BASE_ACCOUNT_RESET_PASSWORD = '/account/reset'
export const ROUTE_BASE_ACCOUNT_ACTIVATE = '/account/activate'
export const ROUTE_BASE_SEARCH = '/search'
export const ROUTE_BASE_STORES = '/stores'
export const ROUTE_BASE_CART = '/cart'