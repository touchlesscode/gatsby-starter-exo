import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const IndexPage = ({ location }) => { 

  useEffect(() => {
    if (typeof window !== `undefined`) {
      if (localStorage.getItem('utm_source')) {
      }  else {
          const params = new URLSearchParams(location.search);
          const utm_source = params.get("utm_source");
      }
    }
  }, []);

  return (
    <>
    <div className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-indigo-600 mb-6 tracking-wide uppercase">Title</h2>
        <p className="mt-1 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
        Some headline
        </p>

         

        <div className="mt-32 text-indigo-900 text-sm">
        MIT Licensed.<br/><br/><a href="https://excessive-sound-e73.notion.site/Terms-of-Use-24fff49972804d6fba6f8ff0d769c856" className="text-indigo-600" target="new">Privacy Policy</a> © 2022 Touchless Inc. 
        </div>
        </div>
    </div>
  </div></>
  )
}

export default IndexPage
