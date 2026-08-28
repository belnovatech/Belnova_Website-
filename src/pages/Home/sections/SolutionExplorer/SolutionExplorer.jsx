import React, { useState } from "react";
import "./SolutionExplorer.css";
import { SectionLabel, OutlineButton } from "../../components/UI";

const solutionCategories = {
  "Business Applications": [
    "CRM",
    "HRMS",
    "ERP",
    "Finance Management",
    "Inventory",
    "Operations Management",
  ],
  "Customer Platforms": [
    "Customer Portals",
    "Booking Platforms",
    "E-Commerce",
    "Membership Platforms",
    "Service Platforms",
  ],
  FinTech: [
    "Investor Platforms",
    "Investment Management",
    "Payment Integrations",
    "Financial Dashboards",
    "Transaction Systems",
  ],
  Healthcare: [
    "Patient Portals",
    "Hospital Coordination",
    "Telemedicine Platforms",
    "Clinical Workflows",
    "Discharge Management",
  ],
  "AI & Automation": [
    "AI Assistants",
    "Document Intelligence",
    "Workflow Automation",
    "Generative AI",
    "Predictive Analytics",
    "Data Intelligence",
  ],
  Enterprise: [
    "Admin Portals",
    "Internal Systems",
    "Reporting",
    "Dashboards",
    "Enterprise Integrations",
  ],
};

export default function SolutionExplorer({ onDifferentIdea }) {
  const [activeCategory, setActiveCategory] = useState("Business Applications");

  return (
    <section className="belNova-solutions-section" id="solution-explorer">
      <div className="belNova-solutions-container">
        <SectionLabel>SOLUTION EXPLORER</SectionLabel>
        <h2 className="belNova-solutions-title">What Can We Build Together?</h2>

        <p className="belNova-solutions-description">
          Explore the categories of products and platforms Belnova engineers
          for startups, SMEs and enterprise teams.
        </p>

        <div className="belNova-solutions-layout">
          <div className="belNova-solutions-tabs">
            {Object.keys(solutionCategories).map((category) => (
              <button
                type="button"
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="belNova-solutions-panel">
            <h3>{activeCategory}</h3>

            <div className="belNova-solutions-items">
              {solutionCategories[activeCategory].map((item) => (
                <div className="belNova-solutions-item-card" key={item}>
                  {item}
                </div>
              ))}
            </div>

            <OutlineButton onClick={onDifferentIdea}>
              I Have a Different Idea
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}
