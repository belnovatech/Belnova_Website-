import React from "react";
import "./About.css";
import logo from "../assets/BELNOVA LOGO.png";

function AboutUs() {
    return (
        <div className="about-page">

            {/* HEADER */}
            <div className="about-header">
                <img src={logo} alt="Belnova Logo" className="about-logo" />
                <button className="about-btn">LET'S CONNECT</button>
            </div>

            {/* TOP TITLE */}
            <div className="about-top">
                <h1>About HealthfirstTech</h1>
                <p>
                    Bringing a wealth of experience and driving execution to build our
                    category-leading technology business.
                </p>
            </div>

            {/* MAIN SECTION */}
            <div className="about-main">

                {/* BACKGROUND TEXT */}
                <h1 className="big-outline">5 YEARS</h1>

                {/* LEFT CONTENT */}
                <div className="about-left">
                    <h2>5 years of leading tech</h2>
                    <p>
                        Healthfirst Tech empower healthcare and insurance businesses with
                        innovative digital solutions that enhance operational efficiency,
                        improve patient outcomes, and streamline processes through
                        cutting-edge technology.
                    </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="about-right">

                    {/* TOP IMAGE */}
                    <div className="card-top">
                        <img
                            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
                            alt="Team meeting"
                        />
                    </div>

                    {/* 5+ TEXT */}
                    <div className="years-inline">
                        <h3>5+</h3>
                        <p>Years Established for</p>
                    </div>

                    <div className="bottom-row">
                        <div className="card-bottom">
                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                                alt="Office work"
                            />
                        </div>

                        <div className="card-stat">
                            <h3>30+</h3>
                            <p>Satisfied Clients</p>
                        </div>
                    </div>

                </div>

            </div>

            {/* 🔥 BOTTOM SECTION */}
            <div className="about-bottom">
                <div className="bottom-container">

                    {/* LEFT IMAGE */}
                    <div className="bottom-image">
                        <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                            alt="Team group collaboration"
                        />
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="bottom-content">
                        <h2>Enjoy working at HealthfirstTech together!</h2>
                        <p>
                            When it comes to different perks and benefits for employees,
                            PiTangent stands tall above all. We have everything that an
                            employee seeks while joining a company.
                        </p>
                    </div>

                </div>
            </div>



            {/* TEAM SECTION */}
            <div className="team-section">

                <h1 className="team-title">The People behind the Magic</h1>
                <p className="team-subtitle">
                    A passionate team of engineers mind.
                </p>

                <div className="team-grid">

                    {/* CARD 1 */}
                    <div className="team-card">
                        <img
                            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
                            alt="Team member"
                        />

                        <div className="team-overlay">
                            <h3>Ajay Kumar</h3>
                            <p>Founder & CEO</p>

                            <div className="team-icons">
                                <span>in</span>
                                <span>✉</span>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2 (EXPANDED STYLE) */}
                    <div className="team-card detail-card">
                        <img
                            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
                            alt="Team member"
                        />

                        <div className="team-overlay full">
                            <h3>Ajay Kumar</h3>
                            <p>Founder & CEO</p>

                            <div className="team-icons">
                                <span>in</span>
                                <span>✉</span>
                            </div>

                            <p className="team-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolores similique temporibus pariatur, assumenda officia
                                adipisci eos maiores ratione possimus nemo recusandae nisi
                                consequuntur.
                            </p>
                        </div>
                    </div>

                </div>
            </div>


            {/* ===== NEW GROWING TEAM SECTION ===== */}
<div className="growing-section">

  <div className="growing-left">
    <div className="bg-box blue"></div>
    <div className="bg-box peach"></div>

    <img
      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
      alt="Team collaboration"
    />
  </div>

  <div className="growing-right">
    <h2>Our team is always growing</h2>

    <p>
      To be the most trusted technology partner for digital transformation in
      the healthcare and insurance industries.
    </p>

    <p>
      We deliver innovative solutions—from cloud platforms to intelligent
      automation—that help organizations transform, scale, and lead in their
      fields.
    </p>
  </div>

</div>
        </div>
    );
}

export default AboutUs;