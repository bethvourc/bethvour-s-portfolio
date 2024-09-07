import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="About Bethvour image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                1,5 years <br /> Developer Experience
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                B.Sc. Computer Engineering 
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                25+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>
          <p>
          I’m a Computer Engineering major at Jackson State University with a solid foundation in software development and data engineering. I’m proficient in Python, C++, Java, SQL, Dart, and more, with experience in frameworks like Argo, Airflow, Kubernetes, React, and Node.js. I’m skilled in tools like Docker, Git, and Google Cloud, and have worked with libraries such as pandas, NumPy, TensorFlow, and OpenCV.
          </p>
          <p>
          My skills span high-performance data simulation, AI development (including gesture recognition with MediaPipe), and blockchain projects. I’m passionate about creating innovative solutions through technology and constantly expanding my expertise.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
