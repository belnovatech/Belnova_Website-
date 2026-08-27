import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";
import logo from "../Public/belnova-logo.png";

const Navbar = () => {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Belnova Tech Private Limited" />
        </Link>

        <nav className="navbar-menu">
          <NavLink to="/what-we-do" className={getNavLinkClass}>
            What We Do
          </NavLink>

          <NavLink to="/solutions" className={getNavLinkClass}>
            Solutions
          </NavLink>

          <NavLink to="/industries" className={getNavLinkClass}>
            Industries
          </NavLink>

          <NavLink to="/work" className={getNavLinkClass}>
            Work
          </NavLink>

          <NavLink to="/innovations" className={getNavLinkClass}>
            Innovation
          </NavLink>

          <NavLink to="/company" className={getNavLinkClass}>
            Company
          </NavLink>

          <NavLink to="/careers" className={getNavLinkClass}>
            Careers
          </NavLink>
        </nav>

        <Link to="/contact" className="navbar-cta">
          Start a Project
          <span>→</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;