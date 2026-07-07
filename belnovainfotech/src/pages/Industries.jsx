import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Landmark,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Zap,
  Factory,
  Store,
  Plane,
  Cpu,
  X,
} from "lucide-react";
import "./Industries.css";

const industriesData = [
  {
    id: 1,
    title: "Banking",
    icon: Landmark,
    description:
      "Secure fintech applications, payment gateways, and regulatory-compliant banking software.",
    details:
      "We help banks and financial institutions modernize legacy systems without disrupting day-to-day operations. Our teams build core banking modules, payment infrastructure, and compliance tooling that meets regional regulatory standards from day one.",
    services: [
      "Core banking platform modernization",
      "Payment gateway integration (UPI, cards, wallets)",
      "Fraud detection & risk scoring engines",
      "KYC / AML compliance automation",
      "Real-time transaction monitoring dashboards",
    ],
  },
  {
    id: 2,
    title: "Education",
    icon: GraduationCap,
    description:
      "Learning management systems, virtual classrooms, and student information platforms.",
    details:
      "From K-12 to higher education and corporate training, we design learning experiences that work as well on a shared classroom tablet as they do on a student's personal phone. Our LMS builds focus on engagement, accessibility, and instructor insight.",
    services: [
      "Custom LMS & virtual classroom platforms",
      "Student information systems (SIS)",
      "Assessment & proctoring tools",
      "Course authoring & content delivery",
      "Analytics dashboards for learning outcomes",
    ],
  },
  {
    id: 3,
    title: "Healthcare",
    icon: HeartPulse,
    description:
      "HIPAA-compliant healthcare systems, patient management software, and telemedicine platforms.",
    details:
      "Healthcare software has zero margin for error. We build patient-facing and clinical systems with compliance, data security, and interoperability designed in from the architecture stage, not bolted on afterward.",
    services: [
      "Electronic Health Records (EHR) systems",
      "Telemedicine & remote consultation platforms",
      "Patient scheduling & billing systems",
      "HIPAA / HL7 / FHIR compliant integrations",
      "Clinical decision support tools",
    ],
  },
  {
    id: 4,
    title: "Insurance",
    icon: ShieldCheck,
    description:
      "Claims automation, underwriting engines, and policy management platforms built for scale.",
    details:
      "We work with insurers to cut claims processing time and reduce manual underwriting overhead, while keeping every decision auditable for regulators and customers alike.",
    services: [
      "Automated claims processing workflows",
      "Underwriting rules engines",
      "Policy administration systems",
      "Customer self-service portals",
      "Fraud & risk analytics",
    ],
  },
  {
    id: 5,
    title: "Energy & Resources",
    icon: Zap,
    description:
      "Grid monitoring, asset management, and sustainability reporting for energy providers.",
    details:
      "Energy providers need visibility across distributed assets in real time. We build monitoring and reporting systems that turn raw sensor data into decisions operators can act on immediately.",
    services: [
      "Real-time grid & asset monitoring",
      "Predictive maintenance systems",
      "Sustainability & emissions reporting",
      "Energy trading platforms",
      "SCADA / IoT integration",
    ],
  },
  {
    id: 6,
    title: "Manufacturing",
    icon: Factory,
    description:
      "Smart factory solutions, supply chain optimization, and IoT-based monitoring systems.",
    details:
      "Manufacturers need production data, not just production. We connect shop-floor equipment to software that flags bottlenecks, predicts downtime, and keeps supply chains synced with demand.",
    services: [
      "IoT-based production monitoring",
      "Supply chain & inventory optimization",
      "Predictive equipment maintenance",
      "Quality control automation",
      "ERP integration for manufacturing units",
    ],
  },
  {
    id: 7,
    title: "Retail",
    icon: Store,
    description:
      "Scalable e-commerce platforms, inventory management, and customer engagement tools.",
    details:
      "Retail moves fast, and so does customer expectation. We build commerce platforms that stay fast under peak load, sync inventory across channels, and give teams the data to personalize every visit.",
    services: [
      "E-commerce platform development",
      "Omnichannel inventory management",
      "Customer loyalty & engagement tools",
      "Point-of-sale (POS) integration",
      "Personalization & recommendation engines",
    ],
  },
  {
    id: 8,
    title: "Travel & Logistic",
    icon: Plane,
    description:
      "Fleet tracking, route optimization, and booking platforms for travel and logistics operators.",
    details:
      "Whether it's a fleet of ten vehicles or a network spanning cities, we build the tracking, routing, and booking systems that keep travel and logistics operations predictable for both operators and customers.",
    services: [
      "Real-time fleet & vehicle tracking",
      "Route & fuel optimization engines",
      "Booking & reservation platforms",
      "Driver & supplier management systems",
      "Delivery & logistics dashboards",
    ],
  },
  {
    id: 9,
    title: "Information Technology",
    icon: Cpu,
    description:
      "End-to-end IT solutions including software development, cloud infrastructure, and digital transformation.",
    details:
      "We partner with IT teams to design, build, and scale software that fits into existing infrastructure rather than fighting it — from cloud migrations to full digital transformation programs.",
    services: [
      "Custom software development",
      "Cloud infrastructure & DevOps",
      "Legacy system modernization",
      "API design & third-party integrations",
      "Digital transformation consulting",
    ],
  },
];

const Industries = () => {
  const navigate = useNavigate();
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedIndustry(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = selectedIndustry ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndustry]);

  return (
    <section className="industries-page">
      <div className="industries-header">
        <h1>Industries We Serve</h1>
        <p>
          We deliver tailored technology solutions across a wide range of
          industries, helping businesses innovate and grow.
        </p>
      </div>

      <div className="industries-grid">
        {industriesData.map((item) => {
          const Icon = item.icon;
          return (
            <div
              className="industry-card"
              key={item.id}
              onClick={() => setSelectedIndustry(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedIndustry(item);
                }
              }}
            >
              <div className="industry-icon">
                <Icon size={34} strokeWidth={1.8} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="industry-card-cta">Learn more →</span>
            </div>
          );
        })}
      </div>

      <div className="industries-cta">
        <h2>Don't see your industry listed?</h2>
        <p>We build custom solutions for businesses of every kind.</p>
        <button onClick={() => navigate("/contact")}>Get in Touch</button>
      </div>

      {selectedIndustry && (
        <div
          className="industry-modal-overlay"
          onClick={() => setSelectedIndustry(null)}
        >
          <div
            className="industry-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="industry-modal-close"
              onClick={() => setSelectedIndustry(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="industry-modal-icon">
              <selectedIndustry.icon size={40} strokeWidth={1.6} />
            </div>

            <h2>{selectedIndustry.title}</h2>
            <p className="industry-modal-details">
              {selectedIndustry.details}
            </p>

            <div className="industry-modal-services">
              <h4>What we build</h4>
              <ul>
                {selectedIndustry.services.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
            </div>

            <button
              className="industry-modal-contact"
              onClick={() => navigate("/contact")}
            >
              Talk to us about {selectedIndustry.title}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Industries;