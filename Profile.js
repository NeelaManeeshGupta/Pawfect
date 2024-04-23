import React, { useState } from 'react';
import './Profile.css'; // Import the CSS file

const Profile = () => {
    // State variables to store profile information
    const [name, setName] = useState('');
    const [petType, setPetType] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    // State variable to manage edit mode
    const [isEditing, setIsEditing] = useState(false);

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Profile information:', { name, petType, email, phone, address });
        // Additional actions like sending data to a server can be added here
    };

    return (
        <div className="container">
            <h1>User Profile</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required disabled={!isEditing} />

                <label htmlFor="petType">Pet Type:</label>
                <input type="text" id="petType" value={petType} onChange={(e) => setPetType(e.target.value)} disabled={!isEditing} />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required disabled />

                <label htmlFor="phone">Phone Number:</label>
                <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={!isEditing} />

                <label htmlFor="address">Address:</label>
                <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} disabled={!isEditing} />

                {isEditing ? (
                    <button type="submit">Save Changes</button>
                ) : (
                    <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
                )}

            </form>
        </div>
    );
};

export default Profile;
