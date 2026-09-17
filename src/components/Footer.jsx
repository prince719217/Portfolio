import React from 'react'
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Footer = () => {

gsap.registerPlugin(ScrollTrigger, useGSAP);
  useGSAP(() => {
    gsap.from('.footer',{
      y:-20,
      duration:0.8,
      opacity:0,
      scrollTrigger:{
        trigger:'.parentcont',
        start:'top 60%',
        // markers:true,
          ease: "power2.inOut" 
      }
    })
  }
  )

  return (
    <div className='space-y-20 pt-32 footer'>
          <h1 className="xl:text-9xl text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
        Prince Gupta
      </h1>

      <div className="flex gap-5 justify-center">
        <button className="p-3 text-3xl outline-1 outline-gray-500 rounded-2xl text-white">
          <FaTwitter />
        </button>
        <button className="p-3 text-3xl outline-1 outline-gray-500 rounded-2xl text-white">
          <FaGithub />
        </button>
        <button className="p-3 text-3xl outline-1 outline-gray-500 rounded-2xl text-white">
          <IoLogoLinkedin />
        </button>
        <button className="p-3 text-3xl outline-1 outline-gray-500 rounded-2xl text-white">
          <MdEmail />
        </button>
      </div>


<hr className="w-1/2 h-px mx-auto border-0 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.25)]" />

      <h3 className="text-center text-gray-500">© 2026 Prince Gupta</h3>
    </div>
  )
}

export default Footer