import React, { ReactNode } from 'react';
import { useSiteMetadata } from "../../hooks/useSiteMetadata"


interface SeoProps {
  title?: string,
  description?: string,
  pathname?: string,
  children?: ReactNode,
}

export const SEO = (props: SeoProps ) => {
  const { title: siteTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata()

  const seo = {
    title: props.title ? `${props.title} | ${siteTitle}` : siteTitle,
    description: props.description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${props.pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {props.children}
    </>
  )
}
