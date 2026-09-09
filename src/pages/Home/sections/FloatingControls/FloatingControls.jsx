import React from "react";
import "./FloatingControls.css";
import { useNavigate } from "react-router-dom";

export default function FloatingControls() {
  const navigate = useNavigate();

  return (
    <div className="belNova-floating-bottom-bar">
      <div className="belNova-floating-preview-controls">
        {/* Preview controls */}
      </div>

      <button
        type="button"
        className="belNova-floating-chat-btn"
        onClick={() => navigate("/contact")}
      >
        <span className="belNova-chat-bubble-icon">💬</span>
        Let's Talk
      </button>
    </div>
  );
}