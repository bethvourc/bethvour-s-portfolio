import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="#about" className="footer__logo">
        Bethvour Chike
      </a>

      <ul className="permalinks">
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#portfolio">projects</a>
        </li>
        <li>
          <a href="#startup">startup</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/bethvour-chike/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <BsLinkedin aria-hidden="true" />
        </a>
        <a
          href="https://github.com/bethvourc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <FaGithub aria-hidden="true" />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Bethvour Chike. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
