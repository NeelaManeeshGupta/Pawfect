import React, { useState } from 'react';
import './Booking.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Booking = () => {
    // State for form fields
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [petType, setPetType] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Code to handle form submission (e.g., payment processing) goes here
    };

    return (
        <div>
        <center ><img src='./Images/timeDate.png' alt='time'/></center>
        <div className="consultation-booking-page">
            <h1>Consultation Booking</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Date:</label>
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Time:</label>
                    <input 
                        type="time" 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Pet Type:</label>
                    <select 
                        value={petType} 
                        onChange={(e) => setPetType(e.target.value)} 
                        required 
                    >
                        <option value="">Select Pet Type</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        <option value="other">Other</option>
                    </select>
                </div>
               <Link to='/Payment'> <button type="submit">Proceed to Payment</button></Link>
            </form>
        </div>
        </div>
    );
};

export default Booking;
