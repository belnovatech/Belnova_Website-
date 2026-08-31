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

// 9 labels evenly placed 40deg apart, starting at top (270deg in CSS coords = 0 in math)
const orbitLabels = [
  { title: "IDEA",       description: "Turning ideas into practical digital solutions.",             placement: "bottom",       baseAngleDeg: 270 },
  { title: "SOFTWARE",   description: "Scalable software built around real business needs.",         placement: "bottom-left",  baseAngleDeg: 310 },
  { title: "AI",         description: "Intelligent AI solutions that automate and accelerate.",      placement: "left",         baseAngleDeg: 350 },
  { title: "CLOUD",      description: "Secure, scalable cloud infrastructure for modern businesses.",placement: "top-left",     baseAngleDeg:  30 },
  { title: "DATA",       description: "Data-driven insights that support smarter decisions.",        placement: "top",          baseAngleDeg:  70 },
  { title: "AUTOMATION", description: "Automating repetitive workflows to improve efficiency.",      placement: "top",          baseAngleDeg: 110 },
  { title: "MOBILE",     description: "Engaging mobile experiences across modern platforms.",        placement: "top-right",    baseAngleDeg: 150 },
  { title: "WEB",        description: "Modern web applications designed for performance and scale.", placement: "right",        baseAngleDeg: 190 },
  { title: "BUSINESS",   description: "Technology decisions tied to business outcomes.",             placement: "bottom-right", baseAngleDeg: 230 },
];

const ORBIT_SPEED_DEG_PER_SEC = 10;
const FRONT_ANGLE_CSS_DEG    = 90;  // bottom of circle = "front-facing"
const FRONT_THRESHOLD_DEG    = 22;

function smallestAngleDiff(a, b) {
  let d = ((a - b) % 360 + 360) % 360;
  if (d > 180) d = 360 - d;
  return d;
}

