import React from 'react';
import './About.css'; 
import Navbar from './Navbar';

function About() {
  return (
    <div>
        <Navbar />
    <div className="about-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Pet Paradise</h1>
          <p>Discover the story behind our love for pets and our commitment to their well-being.</p>
        </div>
      </section>
      <section className="story-section">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>At Pet Paradise, we believe that pets are not just animals, they are family. Our journey began with a simple love for animals, which turned into a passion for providing them with the best care and attention.</p>
          <p>Founded by a group of dedicated pet enthusiasts, Pet Paradise has grown into a community-driven platform where pet lovers come together to share knowledge, seek advice, and celebrate the joy that pets bring to our lives.</p>
        </div>
      </section>
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>Our mission is to enhance the lives of pets and their owners by offering a comprehensive range of resources, services, and products tailored to their needs. We are committed to promoting responsible pet ownership, advocating for animal welfare, and fostering a supportive pet-loving community.</p>
        </div>
      </section>
      <section className="team-section">
        <div className="team-content">
          <h2>Meet Our Team</h2>
          <p>Behind Pet Paradise is a team of passionate individuals dedicated to making a difference in the lives of pets. From veterinarians and animal behaviorists to designers and developers, each member of our team brings unique expertise and love for animals to our work.</p>
          <p>Together, we strive to create a pet paradise where every furry friend is happy, healthy, and loved.</p>
        </div>
      </section>
    </div>
    </div>
  );
}

export default About;
