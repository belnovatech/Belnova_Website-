import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>

<div
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span></span>
  <span></span>
  <span></span>
</div>

      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li>
    <Link to="/" onClick={() => setMenuOpen(false)}>
      Home
    </Link>
  </li>




        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
       <li>
  <Link to="/services" onClick={() => setMenuOpen(false)}>
    What We Do
  </Link>
</li>
        <li><Link to="/why-belnova" onClick={() => setMenuOpen(false)}>Why Belnova</Link></li>
        <li><Link to="/industries" onClick={() => setMenuOpen(false)}>Industries</Link></li>
        <li><Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;