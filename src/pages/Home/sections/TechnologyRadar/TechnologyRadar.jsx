import React, { useEffect, useState } from "react";
import "./TechnologyRadar.css";
import {
  SectionLabel,
  TagList,
  OutlineButton,
} from "../../components/UI";

const radarData = {
  DevOps: {
    title: "DevOps",
    use: "Automated build, release and operations",
    tags: ["Docker", "Kubernetes", "Nginx", "CI/CD"],
  },

  Mobile: {
    title: "Mobile",
    use: "Cross-platform mobile applications",
    tags: ["Flutter", "React Native"],
  },

  Database: {
    title: "Database",
    use: "Data modelling, storage and caching",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },

  Cloud: {
    title: "Cloud",
    use: "Cloud infrastructure and orchestration",
    tags: ["AWS", "Azure", "GCP", "Cloudflare"],
  },

  Frontend: {
    title: "Frontend",
    use: "Interfaces, portals and dashboards",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },

  AI: {
    title: "AI",
    use: "Intelligence layered onto products",
    tags: [
      "Generative AI",
      "Machine Learning",
      "LLMs",
      "AI APIs",
      "Data Analytics",
    ],
  },

  Backend: {
    title: "Backend",
    use: "APIs, business logic and integrations",
    tags: ["Python", "Django", "FastAPI", "Node.js", ".NET"],
  },
};

const categories = Object.keys(radarData);

const AUTO_ROTATE_TIME = 7000;
const ANGLE_STEP = 360 / categories.length;

export default function TechnologyRadar({ onDiscussTechnology }) {
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  /*
   * Every 7 seconds:
   * 1. Highlight next category
   * 2. Move entire radar clockwise by one position
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + ANGLE_STEP);

      setActiveIndex((prev) => {
        return (prev + 1) % categories.length;
      });
    }, AUTO_ROTATE_TIME);

    return () => clearInterval(interval);
  }, []);

  const handleCategoryClick = (index) => {
    const difference = index - activeIndex;

    setActiveIndex(index);

    setRotation((prev) => {
      return prev + difference * ANGLE_STEP;
    });
  };

  const activeCategory = categories[activeIndex];
  const activeData = radarData[activeCategory];

  return (
    <section
      className="belNova-radar-section"
      id="technology-radar"
    >
      <div className="belNova-radar-container">

        <SectionLabel>TECHNOLOGY RADAR</SectionLabel>

        <h2 className="belNova-radar-title">
          Technology Behind the Work
        </h2>

        <p className="belNova-radar-description">
          The engineering stack Belnova uses across product delivery.
          Capability is shown, not certified — we list only what our
          teams actively build with.
        </p>

        <div className="belNova-radar-layout">

          {/* ==================================================
              RADAR
          ================================================== */}

          <div className="belNova-radar-wheel">

            {/* Outer orbit */}
            <div className="belNova-radar-ring belNova-radar-ring-outer" />

            {/* Middle orbit */}
            <div className="belNova-radar-ring belNova-radar-ring-middle" />

            {/* Inner orbit */}
            <div className="belNova-radar-ring belNova-radar-ring-inner" />

            {/* Soft center glow */}
            <div className="belNova-radar-center-glow" />

            {/* Center */}
            <div className="belNova-radar-core">
              <span />
            </div>

            {/* ==================================================
                CATEGORY NODES
            ================================================== */}

            {categories.map((category, index) => {
              const angle =
                index * ANGLE_STEP + rotation;

              const radians =
                (angle * Math.PI) / 180;

              /*
               * Radius is percentage of radar.
               * Using actual X/Y coordinates prevents
               * the cards from collapsing into the center.
               */
              const radius = 42;

              const x =
                Math.sin(radians) * radius;

              const y =
                -Math.cos(radians) * radius;

              const isActive =
                index === activeIndex;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  className={`belNova-radar-node ${
                    isActive ? "active" : ""
                  }`}
                  style={{
                    "--node-x": `${x}%`,
                    "--node-y": `${y}%`,
                  }}
                  onClick={() =>
                    handleCategoryClick(index)
                  }
                >
                  <span>{category}</span>
                </button>
              );
            })}

            {/* Moving orbital light */}
            <div className="belNova-radar-orbit-light" />

          </div>

          {/* ==================================================
              INFORMATION PANEL
          ================================================== */}

          <div className="belNova-radar-panel">

            <div
              className="belNova-radar-panel-content"
              key={activeCategory}
            >
              <small>CATEGORY</small>

              <h3>
                {activeData.title}
              </h3>

              <p>
                Primary use: {activeData.use}
              </p>

              <TagList
                items={activeData.tags}
              />

              <OutlineButton
                onClick={onDiscussTechnology}
              >
                Discuss Technology
              </OutlineButton>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}