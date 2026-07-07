import React, { useState } from "react";
import "./Careers.css";

const jobOpenings = [
  {
    id: 1,
    title: "Frontend Developer (React)",
    location: "Hyderabad, India / Remote",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Build responsive, high-performance web applications using React, Redux, and modern JS tooling.",
  },
  {
    id: 2,
    title: "Backend Developer (Node.js)",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Design and maintain scalable REST/GraphQL APIs, work with MongoDB/PostgreSQL, and own service architecture.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full-time",
    experience: "1-3 years",
    description:
      "Craft intuitive user interfaces and design systems for web and mobile products.",
  },
  {
    id: 4,
    title: "Business Development Executive",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "0-2 years",
    description:
      "Identify new business opportunities and build relationships with prospective clients.",
  },
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resumeLink: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔥 Replace this with your real API endpoint
    try {
      const res = await fetch("https://your-backend.com/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobTitle: selectedJob?.title,
          ...formData,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", resumeLink: "", message: "" });
      }
    } catch (err) {
      console.error("Application submission failed:", err);
    }
  };

  return (
    <section id="careers" className="careers-page">
      <div className="careers-header">
        <h1>Careers at Belnova</h1>
        <p>Join a team that's building meaningful technology for real businesses.</p>
      </div>

      <div className="job-list">
        {jobOpenings.map((job) => (
          <div className="job-card" key={job.id}>
            <div className="job-info">
              <h3>{job.title}</h3>
              <span className="job-meta">
                {job.location} • {job.type} • {job.experience}
              </span>
              <p>{job.description}</p>
            </div>
            <button className="apply-btn" onClick={() => handleApply(job)}>
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div className="apply-modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="apply-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedJob(null)}>
              ✕
            </button>
            <h2>Apply for {selectedJob.title}</h2>

            {submitted ? (
              <p className="success-msg">
                ✅ Application submitted successfully! Our HR team will reach out soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="apply-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="url"
                  name="resumeLink"
                  placeholder="Resume Link (Google Drive / LinkedIn)"
                  value={formData.resumeLink}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Why do you want to join us?"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                />
                <button type="submit">Submit Application</button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Careers;