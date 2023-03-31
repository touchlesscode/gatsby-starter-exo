/**
 * Desk structure overrides
 */
import {ListItemBuilder, StructureResolver} from 'sanity/desk'
import collections from './collectionStructure'
import colorThemes from './colorThemeStructure'
import home from './homeStructure'
import pages from './pageStructure'
import posts from './postStructure'
import staff from './staffStructure'
import locations from './locationStructure'
import redirects from './redirectStructure'
import sections from './sectionStructure'
import products from './productStructure'
import settings from './settingStructure'

/**
 * Desk structure overrides
 *
 * Sanity Studio automatically lists document types out of the box.
 * With this custom desk structure we achieve things like showing the `home`
 * and `settings` document types as singletons, and grouping product details
 * and variants for easy editorial access.
 *
 * You can customize this even further as your schemas progress.
 * To learn more about structure builder, visit our docs:
 * https://www.sanity.io/docs/overview-structure-builder
 */

// If you add document types to desk structure manually, you can add them to this function to prevent duplicates in the root pane
const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return ![
    //'collection',
    'colorTheme',
    'home',
    'page',
    'post',
    'section',
    'staff',
    'media.tag',
    'section.cta',
    'section.hero',
    'section.list',
    'media',
    'linkExternal',
    'linkInternal',
    'location',
    //'product',
    //'productVariant',
    'settings',
    'redirect',
  ].includes(id)
}

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      home(S, context),
      pages(S, context),
      posts(S, context),
      //sections(S, context),
      //S.divider(),
      //collections(S, context),
      //products(S, context),
      S.divider(),
      staff(S, context),
      locations(S, context),
      S.divider(),
      settings(S, context),
      redirects(S, context),
      colorThemes(S, context),      
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
