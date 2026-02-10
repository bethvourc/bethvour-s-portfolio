import React, { useState } from "react";
import "./portfolio.css";

const FILTERS = [
  { key: "all", label: "all" },
  { key: "infrastructure", label: "infra" },
  { key: "ml", label: "ml" },
  { key: "systems", label: "systems" },
  { key: "tools", label: "tools" },
];

const PROJECTS = [
  {
    id: "flinkcadence",
    title: "FlinkCadence",
    domain: "Infrastructure",
    group: "infrastructure",
    capability: "Streaming CSV ingest pipeline with checkpoint-safe job recovery.",
    stack: ["PyFlink", "Docker", "SQLite"],
    github: "https://github.com/bethvourc/cadence-v2",
    brief: "https://github.com/bethvourc/cadence-v2#readme",
  },
  {
    id: "livemarket-streams",
    title: "LiveMarket Streams",
    domain: "Infrastructure",
    group: "infrastructure",
    capability: "Real-time market analytics stream processing for low-latency signals.",
    stack: ["Kafka", "Pandas", "Notebook"],
    github: "https://github.com/bethvourc/real-time-stock-analysis",
    brief: "https://github.com/bethvourc/real-time-stock-analysis#readme",
  },
  {
    id: "tradesim-lab",
    title: "TradeSim Lab",
    domain: "Infrastructure",
    group: "infrastructure",
    capability: "Algorithmic trading sandbox for repeatable back-testing workflows.",
    stack: ["C++", "Python", "Back-testing"],
    github: "https://github.com/bethvourc/TradeSim-Pro",
    brief: "https://github.com/bethvourc/TradeSim-Pro#readme",
  },
  {
    id: "mediaforge",
    title: "MediaForge",
    domain: "Systems",
    group: "systems",
    capability: "Micro-service media pipeline with queue-backed workload isolation.",
    stack: ["Flask", "RabbitMQ", "Kubernetes"],
    github: "https://github.com/bethvourc/video-to-mp3",
    brief: "https://github.com/bethvourc/video-to-mp3#readme",
  },
  {
    id: "handwave",
    title: "HandWave",
    domain: "ML",
    group: "ml",
    capability: "Gesture-driven cursor control using camera vision inference loops.",
    stack: ["OpenCV", "MediaPipe", "PyAutoGUI"],
    github: "https://github.com/bethvourc/ai_virtual_mouse",
    brief: "https://github.com/bethvourc/ai_virtual_mouse#readme",
  },
  {
    id: "finsight",
    title: "FinSight",
    domain: "ML",
    group: "ml",
    capability: "Time-series forecasting dashboard for stock trend prediction.",
    stack: ["Streamlit", "LSTM", "Finance"],
    github: "https://github.com/bethvourc/stock-prediction-dashboard",
    brief: "https://github.com/bethvourc/stock-prediction-dashboard#readme",
  },
  {
    id: "delaysense",
    title: "DelaySense",
    domain: "ML",
    group: "ml",
    capability: "Supervised model pipeline for pre-flight delay risk scoring.",
    stack: ["XGBoost", "Pandas", "EDA"],
    github: "https://github.com/bethvourc/flight-delay-prediction",
    brief: "https://github.com/bethvourc/flight-delay-prediction#readme",
  },
  {
    id: "b3th",
    title: "b3th",
    domain: "Developer Tools",
    group: "tools",
    capability: "AI-assisted git workflow copilot for repository operations.",
    stack: ["Python", "GitHub API", "Groq LLM"],
    github: "https://github.com/bethvourc/b3th",
    brief: "https://github.com/bethvourc/b3th#readme",
  },
  {
    id: "copyfiles-cli",
    title: "CopyFiles CLI",
    domain: "Developer Tools",
    group: "tools",
    capability: "CLI utility for packaging repository context into prompt-ready output.",
    stack: ["Python", "CLI", "Parsing"],
    github: "https://github.com/bethvourc/copyfiles-cli",
    brief: "https://github.com/bethvourc/copyfiles-cli#readme",
  },
  {
    id: "snapsolve",
    title: "SnapSolve",
    domain: "Developer Tools",
    group: "tools",
    capability: "OCR-driven math solving package with LLM explanation output.",
    stack: ["TypeScript", "Vision OCR", "Gemini LLM"],
    github: "https://github.com/bethvourc/b3th-solve",
    brief: "https://github.com/bethvourc/b3th-solve#readme",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.group === activeFilter);

  return (
    <section id="portfolio" className="portfolio-ledger">
      <h5>Project Ledger</h5>
      <h2>Selected Systems</h2>

      <div className="portfolio-ledger__filters" role="tablist" aria-label="Project filters">
        {FILTERS.map((filter) => (
          <button
            key={filter.key}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter.key}
            className={`portfolio-ledger__filter${
              activeFilter === filter.key ? " is-active" : ""
            }`}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="container portfolio-ledger__container">
        <div className="portfolio-ledger__header" aria-hidden="true">
          <span>project</span>
          <span>domain</span>
          <span>capability</span>
          <span>links</span>
        </div>

        <ul className="portfolio-ledger__rows">
          {filteredProjects.map((project) => (
            <li key={project.id} className="portfolio-ledger__row">
              <div className="portfolio-ledger__project">
                <h3>{project.title}</h3>
                <p className="portfolio-ledger__stack">
                  {project.stack.join(" / ")}
                </p>
              </div>

              <p className="portfolio-ledger__domain">{project.domain}</p>
              <p className="portfolio-ledger__capability">{project.capability}</p>

              <div className="portfolio-ledger__links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} code`}
                >
                  code
                </a>
                <a
                  href={project.brief}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} docs`}
                >
                  docs
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
