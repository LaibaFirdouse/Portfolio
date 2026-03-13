import React, { useEffect } from "react";
import "../App.css";

function Hero() {
  useEffect(() => {
    const words = ["Frontend Developer", "Designer", "Creator"];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    const typedText = document.querySelector(".typed-text");

    const typingSpeed = 100;
    const deletingSpeed = 60;
    const delayBetweenWords = 1500;

    function type() {
      if (!typedText) return;

      const currentWord = words[wordIndex];
      const currentLetters = currentWord.substring(0, letterIndex);
      typedText.textContent = currentLetters;

      if (!isDeleting && letterIndex < currentWord.length) {
        letterIndex++;
        setTimeout(type, typingSpeed);
      } else if (isDeleting && letterIndex > 0) {
        letterIndex--;
        setTimeout(type, deletingSpeed);
      } else if (!isDeleting && letterIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenWords);
      } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typingSpeed);
      }
    }

    type();
  }, []);

  return (
    <section className="hero">

      {/* Top Right Navbar */}
      <div className="hero-nav">
        <button onClick={() =>
          document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })
        }>Work</button>

        <button onClick={() =>
          document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })
        }>Skills</button>

        <button onClick={() =>
          document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })
        }>Experience</button>

        <button onClick={() =>
          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
        }>Contact</button>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Crafting <span className="highlight">Experiences</span> for the Web
        </h1>

        <h2 className="hero-subtitle">
          <span>I’m a</span>
          <span className="typed-text"></span>
        </h2>

        <p className="hero-desc">
          Hi, I’m <span className="highlight">Laiba Firdouse</span> — a passionate
          frontend developer who loves turning ideas into visually engaging
          digital experiences.
        </p>
      </div>

    </section>
  );
}

export default Hero;