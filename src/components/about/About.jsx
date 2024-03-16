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
          As a versatile Full Stack, Mobile App (iOS & Android), and Game Developer, 
          I currently contribute to the GUI of FEED, a large-scale Product Information Management system. 
          Leveraging a broad skill set in Angular, NodeJS, TypeScript, HTML, LESS, Git, IntelliJ, Jira, and Material UI, 
          I specialize in crafting and maintaining sophisticated user interfaces. These interfaces facilitate seamless communication and 
          data exchange with APIs while also focusing on delivering exceptional user experiences. My expertise extends to iOS and Android development, evidenced by my hands-on experience with 
          languages and frameworks such as Swift, Flutter, and Dart. Additionally, my venture into game development has allowed me to apply creative and 
          technical skills in unique ways, further broadening my development capabilities.
          </p>
          <p>
          As a Computer Engineering student at Jackson State University with a 4.0 GPA,
          I am keen on making significant contributions to the technology sector. 
          My skill set spans Python, Java, Flutter, TensorFlow, among others, enabling 
          me to understand the nexus between technology and society.
          </p>
          <p>
          Seeking internships and research roles, I'm recognized for my innovative problem-solving, 
          leadership, and meticulous nature. Aspiring to excel as a Computer Engineer, I engage 
          in projects like leading a team in the Battery WorkForce Challenge and interning at 
          Regenstrief Institute Inc. to refine my programming skills and apply my unique insights.
          My track record in academics, leadership, and community service underscores my commitment to 
          professional growth and technological innovation.
          </p>
          <p></p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
