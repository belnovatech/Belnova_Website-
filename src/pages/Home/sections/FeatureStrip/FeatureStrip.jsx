import React from "react";
import "./FeatureStrip.css";

const features = [
  ["End-to-End", "Product Development"],
  ["Web + Mobile", "Application Engineering"],
  ["AI Ready", "Automation & Intelligence"],
  ["Cloud Native", "Modern Infrastructure"],
  ["Flexible", "Technology Teams"],
];

export default function FeatureStrip() {
  return (
    <section className="belNova-feature-strip-section">
      <div className="belNova-feature-strip">
        {features.map(([title, description]) => (
          <div key={title} className="belNova-feature-item">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
