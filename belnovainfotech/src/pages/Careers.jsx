import React, { useState } from "react";
import {
  Code2,
  Server,
  Palette,
  Briefcase,
  MapPin,
  Clock,
  TrendingUp,
  ChevronDown,
  X,
  CheckCircle2,
} from "lucide-react";
import "./Careers.css";

const jobOpenings = [
  {
    id: 1,
    title: "Frontend Developer (React)",
    icon: Code2,
    department: "Engineering",
    location: "Hyderabad, India / Remote",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Build responsive, high-performance web applications using React, Redux, and modern JS tooling.",
    responsibilities: [
      "Develop and maintain reusable React components and design systems",
      "Collaborate with designers to translate mockups into pixel-accurate UI",
      "Optimize applications for speed, accessibility, and scalability",
      "Write clean, testable code and participate in code reviews",
    ],
    requirements: [
      "Strong proficiency in React, JavaScript (ES6+), and CSS",
      "Experience with state management (Redux, Zustand, or similar)",
      "Familiarity with REST/GraphQL APIs",
      "Eye for detail and a passion for clean UI",
    ],
    skills: ["React", "Redux", "JavaScript", "CSS3", "REST APIs"],
  },
  {
    id: 2,
    title: "Backend Developer (Node.js)",
    icon: Server,
    department: "Engineering",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Design and maintain scalable REST/GraphQL APIs, work with MongoDB/PostgreSQL, and own service architecture.",
    responsibilities: [
      "Design and build scalable backend services and APIs",
      "Own database schema design and query optimization",
      "Implement authentication, authorization, and security best practices",
      "Monitor system performance and resolve production issues",
    ],
    requirements: [
      "Strong experience with Node.js and Express/FastAPI-style frameworks",
      "Solid understanding of PostgreSQL or MongoDB",
      "Experience designing RESTful or GraphQL APIs",
      "Familiarity with Docker and CI/CD pipelines",
    ],
    skills: ["Node.js", "PostgreSQL", "MongoDB", "REST", "Docker"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    icon: Palette,
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "1-3 years",
    description:
      "Craft intuitive user interfaces and design systems for web and mobile products.",
    responsibilities: [
      "Design wireframes, prototypes, and high-fidelity mockups",
      "Build and maintain a consistent design system",
      "Conduct user research and usability testing",
      "Work closely with developers to ensure design fidelity",
    ],
    requirements: [
      "Proficiency in Figma or similar design tools",
      "Strong portfolio demonstrating UI/UX process",
      "Understanding of accessibility and responsive design principles",
      "Good communication and collaboration skills",
    ],
    skills: ["Figma", "Prototyping", "Design Systems", "User Research"],
  },
  {
    id: 4,
    title: "Business Development Executive",
    icon: Briefcase,
    department: "Sales",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "0-2 years",
    description:
      "Identify new business opportunities and build relationships with prospective clients.",
    responsibilities: [
      "Identify and qualify new business opportunities",
      "Build and maintain relationships with prospective clients",
      "Prepare proposals, pitches, and follow up on leads",
      "Collaborate with delivery teams to ensure client satisfaction",
    ],
    requirements: [
      "Excellent verbal and written communication skills",
      "Comfort with cold outreach and client meetings",
      "Basic understanding of the IT services industry",
      "Self-motivated with a target-driven mindset",
    ],
    skills: ["Communication", "CRM Tools", "Negotiation", "Lead Generation"],
  },
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
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

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
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
        {jobOpenings.map((job) => {
          const Icon = job.icon;
          const isExpanded = expandedId === job.id;
          return (
            <div className={`job-card ${isExpanded ? "expanded" : ""}`} key={job.id}>
              <div className="job-card-top">
                <div className="job-icon">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <div className="job-info">
                  <div className="job-title-row">
                    <h3>{job.title}</h3>
                    <span className="job-department">{job.department}</span>
                  </div>

                  <div className="job-meta-row">
                    <span className="job-meta-item">
                      <MapPin size={14} /> {job.location}
                    </span>
                    <span className="job-meta-item">
                      <Clock size={14} /> {job.type}
                    </span>
                    <span className="job-meta-item">
                      <TrendingUp size={14} /> {job.experience}
                    </span>
                  </div>

                  <p className="job-description">{job.description}</p>

                  <div className="job-skills">
                    {job.skills.map((skill, idx) => (
                      <span className="skill-tag" key={idx}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="job-actions">
                  <button className="apply-btn" onClick={() => handleApply(job)}>
                    Apply Now
                  </button>
                  <button
                    className="details-toggle-btn"
                    onClick={() => toggleExpand(job.id)}
                  >
                    Details
                    <ChevronDown
                      size={16}
                      className={`chevron ${isExpanded ? "rotated" : ""}`}
                    />
                  </button>
                </div>
              </div>

              {isExpanded && (
                <div className="job-card-details">
                  <div className="job-detail-block">
                    <h4>Responsibilities</h4>
                    <ul>
                      {job.responsibilities.map((item, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={15} className="li-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="job-detail-block">
                    <h4>Requirements</h4>
                    <ul>
                      {job.requirements.map((item, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={15} className="li-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedJob && (
        <div className="apply-modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="apply-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedJob(null)}>
              <X size={20} />
            </button>

            <div className="apply-modal-icon">
              <selectedJob.icon size={30} strokeWidth={1.8} />
            </div>

            <h2>Apply for {selectedJob.title}</h2>
            <p className="apply-modal-subtitle">
              {selectedJob.location} • {selectedJob.type}
            </p>

            {submitted ? (
              <div className="success-msg">
                <CheckCircle2 size={38} />
                <p>Application submitted successfully!</p>
                <span>Our HR team will reach out soon.</span>
              </div>
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