import React, { useEffect, useRef } from "react";
import "./SuccessModal.css";

export default function SuccessModal({ isOpen, onClose }) {
  const modalRef = useRef(null);
  const doneButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Focus the 'Done' button when modal opens
    const timer = setTimeout(() => {
      doneButtonRef.current?.focus();
    }, 100);

    // Lock body scroll when modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Handle Escape key to close modal
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="success-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
      aria-describedby="success-modal-description"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="success-modal-card" ref={modalRef}>
        {/* Glowing Aura Effect */}
        <div className="success-modal-glow" aria-hidden="true"></div>

        {/* Animated Checkmark Icon */}
        <div className="success-icon-wrapper" aria-hidden="true">
          <svg
            className="success-checkmark-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="success-checkmark-circle"
              cx="26"
              cy="26"
              r="24"
              fill="none"
            />
            <path
              className="success-checkmark-check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        {/* Content */}
        <h2 id="success-modal-title" className="success-modal-title">
          Requirement Submitted Successfully!
        </h2>

        <p id="success-modal-description" className="success-modal-description">
          Thank you for reaching out to Belnova Tech. We’ve received your
          requirement and our team will review it and get back to you soon.
        </p>

        {/* Action Button */}
        <div className="success-modal-actions">
          <button
            type="button"
            ref={doneButtonRef}
            className="gradient-button success-done-btn"
            onClick={onClose}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
