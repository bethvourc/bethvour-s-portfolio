import React from "react";
import "./startup.css";

const Startup = () => {
  return (
    <section id="startup" className="startup">
      <h5 className="fade-in delay-1">Startup Spotlight</h5>
      <h2 className="fade-in delay-2">Blaze Sentry</h2>

      <div className="container startup__container fade-in delay-3">
        <p>
          Real-time risk intelligence platform for critical incidents,
          infrastructure monitoring, and emergency operations.
        </p>
        <p>
          Built to unify detection signals, response coordination, and
          operational visibility in one system.
        </p>

        <a
          href="https://www.blazesentry.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Visit blazesentry.org
        </a>
      </div>
    </section>
  );
};

export default Startup;
