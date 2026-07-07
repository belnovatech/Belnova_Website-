import React from "react";
import "./WhyBelnova.css";
import Navbar from "../components/Navbar";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Cpu,
  Rocket,
  Globe2
} from "lucide-react";

const whyCards = [
  {
    id: 1,
    title: "Accelerating Digital Innovation",
    subtitle: "Transforming Ideas Into Powerful Digital Experiences",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    desc:
      "At Belnova Technologies, we engineer intelligent digital products that help businesses innovate, automate operations, and scale faster. Every solution is designed with performance, security, and long-term growth in mind.",

    chips: [
      "AI Powered",
      "Cloud Native",
      "Scalable",
      "Future Ready"
    ],

    icon: <Rocket size={20} />
  },

  {
    id: 2,
    title: "Enterprise Security By Design",
    subtitle: "Protecting Every Layer Of Your Business",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",

    desc:
      "Security isn't an afterthought. We integrate enterprise-grade security, encrypted architectures, cloud compliance, and modern authentication systems into every application we develop.",

    chips: [
      "Zero Trust",
      "Encryption",
      "Cloud Security",
      "Compliance"
    ],

    icon: <ShieldCheck size={20} />
  },

  {
    id: 3,
    title: "Modern Engineering Excellence",
    subtitle: "Built With Latest Technologies",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",

    desc:
      "Our engineers combine modern frameworks, AI, cloud computing and automation to create software that performs reliably today and adapts to tomorrow.",

    chips: [
      "React",
      "Node",
      "Java",
      "AI"
    ],

    icon: <Cpu size={20} />
  },

  {
    id: 4,
    title: "Global Technology Partner",
    subtitle: "Supporting Businesses Around The Clock",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",

    desc:
      "From strategy and design to deployment and continuous support, Belnova becomes your trusted technology partner for every stage of digital growth.",

    chips: [
      "24/7 Support",
      "Agile",
      "Consulting",
      "Maintenance"
    ],

    icon: <Globe2 size={20} />
  }
];

export default function WhyBelnova() {
  return (
    <>
      <Navbar />

      <section className="l-why-section">

        <div className="l-why-blob l-why-blob1"></div>
        <div className="l-why-blob l-why-blob2"></div>

        <div className="l-why-container">

          <div className="l-why-header">

            <span className="l-why-tag">
              <Sparkles size={15}/>
              WHY BELNOVA
            </span>

            <h2>
              Innovation That
              <span> Drives Business Growth</span>
            </h2>

            <p>
              We build intelligent digital products that empower
              startups, enterprises and global brands with scalable,
              secure and future-ready technology solutions.
            </p>

          </div>

<div className="l-why-floating-logo">

    {/* rotating text */}

    <svg
        className="logo-text-circle"
        viewBox="0 0 400 400"
    >
        <defs>
            <path
                id="textcircle"
                d="
                M 200,200
                m -150,0
                a150,150 0 1,1 300,0
                a150,150 0 1,1 -300,0
                "
            />
        </defs>

        <text className="circleText">
            <textPath href="#textcircle">
                BELNOVA • BELNOVA • BELNOVA • BELNOVA • BELNOVA •
            </textPath>
        </text>
    </svg>

    {/* glowing rings */}

    <span className="orbit orbit1"></span>
    <span className="orbit orbit2"></span>
    <span className="orbit orbit3"></span>

    {/* logo */}

    <div className="l-why-logo">
        B
    </div>

</div>

          <div className="l-why-wrapper">
                        {whyCards.map((card, index) => (
              <div
                key={card.id}
                className={`l-why-card ${
                  index % 2 === 0 ? "l-why-left" : "l-why-right"
                }`}
              >
                {/* IMAGE */}

                <div className="l-why-image">
                  <img src={card.image} alt={card.title} />

                  <div className="l-why-image-overlay">
                    <span>{card.subtitle}</span>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="l-why-content">

                  <div className="l-why-icon">
                    {card.icon}
                  </div>

                  <h3>{card.title}</h3>

                  <p>{card.desc}</p>

                  <div className="l-why-chips">

                    {card.chips.map((chip, i) => (
                      <span key={i}>

                        <CheckCircle2 size={15} />

                        {chip}

                      </span>
                    ))}

                  </div>

                  <button className="l-why-btn">

                    Learn More

                    <ArrowRight size={18} />

                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* STATS */}

          <div className="l-why-stats">

            <div className="l-why-stat">
              <h2>150+</h2>
              <p>Projects Delivered</p>
            </div>

            <div className="l-why-stat">
              <h2>98%</h2>
              <p>Client Satisfaction</p>
            </div>

            <div className="l-why-stat">
              <h2>20+</h2>
              <p>Modern Technologies</p>
            </div>

            <div className="l-why-stat">
              <h2>24/7</h2>
              <p>Technical Support</p>
            </div>

          </div>

          {/* CTA */}

          <div className="l-why-bottom">

            <h2>
              Ready To Build Something Extraordinary?
            </h2>

            <p>
              Partner with Belnova Technologies to transform your ideas
              into innovative digital products that accelerate growth,
              improve efficiency, and deliver lasting business value.
            </p>

            <button className="l-why-main-btn">

              Start Your Project

              <ArrowRight size={20} />

            </button>

          </div>

        </div>

      </section>

    </>
  );
}