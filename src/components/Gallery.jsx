import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Gallery.css'
import img1 from '../assets/WhatsApp Image 2025-01-07 at 21.43.06.jpeg'
import img2 from '../assets/WhatsApp Image 2025-01-07 at 21.45.07.jpeg'
import img3 from '../assets/WhatsApp Image 2025-01-10 at 16.54.32.jpeg'
function Gallery() {
  return (<>
    <div>
      <div className='gallery-header'>
        <Header/>
      </div>
      <section id="gallery" class="section gallery-section">
  <div class="section-header">
    <h1>Our Gallery</h1>
    <p>Explore our work and see the transformation we bring to residential and commercial spaces.</p>
  </div>
  <div class="gallery-grid">
    <div class="gallery-item"><img src={img1} alt="Solar Plant 1"/></div>
    <div class="gallery-item"><img src={img2} alt="Solar Plant 2"/></div>
    <div class="gallery-item"><img src={img3} alt="Solar Plant 3"/></div>
  </div>
</section>

    </div>
    <Footer/>
  </>
  )
}

export default Gallery