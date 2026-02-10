import React from "react";
import "./experience.css";

const EXPERIENCE_LOG = [
  {
    id: "bloomberg-eng-core",
    track: "software engineer intern @ bloomberg",
    context: "eng core derivatives data streaming · 2025 · new york, ny",
    headline:
      "Designed and shipped real-time ingestion systems for production market and risk data flows.",
    mlFocus:
      "Embedded anomaly detection checks to surface schema/distribution drift before downstream model impact.",
    sweFocus:
      "Built Flink + Kafka pipelines with 99.9% reliability and resilient ETL replay/backfill paths.",
    skills: [
      "Flink",
      "Kafka",
      "Python",
      "Airflow",
      "Kubernetes",
      "ETL Reliability",
    ],
  },
  {
    id: "bloomberg-streaming",
    track: "software engineer intern @ bloomberg",
    context: "eng core derivatives data streaming · 2024 · san francisco, california",
    headline:
      "Optimized derivatives streaming workloads for lower latency and higher throughput.",
    mlFocus:
      "Improved data quality and model-readiness of streaming derivatives features for analytics consumers.",
    sweFocus:
      "Refactored PySpark + Argo + Airflow pipelines to reduce runtime and scale operational throughput.",
    skills: [
      "PySpark",
      "Argo",
      "Airflow",
      "Python",
      "SQL",
      "Streaming Systems",
    ],
  },
  {
    id: "meta",
    track: "meta scholar @ meta",
    context: "meta reality labs · mar 2024 - may 2024 · remote",
    headline:
      "Contributed to virtual reality interface projects, improving end-user interaction performance.",
    mlFocus:
      "Applied ML-driven interaction modeling for spatial and immersive interface behavior.",
    sweFocus:
      "Built and integrated production-ready components for reality lab workflows and experimentation.",
    skills: ["Computer Vision", "Modeling", "Python", "XR Interfaces", "Prototyping"],
  },
  {
    id: "google",
    track: "ml + swe @ google",
    context: "product systems and platform engineering",
    headline:
      "Developed ML-backed product workflows and scalable software services for user-facing systems.",
    mlFocus:
      "Built model feature workflows and evaluation loops to improve ranking and relevance behavior.",
    sweFocus:
      "Engineered integration APIs, deployment pipelines, and reliability controls for production services.",
    skills: ["Python", "TensorFlow", "APIs", "Data Pipelines", "Experimentation"],
  },
  {
    id: "oracle",
    track: "swe + data @ oracle",
    context: "enterprise cloud and platform services",
    headline:
      "Engineered cloud-facing backend services and data flows supporting enterprise product workloads.",
    mlFocus:
      "Prepared model-ready data layers for analytics and predictive intelligence workloads.",
    sweFocus:
      "Built service APIs, integration tooling, and operational automation for reliable delivery.",
    skills: ["Java", "SQL", "Cloud Services", "Backend Engineering", "Data Engineering"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience experience-log">
      <h5>Experience Log</h5>
      <h2>ML x SWE Operator Track</h2>

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
                  <span className="experience-log__track">{entry.track}</span>
                  <span className="experience-log__context">{entry.context}</span>
                </div>

                <p className="experience-log__headline">{entry.headline}</p>

                <div className="experience-log__focus">
                  <p>
                    <span>ml</span>
                    {entry.mlFocus}
                  </p>
                  <p>
                    <span>swe</span>
                    {entry.sweFocus}
                  </p>
                </div>

                <p className="experience-log__skills">
                  skills: {entry.skills.join(" / ")}
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
