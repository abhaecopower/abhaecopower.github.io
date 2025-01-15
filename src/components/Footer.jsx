import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
        <footer className="footer">
    <div className="links">
      <Link to='/about' >About Us</Link>
      <Link to='/solar'>Solar Plants</Link>
      <Link to='/gallery'>Gallery</Link>
      <Link to='/career'>Career</Link>
      <Link to='/contact'>Contact us</Link>
    </div>
    <p>&copy; <strong>2025 Abha Eco Power</strong> All rights reserved.</p>
    <p>Made with &#10084; by our Web Team.</p>
  </footer>
    </div>
  )
}

export default Footer