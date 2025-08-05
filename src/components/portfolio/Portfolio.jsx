import React, { useState } from "react";
import "./portfolio.css";
import { Github, FileText } from "lucide-react";

/** -----------------------------
 *  Curated, category-tagged list
 *  -----------------------------
 */
const projects = [
  // ── Developer-Tooling ─────────────────────────────────────────
  {
    id: 1,
    title: "b3th – AI-Powered Git Copilot",
    category: "Developer Tools",
    tags: ["Python", "GitHub API", "Groq LLM"],
    github: "https://github.com/bethvourc/b3th",
    brief: "https://github.com/bethvourc/b3th#readme",
  },
  {
    id: 2,
    title: "CopyFiles CLI – Prompt-Ready Repo Packager",
    category: "Developer Tools",
    tags: ["Python", "CLI", "Parsing"],
    github: "https://github.com/bethvourc/copyfiles-cli",
    brief: "https://github.com/bethvourc/copyfiles-cli#readme",
  },
  {
    id: 3,
    title: "SnapSolve – AI Math Tutor (npm)",
    category: "Developer Tools",
    tags: ["TypeScript", "Vision OCR", "Gemini LLM"],
    github: "https://github.com/bethvourc/b3th-solve",
    brief: "https://github.com/bethvourc/b3th-solve#readme",
  },

  // ── Systems / Micro-services ─────────────────────────────────
  {
    id: 4,
    title: "MediaForge – Video-to-MP3 Micro-services",
    category: "Systems",
    tags: ["Flask", "RabbitMQ", "Kubernetes"],
    github: "https://github.com/bethvourc/video-to-mp3",
    brief: "https://github.com/bethvourc/video-to-mp3#readme",
  },

  // ── Data Engineering ─────────────────────────────────────────
  {
    id: 5,
    title: "FlinkCadence – Streaming CSV Ingestor",
    category: "Data Engineering",
    tags: ["PyFlink", "Docker", "SQLite"],
    github: "https://github.com/bethvourc/cadence-v2",
    brief: "https://github.com/bethvourc/cadence-v2#readme",
  },
  {
    id: 6,
    title: "TradeSim Lab – Algo-Trading Sandbox (WIP)",
    category: "Data Engineering",
    tags: ["C++", "Python", "Back-testing"],
    github: "https://github.com/bethvourc/TradeSim-Pro",
    brief: "https://github.com/bethvourc/TradeSim-Pro#readme",
  },

  // ── Streaming & Analytics ────────────────────────────────────
  {
    id: 7,
    title: "LiveMarket Streams – Real-Time Stock Analytics",
    category: "Streaming & Analytics",
    tags: ["Kafka", "Pandas", "Notebook"],
    github: "https://github.com/bethvourc/real-time-stock-analysis",
    brief: "https://github.com/bethvourc/real-time-stock-analysis#readme",
  },

  // ── AI / ML & Interactive ───────────────────────────────────
  {
    id: 8,
    title: "HandWave – AI Virtual Mouse",
    category: "AI / ML",
    tags: ["OpenCV", "MediaPipe", "PyAutoGUI"],
    github: "https://github.com/bethvourc/ai_virtual_mouse",
    brief: "https://github.com/bethvourc/ai_virtual_mouse#readme",
  },
  {
    id: 9,
    title: "FinSight – Stock Prediction Dashboard",
    category: "AI / ML",
    tags: ["Streamlit", "LSTM", "Finance"],
    github: "https://github.com/bethvourc/stock-prediction-dashboard",
    brief: "https://github.com/bethvourc/stock-prediction-dashboard#readme",
  },
  {
    id: 10,
    title: "DelaySense – Flight Delay Predictor",
    category: "AI / ML",
    tags: ["XGBoost", "Pandas", "EDA"],
    github: "https://github.com/bethvourc/flight-delay-prediction",
    brief: "https://github.com/bethvourc/flight-delay-prediction#readme",
  },
];

/* dynamic filter list */
const categories = ["All", ...new Set(projects.map((p) => p.category))];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio">
      <h5 className="subtitle">Selected work</h5>
      <h2 className="title">Portfolio</h2>

      {/* filter pills */}
      <div className="portfolio__filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`portfolio__filter-btn${
              active === cat ? " active" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* project cards */}
      <div className="container portfolio__container">
        {filtered.map(({ id, title, tags, github, brief }) => (
          <article key={id} className="portfolio__item">
            <h3>{title}</h3>

            <ul className="portfolio__tags">
              {tags.map((tag) => (
                <li key={tag} className="portfolio__tag">
                  {tag}
                </li>
              ))}
            </ul>

            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn btn--icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                data-tooltip="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={brief}
                className="btn btn--icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Project documentation"
                data-tooltip="Docs"
              >
                <FileText size={18} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
