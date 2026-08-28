import React from "react";
import "./EngagementModels.css";
import { SectionLabel, OutlineButton } from "../../components/UI";

const engagementModels = [
  ["Fixed Project", "Best for clearly defined scope."],
  ["Dedicated Team", "Best for long-term product development."],
  ["Resource Outsourcing", "Best for flexible technical capacity."],
  ["Support & Modernization", "Best for existing applications."],
];

export default function EngagementModels({ onFindModel }) {
  return (
    <section className="belNova-models-section" id="engagement-models">
      <div className="belNova-models-container">
        <SectionLabel>ENGAGEMENT MODELS</SectionLabel>
        <h2 className="belNova-models-title">Work With Us the Way That Fits</h2>

        <p className="belNova-models-description">
          Four models covering defined projects, long-term products, flexible
          capacity and existing systems.
        </p>

        <div className="belNova-models-grid">
          {engagementModels.map(([title, description]) => (
            <article className="belNova-model-card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="belNova-models-cta-wrap">
          <OutlineButton onClick={onFindModel}>
            Find the Right Model
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}
