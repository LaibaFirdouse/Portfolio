import React from "react";
import "../App.css";

function Skills() {
  const skills = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    "https://api.iconify.design/logos:tailwindcss-icon.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/reactrouter.svg",
    "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",


  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((logo, index) => (
          <div
            className="skill-item"
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={logo} alt="Skill logo" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
