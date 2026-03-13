import React, { useEffect } from "react";
import "../App.css";

function Work() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => observer.observe(card));
  }, []);

  const projects = [
    {
      title: "Flowserve",
      desc: "Full-stack service marketplace with authentication, service browsing, and order management using React and Node.js.",
      link: "https://flowserve-six.vercel.app/",
    },
    {
      title: "Network Interceptor",
      desc: "Custom network request interceptor to monitor, modify, and handle API requests globally for better debugging and error handling.",
      link: "https://github.com/LaibaFirdouse/NetworkInterceptor",
    },
    {
      title: "Portfolio Website",
      desc: "Modern developer portfolio with animated UI, smooth scrolling navigation, and responsive design.",
      link: "#",
    },
  ];

  return (
    <section className="work" id="work">
      <h2 className="section-title">Work</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
