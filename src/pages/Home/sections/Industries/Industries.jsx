import React, { useState } from "react";
import "./Industries.css";
import { SectionLabel, GradientButton } from "../../components/UI";

const industriesData = [
  {
    name: "FinTech",
    challenge: "Manual investor and transaction handling",
    solution: "Digital investment and payment platforms",
    example: "Investor portal with KYC and reporting",
  },
  {
    name: "Healthcare",
    challenge: "Fragmented patient records and discharge delays",
    solution: "Integrated healthcare coordination portals",
    example: "Clinical discharge and patient assistance system",
  },
  {
    name: "Retail",
    challenge: "Inventory mismatch between store and online channels",
    solution: "Centralized omni-channel stock & order management",
    example: "Unified multi-outlet retail POS & catalogue",
  },
  {
    name: "E-Commerce",
    challenge: "Limited control over storefront logic",
    solution: "Custom commerce and admin platforms",
    example: "Order and fulfillment console",
  },
  {
    name: "Education",
    challenge: "Manual academic administration",
    solution: "Learning and administration portals",
    example: "Student management portal",
  },
  {
    name: "Manufacturing",
    challenge: "Paper-based shop floor tracking",
    solution: "Production and maintenance tracking",
    example: "Plant operations dashboard",
  },
  {
    name: "Real Estate",
    challenge: "Disconnected lead handling and lease tracking",
    solution: "PropTech CRM and tenant management platforms",
    example: "Property booking and digital agreements",
  },
  {
    name: "Fitness",
    challenge: "Manual membership renewals and trainer scheduling",
    solution: "Member app and automated gym operations system",
    example: "Multi-branch fitness management platform",
  },
  {
    name: "Travel",
    challenge: "Fragmented booking engines and itinerary sync",
    solution: "Real-time reservation and custom travel portals",
    example: "Corporate travel booking and expense app",
  },
];

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState("FinTech");

  return (
    <section className="belNova-industries-section" id="industries">
      <div className="belNova-industries-container">
        <SectionLabel>INDUSTRIES</SectionLabel>
        <h2 className="belNova-industries-title">Technology Across Industries</h2>

        <p className="belNova-industries-description">
          Different sectors, the same pattern: understand the process first,
          then engineer the right system.
        </p>

        <div className="belNova-industries-grid">
          {industriesData.map((industry) => {
            const isSelected = selectedIndustry === industry.name;
            return (
              <article
                key={industry.name}
                className={"belNova-industry-card" + (isSelected ? " selected-industry" : "")}
                onClick={() => setSelectedIndustry(industry.name)}
                role="button"
                tabIndex={0}
              >
                <h3>{industry.name}</h3>

                {isSelected && (
                  <div className="belNova-industry-details">
                    <small>CHALLENGE</small>
                    <p>{industry.challenge}</p>

                    <small>POTENTIAL SOLUTION</small>
                    <p>{industry.solution}</p>

                    <small>EXAMPLE APPLICATION</small>
                    <p>{industry.example}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="belNova-industries-cta-wrap">
          <GradientButton to="/industries">
            Explore Industry Solutions
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
