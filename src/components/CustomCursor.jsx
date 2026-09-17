import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const CustomCursor = () => {
  useGSAP(() => {
    window.addEventListener("mousemove", (e) => {
      gsap.to(".curry", {
        x: e.x,
        y: e.y,
    //   ease: "elastic.in(1,0.1)",
    //   duration:0.3
      });
    });
  });

  return <div className="h-3 w-3 z-2 curry bg-gradient-to-r from-blue-300 to-blue-500 rounded-full fixed"></div>;
};

export default CustomCursor;
