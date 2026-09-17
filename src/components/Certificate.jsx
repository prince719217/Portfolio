import React, { useRef } from "react";

import { FaRegShareFromSquare } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { IoSchool } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

const Certificate = ({
  CertificateName,
  CertificateProvider,
  certificateDate,
  bgColor1,
  bgColor2,
  certificateLink,
}) => {
  const parentRef = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    const parent = parentRef.current;
    const image = imageRef.current;

    parent.addEventListener("mouseenter", () => {
      gsap.to(image, {
        y: -11,
        duration: 0.3,
      });
    });

    parent.addEventListener("mouseleave", () => {
      gsap.to(image, {
        y: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    });
  });

  return (
    <div>
      <div
        ref={parentRef}
        className="
          relative flex justify-center rounded-2xl
          h-[27vh] w-[65vw]
          sm:h-[30vh] sm:w-[60vw]
          md:h-[35vh] md:w-[40vw]
          xl:h-[45vh] xl:w-[20vw]
        "
        style={{ background: `${bgColor1}` }}
      >
        {/* Certificate image */}
        <img
          ref={imageRef}
          src="https://gauravbitsportfolio2.netlify.app/assets/cert-C5z7FVu7.jpg"
          className="
            image absolute bottom-0 rounded-lg
            w-[90%] h-[29vh]
            sm:h-[32vh]
            md:h-[37vh]
            xl:w-9/10 xl:h-[49vh]
          "
          alt="Certificate"
        />

        {/* Bottom information section */}
        <div
          className="
            absolute bottom-0 z-10
            flex flex-col justify-center items-center
            gap-1 rounded-t-[45%]
            h-[24vh] w-[65vw]
            sm:h-[25vh] sm:w-[60vw]
            md:h-[28vh] md:w-[40vw]
            xl:h-[29vh] xl:w-[20vw]
          "
          style={{
            background: `linear-gradient(to right, ${bgColor1}, ${bgColor2})`,
          }}
        >
          <h1
            className="
              text-white text-center font-bold
              text-sm w-9/10
              sm:text-base
              md:text-lg
              xl:text-xl xl:w-7/10
            "
          >
            {CertificateName}
          </h1>

          <p
            className="
              text-white flex justify-center items-center
              flex-wrap gap-1
              text-[10px]
              sm:text-xs
              md:text-sm
              xl:text-sm xl:gap-3
            "
          >
            <span className="flex gap-1 items-center">
              <IoSchool />
              {CertificateProvider}
            </span>

            <span>•</span>

            <span className="flex gap-1 items-center">
              <SlCalender />
              {certificateDate}
            </span>
          </p>

          <a
            href={certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-white flex gap-1 items-center
              px-2 mt-2
              border-2 border-white rounded-xl
              py-0.5
              text-xs
              sm:text-sm
            "
          >
            <FaRegShareFromSquare />
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificate;