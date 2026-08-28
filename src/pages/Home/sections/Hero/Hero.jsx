import React, { useState, useRef, useEffect, useCallback } from "react";
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
  {
    title: "IDEA",
    className: "belNova-orbit-idea",
    description: "Turning ideas into practical digital solutions.",
    placement: "bottom"
  },
  {
    title: "SOFTWARE",
    className: "belNova-orbit-software",
    description: "Scalable software built around real business needs.",
    placement: "bottom-left"
  },
  {
    title: "AI",
    className: "belNova-orbit-ai",
    description: "Intelligent AI solutions that automate and accelerate.",
    placement: "left"
  },
  {
    title: "CLOUD",
    className: "belNova-orbit-cloud",
    description: "Secure, scalable cloud infrastructure for modern businesses.",
    placement: "top-left"
  },
  {
    title: "DATA",
    className: "belNova-orbit-data",
    description: "Data-driven insights that support smarter decisions.",
    placement: "top"
  },
  {
    title: "AUTOMATION",
    className: "belNova-orbit-automation",
    description: "Automating repetitive workflows to improve efficiency.",
    placement: "top"
  },
  {
    title: "MOBILE",
    className: "belNova-orbit-mobile",
    description: "Engaging mobile experiences across modern platforms.",
    placement: "top-right"
  },
  {
    title: "WEB",
    className: "belNova-orbit-web",
    description: "Modern web applications designed for performance and scale.",
    placement: "right"
  },
  {
    title: "BUSINESS",
    className: "belNova-orbit-business",
    description: "Technology decisions tied to business outcomes.",
    placement: "bottom-right"
  },
];

