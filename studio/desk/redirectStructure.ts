import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import {ArrowRightIcon} from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Redirects')
    .icon(ArrowRightIcon)
    .schemaType('redirect')
    .child(S.documentTypeList('redirect'))
)
