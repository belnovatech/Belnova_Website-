import React from "react";
// @ts-ignore
import "./Navbar.css";
// @ts-ignore
import logo from "../assets/BELNOVA LOGO.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <ul className="nav-menu">
        <li>About Us</li>
        <li>Services</li>
        <li>Testimonials</li>
        <li>Industries</li>
        <li>Careers</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;