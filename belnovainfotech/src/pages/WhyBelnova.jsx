import React from "react";
import "./WhyBelnova.css";
import {
  Zap,
  ShieldCheck,
  Clock3,
  Users,
  Sparkles,
  ArrowRight
} from "lucide-react";
import Navbar from "../components/Navbar";
const features = [
  {
    icon: <Zap />,
    title: "Lightning Fast Delivery",
    desc: "Rapid development cycles with agile methodology to launch products faster."
  },
  {
    icon: <ShieldCheck />,
    title: "Enterprise Security",
    desc: "Industry-standard security practices with scalable cloud architecture."
  },
  {
    icon: <Clock3 />,
    title: "24/7 Support",
    desc: "Dedicated technical assistance whenever your business needs us."
  },
  {
    icon: <Users />,
    title: "Expert Developers",
    desc: "Highly skilled engineers delivering innovative and reliable software."
  },
  {
    icon: <Sparkles />,
    title: "Future Ready Solutions",
    desc: "Modern technologies designed to scale with your business growth."
  }
];

export default function WhyBelnova() {
  return (
       <>
      <Navbar />
    <section className="why-section">

      <div className="why-bg-circle one"></div>
      <div className="why-bg-circle two"></div>

      <div className="why-heading">

        <span>WHY BELNOVA</span>

        <h2>
          Built For
          <strong> Innovation</strong>
        </h2>

        <p>
          We don't just build software. We build long-term digital partnerships
          that empower businesses to grow with confidence.
        </p>

      </div>

      <div className="timeline">

        <div className="timeline-line"></div>

        <div className="center-core">
          <div className="pulse"></div>
          <div className="pulse delay"></div>

          <div className="core-logo">
            B
          </div>
        </div>

        {features.map((item, index) => (

          <div
            key={index}
            className={`feature feature-${index + 1}`}
          >

            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button>
              Learn More
              <ArrowRight size={18} />
            </button>

          </div>

        ))}

      </div>

    </section>
        </>
  );
}