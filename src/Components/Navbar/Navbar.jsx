import React, { useState } from "react";
import "./Navbar.css";
import menu from "../../assets/menu_img.png";
import logo from "../../assets/icon-5.png"

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav className="Navbar">

        <div className="logo">
          <img className="logo-img" src={logo} alt="" />
          <span>PIXI ART</span>
        </div>

        <ul className={mobileMenu ? "nav-links active" : "nav-links"}>
          <li onClick={() => setMobileMenu(false)}>Home</li>
          <li onClick={() => setMobileMenu(false)}>Services</li>
          <li onClick={() => setMobileMenu(false)}>About</li>
          <li onClick={() => setMobileMenu(false)}>Contact</li>
          <button className="book-btn">Book Now</button>
        </ul>

        <img
          src={menu}
          alt="menu"
          className="menu-icon"
          onClick={() => setMobileMenu(!mobileMenu)}
        />

      </nav>

      {mobileMenu && <div className="overlay" onClick={() => setMobileMenu(false)}></div>}
    </>
  );
};

export default Navbar;