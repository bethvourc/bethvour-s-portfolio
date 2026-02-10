import React from "react";
import "./experience.css";

const EXPERIENCE_LOG = [
  {
    id: "bloomberg-2025",
    period: "2025",
    location: "New York, NY",
    role: "Software Engineer Intern",
    company: "Bloomberg LP",
    summary:
      "Designed real-time ingestion systems for production market and risk data flows.",
    highlights: [
      "Built Flink + Kafka ingestion pipelines with 99.9% reliability.",
      "Added anomaly detection checks to catch schema and distribution drift early.",
      "Shipped resilient ETL recovery paths for restart-safe replay and backfill.",
    ],
    stack: ["Flink", "Kafka", "Python", "Airflow", "Kubernetes"],
  },
  {
    id: "bloomberg-2024",
    period: "2024",
    location: "New York, NY",
    role: "Software Engineer Intern",
    company: "Bloomberg LP",
    summary:
      "Optimized derivatives streaming workloads for lower latency and higher throughput.",
    highlights: [
      "Refactored PySpark + Argo + Airflow jobs to cut runtime across core pipelines.",
      "Increased derivatives stream throughput for downstream analytics consumers.",
      "Standardized orchestration and observability patterns across production jobs.",
    ],
    stack: ["PySpark", "Argo", "Airflow", "Python", "SQL"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience experience-log">
      <h5>Experience Log</h5>
      <h2>Bloomberg Impact</h2>

      <div className="container experience-log__container">
        <ol className="experience-log__list">
          {EXPERIENCE_LOG.map((entry, index) => (
            <li key={entry.id} className="experience-log__entry">
              <div className="experience-log__rail" aria-hidden="true">
                <span className="experience-log__dot" />
                {index < EXPERIENCE_LOG.length - 1 ? (
                  <span className="experience-log__line" />
                ) : null}
              </div>

              <article className="experience-log__card">
                <div className="experience-log__meta">
                  <span>{entry.period}</span>
                  <span>{entry.location}</span>
                </div>

                <h3>{entry.role}</h3>
                <p className="experience-log__company">{entry.company}</p>
                <p className="experience-log__summary">{entry.summary}</p>

                <ul className="experience-log__highlights">
                  {entry.highlights.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>

                <p className="experience-log__stack">
                  stack: {entry.stack.join(" / ")}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
