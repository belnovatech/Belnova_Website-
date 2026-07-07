import React from "react";
import { useNavigate } from "react-router-dom";
import "./Industries.css";

const industriesData = [
  {
    id: 1,
    title: "Information Technology",
    icon: "💻",
    description:
      "End-to-end IT solutions including software development, cloud infrastructure, and digital transformation for enterprises.",
  },
  {
    id: 2,
    title: "Healthcare",
    icon: "🏥",
    description:
      "HIPAA-compliant healthcare systems, patient management software, and telemedicine platforms.",
  },
  {
    id: 3,
    title: "Banking & Finance",
    icon: "🏦",
    description:
      "Secure fintech applications, payment gateways, and regulatory-compliant banking software.",
  },
  {
    id: 4,
    title: "Retail & E-Commerce",
    icon: "🛒",
    description:
      "Scalable e-commerce platforms, inventory management, and customer engagement tools.",
  },
  {
    id: 5,
    title: "Manufacturing",
    icon: "🏭",
    description:
      "Smart factory solutions, supply chain optimization, and IoT-based monitoring systems.",
  },
  {
    id: 6,
    title: "Education",
    icon: "🎓",
    description:
      "Learning management systems, virtual classrooms, and student information platforms.",
  },
];

const Industries = () => {
  const navigate = useNavigate();

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
        {industriesData.map((item) => (
          <div className="industry-card" key={item.id}>
            <div className="industry-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="industries-cta">
        <h2>Don't see your industry listed?</h2>
        <p>We build custom solutions for businesses of every kind.</p>
        <button onClick={() => navigate("/contact")}>Get in Touch</button>
      </div>
    </section>
  );
};

export default Industries;