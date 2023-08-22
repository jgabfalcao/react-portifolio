import React from "react";
import "./about.css";
import ME from "../../assets/joao-perfil6.png";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p className="about__description">
            My name is João Falcão and I'm 19 years old. I have always been very
            curious and passionate about technology. Since I was little, I loved
            being on top of the latest innovations and trends in the area.
            That's why I decided to pursue a career in technology, and I'm very
            happy with my choice. Currently, I work as a Full Stack developer
            using React and Typescript. I always try to update myself and
            improve my skills in this area that I love so much. In addition to
            my work, I also value my personal life very much. I like to go out
            with friends and family, play soccer and listen to music. It is
            important for me to have this balance in my life as it helps me to
            stay motivated and to face new challenges. I believe that my passion
            for technology and my dedication to work are the factors that help
            me achieve my goals.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
