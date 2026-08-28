import React from "react";
import { Link } from "react-router-dom";
import "./UI.css";

export function SectionLabel({ children }) {
  return (
    <div className="belNova-section-label">
      <span />
      {children}
    </div>
  );
}

export function GradientButton({
  children,
  type = "button",
  to,
  onClick,
  disabled,
  className = "",
}) {
  if (to) {
    return (
      <Link to={to} className={`belNova-gradient-btn ${className}`}>
        {children} <span>→</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`belNova-gradient-btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children} <span>→</span>
    </button>
  );
}

export function OutlineButton({
  children,
  type = "button",
  onClick,
  disabled,
  className = "",
}) {
  return (
    <button
      type={type}
      className={`belNova-outline-btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children} <span>→</span>
    </button>
  );
}

export function TagList({ items, className = "" }) {
  return (
    <div className={`belNova-tag-list ${className}`}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
