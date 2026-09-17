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
        className="outline-1 outline-gray-500 gap-6 sm:gap-8 p-4 sm:p-6 md:p-8 rounded-2xl w-full max-w-2xl xl:w-1/2 min-h-[360px] xl:h-[50vh] flex justify-self-center flex-col box-border"
      >
        <div className="flex xl:flex-row flex-col gap-4 xl:gap-0 px-0 sm:px-5 w-full min-w-0">

          <input
            type="text"
            name="name"
            required
            className="outline-1 rounded-xl xl:w-2/5 w-full min-w-0 m-auto text-gray-200 p-3 outline-gray-500 box-border"
            placeholder="Name"
          />

          <input
            type="email"
            name="email"
            required
            className="outline-1 rounded-xl xl:w-2/5 w-full min-w-0 m-auto text-gray-200 p-3 outline-gray-500 box-border"
            placeholder="Email"
          />

        </div>

        <textarea
          name="message"
          required
          placeholder="Message"
          className="outline-1 rounded-xl w-full xl:mt-0 m-auto text-gray-200 p-3 outline-gray-500 min-h-28 resize-y box-border"
        ></textarea>

        <button
          type="submit"
          className="bg-purple-400 w-full xl:w-[86%] m-auto p-3 text-white font-bold rounded-2xl"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;

