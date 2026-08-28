import React from "react";
import "./BelnovaLabs.css";
import { SectionLabel, GradientButton } from "../../components/UI";

const labProjects = [
  ["PROTOTYPE", "AI Document Assistant"],
  ["CONCEPT", "Intelligent Business Analytics"],
  ["PROTOTYPE", "Workflow Automation Engine"],
  ["CONCEPT", "AI Customer Support"],
  ["RESEARCH", "Smart Operations Platform"],
  ["RESEARCH", "Predictive Business Intelligence"],
];

export default function BelnovaLabs() {
  return (
    <section className="belNova-labs-section" id="belnova-labs">
      <div className="belNova-labs-container">
        <SectionLabel>BELNOVA LABS</SectionLabel>

        <h2 className="belNova-labs-title">
          Exploring <span className="belNova-labs-gradient-text">What's Next.</span>
        </h2>

        <p className="belNova-labs-description">
          Belnova Labs is the innovation space for experimenting with emerging
          technologies, prototypes, automation and future digital products.
        </p>

        <div className="belNova-labs-grid">
          {labProjects.map(([type, title], index) => (
            <article
              key={title}
              className={`belNova-lab-card ${index === 0 ? "highlight" : ""}`}
            >
              <small>{type}</small>
              <h3>{title}</h3>
              <p>An internal exploration, not a commercial product.</p>
            </article>
          ))}
        </div>

        <div className="belNova-labs-cta-wrap">
          <GradientButton to="/innovations">Explore Innovation</GradientButton>
        </div>
      </div>
    </section>
  );
}
