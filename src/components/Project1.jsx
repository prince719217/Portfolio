import React from 'react'
import Xclone from '../assets/Xclone.png'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Project1 = () => {

    // useGSAP(() => {
    // var tl = gsap.timeline()
    //     tl.from('.content h1',{
    //     x:-50,
    //     duration:0.5,
    //     opacity:0
    //   })
    //     tl.from('.content p',{
    //     x:-50,
    //     duration:0.5,
    //     opacity:0
    //   })
    //     tl.from('.content h2',{
    //     x:-50,
    //     duration:0.5,
    //     opacity:0
    //   })
    //   tl.from('.content ul li',{
    //       x:-50,
    //       duration:0.5,
    //       opacity:0,
    //       stagger:0.4
    //     })
    //     tl.from('.content h3',{
    //     x:-50,
    //     duration:0.5,
    //     opacity:0
    //   })
    //     tl.from('.content button',{
    //     x:-50,
    //     duration:0.5,
    //     opacity:0,
    //     stagger:0.4
    //   })

    //     tl.from('.image',{
    //     x:-50,
    //     duration:0.5,
    //     opacity:0
    //   },'-=4')
    // }
    // )

  return (
    <div className='flex flex-col xl:flex-row p-4 sm:p-6 xl:p-10 gap-8 xl:gap-14 justify-center xl:items-start items-center w-full overflow-hidden'>
        <div className="image border-2 border-gray-600 text-center xl:w-6/10 xl:p-4 p-1">
            <img src={Xclone} className="w-full max-w-full h-auto object-contain" alt="Xclone" />
        </div>
        <div className="content text-white space-y-2 xl:w-3/10 w-8/10">
            <h1 className='text-3xl sm:text-4xl font-bold break-words'>Twitter (X) UI Clone</h1>
            <p className='text-gray-300'>This project focuses on recreating the Twitter interface with a clean layout, responsive design, and interactive hover effects.</p>

            <h2 className='text-gray-400 mt-4'>Key Features</h2>
            <ul className=''>
                <li className='flex gap-2 items-center'><IoIosArrowDroprightCircle /> Built with: HTML, Tailwind CSS</li>
                <li className='flex gap-2 items-center'><IoIosArrowDroprightCircle /> Fully responsive layout (desktop + mobile)</li>
                <li className='flex gap-2 items-center'><IoIosArrowDroprightCircle /> Hover interactions for better UI experience</li>
                <li className='flex gap-2 items-center'><IoIosArrowDroprightCircle /> Practiced modern utility-first CSS workflow with </li>
            </ul>
              <h3 className='text-gray-400 mt-4'>TECH STACK</h3>
              <div className='-mt-2'>
                  <button className='bg-[#161616] border-2 border-gray-600 m-2 px-4 py-1 rounded '>html</button>
                <button className='bg-[#161616] border-2 border-gray-600 m-2 px-4 py-1 rounded '>tailwind css</button>
              </div>
              <div className='-mt-2 flex flex-wrap'>
                  <a href='https://prince719217.github.io/twitter/' target='_value' className='bg-sky-300 flex items-center gap-2 text-lg w-fit font-medium m-2 px-4 py-1 rounded-2xl'><FaEye /> Live Preview</a>
                <a href='https://github.com/prince719217/twitter' target='_value' className='bg-[#161616] border-2 border-gray-600 m-2 px-4 py-1 rounded-2xl flex items-center gap-2 text-lg'><FaGithub />Github</a>
              </div>


        </div>
    </div>
  )
}

export default Project1