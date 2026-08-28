import React from "react";
import "./FinalCta.css";
import { GradientButton, OutlineButton } from "../../components/UI";

export default function FinalCta({ onStartProject, onTalkToTeam }) {
  return (
    <section className="belNova-final-cta-section">
      <div className="belNova-final-cta-symbol">⬡</div>

      <h2 className="belNova-final-cta-title">
        Your Next Big Idea{" "}
        <span className="belNova-final-cta-gradient">Starts Here.</span>
      </h2>

      <p className="belNova-final-cta-desc">
        Let's turn your business challenge into a technology solution.
      </p>

      <div className="belNova-final-cta-buttons">
        <GradientButton onClick={onStartProject}>Start a Project</GradientButton>
        <OutlineButton onClick={onTalkToTeam}>Talk to Our Team</OutlineButton>
      </div>
    </section>
  );
}
