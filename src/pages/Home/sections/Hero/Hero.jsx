import React from "react";
import "./Hero.css";
import { GradientButton } from "../../components/UI";

const heroTags = [
  "Software Engineering",
  "AI & Automation",
  "Cloud & DevOps",
  "Technology Talent",
  "Digital Transformation",
];

const orbitLabels = [
  ["IDEA", "belNova-orbit-idea"],
  ["SOFTWARE", "belNova-orbit-software"],
  ["AI", "belNova-orbit-ai"],
  ["CLOUD", "belNova-orbit-cloud"],
  ["DATA", "belNova-orbit-data"],
  ["AUTOMATION", "belNova-orbit-automation"],
  ["MOBILE", "belNova-orbit-mobile"],
  ["WEB", "belNova-orbit-web"],
  ["BUSINESS", "belNova-orbit-business"],
];

export default function Hero({ onStartProject, onExploreWhatWeDo }) {
  return (
    <section className="belNova-hero" id="hero">
      <div className="belNova-hero-grid-bg" />

      <div className="belNova-hero-container">
        <div className="belNova-hero-copy">
          <div className="belNova-hero-badge">
            <span />
            innovation-driven technology partner
          </div>

          <h1 className="belNova-hero-title">
            Innovate Today.
            <br />
            <span className="belNova-hero-gradient-text">Build the Future.</span>
          </h1>

          <p className="belNova-hero-description">
            Belnova Tech helps businesses turn ideas, challenges and
            opportunities into scalable digital products and technology
            solutions.
          </p>

          <div className="belNova-hero-actions">
            <GradientButton onClick={onStartProject}>
              Start a Project
            </GradientButton>

            <button
              type="button"
              className="belNova-hero-outline-btn"
              onClick={onExploreWhatWeDo}
            >
              Explore What We Do <span>→</span>
            </button>
          </div>

          <p className="belNova-hero-idea-link">
            Have an idea?{" "}
            <button
              type="button"
              className="belNova-hero-link-btn"
              onClick={onStartProject}
            >
              Let's talk.
            </button>
          </p>

          <div className="belNova-hero-tags">
            {heroTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="belNova-hero-visual">
          <div className="belNova-technology-orbit">
            <div className="belNova-orbit-ring belNova-orbit-one" />
            <div className="belNova-orbit-ring belNova-orbit-two" />
            <div className="belNova-orbit-center">
              <div className="belNova-hex-icon">⬡</div>
            </div>

            {orbitLabels.map(([title, className]) => (
              <span
                className={`belNova-orbit-label ${className}`}
                key={title}
              >
                {title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
