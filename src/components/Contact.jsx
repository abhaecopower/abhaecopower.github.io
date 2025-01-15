import React, { useState } from "react";
import './Contact.css'
import Footer from "./Footer";
import Header from "./Header";
function Contact() {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
});
const onType = (e) => {
  const { name, value } = e.target;
  setState({
      ...state,
      [name]: value
  })
}
  return (
    <div className="contact-container">
      <Header />
      <section id="contact" className="section">
        <div className="section-header contact-header">
          <h1>Contact Us</h1>
          <p>Get in touch for inquiries or a free solar consultation. We're here to help!</p>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={onType} placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={onType} placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" onChange={onType} placeholder="Enter your phone number" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" onChange={onType} placeholder="Enter your message"></textarea>
          </div>
          <a type="submit" href={`mailto:info.abhaecopower@gmail.com?subject=Inquiry/Consultation&body=Hi my name is ${state.name}, phone number is ${state.phone} and i want to say that ${state.message}`} className="submit-btn">Submit</a>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
