import React from "react";
import "./WhyUs.css";
import { SectionLabel } from "../../components/UI";

const whyUsData = [
  ["01", "Business First", "Technology decisions start with business requirements."],
  ["02", "Custom Engineering", "Solutions are built around actual workflows."],
  ["03", "Modern Technology", "Use current engineering and cloud practices."],
  ["04", "Scalable Architecture", "Build for future growth."],
  ["05", "Transparent Delivery", "Clear milestones and communication."],
  ["06", "Long-Term Partnership", "Support beyond initial development."],
];

export default function WhyUs() {
  return (
    <section className="belNova-why-section" id="why-us">
      <div className="belNova-why-container">
        <SectionLabel>WHY US</SectionLabel>
        <h2 className="belNova-why-title">Why Belnova Tech?</h2>

        <div className="belNova-why-grid">
          {whyUsData.map(([number, title, description]) => (
            <article key={number} className="belNova-why-card">
              <small>{number}</small>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
