// ===================== Portfolio.jsx =====================
import React, { useState } from "react";
import "./portfolio.css";
import { Github, FileText } from "lucide-react"; // ➜  npm i lucide-react

import IMG1 from "../../assets/recipeBox.webp";
import IMG2 from "../../assets/tradesim.webp";
import IMG3 from "../../assets/passman.webp";
import IMG4 from "../../assets/qbot.webp";
import IMG5 from "../../assets/rrally.webp";

/**
 * 🔥  Component highlights
 * 1. Category filter chips – smart filtering
 * 2. Tech‑stack tags – quick skill‑scan
 * 3. Modern card design with hover‑lift
 * 4. Centred action icons with tool‑tips (visible pre + post hover)
 */

const projects = [
  {
    id: 1,
    image: IMG1,
    title: "Grandma's Recipe Box",
    category: "Full‑Stack",
    tags: ["React", "Flask", "PostgreSQL"],
    github: "https://github.com/The-BrAVo-Team/RecipeBox",
    brief:
      "https://docs.google.com/presentation/d/1QnLPjJKFByRAJpoSY5kzBvveVECP-uZaaqULwnhfVGE/edit?usp=sharing",
  },
  {
    id: 2,
    image: IMG2,
    title: "TradeSim Pro",
    category: "Data",
    tags: ["Pandas", "scikit‑learn", "FastAPI"],
    github: "https://github.com/bethvourc/TradeSim-Pro",
    brief:
      "https://www.canva.com/design/DAGQBMdOa4o/ONef3EvnHfSpEHMwR0gHEg/watch?utm_content=DAGQBMdOa4o&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
  {
    id: 3,
    image: IMG3,
    title: "Password Manager",
    category: "Security",
    tags: ["Cryptography", "Tkinter", "SQLite"],
    github: "https://github.com/bethvourc/password_manager",
    brief: "https://github.com/bethvourc/password_manager/blob/main/README",
  },
  {
    id: 4,
    image: IMG4,
    title: "QuizBot Gemini",
    category: "AI / ML",
    tags: ["LangChain", "OpenAI", "Streamlit"],
    github: "https://github.com/rukaiah-edhah/QuizBotGemini",
    brief:
      "https://github.com/rukaiah-edhah/QuizBotGemini/blob/main/quiz-bot-gemini/README.md",
  },
  {
    id: 5,
    image: IMG5,
    title: "Retro Ralley",
    category: "Game Dev",
    tags: ["Unity", "C#", "Firebase"],
    github: "https://gitlab.com/tw-group-02/techwise_project1",
    brief:
      "https://docs.google.com/presentation/d/1u4mio08jlg-XEEtDX4JojeAmyPSzZZlSwyifz3RTxtI/edit#slide=id.g23814320b96_0_173",
  },
];

const categories = ["All", ...new Set(projects.map((p) => p.category))];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio">
      <h5 className="subtitle">Selected work</h5>
      <h2 className="title">Portfolio</h2>

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

      <div className="container portfolio__container">
        {filtered.map(({ id, image, title, tags, github, brief }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
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