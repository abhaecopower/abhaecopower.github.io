import React from 'react'
import './Hero.css'
import Header from './Header'
import solarInst from '../assets/Installing-solar-panels.jpg'
import custDes from '../assets/solar-panel-array-roof-home-house.jpg'
import solarConsult from '../assets/solar-consultancy-1024x768.webp'
import solarActive from '../assets/solar-active.png'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Hero() {
  return (<>
    <div className='hero-container'>
      <div className='hero-wrapper'>
        <Header />
        <div className='hero'>
          <div className='content-main'>
            <h1>Solar Plants</h1>
            <p>We install solar plants on residential and commercial sites. Our company offers both on-grid and off-grid solar plant services.</p>
          </div>
          <div className='buttons'>
            <Link to='/solar' className='solar-btn'>
              <strong>See Pricing</strong>
            </Link>
            <Link to='/contact' className='question'>
              Have a query?
            </Link>
          </div>
        </div>
      </div>
    </div>
    <section class="section">
    <div class="section-header">
      <h1>What is a Solar Plant and Why Should You Get One?</h1>
      <p>Discover the benefits of clean, renewable energy and how it can transform your energy usage.</p>
    </div>

    <div class="content">
      <div class="text">
        <h2>What is a Solar Plant?</h2>
        <p>A solar plant is a setup that captures sunlight and converts it into electricity. It uses photovoltaic panels to generate clean, renewable energy for homes and businesses.</p>

        <h2>Why Should You Get One?</h2>
        <div class="benefits">
          <ul>
            <li><i>&#x1F4B0;</i> Save money on electricity bills.</li>
            <li><i>&#x1F33F;</i> Reduce your carbon footprint.</li>
            <li><i>&#x26A1;</i> Gain energy independence.</li>
            <li><i>&#x1F4B8;</i> Enjoy government incentives and rebates.</li>
            <li><i>&#x1F3E0;</i> Increase your property value.</li>
          </ul>
        </div>
      </div>

      <div class="visuals">
        <img src={solarInst} alt="Solar Plant Installation"></img>
      </div>
    </div>

    <div class="cta">
      <Link to='/contact' href="#contact">Get a Free Consultation</Link>
    </div>
  </section>
  <div class="impact">
      <h2>Environmental Impact</h2>
      <p>See how switching to solar energy positively impacts the environment.</p>
      <div class="impact-data">
        <div class="impact-item">
          <h3>50%</h3>
          <p>Reduction in Carbon Footprint</p>
        </div>
        <div class="impact-item">
          <h3>100+</h3>
          <p>Trees Planted Equivalent</p>
        </div>
        <div class="impact-item">
          <h3>80%</h3>
          <p>Energy Savings Annually</p>
        </div>
        <div class="impact-item">
          <h3>25%</h3>
          <p>Increase in Property Value</p>
        </div>
      </div>
    </div>
    <section class="section">
  <div class="section-header">
    <h1>How It Works</h1>
    <p>A step-by-step guide explaining the process of solar installation, from consultation to completion.</p>
  </div>

  <div class="steps-container">
    <div class="step">
      <div class="icon">
        <img src={solarConsult} alt="Consultation Icon"></img>
      </div>
      <h2>Step 1: Consultation</h2>
      <p>Our experts assess your energy needs and recommend the best solar solution for your property.</p>
    </div>
    <div class="step">
      <div class="icon">
        <img src={custDes} alt="Design Icon"></img>
      </div>
      <h2>Step 2: Custom Design</h2>
      <p>We create a tailored solar panel layout and system to maximize efficiency and energy savings.</p>
    </div>
    <div class="step">
      <div class="icon">
        <img src={solarInst} alt="Installation Icon"></img>
      </div>
      <h2>Step 3: Installation</h2>
      <p>Our certified technicians ensure a seamless and professional installation process.</p>
    </div>
    <div class="step">
      <div class="icon">
        <img src={solarActive} alt="Activation Icon"></img>
      </div>
      <h2>Step 4: Activation</h2>
      <p>Your solar system is activated, and you start enjoying clean, renewable energy right away.</p>
    </div>
  </div>
</section>
<Footer/>

    </>
  )
}

export default Hero