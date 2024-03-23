import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/GRB.png";
import IMG2 from "../../assets/blog.png";
import IMG3 from "../../assets/calculator.png";
import IMG4 from "../../assets/brochure.png";
import IMG5 from "../../assets/Portfolio3.png";
import IMG6 from "../../assets/Portfolio4.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Grandma's Recipe Box",
    github: "https://github.com/The-BrAVo-Team/RecipeBox",
    demo: "https://recipebox-enogflugcq-uc.a.run.app", 
    brief:
      "https://github.com/The-BrAVo-Team/RecipeBox/blob/main/README.md",
  },
  {
    id: 2,
    image: IMG2,
    title: "Virtual Mouse",
    github: "https://github.com/bethvourc/virtual_mouse",
    demo: "https://sites.google.com/view/beth-demo/home", // temp demo link
    brief: "https://github.com/bethvourc/virtual_mouse/blob/main/README.md",
  },
  {
    id: 3,
    image: IMG3,
    title: "Password Manager",
    github: "https://github.com/bethvourc/password_manager",
    demo: "https://sites.google.com/view/beth-demo/home", // temp demo link
    brief:
      "https://github.com/bethvourc/password_manager", // TODO: Update link when README is added to repo
  },
  {
    id: 4,
    image: IMG4,
    title: "Portfolio Manager",
    github: "https://github.com/bethvourc/portfolio_manager",
    demo: "https://sites.google.com/view/beth-demo/home", // temp demo link
    brief: "https://github.com/bethvourc/portfolio_manager", // TODO: Update link when README is added to repo
  },
  {
    id: 5,
    image: IMG5,
    title: "Retro Ralley",
    github: "https://gitlab.com/tw-group-02/techwise_project1",
    demo: "https://sites.google.com/view/beth-demo/home", // temp demo link
    brief: "https://gitlab.com/tw-group-02/techwise_project1/-/blob/main/docs/presentations.md?ref_type=heads",
  },
  {
    id: 6,
    image: IMG6,
    title: "Beth Chess",
    github: "https://github.com/bethvourc/beth_chessGame",
    demo: "https://sites.google.com/view/beth-demo/home", // temp demo
    brief: "https://github.com/bethvourc/beth_chessGame/blob/master/README.md",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My most recent work can be found on Github</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, brief }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={brief} className="btn">
                  Project Brief
                </a>
              </div>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary">
                  Live Demo!
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
