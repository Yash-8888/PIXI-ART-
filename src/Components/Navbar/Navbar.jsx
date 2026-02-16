import React from 'react'
import "./Navbar.css"

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
          <li>Services</li>
          <li>Gallery</li>
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


