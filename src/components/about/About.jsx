import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about" className="about">
      <h5 className="fade-in delay-1">Get To Know</h5>
      <h2 className="fade-in delay-2">About Me</h2>

      <div className="container about__container">
        {/* PROFILE IMAGE */}
        <div className="about__me fade-in delay-3">
          <div className="about__me-image">
            <img
              src={profile_picture}
              alt="Bethvour Chike smiling"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="about__content">
          {/* CARDS */}
          <div className="about__cards">
            <article className="about__card fade-in delay-4">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                3 years <br />
                Developer Experience
              </small>
            </article>

            <article className="about__card fade-in delay-5">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>B.Sc. Computer Engineering</small>
            </article>

            <article className="about__card fade-in delay-6">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                40+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>

          {/* PARAGRAPHS */}
          <p className="fade-in delay-7">
            I’m a Computer Engineering major with a solid foundation in software development and data engineering. I’m proficient in Python, C++, Java, SQL, Dart, and more, with experience in frameworks like Argo, Airflow, Kubernetes, React, and Node.js. I’m skilled in tools like Docker, Git, and Google Cloud, and have worked with libraries such as pandas, NumPy, TensorFlow, and OpenCV.
          </p>
          <p className="fade-in delay-8">
            My skills span high-performance data simulation, AI development (including gesture recognition with MediaPipe), and blockchain projects. I’m passionate about creating innovative solutions through technology and constantly expanding my expertise.
          </p>

          {/* BUTTON */}
          <a
            href="#contact"
            className="btn btn-primary fade-in delay-9"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
