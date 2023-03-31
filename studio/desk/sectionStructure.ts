import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import {BlockElementIcon} from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Sections')
    .icon(BlockElementIcon)
    .schemaType('section.hero')
    .child(
      S.documentTypeList('section.hero')
    )
)
