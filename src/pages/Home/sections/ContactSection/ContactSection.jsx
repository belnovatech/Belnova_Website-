import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactSection.css";

const contactOptions = [
  {
    title: "I Have an Idea",
    description: "Discuss a new product.",
  },
  {
    title: "I Need Software",
    description: "Discuss application development.",
  },
  {
    title: "I Need Developers",
    description: "Discuss resource outsourcing.",
  },
  {
    title: "I Want AI",
    description: "Explore AI opportunities.",
  },
  {
    title: "I Need Cloud Support",
    description: "Discuss infrastructure.",
  },
  {
    title: "I Need IT Talent",
    description: "Discuss recruitment.",
  },
  {
    title: "I Want to Partner",
    description: "Discuss partnerships.",
  },
];

const projectTypes = [
  "Website",
  "Web Application",
  "Mobile App",
  "SaaS",
  "Enterprise Application",
  "AI Solution",
  "Other",
];

const requirementOptions = [
  "New Product Development",
  "Application Development",
  "AI Solution",
  "Cloud Support",
  "Developer Resources",
  "IT Talent",
  "Partnership",
];

const timelineOptions = [
  "Less than 1 month",
  "1 - 3 months",
  "3 - 6 months",
  "6 - 12 months",
  "12+ months",
];

function Label({ children }) {
  return (
    <div className="contact-label">
      <span className="contact-label__dot" aria-hidden="true"></span>
      {children}
    </div>
  );
}

