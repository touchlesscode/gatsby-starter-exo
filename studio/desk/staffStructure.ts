import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import {UsersIcon} from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Staff')
    .icon(UsersIcon)
    .schemaType('staff')
    .child(S.documentTypeList('staff'))
)
