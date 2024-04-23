import React, { useState } from 'react';
import './PetDiet.css';
import Navbar from './Navbar';

const PetDiet = () => {
  const [selectedPet, setSelectedPet] = useState(null);

  const handlePetSelect = (petType) => {
    setSelectedPet(petType);
  };

  return (
    <div>
        <Navbar />
    <div className="pet-diet-plan-page">
      <h1>Pet Diet Plans</h1>
      <div className="pet-type-selector">
        <button onClick={() => handlePetSelect('dog')}>Dog</button>
        <button onClick={() => handlePetSelect('cat')}>Cat</button>
        <button onClick={() => handlePetSelect('rabbit')}>Rabbit</button>
        {/* Add more buttons for other pet types */}
      </div>
      {selectedPet === 'dog' && (
        <div className="diet-plan-display">
          <h2>Dog Diet Plan</h2>
          <div className="diet-plan-info">
            <img src="./Images/dog.png" alt="Dog Diet" />
            <ul>
              <li>Recommended food: High-quality dog food, lean meat, vegetables</li>
              <li>Portion sizes: Adjust based on size and activity level</li>
              <li>Feeding frequency: 2 meals per day</li>
              <li>Special considerations: Avoid feeding chocolate, grapes, and other toxic foods</li>
            </ul>
          </div>
        </div>
      )}
      {selectedPet === 'cat' && (
        <div className="diet-plan-display">
          <h2>Cat Diet Plan</h2>
          <div className="diet-plan-info">
            <img src="./Images/cat.png" alt="Cat Diet" />
            <ul>
              <li>Recommended food: High-quality wet or dry cat food</li>
              <li>Portion sizes: 1/4 to 1/2 cup of dry food per day, or 3-5 ounces of wet food per day for an average-sized adult cat</li>
              <li>Feeding frequency: 2 meals per day for adult cats, with kittens and senior cats potentially needing more frequent feeding</li>
              <li>Special considerations: Provide fresh water at all times, avoid feeding human foods that may be harmful to cats</li>
            </ul>
          </div>
        </div>
      )}
      {selectedPet === 'rabbit' && (
        <div className="diet-plan-display">
          <h2>Rabbit Diet Plan</h2>
          <div className="diet-plan-info">
            <img src="./Images/rabbit.png" alt="Rabbit Diet" />
            <ul>
              <li>Recommended food: High-quality hay, fresh vegetables, limited pellets</li>
              <li>Portion sizes: Unlimited hay, 1/4 to 1/2 cup of fresh vegetables per day, limited pellets (consult with a veterinarian)</li>
              <li>Feeding frequency: Fresh hay available at all times, vegetables once or twice per day, pellets in limited quantities</li>
              <li>Special considerations: Avoid feeding sugary or starchy foods, provide fresh water at all times</li>
            </ul>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default PetDiet;
