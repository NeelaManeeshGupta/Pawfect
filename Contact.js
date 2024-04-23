import React from 'react';
import Navbar from './Navbar';
import './Contact.css';
import { Link } from 'react-router-dom';
function Contact() {
  return (
    <div>
         <Navbar />
    
    <div className="contact-container">
     
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us using the following methods:</p>
        <ul>
          <li><strong>Email:</strong> example@example.com</li>
          <li><strong>Phone:</strong> 123-456-7890</li>
          <li><strong>Address:</strong> 123 Street, City, Country</li>
        </ul>
        <div className="contact-form">
          <h2>Or Leave Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <Link to='/Message'><button className="back-button">Send message</button></Link>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
