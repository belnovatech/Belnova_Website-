import React, { useState } from "react";
import "./ResourceOutsourcing.css";
import { SectionLabel, GradientButton } from "../../components/UI";

const technicalRoles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Python Developer",
  ".NET Developer",
  "React Developer",
  "Mobile Developer",
  "QA Engineer",
  "DevOps Engineer",
  "AI/ML Engineer",
  "Business Analyst",
  "DBA",
];

export default function ResourceOutsourcing({ onRequestResources }) {
  const [selectedRoles, setSelectedRoles] = useState(["Full Stack Developer"]);

  const toggleRole = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  return (
    <section className="belNova-ro-section" id="resource-outsourcing">
      <div className="belNova-ro-container">
        <SectionLabel>RESOURCE OUTSOURCING</SectionLabel>
        <h2 className="belNova-ro-title">Extend Your Technology Team</h2>

        <p className="belNova-ro-description">
          Flexible technical resources for organizations that need additional
          engineering capacity.
        </p>

        <div className="belNova-ro-pills">
          {technicalRoles.map((role) => {
            const isSelected = selectedRoles.includes(role);
            return (
              <button
                type="button"
                key={role}
                className={"belNova-ro-pill" + (isSelected ? " selected" : "")}
                onClick={() => toggleRole(role)}
              >
                {role}
              </button>
            );
          })}
        </div>

        <div className="belNova-ro-cta-wrap">
          <GradientButton onClick={onRequestResources}>
            Request Technical Resources
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
