import React from 'react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'linkAction',
  title: 'Link Action',
  type: 'object',
  description: 'No link actions set yet.',
  fields: [
    defineField({
      title: 'Action type',
      name: 'linkActionType',
      type: 'string',
      initialValue: 'none',
      options: {
        list: [
          { title: 'No action', value: 'none' },
          {
            title: 'Scroll to Shop The Products Section',
            value: 'productSectionLinkAction',
          },
          {
            title: 'Open Chat App',
            value: 'chatAppLinkAction',
          },
        ],
        layout: 'dropdown',
      },
    }),
    {
      name: 'info',
      type: 'note',
      hidden: ({ parent }) => {
        return parent?.linkActionType !== 'productSectionLinkAction'
      },
      options: {
        headline: 'Info',
        message: (
          <>
            Clicking the link will sroll to the first Products Section in Page
            Builder. <br />
            Make sure <strong>Section Shop The Products</strong> exists in Page
            Builder.
          </>
        ),
        tone: 'caution',
      },
    },
  ],
})
