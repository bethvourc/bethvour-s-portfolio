import React from "react";
import "./contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact contact-panel">
      <p className="section-kicker">Contact</p>
      <h2>Open Channels</h2>

      <div className="container contact-panel__container">
        <p className="contact-panel__intro">
          Best way to reach me is via direct email. Social links are active for
          project updates and collaboration.
        </p>

        <ul className="contact-panel__list">
          <li className="contact-panel__item">
            <span className="contact-panel__label">email</span>
            <a href="mailto:bethvourchike@gmail.com">bethvourchike@gmail.com</a>
          </li>
          <li className="contact-panel__item">
            <span className="contact-panel__label">linkedin</span>
            <a
              href="https://www.linkedin.com/in/bethvour-chike/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-panel__icon-link"
            >
              <FaLinkedin aria-hidden="true" />
              <span>@bethvour-chike</span>
            </a>
          </li>
          <li className="contact-panel__item">
            <span className="contact-panel__label">github</span>
            <a
              href="https://github.com/bethvourc"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-panel__icon-link"
            >
              <FaGithub aria-hidden="true" />
              <span>@bethvourc</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
