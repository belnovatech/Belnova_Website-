import React from "react";
// @ts-ignore
import "./Hero.css";
import { useState, useEffect } from "react";
import logo from "../assets/BELNOVA LOGO.png";
// import Hero from "./components/hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("industries");
  const icCardsRef = React.useRef([]);

  const industries = [
    { icon: "🏥", title: "Healthcare & Life Sciences", desc: "Transforming patient care with AI-driven diagnostics, telemedicine platforms, and seamless EHR integrations.", tags: ["HealthTech", "AI Diagnostics", "EHR"], gradient: "linear-gradient(135deg, #a855f7, #ec4899)" },
    { icon: "🏦", title: "Banking & Fintech", desc: "Secure, scalable digital banking solutions, payment gateways, fraud detection, and regulatory compliance systems.", tags: ["Payments", "Compliance", "Fraud AI"], gradient: "linear-gradient(135deg, #0ea5e9, #6366f1)" },
    { icon: "🛒", title: "Retail & E-Commerce", desc: "Omnichannel experiences, recommendation engines, inventory automation, and real-time analytics dashboards.", tags: ["Omnichannel", "Recommendations", "Analytics"], gradient: "linear-gradient(135deg, #f97316, #ec4899)" },
    { icon: "🎓", title: "Education & EdTech", desc: "Adaptive learning platforms, LMS integrations, AI tutoring, and immersive virtual classrooms at scale.", tags: ["LMS", "AI Tutoring", "Virtual Class"], gradient: "linear-gradient(135deg, #10b981, #0ea5e9)" },
    { icon: "🏭", title: "Manufacturing & Logistics", desc: "Smart factory automation, supply chain visibility, IoT-connected operations, and predictive maintenance.", tags: ["IoT", "Supply Chain", "Predictive AI"], gradient: "linear-gradient(135deg, #7c3aed, #f97316)" },
    { icon: "🚀", title: "Startups & SaaS", desc: "From MVP to scale — multi-tenant SaaS, rapid prototyping, cloud-native infra, and growth engineering.", tags: ["MVP", "SaaS", "Cloud Native"], gradient: "linear-gradient(135deg, #ec4899, #a855f7)" },
  ];

  const openings = [
    { role: "Senior React Developer", type: "Full-Time", location: "Hyderabad / Remote", dept: "Engineering", color: "#a855f7" },
    { role: "AI/ML Engineer", type: "Full-Time", location: "Hyderabad", dept: "AI & Data", color: "#ec4899" },
    { role: "UI/UX Designer", type: "Full-Time", location: "Hyderabad / Remote", dept: "Design", color: "#f97316" },
    { role: "DevOps Engineer", type: "Full-Time", location: "Remote", dept: "Cloud & Infra", color: "#0ea5e9" },
    { role: "Node.js Backend Developer", type: "Full-Time", location: "Hyderabad", dept: "Engineering", color: "#10b981" },
    { role: "Business Development Executive", type: "Full-Time", location: "Hyderabad", dept: "Sales", color: "#6366f1" },
  ];

  const perks = [
    { icon: "🌍", label: "Remote Friendly" },
    { icon: "📈", label: "Fast Growth" },
    { icon: "🎓", label: "L&D Budget" },
    { icon: "💰", label: "Competitive Pay" },
    { icon: "🏖️", label: "Flexible Leaves" },
    { icon: "🤝", label: "Inclusive Culture" },
  ];

  useEffect(() => {
    const openCareers = () => {
      setActiveTab("careers");
    };

    window.addEventListener("openCareers", openCareers);

    return () => {
      window.removeEventListener("openCareers", openCareers);
    };
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("ic-visible");
        });
      },
      { threshold: 0.12 }
    );
    icCardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  React.useEffect(() => {
    // Delay to ensure DOM is fully painted
    const timer = setTimeout(() => {
      const track = document.getElementById('whyTrack');
      const prev = document.getElementById('whyPrev');
      const next = document.getElementById('whyNext');
      if (!track || !prev || !next) return;

      const outer = document.querySelector('.why-track-outer');
      const slides = Array.from(track.querySelectorAll('.why-slide'));
      const dots = Array.from(document.querySelectorAll('.wdot'));
      const total = slides.length;
      let current = 0;

      const applyWidths = () => {
        const w = outer.getBoundingClientRect().width;
        if (!w) return;
        track.style.width = `${w * total}px`;
        track.style.display = 'flex';
        track.style.flexWrap = 'nowrap';
        slides.forEach(s => {
          s.style.width = `${w}px`;
          s.style.minWidth = `${w}px`;
          s.style.maxWidth = `${w}px`;
          s.style.flexShrink = '0';
          s.style.display = 'flex';
          s.style.flexDirection = 'row';
          s.style.alignItems = 'center';
        });
        track.style.transition = 'none';
        track.style.transform = `translateX(-${current * w}px)`;
      };

      applyWidths();
      window.addEventListener('resize', applyWidths);

      const goTo = (index) => {
        current = (index + total) % total;
        const w = outer.getBoundingClientRect().width;
        track.style.transition = 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)';
        track.style.transform = `translateX(-${current * w}px)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
      };

      const handlePrev = () => goTo(current - 1);
      const handleNext = () => goTo(current + 1);

      prev.addEventListener('click', handlePrev);
      next.addEventListener('click', handleNext);
      dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

      const auto = setInterval(() => goTo(current + 1), 4000);

      // Store cleanup on track element itself
      track._cleanup = () => {
        clearInterval(auto);
        prev.removeEventListener('click', handlePrev);
        next.removeEventListener('click', handleNext);
        window.removeEventListener('resize', applyWidths);
      };
    }, 300); // 300ms delay = DOM fully painted

    return () => {
      clearTimeout(timer);
      const track = document.getElementById('whyTrack');
      if (track && track._cleanup) track._cleanup();
    };
  }, []);

  return (
    <>
      <section className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/banner-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>WE BUILD DIGITAL PRODUCTS THAT SCALE</h1>

          <h2>
            Cutting-Edge Product Engineering Solutions
          </h2>
          <h4>Belnova Tech Private Limited — Full-stack technology partner for startups and enterprises. Web, Mobile, AI, Cloud.</h4>

<button
  className="cta-btn"
  onClick={() => navigate("/contact")}
>
  LET'S CONNECT
</button>
        </div>
      </section>
      {/* --- ABOUT US SECTION --- */}
<section id="about" className="bn-about">

    <div className="bn-circle bn-circle1"></div>
    <div className="bn-circle bn-circle2"></div>

    <div className="bn-wrapper">

        <div className="bn-left">

            <div className="bn-logo-column">
                <img src={logo} alt="" className="bn-logo"/>
                <div className="bn-line"></div>
            </div>

            <div className="bn-card-area">

                <div className="bn-card bn-card1">
                    Application Development
                </div>

                <div className="bn-card bn-card2">
                    AI & Machine Learning
                </div>

                <div className="bn-card bn-card3">
                    Cloud & DevOps
                </div>

                <div className="bn-card bn-card4">
                    UI/UX Design
                </div>

            </div>

        </div>

        <div className="bn-right">

            <h2 className="bn-outline">
                ABOUT US
            </h2>

            <h3 className="bn-title">
                Who we are
            </h3>

            <p>
                <strong>Belnova Tech</strong> is your dedicated partner in digital transformation,
                accelerating technology adoption and driving impactful change through advanced automation
                and cutting-edge platforms.
            </p>

            <p>
                Specializing in Cloud, AI and Mobile technologies,
                we empower organizations to achieve unparalleled
                efficiency and visibility.
            </p>

            <button
                className="bn-btn"
                onClick={() => navigate("/about")}
            >
                READ MORE ABOUT US
            </button>

        </div>

    </div>

</section>
      {/* --- HOW WE WORK SECTION --- */}
      <section id="services" className="stacking-section">
        <div className="sticky-video-wrapper">
          <video autoPlay loop muted playsInline className="stack-bg-video">
            <source src="/banner-video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="stack-cards-container">
          <ul className="stack-cards-list">
            <li className="stack-card-item card-1">
              <div className="card-content">
                <h2>Artificial Intelligence</h2>
                <p><strong>Belnova Tech</strong> specializes in providing cutting-edge AI services tailored to meet unique needs. Our AI solutions empower providers with advanced analytics and decision-making tools, enhancing efficiency through innovative technology.</p>
              </div>
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80" alt="Artificial Intelligence" />
              </div>
            </li>

            <li className="stack-card-item card-2">
              <div className="card-content">
                <h2>Digital Experience</h2>
                <p>Our advanced digital solutions empower businesses to enhance customer experience, streamline operations, and improve overall efficiency through innovative platforms designed for the modern era.</p>
              </div>
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80" alt="Digital Experience" />
              </div>
            </li>

            <li className="stack-card-item card-3">
              <div className="card-content">
                <h2>Advisory Services</h2>
                <p>Our seasoned professionals provide strategic guidance and actionable insights to navigate the complexities of digital transformation, ensuring your organization stays ahead of the curve.</p>
              </div>
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" alt="Advisory Services" />
              </div>
            </li>

            <li className="stack-card-item card-4">
              <div className="card-content">
                <h2>IT Lifecycle</h2>
                <p>We accelerate your digital transformation with end-to-end IT lifecycle services. From innovative application development to rigorous user testing and seamless deployment.</p>
              </div>
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" alt="IT Lifecycle" />
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* --- WHY BELNOVA SLIDING SECTION --- */}
      {/* --- WHY BELNOVA SLIDING SECTION --- */}
      <section id="why" className="why-belnova-section">
        <div className="why-bg-blur why-blur-1"></div>
        <div className="why-bg-blur why-blur-2"></div>

        <div className="why-header">
          <span className="why-tag">WHY BELNOVA</span>
          <h2 className="why-title">Our Clients' <span className="why-title-grad">Voices</span></h2>
          <p className="why-sub">What our clients say about working with us — real words, real results.</p>
        </div>

        <div className="why-carousel-wrapper">
          {/* LEFT ARROW */}
          <button className="why-arrow why-arrow-left" id="whyPrev">&#8592;</button>

          {/* SLIDES */}
          <div className="why-track-outer">
            <div className="why-track" id="whyTrack">

              {/* SLIDE 1 */}
              <div className="why-slide">
                <div className="why-img-frame">
                  <div className="why-img-arc">
                    <div className="why-img-inner" style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}>
                      <span className="why-img-icon">⚡</span>
                    </div>
                  </div>
                  <div className="why-img-badge">Agile Delivery</div>
                </div>
                <div className="why-text-card">
                  <h3 className="why-card-title">Agile Development</h3>
                  <p className="why-card-quote">
                    "We deliver in sprints — every week you see real progress.
                    Full transparency, no surprises, rapid iteration.
                    Our clients always know exactly where their project stands."
                  </p>
                  <div className="why-card-author">— Belnova Engineering Team</div>
                  <div className="why-quote-marks">
                    <span className="qm qm-outline">&#8221;</span>
                    <span className="qm qm-solid">&#8221;</span>
                  </div>
                </div>
              </div>

              {/* SLIDE 2 */}
              <div className="why-slide">
                <div className="why-img-frame">
                  <div className="why-img-arc">
                    <div className="why-img-inner" style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}>
                      <span className="why-img-icon">🎯</span>
                    </div>
                  </div>
                  <div className="why-img-badge">Dedicated PMs</div>
                </div>
                <div className="why-text-card">
                  <h3 className="why-card-title">One Point of Contact</h3>
                  <p className="why-card-quote">
                    "Every project gets a dedicated project manager — your single
                    point of contact for timelines, budgets and decisions.
                    No chasing multiple people. One person owns your success."
                  </p>
                  <div className="why-card-author">— Belnova Project Management</div>
                  <div className="why-quote-marks">
                    <span className="qm qm-outline">&#8221;</span>
                    <span className="qm qm-solid">&#8221;</span>
                  </div>
                </div>
              </div>

              {/* SLIDE 3 */}
              <div className="why-slide">
                <div className="why-img-frame">
                  <div className="why-img-arc">
                    <div className="why-img-inner" style={{ background: "linear-gradient(135deg, #10b981, #0ea5e9)" }}>
                      <span className="why-img-icon">🛡️</span>
                    </div>
                  </div>
                  <div className="why-img-badge">Post-Launch</div>
                </div>
                <div className="why-text-card">
                  <h3 className="why-card-title">90-Day Free Support</h3>
                  <p className="why-card-quote">
                    "We don't disappear after go-live. Every project comes with
                    90 days of free post-launch warranty. Bugs fixed, issues resolved —
                    we stay until your product runs perfectly."
                  </p>
                  <div className="why-card-author">— Belnova Support Team</div>
                  <div className="why-quote-marks">
                    <span className="qm qm-outline">&#8221;</span>
                    <span className="qm qm-solid">&#8221;</span>
                  </div>
                </div>
              </div>

              {/* SLIDE 4 */}
              <div className="why-slide">
                <div className="why-img-frame">
                  <div className="why-img-arc">
                    <div className="why-img-inner" style={{ background: "linear-gradient(135deg, #f97316, #ec4899)" }}>
                      <span className="why-img-icon">💎</span>
                    </div>
                  </div>
                  <div className="why-img-badge">Transparent</div>
                </div>
                <div className="why-text-card">
                  <h3 className="why-card-title">Zero Hidden Costs</h3>
                  <p className="why-card-quote">
                    "Fixed-price or time-and-material — you choose.
                    We sign off on pricing before writing a single line of code.
                    No surprise invoices, no scope creep without your approval."
                  </p>
                  <div className="why-card-author">— Belnova Business Team</div>
                  <div className="why-quote-marks">
                    <span className="qm qm-outline">&#8221;</span>
                    <span className="qm qm-solid">&#8221;</span>
                  </div>
                </div>
              </div>

              {/* SLIDE 5 */}
              <div className="why-slide">
                <div className="why-img-frame">
                  <div className="why-img-arc">
                    <div className="why-img-inner" style={{ background: "linear-gradient(135deg, #7c3aed, #f97316)" }}>
                      <span className="why-img-icon">🚀</span>
                    </div>
                  </div>
                  <div className="why-img-badge">Fast Delivery</div>
                </div>
                <div className="why-text-card">
                  <h3 className="why-card-title">Speed Without Compromise</h3>
                  <p className="why-card-quote">
                    "We ship MVPs in weeks, not months. Our battle-tested tech stack,
                    reusable components and experienced team means faster delivery
                    without cutting corners on quality or security."
                  </p>
                  <div className="why-card-author">— Belnova Tech Team</div>
                  <div className="why-quote-marks">
                    <span className="qm qm-outline">&#8221;</span>
                    <span className="qm qm-solid">&#8221;</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT ARROW */}
          <button className="why-arrow why-arrow-right" id="whyNext">&#8594;</button>
        </div>

        {/* Dots */}
        <div className="why-dots" id="whyDots">
          <span className="wdot active"></span>
          <span className="wdot"></span>
          <span className="wdot"></span>
          <span className="wdot"></span>
          <span className="wdot"></span>
        </div>
      </section>
      {/* ══════════════════════════════════════════════════
    INDUSTRIES & CAREERS SECTION
══════════════════════════════════════════════════ */}
      <section id="industries" className="ic-section">

        {/* Ambient blobs */}
        <div className="ic-blob ic-blob-1" />
        <div className="ic-blob ic-blob-2" />
        <div className="ic-blob ic-blob-3" />

        {/* Floating particles */}
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="ic-particle"
            style={{
              left: `${5 + (i * 17) % 90}%`,
              top: `${5 + (i * 23) % 90}%`,
              animationDelay: `${(i * 0.9) % 8}s`,
              animationDuration: `${6 + (i % 6)}s`,
              width: `${2 + (i % 4)}px`,
              height: `${2 + (i % 4)}px`,
            }}
          />
        ))}

        {/* Section Header */}
        <div className="ic-header">
          <span className="ic-eyebrow">WHAT WE DO &amp; WHO WE HIRE</span>
          <h2 className="ic-main-title">
            Industries We <span className="ic-grad">Serve</span> &amp; Careers We <span className="ic-grad">Build</span>
          </h2>
          <p className="ic-sub">
            Powering digital transformation across sectors — and growing a team that loves what they build.
          </p>
          <div className="ic-tabs">
            <button
              className={`ic-tab ${activeTab === "industries" ? "ic-tab-active" : ""}`}
              onClick={() => setActiveTab("industries")}
            >
              🏢 Industries
            </button>
            <button
              className={`ic-tab ${activeTab === "careers" ? "ic-tab-active" : ""}`}
              onClick={() => setActiveTab("careers")}
            >
              💼 Careers
            </button>
          </div>
        </div>

        {/* ── INDUSTRIES PANEL ── */}
        {activeTab === "industries" && (
          <div className="ic-industries-grid">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="ic-ind-card ic-fade-up"
                ref={(el) => (icCardsRef.current[i] = el)}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="ic-ind-icon-wrap" style={{ background: ind.gradient }}>
                  <span className="ic-ind-icon">{ind.icon}</span>
                </div>
                <div className="ic-ind-glow" style={{ background: ind.gradient }} />
                <h3 className="ic-ind-title">{ind.title}</h3>
                <p className="ic-ind-desc">{ind.desc}</p>
                <div className="ic-ind-tags">
                  {ind.tags.map((tag, t) => (
                    <span key={t} className="ic-tag">{tag}</span>
                  ))}
                </div>
                <div className="ic-ind-arrow">→</div>
              </div>
            ))}
          </div>
        )}

        {/* ── CAREERS PANEL ── */}
        {activeTab === "careers" && (
          <div className="ic-careers-wrap">

            {/* Perks bar */}
            <div className="ic-perks-row">
              {perks.map((p, i) => (
                <div key={i} className="ic-perk">
                  <span className="ic-perk-icon">{p.icon}</span>
                  <span className="ic-perk-label">{p.label}</span>
                </div>
              ))}
            </div>

            {/* Job listings */}
            <div className="ic-jobs-list">
              {openings.map((job, i) => (
                <div
                  key={i}
                  className="ic-job-row ic-fade-up"
                  ref={(el) => (icCardsRef.current[i] = el)}
                  style={{ transitionDelay: `${i * 0.07}s`, "--job-color": job.color }}
                >
                  <div className="ic-job-accent" style={{ background: job.color }} />
                  <div className="ic-job-info">
                    <span className="ic-job-dept" style={{ color: job.color }}>{job.dept}</span>
                    <h3 className="ic-job-role">{job.role}</h3>
                    <div className="ic-job-meta">
                      <span>📍 {job.location}</span>
                      <span>⏱ {job.type}</span>
                    </div>
                  </div>
                  {/* <button className="ic-apply-btn" style={{ "--btn-color": job.color }}>
              Apply Now →
            </button> */}
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="ic-career-cta">
              <div className="ic-cta-text">
                <h3>Don't see your role?</h3>
                <p>We're always looking for exceptional talent.</p>
              </div>
              {/* <button className="ic-cta-btn">Send Open Application →</button> */}
            </div>

          </div>
        )}

      </section>

    </>
  );
};

export default Hero;