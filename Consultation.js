import React from 'react';
import './Consultation.css'; // Import the CSS file
import Navbar from './Navbar';
// Import image for telemedicine consultation

const Consultation = () => {
    return (
        <div>
            <Navbar />
        <div className="consultation-page">
            <h1>Consultation Services</h1>
            <div className="consultation-options">
                {/* Consultation Option 1 */}
                <div className="consultation-option">
                <img src='./Images/nutrition.png' alt='pet'></img>
                    <h2>Veterinary Nutrition Consultation</h2>
                    <p>Get expert advice on your pet's nutritional needs.</p>
                    <a href="/booking">
                            <button>Book Now</button>
                        </a>
                </div>
                {/* Consultation Option 2 */}
                <div className="consultation-option">
                    <img src='./Images/behaviour.png' alt="Behavior Consultation" />
                    <h2>Pet Behavior Consultation</h2>
                    <p>Address behavioral issues and improve your pet's well-being.</p>
                    <a href="/booking">
                            <button>Book Now</button>
                        </a>
                </div>
                {/* Consultation Option 3 */}
                <div className="consultation-option">
                    <img src='./Images/telemedicine.png' alt="Telemedicine Consultation" />
                    <h2>Veterinary Telemedicine</h2>
                    <p>Consult with a veterinarian remotely for your pet's healthcare needs.</p>
                    <a href="/booking">
                            <button>Book Now</button>
                        </a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Consultation;
