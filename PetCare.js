
import React from 'react';
import './PetCare.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const PetCare = () => {
  return (
    <div>
        <Navbar />
    <div className="pet-care-page">
      <h1>Welcome to Paws & Whiskers Pet Care!</h1>
      <p className="intro-text">
        At Paws & Whiskers, we understand that every pet is unique and deserves specialized care tailored to their needs.
        Our range of services ensures that your furry friends receive the attention and love they deserve, whether you're away for a day or a week.
        Choose from our selection of pet care options below:
      </p>
      <div className="care-options">
        <div className="care-option dog-walking">
          <div className="image-wrapper">
          <img src='./Images/petWalking.png' alt='pet'></img>
          </div>
          <div className="description">
            <h2>Dog Walking Services</h2>
            <ul>
              <li>Regular walks tailored to your dog's energy level and preferences.</li>
              <li>Solo walks for dogs who prefer one-on-one attention.</li>
              <li>Group walks for social dogs who love to make new friends.</li>
              <li>Additional playtime and exercise sessions available upon request.</li>
            </ul>
           <Link to='/MyForm'><button className="btn">Get Dog Walking Services</button></Link>
          </div>
        </div>
        <div className="care-option pet-sitting">
          <div className="image-wrapper">
          <img src='./Images/petSitting.png' alt='pet'></img>
          </div>
          <div className="description">
            <h2>Pet Sitting</h2>
            <ul>
              <li>In-home pet sitting for cats, dogs, and other small animals.</li>
              <li>Personalized care routines to maintain your pet's daily schedule.</li>
              <li>Overnight stays for companionship and security.</li>
              <li>Daily updates and photos to keep you connected while you're away.</li>
            </ul>
          <Link to='/MyForm'><button className="btn">Get Pet Sitting Services</button></Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PetCare;
