import React, { useState } from "react";
import "../styles/Innovations.css";

const innovationSteps = [
  {
    number: "01",
    title: "DISCOVER",
    items: [
      "Business requirements",
      "User needs",
      "Process analysis",
      "Technical feasibility",
    ],
  },
  {
    number: "02",
    title: "DEFINE",
    items: ["Scope", "Product strategy", "Architecture", "Roadmap"],
  },
  {
    number: "03",
    title: "DESIGN",
    items: [
      "UX research",
      "Wireframes",
      "UI design",
      "Prototype",
      "Design system",
    ],
  },
  {
    number: "04",
    title: "ENGINEER",
    items: [
      "Frontend",
      "Backend",
      "Mobile",
      "APIs",
      "Database",
      "Integrations",
    ],
  },
  {
    number: "05",
    title: "LAUNCH",
    items: ["Testing", "Cloud", "CI/CD", "Deployment", "Monitoring"],
  },
];

const labProjects = [
  {
    type: "PROTOTYPE",
    title: "AI Document Assistant",
    description: "An internal exploration, not a commercial product.",
  },
  {
    type: "CONCEPT",
    title: "Intelligent Business Analytics",
    description: "An internal exploration, not a commercial product.",
  },
  {
    type: "PROTOTYPE",
    title: "Workflow Automation Engine",
    description: "An internal exploration, not a commercial product.",
  },
  {
    type: "CONCEPT",
    title: "AI Customer Support",
    description: "An internal exploration, not a commercial product.",
  },
  {
    type: "RESEARCH",
    title: "Smart Operations Platform",
    description: "An internal exploration, not a commercial product.",
  },
  {
    type: "RESEARCH",
    title: "Predictive Business Intelligence",
    description: "An internal exploration, not a commercial product.",
  },
];

