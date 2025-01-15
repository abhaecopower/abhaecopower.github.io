import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Gallery.css'
import img1 from '../assets/client1.jpeg'
import img2 from '../assets/client2.jpeg'
import img3 from '../assets/client3.jpeg'
function Gallery() {
  return (<>
    <div>
      <div className='gallery-header'>
        <Header/>
      </div>
      <section id="gallery" className="section gallery-section">
  <div className="section-header">
    <h1>Our Gallery</h1>
    <p>Explore our work and see the transformation we bring to residential and commercial spaces.</p>
  </div>
  <div className="gallery-grid">
    <div className="gallery-item"><img src={img1} alt="Solar Plant 1"/></div>
    <div className="gallery-item"><img src={img2} alt="Solar Plant 2"/></div>
    <div className="gallery-item"><img src={img3} alt="Solar Plant 3"/></div>
  </div>
</section>

    </div>
    <Footer/>
  </>
  )
}

export default Gallery