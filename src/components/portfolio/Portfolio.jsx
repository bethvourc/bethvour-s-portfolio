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
    mlSignal:
      "Provides stable feature ingestion and drift-aware stream data for ML workflows.",
    sweSignal:
      "Checkpoint-safe streaming pipeline with resilient recovery and operational safeguards.",
    stack: ["PyFlink", "Docker", "SQLite"],
    github: "https://github.com/bethvourc/cadence-v2",
    brief: "https://github.com/bethvourc/cadence-v2#readme",
  },
  {
    id: "livemarket-streams",
    title: "LiveMarket Streams",
    domain: "Infrastructure",
    group: "infrastructure",
    mlSignal:
      "Enables low-latency signal generation for model features and analytics scoring.",
    sweSignal:
      "Real-time stream processing architecture tuned for throughput and service reliability.",
    stack: ["Kafka", "Pandas", "Notebook"],
    github: "https://github.com/bethvourc/real-time-stock-analysis",
    brief: "https://github.com/bethvourc/real-time-stock-analysis#readme",
  },
  {
    id: "tradesim-lab",
    title: "TradeSim Lab",
    domain: "Infrastructure",
    group: "infrastructure",
    mlSignal:
      "Supports strategy modeling and evaluation through reproducible simulation datasets.",
    sweSignal:
      "Built as a repeatable back-testing sandbox with deterministic experiment workflows.",
    stack: ["C++", "Python", "Back-testing"],
    github: "https://github.com/bethvourc/TradeSim-Pro",
    brief: "https://github.com/bethvourc/TradeSim-Pro#readme",
  },
  {
    id: "mediaforge",
    title: "MediaForge",
    domain: "Systems",
    group: "systems",
    mlSignal:
      "Creates structured media transformation flows usable in downstream ML data preparation.",
    sweSignal:
      "Queue-backed micro-service architecture with isolated workers and scalable orchestration.",
    stack: ["Flask", "RabbitMQ", "Kubernetes"],
    github: "https://github.com/bethvourc/video-to-mp3",
    brief: "https://github.com/bethvourc/video-to-mp3#readme",
  },
  {
    id: "handwave",
    title: "HandWave",
    domain: "ML",
    group: "ml",
    mlSignal:
      "Computer vision inference loop for real-time gesture recognition and tracking.",
    sweSignal:
      "Integrated camera processing, control events, and runtime performance tuning.",
    stack: ["OpenCV", "MediaPipe", "PyAutoGUI"],
    github: "https://github.com/bethvourc/ai_virtual_mouse",
    brief: "https://github.com/bethvourc/ai_virtual_mouse#readme",
  },
  {
    id: "finsight",
    title: "FinSight",
    domain: "ML",
    group: "ml",
    mlSignal:
      "LSTM-based forecasting workflows for market trend estimation and signal projection.",
    sweSignal:
      "Interactive dashboard and data services for consistent model output delivery.",
    stack: ["Streamlit", "LSTM", "Finance"],
    github: "https://github.com/bethvourc/stock-prediction-dashboard",
    brief: "https://github.com/bethvourc/stock-prediction-dashboard#readme",
  },
  {
    id: "delaysense",
    title: "DelaySense",
    domain: "ML",
    group: "ml",
    mlSignal:
      "Supervised learning pipeline for pre-flight delay risk scoring and feature importance.",
    sweSignal:
      "Structured ETL and evaluation flow for reproducible prediction pipeline runs.",
    stack: ["XGBoost", "Pandas", "EDA"],
    github: "https://github.com/bethvourc/flight-delay-prediction",
    brief: "https://github.com/bethvourc/flight-delay-prediction#readme",
  },
  {
    id: "b3th",
    title: "b3th",
    domain: "Developer Tools",
    group: "tools",
    mlSignal:
      "LLM-assisted prompt and response workflows for codebase-aware automation tasks.",
    sweSignal:
      "CLI-driven git workflow tooling with robust repository interaction patterns.",
    stack: ["Python", "GitHub API", "Groq LLM"],
    github: "https://github.com/bethvourc/b3th",
    brief: "https://github.com/bethvourc/b3th#readme",
  },
  {
    id: "copyfiles-cli",
    title: "CopyFiles CLI",
    domain: "Developer Tools",
    group: "tools",
    mlSignal:
      "Generates clean context payloads that improve LLM prompting and model utility.",
    sweSignal:
      "Fast repository parsing and packaging utility with predictable command-line behavior.",
    stack: ["Python", "CLI", "Parsing"],
    github: "https://github.com/bethvourc/copyfiles-cli",
    brief: "https://github.com/bethvourc/copyfiles-cli#readme",
  },
  {
    id: "snapsolve",
    title: "SnapSolve",
    domain: "Developer Tools",
    group: "tools",
    mlSignal:
      "Vision OCR + LLM reasoning pipeline for math problem understanding and explanation.",
    sweSignal:
      "Published package architecture with input handling and response formatting workflows.",
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
      <h2>ML x SWE Build Log</h2>

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
          <span>ml / swe signal</span>
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
              <div className="portfolio-ledger__signals">
                <p>
                  <span>ml</span>
                  {project.mlSignal}
                </p>
                <p>
                  <span>swe</span>
                  {project.sweSignal}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
