import React, { useMemo, useState } from "react";
import "../Styles/Industries.css";

const industries = [
  {
    name: "FinTech",
    challenge: "Manual investor and transaction handling",
    solution: "Digital investment and payment platforms",
    application: "Investor portal with KYC and reporting",
  },
  {
    name: "Healthcare",
    challenge: "Disconnected patient and clinical information",
    solution: "Connected healthcare management systems",
    application: "Patient portal with appointments and records",
  },
  {
    name: "Retail",
    challenge: "Inventory and customer data across multiple systems",
    solution: "Unified retail and commerce platforms",
    application: "Inventory, POS and customer analytics dashboard",
  },
  {
    name: "E-Commerce",
    challenge: "Manual order and fulfilment management",
    solution: "Automated commerce and operations platforms",
    application: "Online storefront with order tracking",
  },
  {
    name: "Education",
    challenge: "Disconnected academic and administrative workflows",
    solution: "Digital learning and administration platforms",
    application: "Student portal with courses and attendance",
  },
  {
    name: "Manufacturing",
    challenge: "Limited production and inventory visibility",
    solution: "Integrated manufacturing management systems",
    application: "Production tracking and analytics dashboard",
  },
  {
    name: "Real Estate",
    challenge: "Manual property and lead management",
    solution: "Property and customer management platforms",
    application: "Property portal with CRM integration",
  },
  {
    name: "Fitness",
    challenge: "Manual membership and schedule administration",
    solution: "Digital fitness management systems",
    application: "Member portal with plans and bookings",
  },
  {
    name: "Travel",
    challenge: "Fragmented booking and customer processes",
    solution: "Integrated travel operations platforms",
    application: "Booking portal with itinerary management",
  },
  {
    name: "Professional Services",
    challenge: "Manual project, document and billing workflows",
    solution: "Professional service automation platforms",
    application: "Client portal with projects and invoices",
  },
  {
    name: "Startups",
    challenge: "Limited technical capacity and rapid growth",
    solution: "Scalable MVP and product development",
    application: "Cloud-native product ready for expansion",
  },
  {
    name: "SMEs",
    challenge: "Processes dependent on spreadsheets and manual work",
    solution: "Custom business process automation",
    application: "Centralized operations and reporting platform",
  },
];

const aiIndustries = [
  "Finance",
  "Healthcare",
  "Retail",
  "Education",
  "Manufacturing",
  "Real Estate",
  "Fitness",
  "Professional Services",
  "Other",
];

const improvementAreas = [
  "Customer Support",
  "Operations",
  "Documents",
  "Reporting",
  "Sales",
  "Marketing",
  "Data Analysis",
  "Employee Productivity",
];

const maturityQuestions = [
  {
    id: "operations",
    question: "How do you currently manage operations?",
    options: [
      { label: "Paper", score: 1 },
      { label: "Excel", score: 2 },
      { label: "Multiple applications", score: 3 },
      { label: "ERP", score: 4 },
      { label: "Custom software", score: 5 },
    ],
  },
  {
    id: "automation",
    question: "How automated are your workflows?",
    options: [
      { label: "Low", score: 1 },
      { label: "Medium", score: 3 },
      { label: "High", score: 5 },
    ],
  },
  {
    id: "data",
    question: "How centralized is your data?",
    options: [
      { label: "Low", score: 1 },
      { label: "Medium", score: 3 },
      { label: "High", score: 5 },
    ],
  },
  {
    id: "reports",
    question: "How quickly can you generate reports?",
    options: [
      { label: "Manual", score: 1 },
      { label: "Semi-automated", score: 3 },
      { label: "Real-time", score: 5 },
    ],
  },
  {
    id: "systems",
    question: "How connected are your systems to each other?",
    options: [
      { label: "Not connected", score: 1 },
      { label: "Partially connected", score: 3 },
      { label: "Fully integrated", score: 5 },
    ],
  },
];

function SectionLabel({ children }) {
  return (
    <div className="industries-label">
      <span />
      {children}
    </div>
  );
}

function GradientButton({ children }) {
  return (
    <button type="button" className="industries-gradient-button">
      {children}
      <span>→</span>
    </button>
  );
}

