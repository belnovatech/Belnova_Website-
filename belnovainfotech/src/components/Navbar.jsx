import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/BELNOVA LOGO.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to a section, navigating home first if needed
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300); // wait for Home to mount
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const goTo = (path) => {
    navigate(path);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li onClick={() => scrollToSection("about")}>About Us</li>
        <li onClick={() => scrollToSection("services")}>Services</li>
        <li onClick={() => scrollToSection("why")}>Why Belnova</li>

        {/* Real routed pages */}
        <li onClick={() => goTo("/industries")}>Industries</li>
        <li onClick={() => goTo("/careers")}>Careers</li>
        <li onClick={() => goTo("/contact")}>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;