export default function Hero({ onStartProject, onExploreWhatWeDo, onExploreCapabilities }) {
  const handleExplore = onExploreWhatWeDo || onExploreCapabilities;
  const [activeTechIndex, setActiveTechIndex] = useState(null);
  const [coords, setCoords] = useState(null);

  const orbitRef = useRef(null);
  const centerRef = useRef(null);
  const itemRefs = useRef([]);

  const updateConnection = useCallback((index) => {
    if (index === null || index === undefined) {
      setCoords(null);
      return;
    }
    const orbitEl = orbitRef.current;
    const centerEl = centerRef.current;
    const targetEl = itemRefs.current[index];

    if (orbitEl && centerEl && targetEl) {
      const orbitRect = orbitEl.getBoundingClientRect();
      const centerRect = centerEl.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();

      setCoords({
        x1: centerRect.left + centerRect.width / 2 - orbitRect.left,
        y1: centerRect.top + centerRect.height / 2 - orbitRect.top,
        x2: targetRect.left + targetRect.width / 2 - orbitRect.left,
        y2: targetRect.top + targetRect.height / 2 - orbitRect.top,
        width: orbitRect.width,
        height: orbitRect.height,
      });
    }
  }, []);

  const handleMouseEnter = (index) => {
    setActiveTechIndex(index);
    updateConnection(index);
  };

  const handleMouseLeave = () => {
    setActiveTechIndex(null);
    setCoords(null);
  };

  const handleClick = (index, e) => {
    e.stopPropagation();
    if (activeTechIndex === index) {
      setActiveTechIndex(null);
      setCoords(null);
    } else {
      setActiveTechIndex(index);
      updateConnection(index);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (orbitRef.current && !orbitRef.current.contains(e.target)) {
        setActiveTechIndex(null);
        setCoords(null);
      }
    };

    const handleResize = () => {
      if (activeTechIndex !== null) {
        updateConnection(activeTechIndex);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeTechIndex, updateConnection]);

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
              onClick={handleExplore}
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
          <div
            className={`belNova-technology-orbit ${activeTechIndex !== null ? "belNova-orbit-has-active" : ""}`}
            ref={orbitRef}
          >
            {/* Background animated orbit rings */}
            <div
              className={`belNova-orbit-ring belNova-orbit-one ${
                activeTechIndex !== null ? "belNova-orbit-one-active" : ""
              }`}
            />
            <div
              className={`belNova-orbit-ring belNova-orbit-two ${
                activeTechIndex !== null ? "belNova-orbit-two-active" : ""
              }`}
            />

            {/* SVG Interactive Connection & Traveling Particle Beam */}
            {coords && (
              <svg
                className="belNova-orbit-svg-layer"
                viewBox={`0 0 ${coords.width} ${coords.height}`}
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="belNovaBeamGradient"
                    gradientUnits="userSpaceOnUse"
                    x1={coords.x1}
                    y1={coords.y1}
                    x2={coords.x2}
                    y2={coords.y2}
                  >
                    <stop offset="0%" stopColor="#00cbe8" stopOpacity="0.9" />
                    <stop offset="45%" stopColor="#218bf8" stopOpacity="1" />
                    <stop offset="80%" stopColor="#7047f2" stopOpacity="1" />
                    <stop offset="100%" stopColor="#cf0de9" stopOpacity="0.95" />
                  </linearGradient>

                  <filter
                    id="belNovaBeamGlow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur2" />
                    <feMerge>
                      <feMergeNode in="blur2" />
                      <feMergeNode in="blur1" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter
                    id="belNovaParticleFilter"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                  >
                    <feGaussianBlur stdDeviation="3.5" result="glow" />
                    <feMerge>
                      <feMergeNode in="glow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <radialGradient id="belNovaParticleGrad">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="35%" stopColor="#00cbe8" stopOpacity="1" />
                    <stop offset="70%" stopColor="#218bf8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#cf0de9" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Pulsing center emitter radar ring */}
                <circle
                  cx={coords.x1}
                  cy={coords.y1}
                  r="22"
                  className="belNova-orbit-center-pulse-ring"
                />

                {/* Outer wide neon glow beam */}
                <line
                  x1={coords.x1}
                  y1={coords.y1}
                  x2={coords.x2}
                  y2={coords.y2}
                  className="belNova-orbit-beam-outer-glow"
                  stroke="url(#belNovaBeamGradient)"
                  filter="url(#belNovaBeamGlow)"
                />

                {/* Digital animated dash track */}
                <line
                  x1={coords.x1}
                  y1={coords.y1}
                  x2={coords.x2}
                  y2={coords.y2}
                  className="belNova-orbit-beam-track"
                  stroke="url(#belNovaBeamGradient)"
                />

                {/* Bright laser core line */}
                <line
                  x1={coords.x1}
                  y1={coords.y1}
                  x2={coords.x2}
                  y2={coords.y2}
                  className="belNova-orbit-beam-core"
                />

                {/* Destination target radar ping */}
                <circle
                  cx={coords.x2}
                  cy={coords.y2}
                  r="14"
                  className="belNova-orbit-target-ping"
                />

                {/* Primary glowing data particle traveling continuously along connection */}
                <g filter="url(#belNovaParticleFilter)">
                  <circle r="7" fill="url(#belNovaParticleGrad)" className="belNova-data-particle-outer">
                    <animateMotion
                      path={`M ${coords.x1} ${coords.y1} L ${coords.x2} ${coords.y2}`}
                      dur="1.15s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="3" fill="#ffffff" className="belNova-data-particle-core">
                    <animateMotion
                      path={`M ${coords.x1} ${coords.y1} L ${coords.x2} ${coords.y2}`}
                      dur="1.15s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>

                {/* Secondary continuous trailing data particle */}
                <g filter="url(#belNovaParticleFilter)">
                  <circle r="5" fill="url(#belNovaParticleGrad)" opacity="0.85">
                    <animateMotion
                      path={`M ${coords.x1} ${coords.y1} L ${coords.x2} ${coords.y2}`}
                      dur="1.15s"
                      begin="0.575s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="2.2" fill="#ffffff">
                    <animateMotion
                      path={`M ${coords.x1} ${coords.y1} L ${coords.x2} ${coords.y2}`}
                      dur="1.15s"
                      begin="0.575s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              </svg>
            )}

            {/* Center hexagon */}
            <div
              className={`belNova-orbit-center ${
                activeTechIndex !== null ? "belNova-hex-active" : ""
              }`}
              ref={centerRef}
            >
              <div className="belNova-hex-glow-backdrop" />
              <div className="belNova-hex-icon">⬡</div>
            </div>

            {/* 9 Technology Orbit Labels */}
            {orbitLabels.map(({ title, className, description, placement }, index) => {
              const isActive = activeTechIndex === index;
              return (
                <div
                  className={`belNova-orbit-item ${className} ${
                    isActive ? "belNova-orbit-item-active" : ""
                  }`}
                  key={title}
                  ref={(el) => (itemRefs.current[index] = el)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={(e) => handleClick(index, e)}
                  onTouchStart={(e) => handleClick(index, e)}
                  tabIndex={0}
                  onFocus={() => handleMouseEnter(index)}
                  onBlur={handleMouseLeave}
                  role="button"
                  aria-pressed={isActive}
                  aria-label={`Technology capability: ${title}`}
                >
                  <span
                    className={`belNova-orbit-label ${
                      isActive ? "belNova-orbit-label-active" : ""
                    }`}
                  >
                    {title}
                  </span>

                  <div
                    className={`belNova-orbit-card belNova-card-${placement} ${
                      isActive ? "belNova-orbit-card-active" : ""
                    }`}
                  >
                    <div className="belNova-orbit-card-header">
                      <span className="belNova-orbit-card-dot" />
                      <span className="belNova-orbit-card-tag">{title}</span>
                    </div>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
