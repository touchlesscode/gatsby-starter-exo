'use client'

/**
 * This route enables showing a loading state right away so that the user knows the studio is loading
 */
import * as React from "react"
import { HeadFC } from "gatsby"
import { NextStudio } from 'next-sanity/studio'
import { NextStudioHead } from 'next-sanity/studio/head'
import { StudioLayout, StudioProvider } from 'sanity'
import config from '../../../sanity.config'

const GlobalStyle = () => {
  return (<></>)
};

export const Head: HeadFC = () => <NextStudioHead favicons={false} />

export default function Loading() {
    return (
    <NextStudio config={config}>
        <StudioProvider config={config}>
            <GlobalStyle />
            <StudioLayout />
        </StudioProvider>
    </NextStudio>
   )
}