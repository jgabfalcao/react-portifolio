import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Information Architecture</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interface Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Usability Tests</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Accessibility</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Prototyping</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design Patterns</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full Stack Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Security</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Third Party Integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-commerce</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Maintenance and Updates</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Migration and Redesign</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Writing Articles and Blog Posts</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Creation for Social Media</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Multilingual Delivery</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Email Marketing Content</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Infographics and Visual Design</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
