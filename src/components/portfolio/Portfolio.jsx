import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/recipeBox.webp";
import IMG2 from "../../assets/tradesim.webp";
import IMG3 from "../../assets/passman.webp";
import IMG4 from "../../assets/qbot.webp";
import IMG5 from "../../assets/rrally.webp";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Grandma's Recipe Box",
    github: "https://github.com/The-BrAVo-Team/RecipeBox",
    //demo: "https://recipebox-enogflugcq-uc.a.run.app", 
    brief:
      "https://docs.google.com/presentation/d/1QnLPjJKFByRAJpoSY5kzBvveVECP-uZaaqULwnhfVGE/edit?usp=sharing",
  },
  {
    id: 2,
    image: IMG2,
    title: "TradeSim Pro",
    github: "https://github.com/bethvourc/TradeSim-Pro",
    //demo: "https://sites.google.com/view/beth-demo/home",
    brief: "https://www.canva.com/design/DAGQBMdOa4o/ONef3EvnHfSpEHMwR0gHEg/watch?utm_content=DAGQBMdOa4o&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
  {
    id: 3,
    image: IMG3,
    title: "Password Manager",
    github: "https://github.com/bethvourc/password_manager",
    //demo: "https://sites.google.com/view/beth-demo/home",
    brief:
      "https://github.com/bethvourc/password_manager/blob/main/README", // TODO: Update link when README is added to repo
  },
  {
    id: 4,
    image: IMG4,
    title: "QuizBot Gemini",
    github: "https://github.com/rukaiah-edhah/QuizBotGemini",
    //demo: "https://sites.google.com/view/beth-demo/home",
    brief: "https://github.com/rukaiah-edhah/QuizBotGemini/blob/main/quiz-bot-gemini/README.md", 
  },
  {
    id: 5,
    image: IMG5,
    title: "Retro Ralley",
    github: "https://gitlab.com/tw-group-02/techwise_project1",
    //demo: "https://sites.google.com/view/beth-demo/home", // temp demo link
    brief: "https://docs.google.com/presentation/d/1u4mio08jlg-XEEtDX4JojeAmyPSzZZlSwyifz3RTxtI/edit#slide=id.g23814320b96_0_173",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My most recent work can be found on Github</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, /*demo,*/ brief }) => {
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
              {/*              
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary">
                  Live Demo!
                </a>
          </div> 
          */}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
