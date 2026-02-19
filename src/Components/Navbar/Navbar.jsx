import React from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="logo">
        <img src="" alt="" />
        <span>✂ PIXI ART</span>
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li><Link to="/services">Services</Link></li>
          <li></li>
          <li>About</li>
          <li>Contact</li>
          <li>My Appointments</li>
          <li>Login</li>
        </ul>
        <button className='book-btn'>Book Now</button>
      </div>
    </nav>
  )
}

export default Navbar


