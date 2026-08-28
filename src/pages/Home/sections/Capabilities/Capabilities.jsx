import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Capabilities.css";
import { SectionLabel, TagList } from "../../components/UI";

const capabilitiesData = [
  {
    id: "software",
    icon: "</>",
    title: "Software Development",
    description:
      "Custom software, business applications and enterprise platforms.",
    tags: ["Python", "Django", "FastAPI", ".NET", "Node.js", "APIs"],
    linkText: "Explore Software",
    whatWeDo: [
      "Custom ERP, CRM and internal business platforms",
      "API-first backends with role-based access control",
      "Legacy system modernisation and re-platforming",
    ],
    deliverables: [
      "Technical architecture",
      "Production codebase",
      "API documentation",
      "Handover & training",
    ],
    timeline: "6–16 weeks typical",
    engagement: "Fixed scope or dedicated team",
  },
  {
    id: "web",
    icon: "◎",
    title: "Web Applications",
    description: "Modern responsive web applications and portals.",
    tags: ["React", "Next.js", "TypeScript", "REST APIs"],
    linkText: "Explore Web",
    whatWeDo: [
      "Customer portals, dashboards and admin consoles",
      "High-performance marketing and product sites",
      "Design systems with accessible component libraries",
    ],
    deliverables: [
      "UI design system",
      "Responsive web app",
      "SEO & performance pass",
      "Analytics wiring",
    ],
    timeline: "4–12 weeks typical",
    engagement: "Project or sprint based",
  },
  {
    id: "mobile",
    icon: "▯",
    title: "Mobile Applications",
    description: "Cross-platform and native mobile experiences.",
    tags: ["Flutter", "React Native", "Android", "iOS"],
    linkText: "Explore Mobile",
    whatWeDo: [
      "Cross-platform iOS and Android mobile apps",
      "Offline-first architecture and real-time syncing",
      "Native hardware integration (Camera, GPS, Bluetooth)",
    ],
    deliverables: [
      "App Store & Play Store ready builds",
      "Mobile UI component library",
      "Push notification pipeline",
      "Offline cache layer",
    ],
    timeline: "8–16 weeks typical",
    engagement: "Milestone or dedicated team",
  },
  {
    id: "ai",
    icon: "▣",
    title: "AI & Machine Learning",
    description: "AI-powered products, automation and intelligent workflows.",
    tags: ["Generative AI", "LLMs", "Machine Learning", "AI APIs"],
    linkText: "Explore AI",
    whatWeDo: [
      "LLM business assistants and agentic workflows",
      "Document extraction, OCR and automated search",
      "Predictive data intelligence and ML pipelines",
    ],
    deliverables: [
      "Production AI pipeline",
      "Fine-tuned / RAG model deployment",
      "Custom API connectors",
      "Evaluation & guardrail suite",
    ],
    timeline: "4–14 weeks typical",
    engagement: "Discovery sprint or product build",
  },
  {
    id: "cloud",
    icon: "☁",
    title: "Cloud & DevOps",
    description: "Modern infrastructure, deployment and cloud engineering.",
    tags: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
    linkText: "Explore Cloud",
    whatWeDo: [
      "Cloud migration and landing zone setup",
      "Containerisation and Kubernetes operations",
      "CI/CD, observability and cost optimisation",
    ],
    deliverables: [
      "Infrastructure as code",
      "CI/CD pipelines",
      "Monitoring & alerting",
      "Runbook documentation",
    ],
    timeline: "3–10 weeks typical",
    engagement: "Project or ongoing retainer",
  },
  {
    id: "resource",
    icon: "♙",
    title: "Resource Outsourcing",
    description:
      "Flexible technical resources and dedicated engineering teams.",
    tags: ["Developers", "QA", "DevOps", "AI/ML", "BA", "DBA"],
    linkText: "Explore Resource",
    whatWeDo: [
      "Dedicated senior engineers embedded in client teams",
      "Managed pods with tech leads and agile delivery",
      "Rapid scaling without lengthy hiring cycles",
    ],
    deliverables: [
      "Vetted technical specialists",
      "Daily sprint alignment",
      "Direct codebase access",
      "Transparent monthly billing",
    ],
    timeline: "1–2 weeks onboarding",
    engagement: "Monthly flexible capacity",
  },
  {
    id: "recruitment",
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
    linkText: "Explore Recruitment",
    whatWeDo: [
      "Full-lifecycle technical recruitment for permanent roles",
      "Rigorous technical evaluations and coding interviews",
      "Specialized niche talent sourcing across modern stacks",
    ],
    deliverables: [
      "Pre-screened candidates",
      "Technical evaluation scorecards",
      "Interview coordination",
      "Onboarding assistance",
    ],
    timeline: "2–4 weeks per role",
    engagement: "Success-fee based or retainer",
  },
];

export default function Capabilities({ onDiscuss }) {
  const [expandedId, setExpandedId] = useState("web");

  const toggleCapability = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="belNova-capabilities-section" id="what-we-do">
      <div className="belNova-capabilities-container">
        <SectionLabel>WHAT WE DO</SectionLabel>
        <h2 className="belNova-capabilities-title">Technology Capabilities</h2>

        <p className="belNova-capabilities-description">
          Engineering, intelligence and talent — combined into one delivery
          capability.
        </p>

        <div className="belNova-capabilities-grid">
          {capabilitiesData.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <article
                className={`belNova-capability-card ${
                  isExpanded ? "belNova-capability-expanded" : ""
                }`}
                key={item.id}
              >
                <div className="belNova-capability-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <TagList items={item.tags} />

                <button
                  type="button"
                  className="belNova-capability-toggle-btn"
                  onClick={() => toggleCapability(item.id)}
                >
                  {isExpanded ? "Hide details" : item.linkText}{" "}
                  <span>{isExpanded ? "⌃" : "⌄"}</span>
                </button>

                {isExpanded && (
                  <div className="belNova-capability-details">
                    <div className="belNova-capability-block">
                      <small>WHAT WE DO</small>
                      <ul>
                        {item.whatWeDo.map((w) => (
                          <li key={w}>{w}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="belNova-capability-block">
                      <small>DELIVERABLES</small>
                      <div className="belNova-deliverables-wrap">
                        {item.deliverables.map((d) => (
                          <span key={d}>{d}</span>
                        ))}
                      </div>
                    </div>

                    <div className="belNova-capability-meta">
                      <div>
                        <small>TIMELINE</small>
                        <strong>{item.timeline}</strong>
                      </div>
                      <div>
                        <small>ENGAGEMENT</small>
                        <strong>{item.engagement}</strong>
                      </div>
                    </div>

                    <div className="belNova-capability-actions">
                      <button
                        type="button"
                        className="belNova-cap-discuss-btn"
                        onClick={onDiscuss}
                      >
                        Discuss this <span>→</span>
                      </button>
                      <Link to="/what-we-do" className="belNova-cap-link">
                        Full service page <span>→</span>
                      </Link>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
