import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";  

const Section1 = () => {
 
  return (
    <div className='text-white flex h-[84vh] md:gap-6 gap-5 md:mt-0 mt-60 md:justify-center items-center flex-col'>
      <h1 className='md:text-8xl text-6xl font-bold text-center'>Prince Gupta</h1>
      <h3 className='md:text-4xl text-2xl font-semibold'>Frontend Developer </h3>
      <div className='flex gap-5'>
        <button className='px-6 cursor-pointer py-3 hover:scale-105 bg-white text-black rounded-full'>Contact me</button>
        <button className='px-6 cursor-pointer py-3 hover:bg-[#ffffff25] bg-transparent border-[1px] rounded-full '>My Resume</button>
      </div>
     <div className='flex text-3xl gap-4 cursor-pointer'>
    <IoLogoGithub className='hover:text-white text-[#ffffff99] hover:scale-110'/>
    <IoLogoLinkedin className='hover:text-white text-[#ffffff99] hover:scale-110'/>
    <FaTwitter className='hover:text-white text-[#ffffff99] hover:scale-110'/>
     </div>
    </div>
  )
}

export default Section1