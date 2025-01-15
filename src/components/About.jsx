import React from 'react'
import './About.css'
import Header from './Header'
import Footer from './Footer'
function About() {
    return (<>
        <div className='about-container'>
            <Header />
            <section id="about" className="section about-section">
                <div className="about-content">
                    <h1>About Us</h1>
                    <p>
                        We are <strong>Abha Eco Power</strong>, your trusted partner in sustainable energy.
                        We specialize in the installation of solar plants for both residential and commercial sites.
                        Our company offers comprehensive solutions, including on-grid and off-grid solar plant services.
                    </p>
                    <p>
                        Based in <strong>Prayagraj, Uttar Pradesh, India</strong>, our services are currently
                        available exclusively in Prayagraj. However, we are actively working to expand our reach
                        to other cities soon.
                    </p>
                </div>
            </section>
        </div>
        <Footer />
    </>
    )
}

export default About