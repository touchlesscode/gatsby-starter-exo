import React, { PropsWithChildren } from 'react'
import { defineArrayMember, defineType } from 'sanity'
import { richTextImage } from './richTextImage'

const highlightIcon = () => <span style={{ fontWeight: 'bold' }}>H</span>
const italicIcon = () => <span style={{ fontWeight: 'bold' }}>I</span>
const fontIcon = () => <span style={{ fontWeight: 'bold' }}>F</span>

const highlightRender = (props: PropsWithChildren<any>) => (
  <span style={{ color: 'black' }}>{props.children}</span>
)

const normalRender = (props: PropsWithChildren<any>) => (
  <span style={{ color: 'gray' }}>{props.children}</span>
)

const italicRender = (props: PropsWithChildren<any>) => (
  <em>{props.children}</em>
)

const ui07Render = (props: PropsWithChildren<any>) => (
  <span
    style={{
      fontFamily: 'MaisonNeueMono-Regular',
      textTransform: 'uppercase',
    }}
  >
    {props.children}
  </span>
)

export default defineType({
  name: 'richText',
  title: 'RichText',
  type: 'object',
  fields: [{
    name: 'blocks',
    title: 'Block',
    type: 'array',
    of: [
    {
        title: 'Block',
        type: 'block',
        styles: [
          {
            title: 'Normal',
            value: 'normal',
            component: normalRender,
          },
          { title: 'Heading2', value: 'h2' },
          { title: 'Heading3', value: 'h3' },
          { title: 'Quote', value: 'blockquote' },
        ],
        lists: [
          { title: 'Bullet', value: 'bullet' },
          { title: 'Numbered', value: 'number' },
        ],
        marks: {
          decorators: [
            {
              title: 'Highlighted',
              value: 'highlighted',
              icon: highlightIcon,
              component: highlightRender,
            },
            {
              title: 'Italic',
              value: 'italic',
              icon: italicIcon,
              component: italicRender,
            },
            {
              title: 'Ui07',
              value: 'ui07',
              icon: fontIcon,
              component: ui07Render,
            },
          ],
          annotations: [{ name: 'link', title: 'Link', type: 'link' }],
        },
      },
      richTextImage, 
    ],
  }],
})
