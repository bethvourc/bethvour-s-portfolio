import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer fade-in delay-1">
      <a href="#" className="footer__logo fade-in delay-2">
        Bethvour Chike
      </a>

      
      <ul className="permalinks fade-in delay-3">
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
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#startup">Blaze Sentry</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      
      <div className="footer__socials fade-in delay-4">
        <a
          href="https://www.linkedin.com/in/bethvour-chike/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/bethvourc" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>

      
      <div className="footer__copyright fade-in delay-5">
        <small>&copy; {new Date().getFullYear()} Bethvour Chike. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
