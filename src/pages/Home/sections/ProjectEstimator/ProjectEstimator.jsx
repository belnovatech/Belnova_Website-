import React, { useState } from "react";
import "./ProjectEstimator.css";
import { SectionLabel, GradientButton } from "../../components/UI";

export default function ProjectEstimator({ onRequestEstimate }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    type: "Web Application",
    complexity: "Enterprise",
    platform: "Web + Mobile",
    timeline: "3–4 months",
    team: "Complete Team",
  });

  const setAnswer = (k, v) => setAnswers((prev) => ({ ...prev, [k]: v }));

  return (
    <section className="belNova-estimator-section" id="estimator">
      <div className="belNova-estimator-container">
        <SectionLabel>PROJECT ESTIMATOR</SectionLabel>
        <h2 className="belNova-estimator-title">Estimate Your Project</h2>

        <p className="belNova-estimator-description">
          Build an initial project profile in six steps. We share a detailed
          estimate after a scoping conversation.
        </p>

        <div className="belNova-estimator-panel">
          <div className="belNova-estimator-progress-bar">
            {[1, 2, 3, 4, 5, 6].map((s) => (
              <span key={s} className={s <= step ? "complete" : ""} />
            ))}
          </div>

          {step === 1 && (
            <>
              <small>STEP 1 OF 6</small>
              <h3>What are you building?</h3>
              <div className="belNova-estimator-choices">
                {[
                  "Website",
                  "Web Application",
                  "Mobile App",
                  "SaaS",
                  "Enterprise Application",
                  "AI Solution",
                  "Other",
                ].map((type) => (
                  <button
                    type="button"
                    key={type}
                    className={answers.type === type ? "selected" : ""}
                    onClick={() => setAnswer("type", type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <small>STEP 2 OF 6</small>
              <h3>Complexity</h3>
              <div className="belNova-estimator-choices">
                {["Basic", "Medium", "Advanced", "Enterprise"].map((c) => (
                  <button
                    type="button"
                    key={c}
                    className={answers.complexity === c ? "selected" : ""}
                    onClick={() => setAnswer("complexity", c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <small>STEP 3 OF 6</small>
              <h3>Platforms</h3>
              <div className="belNova-estimator-choices">
                {["Web", "Android", "iOS", "Web + Mobile"].map((p) => (
                  <button
                    type="button"
                    key={p}
                    className={answers.platform === p ? "selected" : ""}
                    onClick={() => setAnswer("platform", p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <small>STEP 4 OF 6</small>
              <h3>What is your expected timeline?</h3>
              <div className="belNova-estimator-choices">
                {["1–2 months", "3–4 months", "5–6 months", "Flexible"].map((t) => (
                  <button
                    type="button"
                    key={t}
                    className={answers.timeline === t ? "selected" : ""}
                    onClick={() => setAnswer("timeline", t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 5 && (
            <>
              <small>STEP 5 OF 6</small>
              <h3>What type of team do you need?</h3>
              <div className="belNova-estimator-choices">
                {[
                  "Complete Team",
                  "Developers",
                  "Design & Development",
                  "Consulting",
                ].map((tm) => (
                  <button
                    type="button"
                    key={tm}
                    className={answers.team === tm ? "selected" : ""}
                    onClick={() => setAnswer("team", tm)}
                  >
                    {tm}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 6 && (
            <>
              <small>STEP 6 OF 6</small>
              <h3>Your initial project profile is ready.</h3>
              <div className="belNova-estimator-summary">
                <p>Project type: <strong>{answers.type || "Not selected"}</strong></p>
                <p>Complexity: <strong>{answers.complexity || "Not selected"}</strong></p>
                <p>Platforms: <strong>{answers.platform || "Not selected"}</strong></p>
                <p>Timeline: <strong>{answers.timeline || "Not selected"}</strong></p>
                <p>Team: <strong>{answers.team || "Not selected"}</strong></p>
              </div>
              <div style={{ marginTop: "24px" }}>
                <GradientButton onClick={onRequestEstimate}>
                  Request Detailed Estimate
                </GradientButton>
              </div>
            </>
          )}

          <div className="belNova-estimator-nav-actions">
            {step > 1 && (
              <button
                type="button"
                className="belNova-estimator-back-btn"
                onClick={() => setStep((s) => s - 1)}
              >
                ← Back
              </button>
            )}
            {step < 6 && (
              <button
                type="button"
                className="belNova-estimator-next-btn"
                onClick={() => setStep((s) => s + 1)}
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
