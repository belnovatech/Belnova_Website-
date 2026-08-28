import React from "react";
import "./FloatingControls.css";

export default function FloatingControls({ onLetsTalk }) {
  return (
    <div className="belNova-floating-bottom-bar">
      <div className="belNova-floating-preview-controls">
        {/* <button type="button" className="belNova-preview-ctrl-btn active">
          <span className="belNova-ctrl-icon">👁</span> Browse
        </button>
        <button type="button" className="belNova-preview-ctrl-btn">
          <span className="belNova-ctrl-icon">💬</span> Comment
        </button> */}
      </div>

      <button
        type="button"
        className="belNova-floating-chat-btn"
        onClick={onLetsTalk}
      >
        <span className="belNova-chat-bubble-icon">💬</span> Let's Talk
      </button>
    </div>
  );
}
