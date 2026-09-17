import React, { useRef } from "react";
import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import Boxes from "./Boxes";

const Section3 = () => {

  const playgroundRef = useRef(null);

  return (
    <div>
      <div className="h-screen bg-[#070a0f] flex items-center gap-4 p-8 flex-col">

        <h1 className="text-6xl font-extrabold text-white">
          Skills
          <span className="text-sky-400"> Playground</span>
        </h1>

        <p className="text-gray-400">
          Drag, throw, and watch them bounce. Nothing escapes!
        </p>

        {/* YELLOW PLAYGROUND */}
        <div
          ref={playgroundRef}
          className="relative flex gap-5 w-[70%] h-[90%] p-5 border-b-4 border-gray-700 overflow-hidden"
        >

          <Boxes
            constraintsRef={playgroundRef}
            image={<FaReact className="w-15 h-15" />}
            techName="React"
            bgColor="bg-sky-300"
          />

          <Boxes
            constraintsRef={playgroundRef}
            image={<FaHtml5 className="w-15 h-15" />}
            techName="Html"
            bgColor="bg-orange-500"
          />

          <Boxes
            constraintsRef={playgroundRef}
            image={<FaCss  className="w-15 h-15" />}
            techName="CSS"
            bgColor="bg-blue-500"
          />

          <Boxes
            constraintsRef={playgroundRef}
            image={<FaJsSquare  className="w-15 h-15" />}
            techName="Javascript"
            bgColor="bg-green-500"
          />

          <Boxes
            constraintsRef={playgroundRef}
            image={<RiTailwindCssFill className="w-15 h-15" />}
            techName="Tailwind CSS"
            bgColor="bg-purple-500"
          />

        </div>

      </div>
    </div>
  );
};

export default Section3;