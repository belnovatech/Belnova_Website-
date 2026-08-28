import React, { useState } from "react";
import "./TechnologyRadar.css";
import { SectionLabel, TagList, OutlineButton } from "../../components/UI";

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
  Frontend: {
    title: "Frontend",
    use: "Interfaces, portals and dashboards",
    tags: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
};

export default function TechnologyRadar({ onDiscussTechnology }) {
  const [activeCategory, setActiveCategory] = useState("DevOps");

  return (
    <section className="belNova-radar-section" id="technology-radar">
      <div className="belNova-radar-container">
        <SectionLabel>TECHNOLOGY RADAR</SectionLabel>
        <h2 className="belNova-radar-title">Technology Behind the Work</h2>

        <p className="belNova-radar-description">
          The engineering stack Belnova uses across product delivery.
          Capability is shown, not certified — we list only what our teams
          actively build with.
        </p>

        <div className="belNova-radar-layout">
          <div className="belNova-radar-wheel">
            <div className="belNova-radar-ring belNova-radar-ring-1" />
            <div className="belNova-radar-ring belNova-radar-ring-2" />
            <div className="belNova-radar-ring belNova-radar-ring-3" />

            <button
              type="button"
              className={`belNova-radar-node belNova-node-devops ${
                activeCategory === "DevOps" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("DevOps")}
            >
              DevOps
            </button>
            <button
              type="button"
              className={`belNova-radar-node belNova-node-ai ${
                activeCategory === "AI" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("AI")}
            >
              AI
            </button>
            <button
              type="button"
              className={`belNova-radar-node belNova-node-backend ${
                activeCategory === "Backend" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("Backend")}
            >
              Backend
            </button>
            <button
              type="button"
              className={`belNova-radar-node belNova-node-mobile ${
                activeCategory === "Mobile" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("Mobile")}
            >
              Mobile
            </button>
            <button
              type="button"
              className={`belNova-radar-node belNova-node-database ${
                activeCategory === "Database" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("Database")}
            >
              Database
            </button>
            <button
              type="button"
              className={`belNova-radar-node belNova-node-cloud ${
                activeCategory === "Cloud" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("Cloud")}
            >
              Cloud
            </button>
          </div>

          <div className="belNova-radar-panel">
            <small>CATEGORY</small>
            <h3>{radarData[activeCategory]?.title || activeCategory}</h3>
            <p>Primary use: {radarData[activeCategory]?.use}</p>

            <TagList items={radarData[activeCategory]?.tags || []} />

            <OutlineButton onClick={onDiscussTechnology}>
              Discuss Technology
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}
