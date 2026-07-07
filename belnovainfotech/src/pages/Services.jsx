import React from "react";
import "./Services.css";
import Navbar from "../components/Navbar";

import {
  BrainCircuit,
  Cloud,
  Code2,
  Smartphone,
  Palette,
  ShieldCheck,
  Database,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: <BrainCircuit size={34} />,
    title: "Artificial Intelligence",
    desc: "Machine Learning, Generative AI, Predictive Analytics & Intelligent Automation.",
  },
  {
    icon: <Cloud size={34} />,
    title: "Cloud Engineering",
    desc: "AWS, Azure & Google Cloud infrastructure built for scalability and security.",
  },
  {
    icon: <Code2 size={34} />,
    title: "Web Development",
    desc: "Modern responsive web applications with React, Next.js and enterprise technologies.",
  },
  {
    icon: <Smartphone size={34} />,
    title: "Mobile Applications",
    desc: "Beautiful Android & iOS apps with exceptional user experiences.",
  },
  {
    icon: <Palette size={34} />,
    title: "UI / UX Design",
    desc: "Minimal, premium and user-focused interfaces for modern digital products.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Cyber Security",
    desc: "Enterprise-grade security solutions protecting applications and infrastructure.",
  },
  {
    icon: <Database size={34} />,
    title: "Data Analytics",
    desc: "Business Intelligence dashboards and powerful real-time analytics.",
  },
  {
    icon: <Cpu size={34} />,
    title: "DevOps & Automation",
    desc: "CI/CD, Docker, Kubernetes and automated deployment pipelines.",
  },
];

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Java",
  "Python",
  "Spring Boot",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "MongoDB",
  "PostgreSQL",
];

// const process = [
//   {
//     no: "01",
//     title: "Discover",
//     desc: "Understanding business goals and project vision.",
//   },
//   {
//     no: "02",
//     title: "Strategy",
//     desc: "Planning architecture,technology",
//   },
//   {
//     no: "03",
//     title: "Develop",
//     desc: "Building secure, scalable and modern solutions.",
//   },
//   {
//     no: "04",
//     title: "Launch",
//     desc: "Deployment, monitoring and continuous support.",
//   },
// ];

const Services = () => {
  return (
    <>
      <Navbar />

      <div className="services-page">

        {/* ================= HERO ================= */}

        <section className="services-hero">

          <div className="hero-glow glow1"></div>
          <div className="hero-glow glow2"></div>
          <div className="hero-glow glow3"></div>

          <div className="services-hero-content">

            <span className="hero-tag">
              FUTURE READY DIGITAL SOLUTIONS
            </span>

            <h1>
              Empowering Businesses
              <span>Through Innovation</span>
            </h1>

            <p>
              Belnova Technologies delivers intelligent software,
              AI-powered automation, cloud engineering and digital
              transformation solutions that accelerate business growth.
            </p>

            <button className="hero-btn">
              Explore Services
              <ArrowRight size={18} />
            </button>

          </div>

        </section>

        {/* ================= SERVICES ================= */}

        <section className="services-grid-section">

          <div className="section-heading">

            <span>OUR SERVICES</span>

            <h2>
              Solutions Built
              <br />
              For The Future
            </h2>

            <p>
              Innovative technology solutions crafted to transform ideas
              into scalable digital products.
            </p>

          </div>

          <div className="services-grid">

            {services.map((service, index) => (

              <div className="service-card" key={index}>

                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.desc}</p>

                <button>
                  Learn More
                  <ArrowRight size={16} />
                </button>

              </div>

            ))}

          </div>

        </section>

        {/* ================= WHY BELNOVA ================= */}

        <section className="why-belnova">

          <div className="section-heading">

            <span>WHY BELNOVA</span>

            <h2>
              Why Businesses
              <br />
              Choose Us
            </h2>

          </div>

          <div className="why-grid">

            <div className="why-card">
              <CheckCircle2 />
              <h3>Innovation First</h3>
              <p>
                Modern technologies combined with creative engineering.
              </p>
            </div>

            <div className="why-card">
              <CheckCircle2 />
              <h3>Enterprise Quality</h3>
              <p>
                Secure, scalable and performance-driven software solutions.
              </p>
            </div>

            <div className="why-card">
              <CheckCircle2 />
              <h3>Customer Focused</h3>
              <p>
                Every product is built around business goals and user needs.
              </p>
            </div>

          </div>

        </section>

{/* ================= PROCESS ================= */}

{/* x */}

        {/* ================= TECHNOLOGIES ================= */}

        <section className="tech-section">

          <div className="section-heading">

            <span>TECH STACK</span>

            <h2>
              Technologies
              <br />
              We Use
            </h2>

          </div>

          <div className="tech-grid">

            {technologies.map((tech, index) => (
<div className="tech-card" key={index}>

    <Cpu size={34} />

    <h4>{tech}</h4>

    <p>Enterprise Ready Technology</p>

</div>
            ))}

          </div>

        </section>

        {/* ================= CTA ================= */}

        <section className="cta-section">

          <div className="cta-box">

            <h2>
              Let's Build Your Next Digital Product
            </h2>

            <p>
              Partner with Belnova Technologies to transform your ideas into
              scalable, secure and future-ready digital solutions.
            </p>

            <button>
              Start Your Project
              <ArrowRight size={18} />
            </button>

          </div>

        </section>

      </div>
    </>
  );
};

export default Services;