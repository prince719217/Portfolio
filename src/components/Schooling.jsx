import React, { useState } from "react";
import education from "../assets/educationIcon.svg";
import higherEducation from "../assets/higherEducation.svg";
import secondaryEducation from "../assets/secondaryEducation.svg";
import certificate from "../assets/certificate.svg";
import Tags from "./Tags";

const Schooling = () => {

const [educationView, setEducationView] = useState(true)
const [acheivementView, setAcheivementView] = useState(false)

  return (
    <div className="xl:w-[50vw] w-[90vw] border-2  border-gray-700 bg-[#35394179] rounded-2xl overflow-hidden">
      <div className="border-b-2 border-gray-700 flex line1 justify-around p-4 text-lg">
        <div className="flex gap-2 xl:scale-125 " onClick={() => {
          setEducationView(true)
          setAcheivementView(false)
        }
        }>
          <img className="w-7" src={education} alt="" />
          <span className="font-bold text-white">Education</span>
        </div>
        {/* <div className="flex gap-2" onClick={() => {
          setEducationView(false)
          setAcheivementView(true)
        }}>
          <img className="w-7" src={certificate} alt="" />
          <span className="font-bold text-white">Achievements</span>
        </div> */}
      </div>
      {(educationView) && (
        <div className="flex flex-col pb-4 -space-y-2">
          <Tags
            education={education}
            duration="2024-2028"
            grade=" Maintaining 7 CGPA"
            college="ABES Institute Of Technology, GZB"
            cource="B.tech, Computer Science"
          />

         <div className="xl:relative left-1/2">
           <Tags
            education={secondaryEducation}
            duration="2022-2024"
            grade="Got 85%"
            college="YSY International School"
            cource="Secondary Education"
          />
         </div>
          <Tags
            education={higherEducation}
            duration="2024-2022"
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
