import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { div } from 'three/tsl'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Tags = ({education, duration, grade, cource, college}) => {

   useGSAP(() => {

    gsap.fromTo(
      ".loading",
      {   // from this
        scaleX: 0,
        transformOrigin: "left center",  // When you scale this element, keep the left side fixed.
      },
      {  // to this
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out",

        scrollTrigger: {
          trigger: ".parent",
          start: "top 80%",
        //   markers: true,
        },
      }
    );

  });

  return (
   <div className='bg-[#464646] parent space-y w-full md:w-1/2 m-2 md:scale-90 scale-75 p-4 rounded-2xl'>


 <div className='flex space-y-1.5 gap-4'>
    <div className='border-[1px] h-fit w-fit p-3 rounded-lg border-gray-400 bg-[#425557]'>
        <img src={education} className='w-7' alt="sherr" />
    </div>
    <div>
        <div className='flex items-center text-md gap-2'>
            <button className='py-1 px-2 bg-[#415b5f] text-[#24c9e2] rounded-lg text-sm'>{duration}</button>
            <div className='text-gray-400'>•</div>
        <div className='text-gray-400'>{grade}</div>
        </div>
        <div className='text-[#cfcfcf] font-extrabold text-lg'>{cource}</div>
    <p className='text-sm text-gray-400 text- ml-1'>{college}</p>
    <div className='h-1 loading mt-2 w-[18vw] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full'></div>
    </div>

    </div>

        
   </div>
  )
}

export default Tags