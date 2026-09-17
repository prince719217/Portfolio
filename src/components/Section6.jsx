import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Form from "./Form";
import Footer from "./Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Section6 = () => {
gsap.registerPlugin(ScrollTrigger, useGSAP);
  useGSAP(() => {
    gsap.from(['.first','.second','.third','.socialCont'],{
      y:20,
      duration:0.8,
      opacity:0,
      scrollTrigger:{
        trigger:'.parentcont',
        start:'top 60%',
        // markers:true,
         ease: "power2.inOut" 
      }
    })
  }
  )
  

  async function copyEmail() {
    await navigator.clipboard.writeText("princegupta98101@gmail.com");
    toast.success("Email copied!");
  }

  return (
    <div className="text-center space-y-8 parentcont">
      <h1 className="w-full text-6xl first text-white font-extrabold">
        Let's Build Something Epic Together
      </h1>
      <p className="text-gray-600 second">Get in touch directly:</p>
      <p onClick={copyEmail} className="text-sky-400 third cursor-pointer">
        princegupta98101@gmail.com
      </p>
      <div className="text-white socialCont flex gap-6 text-2xl justify-center">
        <FaTwitter />
        <FaGithub />
        <IoLogoLinkedin />
        <MdEmail />
      </div>
      <Form />

    <Footer/>
    </div>
  );
};

export default Section6;
