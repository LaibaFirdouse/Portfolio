import React, { useEffect, useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills"
import ExperienceEducation from "./components/ExperienceEducation";
import ContactSection from "./components/ContactSection";

function App() {
  // const cursorRef = useRef(null);

  // useEffect(() => {
  //   const cursor = cursorRef.current;
  //   if (!cursor) return;

  //   let x = 0,
  //     y = 0;
  //   let targetX = 0,
  //     targetY = 0;
  //   const speed = 0.2;

  //   // Mouse move handler
  //   const move = (e) => {
  //     targetX = e.pageX;
  //     targetY = e.pageY;
  //   };

  //   // Animation loop for smooth cursor follow
  //   const loop = () => {
  //     x += (targetX - x) * speed;
  //     y += (targetY - y) * speed;
  //     cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

  //     requestAnimationFrame(loop);
  //   };

  //   // Hover effects
  //   const hoverElements = document.querySelectorAll("button, a");
  //   const handleMouseEnter = () => cursor.classList.add("cursor-hover");
  //   const handleMouseLeave = () => cursor.classList.remove("cursor-hover");

  //   hoverElements.forEach((el) => {
  //     el.addEventListener("mouseenter", handleMouseEnter);
  //     el.addEventListener("mouseleave", handleMouseLeave);
  //   });

  //   window.addEventListener("mousemove", move);
  //   loop();

  //   return () => {
  //     window.removeEventListener("mousemove", move);
  //     hoverElements.forEach((el) => {
  //       el.removeEventListener("mouseenter", handleMouseEnter);
  //       el.removeEventListener("mouseleave", handleMouseLeave);
  //     });
  //   };
  // }, []);

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
