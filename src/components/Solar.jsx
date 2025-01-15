import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Solar.css'
import { Link } from 'react-router-dom';

function Solar() {
  const plants = [
    { type: "On-Grid", capacity: "1KW", price: "₹60,000" },
    { type: "On-Grid", capacity: "2KW", price: "₹1,20,000" },
    { type: "On-Grid", capacity: "5KW", price: "₹3,00,000" },
    { type: "On-Grid", capacity: "10KW", price: "₹6,00,000" },
    { type: "Off-Grid", capacity: "1KW", price: "₹60,000" },
    { type: "Off-Grid", capacity: "2KW", price: "₹1,10,000" },
    { type: "Off-Grid", capacity: "5KW", price: "₹2,50,000" },
    { type: "Off-Grid", capacity: "10KW", price: "₹4,50,000" },
  ];

  const benefits = {
    "On-Grid": [
      "Lower installation cost compared to off-grid systems.",
      "Excess energy can be sold back to the grid.",
      "No need for batteries, reducing maintenance costs.",
    ],
    "Off-Grid": [
      "Independence from the grid; useful in remote areas.",
      "Backup power during grid outages.",
      "Can store energy for later use with batteries.",
    ],
  };

  return (<>
    <div>
      <div className='solar-header'>
        <Header />
      </div>
      <header>
        <h1>Solar Plants</h1>
        <p>Explore the types of solar plants and their benefits.</p>
      </header>

      <section className="type-section">
        <div className="type-card">
          <h2>On-Grid Solar Plants</h2>
          <p>
            On-grid systems are connected to the local power grid. These systems
            are cost-effective and allow you to sell excess energy back to the
            grid.
          </p>
          <h3>Benefits:</h3>
          <ul>
            {benefits["On-Grid"].map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="type-card">
          <h2>Off-Grid Solar Plants</h2>
          <p>
            Off-grid systems operate independently from the power grid. These
            systems require batteries to store energy and are ideal for remote
            areas.
          </p>
          <h3>Benefits:</h3>
          <ul>
            {benefits["Off-Grid"].map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="plant-cards">
        <div className="section-header">
          <h1>Available Solar Plants</h1>
          <p>Choose from our range of On-Grid and Off-Grid solar plants, tailored to your needs.</p>
        </div>

        <div className="solar-types">
          <div className="solar-type">
            <h2>On-Grid Solar Plants</h2>
            <p>Our On-Grid solar plants are directly connected to the utility grid. This type is cost-effective and perfect for reducing electricity bills.</p>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Capacity (KW)</th>
                  <th>Price (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 KW</td>
                  <td>₹60,000</td>
                </tr>
                <tr>
                  <td>2 KW</td>
                  <td>₹1,20,000</td>
                </tr>
                <tr>
                  <td>3 KW </td>
                  <td>₹1,80,000</td>
                </tr>
                <tr>
                  <td>4 KW </td>
                  <td>₹2,40,000</td>
                </tr>
                <tr>
                  <td>5 KW</td>
                  <td>₹3,00,000</td>
                </tr>
                <tr>
                  <td>6 KW</td>
                  <td>₹3,60,000</td>
                </tr>
                <tr>
                  <td>7 KW</td>
                  <td>₹4,20,000</td>
                </tr>
                <tr>
                  <td>8 KW </td>
                  <td>₹4,80,000</td>
                </tr>
                <tr>
                  <td>9 KW</td>
                  <td>₹5,40,000</td>
                </tr>
                <tr>
                  <td>10 KW</td>
                  <td>₹6,00,000</td>
                </tr>
              </tbody>
            </table>
            <Link to='/order' className="order-btn" state={{ type: "On-Grid" }}>Order Now</Link>
            <p className="note">* Fixed price: ₹60 per watt</p>
            <p className='note'>* Subsidy is only available for solar plants ranging from 1KW-10KW</p>
          </div>
          <div className="solar-type">
            <h2>Off-Grid Solar Plants</h2>
            <p>Our Off-Grid solar plants operate independently of the grid and are ideal for remote locations. Batteries are optional and can be customized to suit your energy storage needs.</p>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Capacity (KW)</th>
                  <th>Price (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 KW (Without Battery)</td>
                  <td>₹42,000</td>
                </tr>
                <tr>
                  <td>2 KW (Without Battery)</td>
                  <td>₹84,000</td>
                </tr>
                <tr>
                  <td>3 KW (Without Battery)</td>
                  <td>₹1,26,000</td>
                </tr>
                <tr>
                  <td>4 KW (Without Battery)</td>
                  <td>₹1,68,000</td>
                </tr>
                <tr>
                  <td>5 KW (Without Battery)</td>
                  <td>₹2,10,000</td>
                </tr>
                <tr>
                  <td>6 KW (Without Battery)</td>
                  <td>₹2,52,000</td>
                </tr>
                <tr>
                  <td>7 KW (Without Battery)</td>
                  <td>₹2,94,000</td>
                </tr>
                <tr>
                  <td>8 KW (Without Battery)</td>
                  <td>₹3,36,000</td>
                </tr>
                <tr>
                  <td>9 KW (Without Battery)</td>
                  <td>₹3,78,000</td>
                </tr>
                <tr>
                  <td>10 KW (Without Battery)</td>
                  <td>₹4,20,000</td>
                </tr>
              </tbody>
            </table>
            <Link to='/order' className="order-btn" state={{ type: "Off-Grid" }}>Order Now</Link>
            <p className="note">* Fixed price: ₹42 per watt (Battery charges extra depending on choice)</p>
          </div>
        </div>

    <p className="note">We are constantly upgrading our technology. With advancements, it is possible to have 1 KW generated by a single solar panel in the future, reducing the area required for installation.</p>
  </section >
    </div >
    <Footer />
</>
  )
}

export default Solar