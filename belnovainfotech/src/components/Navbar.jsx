// import React from "react";
// // @ts-ignore
// import "./Navbar.css";
// // @ts-ignore
// import logo from "../assets/BELNOVA LOGO.png";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <img src={logo} alt="logo" className="logo" />

//       <ul className="nav-menu">
//         <li>About Us</li>
//         <li>Services</li>
//         <li>Why Belnova</li>
//         <li>Industries</li>
//         <li>Careers</li>
//         <li>Contact Us</li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;







import React from "react";
import "./Navbar.css";
import logo from "../assets/BELNOVA LOGO.png";

const Navbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <ul className="nav-menu">
        <li onClick={() => scrollToSection("about")}>About Us</li>
        <li onClick={() => scrollToSection("services")}>Services</li>
        <li onClick={() => scrollToSection("why")}>Why Belnova</li>
        <li onClick={() => scrollToSection("industries")}>Industries</li>
        <li onClick={() => scrollToSection("careers")}>Careers</li>
        <li onClick={() => scrollToSection("contact")}>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;