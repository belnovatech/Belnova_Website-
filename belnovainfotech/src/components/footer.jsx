import React from "react";
import "./footer.css";
import logo from "../assets/BELNOVA LOGO.png";

function ContactFooter() {
    return (
        <>
            {/* ===== CONTACT SECTION ===== */}
            <section id="contact" className="contact-section">
                <div className="contact-container">

                    {/* LEFT SIDE */}
                    <div className="contact-info">
                        <img src={logo} alt="BELNOVA LOGO" className="contact-logo" />

                        <div className="info-item">
                            <span className="icon">📍</span>
                            <p><strong>LOCATION</strong><br />Hyderabad, Telangana, India</p>
                        </div>

                        <div className="info-item">
                            <span className="icon">✉️</span>
                            <p><strong>EMAIL</strong><br />hello@belnova.in</p>
                        </div>

                        <div className="info-item">
                            <span className="icon">📞</span>
                            <p><strong>PHONE</strong><br />+91 XXXXX XXXXX</p>
                        </div>

                        <div className="info-item">
                            <span className="icon">🕒</span>
                            <p><strong>WORKING HOURS</strong><br />Mon - Sat, 9 AM - 7 PM IST</p>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="contact-form-card">
                        <h3 className="gradient-text-small">Get in touch!</h3>

                        <form>
                            <div className="form-row">
                                <input type="text" placeholder="Enter Name" />
                                <input type="text" placeholder="Enter Mobile" />
                            </div>

                            <input type="email" placeholder="Enter email" />

                            <textarea placeholder="Enter your query" rows="4"></textarea>

                            <button type="submit" className="send-btn">
                                SEND ENQUIRY
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="footer-section">
                <div className="footer-container">
                    <div className="footer-content">

                        <div className="copyright-text">
                            © 2026 Belnova Infotech Private Limited. All rights reserved.
                        </div>

                        <div className="social-links">
                            <a href="https://www.linkedin.com" className="social-box" target="_blank" rel="noreferrer">in</a>
                            <a href="https://twitter.com" className="social-box" target="_blank" rel="noreferrer">𝕏</a>
                            <a href="https://github.com" className="social-box" target="_blank" rel="noreferrer">gh</a>
                            <a href="https://youtube.com" className="social-box" target="_blank" rel="noreferrer">yt</a>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
}

export default ContactFooter;