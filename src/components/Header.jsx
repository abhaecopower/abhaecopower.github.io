import React, { useRef } from 'react'
import './Header.css'
import { CgDetailsMore } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

function Header() {

  const navRef = useRef();

  const showNavbar = () =>{
    navRef.current.classList.toggle('responsive_nav');
  }
  return (
    <div>
        <header className='header'>
          <i className='nav-brand'>Abha Eco Power</i>
          <nav className='navbar' ref={navRef}>
            <Link to='/' className="link">Home</Link>
            <Link to='/about' className="link">About us</Link>
            <Link to='/solar' className="link">Solar Plants</Link>
            <Link to='/gallery' className='link'>Gallery</Link>
            <Link to='/career' className="link">Career</Link>
            <Link to='/contact' className="link">Contact us</Link>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <IoMdClose/>
            </button>
          </nav>
          <button className='nav-btn nav-more-btn' onClick={showNavbar}>
            <CgDetailsMore/>
          </button>
        </header>
    </div>
  )
}

export default Header