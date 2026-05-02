import React from "react";
// @ts-ignore
import "./Hero.css";
import logo from "../assets/BELNOVA LOGO.png";
// import Hero from "./components/hero.css";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/banner-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>WE BUILD DIGITAL PRODUCTS THAT SCALE</h1>

          <h2>
            Cutting-Edge Product Engineering Solutions
          </h2>
          <h4>Belnova Infotech Private Limited — Full-stack technology partner for startups and enterprises. Web, Mobile, AI, Cloud.</h4>

          <button className="cta-btn">LET'S CONNECT</button>
        </div>
      </section>
      {/* --- ABOUT US SECTION --- */}
      <section className="about-section">
        <div className="about-container">
          {/* Left Side: The "Moving" Services Design */}
          <div className="services-visual">
            <div className="side-logo-container">
              <img src={logo} alt="Side Logo" className="side-logo-img" />
              <div className="dashed-line"></div>
            </div>
            <div className="services-stack">
              <div className="service-card card-1">Application Development</div>
              <div className="service-card card-2">AI & Machine Learning</div>
              <div className="service-card card-3">Cloud & DevOps</div>
              <div className="service-card card-4">UI/UX Design</div>
            </div>
            {/* Decorative premium glow behind the cards */}
            <div className="visual-glow"></div>
          </div>
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="visual-glow"></div>

          {/* Right Side: Text Content */}
          <div className="about-text">
            <h2 className="outline-text">ABOUT US</h2>
            <h3 className="who-we-are">Who we are</h3>
            <p>
              <strong>Belnova Infotech</strong> is your dedicated partner in digital transformation,
              accelerating technology adoption and driving impactful change through
              advanced automation and cutting-edge platforms.
            </p>
            <p>
              Specializing in Cloud, AI, and Mobile technologies, we empower organizations
              to achieve unparalleled efficiency and visibility.
            </p>
            <button
              className="read-more-btn"
              onClick={() => navigate("/about")}
            >
              READ MORE ABOUT US
            </button>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-container">
          {/* Left Side: Company Info (Format from Image 2) */}
          <div className="contact-info">
            <img src={logo} alt="BELNOVA LOGO" className="contact-logo" />
            <div className="info-item">
              <span className="icon">📍</span>
              <p><strong>LOCATION</strong><br />Hyderabad, Telangana, India</p>
            </div>
            <div className="info-item">
              <span className="icon">✉️</span>
              <p><strong>EMAIL</strong><br />hello@belnova.in</p>
            </div>
            <div className="info-item">
              <span className="icon">📞</span>
              <p><strong>PHONE</strong><br />+91 XXXXX XXXXX</p>
            </div>
            <div className="info-item">
              <span className="icon">🕒</span>
              <p><strong>WORKING HOURS</strong><br />Mon - Sat, 9 AM - 7 PM IST</p>
            </div>
          </div>

          {/* Right Side: Form (Layout Image 1, Style Image 2) */}
          <div className="contact-form-card">
            <h3 className="gradient-text-small">Get in touch!</h3>
            <form>
              <div className="form-row">
                <input type="text" placeholder="Enter Name" />
                <input type="text" placeholder="Enter Mobile" />
              </div>
              <input type="email" placeholder="Enter email" />
              <textarea placeholder="Enter your query" rows="4"></textarea>
              <button type="submit" className="send-btn">SEND ENQUIRY</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;