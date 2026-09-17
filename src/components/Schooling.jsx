import React, { useState } from "react";

import education from "../assets/educationIcon.svg";
import higherEducation from "../assets/higherEducation.svg";
import secondaryEducation from "../assets/secondaryEducation.svg";
import certificate from "../assets/certificate.svg";
import Tags from "./Tags";

const Schooling = () => {
  const [educationView, setEducationView] = useState(true);
  const [acheivementView, setAcheivementView] = useState(false);

  return (
    <div
      className="
        w-[calc(100vw-1rem)]
        sm:w-[90vw]
        xl:w-[50vw]
        max-w-full
        border-2
        border-gray-700
        bg-[#35394179]
        rounded-2xl
        overflow-hidden
      "
    >
      {/* Tabs */}
      <div
        className="
          border-b-2
          border-gray-700
          flex
          justify-center
          p-3
          xl:p-4
          text-base
          xl:text-lg
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            cursor-pointer
            xl:scale-125
          "
          onClick={() => {
            setEducationView(true);
            setAcheivementView(false);
          }}
        >
          <img
            className="w-6 xl:w-7"
            src={education}
            alt=""
          />

          <span className="font-bold text-white">
            Education
          </span>
        </div>

        {/* Achievements */}
        {/*
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setEducationView(false);
            setAcheivementView(true);
          }}
        >
          <img
            className="w-6 xl:w-7"
            src={certificate}
            alt=""
          />

          <span className="font-bold text-white">
            Achievements
          </span>
        </div>
        */}
      </div>

      {/* Education */}
      {educationView && (
        <div className="flex flex-col pb-4 -space-y-2 w-full">
          
          {/* College */}
          <Tags
            education={education}
            duration="2024-2028"
            grade="Maintaining 7 CGPA"
            college="ABES Institute Of Technology, GZB"
            cource="B.tech, Computer Science"
          />

          {/* School */}
          <div className="xl:relative xl:left-1/2 w-full">
            <Tags
              education={secondaryEducation}
              duration="2022-2024"
              grade="Got 85%"
              college="YSY International School"
              cource="Secondary Education"
            />
          </div>

          {/* Higher Secondary */}
          <Tags
            education={higherEducation}
            duration="2022-2024"
            grade="Got 68.12%"
            college="YSY International School"
            cource="Higher Secondary"
          />
        </div>
      )}
    </div>
  );
};

export default Schooling;