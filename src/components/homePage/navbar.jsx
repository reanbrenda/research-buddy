import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/yes.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <a href="/" className="nav-logo">
        <img src={Logo} style={{ width: "50px" }} alt="." />
        Research Buddy
      </a>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a data-nav-section="about" href="#about">
          About
        </a>
        <a data-nav-section="products" href="#products">
          Explore Features
        </a>
        <a data-nav-section="works" href="#works">
          How it works
        </a>
        <a data-nav-section="faq" href="#faq">
          FAQ
        </a>
        <a data-nav-section="contact" href="#contact">
          Contact Us
        </a>
        <a href="login" style={{ textDecoration: "none", color: "#000" }}>
          Login
        </a>
        <button className="register">Register</button>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
