import React, { useState } from "react";
import "../Styles/Solutions.css";

const transformationColumns = [
  {
    className: "solutions-before-card",
    title: "BEFORE",
    items: [
      "Excel",
      "Paper",
      "Manual communication",
      "Multiple systems",
      "Manual reporting",
      "Disconnected data",
    ],
  },
  {
    className: "solutions-belnova-card",
    title: "BELNOVA",
    items: [
      "Digital Strategy",
      "UX",
      "Engineering",
      "Automation",
      "Cloud",
      "Analytics",
    ],
  },
  {
    className: "solutions-after-card",
    title: "AFTER",
    items: [
      "Centralized systems",
      "Automated workflows",
      "Real-time dashboards",
      "Digital documents",
      "Connected data",
      "Scalable operations",
    ],
  },
];

const clientJourneys = {
  Startup: ["Idea", "MVP", "Launch", "Scale"],
  SME: ["Process Review", "Automation", "Integration", "Growth"],
  Enterprise: ["Discovery", "Architecture", "Delivery", "Optimization"],
  "Technology Company": [
    "Requirements",
    "Team Setup",
    "Development",
    "Continuous Delivery",
  ],
};

const engagementModels = [
  {
    title: "Fixed Project",
    description: "Best for clearly defined scope.",
  },
  {
    title: "Dedicated Team",
    description: "Best for long-term product development.",
  },
  {
    title: "Resource Outsourcing",
    description: "Best for flexible technical capacity.",
  },
  {
    title: "Support & Modernization",
    description: "Best for existing applications.",
  },
];

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

const recruitmentSteps = [
  "Requirement",
  "Candidate Sourcing",
  "Screening",
  "Technical Evaluation",
  "Interview",
  "Selection",
  "Onboarding",
];

function SectionLabel({ children }) {
  return (
    <div className="solutions-label">
      <span />
      {children}
    </div>
  );
}

function GradientButton({ children }) {
  return (
    <button type="button" className="solutions-gradient-button">
      {children}
      <span>→</span>
    </button>
  );
}

export default function Solutions() {
  const [activeJourney, setActiveJourney] = useState("Startup");

  return (
    <main className="solutions-page">
      {/* SOLUTIONS HERO */}

      <section className="solutions-hero">
        <div className="solutions-grid-background" />

        <div className="solutions-container solutions-hero-content">
          <SectionLabel>SOLUTIONS</SectionLabel>

          <h1>
            Systems That Fit How Your
            <br />
            <span className="solutions-gradient-text">Business Runs</span>
          </h1>

          <p>
            Platforms designed around actual workflows — not generic templates
            forced onto your processes.
          </p>
        </div>
      </section>

      {/* SOLUTION EXPLORER */}

      <section className="solutions-explorer-intro">
        <div className="solutions-container">
          <SectionLabel>SOLUTION EXPLORER</SectionLabel>

          <h2>What Can We Build Together?</h2>

          <p className="solutions-description">
            Explore the categories of products and platforms Belnova engineers
            for startups, SMEs and enterprise teams.
          </p>
        </div>
      </section>

      {/* DIGITAL TRANSFORMATION */}

      <section className="solutions-transformation">
        <div className="solutions-container">
          <SectionLabel>DIGITAL TRANSFORMATION</SectionLabel>

          <h2>
            From Manual Processes to Digital
            <br />
            Operations
          </h2>

          <p className="solutions-description">
            Most transformation work starts with the same problem: information
            lives in too many disconnected places.
          </p>

          <div className="solutions-transformation-grid">
            {transformationColumns.map((column) => (
              <article
                className={`solutions-transformation-card ${column.className}`}
                key={column.title}
              >
                <h3>{column.title}</h3>

                <ul>
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {column.title === "BEFORE" && (
                  <span className="solutions-card-arrow">→</span>
                )}
              </article>
            ))}
          </div>

          <GradientButton>Transform My Business</GradientButton>
        </div>
      </section>

      {/* CLIENT JOURNEY */}

      <section className="solutions-section solutions-soft-section">
        <div className="solutions-container">
          <SectionLabel>CLIENT JOURNEY</SectionLabel>

          <h1>Built Around Your Business</h1>

          <p className="solutions-description">
            The engagement shape changes with the organization. Select a profile
            to see the typical path.
          </p>

          <div className="solutions-profile-tabs">
            {Object.keys(clientJourneys).map((profile) => (
              <button
                type="button"
                key={profile}
                className={activeJourney === profile ? "active" : ""}
                onClick={() => setActiveJourney(profile)}
              >
                {profile}
              </button>
            ))}
          </div>

          <div className="solutions-journey-grid">
            {clientJourneys[activeJourney].map((step, index) => (
              <article key={`${activeJourney}-${step}`}>
                <small>STEP {index + 1}</small>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}

      <section className="solutions-section">
        <div className="solutions-container">
          <SectionLabel>ENGAGEMENT MODELS</SectionLabel>

          <h2>Work With Us the Way That Fits</h2>

          <p className="solutions-description">
            Four models covering defined projects, long-term products, flexible
            capacity and existing systems.
          </p>

          <div className="solutions-model-grid">
            {engagementModels.map((model) => (
              <article key={model.title}>
                <h3>{model.title}</h3>
                <p>{model.description}</p>
              </article>
            ))}
          </div>

          <button type="button" className="solutions-outline-button">
            Find the Right Model
            <span>→</span>
          </button>
        </div>
      </section>

      {/* RESOURCE OUTSOURCING */}

      <section className="solutions-section solutions-soft-section">
        <div className="solutions-container">
          <SectionLabel>RESOURCE OUTSOURCING</SectionLabel>

          <h2>Extend Your Technology Team</h2>

          <p className="solutions-description">
            Flexible technical resources for organizations that need additional
            engineering capacity.
          </p>

          <div className="solutions-role-list">
            {technicalRoles.map((role) => (
              <button type="button" key={role}>
                {role}
              </button>
            ))}
          </div>

          <GradientButton>Request Technical Resources</GradientButton>
        </div>
      </section>

      {/* RECRUITMENT */}

      <section className="solutions-section">
        <div className="solutions-container">
          <SectionLabel>RECRUITMENT</SectionLabel>

          <h2>Find the Right Technology Talent</h2>

          <p className="solutions-description">
            A structured hiring process from requirement definition through
            onboarding.
          </p>

          <div className="solutions-recruitment-grid">
            {recruitmentSteps.map((step, index) => (
              <article key={step}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <h3>{step}</h3>
              </article>
            ))}
          </div>

          <GradientButton>Hire Technology Talent</GradientButton>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="solutions-final-cta">
        <div className="solutions-grid-background" />

        <div className="solutions-final-content">
          <div className="solutions-cta-icon">⬡</div>

          <h2>
            Your Next Big Idea{" "}
            <span className="solutions-gradient-text">Starts Here.</span>
          </h2>

          <p>Let&apos;s turn your business challenge into a technology solution.</p>

          <div className="solutions-cta-actions">
            <GradientButton>Start a Project</GradientButton>

            <button type="button" className="solutions-outline-button">
              Talk to Our Team
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      <a href="#contact" className="solutions-floating-chat">
        ◯ Let&apos;s Talk
      </a>
    </main>
  );
}