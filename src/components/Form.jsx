import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Form = () => {
  const formRef = useRef();

  useGSAP(() => {
    gsap.from("form", {
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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ogaw0jf",
        "template_yy95au8",
        formRef.current,
        {
          publicKey: "O73Rd6e8gM4jWqRHX",
        }
      )
      .then(
        () => {
          alert("Message sent successfully!");

          formRef.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="outline-1 outline-gray-500 gap-10 p-8 rounded-2xl xl:w-1/2 w-7/10 xl:h-[50vh] h-[40vh] flex justify-self-center flex-col"
      >
        <div className="flex xl:flex-row flex-col gap-5 xl:gap-0 px-5">

          <input
            type="text"
            name="name"
            required
            className="outline-1 rounded-xl xl:w-2/5 w-full m-auto text-gray-200 p-3 outline-gray-500"
            placeholder="Name"
          />

          <input
            type="email"
            name="email"
            required
            className="outline-1 rounded-xl xl:w-2/5 w-full m-auto text-gray-200 p-3 outline-gray-500"
            placeholder="Email"
          />

        </div>

        <textarea
          name="message"
          required
          placeholder="Message"
          className="outline-1 rounded-xl w-8/10 xl:mt-0 -mt-5 xl:w-[85%] m-auto text-gray-200 p-3 outline-gray-500"
        ></textarea>

        <button
          type="submit"
          className="bg-purple-400 w-[86%] xl:mt-0 -mt-8 m-auto p-3 text-white font-bold rounded-2xl"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;

