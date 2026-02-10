import React from "react";
import "./startup.css";

const Startup = () => {
  return (
    <section id="startup" className="startup">
      <p className="section-kicker">Startup Spotlight</p>
      <h2>Blaze Sentry</h2>

      <div className="container startup__container">
        <ul className="startup__rows">
          <li className="startup__row">
            <span className="startup__label">mission</span>
            <p>
              Deliver real-time risk intelligence for critical incidents across
              communities, infrastructure, and emergency operations.
            </p>
          </li>
          <li className="startup__row">
            <span className="startup__label">architecture</span>
            <p>
              Event-driven platform that fuses detection signals, analytics, and
              operator workflows into a single operational command surface.
            </p>
          </li>
          <li className="startup__row">
            <span className="startup__label">production intent</span>
            <p>
              Built for scalable, operational, real-time deployments with
              resilient ingestion, observability, and response orchestration.
            </p>
          </li>
        </ul>

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
