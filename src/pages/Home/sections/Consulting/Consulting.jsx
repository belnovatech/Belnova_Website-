import React, { useState } from "react";
import "./Consulting.css";
import { SectionLabel, GradientButton } from "../../components/UI";

const consultingOptions = [
  ["Buy", "Best for standard processes."],
  ["Customize", "Best when existing software almost fits."],
  ["Build", "Best for unique workflows and competitive products."],
];

export default function Consulting({ onHelpDecide }) {
  const [selectedOption, setSelectedOption] = useState("Build");

  return (
    <section className="belNova-consulting-section" id="consulting">
      <div className="belNova-consulting-container">
        <SectionLabel>CONSULTING</SectionLabel>
        <h2 className="belNova-consulting-title">Build. Buy. Or Customize?</h2>

        <p className="belNova-consulting-description">
          Not every problem needs custom software. We help decide before
          committing budget.
        </p>

        <div className="belNova-consulting-grid">
          {consultingOptions.map(([title, description]) => (
            <article
              key={title}
              className={"belNova-consulting-card" + (selectedOption === title ? " selected" : "")}
              onClick={() => setSelectedOption(title)}
              role="button"
              tabIndex={0}
            >
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="belNova-consulting-cta-wrap">
          <GradientButton onClick={onHelpDecide}>Help Me Decide</GradientButton>
        </div>
      </div>
    </section>
  );
}
