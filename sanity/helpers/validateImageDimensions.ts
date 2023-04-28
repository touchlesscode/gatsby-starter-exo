import { ImageRule } from 'sanity'

const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/

export const decodeAssetId = (id: string) => {
  if (pattern.exec(id)) {
    const [, assetId, dimensions, format] = pattern.exec(id)
    const [width, height] = dimensions
      .split('x')
      .map((v: string) => parseInt(v, 10))

    const ratio = height / width

    return {
      assetId,
      dimensions: { width, height, ratio },
      format,
    }
  }
  return null
}

export const validateImageDimensions =
  (width: number, height: number) => (Rule: ImageRule) =>
    Rule.custom((image) => {
      if (!image || !image.asset) return true
      const { dimensions } = decodeAssetId(image.asset._ref)
      return (
        (dimensions.width >= width &&
          dimensions.height >= height &&
          dimensions.ratio === height / width) ||
        `Image should be ${width}x${height}px or greater with the same ratio`
      )
    })
