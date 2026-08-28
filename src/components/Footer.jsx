import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import footerLogo from "../Public/belnova-logo.png";

const footerColumns = [
  {
    title: "COMPANY",
    links: [
      { label: "About Us", to: "/company" },
      { label: "Why Belnova", to: "/#why-us" },
      { label: "Careers", to: "/careers" },
      { label: "Contact", to: "/contact" },
      { label: "Insights", to: "/#insights" },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { label: "Software Development", to: "/what-we-do" },
      { label: "Web Applications", to: "/what-we-do" },
      { label: "Mobile Applications", to: "/what-we-do" },
      { label: "AI & ML", to: "/what-we-do" },
      { label: "Cloud & DevOps", to: "/what-we-do" },
      { label: "Resource Outsourcing", to: "/what-we-do" },
      { label: "Recruitment", to: "/what-we-do" },
    ],
  },
  {
    title: "SOLUTIONS",
    links: [
      { label: "Business Applications", to: "/solutions" },
      { label: "Digital Transformation", to: "/solutions" },
      { label: "Automation", to: "/solutions" },
      { label: "AI Solutions", to: "/innovations" },
      { label: "Dedicated Teams", to: "/solutions" },
      { label: "Technology Consulting", to: "/solutions" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Case Studies", to: "/work" },
      { label: "Belnova Labs", to: "/innovations" },
      { label: "Insights", to: "/#insights" },
      { label: "Privacy Policy", to: "/contact" },
      { label: "Terms & Conditions", to: "/contact" },
      { label: "Cookie Policy", to: "/contact" },
      { label: "Disclaimer", to: "/contact" },
    ],
  },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66A1.66 1.66 0 0 0 7.83 6.6Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img
                src={footerLogo}
                alt="Belnova Tech Private Limited"
                className="footer-logo-image"
              />
            </Link>

            <p className="footer-brand-desc">
              Belnova Tech Private Limited — an innovation-focused technology company
              helping businesses build, modernize and scale digital capabilities.
            </p>

            <p className="footer-tagline-text">
              Innovate Today. Build the Future.
            </p>

            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="footer-links-grid">
            {footerColumns.map((col) => (
              <div className="footer-column" key={col.title}>
                <h3>{col.title}</h3>
                <nav>
                  {col.links.map((link) => (
                    <Link to={link.to} key={link.label}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-contact-bar">
          <div className="footer-contact-item">
            <small>EMAIL</small>
            <span>Add company email</span>
          </div>

          <div className="footer-contact-item">
            <small>PHONE</small>
            <span>Add company phone</span>
          </div>

          <div className="footer-contact-item">
            <small>LOCATION</small>
            <span>Add office address</span>
          </div>

          <div className="footer-contact-item">
            <small>WEBSITE</small>
            <span>Add website URL</span>
          </div>

          <Link to="/contact" className="footer-portal-button">
            Existing Client? Client Portal <span>→</span>
          </Link>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Belnova Tech Private Limited. All rights reserved.</p>
          <p className="footer-bottom-tagline">Technology • Innovation • Scale</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;