import React, { useEffect, useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills"
import ExperienceEducation from "./components/ExperienceEducation";
import ContactSection from "./components/ContactSection";

function App() {


  return (
    <>
      <Hero />
      <Work />
      <Skills />
      <ExperienceEducation />
      <ContactSection />
      {/* <div className="custom-cursor" ref={cursorRef}></div> */}
    </>
  );
}

export default App;
