import React, { useState } from "react"
import { Link } from "gatsby"
import Confetti from 'react-dom-confetti';

const IndexPage = () => {

const [email, setEmail] = useState("");
const [domain, setDomain] = useState("");
const [submit, setSubmit] = useState(false);

const confettiConfig = {
    angle: "180",
    spread: 500,
    startVelocity: 40,
    elementCount: 75,
    dragFriction: 0.12,
    duration: "2000",
    stagger: 2,
    width: "8px",
    height: "8px",
    perspective: "500px",
    colors: ["#db8a30", "#d26e00", "#db8a30", "#7E212A", "#7E212A"]
  };

  return (
    <div className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-indigo-400 mb-6 tracking-wide uppercase">Hi there, meet EXO.</h2>
        <p className="mt-1 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
        Make data-rich Gatsby sites, fast.
        </p>

        <Confetti className="justify-center" active={submit} config={ confettiConfig } />
      {!submit ? (
        <> <p className="max-w-xl mt-12 mb-12 mx-auto text-xl text-gray-400">
          Secure your spot in the EXO early beta and receive a free API to sync your data and first-class support to make EXO fit your needs.
         </p>
        <form method="post" className="mt-8 justify-center sm:flex" onSubmit={() => setSubmit(true)}>
         <div className="mb-4 sm:mb-0 sm:mr-8">
         <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            onKeyDown={event => setEmail(event.target.value)}
            onClick={event => setEmail(event.target.value)}
            onBlur={event => setEmail(event.target.value)}
            onChange={event => setEmail(event.target.value)}
            required
            className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
          </div>
          <div className="mb-4 sm:mb-0 sm:mr-8">
          <label htmlFor="email-address" className="sr-only">
            Your existing website address
          </label>
          <input
            id="domain"
            name="domain"
            type="text"
            autoComplete="domain"
            onKeyDown={event => setDomain(event.target.value)}
            onClick={event => setDomain(event.target.value)}
            onBlur={event => setDomain(event.target.value)}
            onChange={event => setDomain(event.target.value)}
            
            required
            className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-md border-gray-300 rounded-md"
            placeholder="Current website URL"
          />
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Join the free beta
            </button>
          </div>
          </form>
          </>
        ) : (
            <>
            
            </>
        )}

        {!submit && (<div className="mt-12">
             <p>or <a href="https://discordapp.com/users/Touchless#5582" target="new">DM Touchless in the Gatsby Discord server</a>.</p>
        </div>)}
       
        <div className="mt-24">
            <a href="https://excessive-sound-e73.notion.site/Terms-of-Use-24fff49972804d6fba6f8ff0d769c856" target="new">Privacy Policy</a> © 2022 Touchless Inc. 
        </div>
        </div>
    </div>
  </div>
  )
}

export default IndexPage
