import React from "react";
import "./Architecture.css";
import { SectionLabel } from "../../components/UI";

const stackLayers = [
  "User",
  "Web / Mobile",
  "Application Layer",
  "API Layer",
  "Backend Services",
  "Database",
  "Cloud Infrastructure",
  "Monitoring & Security",
];

const sideIntegrations = [
  "Payments",
  "SMS",
  "Email",
  "Maps",
  "AI",
  "Analytics",
  "Third-party APIs",
];

export default function Architecture() {
  return (
    <section className="belNova-arch-section" id="architecture">
      <div className="belNova-arch-container">
        <SectionLabel>ARCHITECTURE</SectionLabel>
        <h2 className="belNova-arch-title">Engineered for Scale</h2>

        <p className="belNova-arch-description">
          A reference view of how Belnova structures systems — from interface
          to infrastructure, with security and observability built in.
        </p>

        <div className="belNova-arch-layout">
          <div className="belNova-arch-stack">
            {stackLayers.map((item, index, list) => (
              <React.Fragment key={item}>
                <div className="belNova-arch-item">
                  <strong>{item}</strong>
                  <span>0{index + 1}</span>
                </div>
                {index < list.length - 1 && (
                  <div className="belNova-arch-connector" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="belNova-arch-integration-panel">
            <h3>Side Integrations</h3>
            <p>
              Connected through the API layer with isolated credentials and
              environment separation.
            </p>

            {sideIntegrations.map((item) => (
              <div className="belNova-arch-integration-item" key={item}>
                <span /> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
