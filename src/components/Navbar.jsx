import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex backdrop-blur-3xl  border-white/20 justify-between items-center px-5 py-3 bg-white/10 rounded-2xl m-4 z-1 cursor-pointer'>
        <div className='font-bold text-[22px] bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent'>Prince Gupta</div>
        <div className='md:flex gap-10 hidden text-gray-500 font-semibold'>
            <span>About</span>
            <span>Projects</span>
            <span>Experience</span>
            <span>Skills</span>
            <span>Contact</span>
        </div>
        <Link to='/contact' className=' text-white rounded-2xl font-bold bg-gradient-to-r from-[#1e6376] to-[#2c2348]  border-[1px] px-4 py-3'><span className='md:flex md:justify-center md:items-center md:gap-3 hidden'><FaArrowRight className='text-blue-400'/> Let's Talk</span>
        <MdOutlineMenu className='md:hidden'/>
        </Link>
    </div>
  )
}

export default Navbar