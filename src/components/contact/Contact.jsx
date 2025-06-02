import React, { useState } from "react";
import "./contact.css";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [emailIsSent, setEmailIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7e8z17g",
        "template_ws286ap",
        e.target,
        "h6QI2ytxsgIhyrzSz"
      )
      .then(() => {
        setEmailIsSent(true);
      })
      .catch((err) => {
        console.error("Email send error:", err);
      });
  };

  return (
    <section id="contact" className="contact">
      <h5 className="fade-in delay-1">Get In Touch</h5>
      <h2 className="fade-in delay-2">Contact Me</h2>

      <div className="container contact__container fade-in delay-3">
        {/* ───────────────────────────────────────── CONTACT OPTIONS ───────────────────────────────────────── */}
        <div className="contact__options">
          <article className="contact__option fade-in delay-4">
            <FaLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Connect with me</h5>
            <a
              href="https://www.linkedin.com/in/bethvour-chike/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Profile
            </a>
          </article>
        </div>
        {/* ───────────────────────────────────────────────────────────────────────────────────────────────────── */}

        {emailIsSent ? (
          <h2 id="Contact__sent-message" className="fade-in delay-5">
            Your message has been sent successfully!
          </h2>
        ) : (
          <form onSubmit={sendEmail} className="fade-in delay-5">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Enter Your Message Here"
              required
            ></textarea>
            <button type="submit" className="btn button.btn-primary">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
