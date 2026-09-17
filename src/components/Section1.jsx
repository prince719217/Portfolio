import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Section1 = () => {
  return (
    <div className="text-white flex min-h-[84vh] md:h-[84vh] md:-mt-8 gap-5 md:gap-6 justify-center items-center flex-col px-4 overflow-hidden">
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-center">Prince Gupta</h1>
      <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center">Frontend Developer</h3>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
        <button className="px-5 sm:px-6 cursor-pointer py-3 hover:scale-105 bg-white text-black rounded-full">Contact me</button>
        <button className="px-5 sm:px-6 cursor-pointer py-3 hover:bg-[#ffffff25] bg-transparent border-[1px] rounded-full">My Resume</button>
      </div>

      <div className="flex text-3xl gap-4 cursor-pointer">
        <IoLogoGithub className="hover:text-white text-[#ffffff99] hover:scale-110"/>
        <IoLogoLinkedin className="hover:text-white text-[#ffffff99] hover:scale-110"/>
        <FaTwitter className="hover:text-white text-[#ffffff99] hover:scale-110"/>
      </div>
    </div>
  )
}

export default Section1
