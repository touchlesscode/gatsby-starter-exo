import { defineArrayMember, PreviewProps } from 'sanity'
import { FaImage } from 'react-icons/fa'
import { Grid } from '@sanity/ui'
import React, { FC } from 'react'

type RichTextImageValueProps = {
  img?: any
  link?: any
  size?: 'fullWidth' | 'small'
  position?: 'left' | 'right' | 'center'
}

const RichTextImagePreview: FC<RichTextImageValueProps & PreviewProps> = () => {
  return (
    <Grid padding={2}>
      <FaImage />
    </Grid>
  )
}

export const richTextImage = defineArrayMember({
  title: 'Image',
  name: 'richTextImage',
  type: 'object',
  fields: [
    {
      name: 'img',
      title: 'Image',
      type: 'object',
      description: '100x100px',
      fields: [
        {
          name: 'alt',
          type: 'localeString',
          title: 'Alternative text',
        },
        {
          type: 'image',
          name: 'image',
        },
      ],
    },
    {
      title: 'Size',
      name: 'size',
      type: 'string',
      initialValue: 'fullWidth',
      options: {
        list: [
          { title: 'Full Width', value: 'fullWidth' },
          {
            title: 'Small',
            value: 'small',
          },
        ],
        layout: 'dropdown',
      },
    },
    {
      title: 'Position',
      name: 'position',
      type: 'string',
      initialValue: 'left',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
          {
            title: 'Center',
            value: 'center',
          },
        ],
        layout: 'dropdown',
      },
    },
    { name: 'link', title: 'Link', type: 'link' },
  ],
  icon: FaImage,
  components: {
    preview: RichTextImagePreview,
  },
})
