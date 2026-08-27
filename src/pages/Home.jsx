import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

/* ----------------------------- DATA ----------------------------- */

const features = [
  ["End-to-End", "Product Development"],
  ["Web + Mobile", "Application Engineering"],
  ["AI Ready", "Automation & Intelligence"],
  ["Cloud Native", "Modern Infrastructure"],
  ["Flexible", "Technology Teams"],
];

const journeyStages = [
  {
    number: "01",
    title: "DISCOVER",
    items: [
      "Business requirements",
      "User needs",
      "Process analysis",
      "Technical feasibility",
    ],
  },
  {
    number: "02",
    title: "DEFINE",
    items: ["Scope", "Product strategy", "Architecture", "Roadmap"],
  },
  {
    number: "03",
    title: "DESIGN",
    items: [
      "UX research",
      "Wireframes",
      "UI design",
      "Prototype",
      "Design system",
    ],
  },
  {
    number: "04",
    title: "ENGINEER",
    items: [
      "Frontend",
      "Backend",
      "Mobile",
      "APIs",
      "Database",
      "Integrations",
    ],
  },
  {
    number: "05",
    title: "LAUNCH",
    items: ["Testing", "Cloud", "CI/CD", "Deployment", "Monitoring"],
  },
  {
    number: "06",
    title: "SCALE",
    items: [
      "Optimization",
      "Analytics",
      "New features",
      "Maintenance",
      "Continuous improvement",
    ],
  },
];

const solutionCategories = {
  "Business Applications": [
    "CRM",
    "HRMS",
    "ERP",
    "Finance Management",
    "Inventory",
    "Operations Management",
    "Workflow Management",
  ],
  "Customer Platforms": [
    "Customer Portal",
    "Mobile App",
    "Support Platform",
    "Loyalty Platform",
    "Self-Service Portal",
  ],
  FinTech: [
    "Investment Portal",
    "Payment Platform",
    "KYC",
    "Digital Lending",
    "Financial Dashboard",
  ],
  Healthcare: [
    "Patient Portal",
    "Hospital Management",
    "Appointments",
    "Insurance Claims",
    "Discharge Support",
  ],
  "AI & Automation": [
    "AI Assistants",
    "Workflow Automation",
    "Document Processing",
    "Data Analytics",
    "Chatbots",
  ],
  Enterprise: [
    "ERP Systems",
    "Internal Portals",
    "Business Intelligence",
    "Process Automation",
    "Cloud Migration",
  ],
};

const capabilities = [
  {
    icon: "</>",
    title: "Software Development",
    description:
      "Custom software, business applications and enterprise platforms.",
    tags: ["Python", "Django", "FastAPI", ".NET", "Node.js", "APIs"],
    link: "Explore Software",
  },
  {
    icon: "◎",
    title: "Web Applications",
    description: "Modern responsive web applications and portals.",
    tags: ["React", "Next.js", "TypeScript", "REST APIs"],
    link: "Explore Web",
  },
  {
    icon: "▯",
    title: "Mobile Applications",
    description: "Cross-platform and native mobile experiences.",
    tags: ["Flutter", "React Native", "Android", "iOS"],
    link: "Explore Mobile",
  },
  {
    icon: "▣",
    title: "AI & Machine Learning",
    description: "AI-powered products, automation and intelligent workflows.",
    tags: ["Generative AI", "LLMs", "Machine Learning", "AI APIs"],
    link: "Explore AI",
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    description: "Modern infrastructure, deployment and cloud engineering.",
    tags: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
    link: "Explore Cloud",
  },
  {
    icon: "♙",
    title: "Resource Outsourcing",
    description:
      "Flexible technical resources and dedicated engineering teams.",
    tags: ["Developers", "QA", "DevOps", "AI/ML", "BA", "DBA"],
    link: "Explore Resource",
  },
];

const whyUs = [
  ["01", "Business First", "Technology decisions start with business requirements."],
  ["02", "Custom Engineering", "Solutions are built around actual workflows."],
  ["03", "Modern Technology", "Use current engineering and cloud practices."],
  ["04", "Scalable Architecture", "Build for future growth."],
  ["05", "Transparent Delivery", "Clear milestones and communication."],
  ["06", "Long-Term Partnership", "Support beyond initial development."],
];

const clientJourneys = {
  Startup: ["Idea", "MVP", "Launch", "Scale"],
  SME: ["Process Review", "Automation", "Integration", "Growth"],
  Enterprise: ["Discovery", "Architecture", "Delivery", "Optimization"],
  "Technology Company": [
    "Requirements",
    "Team Setup",
    "Development",
    "Continuous Delivery",
  ],
};

