import React from "react";
import "../styles/Work.css";

const projects = [
  { category: "FINANCIAL TECHNOLOGY", title: "INRFS", subtitle: "Investor Management & Investment Portal", tags: ["Investor onboarding", "KYC", "Investment management"] },
  { category: "HEALTHCARE TECHNOLOGY", title: "DischargeEasy", subtitle: "Healthcare Assistance Platform", tags: ["Patient assistance", "Hospital coordination", "Discharge support"] },
  { category: "FITNESS TECHNOLOGY", title: "Gym Management Platform", subtitle: "Fitness operations system", tags: ["Member management", "Trainer management", "Membership"] },
  { category: "RETAIL TECHNOLOGY", title: "E-Commerce Platform", subtitle: "Retail commerce system", tags: ["Products", "Customers", "Orders"] },
];

const architectureLayers = ["User", "Web / Mobile", "Application Layer", "API Layer", "Backend Services", "Database", "Cloud Infrastructure", "Monitoring & Security"];
const integrations = ["Payments", "SMS", "Email", "Maps", "AI", "Analytics", "Third-party APIs"];

function Label({ children }) {
  return <div className="work-label"><span className="work-label__dot" />{children}</div>;
}

function ProjectCard({ project, active }) {
  return <article className={`project-card${active ? " project-card--active" : ""}`}>
    <p className="eyebrow">{project.category}</p>
    <h3>{project.title}</h3>
    <p className="project-card__subtitle">{project.subtitle}</p>
    <div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
  </article>;
}

function InfoCard({ title, children }) {
  return <article className="info-card"><p className="eyebrow">{title}</p><div className="info-card__content">{children}</div></article>;
}

export default function WorkPage() {
  return <main className="work-page">
    <section className="work-hero section-grid"><div className="container">
      <Label>WORK</Label>
      <h1 className="hero-title">Ideas Turned Into <span className="gradient-text">DigitalProducts</span></h1>
      <p className="hero-copy">Selected projects with the business challenge, the system built and the technology behind it.</p>
    </div></section>

   <section className="projects-section">
  <div className="container">

    <p className="section-intro">
      Project information is presented as delivered.
      No invented client names, logos or claims.
    </p>

    <div className="projects-grid">
      {projects.map((project, i) => (
        <ProjectCard
          key={project.title}
          project={project}
          active={i === 0}
        />
      ))}
    </div>
      <div className="projects-grid">{projects.map((project, i) => <ProjectCard key={project.title} project={project} active={i === 0} />)}</div>

      <section className="project-anatomy">
        <div className="anatomy-heading"><p className="eyebrow">PROJECT ANATOMY</p><h3>INRFS</h3><p>Investor Management &amp; Investment Portal</p></div>
        <div className="anatomy-grid anatomy-grid--top">
          <InfoCard title="BUSINESS CHALLENGE">Investor records, onboarding documents and interest calculations were handled across separate manual files.</InfoCard>
          <InfoCard title="EXISTING PROCESS">Spreadsheets, email documents and manual verification.</InfoCard>
          <InfoCard title="DIGITAL SOLUTION">A single investor portal covering onboarding, verification, investment tracking and administration.</InfoCard>
        </div>
        <div className="anatomy-grid anatomy-grid--bottom">
          <InfoCard title="KEY MODULES"><ul className="bullet-list">{["Investor onboarding","KYC","Investment management","UPI / QR","Digital bonds","Interest management","Admin portal"].map(x => <li key={x}>{x}</li>)}</ul></InfoCard>
          <InfoCard title="TECHNOLOGY"><dl className="tech-list"><div><dt>Frontend</dt><dd>React</dd></div><div><dt>Backend</dt><dd>Python / Django</dd></div><div><dt>Database</dt><dd>PostgreSQL</dd></div><div><dt>Cloud</dt><dd>AWS</dd></div></dl></InfoCard>
          <InfoCard title="FUTURE ROADMAP"><ul className="bullet-list">{["Investor mobile app","Automated statements","Deeper analytics"].map(x => <li key={x}>{x}</li>)}</ul></InfoCard>
        </div>
        <div className="before-after">
          <div className="before-after__side"><p className="eyebrow">BEFORE</p><p>Manual • Disconnected • Slow • Paper-based</p></div>
          <div className="solution-pill">Belnova Solution</div>
          <div className="before-after__side before-after__side--after"><p className="eyebrow">AFTER</p><p>Digital • Centralized • Automated • Trackable</p></div>
        </div>
        <a className="gradient-button" href="#contact">Have a Similar Challenge? Talk to Belnova <span>→</span></a>
      </section>
    </div></section>

    <section className="architecture-section section-grid"><div className="container">
      <Label>ARCHITECTURE</Label>
      <h2>Engineered for Scale</h2>
      <p className="section-intro architecture-intro">A reference view of how Belnova structures systems — from interface to infrastructure, with security and observability built in.</p>
      <div className="architecture-grid">
        <div className="architecture-stack">{architectureLayers.map((layer, i) => <React.Fragment key={layer}><div className="architecture-layer"><strong>{layer}</strong><span>{String(i + 1).padStart(2, "0")}</span></div>{i < architectureLayers.length - 1 && <div className="architecture-connector" />}</React.Fragment>)}</div>
        <div className="integrations-card"><h3>Side Integrations</h3><p>Connected through the API layer with isolated credentials and environment separation.</p><div className="integration-list">{integrations.map(x => <div className="integration-item" key={x}><span className="integration-dot" />{x}</div>)}</div></div>
      </div>
    </div></section>

    <section className="final-cta" id="contact">
      <div className="cta-orbit"><span>◇</span></div>
      <h2>Your Next Big Idea <span className="gradient-text">Starts</span><br /><span className="gradient-text">Here.</span></h2>
      <p>Let's turn your business challenge into a technology solution.</p>
      <div className="cta-actions"><a className="gradient-button" href="#start-project">Start a Project <span>→</span></a><a className="outline-button" href="#team">Talk to Our Team <span>→</span></a></div>
    </section>
  </main>;
}
