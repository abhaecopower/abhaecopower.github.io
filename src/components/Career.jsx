import React from 'react'
import Header from './Header'
import Footer from './Footer'
import managerImg from '../assets/WhatsApp Image 2025-01-13 at 09.41.37.jpeg'
import webdevImg from '../assets/WhatsApp Image 2024-12-02 at 23.26.51.jpeg'
import './Career.css'
import { Link } from 'react-router-dom'

function Career() {
  return (<>
    <div>
       <div className='career-header'>
       <Header/>
       </div>
       <header>
    <h1>Careers at Abha Eco Power</h1>
    <p>Join our team of innovators and help us revolutionize clean energy. Meet the people who make it all happen.</p>
  </header>

  <section class="team">
    <h2>Meet Our Team</h2>
    <div class="team-grid">
      <div class="team-member">
        <img src={managerImg} alt="Manager"/>
        <h3>Rajkumar Lal Srivastava</h3>
        <p>Manager</p>
        <p>Ensuring smooth operations and strategic planning.</p>
      </div>
      <div class="team-member">
        <img src={webdevImg} alt="Web Developer"/>
        <h3>Alyaraj Srivastava</h3>
        <p>Web Developer</p>
        <p>Designing and maintaining our website.</p>
      </div>
    </div>
  </section>

  <section class="future-opportunities">
    <h2>Join Our Team</h2>
    <p><strong>We are hiring.</strong> Leave your details, and we’ll reach out if we like your application.</p>
    <Link to='/apply-for-job'>Apply now</Link>
  </section>
    </div>
    <Footer/>
  </>
  )
}

export default Career