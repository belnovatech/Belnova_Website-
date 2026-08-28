import React from "react";
import "./InsightsSection.css";
import { SectionLabel } from "../../components/UI";

const insightsData = [
  {
    category: "TECHNOLOGY",
    title: "Choosing between building, buying and customizing software",
    meta: "6 min read • Belnova Tech team",
  },
  {
    category: "BUSINESS AUTOMATION",
    title: "What actually changes when workflows are automated",
    meta: "5 min read • Belnova Tech team",
  },
  {
    category: "AI",
    title: "A practical checklist before adopting AI in operations",
    meta: "7 min read • Belnova Tech team",
  },
  {
    category: "CLOUD",
    title: "Cloud cost decisions during early product growth",
    meta: "6 min read • Belnova Tech team",
  },
  {
    category: "SOFTWARE ENGINEERING",
    title: "Designing systems that survive their second year",
    meta: "8 min read • Belnova Tech team",
  },
  {
    category: "DIGITAL TRANSFORMATION",
    title: "Digital transformation without disrupting operations",
    meta: "6 min read • Belnova Tech team",
  },
];

export default function InsightsSection() {
  return (
    <section className="belNova-insights-section" id="insights">
      <div className="belNova-insights-container">
        <SectionLabel>INSIGHTS</SectionLabel>
        <h2 className="belNova-insights-title">Belnova Insights</h2>

        <p className="belNova-insights-description">
          Notes on engineering, AI, cloud and digital transformation from the
          delivery team.
        </p>

        <div className="belNova-insights-grid">
          {insightsData.map((insight) => (
            <article key={insight.title} className="belNova-insight-card">
              <small className="belNova-insight-category">{insight.category}</small>
              <h3>{insight.title}</h3>
              <span className="belNova-insight-meta">{insight.meta}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
