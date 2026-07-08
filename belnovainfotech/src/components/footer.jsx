import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../assets/BELNOVA LOGO.png";

function ContactFooter() {
  return (
    <>
{/* 
      <section id="contact" className="bnv-contact-section">
        <div className="bnv-contact-container">

      
          <div className="bnv-contact-left">

            <img
              src={logo}
              alt="BELNOVA Logo"
              className="bnv-contact-logo"
            />

            <h2 className="bnv-contact-heading">
              Let's Build Something Amazing Together
            </h2>

            <p className="bnv-contact-description">
              Have an idea, project, or business requirement?
              Our team is ready to help you build innovative
              digital solutions tailored to your needs.
            </p>

        
            <div className="bnv-contact-card bnv-location-card">

              <span className="bnv-card-title">
                📍 LOCATION
              </span>

              <p className="bnv-location-text">
                2-91/12/4/NR Plot No.4 <br />
                Doc Bhavan, 5th Floor <br />
                Kondapur, Hyderabad <br />
                Telangana - 500081
              </p>

              <a
                href="https://maps.google.com/?q=2-91/12/4/NR+Plot+No+4+Doc+Bhavan+5th+Floor+Kondapur+Hyderabad+500081"
                target="_blank"
                rel="noreferrer"
                className="bnv-map-button"
              >
                🗺 Open in Google Maps
              </a>

            </div>

            <div className="bnv-contact-card">

              <div className="bnv-contact-item">

                <span className="bnv-contact-icon">
                  ✉
                </span>

                <div>
                  <h4>Email</h4>
                  <p>info@belnovatech.com</p>
                </div>

              </div>

              <div className="bnv-contact-item">

                <span className="bnv-contact-icon">
                  📞
                </span>

                <div>
                  <h4>Phone</h4>
                  <p>+91 7382405380</p>
                </div>

              </div>

              <div className="bnv-contact-item">

                <span className="bnv-contact-icon">
                  🕒
                </span>

                <div>
                  <h4>Working Hours</h4>
                  <p>Mon - Sat | 9 AM - 7 PM</p>
                </div>

              </div>

            </div>

          </div>

          <div className="bnv-contact-right">

            <div className="bnv-form-card">

              <h2 className="bnv-form-title">
                Get in Touch
              </h2>

              <p className="bnv-form-subtitle">
                Fill out the form and our team will contact you shortly.
              </p>

              <form>

                <div className="bnv-form-row">

                  <input
                    type="text"
                    className="bnv-input"
                    placeholder="Full Name"
                  />

                  <input
                    type="text"
                    className="bnv-input"
                    placeholder="Mobile Number"
                  />

                </div>

                <input
                  type="email"
                  className="bnv-input"
                  placeholder="Email Address"
                />

                <textarea
                  rows="6"
                  className="bnv-textarea"
                  placeholder="Tell us about your project..."
                ></textarea>

                <button
                  type="submit"
                  className="bnv-send-button"
                >
                  SEND ENQUIRY →
                </button>

              </form>

            </div>

          </div>

        </div>
      </section> */}

      {/* ================= FOOTER ================= */}

      <footer className="bnv-footer">

        <div className="bnv-footer-container">

          <div className="bnv-footer-top">

            {/* BRAND */}

            <div className="bnv-footer-brand">

              <img
                src={logo}
                alt="BELNOVA Logo"
                className="bnv-footer-logo"
              />

              <p>
                Building innovative software solutions,
                AI products, cloud applications and enterprise
                technology for businesses worldwide.
              </p>

            </div>

            {/* LINKS */}

<div className="bnv-footer-links">

  <h3>Quick Links</h3>

  <Link to="/">Home</Link>
  <Link to="/about">About Us</Link>
  <Link to="/services">What We Do</Link>
  <Link to="/why-belnova">Why Belnova</Link>
  <Link to="/industries">Industries</Link>
  <Link to="/careers">Careers</Link>
  <Link to="/contact">Contact Us</Link>

</div>

            {/* SOCIAL */}

            <div className="bnv-footer-social">

              <h3>Connect</h3>

              <div className="bnv-social-icons">

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  in
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  GH
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  X
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  ▶
                </a>

              </div>

            </div>

          </div>

          <div className="bnv-footer-bottom">

            © 2026 BELNOVA TECH PRIVATE LIMITED.
            All Rights Reserved.

          </div>

        </div>

      </footer>
    </>
  );
}

export default ContactFooter;