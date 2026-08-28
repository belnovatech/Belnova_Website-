import React, { useState } from "react";
import "./ContactSection.css";
import { SectionLabel, GradientButton } from "../../components/UI";

const contactReasons = [
  ["I Have an idea", "Discuss a new product."],
  ["I Need Software", "Discuss application development."],
  ["I Need Developers", "Discuss resource outsourcing."],
  ["I Want AI", "Explore AI opportunities."],
  ["I Need Cloud Support", "Discuss infrastructure."],
  ["I Need IT Talent", "Discuss recruitment."],
  ["I Want to Partner", "Discuss partnerships."],
];

export default function ContactSection() {
  const [selectedReason, setSelectedReason] = useState("I Want to Partner");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section className="belNova-contact-section" id="contact">
      <div className="belNova-contact-container">
        <SectionLabel>CONTACT</SectionLabel>

        <h2 className="belNova-contact-title">
          Let's Build Something Great
          <br />
          Together.
        </h2>

        <p className="belNova-contact-description">
          Tell us about your business challenge, technology requirement or
          product idea.
        </p>

        <div className="belNova-contact-reasons">
          {contactReasons.map(([title, description]) => (
            <button
              type="button"
              key={title}
              className={`belNova-contact-reason-card ${
                selectedReason === title ? "selected" : ""
              }`}
              onClick={() => setSelectedReason(title)}
            >
              <strong>{title}</strong>
              <span>{description}</span>
            </button>
          ))}
        </div>

        {submitted ? (
          <div className="belNova-form-success">
            <h3>✓ Requirement Submitted Successfully!</h3>
            <p>
              Thank you for reaching out to Belnova Tech. Our engineering team
              will review your project and get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form className="belNova-contact-form" onSubmit={handleSubmit}>
            <div className="belNova-form-cat-header">
              <h3>CONTACT INFORMATION</h3>
            </div>

            <div className="belNova-form-grid">
              <label>
                Full Name *
                <input type="text" name="fullName" placeholder="Your name" required />
              </label>

              <label>
                Company Name
                <input type="text" name="company" placeholder="Company" />
              </label>

              <label>
                Work Email *
                <input type="email" name="email" placeholder="name@company.com" required />
              </label>

              <label>
                Phone Number
                <input type="tel" name="phone" placeholder="Phone" />
              </label>

              <label className="full-width">
                Country
                <input type="text" name="country" placeholder="Country" />
              </label>
            </div>

            <div className="belNova-form-cat-header">
              <h3>REQUIREMENT</h3>
            </div>

            <div className="belNova-form-grid">
              <label>
                What are you looking for?
                <select
                  name="lookingFor"
                  value={selectedReason}
                  onChange={(e) => setSelectedReason(e.target.value)}
                >
                  <option value="" disabled>Select an option</option>
                  <option value="I Have an idea">I Have an Idea (New product)</option>
                  <option value="I Need Software">I Need Software (App development)</option>
                  <option value="I Need Developers">I Need Developers (Resource outsourcing)</option>
                  <option value="I Want AI">I Want AI (AI opportunities)</option>
                  <option value="I Need Cloud Support">I Need Cloud Support (Infrastructure)</option>
                  <option value="I Need IT Talent">I Need IT Talent (Recruitment)</option>
                  <option value="I Want to Partner">I Want to Partner (Partnerships)</option>
                </select>
              </label>

              <label>
                Project / Requirement Title *
                <input type="text" name="title" placeholder="Short title" required />
              </label>
            </div>

            <label className="full-width">
              Requirement Description *
              <textarea
                name="message"
                rows="5"
                placeholder="Describe the challenge, process or product idea"
                required
              />
            </label>

            <div className="belNova-form-grid">
              <label>
                Technology Preferences
                <input type="text" name="technology" placeholder="Optional" />
              </label>

              <label>
                Expected Timeline
                <select name="timeline" defaultValue="">
                  <option value="" disabled>Select</option>
                  <option value="Immediately">Immediately</option>
                  <option value="1–3 months">1–3 months</option>
                  <option value="3–6 months">3–6 months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </label>

              <label>
                Budget Range
                <input type="text" name="budget" placeholder="Optional" />
              </label>

              <label>
                How did you hear about us?
                <input type="text" name="source" placeholder="Optional" />
              </label>
            </div>

            <label className="full-width">
              Attachment
              <input type="file" name="attachment" />
            </label>

            <label className="checkbox-label">
              <input type="checkbox" required />
              <span>I agree to the Privacy Policy and Terms & Conditions.</span>
            </label>

            <div className="belNova-form-submit-wrap">
              <GradientButton type="submit">Submit Requirement</GradientButton>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