const technologyData = {
  Frontend: {
    use: "Interfaces, portals and dashboards",
    technologies: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  Backend: {
    use: "Business logic, services and APIs",
    technologies: ["Python", "FastAPI", "Node.js", ".NET", "REST API", "GraphQL"],
  },
  Mobile: {
    use: "Cross-platform and native mobile applications",
    technologies: ["React Native", "Flutter", "Android", "iOS", "PWA"],
  },
  Database: {
    use: "Reliable operational and analytical data",
    technologies: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis"],
  },
  Cloud: {
    use: "Scalable infrastructure and managed services",
    technologies: ["AWS", "Azure", "Docker", "Serverless", "Storage"],
  },
  DevOps: {
    use: "Automated delivery, monitoring and infrastructure",
    technologies: ["CI/CD", "GitHub Actions", "Docker", "Kubernetes", "Monitoring"],
  },
  AI: {
    use: "Automation, intelligence and predictive systems",
    technologies: ["OpenAI", "Python", "LLMs", "Machine Learning", "Analytics"],
  },
};

const securityItems = [
  { icon: "⚿", title: "Authentication" },
  { icon: "♢", title: "Authorization" },
  { icon: "▣", title: "Role-Based Access" },
  { icon: "⌘", title: "Secure APIs" },
  { icon: "◉", title: "Data Encryption" },
  { icon: "⇩", title: "Backup Strategy" },
  { icon: "▤", title: "Logging" },
  { icon: "ϟ", title: "Monitoring" },
  { icon: "◇", title: "Environment Separation" },
  { icon: "↗", title: "Secure Deployment" },
];

function SectionLabel({ children }) {
  return (
    <div className="innovations-label">
      <span />
      {children}
    </div>
  );
}

function GradientButton({ children }) {
  return (
    <button type="button" className="innovations-gradient-button">
      {children}
      <span>→</span>
    </button>
  );
}

export default function Innovations() {
  const [activeStep, setActiveStep] = useState(1);
  const [activeTechnology, setActiveTechnology] = useState("Frontend");

  const selectedTechnology = technologyData[activeTechnology];

  return (
    <main className="innovations-page">
      {/* HERO */}

      <section className="innovations-hero">
        <div className="innovations-grid-background" />

        <div className="innovations-container innovations-hero-content">
          <SectionLabel>INNOVATION</SectionLabel>

          <h1>
            Exploring{" "}
            <span className="innovations-gradient-text">
              What&apos;s Next.
            </span>
          </h1>

          <p>
            A structured delivery engine on one side, an open experimentation
            space on the other.
          </p>
        </div>
      </section>

      {/* INNOVATION ENGINE */}

      <section className="innovations-section innovations-engine-section">
        <div className="innovations-container">
          <SectionLabel>BELNOVA INNOVATION ENGINE</SectionLabel>

          <h2>
            From Idea to{" "}
            <span className="innovations-gradient-text">Impact.</span>
          </h2>

          <p className="innovations-description">
            A structured technology journey designed to turn business ideas
            into scalable digital products.
          </p>

          <div className="innovations-process">
            <div className="innovations-process-line" />

            {innovationSteps.map((step, index) => (
              <button
                type="button"
                className={`innovations-process-step ${
                  activeStep === index ? "active" : ""
                }`}
                key={step.number}
                onClick={() => setActiveStep(index)}
              >
                <span className="innovations-step-number">{step.number}</span>

                <article>
                  <h3>{step.title}</h3>

                  <ul>
                    {step.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BELNOVA LABS */}

      <section className="innovations-section innovations-soft-section">
        <div className="innovations-container">
          <SectionLabel>BELNOVA LABS</SectionLabel>

          <h2>
            Exploring{" "}
            <span className="innovations-gradient-text">
              What&apos;s Next.
            </span>
          </h2>

          <p className="innovations-description">
            Belnova Labs is the innovation space for experimenting with
            emerging technologies, prototypes, automation and future digital
            products.
          </p>

          <div className="innovations-labs-grid">
            {labProjects.map((project) => (
              <article className="innovations-lab-card" key={project.title}>
                <small>{project.type}</small>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>

          <GradientButton>Explore Innovation</GradientButton>
        </div>
      </section>

      {/* TECHNOLOGY RADAR */}

      <section className="innovations-section innovations-radar-section">
        <div className="innovations-container">
          <SectionLabel>TECHNOLOGY RADAR</SectionLabel>

          <h2>Technology Behind the Work</h2>

          <p className="innovations-description">
            The engineering stack Belnova uses across product delivery.
            Capability is shown, not certified — we list only what our teams
            actively build with.
          </p>

          <div className="innovations-radar-layout">
            <div className="innovations-radar">
              <div className="innovations-radar-circle innovations-circle-one" />
              <div className="innovations-radar-circle innovations-circle-two" />
              <div className="innovations-radar-circle innovations-circle-three" />

              <div className="innovations-radar-lines">
                {Object.keys(technologyData).map((technology, index) => (
                  <span
                    key={technology}
                    className={`innovations-radar-line innovations-line-${
                      index + 1
                    }`}
                  />
                ))}
              </div>

              <div className="innovations-radar-fill" />

              {Object.keys(technologyData).map((technology) => (
                <button
                  type="button"
                  key={technology}
                  className={`innovations-radar-label innovations-${technology.toLowerCase()} ${
                    activeTechnology === technology ? "active" : ""
                  }`}
                  onClick={() => setActiveTechnology(technology)}
                >
                  {technology}
                </button>
              ))}
            </div>

            <div className="innovations-technology-card">
              <small>CATEGORY</small>
              <h3>{activeTechnology}</h3>
              <p>Primary use: {selectedTechnology.use}</p>

              <div className="innovations-tags">
                {selectedTechnology.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <button type="button" className="innovations-outline-button">
                Discuss Technology
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY */}

      <section className="innovations-section">
        <div className="innovations-container">
          <SectionLabel>SECURITY</SectionLabel>

          <h2>Security Isn&apos;t an Add-On.</h2>

          <p className="innovations-description">
            Security controls are part of the architecture from the first
            sprint, not retrofitted before launch.
          </p>

          <div className="innovations-security-grid">
            {securityItems.map((item) => (
              <article key={item.title}>
                <span>{item.icon}</span>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="innovations-final-cta">
        <div className="innovations-grid-background" />

        <div className="innovations-final-content">
          <div className="innovations-cta-icon">
            <span>⬡</span>
          </div>

          <h2>
            Your Next Big Idea{" "}
            <span className="innovations-gradient-text">
              Starts
              <br />
              Here.
            </span>
          </h2>

          <p>
            Let&apos;s turn your business challenge into a technology solution.
          </p>

          <div className="innovations-cta-actions">
            <GradientButton>Start a Project</GradientButton>

            <button type="button" className="innovations-outline-button">
              Talk to Our Team
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      <a href="#contact" className="innovations-floating-chat">
        ◯ Let&apos;s Talk
      </a>
    </main>
  );
}