import React, { useState } from 'react'
import Project1 from './Project1'
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import Project2 from './Project2'

const Section4 = () => {
  const [currentProject, setcurrentProject] = useState(0)

  const projectArray = [
    <Project1 key="project1" />,
    <Project2 key="project2" />,
  ]

  return (
    <div className="xl:h-screen w-full p-4 sm:p-6 xl:p-10 overflow-hidden">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-extrabold text-white">
        Featured{" "}
        <span className="bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-purple-500">
          Projects
        </span>
      </h1>

      <p className="text-gray-500 mt-2.5 text-center text-sm sm:text-lg xl:text-xl px-2">
        Explore my latest work showcasing modern web technologies and creative solutions
      </p>

      <div className="relative mt-4 sm:mt-6">
        <button
          aria-label="Previous project"
          className="leftBtn absolute z-20 top-1/2 left-0 sm:left-1 text-white text-4xl sm:text-5xl cursor-pointer"
          onClick={() => {
            setcurrentProject((prev) =>
              prev === 0 ? projectArray.length - 1 : prev - 1
            )
          }}
        >
          <CiCircleChevLeft />
        </button>

        <div className="w-full min-w-0">
          {projectArray[currentProject]}
        </div>

        <button
          aria-label="Next project"
          onClick={() => {
            setcurrentProject((prev) =>
              prev === projectArray.length - 1 ? 0 : prev + 1
            )
          }}
          className="rightBtn absolute z-20 top-1/2 right-0 sm:right-1 text-white text-4xl sm:text-5xl cursor-pointer"
        >
          <CiCircleChevRight />
        </button>
      </div>
    </div>
  )
}

export default Section4
