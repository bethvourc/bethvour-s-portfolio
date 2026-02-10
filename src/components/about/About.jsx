import React, { useEffect, useState } from "react";
import "./about.css";

const ASCII_FRAMES = [
  String.raw`        .-==-.        
     .-'  /\  '-.     
    /   _/  \_   \    
   |   /  /\  \   |   
   |  |  /  \  |  |   
    \  \/_/\_\/  /    
     '-.______.--'    
`,
  String.raw`        .-==-.        
     .-'  /\  '-.     
    /   _/  \_   \    
   |   \  /\  /   |   
   |    |/  \|    |   
    \  /_/\_/\   /    
     '-.______.--'    
`,
  String.raw`        .-==-.        
     .-'  /\  '-.     
    /   _/  \_   \    
   |   /  /\  \   |   
   |   \_/  \_/   |   
    \   /\  /\   /    
     '-.______.--'    
`,
];

const About = () => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setFrame((previous) => (previous + 1) % ASCII_FRAMES.length);
    }, 240);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="about" className="about intro-shell">
      <h5>Intro</h5>
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
          <pre>{ASCII_FRAMES[frame]}</pre>
          <small>runtime: online</small>
        </aside>
      </div>
    </section>
  );
};

export default About;
