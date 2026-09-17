import React from 'react'
import image from '../assets/image.png'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Project2 = () => {

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
    <div className='flex flex-col xl:flex-row p-10 gap-14 justify-center xl:items-start items-center'>
        <div className="image border-2 border-gray-600 xl:w-6/10 p-4">
            <img src={image} className='' alt="Xclone" />
        </div>
        <div className="content text-white space-y-2 xl:w-3/10 w-8/10 ">
            <h1 className='text-4xl font-bold'>Spotify Frontend Clone</h1>
            <p className='text-gray-300'>UI layout of Spotify using only HTML , CSS and JS. The goal was to practice real-world layout structuring and styling techniques.</p>

            <h2 className='text-gray-400 mt-4'>Key Features</h2>
            <ul className=''>
                <li className='flex gap-2 items-center'><IoIosArrowDroprightCircle /> Flexbox & Grid layouts</li>
                <li className='flex gap-2 items-center'><IoIosArrowDroprightCircle /> UI component structuring</li>
                <li className='flex gap-2 items-center'><IoIosArrowDroprightCircle /> Navigation and sidebar design</li>
                <li className='flex gap-2 items-center'><IoIosArrowDroprightCircle /> Styling and spacing techniques </li>
            </ul>
              <h3 className='text-gray-400 mt-4'>TECH STACK</h3>
              <div className='-mt-2'>
                  <button className='bg-[#161616] border-2 border-gray-600 m-2 px-4 py-1 rounded '>html</button>
                <button className='bg-[#161616] border-2 border-gray-600 m-2 px-4 py-1 rounded '>css</button>
                <button className='bg-[#161616] border-2 border-gray-600 m-2 px-4 py-1 rounded '>js</button>
              </div>
              <div className='-mt-2 flex'>
                  <a href='https://prince719217.github.io/my-project/' target='_value' className='bg-sky-300 flex items-center gap-2 text-lg w-fit font-medium m-2 px-4 py-1 rounded-2xl'><FaEye /> Live Preview</a>
                <a href='https://github.com/prince719217/my-project' target='_value' className='bg-[#161616] border-2 border-gray-600 m-2 px-4 py-1 rounded-2xl flex items-center gap-2 text-lg'><FaGithub />Github</a>
              </div>


        </div>
    </div>
  )
}

export default Project2