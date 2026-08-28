import React from "react";
import "./DigitalTransformation.css";
import { SectionLabel, GradientButton } from "../../components/UI";

const beforeList = [
  "Excel",
  "Paper",
  "Manual communication",
  "Multiple systems",
  "Manual reporting",
  "Disconnected data",
];

const belnovaList = [
  "Digital Strategy",
  "UX",
  "Engineering",
  "Automation",
  "Cloud",
  "Analytics",
];

const afterList = [
  "Centralized systems",
  "Automated workflows",
  "Real-time dashboards",
  "Digital documents",
  "Connected data",
  "Scalable operations",
];

export default function DigitalTransformation({ onTransform }) {
  return (
    <section className="belNova-dt-section" id="digital-transformation">
      <div className="belNova-dt-container">
        <SectionLabel>DIGITAL TRANSFORMATION</SectionLabel>
        <h2 className="belNova-dt-title">From Manual Processes to Digital Operations</h2>

        <p className="belNova-dt-description">
          Most transformation work starts with the same problem: information
          lives in too many disconnected places.
        </p>

        <div className="belNova-dt-grid">
          <article className="belNova-dt-card">
            <h3>BEFORE</h3>
            <ul>
              {beforeList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="belNova-dt-card belNova-dt-gradient-card">
            <h3>BELNOVA</h3>
            <ul>
              {belnovaList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="belNova-dt-card">
            <h3>AFTER</h3>
            <ul>
              {afterList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="belNova-dt-cta-wrap">
          <GradientButton onClick={onTransform}>
            Transform My Business
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
