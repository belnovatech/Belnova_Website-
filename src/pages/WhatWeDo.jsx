import React, { useState } from "react";
import "../styles/WhatWeDo.css";

const capabilities = [
  {
    icon: "</>",
    title: "Software Development",
    description:
      "Custom software, business applications and enterprise platforms.",
    tags: ["Python", "Django", "FastAPI", ".NET", "Node.js", "APIs"],
    link: "Explore Software",
  },
  {
    icon: "◎",
    title: "Web Applications",
    description: "Modern responsive web applications and portals.",
    tags: ["React", "Next.js", "TypeScript", "REST APIs"],
    link: "Explore Web",
  },
  {
    icon: "▯",
    title: "Mobile Applications",
    description: "Cross-platform and native mobile experiences.",
    tags: ["Flutter", "React Native", "Android", "iOS"],
    link: "Explore Mobile",
  },
  {
    icon: "▣",
    title: "AI & Machine Learning",
    description: "AI-powered products, automation and intelligent workflows.",
    tags: ["Generative AI", "LLMs", "Machine Learning", "AI APIs"],
    link: "Explore AI",
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    description: "Modern infrastructure, deployment and cloud engineering.",
    tags: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
    link: "Explore Cloud",
  },
  {
    icon: "♙",
    title: "Resource Outsourcing",
    description:
      "Flexible technical resources and dedicated engineering teams.",
    tags: ["Developers", "QA", "DevOps", "AI/ML", "BA", "DBA"],
    link: "Explore Resource",
  },
  {
    icon: "♧",
    title: "Recruitment & Staffing",
    description: "Technology talent acquisition and staffing support.",
    tags: [
      "Developers",
      "QA",
      "Cloud",
      "AI/ML",
      "Business Analysts",
      "Technology Managers",
    ],
    link: "Explore Recruitment",
  },
];

