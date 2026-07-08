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

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
  }

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
onChange={handleChange}
/>

<input
type="email"
placeholder="Email Address"
name="email"
onChange={handleChange}
/>

<input
type="text"
placeholder="Phone Number"
name="phone"
onChange={handleChange}
/>

<input
type="text"
placeholder="Project Subject"
name="subject"
onChange={handleChange}
/>

<textarea
rows="6"
placeholder="Tell us about your project..."
name="message"
onChange={handleChange}
/>

<button>

<Send size={18}/>

Send Message

</button>

</form>

<div className="secure">

<CheckCircle2 size={18}/>

Your information is encrypted & secure.

</div>

</div>

</div>

</section>

  )

}