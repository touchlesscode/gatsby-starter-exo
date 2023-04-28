import React, { useState, useEffect } from "react"
import type { HeadFC, GetServerDataProps, GetServerDataReturn } from 'gatsby';
import { SEO } from "../components/SEO"
 
type ServerDataProps = {
  hello: string;
};

export default function SSRPage({ serverData }) {
  if (serverData) console.log(serverData)
  
  // Note, this struggles to work well in develop mode. Invesigating. 
  
  return (
    <>
    <div className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-indigo-600 mb-6 tracking-wide uppercase">Title</h2>
        <p className="mt-1 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
        {JSON.stringify(serverData)}
        </p>

         

        <div className="mt-32 text-indigo-900 text-sm">
        MIT Licensed.<br/><br/><a href="https://excessive-sound-e73.notion.site/Terms-of-Use-24fff49972804d6fba6f8ff0d769c856" className="text-indigo-600" target="new">Privacy Policy</a> © 2022 Touchless Inc. 
        </div>
        </div>
    </div>
  </div></>
  )
}

export async function getServerData(
  props: GetServerDataProps,
): GetServerDataReturn<ServerDataProps> {
  try {
    //http://localhost:9000/api/sanity/data?slug=about
    const res = await fetch(`/api/sanity/data?slug=${props.params["*"]}}`)
    if (!res.ok) {
      throw new Error("Something went wrong")
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}

export const Head:HeadFC = ({data}: any) => (
  <SEO title={data.page?.seoTitle || ""} description={data.page?.seoDescription || ""} />
)
