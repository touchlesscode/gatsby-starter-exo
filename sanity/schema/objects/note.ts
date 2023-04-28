import { defineType } from 'sanity'
import { Note } from '../../components/inputs/Note'

export default defineType({
  name: 'note',
  type: 'string',
  title: 'Note',
  components: {
    field: Note,
  },
})
