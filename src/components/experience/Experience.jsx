import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const frontendSkills = [
  "Angular",
  "React",
  "JavaScript",
  "TypeScript",
  "Material UI",
  "HTML",
  "CSS",
  "Tailwind",
];

const backendSkills = [
  "Python",
  "Apache Kafka",
  "Apache Airflow",
  "Apache Flink",
  "Argo",
  "Kubernetes",
  "APIs",
  "Docker",
  "Node JS",
  "MongoDB / SQL",
  "C++",
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h5 className="fade-in delay-1">The skills I have</h5>
      <h2 className="fade-in delay-2">My Experience</h2>

      <div className="container experience__container">
        {/* FRONTEND SKILLS CARD */}
        <div className="experience__category fade-in delay-3">
          <h3>Frontend Development Skills</h3>
          <div className="experience__content">
            {frontendSkills.map((skill, idx) => (
              <article
                key={skill}
                className={`experience__details fade-in delay-${4 + idx}`}
              >
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>

        {/* BACKEND SKILLS CARD */}
        <div className="experience__category fade-in delay-12">
          <h3>Backend Development Skills</h3>
          <div className="experience__content">
            {backendSkills.map((skill, idx) => (
              <article
                key={skill}
                className={`experience__details fade-in delay-${13 + idx}`}
              >
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
