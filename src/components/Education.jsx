import React from "react";

import { FaReact, FaHtml5, FaJsSquare } from "react-icons/fa";
import { BsCss } from "react-icons/bs";
import education from '../assets/educationIcon.svg'
import { RiTailwindCssFill } from "react-icons/ri";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Education = () => {
// ❤️
  useGSAP(() => {

    const techs = gsap.utils.toArray(".tech");   // yeh saare '.tech' wlo ka array bna dega.

    // console.log(techs) 
    // hamari orbit ring ki dimension 380 x 380 h. jise circle me convert krne pr radius 190 hoga . 
    const radius = 190;

    // Put every icon around the circle
    techs.forEach((tech, index) => {

      const angle = (index / techs.length) * Math.PI * 2;
    // normally circle 360degree ka hota h ('2*pi' in js).

      gsap.set(tech, {      // Put this element here immediately. It doesn't animate.
        x: Math.cos(angle) * radius,    // yha physics wale components (rcos0 , rsin0) ka concept lga h.
        y: Math.sin(angle) * radius,
      });

    });


    // yeh bs orbit ko rotate kr rha h.
    gsap.to(".orbit-ring", {
      rotation: 360,    
      duration: 20,
      repeat: -1,
      ease: "none",
    });


    // yeh orbit k saath saath icons ko rotate kr rha h, taki vo sidhe rhe.
    gsap.to(".tech", {
      rotation: -360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });

  });


  return (

    <div
      className="
        orbit xl:scale-100 scale-75
        w-[500px]
        h-[500px]
        relative
        flex
        items-center
        justify-center
      "
    >

      {/* hme orbit chahiye center me. top-[50%], left-[50%] orbit k top-left corner ko center me bhej dega. isliye hmne , -translate-x-1/2
          ,-translate-y-1/2 . yeh kiya jisse orbit apne width aur height k 50%-50% wapis shift ho jayega*/}

      <div
        className="
          orbit-ring
          absolute
          w-[380px]
          h-[380px]
          top-[50%]
          left-[50%]
          -translate-x-1/2
          -translate-y-1/2  
          border
          border-white/15
          rounded-full
        "
      >

        {/* React */}

        <div
          className="
            tech
            absolute
            top-[50%]
            left-[50%]
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          <FaReact className="text-blue-500 text-5xl" />
        </div>


        {/* JavaScript */}

        <div
          className="
            tech
            absolute
            top-[50%]
            left-[50%]
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          <FaJsSquare className="text-yellow-300 text-5xl" />
        </div>


        {/* CSS */}

        <div
          className="
            tech
            absolute
            top-[50%]
            left-[50%]
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          <BsCss className="text-blue-400 text-5xl" />
        </div>


        {/* Tailwind */}

        <div
          className="
            tech
            absolute
            top-[50%]
            left-[50%]
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          <RiTailwindCssFill className="text-blue-500 text-5xl" />
        </div>


        {/* HTML */}

        <div
          className="
            tech
            absolute
            top-[50%]
            left-[50%]
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          <FaHtml5 className="text-orange-400 text-5xl" />
        </div>

      </div>


      {/* CENTER PROFILE */}

      <div
        className="
          profile
          absolute
          top-[50%]
          left-[50%]
          -translate-x-1/2
          -translate-y-1/2
          w-[250px]
          h-[250px]
          rounded-full
          overflow-hidden
          border-2
          border-cyan-400/60
          shadow-[0_0_40px_rgba(34,211,238,0.25)]
          z-10
        "
      >

        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQE0RUs5R-kKmA/profile-displayphoto-scale_200_200/B56ZxHX9h1KQAY-/0/1770723994442?e=1790208000&v=beta&t=N2K_4SNzbxmRDypHyUns8CZ5ckSX_aGd2xmvzEs7HLc"
          className="w-full h-full object-cover"
          alt="Profile"
        />

      </div>

    </div>

  );
};

export default Education;