export default function Contact() {
  const [selectedOption, setSelectedOption] = useState("");
  const [projectType, setProjectType] = useState("");
  const [estimatorStep, setEstimatorStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    requirement: "",
    projectTitle: "",
    description: "",
    technology: "",
    timeline: "",
    budget: "",
    source: "",
    attachment: null,
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    }));
  };

  // Full Name - allow alphabets and spaces only
  const handleNameKeyDown = (e) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Tab",
      "Home",
      "End",
    ];

    if (allowedKeys.includes(e.key)) {
      return;
    }

    if (!/^[A-Za-z\s]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  // Full Name - block invalid pasted values
  const handleNamePaste = (e) => {
    const pastedText = e.clipboardData.getData("text");

    if (!/^[A-Za-z\s]+$/.test(pastedText)) {
      e.preventDefault();
    }
  };

  // Country - allow alphabets and spaces only
  const handleCountryKeyDown = (e) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Tab",
      "Home",
      "End",
    ];

    if (allowedKeys.includes(e.key)) {
      return;
    }

    if (!/^[A-Za-z\s]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  // Country - block invalid pasted values
  const handleCountryPaste = (e) => {
    const pastedText = e.clipboardData.getData("text");

    if (!/^[A-Za-z\s]+$/.test(pastedText)) {
      e.preventDefault();
    }
  };

  // Phone - allow numbers only, exactly 10 digits max
  const handlePhoneKeyDown = (e) => {
    const input = e.currentTarget;

    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Tab",
      "Home",
      "End",
    ];

    if (allowedKeys.includes(e.key)) {
      return;
    }

    // Block letters and special characters
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      return;
    }

    // Do not allow more than 10 digits (unless replacing a selection)
    if (
      input.value.length >= 10 &&
      input.selectionStart === input.selectionEnd
    ) {
      e.preventDefault();
    }
  };

  // Phone - block invalid pasted values and limit to 10 digits
  const handlePhonePaste = (e) => {
    const pastedText = e.clipboardData.getData("text");
    const input = e.currentTarget;

    if (!/^[0-9]+$/.test(pastedText)) {
      e.preventDefault();
      return;
    }

    const selectedTextLength = input.selectionEnd - input.selectionStart;
    const newLength =
      input.value.length - selectedTextLength + pastedText.length;

    if (newLength > 10) {
      e.preventDefault();
    }
  };

  // Prevent whitespace-only values on required text fields
  const handleTrimValidation = (e) => {
    if (!e.target.value.trim()) {
      e.target.setCustomValidity("This field cannot be empty.");
    } else {
      e.target.setCustomValidity("");
    }
  };

  // Validate optional fields only if the user entered something
  const handleOptionalTrimValidation = (e) => {
    if (e.target.value && !e.target.value.trim()) {
      e.target.setCustomValidity("This field cannot contain only spaces.");
    } else {
      e.target.setCustomValidity("");
    }
  };

  // Validate attachment type and size
  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];

    handleChange(e);

    if (!file) {
      e.target.setCustomValidity("");
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-powerpoint",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "text/plain",
    ];

    const maxSize = 10 * 1024 * 1024; // 10 MB

    if (!allowedTypes.includes(file.type)) {
      e.target.setCustomValidity(
        "Please upload a PDF, Word, Excel, PowerPoint, or text file."
      );
      return;
    }

    if (file.size > maxSize) {
      e.target.setCustomValidity("Attachment size must be less than 10 MB.");
      return;
    }

    e.target.setCustomValidity("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!formData.privacy) {
      alert("Please agree to the Privacy Policy and Terms & Conditions.");
      return;
    }

    console.log("Contact form submitted:", formData);
    alert("Thank you! Your requirement has been submitted.");
  };

  const nextEstimatorStep = () => {
    if (estimatorStep < 6) {
      setEstimatorStep((prev) => prev + 1);
    }
  };

  const previousEstimatorStep = () => {
    if (estimatorStep > 1) {
      setEstimatorStep((prev) => prev - 1);
    }
  };

  return (
    <main className="contact-page">

      {/* ================= HERO ================= */}
      <section className="contact-hero section-grid">
        <div className="contact-container">
          <Label>CONTACT</Label>

          <h1 className="contact-hero-title">
            Let's Build Something{" "}
            <span className="gradient-text">Great</span>
            <br />
            <span className="gradient-text">Together.</span>
          </h1>

          <p className="contact-hero-description">
            Share the problem you're solving. We'll come back with a
            practical technology approach.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INTRO ================= */}
      <section className="contact-intro">
        <div className="contact-container">
          <Label>CONTACT</Label>

          <h2 className="contact-section-title">
            Let's Build Something Great
            <br />
            Together.
          </h2>

          <p className="contact-section-description">
            Tell us about your business challenge, technology requirement or
            product idea.
          </p>
        </div>
      </section>

      {/* ================= QUICK OPTIONS ================= */}
      <section className="contact-options-section">
        <div className="contact-container">
          <div className="contact-options-grid">
            {contactOptions.map((option) => (
              <button
                type="button"
                key={option.title}
                className={`contact-option ${
                  selectedOption === option.title
                    ? "contact-option--active"
                    : ""
                }`}
                onClick={() => {
                  setSelectedOption(option.title);

                  setFormData((prev) => ({
                    ...prev,
                    requirement: option.title,
                  }));
                }}
              >
                <strong>{option.title}</strong>
                <span>{option.description}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="contact-form-section">
        <div className="contact-container">
          <form className="contact-form-card" onSubmit={handleSubmit} noValidate={false}>

            <div className="form-heading">
              <p className="form-eyebrow">CONTACT INFORMATION</p>
            </div>

            <div className="form-grid">

              <div className="form-field">
                <label htmlFor="fullName">
                  Full Name <span>*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  onKeyDown={handleNameKeyDown}
                  onPaste={handleNamePaste}
                  onBlur={handleTrimValidation}
                  required
                  minLength={2}
                  maxLength={100}
                  pattern="[A-Za-z\s]+"
                  title="Full name should contain alphabets and spaces only."
                />
              </div>

              <div className="form-field">
                <label htmlFor="company">Company Name</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  onBlur={handleOptionalTrimValidation}
                  maxLength={100}
                  pattern="[A-Za-z0-9\s&.,'()-]+"
                  title="Company name can contain letters, numbers, spaces and common business characters."
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">
                  Work Email <span>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleTrimValidation}
                  required
                  maxLength={150}
                  pattern="^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$"
                  title="Please enter a valid email address (e.g. name@company.com)."
                />
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  inputMode="numeric"
                  value={formData.phone}
                  onChange={handleChange}
                  onKeyDown={handlePhoneKeyDown}
                  onPaste={handlePhonePaste}
                  onBlur={handleTrimValidation}
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  title="Phone number must contain exactly 10 digits."
                />
              </div>

              <div className="form-field">
                <label htmlFor="country">Country</label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  onKeyDown={handleCountryKeyDown}
                  onPaste={handleCountryPaste}
                  onBlur={handleOptionalTrimValidation}
                  minLength={2}
                  maxLength={100}
                  pattern="[A-Za-z\s]+"
                  title="Country should contain alphabets and spaces only."
                />
              </div>

            </div>

            {/* Requirement */}
            <div className="form-section-divider">
              <p className="form-eyebrow">REQUIREMENT</p>
            </div>

            <div className="form-grid">

              <div className="form-field">
                <label htmlFor="requirement">
                  What are you looking for?
                </label>

                <select
                  id="requirement"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>

                  {requirementOptions.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="projectTitle">
                  Project / Requirement Title <span>*</span>
                </label>

                <input
                  id="projectTitle"
                  name="projectTitle"
                  type="text"
                  placeholder="Short title"
                  value={formData.projectTitle}
                  onChange={handleChange}
                  onBlur={handleTrimValidation}
                  required
                  minLength={2}
                  maxLength={150}
                />
              </div>

              <div className="form-field form-field--full">
                <label htmlFor="description">
                  Requirement Description <span>*</span>
                </label>

                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe the challenge, process or product idea"
                  value={formData.description}
                  onChange={handleChange}
                  onBlur={handleTrimValidation}
                  required
                  minLength={10}
                  maxLength={5000}
                ></textarea>
              </div>

              <div className="form-field">
                <label htmlFor="technology">
                  Technology Preferences
                </label>

                <input
                  id="technology"
                  name="technology"
                  type="text"
                  placeholder="Optional"
                  value={formData.technology}
                  onChange={handleChange}
                  onBlur={handleOptionalTrimValidation}
                  maxLength={300}
                />
              </div>

              <div className="form-field">
                <label htmlFor="timeline">Expected Timeline</label>

                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>

                  {timelineOptions.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="budget">Budget Range</label>

                <input
                  id="budget"
                  name="budget"
                  type="text"
                  placeholder="Optional"
                  value={formData.budget}
                  onChange={handleChange}
                  onBlur={handleOptionalTrimValidation}
                  maxLength={100}
                  pattern="[A-Za-z0-9\s₹$€£.,+\-–—]+"
                  title="Please enter a valid budget range."
                />
              </div>

              <div className="form-field">
                <label htmlFor="source">
                  How did you hear about us?
                </label>

                <input
                  id="source"
                  name="source"
                  type="text"
                  placeholder="Optional"
                  value={formData.source}
                  onChange={handleChange}
                  onBlur={handleOptionalTrimValidation}
                  maxLength={200}
                />
              </div>

              <div className="form-field form-field--full">
                <label htmlFor="attachment">Attachment</label>

                <div className="file-input-wrapper">
                  <input
                    id="attachment"
                    name="attachment"
                    type="file"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt"
                    onChange={handleAttachmentChange}
                  />
                </div>
              </div>

            </div>

            <div className="privacy-row">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                checked={formData.privacy}
                onChange={handleChange}
                required
              />

              <label htmlFor="privacy">
                I agree to the Privacy Policy and Terms & Conditions.
              </label>
            </div>

            <button className="gradient-button" type="submit">
              Submit Requirement
              <span>→</span>
            </button>

          </form>
        </div>
      </section>

      {/* ================= PROJECT ESTIMATOR ================= */}
      <section className="estimator-section section-grid">
        <div className="contact-container">

          <Label>PROJECT ESTIMATOR</Label>

          <h2 className="estimator-title">
            Estimate Your Project
          </h2>

          <p className="estimator-description">
            Build an initial project profile in six steps. We share a
            detailed estimate after a scoping conversation.
          </p>

          <div className="estimator-card">

            {/* Progress */}
            <div className="estimator-progress">
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <div
                  key={step}
                  className={`progress-line ${
                    step <= estimatorStep
                      ? "progress-line--active"
                      : ""
                  }`}
                ></div>
              ))}
            </div>

            <div className="estimator-content">

              <p className="estimator-step">
                STEP {estimatorStep} OF 6
              </p>

              {estimatorStep === 1 && (
                <>
                  <h3>What are you building?</h3>

                  <div className="project-type-list">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        className={`project-type ${
                          projectType === type
                            ? "project-type--active"
                            : ""
                        }`}
                        onClick={() => setProjectType(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {estimatorStep === 2 && (
                <>
                  <h3>What is the primary goal?</h3>

                  <div className="estimator-placeholder">
                    Tell us what you want the product to achieve.
                  </div>
                </>
              )}

              {estimatorStep === 3 && (
                <>
                  <h3>Who will use it?</h3>

                  <div className="estimator-placeholder">
                    Describe your target users or customers.
                  </div>
                </>
              )}

              {estimatorStep === 4 && (
                <>
                  <h3>What features do you need?</h3>

                  <div className="estimator-placeholder">
                    Add the major features or modules required.
                  </div>
                </>
              )}

              {estimatorStep === 5 && (
                <>
                  <h3>What is your expected timeline?</h3>

                  <div className="estimator-placeholder">
                    Choose a suitable project timeline.
                  </div>
                </>
              )}

              {estimatorStep === 6 && (
                <>
                  <h3>Project profile complete</h3>

                  <div className="estimator-placeholder">
                    We'll use this information to prepare the initial
                    project profile.
                  </div>
                </>
              )}

              <div className="estimator-actions">
                {estimatorStep > 1 && (
                  <button
                    type="button"
                    className="outline-button"
                    onClick={previousEstimatorStep}
                  >
                    ← Previous
                  </button>
                )}

                {estimatorStep < 6 && (
                  <button
                    type="button"
                    className="gradient-button"
                    onClick={nextEstimatorStep}
                  >
                    Continue
                    <span>→</span>
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}