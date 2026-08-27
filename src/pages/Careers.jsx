import React from "react";
import "../styles/Careers.css";

const jobs = [
  {
    title: "Full Stack Developer",
    location: "Hybrid",
    type: "Full-time",
    experience: "2–5 years",
    skills: "React, Python, PostgreSQL",
  },
  {
    title: "Python Developer",
    location: "Hybrid",
    type: "Full-time",
    experience: "1–4 years",
    skills: "Django, FastAPI, REST APIs",
  },
  {
    title: "React Developer",
    location: "Remote",
    type: "Full-time",
    experience: "1–4 years",
    skills: "React, TypeScript, Next.js",
  },
  {
    title: "QA Engineer",
    location: "Hybrid",
    type: "Full-time",
    experience: "1–3 years",
    skills: "Manual, automation, API testing",
  },
  {
    title: "DevOps Engineer",
    location: "Hybrid",
    type: "Full-time",
    experience: "2–5 years",
    skills: "Docker, Kubernetes, CI/CD, AWS",
  },
  {
    title: "AI/ML Engineer",
    location: "Hybrid",
    type: "Full-time",
    experience: "1–4 years",
    skills: "LLMs, Python, ML pipelines",
  },
  {
    title: "Business Analyst",
    location: "Hybrid",
    type: "Full-time",
    experience: "1–4 years",
    skills: "Requirements, documentation, UAT",
  },
  {
    title: "Talent Acquisition",
    location: "On-site",
    type: "Full-time",
    experience: "1–3 years",
    skills: "Tech hiring, sourcing, screening",
  },
];

function SectionLabel({ children }) {
  return (
    <div className="careers-label">
      <span />
      {children}
    </div>
  );
}

function GradientButton({ children, href = "#open-positions" }) {
  return (
    <a href={href} className="careers-gradient-button">
      {children}
      <span>→</span>
    </a>
  );
}

function CareersSymbol() {
  return (
    <div className="careers-symbol" aria-hidden="true">
      <div className="careers-symbol-outer">
        <div className="careers-symbol-inner">
          <span />
        </div>
      </div>
    </div>
  );
}

export default function Careers() {
  const applicationEmail = "careers@belnova.com";

  const createApplicationLink = (role) => {
    const subject = encodeURIComponent(`Application for ${role}`);
    const body = encodeURIComponent(
      `Hello Belnova Team,\n\nI would like to apply for the ${role} position.\n\nName:\nPhone:\nExperience:\nPortfolio/LinkedIn:\n\nPlease find my resume attached.\n`,
    );

    return `mailto:${applicationEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="careers-page">
      {/* HERO */}

      <section className="careers-hero">
        <div className="careers-grid-background" />

        <div className="careers-container careers-hero-content">
          <SectionLabel>CAREERS</SectionLabel>

          <h1>
            Build Your Future{" "}
            <span className="careers-gradient-text">With Belnova</span>
          </h1>

          <p>
            We are building a team of people who enjoy solving challenging
            technology problems and creating meaningful digital products.
          </p>
        </div>
      </section>

      {/* OPEN POSITIONS */}

      <section className="careers-section" id="open-positions">
        <div className="careers-container">
          <SectionLabel>CAREERS</SectionLabel>

          <h2>Build Your Future With Belnova</h2>

          <p className="careers-description">
            We are building a team of people who enjoy solving challenging
            technology problems and creating meaningful digital products.
          </p>

          <div className="careers-jobs-grid">
            {jobs.map((job, index) => (
              <article
                className={`careers-job-card ${
                  index === jobs.length - 2 ? "featured" : ""
                }`}
                key={job.title}
              >
                <div className="careers-job-information">
                  <h3>{job.title}</h3>

                  <div className="careers-job-meta">
                    <span>{job.location}</span>
                    <i>•</i>
                    <span>{job.type}</span>
                    <i>•</i>
                    <span>{job.experience}</span>
                  </div>

                  <p>{job.skills}</p>
                </div>

                <a
                  href={createApplicationLink(job.title)}
                  className="careers-apply-button"
                >
                  Apply
                  <span>→</span>
                </a>
              </article>
            ))}
          </div>

          <div className="careers-job-actions">
            <GradientButton>View Open Positions</GradientButton>

            <a
              href={`mailto:${applicationEmail}?subject=${encodeURIComponent(
                "Career Profile Submission",
              )}`}
              className="careers-outline-button"
            >
              Don&apos;t see your role? Send Your Profile
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="careers-final-cta">
        <div className="careers-grid-background" />

        <div className="careers-final-content">
          <div className="careers-cta-symbol">
            <CareersSymbol />
          </div>

          <h2>
            Your Next Big Idea{" "}
            <span className="careers-gradient-text">
              Starts
              <br />
              Here.
            </span>
          </h2>

          <p>
            Let&apos;s turn your business challenge into a technology solution.
          </p>

          <div className="careers-cta-actions">
            <GradientButton href="/contact">Start a Project</GradientButton>

            <a href="/contact" className="careers-outline-button">
              Talk to Our Team
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <a href="#contact" className="careers-floating-chat">
        ◯ Let&apos;s Talk
      </a>
    </main>
  );
}