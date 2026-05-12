import React from "react";
import "../App.css";

function ExperienceEducation() {
  return (
    <section className="experience-edu-section" id="experience">
      <div className="experience-header">
        <h2 className="section-title-right">Experience & Education</h2>
      </div>

      <div className="experience-grid aligned-left">

        <div className="exp-card">
          <h3>Software Engineer - Cloud Infrastructure and Support</h3>
          <p className="sub">Capgemini • 2022 - 2025</p>
          <p>
            Resolved production incidents across Azure cloud environments through debugging and infrastructure troubleshooting.
            Managed Azure monitoring, access controls, and operational workflows to improve system reliability and efficiency.
          </p>
        </div>
        <div className="exp-card">
          <h3>Fullstack Development Apprenticeship</h3>
          <p className="sub">Crio.do • 2025 - 2026</p>
          <p>
            Delivered multiple industry-style sprints by building responsive applications with React,
            JavaScript,Typescript,Node.js,Express.js,integrating REST APIs, and collaborating via Git under Agile workflows.
          </p>
        </div>

        <div className="exp-card">
          <h3>Bachelor of Engineering in Computer Science</h3>
          <p className="sub">PA College Of Engineering Manglore • 2018 – 2022</p>
          <p>
            Specialized in software development, UI design, and web technologies

          </p>
        </div>
      </div>
    </section>
  );
}

export default ExperienceEducation;
