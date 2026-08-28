import React, { useState } from "react";
import "./Work.css";
import { SectionLabel, TagList, GradientButton } from "../../components/UI";

const projectsData = [
  {
    id: "inrfs",
    category: "FINANCIAL TECHNOLOGY",
    title: "INRFS",
    subtitle: "Investor Management & Investment Portal",
    tags: ["Investor onboarding", "KYC", "Investment management"],
    challenge:
      "Investor records, onboarding documents and interest calculations were handled across separate manual files.",
    process: "Spreadsheets, email documents and manual verification.",
    solution:
      "A single investor portal covering onboarding, verification, investment tracking and administration.",
    modules: [
      "Investor onboarding",
      "KYC",
      "Investment management",
      "UPI / QR",
      "Digital bonds",
      "Admin portal",
    ],
    technology: {
      Frontend: "React",
      Backend: "Python / Django",
      Database: "PostgreSQL",
      Cloud: "AWS",
    },
    roadmap: [
      "Investor mobile app",
      "Automated statements",
      "Deeper analytics",
    ],
    before: "Manual • Disconnected • Slow • Paper-based",
    after: "Digital • Centralized • Automated • Trackable",
  },
  {
    id: "discharge",
    category: "HEALTHCARE TECHNOLOGY",
    title: "DischargeEasy",
    subtitle: "Healthcare Assistance Platform",
    tags: ["Patient assistance", "Hospital coordination", "Discharge support"],
    challenge:
      "Discharge summaries, pharmacy clearance and caregiver handovers were scattered across physical papers and calls.",
    process: "Paper discharge files, manual ward checkouts and phone updates.",
    solution:
      "A coordinated hospital platform automating discharge milestones, pharmacy verification and family notifications.",
    modules: [
      "Patient registry",
      "Discharge checklist",
      "Pharmacy clearance",
      "Insurance verification",
      "Caregiver alerts",
      "Hospital dashboard",
    ],
    technology: {
      Frontend: "Next.js",
      Backend: "FastAPI / Python",
      Database: "PostgreSQL",
      Cloud: "AWS (HIPAA)",
    },
    roadmap: [
      "Telehealth follow-ups",
      "AI discharge summary generator",
      "EHR direct sync",
    ],
    before: "Paper forms • Delayed handovers • Disconnected wards",
    after: "Real-time coordination • Digital records • Instant notifications",
  },
  {
    id: "gym",
    category: "FITNESS TECHNOLOGY",
    title: "Gym Management Platform",
    subtitle: "Fitness operations system",
    tags: ["Member management", "Trainer management", "Membership"],
    challenge:
      "Multi-branch gym operations struggled with manual attendance, uncollected dues and overlapping trainer schedules.",
    process: "POS register, paper attendance logs and WhatsApp group booking.",
    solution:
      "A cloud-based gym operations platform with QR access, auto-renewing subscriptions and trainer slot booking.",
    modules: [
      "Member CRM",
      "Automated recurring billing",
      "Class & slot booking",
      "Trainer schedules",
      "QR access control",
      "Revenue analytics",
    ],
    technology: {
      Frontend: "React Native & React",
      Backend: "Node.js",
      Database: "MongoDB & Redis",
      Cloud: "AWS",
    },
    roadmap: [
      "AI workout planner",
      "Wearable device sync",
      "Multi-franchise reporting",
    ],
    before: "Uncollected dues • Manual logs • Overbooked sessions",
    after: "Auto-debit • QR scan check-in • Live capacity tracker",
  },
  {
    id: "ecommerce",
    category: "RETAIL TECHNOLOGY",
    title: "E-Commerce Platform",
    subtitle: "Retail commerce system",
    tags: ["Products", "Customers", "Orders"],
    challenge:
      "Catalogue, orders and reporting lived in disconnected tools.",
    process:
      "Separate storefront, spreadsheets and manual reconciliation.",
    solution:
      "A commerce platform with unified catalogue, orders, payments and reporting.",
    modules: [
      "Products",
      "Customers",
      "Orders",
      "Payments",
      "Admin",
      "Reports",
    ],
    technology: {
      Frontend: "Next.js",
      Backend: "Node.js",
      Database: "MongoDB",
      Cloud: "AWS",
    },
    roadmap: ["Recommendation engine", "Multi-warehouse support"],
    before: "Manual • Disconnected • Slow • Paper-based",
    after: "Digital • Centralized • Automated • Trackable",
  },
];

export default function Work({ onTalkToBelnova }) {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  return (
    <section className="belNova-work-section" id="work">
      <div className="belNova-work-container">
        <SectionLabel>WORK</SectionLabel>
        <h2 className="belNova-work-title">Ideas Turned Into Digital Products</h2>

        <p className="belNova-work-description">
          Project information is presented as delivered. No invented client
          names, logos or performance figures.
        </p>

        <div className="belNova-projects-grid">
          {projectsData.map((project) => (
            <article
              className={"belNova-project-card" + (selectedProject.id === project.id ? " selected" : "")}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
            >
              <small>{project.category}</small>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
              <TagList items={project.tags} />
            </article>
          ))}
        </div>

        <div className="belNova-project-anatomy">
          <small>PROJECT ANATOMY</small>
          <h2>{selectedProject.title}</h2>
          <p className="belNova-anatomy-subtitle">{selectedProject.subtitle}</p>

          <div className="belNova-anatomy-grid">
            <article>
              <small>BUSINESS CHALLENGE</small>
              <p>{selectedProject.challenge}</p>
            </article>

            <article>
              <small>EXISTING PROCESS</small>
              <p>{selectedProject.process}</p>
            </article>

            <article>
              <small>DIGITAL SOLUTION</small>
              <p>{selectedProject.solution}</p>
            </article>

            <article>
              <small>KEY MODULES</small>
              <ul>
                {selectedProject.modules.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </article>

            <article>
              <small>TECHNOLOGY</small>
              {Object.entries(selectedProject.technology).map(([k, v]) => (
                <p key={k}>
                  {k} — {v}
                </p>
              ))}
            </article>

            <article>
              <small>FUTURE ROADMAP</small>
              <ul>
                {selectedProject.roadmap.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="belNova-before-after">
            <div>
              <small>BEFORE</small>
              <p>{selectedProject.before}</p>
            </div>

            <strong className="belNova-solution-pill">Belnova Solution</strong>

            <div>
              <small>AFTER</small>
              <p>{selectedProject.after}</p>
            </div>
          </div>

          <div className="belNova-anatomy-cta-wrap">
            <GradientButton onClick={onTalkToBelnova}>
              Have a Similar Challenge? Talk to Belnova
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
