import { Card, Flex, Text, Box, CardTone, Grid } from '@sanity/ui'
import { WarningOutlineIcon } from '@sanity/icons'
import { FC, ReactElement } from 'react'
import { StringFieldProps } from 'sanity'

export const Note: FC<StringFieldProps> = (props) => {
  const { schemaType } = props
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const tone = (schemaType?.options?.tone as CardTone | undefined) || 'primary'
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const message = schemaType?.options?.message as
    | ReactElement
    | string
    | undefined
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const headline = schemaType?.options?.headline as string | undefined

  const Message = () => {
    if (!message) {
      return null
    }

    if (typeof message === 'string') {
      return <Text size={1}>{message}</Text>
    }

    return message
  }

  return (
    <Card padding={4} radius={2} shadow={1} tone={tone} margin={[0, 2]}>
      <Grid autoFlow={'row'} gap={4}>
        <Box>
          <Flex align={'center'} justify={'flex-start'} gap={2}>
            <Box>
              <WarningOutlineIcon style={{ fontSize: 24 }} />
            </Box>

            <Text align="center" size={2}>
              {headline}
            </Text>
          </Flex>
        </Box>
        <Box>
          <Message />
        </Box>
      </Grid>
    </Card>
  )
}
