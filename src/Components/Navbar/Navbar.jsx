import React, { useState } from "react";
import "./Navbar.css";
import menu from "../../assets/menu_img.png";
import logo from "../../assets/icon-5.png";
import { Link } from "react-scroll";
import { SignedIn, SignedOut, SignInButton, SignUpButton, useClerk, UserButton, useUser } from '@clerk/clerk-react';


const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const {openSignIn} = useClerk()
  const {user} = useUser()


  return (
    <>
      <nav className="Navbar">

        <div className="logo">
          <img className="logo-img" src={logo} alt="" />
          <span>PIXI ART</span>
        </div>

        <ul className={mobileMenu ? "nav-links active" : "nav-links"}>

          <li>
            <Link to="hero" smooth duration={500} offset={-70}
              onClick={() => setMobileMenu(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="services" smooth duration={500} offset={-70}
              onClick={() => setMobileMenu(false)}>
              Services
            </Link>
          </li>

          <li>
            <Link to="about" smooth duration={500} offset={-70}
              onClick={() => setMobileMenu(false)}>
              About
            </Link>
          </li>

          <li>
            <Link to="contact" smooth duration={500} offset={-70}
              onClick={() => setMobileMenu(false)}>
              Contact
            </Link>
          </li>

          <li><button onClick={()=> openSignIn()} className="login">Login</button></li>
          <SignedIn>
            <UserButton />
          </SignedIn>
          

          <button onClick={()=> openSignIn()} className="book-btn">Book Now</button>

        </ul>

        <img
          src={menu}
          alt="menu"
          className="menu-icon"
          onClick={() => setMobileMenu(!mobileMenu)}
        />

      </nav>

      {mobileMenu && (
        <div className="overlay" onClick={() => setMobileMenu(false)}></div>
      )}
    </>
  );
};

export default Navbar;