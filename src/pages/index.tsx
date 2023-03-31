import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Confetti from "react-confetti"

const IndexPage = ({ location }) => { 

const [confetti, setConfetti] = useState(false);

if (typeof window !== `undefined`) {

    if (localStorage.getItem('utm_source')) {
    }  else {
        const params = new URLSearchParams(location.search);
        const utm_source = params.get("utm_source");
        localStorage.setItem('utm_source',utm_source)
    }
}

const confettiConfig = {
    angle: "90",
    spread: 800,
    startVelocity: 20,
    elementCount: 40,
    dragFriction: 0.15,
    duration: "2000",
    stagger: 2,
    width: "8px",
    height: "8px",
    perspective: "400px",
    colors: ["#362066", "#a6026a", "#047bd3", "#b17acc", "#ffedbf"]
  };

  return (
    <>
    <div className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-indigo-600 mb-6 tracking-wide uppercase">Title</h2>
        <p className="mt-1 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
        Some headline
        </p>

        <Confetti className="ml-48 pl-48 mx-auto justify-center" active={confetti} config={ confettiConfig } />
        <p className="max-w-xl mt-12 mb-12 mx-auto text-xl text-gray-600">
          Welcome to a Gatsby v5 x Sanity Starter
         </p>
        <form method="post" className="mt-8 justify-center sm:flex" >
         <div className="mb-4 sm:mb-0 sm:mr-8">
           <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <a onMouseOver={() => setConfetti(true)} onMouseOut={() => setConfetti(false)} href="#" target="new"
              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Show confetti
            </a>
          </div>
        </div>
        <div className="mb-4 sm:mb-0 sm:mr-8">
           <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <a onMouseOver={() => setConfetti(true)} onMouseOut={() => setConfetti(false)} href="#" target="new"
              className="w-full flex items-center justify-center px-5 py-3 border-2 border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-100 hover:border-solid focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Show it again
            </a>
          </div>
        </div>
          </form>

        <div className="mt-32 text-indigo-900 text-sm">
        MIT Licensed.<br/><br/><a href="https://excessive-sound-e73.notion.site/Terms-of-Use-24fff49972804d6fba6f8ff0d769c856" className="text-indigo-600" target="new">Privacy Policy</a> © 2022 Touchless Inc. 
        </div>
        </div>
    </div>
  </div></>
  )
}

export default IndexPage
