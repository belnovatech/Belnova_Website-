import "./About.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  Cpu,
  Globe,
  ShieldCheck,
  Cloud,
  BrainCircuit,
  Smartphone,
} from "lucide-react";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section className="about-page">

        {/* Background Effects */}
        <div className="bg-glow glow1"></div>
        <div className="bg-glow glow2"></div>
        <div className="bg-grid"></div>

        <div className="about-container">

          {/* LEFT SIDE */}
          <div className="about-left">

            <span className="about-tag">
              ★ ABOUT BELNOVA
            </span>

            <h1 className="about-title">
              Engineering the
              <span> Future </span>
              with Intelligent Technology
            </h1>

            <p className="about-description">
              <strong>Belnova Tech Private Limited</strong> is your trusted
              technology partner, delivering next-generation digital
              solutions that empower startups, enterprises and businesses
              across the globe.
            </p>

            <p className="about-description">
              We specialize in Artificial Intelligence, Cloud Computing,
              Web Development, Mobile Applications, Automation and
              Enterprise Software to help organizations innovate faster,
              operate smarter and scale confidently.
            </p>

            <div className="about-buttons">

              <button
                className="primary-btn"
                onClick={() => navigate("/contact")}
              >
                Let's Work Together
              </button>

              <button
                className="secondary-btn"
                onClick={() => navigate("/services")}
              >
                Our Services
              </button>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="about-right">

            <div className="glass-orb">

              <div className="ring ring1"></div>
              <div className="ring ring2"></div>
              <div className="ring ring3"></div>

              <div className="center-core">
                <span>B</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="about-features">

        <div className="section-heading">
          <h2>Why Belnova?</h2>
          <p>
            Building future-ready digital ecosystems with innovation,
            security and performance.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <Cpu size={42} />
            <h3>AI & Automation</h3>
            <p>
              Intelligent automation powered by modern AI technologies for
              faster and smarter businesses.
            </p>
          </div>

          <div className="feature-card">
            <Cloud size={42} />
            <h3>Cloud Solutions</h3>
            <p>
              Secure, scalable and cloud-native architectures built for
              enterprise growth.
            </p>
          </div>

          <div className="feature-card">
            <Smartphone size={42} />
            <h3>Mobile Apps</h3>
            <p>
              Beautiful Android and iOS experiences with modern UI and
              powerful performance.
            </p>
          </div>

          <div className="feature-card">
            <Globe size={42} />
            <h3>Web Platforms</h3>
            <p>
              Responsive websites and enterprise applications engineered
              for speed and reliability.
            </p>
          </div>

          <div className="feature-card">
            <ShieldCheck size={42} />
            <h3>Cyber Security</h3>
            <p>
              Protecting digital assets through modern security standards
              and best practices.
            </p>
          </div>

          <div className="feature-card">
            <BrainCircuit size={42} />
            <h3>Innovation</h3>
            <p>
              Every solution is crafted with creativity, technology and a
              long-term business vision.
            </p>
          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="company-stats">

        <div className="stat-card">
          <h2>100+</h2>
          <p>Projects Delivered</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat-card">
          <h2>15+</h2>
          <p>Technology Solutions</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Support</p>
        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="about-cta">

        <div className="cta-box">

          <h2>
            Let's Build Something Amazing Together
          </h2>

          <p>
            From innovative startups to global enterprises,
            Belnova transforms ideas into scalable digital products.
          </p>

          <button
            className="cta-btn"
            onClick={() => navigate("/contact")}
          >
            Get Started
          </button>

        </div>

      </section>

    </>
  );
}