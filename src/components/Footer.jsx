import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import footerLogo from "../Public/belnova-logo.png";

const footerColumns = [
  {
    title: "COMPANY",
    links: [
      { label: "About Us", to: "/company" },
      { label: "Careers", to: "/careers" },
      { label: "Our Work", to: "/work" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { label: "What We Do", to: "/what-we-do" },
      { label: "Web Development", to: "/solutions" },
      { label: "Mobile Applications", to: "/solutions" },
      { label: "Cloud Solutions", to: "/solutions" },
    ],
  },
  {
    title: "SOLUTIONS",
    links: [
      { label: "Enterprise Software", to: "/solutions" },
      { label: "AI Solutions", to: "/innovations" },
      { label: "SaaS Products", to: "/solutions" },
      { label: "IT Consulting", to: "/solutions" },
    ],
  },
  {
    title: "INDUSTRIES",
    links: [
      { label: "Financial Technology", to: "/industries" },
      { label: "Healthcare", to: "/industries" },
      { label: "Retail", to: "/industries" },
      { label: "Fitness", to: "/industries" },
    ],
  },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 8.2H3.2V19h3.3V8.2ZM4.85 3A1.93 1.93 0 1 0 4.85 6.86 1.93 1.93 0 0 0 4.85 3ZM19.8 12.8c0-3.25-1.73-4.76-4.05-4.76a3.5 3.5 0 0 0-3.18 1.75V8.2H9.25V19h3.32v-5.34c0-1.41.27-2.78 2.02-2.78 1.72 0 1.74 1.61 1.74 2.87V19h3.32l.15-6.2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle
        className="footer-icon-fill"
        cx="17.5"
        cy="6.5"
        r="1"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.2 8.1V6.4c0-.8.5-1 1-1h2.5V2.2L14.8 2c-3.2 0-4 2-4 4.2v1.9H8V12h2.8v10h4.1V12h2.8l.5-3.9h-4Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.6 3H22l-7.45 8.51L23.3 21h-6.85l-5.36-7.01L4.95 21H1.54l7.95-9.09L1.1 3h7.03l4.84 6.4L18.6 3Zm-1.2 16h1.89L7.1 4.9H5.07L17.4 19Z" />
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
            {/* Image is loaded directly from the public folder */}
                <Link
                to="/"
                className="footer-logo"
                aria-label="Belnova Technologies home"
                >
                <img
                    
                    src={footerLogo}
                    alt="Belnova Technologies"
                    className="footer-logo-image"
                    />
                
                </Link>

            <p>
              We design and build reliable digital products, enterprise
              applications and technology solutions that help businesses grow.
            </p>

            <div className="footer-tagline">
              <span>Think.</span> Build. Transform.
            </div>

            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <XIcon />
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h3>{column.title}</h3>

              <nav aria-label={`${column.title} links`}>
                {column.links.map((link) => (
                  <Link to={link.to} key={link.label}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="footer-contact-bar">
          <div className="footer-contact-item">
            <small>EMAIL</small>
            <a href="mailto:info@belnova.com">
              info@belnova.com
            </a>
          </div>

          <div className="footer-contact-item">
            <small>PHONE</small>
            <a href="tel:+919876543210">
              +91 98765 43210
            </a>
          </div>

          <div className="footer-contact-item">
            <small>LOCATION</small>
            <span>Hyderabad, India</span>
          </div>

          <div className="footer-contact-item">
            <small>WORKING HOURS</small>
            <span>Mon – Fri, 9:00 AM – 6:00 PM</span>
          </div>

          <Link to="/contact" className="footer-portal-button">
            Start a Project
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Belnova Technologies. All rights reserved.
          </p>

          <p className="footer-bottom-message">
            DESIGNED <span>•</span> BUILT <span>•</span> DELIVERED
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;