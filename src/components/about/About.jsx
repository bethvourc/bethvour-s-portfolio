import React from "react";
import "./about.css";
import KnotAnimation from "../ui/KnotAnimation";

const About = () => {
  return (
    <section id="about" className="about intro-shell">
      <p className="section-kicker">Intro</p>
      <h2>Boot Sequence</h2>

      <div className="container intro-shell__container">
        <div className="intro-shell__copy">
          <p className="intro-shell__name">Bethvour Chike</p>
          <p className="intro-shell__role">ML Engineer / Software Engineer</p>
          <p className="intro-shell__focus">
            Building resilient streaming data pipelines and production ML systems
            for real-time operational decisioning.
          </p>
        </div>

        <aside className="intro-shell__ascii" aria-label="Animated ASCII sketch">
          <KnotAnimation speedA={0.9} speedB={0.55} />
          <small>runtime: online</small>
        </aside>
      </div>
    </section>
  );
};

export default About;
