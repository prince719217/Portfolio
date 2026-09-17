import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Section1 from "./components/Section1";
import Education from "./components/Education";
import Section2 from "./components/Section2";
import { Toaster } from "react-hot-toast";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="bg-black p-1">
      {/* <LandingPage/> */}
      {/* <CustomCursor/> */}
      <div
        className="
  min-h-screen
  
  bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
  bg-[size:43px_43px]   
"
      >
        <Navbar />
        <Section1 />
      </div>
      <Section2 />
      <Toaster />
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
{/* 
     <Routes>
      <Route path="/contact" element={<Form/>}></Route>
     </Routes> */}
    </div>
  );
};

export default App;
