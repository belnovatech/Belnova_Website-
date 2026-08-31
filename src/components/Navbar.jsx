import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../Public/belnova-logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
          <img src={logo} alt="Belnova Tech Private Limited" />
        </Link>

        <nav className="navbar-menu">
          <NavLink to="/" className={getNavLinkClass}>
  Home
</NavLink>
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

        <div className="navbar-actions">
          <Link to="/contact" className="navbar-cta">
            Start a Project
            <span>→</span>
          </Link>

          <button
            type="button"
            className={`navbar-hamburger ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

{mobileMenuOpen && (
  <div className="navbar-mobile-drawer">
    <nav className="navbar-mobile-nav">

      <NavLink to="/" className={getNavLinkClass}>
        Home
      </NavLink>

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

      <Link to="/contact" className="navbar-mobile-cta">
        Start a Project <span>→</span>
      </Link>

    </nav>
  </div>
)}
    </header>
  );
};

export default Navbar;