const processRows = [
  [
    "01 Discovery",
    "Understand the business problem",
    "Stakeholder sessions, process review",
    "Requirement summary",
    "High",
  ],
  [
    "02 Planning",
    "Define scope and sequence",
    "Scoping, estimation, roadmap",
    "Project plan",
    "High",
  ],
  [
    "03 UI/UX",
    "Design the experience",
    "Wireframes, UI, prototype",
    "Design system, screens",
    "Medium",
  ],
  [
    "04 Development",
    "Build the solution",
    "Frontend, backend, integrations",
    "Working increments",
    "Medium",
  ],
  [
    "05 QA",
    "Verify quality",
    "Functional, regression, UAT support",
    "Test reports",
    "Medium",
  ],
  [
    "06 Deployment",
    "Release to production",
    "Cloud setup, CI/CD, go-live",
    "Live environment",
    "Low",
  ],
  [
    "07 Support",
    "Keep it running and improving",
    "Monitoring, fixes, enhancements",
    "Support reports",
    "Ongoing",
  ],
];

const industries = [
  {
    name: "FinTech",
    challenge: "Manual investor and transaction handling",
    solution: "Digital investment and payment platforms",
    example: "Investor portal with KYC and reporting",
  },
  { name: "Healthcare" },
  { name: "Retail" },
  { name: "E-Commerce" },
  { name: "Education" },
  { name: "Manufacturing" },
  { name: "Real Estate" },
  { name: "Fitness" },
  { name: "Travel" },
  { name: "Professional Services" },
  { name: "Startups" },
  { name: "SMEs" },
];

const projects = [
  {
    category: "FINANCIAL TECHNOLOGY",
    title: "INRFS",
    subtitle: "Investor Management & Investment Portal",
    tags: ["Investor onboarding", "KYC", "Investment management"],
  },
  {
    category: "HEALTHCARE TECHNOLOGY",
    title: "DischargeEasy",
    subtitle: "Healthcare Assistance Platform",
    tags: ["Patient assistance", "Hospital coordination", "Discharge support"],
  },
  {
    category: "FITNESS TECHNOLOGY",
    title: "Gym Management Platform",
    subtitle: "Fitness operations system",
    tags: ["Member management", "Trainer management", "Membership"],
  },
  {
    category: "RETAIL TECHNOLOGY",
    title: "E-Commerce Platform",
    subtitle: "Retail commerce system",
    tags: ["Products", "Customers", "Orders"],
  },
];

const engagementModels = [
  ["Fixed Project", "Best for clearly defined scope."],
  ["Dedicated Team", "Best for long-term product development."],
  ["Resource Outsourcing", "Best for flexible technical capacity."],
  ["Support & Modernization", "Best for existing applications."],
];

const technicalRoles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Python Developer",
  ".NET Developer",
  "React Developer",
  "Mobile Developer",
  "QA Engineer",
  "DevOps Engineer",
  "AI/ML Engineer",
  "Business Analyst",
  "DBA",
];

const recruitmentSteps = [
  "Requirement",
  "Candidate Sourcing",
  "Screening",
  "Technical Evaluation",
  "Interview",
  "Selection",
  "Onboarding",
];

const labProjects = [
  ["PROTOTYPE", "AI Document Assistant"],
  ["CONCEPT", "Intelligent Business Analytics"],
  ["PROTOTYPE", "Workflow Automation Engine"],
  ["CONCEPT", "AI Customer Support"],
  ["RESEARCH", "Smart Operations Platform"],
  ["RESEARCH", "Predictive Business Intelligence"],
];

const securityControls = [
  ["⚿", "Authentication"],
  ["♢", "Authorization"],
  ["♙", "Role-Based Access"],
  ["⌘", "Secure APIs"],
  ["▣", "Data Encryption"],
  ["⇩", "Backup Strategy"],
  ["▤", "Logging"],
  ["ϟ", "Monitoring"],
  ["◇", "Environment Separation"],
  ["↗", "Secure Deployment"],
];

const companyValues = [
  ["Innovation", "Explore new technology with a practical purpose."],
  ["Integrity", "Say what is possible, and deliver what is promised."],
  ["Quality", "Engineering standards over shortcuts."],
  ["Customer Success", "Outcomes matter more than output."],
  ["Collaboration", "Work as one team with our clients."],
  ["Continuous Learning", "Keep the stack and the skills current."],
];

const openJobs = [
  [
    "Full Stack Developer",
    "Hybrid • Full-time • 2–5 years",
    "React, Python, PostgreSQL",
  ],
  [
    "Python Developer",
    "Hybrid • Full-time • 1–4 years",
    "Django, FastAPI, REST APIs",
  ],
  [
    "React Developer",
    "Remote • Full-time • 1–4 years",
    "React, TypeScript, Next.js",
  ],
  [
    "QA Engineer",
    "Hybrid • Full-time • 1–3 years",
    "Manual, automation, API testing",
  ],
  [
    "DevOps Engineer",
    "Hybrid • Full-time • 2–5 years",
    "Docker, Kubernetes, CI/CD, AWS",
  ],
  [
    "AI/ML Engineer",
    "Hybrid • Full-time • 1–4 years",
    "LLMs, Python, ML pipelines",
  ],
  [
    "Business Analyst",
    "Hybrid • Full-time • 1–4 years",
    "Requirements, documentation, UAT",
  ],
  [
    "Talent Acquisition",
    "On-site • Full-time • 1–3 years",
    "Tech hiring, sourcing, screening",
  ],
];

