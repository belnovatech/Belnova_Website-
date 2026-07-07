import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // 🔥 Replace with your real backend / email service (e.g. EmailJS, Formspree, your API)
    try {
      const res = await fetch("https://your-backend.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Reach out with any questions or project inquiries.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
  <div className="info-item">
    <h4><span className="icon">📍</span> Address</h4>
    <p>2-91/12/4/NR Plot no:4 Doc Bhavan 5th floor kondapur Hyderabad Telangana-500081 India</p>
  </div>
  <div className="info-item">
    <h4><span className="icon">📞</span> Phone</h4>
    <p>+91 7382405380</p>
  </div>
  <div className="info-item">
    <h4><span className="icon">✉️</span> Email</h4>
    <p>info@belnova.com</p>
  </div>
  <div className="info-item">
    <h4><span className="icon">🕒</span> Working Hours</h4>
    <p>Mon - Sat, 9 AM - 7 PM IST</p>
  </div>
</div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
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
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="success-msg">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="error-msg">❌ Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;