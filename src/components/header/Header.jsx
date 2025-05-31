import React, { useEffect, useState } from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiDjango,
  SiDocker,
  SiAwsamplify,
} from "react-icons/si";

// A slightly simpler typing hook (no TypeScript annotations)
const useTypingEffect = (words, typeSpeed = 100, pause = 2000) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentWord = words[wordIndex % words.length];

    if (!isDeleting && charIndex <= currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, typeSpeed);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, typeSpeed / 2);
    } else {
      // Pause at the end of typing or at the end of deleting
      timeout = setTimeout(() => {
        if (!isDeleting) {
          setIsDeleting(true);
          setCharIndex((c) => c - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((w) => w + 1);
          setCharIndex(1);
        }
      }, pause);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, pause, typeSpeed]);

  return text;
};

const Header = () => {
  // You can swap out these skill-lists as you like
  const typedText = useTypingEffect(
    [
      "AWS • Docker • Kubernetes",
      "JavaScript • React • Node.js",
      "TypeScript • Next.js • Tailwind CSS",
      "Python • Django • Flask",
    ],
    100,
    2000
  );

  return (
    <header className="header">
      {/* 1) Faint background texture overlay */}
      <div className="texture-overlay" />

      {/* 2) Dark semi-transparent gradient overlay */}
      <div className="overlay" />

      <div className="container header__container">
        <h5 className="fade-in delay-1">Hello, I’m</h5>
        <h1 className="fade-in delay-2">Bethvour Chike</h1>
        <h5 className="text-light fade-in delay-3">
          <span className="typing-cursor">{typedText}</span>
        </h5>

        {/* CTA Buttons */}
        <div className="fade-in delay-4">
          <CTA />
        </div>

        {/* Skill Icons Row */}
        <div className="header__skills fade-in delay-5">
          {/* React icon gets a special “brand-color” pulse on hover */}
          <FaReact title="React" className="skill-icon skill-icon--react" />

          <SiJavascript title="JavaScript" className="skill-icon" />
          <SiTypescript title="TypeScript" className="skill-icon" />
          <FaNodeJs title="Node.js" className="skill-icon" />
          <FaPython title="Python" className="skill-icon" />
          <SiDjango title="Django" className="skill-icon" />
          <SiDocker title="Docker" className="skill-icon" />
          <SiAwsamplify title="AWS" className="skill-icon" />
          <FaGitAlt title="Git" className="skill-icon" />
        </div>

        {/* Side Socials (hidden on smaller screens) */}
        <div className="fade-in delay-6">
          <HeaderSocials />
        </div>

        {/* Scroll Down (with draw-on SVG animation and ARIA label) */}
        <a
          href="#contact"
          className="scroll__down fade-in delay-8"
          aria-label="Scroll to contact section"
        >
          <span>Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="scroll-arrow-svg"
            aria-hidden="true"
          >
            <path
              d="M12 15l-5-5m10 0l-5 5"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              className="chevron-path"
            />
          </svg>
        </a>

        {/* 3) Non-JS Fallback for subtitle */}
        <noscript>
          <h5 className="text-light noscript-fallback">
            Full-Stack Developer & Software Engineer
          </h5>
        </noscript>
      </div>
    </header>
  );
};

export default Header;
