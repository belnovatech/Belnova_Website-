import React from "react";
import "../styles/Company.css";

const companyValues = [
  {
    title: "Innovation",
    description: "Explore new technology with a practical purpose.",
  },
  {
    title: "Integrity",
    description: "Say what is possible, and deliver what is promised.",
  },
  {
    title: "Quality",
    description: "Engineering standards over shortcuts.",
  },
  {
    title: "Customer Success",
    description: "Outcomes matter more than output.",
  },
  {
    title: "Collaboration",
    description: "Work as one team with our clients.",
  },
  {
    title: "Continuous Learning",
    description: "Keep the stack and the skills current.",
  },
];

const companyMetrics = [
  {
    value: "—",
    label: "Projects Delivered",
  },
  {
    value: "—",
    label: "Clients",
  },
  {
    value: "—",
    label: "Technology Professionals",
  },
  {
    value: "—",
    label: "Industries Served",
  },
  {
    value: "—",
    label: "Countries Served",
  },
  {
    value: "—",
    label: "Years in Business",
  },
];

const whyBelnova = [
  {
    number: "01",
    title: "Business First",
    description: "Technology decisions start with business requirements.",
  },
  {
    number: "02",
    title: "Custom Engineering",
    description: "Solutions are built around actual workflows.",
  },
  {
    number: "03",
    title: "Modern Technology",
    description: "Use current engineering and cloud practices.",
  },
  {
    number: "04",
    title: "Scalable Architecture",
    description: "Build for future growth.",
  },
  {
    number: "05",
    title: "Transparent Delivery",
    description: "Clear milestones and communication.",
  },
  {
    number: "06",
    title: "Long-Term Partnership",
    description: "Support beyond initial development.",
  },
];

function SectionLabel({ children }) {
  return (
    <div className="company-label">
      <span />
      {children}
    </div>
  );
}

function GradientButton({ children }) {
  return (
    <button type="button" className="company-gradient-button">
      {children}
      <span>→</span>
    </button>
  );
}

function CompanySymbol() {
  return (
    <div className="company-symbol" aria-hidden="true">
      <div className="company-symbol-outer">
        <div className="company-symbol-inner">
          <span />
        </div>
      </div>
    </div>
  );
}

export default function Company() {
  return (
    <main className="company-page">
      {/* HERO */}

      <section className="company-hero">
        <div className="company-grid-background" />

        <div className="company-container company-hero-content">
          <SectionLabel>COMPANY</SectionLabel>

          <h1>
            Engineering Innovation{" "}
            <span className="company-gradient-text">
              With
              <br />
              Purpose
            </span>
          </h1>

          <p>
            Business understanding, product thinking and engineering — combined
            into practical digital solutions.
          </p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}

      <section className="company-section company-overview-section">
        <div className="company-container">
          <div className="company-overview-layout">
            <div className="company-overview-content">
<h2 className="company-overview-title">
  Built for Business.{" "}
  <span className="company-gradient-text">
    Engineered for Growth.
  </span>
</h2>

              <p>
                Belnova Tech Private Limited is an innovation-focused technology
                company helping businesses build, modernize and scale their
                digital capabilities.
              </p>

              <p>
                We combine business understanding, product thinking and
                technology engineering to create practical digital solutions.
              </p>

              <p>
                Our objective is not simply to build software. Our objective is
                to solve meaningful business problems through technology.
              </p>

              <div className="company-mission-grid">
                <article>
                  <small>OUR MISSION</small>

                  <p>
                    To help businesses use technology to simplify operations,
                    create better customer experiences and build scalable
                    digital products.
                  </p>
                </article>

                <article>
                  <small>OUR VISION</small>

                  <p>
                    To become a trusted technology partner for businesses
                    looking to innovate, transform and grow through digital
                    solutions.
                  </p>
                </article>
              </div>
            </div>

            <CompanySymbol />
          </div>
        </div>
      </section>

      {/* VALUES AND METRICS */}

      <section className="company-section company-soft-section">
        <div className="company-container">
          <div className="company-values-grid">
            {companyValues.map((value) => (
              <article key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>

          <div className="company-metrics">
            {companyMetrics.map((metric) => (
              <article key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>

          <p className="company-metrics-note">
            Company metrics are intentionally left as placeholders until
            verified figures are available.
          </p>
        </div>
      </section>

      {/* WHY US */}

      <section className="company-section">
        <div className="company-container">
          <SectionLabel>WHY US</SectionLabel>

          <h2>Why Belnova Tech?</h2>

          <div className="company-why-grid">
            {whyBelnova.map((reason, index) => (
              <article
                className={index === 0 ? "company-why-active" : ""}
                key={reason.number}
              >
                <small>{reason.number}</small>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="company-final-cta">
        <div className="company-grid-background" />

        <div className="company-final-content">
          <div className="company-cta-symbol">
            <CompanySymbol />
          </div>

          <h2>
            Your Next Big Idea{" "}
            <span className="company-gradient-text">
              Starts
              <br />
              Here.
            </span>
          </h2>

          <p>
            Let&apos;s turn your business challenge into a technology solution.
          </p>

          <div className="company-cta-actions">
            <GradientButton>Start a Project</GradientButton>

            <button type="button" className="company-outline-button">
              Talk to Our Team
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      <a href="#contact" className="company-floating-chat">
        ◯ Let&apos;s Talk
      </a>
    </main>
  );
}