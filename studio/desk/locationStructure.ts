import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import {PinIcon} from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Locations')
    .icon(PinIcon)
    .schemaType('location')
    .child(S.documentTypeList('location'))
)
