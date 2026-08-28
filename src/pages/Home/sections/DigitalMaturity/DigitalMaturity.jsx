import React, { useState } from "react";
import "./DigitalMaturity.css";
import { SectionLabel, GradientButton } from "../../components/UI";

const maturityQuestions = [
  {
    question: "How do you currently manage operations?",
    options: [
      "Paper",
      "Excel",
      "Multiple applications",
      "ERP",
      "Custom software",
    ],
  },
  {
    question: "How automated are your workflows?",
    options: ["Low", "Medium", "High"],
  },
  {
    question: "How centralized is your data?",
    options: ["Low", "Medium", "High"],
  },
  {
    question: "How quickly can you generate reports?",
    options: ["Manual", "Semi-automated", "Real-time"],
  },
  {
    question: "How connected are your systems to each other?",
    options: ["Not connected", "Partially connected", "Fully integrated"],
  },
];

export default function DigitalMaturity({ onDiscussNextSteps }) {
  const [answers, setAnswers] = useState({
    0: "ERP",
    1: "High",
    2: "High",
  });

  const selectOption = (qIdx, opt) => {
    setAnswers((prev) => ({ ...prev, [qIdx]: opt }));
  };

  const answeredCount = Object.keys(answers).length;
  const progressPercent = (answeredCount / maturityQuestions.length) * 100;

  return (
    <section className="belNova-dm-section" id="digital-maturity">
      <div className="belNova-dm-container">
        <SectionLabel>DIGITAL MATURITY ASSESSMENT</SectionLabel>
        <h2 className="belNova-dm-title">
          How Digitally Ready Is Your
          <br />
          Business?
        </h2>

        <p className="belNova-dm-description">
          Five questions to place your operations on a digital maturity scale —
          and see practical next steps.
        </p>

        <div className="belNova-dm-layout">
          <div className="belNova-dm-questions-card">
            <div className="belNova-dm-progress">
              <span style={{ width: `${progressPercent}%` }} />
            </div>

            {maturityQuestions.map((item, qIndex) => (
              <div className="belNova-dm-question-item" key={item.question}>
                <h3>
                  {qIndex + 1}. {item.question}
                </h3>
                <div className="belNova-dm-options">
                  {item.options.map((option) => {
                    const isSelected = answers[qIndex] === option;
                    return (
                      <button
                        type="button"
                        key={option}
                        className={isSelected ? "selected" : ""}
                        onClick={() => selectOption(qIndex, option)}
                      >
                        {isSelected && <span className="check-icon">✓ </span>}
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="belNova-dm-profile-card">
            <small>DIGITAL MATURITY PROFILE</small>

            {answeredCount < 5 ? (
              <p>
                Answer all 5 questions to see your maturity level and
                recommended next steps.
              </p>
            ) : (
              <>
                <h3>Digital Foundation Ready</h3>
                <p>
                  Your organization has started its digital journey. The next
                  step is to centralize information, automate repetitive
                  workflows and improve real-time reporting.
                </p>
                <GradientButton onClick={onDiscussNextSteps}>
                  Discuss Next Steps
                </GradientButton>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
