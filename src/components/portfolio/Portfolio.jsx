import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "28º EAC",
    github: "https://github.com/jgabfalcao/eventGoogleCalendarEAC",
  },
  {
    id: 2,
    image: IMG2,
    title: "Flappy Bird Game",
    github: "https://github.com/jgabfalcao/flappyBirdGame",
  },
  {
    id: 3,
    image: IMG3,
    title: "Calculator",
    github: "https://github.com/jgabfalcao/calculator",
  },
  {
    id: 4,
    image: IMG4,
    title: "Weather App",
    github: "https://github.com/jgabfalcao/WeatherApp",
  },
  {
    id: 5,
    image: IMG5,
    title: "Responsive Footer",
    github: "https://github.com/jgabfalcao/responsiveFooter",
  },
  {
    id: 6,
    image: IMG6,
    title: "Landing Page",
    github: "https://github.com/jgabfalcao/landing-page-academia",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <div className="portfolio__item-cta">
                <h3>{title}</h3>
                <a
                  href={github}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
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
