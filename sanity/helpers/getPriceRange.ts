import { DEFAULT_REGION_ID, normalizedRegions } from '../../../configs/src'

const formatNumber = (val: number) => {
  return new Intl.NumberFormat('en', {
    currency: normalizedRegions[DEFAULT_REGION_ID].currencyCode,
    style: 'currency',
  }).format(val)
}

export const getPriceRange = (price: any) => {
  if (!price || typeof price?.minVariantPrice === 'undefined') {
    return 'No price found'
  }
  if (
    price.maxVariantPrice &&
    price.minVariantPrice !== price.maxVariantPrice
  ) {
    return `${formatNumber(price.minVariantPrice)} – ${formatNumber(
      price.maxVariantPrice,
    )}`
  }

  return formatNumber(price.minVariantPrice)
}
