import React from "react";
import "./Security.css";
import { SectionLabel } from "../../components/UI";

const securityControls = [
  ["⚿", "Authentication"],
  ["♢", "Authorization"],
  ["♙", "Role-Based Access"],
  ["⌘", "Secure APIs"],
  ["▣", "Data Encryption"],
  ["⇩", "Backup Strategy"],
  ["▤", "Logging"],
  ["ϟ", "Monitoring"],
  ["◇", "Environment Separation"],
  ["↗", "Secure Deployment"],
];

export default function Security() {
  return (
    <section className="belNova-sec-section" id="security">
      <div className="belNova-sec-container">
        <SectionLabel>SECURITY</SectionLabel>
        <h2 className="belNova-sec-title">Security Isn't an Add-On.</h2>

        <p className="belNova-sec-description">
          Security controls are part of the architecture from the first sprint,
          not retrofitted before launch.
        </p>

        <div className="belNova-sec-grid">
          {securityControls.map(([icon, title]) => (
            <article key={title} className="belNova-sec-card">
              <span>{icon}</span>
              <strong>{title}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
