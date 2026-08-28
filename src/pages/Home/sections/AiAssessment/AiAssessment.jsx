import React, { useState } from "react";
import "./AiAssessment.css";
import { SectionLabel, GradientButton } from "../../components/UI";

const aiIndustries = [
  "Finance",
  "Healthcare",
  "Retail",
  "Education",
  "Manufacturing",
  "Real Estate",
  "Fitness",
  "Professional Services",
  "Other",
];

const aiImprovements = [
  "Customer Support",
  "Operations",
  "Documents",
  "Reporting",
  "Sales",
  "Marketing",
  "Data Analysis",
  "Employee Productivity",
];

export default function AiAssessment({ onDiscussOpportunity }) {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedImprovement, setSelectedImprovement] = useState("");

  return (
    <section className="belNova-ai-assess-section" id="ai-assessment">
      <div className="belNova-ai-assess-container">
        <SectionLabel>AI OPPORTUNITY ASSESSMENT</SectionLabel>
        <h2 className="belNova-ai-assess-title">Where Can AI Help Your Business?</h2>

        <p className="belNova-ai-assess-description">
          Answer two questions to see preliminary AI opportunities relevant to
          your context.
        </p>

        <div className="belNova-ai-assess-panel">
          <div className="belNova-ai-assess-question">
            <h3>What industry are you in?</h3>
            <div className="belNova-ai-choice-list">
              {aiIndustries.map((industry) => (
                <button
                  type="button"
                  key={industry}
                  className={selectedIndustry === industry ? "selected" : ""}
                  onClick={() => setSelectedIndustry(industry)}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          <div className="belNova-ai-assess-question">
            <h3>What would you like to improve?</h3>
            <div className="belNova-ai-choice-list">
              {aiImprovements.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={selectedImprovement === item ? "selected" : ""}
                  onClick={() => setSelectedImprovement(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {selectedIndustry && selectedImprovement && (
            <div className="belNova-ai-assess-result">
              <small>PRELIMINARY AI OPPORTUNITY</small>
              <h3>
                AI-powered {selectedImprovement} for {selectedIndustry}
              </h3>
              <p>
                Belnova can assess your existing process, data availability and
                automation opportunities before recommending a solution.
              </p>
              <GradientButton onClick={onDiscussOpportunity}>
                Discuss This Opportunity
              </GradientButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
