import React from 'react';
import './Message.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import img from './success.png'; 
const Message = () => {
    return (
        <div className="message-posted-page">
            <div className="message-container">
                <h1>Message Posted Successfully!</h1>
                <p>Thank you for your message. Our team will get back to you shortly.</p>
                <img src={img} alt="Success Icon" />
                <Link to='/Contact'><button className="back-button">Go Back</button></Link>
            </div>
        </div>
    );
};

export default Message;