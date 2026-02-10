import React, { useEffect, useRef, useState } from "react";
import "./nav.css";

const NAV_ITEMS = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "portfolio", label: "projects" },
  { id: "startup", label: "startup" },
  { id: "contact", label: "contact" },
];

const THEME_STORAGE_KEY = "theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  return prefersLight ? "light" : "dark";
};

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#about");
  const [theme, setTheme] = useState(getInitialTheme);
  const activeNavRef = useRef("#about");
  const rafRef = useRef(0);

  const setActiveNavState = (nextHash) => {
    activeNavRef.current = nextHash;
    setActiveNav(nextHash);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const updateActiveNav = () => {
      const sections = NAV_ITEMS.map(({ id }) =>
        document.getElementById(id)
      ).filter(Boolean);

      if (!sections.length) {
        return;
      }

      const scrollProbe = window.scrollY + window.innerHeight * 0.35;
      let current = `#${NAV_ITEMS[0].id}`;

      sections.forEach((section) => {
        if (scrollProbe >= section.offsetTop) {
          current = `#${section.id}`;
        }
      });

      if (current !== activeNavRef.current) {
        setActiveNavState(current);
      }
    };

    const requestUpdate = () => {
      if (rafRef.current) {
        return;
      }

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = 0;
        updateActiveNav();
      });
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <nav className="command-nav" aria-label="Section navigation">
      <ul className="command-nav__links">
        {NAV_ITEMS.map((item) => {
          const itemHash = `#${item.id}`;
          const isActive = activeNav === itemHash;

          return (
            <li key={item.id}>
              <a
                href={itemHash}
                onClick={() => setActiveNavState(itemHash)}
                className={isActive ? "active" : ""}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="command-nav__theme" role="group" aria-label="Theme">
        <button
          type="button"
          className={theme === "dark" ? "is-active" : ""}
          aria-pressed={theme === "dark"}
          onClick={() => setTheme("dark")}
        >
          dark
        </button>
        <button
          type="button"
          className={theme === "light" ? "is-active" : ""}
          aria-pressed={theme === "light"}
          onClick={() => setTheme("light")}
        >
          light
        </button>
      </div>
    </nav>
  );
};

export default Nav;
