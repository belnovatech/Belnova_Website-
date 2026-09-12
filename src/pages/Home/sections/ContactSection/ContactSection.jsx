import React, { useState, useRef } from "react";
import "./ContactSection.css";
import SuccessModal from "../../../../components/SuccessModal/SuccessModal";
import { CONTACT_API_ENDPOINT } from "../../../../config/api";

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

const initialFormData = {
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
};

export default function Contact() {
  const [selectedOption, setSelectedOption] = useState("");
  const [projectType, setProjectType] = useState("");
  const [estimatorStep, setEstimatorStep] = useState(1);

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0] || null
          : value,
    }));

    // Clear field-level error when the user modifies the field
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }

    if (submitError) {
      setSubmitError(null);
    }
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

    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      return;
    }

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

  // Validate attachment type and size
  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    handleChange(e);

    if (!file) {
      return;
    }

    const allowedExtensions = [
      ".pdf",
      ".doc",
      ".docx",
      ".xls",
      ".xlsx",
      ".ppt",
      ".pptx",
      ".txt",
    ];
    const fileName = file.name.toLowerCase();
    const isExtensionAllowed = allowedExtensions.some((ext) =>
      fileName.endsWith(ext)
    );

    const maxSize = 10 * 1024 * 1024; // 10 MB

    if (!isExtensionAllowed) {
      setErrors((prev) => ({
        ...prev,
        attachment:
          "Please upload a PDF, Word, Excel, PowerPoint, or text file.",
      }));
      return;
    }

    if (file.size > maxSize) {
      setErrors((prev) => ({
        ...prev,
        attachment: "Attachment size must be less than 10 MB.",
      }));
      return;
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // 1. Full Name (Required, min 2 chars, letters/spaces only)
    if (!formData.fullName || !formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Full name should contain letters and spaces only.";
    }

    // 2. Work Email (Required, valid email regex)
    const emailRegex =
      /^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    if (!formData.email || !formData.email.trim()) {
      newErrors.email = "Work email is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid work email (e.g. name@company.com).";
    }

    // 3. Phone (Optional, but if provided must be exactly 10 digits)
    if (formData.phone && formData.phone.trim()) {
      if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
        newErrors.phone = "Phone number must contain exactly 10 digits.";
      }
    }

    // 4. Country (Optional, letters and spaces only)
    if (formData.country && formData.country.trim()) {
      if (!/^[A-Za-z\s]+$/.test(formData.country.trim())) {
        newErrors.country = "Country should contain letters and spaces only.";
      }
    }

    // 5. Project Title (Required, min 2 chars)
    if (!formData.projectTitle || !formData.projectTitle.trim()) {
      newErrors.projectTitle = "Project / Requirement title is required.";
    } else if (formData.projectTitle.trim().length < 2) {
      newErrors.projectTitle = "Title must be at least 2 characters.";
    }

    // 6. Description (Required, min 10 chars)
    if (!formData.description || !formData.description.trim()) {
      newErrors.description = "Requirement description is required.";
    } else if (formData.description.trim().length < 10) {
      newErrors.description =
        "Please describe your requirement in at least 10 characters.";
    }

    // 7. Privacy Agreement (Required)
    if (!formData.privacy) {
      newErrors.privacy =
        "Please agree to the Privacy Policy and Terms & Conditions.";
    }

    // 8. Attachment validation if present
    if (formData.attachment) {
      const allowedExtensions = [
        ".pdf",
        ".doc",
        ".docx",
        ".xls",
        ".xlsx",
        ".ppt",
        ".pptx",
        ".txt",
      ];
      const fileName = formData.attachment.name.toLowerCase();
      const isExtensionAllowed = allowedExtensions.some((ext) =>
        fileName.endsWith(ext)
      );
      const maxSize = 10 * 1024 * 1024; // 10 MB

      if (!isExtensionAllowed) {
        newErrors.attachment =
          "Please upload a valid document (PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, TXT).";
      } else if (formData.attachment.size > maxSize) {
        newErrors.attachment = "Attachment size must be less than 10 MB.";
      }
    }

    return newErrors;
  };

  const scrollToFirstError = (newErrors) => {
    const fieldOrder = [
      "fullName",
      "company",
      "email",
      "phone",
      "country",
      "requirement",
      "projectTitle",
      "description",
      "technology",
      "timeline",
      "budget",
      "source",
      "attachment",
      "privacy",
    ];

    for (const field of fieldOrder) {
      if (newErrors[field]) {
        const el = document.getElementById(field);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.focus();
        }
        break;
      }
    }
  };

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    if (isSubmitting) return;

    // Validate fields
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      scrollToFirstError(validationErrors);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setIsSubmitting(true);

    let isTimedOut = false;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      isTimedOut = true;
      controller.abort();
    }, 60000);

    try {
      const formDataToSend = new FormData();

      // REQUIRED BACKEND FIELDS
      formDataToSend.append("fullName", formData.fullName.trim());
      formDataToSend.append("email", formData.email.trim());
      formDataToSend.append("title", formData.projectTitle.trim());
      formDataToSend.append("message", formData.description.trim());
      formDataToSend.append("privacy_accepted", "true");

      // OPTIONAL BACKEND FIELDS
      if (formData.company) {
        formDataToSend.append("company", formData.company.trim());
      }
      if (formData.phone) {
        formDataToSend.append("phone", formData.phone.trim());
      }
      if (formData.country) {
        formDataToSend.append("country", formData.country.trim());
      }
      if (formData.requirement) {
        formDataToSend.append("lookingFor", formData.requirement);
      }
      if (formData.technology) {
        formDataToSend.append("technology", formData.technology.trim());
      }
      if (formData.timeline) {
        formDataToSend.append("timeline", formData.timeline);
      }
      if (formData.budget) {
        formDataToSend.append("budget", formData.budget.trim());
      }
      if (formData.source) {
        formDataToSend.append("source", formData.source.trim());
      }

      // ATTACHMENT
      if (formData.attachment) {
        formDataToSend.append("attachment", formData.attachment);
      }

      const response = await fetch(CONTACT_API_ENDPOINT, {
        method: "POST",
        body: formDataToSend,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        console.error("Backend error response:", response.status, result);

        let errorMsg =
          "Something went wrong while submitting your requirement. Please try again.";
        if (result?.detail) {
          errorMsg =
            typeof result.detail === "string"
              ? result.detail
              : JSON.stringify(result.detail);
        } else if (result?.message) {
          errorMsg = result.message;
        }

        setSubmitError(errorMsg);
        return;
      }

      console.log("Requirement submitted successfully:", result);

      // Success: clear errors, open modal, and reset form
      setSubmitError(null);
      setErrors({});
      setIsSuccessModalOpen(true);
      setFormData(initialFormData);
      setSelectedOption("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      clearTimeout(timeoutId);
      console.error("Contact submission error:", error);

      if (isTimedOut || error.name === "AbortError") {
        setSubmitError(
          "The server took too long to respond. Please check your connection or attachment and try again."
        );
      } else if (
        error.name === "TypeError" ||
        error.message?.toLowerCase().includes("failed to fetch") ||
        error.message?.toLowerCase().includes("networkerror")
      ) {
        setSubmitError(
          "Unable to connect to the server. Please check your internet connection and try again."
        );
      } else {
        setSubmitError(
          "Something went wrong while submitting your requirement. Please try again."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
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
          <h2 className="contact-section-title">
            Have a Challenge?
            <br />
            Let's Talk.
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
          <form
            className="contact-form-card"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-heading">
              <p className="form-eyebrow">CONTACT INFORMATION</p>
            </div>

            <div className="form-grid">
              {/* Full Name */}
              <div
                className={`form-field ${
                  errors.fullName ? "form-field--error" : ""
                }`}
              >
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
                  maxLength={100}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={
                    errors.fullName ? "fullName-error" : undefined
                  }
                />
                {errors.fullName && (
                  <span id="fullName-error" className="form-field-error-text">
                    ⚠ {errors.fullName}
                  </span>
                )}
              </div>

              {/* Company Name */}
              <div
                className={`form-field ${
                  errors.company ? "form-field--error" : ""
                }`}
              >
                <label htmlFor="company">Company Name</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  maxLength={100}
                />
                {errors.company && (
                  <span className="form-field-error-text">
                    ⚠ {errors.company}
                  </span>
                )}
              </div>

              {/* Work Email */}
              <div
                className={`form-field ${
                  errors.email ? "form-field--error" : ""
                }`}
              >
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
                  maxLength={150}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="form-field-error-text">
                    ⚠ {errors.email}
                  </span>
                )}
              </div>

              {/* Phone Number */}
              <div
                className={`form-field ${
                  errors.phone ? "form-field--error" : ""
                }`}
              >
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
                  maxLength={10}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <span id="phone-error" className="form-field-error-text">
                    ⚠ {errors.phone}
                  </span>
                )}
              </div>

              {/* Country */}
              <div
                className={`form-field ${
                  errors.country ? "form-field--error" : ""
                }`}
              >
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
                  maxLength={100}
                  aria-invalid={!!errors.country}
                  aria-describedby={
                    errors.country ? "country-error" : undefined
                  }
                />
                {errors.country && (
                  <span id="country-error" className="form-field-error-text">
                    ⚠ {errors.country}
                  </span>
                )}
              </div>
            </div>

            {/* Requirement */}
            <div className="form-section-divider">
              <p className="form-eyebrow">REQUIREMENT</p>
            </div>

            <div className="form-grid">
              {/* Requirement dropdown */}
              <div className="form-field">
                <label htmlFor="requirement">What are you looking for?</label>
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

              {/* Project Title */}
              <div
                className={`form-field ${
                  errors.projectTitle ? "form-field--error" : ""
                }`}
              >
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
                  maxLength={150}
                  aria-invalid={!!errors.projectTitle}
                  aria-describedby={
                    errors.projectTitle ? "projectTitle-error" : undefined
                  }
                />
                {errors.projectTitle && (
                  <span id="projectTitle-error" className="form-field-error-text">
                    ⚠ {errors.projectTitle}
                  </span>
                )}
              </div>

              {/* Description */}
              <div
                className={`form-field form-field--full ${
                  errors.description ? "form-field--error" : ""
                }`}
              >
                <label htmlFor="description">
                  Requirement Description <span>*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe the challenge, process or product idea"
                  value={formData.description}
                  onChange={handleChange}
                  maxLength={5000}
                  aria-invalid={!!errors.description}
                  aria-describedby={
                    errors.description ? "description-error" : undefined
                  }
                ></textarea>
                {errors.description && (
                  <span id="description-error" className="form-field-error-text">
                    ⚠ {errors.description}
                  </span>
                )}
              </div>

              {/* Technology Preferences */}
              <div className="form-field">
                <label htmlFor="technology">Technology Preferences</label>
                <input
                  id="technology"
                  name="technology"
                  type="text"
                  placeholder="Optional"
                  value={formData.technology}
                  onChange={handleChange}
                  maxLength={300}
                />
              </div>

              {/* Timeline */}
              <div className="form-field">
                <label htmlFor="timeline">Expected Timeline</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {timelineOptions.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Range */}
              <div className="form-field">
                <label htmlFor="budget">Budget Range</label>
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  placeholder="Optional"
                  value={formData.budget}
                  onChange={handleChange}
                  maxLength={100}
                />
              </div>

              {/* How did you hear about us */}
              <div className="form-field">
                <label htmlFor="source">How did you hear about us?</label>
                <input
                  id="source"
                  name="source"
                  type="text"
                  placeholder="Optional"
                  value={formData.source}
                  onChange={handleChange}
                  maxLength={200}
                />
              </div>

              {/* Attachment */}
              <div
                className={`form-field form-field--full ${
                  errors.attachment ? "form-field--error" : ""
                }`}
              >
                <label htmlFor="attachment">Attachment</label>
                <div className="file-input-wrapper">
                  <input
                    id="attachment"
                    name="attachment"
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt"
                    onChange={handleAttachmentChange}
                    aria-invalid={!!errors.attachment}
                    aria-describedby={
                      errors.attachment ? "attachment-error" : undefined
                    }
                  />
                </div>
                {errors.attachment && (
                  <span id="attachment-error" className="form-field-error-text">
                    ⚠ {errors.attachment}
                  </span>
                )}
              </div>
            </div>

            {/* Privacy Checkbox */}
            <div
              className={`privacy-row ${
                errors.privacy ? "privacy-row--error" : ""
              }`}
            >
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                checked={formData.privacy}
                onChange={handleChange}
                aria-invalid={!!errors.privacy}
                aria-describedby={errors.privacy ? "privacy-error" : undefined}
              />
              <label htmlFor="privacy">
                I agree to the Privacy Policy and Terms & Conditions.
              </label>
            </div>
            {errors.privacy && (
              <div
                id="privacy-error"
                className="form-field-error-text"
                style={{ marginBottom: "20px" }}
              >
                ⚠ {errors.privacy}
              </div>
            )}

            {/* Submit Error Banner if submission failed */}
            {submitError && (
              <div className="form-submit-error-banner" role="alert">
                <p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>{submitError}</span>
                </p>
                <button
                  type="button"
                  className="form-submit-error-retry"
                  onClick={handleSubmit}
                >
                  Retry
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              className="gradient-button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span
                    className="submit-btn-spinner"
                    aria-hidden="true"
                  ></span>
                  Submitting...
                </>
              ) : (
                <>
                  Submit Requirement
                  <span aria-hidden="true">→</span>
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* ================= SUCCESS MODAL ================= */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />

      {/* ================= PROJECT ESTIMATOR ================= */}
      <section className="estimator-section section-grid">
        <div className="contact-container">
          <Label>PROJECT ESTIMATOR</Label>

          <h2 className="estimator-title">Estimate Your Project</h2>

          <p className="estimator-description">
            Build an initial project profile in six steps. We share a detailed
            estimate after a scoping conversation.
          </p>

          <div className="estimator-card">
            {/* Progress */}
            <div className="estimator-progress">
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <div
                  key={step}
                  className={`progress-line ${
                    step <= estimatorStep ? "progress-line--active" : ""
                  }`}
                ></div>
              ))}
            </div>

            <div className="estimator-content">
              <p className="estimator-step">STEP {estimatorStep} OF 6</p>

              {estimatorStep === 1 && (
                <>
                  <h3>What are you building?</h3>

                  <div className="project-type-list">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        className={`project-type ${
                          projectType === type ? "project-type--active" : ""
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
                    We'll use this information to prepare the initial project
                    profile.
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