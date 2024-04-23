import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css'; 
import Navbar from './Navbar';

function Home() {
  return (
    <div>
        <Navbar />
   
    <div className="home-container">
      <header className="header">
        <img src='./Images/pet.png' alt='pet'></img>
        <h1>Welcome to PetApp</h1>
        <p>Your one-stop destination for all things pet-related</p>
      </header>
      <main className="main-content">
        <section className="features-section">
          <h2>Why Choose PetApp?</h2>
          <div className="features">
            <div className="feature">
              <i className="fas fa-paw"></i>
              <h3>Comprehensive Pet Care</h3>
              <p>Access a wide range of resources on pet care, grooming, and health.</p>
            </div>
            <div className="feature">
              <i className="fas fa-bone"></i>
              <h3>Customized Diet Plans</h3>
              <p>Explore personalized diet plans and nutritional advice for your pet.</p>
            </div>
            <div className="feature">
              <i className="fas fa-shopping-basket"></i>
              <h3>Premium Pet Products</h3>
              <p>Shop from our curated collection of high-quality pet products.</p>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <h2>Get Started Today</h2>
          <p>Join PetApp now and provide your pet with the care and attention they deserve.</p>
          <Link to="/signup" className="cta-btn">Sign Up</Link>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 PetApp. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
}

export default Home;
