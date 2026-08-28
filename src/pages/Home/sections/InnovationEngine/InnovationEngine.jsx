import React, { useState } from "react";
import "./InnovationEngine.css";
import { SectionLabel } from "../../components/UI";

const journeyStages = [
  {
    number: "01",
    title: "DISCOVER",
    items: [
      "Business requirements",
      "User needs",
      "Process analysis",
      "Technical feasibility",
    ],
  },
  {
    number: "02",
    title: "DEFINE",
    items: ["Scope", "Product strategy", "Architecture", "Roadmap"],
  },
  {
    number: "03",
    title: "DESIGN",
    items: [
      "UX research",
      "Wireframes",
      "UI design",
      "Prototype",
      "Design system",
    ],
  },
  {
    number: "04",
    title: "ENGINEER",
    items: [
      "Frontend",
      "Backend",
      "Mobile",
      "APIs",
      "Database",
      "Integrations",
    ],
  },
  {
    number: "05",
    title: "LAUNCH",
    items: ["Testing", "Cloud", "CI/CD", "Deployment", "Monitoring"],
  },
  {
    number: "06",
    title: "SCALE",
    items: [
      "Optimization",
      "Analytics",
      "New features",
      "Maintenance",
      "Continuous improvement",
    ],
  },
];

export default function InnovationEngine() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="belNova-engine-section" id="innovation-engine">
      <div className="belNova-engine-container">
        <SectionLabel>BELNOVA INNOVATION ENGINE</SectionLabel>

        <h2 className="belNova-engine-title">
          From Idea to <span className="belNova-engine-gradient-text">Impact.</span>
        </h2>

        <p className="belNova-engine-description">
          A structured technology journey designed to turn business ideas into
          scalable digital products.
        </p>

        <div className="belNova-engine-line">
          {journeyStages.map((stage, index) => (
            <button
              type="button"
              className="belNova-engine-number-btn"
              key={stage.number}
              onClick={() => setActiveStage(index)}
              aria-label={`Select ${stage.title} stage`}
              aria-pressed={activeStage === index}
            >
              <span className={activeStage === index ? "active" : ""}>
                {stage.number}
              </span>
            </button>
          ))}
        </div>

        <div className="belNova-engine-cards">
          {journeyStages.map((stage, index) => (
            <article
              className={`belNova-engine-card ${
                activeStage === index ? "active" : ""
              }`}
              key={stage.title}
              role="button"
              tabIndex={0}
              data-step={stage.number}
              aria-label={`Select ${stage.title} stage`}
              onClick={() => setActiveStage(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveStage(index);
                }
              }}
            >
              <h3>{stage.title}</h3>
              <ul>
                {stage.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