const contactReasons = [
  ["I Have an Idea", "Discuss a new product."],
  ["I Need Software", "Discuss application development."],
  ["I Need Developers", "Discuss resource outsourcing."],
  ["I Want AI", "Explore AI opportunities."],
  ["I Need Cloud Support", "Discuss infrastructure."],
  ["I Need IT Talent", "Discuss recruitment."],
  ["I Want to Partner", "Discuss partnerships."],
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

const aiImprovements = [
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
    question: "How do you currently manage operations?",
    options: ["Paper", "Excel", "Multiple applications", "ERP", "Custom software"],
  },
  {
    question: "How automated are your workflows?",
    options: ["Low", "Medium", "High"],
  },
  {
    question: "How centralized is your data?",
    options: ["Low", "Medium", "High"],
  },
  {
    question: "How often do you use real-time reporting?",
    options: ["Never", "Sometimes", "Regularly"],
  },
  {
    question: "How ready is your team for digital change?",
    options: ["Low", "Medium", "High"],
  },
];

/* ------------------------- SMALL COMPONENTS ------------------------- */

function Label({ children }) {
  return (
    <div className="section-label">
      <span />
      {children}
    </div>
  );
}

function GradientButton({ children, type = "button", to, onClick }) {
  if (to) {
    return (
      <Link to={to} className="gradient-button">
        {children} <span>→</span>
      </Link>
    );
  }

  return (
    <button type={type} className="gradient-button" onClick={onClick}>
      {children} <span>→</span>
    </button>
  );
}

