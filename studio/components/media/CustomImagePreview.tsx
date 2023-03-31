import React from 'react'
import {Card, Stack, Text, Flex} from '@sanity/ui'


type Props = {
    imagePreview?: string
    url?: string
    title: string
}
  

export const CustomImagePreview = (props:Props) => {
  const {title, url, imagePreview} = props

  return (
    <Flex align="center" justify="center" height="fill">
      <Card border padding={3}>
        <Stack space={3} marginBottom={3}>
          <img src={imagePreview} alt={title} style={{width: '100%'}} />
          <Text size={1} weight="bold">
            {title?.toUpperCase()}
            {imagePreview}
          </Text>
        </Stack>
      </Card>
    </Flex>
  )
}
