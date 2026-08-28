import React from "react";
import "./CompanyValues.css";
import { SectionLabel } from "../../components/UI";

const companyValues = [
  ["Innovation", "Explore new technology with a practical purpose."],
  ["Integrity", "Say what is possible, and deliver what is promised."],
  ["Quality", "Engineering standards over shortcuts."],
  ["Customer Success", "Outcomes matter more than output."],
  ["Collaboration", "Work as one team with our clients."],
  ["Continuous Learning", "Keep the stack and the skills current."],
];

const metrics = [
  "Projects Delivered",
  "Clients",
  "Technology Professionals",
  "Industries Served",
  "Countries Served",
  "Years in Business",
];

export default function CompanyValues() {
  return (
    <section className="belNova-company-section" id="company">
      <div className="belNova-company-container">
        <SectionLabel>COMPANY</SectionLabel>
        <h2 className="belNova-company-title">
          Engineering Innovation{" "}
          <span className="belNova-company-gradient-text">With Purpose</span>
        </h2>

        <p className="belNova-company-description">
          Belnova Tech Private Limited is an innovation-focused technology company
          helping businesses build, modernize and scale their digital capabilities.
        </p>

        <div className="belNova-company-hero-layout">
          <div className="belNova-company-hero-text">
            <p>
              We combine business understanding, product thinking and technology
              engineering to create practical digital solutions.
            </p>
            <p>
              Our objective is not simply to build software. Our objective is to
              solve meaningful business problems through technology.
            </p>
          </div>

          <div className="belNova-company-logo-box">
            <div className="belNova-hex-3d-box">⬡</div>
          </div>
        </div>

        <div className="belNova-mission-vision-grid">
          <article className="belNova-mission-card">
            <small>OUR MISSION</small>
            <p>
              To help businesses use technology to simplify operations, create
              better customer experiences and build scalable digital products.
            </p>
          </article>

          <article className="belNova-vision-card">
            <small>OUR VISION</small>
            <p>
              To become a trusted technology partner for businesses looking to
              innovate, transform and grow through digital solutions.
            </p>
          </article>
        </div>

        <div className="belNova-values-grid">
          {companyValues.map(([title, description]) => (
            <article key={title} className="belNova-value-card">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="belNova-company-metrics">
          {metrics.map((metric) => (
            <div key={metric} className="belNova-metric-box">
              <strong>—</strong>
              <span>{metric}</span>
            </div>
          ))}
        </div>

        <p className="belNova-metrics-note">
          Company metrics are intentionally left as placeholders until verified
          figures are available.
        </p>
      </div>
    </section>
  );
}