function getMaturityProfile(answers) {
  const selectedAnswers = Object.values(answers);

  if (selectedAnswers.length < maturityQuestions.length) {
    return null;
  }

  const total = selectedAnswers.reduce(
    (sum, answer) => sum + answer.score,
    0,
  );

  if (total <= 9) {
    return {
      level: "FOUNDATIONAL",
      score: total,
      description:
        "Your business is at the beginning of its digital journey. Start by centralizing data and replacing manual workflows.",
      recommendation:
        "Recommended next step: process discovery and digital roadmap.",
    };
  }

  if (total <= 17) {
    return {
      level: "DEVELOPING",
      score: total,
      description:
        "You already use digital tools, but important workflows and information remain disconnected.",
      recommendation:
        "Recommended next step: workflow automation and system integration.",
    };
  }

  return {
    level: "ADVANCED",
    score: total,
    description:
      "Your business has strong digital foundations and is ready for advanced analytics, AI and continuous optimization.",
    recommendation:
      "Recommended next step: AI enablement and operational intelligence.",
  };
}

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState("FinTech");
  const [selectedAiIndustry, setSelectedAiIndustry] =
    useState("Manufacturing");
  const [selectedImprovement, setSelectedImprovement] = useState("");
  const [maturityAnswers, setMaturityAnswers] = useState({});

  const maturityProfile = useMemo(
    () => getMaturityProfile(maturityAnswers),
    [maturityAnswers],
  );

  const maturityProgress =
    (Object.keys(maturityAnswers).length / maturityQuestions.length) * 100;

  const handleMaturityAnswer = (questionId, option) => {
    setMaturityAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: option,
    }));
  };

  return (
    <main className="industries-page">
      {/* HERO */}

      <section className="industries-hero">
        <div className="industries-grid-background" />

        <div className="industries-container industries-hero-content">
          <SectionLabel>INDUSTRIES</SectionLabel>

          <h1>
            Technology Across{" "}
            <span className="industries-gradient-text">Industries</span>
          </h1>

          <p>
            Every sector has its own process reality. We start by understanding
            it before proposing a system.
          </p>
        </div>
      </section>

      {/* INDUSTRIES EXPLORER */}

      <section className="industries-section">
        <div className="industries-container">
          <SectionLabel>INDUSTRIES</SectionLabel>

          <h2>Technology Across Industries</h2>

          <p className="industries-description">
            Different sectors, the same pattern: understand the process first,
            then engineer the right system.
          </p>

          <div className="industries-card-grid">
            {industries.map((industry) => {
              const isActive = activeIndustry === industry.name;

              return (
                <button
                  type="button"
                  className={`industries-card ${isActive ? "active" : ""}`}
                  key={industry.name}
                  onClick={() => setActiveIndustry(industry.name)}
                  aria-expanded={isActive}
                >
                  <h3>{industry.name}</h3>

                  {isActive && (
                    <div className="industries-card-details">
                      <small>CHALLENGE</small>
                      <p>{industry.challenge}</p>

                      <small>POTENTIAL SOLUTION</small>
                      <p>{industry.solution}</p>

                      <small>EXAMPLE APPLICATION</small>
                      <p>{industry.application}</p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <GradientButton>Explore Industry Solutions</GradientButton>
        </div>
      </section>

      {/* AI OPPORTUNITY ASSESSMENT */}

      <section className="industries-section industries-soft-section">
        <div className="industries-container">
          <SectionLabel>AI OPPORTUNITY ASSESSMENT</SectionLabel>

          <h2>Where Can AI Help Your Business?</h2>

          <p className="industries-description">
            Answer two questions to see preliminary AI opportunities relevant
            to your context.
          </p>

          <div className="industries-assessment-card">
            <div className="industries-question">
              <h3>What industry are you in?</h3>

              <div className="industries-option-list">
                {aiIndustries.map((industry) => (
                  <button
                    type="button"
                    key={industry}
                    className={
                      selectedAiIndustry === industry ? "active" : ""
                    }
                    onClick={() => setSelectedAiIndustry(industry)}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            <div className="industries-question">
              <h3>What would you like to improve?</h3>

              <div className="industries-option-list">
                {improvementAreas.map((area) => (
                  <button
                    type="button"
                    key={area}
                    className={selectedImprovement === area ? "active" : ""}
                    onClick={() => setSelectedImprovement(area)}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            {selectedImprovement && (
              <div className="industries-ai-result">
                <small>PRELIMINARY OPPORTUNITY</small>

                <h3>
                  AI for {selectedImprovement} in {selectedAiIndustry}
                </h3>

                <p>
                  A focused discovery session can identify repetitive work,
                  available data and the safest high-value automation
                  opportunities.
                </p>

                <GradientButton>Discuss This Opportunity</GradientButton>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DIGITAL MATURITY */}

      <section className="industries-section industries-maturity-section">
        <div className="industries-container">
          <SectionLabel>DIGITAL MATURITY ASSESSMENT</SectionLabel>

          <h2>
            How Digitally Ready Is Your
            <br />
            Business?
          </h2>

          <p className="industries-description">
            Five questions to place your operations on a digital maturity scale
            — and see practical next steps.
          </p>

          <div className="industries-maturity-layout">
            <div className="industries-maturity-form">
              <div className="industries-progress">
                <span style={{ width: `${maturityProgress}%` }} />
              </div>

              {maturityQuestions.map((question, index) => (
                <div className="industries-maturity-question" key={question.id}>
                  <h3>
                    {index + 1}. {question.question}
                  </h3>

                  <div className="industries-option-list">
                    {question.options.map((option) => (
                      <button
                        type="button"
                        key={option.label}
                        className={
                          maturityAnswers[question.id]?.label === option.label
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                          handleMaturityAnswer(question.id, option)
                        }
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <aside className="industries-maturity-result">
              <small>DIGITAL MATURITY PROFILE</small>

              {maturityProfile ? (
                <div className="industries-profile-content">
                  <div className="industries-profile-score">
                    {maturityProfile.score}
                    <span>/25</span>
                  </div>

                  <h3>{maturityProfile.level}</h3>
                  <p>{maturityProfile.description}</p>
                  <strong>{maturityProfile.recommendation}</strong>

                  <GradientButton>Plan My Next Step</GradientButton>
                </div>
              ) : (
                <p>
                  Answer all 5 questions to see your maturity level and
                  recommended next steps.
                </p>
              )}
            </aside>
          </div>
        </div>
      </section>

      <a href="#contact" className="industries-floating-chat">
        ◯ Let&apos;s Talk
      </a>
    </main>
  );
}