import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        JOÃO
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#comments">Comments</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jo%C3%A3o-falc%C3%A3o013/">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/joaaofalcao/">
          <FiInstagram />
        </a>
        <a href="https://github.com/jgabfalcao">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; JOÃO FALCÃO Developer. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
