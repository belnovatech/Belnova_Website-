import React from "react";
import "./CareersSection.css";
import { SectionLabel, GradientButton, OutlineButton } from "../../components/UI";

const openJobs = [
  [
    "Full Stack Developer",
    "Hybrid • Full-time • 2–5 years",
    "React, Python, PostgreSQL",
  ],
  [
    "Python Developer",
    "Hybrid • Full-time • 1–4 years",
    "Django, FastAPI, REST APIs",
  ],
  [
    "React Developer",
    "Remote • Full-time • 1–4 years",
    "React, TypeScript, Next.js",
  ],
  [
    "QA Engineer",
    "Hybrid • Full-time • 1–3 years",
    "Manual, automation, API testing",
  ],
  [
    "DevOps Engineer",
    "Hybrid • Full-time • 2–5 years",
    "Docker, Kubernetes, CI/CD, AWS",
  ],
  [
    "AI/ML Engineer",
    "Hybrid • Full-time • 1–4 years",
    "LLMs, Python, ML pipelines",
  ],
  [
    "Business Analyst",
    "Hybrid • Full-time • 1–4 years",
    "Requirements, documentation, UAT",
  ],
  [
    "Talent Acquisition",
    "On-site • Full-time • 1–3 years",
    "Tech hiring, sourcing, screening",
  ],
];

export default function CareersSection({ onApply }) {
  return (
    <section className="belNova-careers-section" id="careers">
      <div className="belNova-careers-container">
        <SectionLabel>CAREERS</SectionLabel>
        <h2 className="belNova-careers-title">Build Your Future With Belnova</h2>

        <p className="belNova-careers-description">
          We are building a team of people who enjoy solving challenging
          technology problems and creating meaningful digital products.
        </p>

        <div className="belNova-jobs-grid">
          {openJobs.map(([title, meta, skills]) => (
            <article key={title} className="belNova-job-card">
              <div className="belNova-job-info">
                <h3>{title}</h3>
                <small>{meta}</small>
                <p>{skills}</p>
              </div>

              <OutlineButton onClick={onApply} className="small">
                Apply
              </OutlineButton>
            </article>
          ))}
        </div>

        <div className="belNova-careers-actions">
          <GradientButton to="/careers">View Open Positions</GradientButton>
          <OutlineButton onClick={onApply}>
            Don't see your role? Send Your Profile
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}
