import React from "react";
import "./Recruitment.css";
import { SectionLabel, GradientButton } from "../../components/UI";

const recruitmentSteps = [
  "Requirement",
  "Candidate Sourcing",
  "Screening",
  "Technical Evaluation",
  "Interview",
  "Selection",
  "Onboarding",
];

export default function Recruitment({ onHireTalent }) {
  return (
    <section className="belNova-recruitment-section" id="recruitment">
      <div className="belNova-recruitment-container">
        <SectionLabel>RECRUITMENT</SectionLabel>
        <h2 className="belNova-recruitment-title">Find the Right Technology Talent</h2>

        <p className="belNova-recruitment-description">
          A structured hiring process from requirement definition through
          onboarding.
        </p>

        <div className="belNova-recruitment-grid">
          {recruitmentSteps.map((step, index) => (
            <article key={step} className="belNova-recruitment-card">
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{step}</h3>
            </article>
          ))}
        </div>

        <div className="belNova-recruitment-cta-wrap">
          <GradientButton onClick={onHireTalent}>
            Hire Technology Talent
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
