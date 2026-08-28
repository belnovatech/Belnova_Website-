import React, { useState } from "react";
import "./ClientJourney.css";
import { SectionLabel } from "../../components/UI";

const clientJourneys = {
  Startup: ["Idea", "MVP", "Launch", "Scale"],
  SME: ["Process Review", "Automation", "Integration", "Growth"],
  Enterprise: ["Discovery", "Architecture", "Delivery", "Optimization"],
  "Technology Company": [
    "Requirements",
    "Team Setup",
    "Development",
    "Continuous Delivery",
  ],
};

const processRows = [
  [
    "01 Discovery",
    "Understand the business problem",
    "Stakeholder sessions, process review",
    "Requirement summary",
    "High",
  ],
  [
    "02 Planning",
    "Define scope and sequence",
    "Scoping, estimation, roadmap",
    "Project plan",
    "High",
  ],
  [
    "03 UI/UX",
    "Design the experience",
    "Wireframes, UI, prototype",
    "Design system, screens",
    "Medium",
  ],
  [
    "04 Development",
    "Build the solution",
    "Frontend, backend, integrations",
    "Working increments",
    "Medium",
  ],
  [
    "05 QA",
    "Verify quality",
    "Functional, regression, UAT support",
    "Test reports",
    "Medium",
  ],
  [
    "06 Deployment",
    "Release to production",
    "Cloud setup, CI/CD, go-live",
    "Live environment",
    "Low",
  ],
  [
    "07 Support",
    "Keep it running and improving",
    "Monitoring, fixes, enhancements",
    "Support reports",
    "Ongoing",
  ],
];

export default function ClientJourney() {
  const [activeProfile, setActiveProfile] = useState("Startup");

  return (
    <section className="belNova-journey-section" id="client-journey">
      <div className="belNova-journey-container">
        <SectionLabel>CLIENT JOURNEY</SectionLabel>
        <h2 className="belNova-journey-title">Built Around Your Business</h2>

        <p className="belNova-journey-description">
          The engagement shape changes with the organization. Select a profile
          to see the typical path.
        </p>

        <div className="belNova-profile-tabs">
          {Object.keys(clientJourneys).map((profile) => (
            <button
              type="button"
              key={profile}
              className={activeProfile === profile ? "active" : ""}
              onClick={() => setActiveProfile(profile)}
            >
              {profile}
            </button>
          ))}
        </div>

        <div className="belNova-client-steps">
          {clientJourneys[activeProfile].map((step, index) => (
            <article key={step} className="belNova-client-step-card">
              <small>STEP {index + 1}</small>
              <h3>{step}</h3>
            </article>
          ))}
        </div>

        <div className="belNova-process-list">
          {processRows.map((row) => (
            <div className="belNova-process-row" key={row[0]}>
              <strong>{row[0]}</strong>
              <span>{row[1]}</span>
              <span>{row[2]}</span>
              <span>{row[3]}</span>
              <small>{row[4]}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
