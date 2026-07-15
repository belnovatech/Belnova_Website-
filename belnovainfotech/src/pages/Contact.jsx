import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
  Bot,
  Navigation,
  CheckCircle2
} from "lucide-react";
import "./Contact.css";

export default function Contact() {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    subject:"",
    message:""
  });

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");
const handleSubmit = async (e) => {
  e.preventDefault();

  // Clear previous messages
  setError("");
  setSuccess("");

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.email)) {
    setError("❌ Please enter a valid email address.");
    return;
  }

  // Phone validation
  const phoneRegex = /^[0-9]{10}$/;

  if (!phoneRegex.test(formData.phone)) {
    setError("❌ Phone number must contain exactly 10 digits.");
    return;
  }

  setLoading(true);

  try {
const response = await fetch(
  "https://belnova-backend-website-c.onrender.com/contact",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }
);

    const data = await response.json();

    if (response.ok && data.success) {
      setSuccess("✅ Message sent successfully! We'll contact you soon.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      setError(data.message || "❌ Failed to send message.");
    }
  } catch (err) {
    console.error(err);
    setError("❌ Unable to connect to the server.");
  } finally {
    setLoading(false);
  }
};
const isFormValid =
  formData.name.trim() !== "" &&
  formData.email.trim() !== "" &&
  formData.phone.length === 10 &&
  formData.subject.trim() !== "" &&
  formData.message.trim() !== "";
  return(

<section className="contact">

<div className="contact-bg-circle one"></div>
<div className="contact-bg-circle two"></div>

<div className="contact-title">

<span className="contact-badge">

<Bot size={18}/>
AI Powered Support

</span>

<h2>Let's Build Something Amazing</h2>

<p>
Whether you're looking for AI solutions, Web Development,
Cloud Services or Enterprise Applications,
our team is ready to help.
</p>

</div>


<div className="contact-wrapper">

<div className="contact-left">

<div className="status-card">
  <div className="status-dot"></div>

  <div className="status-text">
    <h4>Average Reply Time</h4>
    <span>Within 15 Minutes</span>
  </div>
</div>



<div className="location-card">

<div className="location-header">

<div className="location-icon">

<MapPin/>

</div>

<div>

<h4>Head Office</h4>

<p>Hyderabad, Telangana</p>

</div>

</div>

<div className="location-address">

2-91/12/4/NR Plot No.4,
Doc Bhavan 5th Floor,
Kondapur,
Hyderabad,
Telangana - 500081,
India

</div>

<a
  href="https://www.google.com/maps/search/?api=1&query=2-91/12/4+NR+Plot+No.4+Doc+Bhavan+5th+Floor+Kondapur+Hyderabad+Telangana+500081"
  target="_blank"
  rel="noopener noreferrer"
  className="map-btn"
>
  <Navigation size={18} />
  View on Maps
</a>

</div>


<div className="info-grid">

<div className="info-box">

<Phone/>

<div>

<h5>Phone</h5>

<p>+91 7382405380</p>

</div>

</div>

<div className="info-box">

<Mail/>

<div>

<h5>Email</h5>

<p>info@belnovatech.com</p>

</div>

</div>

<div className="info-box">

<Clock3/>

<div>

<h5>Working Hours</h5>

<p>Mon-Sat 9AM - 7PM</p>

</div>

</div>

</div>

</div>




<div className="contact-right">

<form onSubmit={handleSubmit}>

  <input
    type="text"
    placeholder="Your Name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
  />

<input
  type="email"
  placeholder="Email Address"
  name="email"
  value={formData.email}
  onChange={handleChange}
  required
/>

<input
  type="tel"
  placeholder="Phone Number"
  name="phone"
  value={formData.phone}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length <= 10) {
      setFormData({
        ...formData,
        phone: value,
      });
    }
  }}
  maxLength={10}
  required
/>

  <input
    type="text"
    placeholder="Project Subject"
    name="subject"
    value={formData.subject}
    onChange={handleChange}
    required
  />

  <textarea
    rows="6"
    placeholder="Tell us about your project..."
    name="message"
    value={formData.message}
    onChange={handleChange}
    required
  />

<button
  type="submit"
  disabled={loading || !isFormValid}
>
  {loading ? (
    <>
      <div className="spinner"></div>
      Sending...
    </>
  ) : (
    <>
      <Send size={18} />
      Send Message
    </>
  )}
</button>

</form>
{success && <div className="success-message">{success}</div>}

{error && <div className="error-message">{error}</div>}
<div className="secure">

<CheckCircle2 size={18}/>

Your information is encrypted & secure.

</div>

</div>

</div>

</section>

  )

}