const technologies = {
  Frontend: {
    use: "Interfaces, portals and dashboards",
    tags: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  Backend: {
    use: "Business logic, APIs and platform services",
    tags: ["Python", "Django", "FastAPI", "Node.js", ".NET", "REST APIs"],
  },
  Mobile: {
    use: "Cross-platform and native mobile experiences",
    tags: ["Flutter", "React Native", "Android", "iOS"],
  },
  Database: {
    use: "Data modelling, storage and caching",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  Cloud: {
    use: "Infrastructure, deployment and scalability",
    tags: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
  },
  DevOps: {
    use: "Automation, delivery and system monitoring",
    tags: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Monitoring"],
  },
  AI: {
    use: "Automation, intelligence and data-driven products",
    tags: ["Generative AI", "LLMs", "Machine Learning", "Python", "AI APIs"],
  },
};

const architectureLayers = [
  "User",
  "Web / Mobile",
  "Application Layer",
  "API Layer",
  "Backend Services",
  "Database",
  "Cloud Infrastructure",
  "Monitoring & Security",
];

const integrations = [
  "Payments",
  "SMS",
  "Email",
  "Maps",
  "AI",
  "Analytics",
  "Third-party APIs",
];

const developmentProcess = [
  {
    number: "01",
    stage: "Discovery",
    objective: "Understand the business problem",
    activities: "Stakeholder sessions, process review",
    deliverable: "Requirement summary",
    involvement: "High",
  },
  {
    number: "02",
    stage: "Planning",
    objective: "Define scope and sequence",
    activities: "Scoping, estimation, roadmap",
    deliverable: "Project plan",
    involvement: "High",
  },
  {
    number: "03",
    stage: "UI/UX",
    objective: "Design the experience",
    activities: "Wireframes, UI, prototype",
    deliverable: "Design system, screens",
    involvement: "Medium",
  },
  {
    number: "04",
    stage: "Development",
    objective: "Build the solution",
    activities: "Frontend, backend, integrations",
    deliverable: "Working increments",
    involvement: "Medium",
  },
  {
    number: "05",
    stage: "QA",
    objective: "Verify quality",
    activities: "Functional, regression, UAT support",
    deliverable: "Test reports",
    involvement: "Medium",
  },
  {
    number: "06",
    stage: "Deployment",
    objective: "Release to production",
    activities: "Cloud setup, CI/CD, go-live",
    deliverable: "Live environment",
    involvement: "Low",
  },
  {
    number: "07",
    stage: "Support",
    objective: "Keep it running and improving",
    activities: "Monitoring, fixes, enhancements",
    deliverable: "Support reports",
    involvement: "Ongoing",
  },
];

function SectionLabel({ children }) {
  return (
    <div className="wwd-section-label">
      <span />
      {children}
    </div>
  );
}

function GradientButton({ children }) {
  return (
    <button type="button" className="wwd-gradient-button">
      {children}
      <span>→</span>
    </button>
  );
}

export default function WhatWeDo() {
  const [activeTechnology, setActiveTechnology] = useState("Database");

  const selectedTechnology = technologies[activeTechnology];

  return (
    <main className="what-we-do-page">
      {/* HERO */}

      <section className="wwd-hero">
        <div className="wwd-grid-background" />

        <div className="wwd-container wwd-hero-content">
          <SectionLabel>WHAT WE DO</SectionLabel>

          <h1>
            Engineering Across the{" "}
            <span className="wwd-gradient-text">Full Stack</span>
          </h1>

          <p>
            From product discovery to cloud operations — one team covering
            design, engineering, intelligence and talent.
          </p>
        </div>
      </section>

      {/* TECHNOLOGY CAPABILITIES */}

      <section className="wwd-section">
        <div className="wwd-container">
          <SectionLabel>WHAT WE DO</SectionLabel>

          <h2>Technology Capabilities</h2>

          <p className="wwd-section-description">
            Engineering, intelligence and talent — combined into one delivery
            capability.
          </p>

          <div className="wwd-capabilities-grid">
            {capabilities.map((capability) => (
              <article className="wwd-capability-card" key={capability.title}>
                <div className="wwd-card-icon">{capability.icon}</div>

                <h3>{capability.title}</h3>

                <p>{capability.description}</p>

                <div className="wwd-tags">
                  {capability.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <button type="button" className="wwd-explore-button">
                  {capability.link}
                  <span>⌄</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY RADAR */}

      <section className="wwd-section wwd-soft-section">
        <div className="wwd-container">
          <SectionLabel>TECHNOLOGY RADAR</SectionLabel>

          <h2>Technology Behind the Work</h2>

          <p className="wwd-section-description">
            The engineering stack Belnova uses across product delivery.
            Capability is shown, not certified — we list only what our teams
            actively build with.
          </p>

          <div className="wwd-radar-layout">
            <div className="wwd-radar">
              <div className="wwd-radar-circle wwd-circle-one" />
              <div className="wwd-radar-circle wwd-circle-two" />
              <div className="wwd-radar-circle wwd-circle-three" />

              <div className="wwd-radar-lines">
                <span className="wwd-line wwd-line-1" />
                <span className="wwd-line wwd-line-2" />
                <span className="wwd-line wwd-line-3" />
                <span className="wwd-line wwd-line-4" />
                <span className="wwd-line wwd-line-5" />
                <span className="wwd-line wwd-line-6" />
                <span className="wwd-line wwd-line-7" />
              </div>

              <div className="wwd-radar-fill" />

              <button
                type="button"
                className={`wwd-radar-label wwd-radar-frontend ${
                  activeTechnology === "Frontend" ? "active" : ""
                }`}
                onClick={() => setActiveTechnology("Frontend")}
              >
                Frontend
              </button>

              <button
                type="button"
                className={`wwd-radar-label wwd-radar-backend ${
                  activeTechnology === "Backend" ? "active" : ""
                }`}
                onClick={() => setActiveTechnology("Backend")}
              >
                Backend
              </button>

              <button
                type="button"
                className={`wwd-radar-label wwd-radar-mobile ${
                  activeTechnology === "Mobile" ? "active" : ""
                }`}
                onClick={() => setActiveTechnology("Mobile")}
              >
                Mobile
              </button>

              <button
                type="button"
                className={`wwd-radar-label wwd-radar-database ${
                  activeTechnology === "Database" ? "active" : ""
                }`}
                onClick={() => setActiveTechnology("Database")}
              >
                Database
              </button>

              <button
                type="button"
                className={`wwd-radar-label wwd-radar-cloud ${
                  activeTechnology === "Cloud" ? "active" : ""
                }`}
                onClick={() => setActiveTechnology("Cloud")}
              >
                Cloud
              </button>

              <button
                type="button"
                className={`wwd-radar-label wwd-radar-devops ${
                  activeTechnology === "DevOps" ? "active" : ""
                }`}
                onClick={() => setActiveTechnology("DevOps")}
              >
                DevOps
              </button>

              <button
                type="button"
                className={`wwd-radar-label wwd-radar-ai ${
                  activeTechnology === "AI" ? "active" : ""
                }`}
                onClick={() => setActiveTechnology("AI")}
              >
                AI
              </button>
            </div>

            <div className="wwd-technology-panel">
              <small>CATEGORY</small>

              <h3>{activeTechnology}</h3>

              <p>Primary use: {selectedTechnology.use}</p>

              <div className="wwd-tags">
                {selectedTechnology.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <button type="button" className="wwd-outline-button">
                Discuss Technology
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}

      <section className="wwd-section">
        <div className="wwd-container">
          <SectionLabel>ARCHITECTURE</SectionLabel>

          <h2>Engineered for Scale</h2>

          <p className="wwd-section-description">
            A reference view of how Belnova structures systems — from interface
            to infrastructure, with security and observability built in.
          </p>

          <div className="wwd-architecture-layout">
            <div className="wwd-architecture-stack">
              {architectureLayers.map((layer, index) => (
                <React.Fragment key={layer}>
                  <div className="wwd-architecture-layer">
                    <strong>{layer}</strong>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  {index < architectureLayers.length - 1 && (
                    <div className="wwd-layer-connector" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="wwd-integrations">
              <h3>Side Integrations</h3>

              <p>
                Connected through the API layer with isolated credentials and
                environment separation.
              </p>

              <div className="wwd-integration-list">
                {integrations.map((integration) => (
                  <div className="wwd-integration-item" key={integration}>
                    <span />
                    {integration}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}

      <section className="wwd-section wwd-soft-section">
        <div className="wwd-container">
          <SectionLabel>DELIVERY</SectionLabel>

          <h2>Development Process</h2>

          <p className="wwd-section-description">
            Every stage has a defined objective, activity set, deliverable and
            level of client involvement.
          </p>

          <div className="wwd-process-list">
            {developmentProcess.map((process) => (
              <article className="wwd-process-row" key={process.number}>
                <strong>
                  {process.number} {process.stage}
                </strong>

                <span>{process.objective}</span>
                <span>{process.activities}</span>
                <span>{process.deliverable}</span>
                <small>{process.involvement}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="wwd-final-cta">
        <div className="wwd-grid-background" />

        <div className="wwd-final-content">
          <div className="wwd-cta-symbol">⬡</div>

          <h2>
            Your Next Big Idea{" "}
            <span className="wwd-gradient-text">Starts Here.</span>
          </h2>

          <p>Let's turn your business challenge into a technology solution.</p>

          <div className="wwd-cta-actions">
            <GradientButton>Start a Project</GradientButton>

            <button type="button" className="wwd-outline-button">
              Talk to Our Team
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      <a href="#contact" className="wwd-floating-chat">
        ◯ Let's Talk
      </a>
    </main>
  );
}