export default function Hero({ onStartProject, onExploreWhatWeDo, onExploreCapabilities }) {
  const handleExplore = onExploreWhatWeDo || onExploreCapabilities;

  const [activeTechIndex, setActiveTechIndex] = useState(null);
  const [coords, setCoords]                   = useState(null);
  const [rotationDeg, setRotationDeg]         = useState(0);
  const [frontIndex, setFrontIndex]           = useState(null);
  const [hoveredIndex, setHoveredIndex]       = useState(null);
  const [orbitSize, setOrbitSize]             = useState(520);

  const orbitRef   = useRef(null);
  const centerRef  = useRef(null);
  const itemRefs   = useRef([]);
  const animRef    = useRef(null);
  const lastTsRef  = useRef(null);
  const rotRef     = useRef(0);
  const pausedRef  = useRef(false);

  // Observe orbit container size for responsive positioning
  useEffect(() => {
    const el = orbitRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setOrbitSize(entry.contentRect.width);
    });
    ro.observe(el);
    setOrbitSize(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  // Animation loop
  useEffect(() => {
    const tick = (ts) => {
      if (lastTsRef.current !== null) {
        const dt = (ts - lastTsRef.current) / 1000;
        if (!pausedRef.current) {
          rotRef.current = (rotRef.current + ORBIT_SPEED_DEG_PER_SEC * dt) % 360;
          setRotationDeg(rotRef.current);
        }
      }
      lastTsRef.current = ts;
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animRef.current);
      lastTsRef.current = null;
    };
  }, []);

  // Determine front item each frame
  useEffect(() => {
    let bestIdx  = null;
    let bestDiff = Infinity;
    orbitLabels.forEach((lbl, i) => {
      const angle = (lbl.baseAngleDeg + rotationDeg) % 360;
      const diff  = smallestAngleDiff(angle, FRONT_ANGLE_CSS_DEG);
      if (diff < bestDiff) { bestDiff = diff; bestIdx = i; }
    });
    setFrontIndex(bestDiff <= FRONT_THRESHOLD_DEG ? bestIdx : null);
  }, [rotationDeg]);

  // SVG connection
  const updateConnection = useCallback((index) => {
    if (index === null) { setCoords(null); return; }
    const orbitEl  = orbitRef.current;
    const centerEl = centerRef.current;
    const targetEl = itemRefs.current[index];
    if (orbitEl && centerEl && targetEl) {
      const oR = orbitEl.getBoundingClientRect();
      const cR = centerEl.getBoundingClientRect();
      const tR = targetEl.getBoundingClientRect();
      setCoords({
        x1: cR.left + cR.width  / 2 - oR.left,
        y1: cR.top  + cR.height / 2 - oR.top,
        x2: tR.left + tR.width  / 2 - oR.left,
        y2: tR.top  + tR.height / 2 - oR.top,
        width:  oR.width,
        height: oR.height,
      });
    }
  }, []);

  const handleMouseEnter = (index) => {
    pausedRef.current = true;
    setHoveredIndex(index);
    setActiveTechIndex(index);
    updateConnection(index);
  };
  const handleMouseLeave = () => {
    pausedRef.current = false;
    setHoveredIndex(null);
    setActiveTechIndex(null);
    setCoords(null);
  };
  const handleClick = (index, e) => {
    e.stopPropagation();
    if (activeTechIndex === index) { setActiveTechIndex(null); setCoords(null); }
    else { setActiveTechIndex(index); updateConnection(index); }
  };

  useEffect(() => {
    const onDocClick = (e) => {
      if (orbitRef.current && !orbitRef.current.contains(e.target)) {
        setActiveTechIndex(null); setCoords(null);
      }
    };
    const onResize = () => { if (activeTechIndex !== null) updateConnection(activeTechIndex); };
    document.addEventListener("click", onDocClick);
    window.addEventListener("resize", onResize);
    return () => { document.removeEventListener("click", onDocClick); window.removeEventListener("resize", onResize); };
  }, [activeTechIndex, updateConnection]);

  // Compute position from angle + orbit size
  const getItemStyle = (baseAngleDeg) => {
    const radius  = orbitSize * 0.44;
    const cx      = orbitSize / 2;
    const cy      = orbitSize / 2;
    // CSS degrees: 0=top, CW. Convert to math radians (0=right, CCW).
    const angleDeg = ((baseAngleDeg + rotationDeg) % 360 + 360) % 360;
    const angleRad = (angleDeg - 90) * (Math.PI / 180);
    const x = cx + radius * Math.cos(angleRad);
    const y = cy + radius * Math.sin(angleRad);
    return {
      position:  "absolute",
      left:      `${x}px`,
      top:       `${y}px`,
      transform: "translate(-50%, -50%)",
      zIndex:    8,
      cursor:    "pointer",
      outline:   "none",
    };
  };

  return (
    <section className="belNova-hero" id="hero">
      <div className="belNova-hero-grid-bg" />

      <div className="belNova-hero-container">
        {/* ── Copy ── */}
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
            <GradientButton onClick={onStartProject}>Start a Project</GradientButton>
            <button type="button" className="belNova-hero-outline-btn" onClick={handleExplore}>
              Explore What We Do <span>→</span>
            </button>
          </div>

          <p className="belNova-hero-idea-link">
            Have an idea?{" "}
            <button type="button" className="belNova-hero-link-btn" onClick={onStartProject}>
              Let&apos;s talk.
            </button>
          </p>

          <div className="belNova-hero-tags">
            {heroTags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>

        {/* ── Orbit Visual ── */}
        <div className="belNova-hero-visual">
          <div
            className={`belNova-technology-orbit ${activeTechIndex !== null ? "belNova-orbit-has-active" : ""}`}
            ref={orbitRef}
          >
            {/* Orbit rings */}
            <div className={`belNova-orbit-ring belNova-orbit-one ${activeTechIndex !== null ? "belNova-orbit-one-active" : ""}`} />
            <div className={`belNova-orbit-ring belNova-orbit-two ${activeTechIndex !== null ? "belNova-orbit-two-active" : ""}`} />

            {/* SVG beam (click-hover interaction) */}
            {coords && (
              <svg
                className="belNova-orbit-svg-layer"
                viewBox={`0 0 ${coords.width} ${coords.height}`}
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="belNovaBeamGradient" gradientUnits="userSpaceOnUse"
                    x1={coords.x1} y1={coords.y1} x2={coords.x2} y2={coords.y2}>
                    <stop offset="0%"   stopColor="#00cbe8" stopOpacity="0.9" />
                    <stop offset="45%"  stopColor="#218bf8" stopOpacity="1" />
                    <stop offset="80%"  stopColor="#7047f2" stopOpacity="1" />
                    <stop offset="100%" stopColor="#cf0de9" stopOpacity="0.95" />
                  </linearGradient>
                  <filter id="belNovaBeamGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4"  result="blur1" />
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur2" />
                    <feMerge><feMergeNode in="blur2" /><feMergeNode in="blur1" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="belNovaParticleFilter" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="3.5" result="glow" />
                    <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <radialGradient id="belNovaParticleGrad">
                    <stop offset="0%"   stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="35%"  stopColor="#00cbe8" stopOpacity="1" />
                    <stop offset="70%"  stopColor="#218bf8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#cf0de9" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <circle cx={coords.x1} cy={coords.y1} r="22" className="belNova-orbit-center-pulse-ring" />
                <line x1={coords.x1} y1={coords.y1} x2={coords.x2} y2={coords.y2}
                  className="belNova-orbit-beam-outer-glow" stroke="url(#belNovaBeamGradient)" filter="url(#belNovaBeamGlow)" />
                <line x1={coords.x1} y1={coords.y1} x2={coords.x2} y2={coords.y2}
                  className="belNova-orbit-beam-track" stroke="url(#belNovaBeamGradient)" />
                <line x1={coords.x1} y1={coords.y1} x2={coords.x2} y2={coords.y2}
                  className="belNova-orbit-beam-core" />
                <circle cx={coords.x2} cy={coords.y2} r="14" className="belNova-orbit-target-ping" />

                <g filter="url(#belNovaParticleFilter)">
                  <circle r="7" fill="url(#belNovaParticleGrad)">
                    <animateMotion path={`M ${coords.x1} ${coords.y1} L ${coords.x2} ${coords.y2}`} dur="1.15s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3" fill="#ffffff">
                    <animateMotion path={`M ${coords.x1} ${coords.y1} L ${coords.x2} ${coords.y2}`} dur="1.15s" repeatCount="indefinite" />
                  </circle>
                </g>
                <g filter="url(#belNovaParticleFilter)">
                  <circle r="5" fill="url(#belNovaParticleGrad)" opacity="0.85">
                    <animateMotion path={`M ${coords.x1} ${coords.y1} L ${coords.x2} ${coords.y2}`} dur="1.15s" begin="0.575s" repeatCount="indefinite" />
                  </circle>
                  <circle r="2.2" fill="#ffffff">
                    <animateMotion path={`M ${coords.x1} ${coords.y1} L ${coords.x2} ${coords.y2}`} dur="1.15s" begin="0.575s" repeatCount="indefinite" />
                  </circle>
                </g>
              </svg>
            )}

            {/* Center hexagon */}
            <div
              className={`belNova-orbit-center ${activeTechIndex !== null ? "belNova-hex-active" : ""}`}
              ref={centerRef}
            >
              <div className="belNova-hex-glow-backdrop" />
              <div className="belNova-hex-icon">&#x2B21;</div>
            </div>

            {/* 9 animated orbit labels */}
            {orbitLabels.map(({ title, description, placement, baseAngleDeg }, index) => {
              const isActive = activeTechIndex === index;
              const isFront  = frontIndex === index && hoveredIndex === null;
              return (
                <div
                  key={title}
                  className={`belNova-orbit-item${isActive ? " belNova-orbit-item-active" : ""}${isFront ? " belNova-orbit-front" : ""}`}
                  style={getItemStyle(baseAngleDeg)}
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
                  <span className={`belNova-orbit-label${isActive ? " belNova-orbit-label-active" : ""}${isFront ? " belNova-orbit-label-front" : ""}`}>
                    {title}
                  </span>
                  <div className={`belNova-orbit-card belNova-card-${placement}${isActive ? " belNova-orbit-card-active" : ""}`}>
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
