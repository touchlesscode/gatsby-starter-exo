import { defineField } from 'sanity'

export default (type: 'default' | 'max-l' = 'default', withNone = true) => {
  const list: { title: string; value: string }[] = (() => {
    const options = (() => {
      switch (type) {
        case 'max-l':
          return [
            { title: 'Small', value: 'small' },
            { title: 'Medium', value: 'medium' },
            { title: 'Large', value: 'large' },
          ]
        default:
          return [
            { title: 'Small', value: 'small' },
            { title: 'Medium', value: 'medium' },
            { title: 'Large', value: 'large' },
            { title: 'XLarge', value: 'xlarge' },
          ]
      }
    })()

    return [...(withNone ? [{ title: 'None', value: 'none' }] : []), ...options]
  })()

  return defineField({
    title: 'Space Size',
    name: 'sectionSpaceSize',
    type: 'string',
    initialValue: 'small',
    options: {
      list,
      layout: 'radio',
      direction: 'horizontal',
    },
  })
}