function TagList({ items }) {
  return (
    <div className="tag-list">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

/* ----------------------------- HOME ----------------------------- */

export default function Home() {
  const [activeSolution, setActiveSolution] = useState(
    "Business Applications"
  );
  const [activeJourneyStage, setActiveJourneyStage] = useState(0);
  const [activeJourney, setActiveJourney] = useState("Startup");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedImprovement, setSelectedImprovement] = useState("");
  const [maturityAnswers, setMaturityAnswers] = useState({});
  const [projectStep, setProjectStep] = useState(1);
  const [projectAnswers, setProjectAnswers] = useState({});
  const [selectedContactReason, setSelectedContactReason] = useState("");

  const chooseProjectAnswer = (field, value) => {
    setProjectAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const submitContact = (event) => {
    event.preventDefault();
    alert("Requirement submitted successfully.");
    event.currentTarget.reset();
  };

  return (
    <main className="home-page">
      {/* HERO */}

      <section className="hero-section">
        <div className="hero-grid" />

        <div className="hero-content">
          <div className="hero-copy">
            <div className="hero-badge">
              <span />
              Innovation-driven technology partner
            </div>

            <h1>
              Innovate Today.
              <strong>Build the Future.</strong>
            </h1>

            <p>
              Belnova Tech helps businesses turn ideas, challenges and
              opportunities into scalable digital products and technology
              solutions.
            </p>

            <div className="hero-actions">
              <GradientButton to="/contact">Start a Project</GradientButton>

              <button className="outline-button">
                Explore What We Do <span>→</span>
              </button>
            </div>

            <p className="idea-link">
              Have an idea? <a href="#contact">Let's talk.</a>
            </p>

            <div className="hero-tags">
              {[
                "Software Engineering",
                "AI & Automation",
                "Cloud & DevOps",
                "Technology Talent",
                "Digital Transformation",
              ].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="technology-orbit">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit-center">⬡</div>

            {[
              ["IDEA", "orbit-idea"],
              ["SOFTWARE", "orbit-software"],
              ["AI", "orbit-ai"],
              ["CLOUD", "orbit-cloud"],
              ["DATA", "orbit-data"],
              ["AUTOMATION", "orbit-automation"],
              ["MOBILE", "orbit-mobile"],
              ["WEB", "orbit-web"],
              ["BUSINESS", "orbit-business"],
            ].map(([title, className]) => (
              <span className={`orbit-label ${className}`} key={title}>
                {title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}

      <section className="feature-strip">
        {features.map(([title, description]) => (
          <div key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </section>

      {/* INNOVATION ENGINE */}

      <section className="page-section">
        <Label>BELNOVA INNOVATION ENGINE</Label>

        <h2>
          From Idea to <span className="gradient-text">Impact.</span>
        </h2>

        <p className="section-description">
          A structured technology journey designed to turn business ideas into
          scalable digital products.
        </p>

        <div className="journey-line">
          {journeyStages.map((stage, index) => (
            <button
              type="button"
              className="journey-number-wrap"
              key={stage.number}
              onClick={() => setActiveJourneyStage(index)}
              aria-label={`Select ${stage.title} stage`}
              aria-pressed={activeJourneyStage === index}
            >
              <span className={activeJourneyStage === index ? "active" : ""}>
                {stage.number}
              </span>
            </button>
          ))}
        </div>

        <div className="journey-cards">
          {journeyStages.map((stage, index) => (
            <article
              className={`journey-card ${
                activeJourneyStage === index ? "active" : ""
              }`}
              key={stage.title}
              role="button"
              tabIndex={0}
              data-step={stage.number}
              aria-label={`Select ${stage.title} stage`}
              onClick={() => setActiveJourneyStage(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveJourneyStage(index);
                }
              }}
            >
              <h3>{stage.title}</h3>

              <ul>
                {stage.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* SOLUTION EXPLORER */}

      <section className="page-section soft-section">
        <Label>SOLUTION EXPLORER</Label>
        <h2>What Can We Build Together?</h2>

        <p className="section-description">
          Explore the categories of products and platforms Belnova engineers
          for startups, SMEs and enterprise teams.
        </p>

        <div className="solution-explorer">
          <div className="solution-tabs">
            {Object.keys(solutionCategories).map((category) => (
              <button
                type="button"
                key={category}
                className={activeSolution === category ? "active" : ""}
                onClick={() => setActiveSolution(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="solution-panel">
            <h3>{activeSolution}</h3>

            <div className="solution-items">
              {solutionCategories[activeSolution].map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>

            <button className="outline-button">
              I Have a Different Idea <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}

      <section className="page-section">
        <Label>WHAT WE DO</Label>
        <h2>Technology Capabilities</h2>

        <p className="section-description">
          Engineering, intelligence and talent — combined into one delivery
          capability.
        </p>

        <div className="capabilities-grid">
          {capabilities.map((item, index) => (
            <article
              className={`capability-card ${
                index === 0 || index === 4 ? "highlight-card" : ""
              }`}
              key={item.title}
            >
              <div className="capability-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <TagList items={item.tags} />
              <button className="text-button">{item.link} ⌄</button>
            </article>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY RADAR */}

      <section className="page-section soft-section">
        <Label>TECHNOLOGY RADAR</Label>
        <h2>Technology Behind the Work</h2>

        <p className="section-description">
          The engineering stack Belnova uses across product delivery.
          Capability is shown, not certified — we list only what our teams
          actively build with.
        </p>

        <div className="radar-layout">
          <div className="radar">
            <div className="radar-ring ring-1" />
            <div className="radar-ring ring-2" />
            <div className="radar-ring ring-3" />

            <span className="radar-top active">Frontend</span>
            <span className="radar-right-top">Backend</span>
            <span className="radar-right">Mobile</span>
            <span className="radar-bottom-right">Database</span>
            <span className="radar-bottom-left">Cloud</span>
            <span className="radar-left">DevOps</span>
            <span className="radar-left-top">AI</span>
          </div>

          <div className="technology-panel">
            <small>CATEGORY</small>
            <h3>Frontend</h3>
            <p>Primary use: Interfaces, portals and dashboards</p>

            <TagList
              items={[
                "React.js",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "HTML",
                "CSS",
              ]}
            />

            <button className="outline-button">
              Discuss Technology <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}

      <section className="page-section">
        <Label>ARCHITECTURE</Label>
        <h2>Engineered for Scale</h2>

        <p className="section-description">
          A reference view of how Belnova structures systems — from interface
          to infrastructure, with security and observability built in.
        </p>

        <div className="architecture-layout">
          <div className="architecture-stack">
            {[
              "User",
              "Web / Mobile",
              "Application Layer",
              "API Layer",
              "Backend Services",
              "Database",
            ].map((item, index, list) => (
              <React.Fragment key={item}>
                <div className="architecture-item">
                  <strong>{item}</strong>
                  <span>0{index + 1}</span>
                </div>

                {index < list.length - 1 && (
                  <div className="stack-connector" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="integration-panel">
            <h3>Side Integrations</h3>

            <p>
              Connected through the API layer with isolated credentials and
              environment separation.
            </p>

            {["Payments", "SMS", "Email", "Maps", "AI"].map((item) => (
              <div className="integration-item" key={item}>
                <span /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL TRANSFORMATION */}

      <section className="page-section soft-section">
        <Label>DIGITAL TRANSFORMATION</Label>
        <h2>From Manual Processes to Digital Operations</h2>

        <p className="section-description">
          Most transformation work starts with the same problem: information
          lives in too many disconnected places.
        </p>

        <div className="transformation-grid">
          <article>
            <h3>BEFORE</h3>
            <ul>
              {[
                "Excel",
                "Paper",
                "Manual communication",
                "Multiple systems",
                "Manual reporting",
                "Disconnected data",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="gradient-card">
            <h3>BELNOVA</h3>
            <ul>
              {[
                "Digital Strategy",
                "UX",
                "Engineering",
                "Automation",
                "Cloud",
                "Analytics",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article>
            <h3>AFTER</h3>
            <ul>
              {[
                "Centralized systems",
                "Automated workflows",
                "Real-time dashboards",
                "Digital documents",
                "Connected data",
                "Scalable operations",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <GradientButton>Transform My Business</GradientButton>
      </section>

      {/* WHY BELNOVA */}

      <section className="page-section">
        <Label>WHY US</Label>
        <h2>Why Belnova Tech?</h2>

        <div className="why-grid">
          {whyUs.map(([number, title, description]) => (
            <article key={number}>
              <small>{number}</small>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CLIENT JOURNEY */}

      <section className="page-section soft-section">
        <Label>CLIENT JOURNEY</Label>
        <h2>Built Around Your Business</h2>

        <p className="section-description">
          The engagement shape changes with the organization. Select a profile
          to see the typical path.
        </p>

        <div className="profile-tabs">
          {Object.keys(clientJourneys).map((profile) => (
            <button
              type="button"
              key={profile}
              className={activeJourney === profile ? "active" : ""}
              onClick={() => setActiveJourney(profile)}
            >
              {profile}
            </button>
          ))}
        </div>

        <div className="client-steps">
          {clientJourneys[activeJourney].map((step, index) => (
            <article key={step}>
              <small>STEP {index + 1}</small>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}

      <section className="page-section">
        <Label>DELIVERY</Label>
        <h2>Development Process</h2>

        <p className="section-description">
          Every stage has a defined objective, activity set, deliverable and
          level of client involvement.
        </p>

        <div className="process-list">
          {processRows.map((row) => (
            <div className="process-row" key={row[0]}>
              <strong>{row[0]}</strong>
              <span>{row[1]}</span>
              <span>{row[2]}</span>
              <span>{row[3]}</span>
              <small>{row[4]}</small>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}

      <section className="page-section">
        <Label>INDUSTRIES</Label>
        <h2>Technology Across Industries</h2>

        <p className="section-description">
          Different sectors, the same pattern: understand the process first,
          then engineer the right system.
        </p>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <article
              key={industry.name}
              className={index === 0 || index === 1 ? "highlight-card" : ""}
            >
              <h3>{industry.name}</h3>

              {industry.challenge && (
                <>
                  <small>CHALLENGE</small>
                  <p>{industry.challenge}</p>

                  <small>POTENTIAL SOLUTION</small>
                  <p>{industry.solution}</p>

                  <small>EXAMPLE APPLICATION</small>
                  <p>{industry.example}</p>
                </>
              )}
            </article>
          ))}
        </div>

        <GradientButton>Explore Industry Solutions</GradientButton>
      </section>

      {/* WORK */}

      <section className="page-section soft-section">
        <Label>WORK</Label>
        <h2>Ideas Turned Into Digital Products</h2>

        <p className="section-description">
          Project information is presented as delivered. No invented client
          names, logos or performance figures.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={index === 0 ? "highlight-card" : ""}
              key={project.title}
            >
              <small>{project.category}</small>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
              <TagList items={project.tags} />
            </article>
          ))}
        </div>

        <div className="project-anatomy">
          <small>PROJECT ANATOMY</small>
          <h2>INRFS</h2>
          <p>Investor Management & Investment Portal</p>

          <div className="anatomy-grid">
            <article>
              <small>BUSINESS CHALLENGE</small>
              <p>
                Investor records, onboarding documents and interest
                calculations were handled across separate manual files.
              </p>
            </article>

            <article>
              <small>EXISTING PROCESS</small>
              <p>Spreadsheets, email documents and manual verification.</p>
            </article>

            <article>
              <small>DIGITAL SOLUTION</small>
              <p>
                A single investor portal covering onboarding, verification,
                investment tracking and administration.
              </p>
            </article>

            <article>
              <small>KEY MODULES</small>
              <ul>
                <li>Investor onboarding</li>
                <li>KYC</li>
                <li>Investment management</li>
                <li>UPI / QR</li>
                <li>Digital bonds</li>
                <li>Admin portal</li>
              </ul>
            </article>

            <article>
              <small>TECHNOLOGY</small>
              <p>Frontend — React</p>
              <p>Backend — Python / Django</p>
              <p>Database — PostgreSQL</p>
              <p>Cloud — AWS</p>
            </article>

            <article>
              <small>FUTURE ROADMAP</small>
              <ul>
                <li>Investor mobile app</li>
                <li>Automated statements</li>
                <li>Deeper analytics</li>
              </ul>
            </article>
          </div>

          <div className="before-after">
            <div>
              <small>BEFORE</small>
              <p>Manual • Disconnected • Slow • Paper-based</p>
            </div>

            <strong>Belnova Solution</strong>

            <div>
              <small>AFTER</small>
              <p>Digital • Centralized • Automated • Trackable</p>
            </div>
          </div>

          <GradientButton>
            Have a Similar Challenge? Talk to Belnova
          </GradientButton>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}

      <section className="page-section">
        <Label>ENGAGEMENT MODELS</Label>
        <h2>Work With Us the Way That Fits</h2>

        <p className="section-description">
          Four models covering defined projects, long-term products, flexible
          capacity and existing systems.
        </p>

        <div className="engagement-grid">
          {engagementModels.map(([title, description]) => (
            <article className="simple-info-card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <button className="outline-button engagement-button">
          Find the Right Model <span>→</span>
        </button>
      </section>

      {/* RESOURCE OUTSOURCING */}

      <section className="page-section soft-section">
        <Label>RESOURCE OUTSOURCING</Label>
        <h2>Extend Your Technology Team</h2>

        <p className="section-description">
          Flexible technical resources for organizations that need additional
          engineering capacity.
        </p>

        <div className="large-tag-list">
          {technicalRoles.map((role) => (
            <button type="button" key={role}>
              {role}
            </button>
          ))}
        </div>

        <GradientButton>Request Technical Resources</GradientButton>
      </section>

      {/* RECRUITMENT */}

      <section className="page-section">
        <Label>RECRUITMENT</Label>
        <h2>Find the Right Technology Talent</h2>

        <p className="section-description">
          A structured hiring process from requirement definition through
          onboarding.
        </p>

        <div className="recruitment-grid">
          {recruitmentSteps.map((step, index) => (
            <article key={step}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{step}</h3>
            </article>
          ))}
        </div>

        <GradientButton>Hire Technology Talent</GradientButton>
      </section>

      {/* CONSULTING */}

      <section className="page-section soft-section">
        <Label>CONSULTING</Label>
        <h2>Build. Buy. Or Customize?</h2>

        <p className="section-description">
          Not every problem needs custom software. We help decide before
          committing budget.
        </p>

        <div className="consulting-grid">
          {[
            ["Buy", "Best for standard processes."],
            ["Customize", "Best when existing software almost fits."],
            ["Build", "Best for unique workflows and competitive products."],
          ].map(([title, description]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <GradientButton>Help Me Decide</GradientButton>
      </section>

      {/* AI ASSESSMENT */}

      <section className="page-section">
        <Label>AI OPPORTUNITY ASSESSMENT</Label>
        <h2>Where Can AI Help Your Business?</h2>

        <p className="section-description">
          Answer two questions to see preliminary AI opportunities relevant to
          your context.
        </p>

        <div className="assessment-panel">
          <div className="assessment-question">
            <h3>What industry are you in?</h3>

            <div className="choice-list">
              {aiIndustries.map((industry) => (
                <button
                  type="button"
                  key={industry}
                  className={selectedIndustry === industry ? "selected" : ""}
                  onClick={() => setSelectedIndustry(industry)}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          <div className="assessment-question">
            <h3>What would you like to improve?</h3>

            <div className="choice-list">
              {aiImprovements.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={selectedImprovement === item ? "selected" : ""}
                  onClick={() => setSelectedImprovement(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {selectedIndustry && selectedImprovement && (
            <div className="assessment-result">
              <small>PRELIMINARY AI OPPORTUNITY</small>

              <h3>
                AI-powered {selectedImprovement} for {selectedIndustry}
              </h3>

              <p>
                Belnova can assess your existing process, data availability and
                automation opportunities before recommending a solution.
              </p>

              <GradientButton>Discuss This Opportunity</GradientButton>
            </div>
          )}
        </div>
      </section>

      {/* DIGITAL MATURITY */}

      <section className="page-section soft-section">
        <Label>DIGITAL MATURITY ASSESSMENT</Label>

        <h2>
          How Digitally Ready Is Your
          <br />
          Business?
        </h2>

        <p className="section-description">
          Five questions to place your operations on a digital maturity scale —
          and see practical next steps.
        </p>

        <div className="maturity-layout">
          <div className="maturity-questions">
            <div className="maturity-progress">
              <span
                style={{
                  width: `${
                    (Object.keys(maturityAnswers).length /
                      maturityQuestions.length) *
                    100
                  }%`,
                }}
              />
            </div>

            {maturityQuestions.map((item, questionIndex) => (
              <div className="assessment-question" key={item.question}>
                <h3>
                  {questionIndex + 1}. {item.question}
                </h3>

                <div className="choice-list">
                  {item.options.map((option) => (
                    <button
                      type="button"
                      key={option}
                      className={
                        maturityAnswers[questionIndex] === option
                          ? "selected"
                          : ""
                      }
                      onClick={() =>
                        setMaturityAnswers((current) => ({
                          ...current,
                          [questionIndex]: option,
                        }))
                      }
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="maturity-profile">
            <small>DIGITAL MATURITY PROFILE</small>

            {Object.keys(maturityAnswers).length < 5 ? (
              <p>
                Answer all 5 questions to see your maturity level and
                recommended next steps.
              </p>
            ) : (
              <>
                <h3>Digital Foundation Ready</h3>

                <p>
                  Your organization has started its digital journey. The next
                  step is to centralize information, automate repetitive
                  workflows and improve real-time reporting.
                </p>

                <GradientButton>Discuss Next Steps</GradientButton>
              </>
            )}
          </div>
        </div>
      </section>

      {/* PROJECT ESTIMATOR */}

      <section className="page-section">
        <Label>PROJECT ESTIMATOR</Label>
        <h2>Estimate Your Project</h2>

        <p className="section-description">
          Build an initial project profile in six steps. We share a detailed
          estimate after a scoping conversation.
        </p>

        <div className="project-estimator">
          <div className="estimator-progress">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <span
                key={step}
                className={step <= projectStep ? "complete" : ""}
              />
            ))}
          </div>

          {projectStep === 1 && (
            <>
              <small>STEP 1 OF 6</small>
              <h3>What are you building?</h3>

              <div className="choice-list">
                {[
                  "Website",
                  "Web Application",
                  "Mobile App",
                  "SaaS",
                  "Enterprise Application",
                  "AI Solution",
                  "Other",
                ].map((type) => (
                  <button
                    type="button"
                    key={type}
                    className={projectAnswers.type === type ? "selected" : ""}
                    onClick={() => chooseProjectAnswer("type", type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </>
          )}

          {projectStep === 2 && (
            <>
              <small>STEP 2 OF 6</small>
              <h3>What is the project stage?</h3>

              <div className="choice-list">
                {["Idea", "Planning", "Design Ready", "Existing Product"].map(
                  (stage) => (
                    <button
                      type="button"
                      key={stage}
                      className={
                        projectAnswers.stage === stage ? "selected" : ""
                      }
                      onClick={() => chooseProjectAnswer("stage", stage)}
                    >
                      {stage}
                    </button>
                  )
                )}
              </div>
            </>
          )}

          {projectStep === 3 && (
            <>
              <small>STEP 3 OF 6</small>
              <h3>What is the expected project size?</h3>

              <div className="choice-list">
                {["Small", "Medium", "Large", "Enterprise"].map((size) => (
                  <button
                    type="button"
                    key={size}
                    className={projectAnswers.size === size ? "selected" : ""}
                    onClick={() => chooseProjectAnswer("size", size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </>
          )}

          {projectStep === 4 && (
            <>
              <small>STEP 4 OF 6</small>
              <h3>What is your expected timeline?</h3>

              <div className="choice-list">
                {["1–2 months", "3–4 months", "5–6 months", "Flexible"].map(
                  (timeline) => (
                    <button
                      type="button"
                      key={timeline}
                      className={
                        projectAnswers.timeline === timeline ? "selected" : ""
                      }
                      onClick={() =>
                        chooseProjectAnswer("timeline", timeline)
                      }
                    >
                      {timeline}
                    </button>
                  )
                )}
              </div>
            </>
          )}

          {projectStep === 5 && (
            <>
              <small>STEP 5 OF 6</small>
              <h3>What type of team do you need?</h3>

              <div className="choice-list">
                {[
                  "Complete Team",
                  "Developers",
                  "Design & Development",
                  "Consulting",
                ].map((team) => (
                  <button
                    type="button"
                    key={team}
                    className={projectAnswers.team === team ? "selected" : ""}
                    onClick={() => chooseProjectAnswer("team", team)}
                  >
                    {team}
                  </button>
                ))}
              </div>
            </>
          )}

          {projectStep === 6 && (
            <>
              <small>STEP 6 OF 6</small>
              <h3>Your initial project profile is ready.</h3>

              <p>
                Project type:{" "}
                <strong>{projectAnswers.type || "Not selected"}</strong>
              </p>

              <p>
                Project stage:{" "}
                <strong>{projectAnswers.stage || "Not selected"}</strong>
              </p>

              <p>
                Timeline:{" "}
                <strong>{projectAnswers.timeline || "Not selected"}</strong>
              </p>

              <GradientButton>Request Detailed Estimate</GradientButton>
            </>
          )}

          <div className="estimator-actions">
            {projectStep > 1 && (
              <button
                type="button"
                className="outline-button"
                onClick={() => setProjectStep((step) => step - 1)}
              >
                ← Previous
              </button>
            )}

            {projectStep < 6 && (
              <button
                type="button"
                className="gradient-button"
                disabled={projectStep === 1 && !projectAnswers.type}
                onClick={() => setProjectStep((step) => step + 1)}
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </section>

      {/* BELNOVA LABS */}

      <section className="page-section soft-section">
        <Label>BELNOVA LABS</Label>

        <h2>
          Exploring <span className="gradient-text">What's Next.</span>
        </h2>

        <p className="section-description">
          Belnova Labs is the innovation space for experimenting with emerging
          technologies, prototypes, automation and future digital products.
        </p>

        <div className="labs-grid">
          {labProjects.map(([type, title], index) => (
            <article
              key={title}
              className={index === 0 ? "highlight-card" : ""}
            >
              <small>{type}</small>
              <h3>{title}</h3>
              <p>An internal exploration, not a commercial product.</p>
            </article>
          ))}
        </div>

        <GradientButton>Explore Innovation</GradientButton>
      </section>

      {/* SECURITY */}

      <section className="page-section">
        <Label>SECURITY</Label>
        <h2>Security Isn't an Add-On.</h2>

        <p className="section-description">
          Security controls are part of the architecture from the first sprint,
          not retrofitted before launch.
        </p>

        <div className="security-grid">
          {securityControls.map(([icon, title]) => (
            <article key={title}>
              <span>{icon}</span>
              <strong>{title}</strong>
            </article>
          ))}
        </div>
      </section>

      {/* VALUES */}

      <section className="page-section soft-section">
        <Label>OUR VALUES</Label>
        <h2>How We Work</h2>

        <div className="values-grid">
          {companyValues.map(([title, description], index) => (
            <article
              key={title}
              className={index === 4 ? "highlight-card" : ""}
            >
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="company-metrics">
          {[
            "Projects Delivered",
            "Clients",
            "Technology Professionals",
            "Industries Served",
            "Countries Served",
            "Years in Business",
          ].map((metric) => (
            <div key={metric}>
              <strong>—</strong>
              <span>{metric}</span>
            </div>
          ))}
        </div>

        <p className="metrics-note">
          Company metrics are intentionally left as placeholders until verified
          figures are available.
        </p>
      </section>

      {/* CAREERS */}

      <section className="page-section" id="careers">
        <Label>CAREERS</Label>
        <h2>Build Your Future With Belnova</h2>

        <p className="section-description">
          We are building a team of people who enjoy solving challenging
          technology problems and creating meaningful digital products.
        </p>

        <div className="jobs-grid">
          {openJobs.map(([title, meta, skills], index) => (
            <article
              key={title}
              className={index === 6 ? "highlight-card" : ""}
            >
              <div>
                <h3>{title}</h3>
                <small>{meta}</small>
                <p>{skills}</p>
              </div>

              <button className="outline-button">
                Apply <span>→</span>
              </button>
            </article>
          ))}
        </div>

        <div className="career-actions">
          <GradientButton>View Open Positions</GradientButton>

          <button className="outline-button">
            Don't see your role? Send Your Profile <span>→</span>
          </button>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="final-cta">
        <div className="cta-symbol">⬡</div>

        <h2>
          Your Next Big Idea{" "}
          <span className="gradient-text">Starts Here.</span>
        </h2>

        <p>Let's turn your business challenge into a technology solution.</p>

        <div>
          <GradientButton to="/contact">Start a Project</GradientButton>
          <button className="outline-button">
            Talk to Our Team <span>→</span>
          </button>
        </div>
      </section>

      {/* CONTACT */}

      <section className="page-section contact-section" id="contact">
        <Label>CONTACT</Label>

        <h2>
          Let's Build Something Great
          <br />
          Together.
        </h2>

        <p className="section-description">
          Tell us about your business challenge, technology requirement or
          product idea.
        </p>

        <div className="contact-reasons">
          {contactReasons.map(([title, description]) => (
            <button
              type="button"
              key={title}
              className={selectedContactReason === title ? "selected" : ""}
              onClick={() => setSelectedContactReason(title)}
            >
              <strong>{title}</strong>
              <span>{description}</span>
            </button>
          ))}
        </div>

        <form className="contact-form" onSubmit={submitContact}>
          <div className="form-grid">
            <label>
              Full Name
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </label>

            <label>
              Phone
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
              />
            </label>

            <label>
              Company
              <input
                type="text"
                name="company"
                placeholder="Enter company name"
              />
            </label>
          </div>

          <label>
            Requirement Type
            <input
              type="text"
              name="requirementType"
              value={selectedContactReason}
              placeholder="Select one of the options above"
              readOnly
            />
          </label>

          <label>
            Tell Us About Your Requirement
            <textarea
              name="message"
              rows="6"
              placeholder="Describe your business challenge or product idea"
              required
            />
          </label>

          <div className="form-grid">
            <label>
              Technology Preferences
              <input
                type="text"
                name="technology"
                placeholder="Optional"
              />
            </label>

            <label>
              Expected Timeline
              <select name="timeline" defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option value="Immediately">Immediately</option>
                <option value="1–3 months">1–3 months</option>
                <option value="3–6 months">3–6 months</option>
                <option value="Flexible">Flexible</option>
              </select>
            </label>

            <label>
              Budget Range
              <input type="text" name="budget" placeholder="Optional" />
            </label>

            <label>
              How did you hear about us?
              <input type="text" name="source" placeholder="Optional" />
            </label>
          </div>

          <label>
            Attachment
            <input type="file" name="attachment" />
          </label>

          <label className="checkbox-label">
            <input type="checkbox" required />
            <span>
              I agree to the Privacy Policy and Terms & Conditions.
            </span>
          </label>

          <GradientButton type="submit">Submit Requirement</GradientButton>
        </form>
      </section>

      

      <a href="#contact" className="floating-chat">
        ◯ Let's Talk
      </a>
    </main>
  );
}
