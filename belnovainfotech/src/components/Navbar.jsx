import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/BELNOVA LOGO.png";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 normal scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // 🔥 CAREERS CLICK FIX
  const handleCareersClick = () => {
    const section = document.getElementById("industries");

    section?.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      window.dispatchEvent(new Event("openCareers"));
    }, 300);

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>

      {/* HAMBURGER */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* MENU */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li onClick={() => scrollToSection("about")}>About Us</li>
        <li onClick={() => scrollToSection("services")}>Services</li>
        <li onClick={() => scrollToSection("why")}>Why Belnova</li>
        <li onClick={() => scrollToSection("industries")}>Industries</li>

        {/* 🔥 FIXED CAREERS */}
        <li onClick={handleCareersClick}>Careers</li>

        <li onClick={() => scrollToSection("contact")}>Contact Us</li>
      </ul>

    </nav>
  );
};

export default Navbar;