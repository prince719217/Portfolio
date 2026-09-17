import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Tags = ({ education, duration, grade, cource, college }) => {
  useGSAP(() => {
    gsap.fromTo(
      ".loading",
      {
        scaleX: 0,
        transformOrigin: "left center",
      },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".parent",
          start: "top 80%",
        },
      }
    );
  });

  return (
    <div className="bg-[#464646] parent w-full max-w-full box-border p-3 sm:p-4 rounded-2xl">
      <div className="flex items-start gap-3 sm:gap-4 min-w-0">
        <div className="border-[1px] h-fit w-fit shrink-0 p-2 sm:p-3 rounded-lg border-gray-400 bg-[#425557]">
          <img src={education} className="w-6 sm:w-7" alt="education" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center text-sm sm:text-md gap-1.5 sm:gap-2">
            <button className="shrink-0 py-1 px-2 bg-[#415b5f] text-[#24c9e2] rounded-lg text-xs sm:text-sm">
              {duration}
            </button>

            <div className="text-gray-400">•</div>

            <div className="text-gray-400 break-words">
              {grade}
            </div>
          </div>

          <div className="text-[#cfcfcf] font-extrabold text-base sm:text-lg break-words">
            {cource}
          </div>

          <p className="text-sm text-gray-400 ml-1 break-words">
            {college}
          </p>

          <div className="h-1 loading mt-2 w-full max-w-[18rem] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Tags
