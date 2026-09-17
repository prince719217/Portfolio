import React from 'react'
import Education from './Education'
import Schooling from './Schooling'

const Section2 = () => {
  return (
    <div className="w-full min-h-screen flex md:justify-around items-center mt-20 xl:flex-row flex-col gap-8 xl:gap-0 px-2 sm:px-4 overflow-hidden">
      <Education/>
      <Schooling/>
    </div>
  )
}

export default Section2
