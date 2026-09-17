import React from "react";
import toast from "react-hot-toast";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Form from "./Form";
import Footer from "./Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section6 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from([".first", ".second", ".third", ".socialCont"], {
      y: 20,
      duration: 0.8,
      opacity: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".parentcont",
        start: "top 60%",
      },
    });
  });

  async function copyEmail() {
    await navigator.clipboard.writeText("princegupta98101@gmail.com");
    toast.success("Email copied!");
  }

  return (
    <div className="text-center space-y-8 parentcont w-full max-w-full overflow-hidden px-3 sm:px-5">
      <h1 className="w-full first text-white font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl break-words">
        Let's Build Something Epic Together
      </h1>

      <p className="text-gray-600 second">Get in touch directly:</p>

      <p
        onClick={copyEmail}
        className="text-sky-400 third cursor-pointer break-all"
      >
        princegupta98101@gmail.com
      </p>

      <div className="text-white socialCont flex gap-5 sm:gap-6 text-2xl justify-center">
        <FaTwitter />
        <FaGithub />
        <IoLogoLinkedin />
        <MdEmail />
      </div>

      <Form />
      <Footer />
    </div>
  );
};

export default Section6
