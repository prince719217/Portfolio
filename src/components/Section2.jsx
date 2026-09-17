import React from 'react'
import Education from './Education'
import Schooling from './Schooling'

const Section2 = () => {
  return (
    <div className='flex md:justify-around h-screen items-center mt-20  xl:flex-row flex-col'>
      <Education/>
      <Schooling/>  
    </div>
  )
}

export default Section2