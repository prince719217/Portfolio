import React, { useState } from 'react'
import Project1 from './Project1'
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import Project2 from './Project2'

const Section4 = () => {

const [currentProject, setcurrentProject ] = useState(0)
let projectArray = [
      <Project1/>,
      <Project2/>,
]

  return (
    <div className='xl:h-screen w-full p-10'>
        <h1 className='text-6xl text-center font-extrabold text-white'>Featured <span className="bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-purple-500">Projects</span></h1>
        <p className='text-gray-500 mt-2.5 text-center text-xl'>Explore my latest work showcasing modern web technologies and creative solutions</p>
        {/* <Project1/> */}
        <div className="relative">
          <div className="leftBtn absolute top-1/2 left- text-white text-5xl" onClick={() => {
            setcurrentProject((prev) => {
              return (prev === 0) ? projectArray.length-1 : prev-1 ;
            }
            )
          }
          }><CiCircleChevLeft /></div>

          {projectArray[currentProject]}

          <div onClick={() => {
            setcurrentProject((prev) => {
              return (prev === projectArray.length-1) ? 0 : prev+1 ;
            }
            )
          }
          } className="rightBtn absolute top-1/2 right-2 text-white text-5xl"><CiCircleChevRight /></div>
          </div>
    </div>
  )
}

export default Section4