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
          <h3>Fullstack Developer</h3>
          <p className="sub">Crio.do • 2024</p>
          <p>
            Delivered multiple industry-style sprints by building responsive frontend applications with React,
            JavaScript, HTML, CSS, integrating REST APIs, and collaborating via Git under Agile workflows.
          </p>
        </div>

        <div className="exp-card">
          <h3>Cloud Support Engineer</h3>
          <p className="sub">Capgemini • 2022</p>
          <p>
            Provided technical support for cloud-based systems, diagnosing and resolving user and infrastructure
            issues within SLAs.
            Automated routine operational tasks using scripts, improving efficiency and reducing manual work.
            Collaborated with cross-functional teams in Agile environments to deliver secure, reliable, and
            scalable solutions.
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
