import React, { useState } from "react";
import Certificate from "./Certificate";

import { useGSAP } from "@gsap/react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import gsap from "gsap";

const Section5 = () => {
  const [currIdx, setCurrIdx] = useState(0);

  const certificates = [
    {
      certificateDate: "27-Nov-2025",
      bgColor1: "orange",
      bgColor2: "yellow",
      CertificateName: "Data Structure Cource Completion",
      CertificateProvider: "CodeChef",
      certificateLink:
        "https://drive.google.com/file/d/1vo1XbW-lw6TRARURxywnB3piHj2JWYT-/view?usp=sharing",
    },
    {
      certificateDate: "18-Oct-2025",
      bgColor1: "red",
      bgColor2: "#676088",
      CertificateName:
        "Programming Fundamentals using Python - Part 1 Cource Completion",
      CertificateProvider: "Infosys SpringBoard",
      certificateLink:
        "https://drive.google.com/file/d/1PXYq-87EqNrM3HGSBGzYGnqn3efG4A39/view?usp=sharing",
    },
    {
      certificateDate: "8-Mar-2026",
      bgColor1: "pink",
      bgColor2: "purple",
      CertificateName: "Entrepreneurship Cource Completion",
      CertificateProvider: "Infosys Springboard",
      certificateLink:
        "https://drive.google.com/file/d/17ArmixjgWAatCM-Gyfw6nbgFJdnfhNFN/view?usp=sharing",
    },
    {
      certificateDate: "8-Mar-2026",
      bgColor1: "gray",
      bgColor2: "skyBlue",
      CertificateName:
        "The Essential Guide to Entrepreneurship Cource Completion",
      CertificateProvider: "Infosys Springboard",
      certificateLink:
        "https://drive.google.com/file/d/1hK6YZBCGcjzJkai9OufYFFSeNocb3iTi/view?usp=sharing",
    },
  ];

  const getCertificate = (offset) => {
    return certificates[(currIdx + offset) % certificates.length];
  };

  useGSAP(() => {
    gsap.from(".certificate", {
      x: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [currIdx]);

  const handleLeft = () => {
    setCurrIdx((prev) => {
      return prev === 0 ? certificates.length - 1 : prev - 1;
    });
  };

  const handleRight = () => {
    setCurrIdx((prev) => {
      return prev === certificates.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <div className="min-h-screen w-full px-3 sm:px-5">

      {/* Heading */}
      <div className="text-center space-y-3">

        <h3 className="text-transparent text-sm sm:text-base md:text-lg bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Credentials & Achievements
        </h3>

        <div className="text-transparent text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          <span>Premium</span> Certificates
        </div>

        <p className="text-white text-xs sm:text-sm md:text-[16px] max-w-3xl mx-auto px-2">
          Each certificate presented in an elegant envelope design — hover to
          reveal the certificate.
        </p>

      </div>

    <div className="w-full flex justify-center items-center mt-16 sm:mt-20 md:mt-24 xl:mt-30">

  {/* Left button */}
  <button
    onClick={handleLeft}
    className="text-white text-2xl sm:text-3xl cursor-pointer shrink-0 mx-2 sm:mx-4"
  >
    <FaChevronCircleLeft />
  </button>

  {/* Desktop certificates */}
  <div className="certificate hidden xl:flex gap-5">
    <Certificate {...getCertificate(0)} />
    <Certificate {...getCertificate(1)} />
    <Certificate {...getCertificate(2)} />
    <Certificate {...getCertificate(3)} />
  </div>

  {/* Mobile / Tablet */}
  <div className="certificate flex xl:hidden justify-center min-w-0 flex-1">
    <Certificate {...getCertificate(0)} />
  </div>

  {/* Right button */}
  <button
    onClick={handleRight}
    className="text-white text-2xl sm:text-3xl cursor-pointer shrink-0 mx-2 sm:mx-4"
  >
    <FaChevronCircleRight />
  </button>

</div>

    </div>
  );
};

export default Section5;
