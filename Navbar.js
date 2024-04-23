import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        <img src='./Images/logo.png' alt="Telemedicine Consultation" />
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/home" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item dropdown">
            <Link to="#categories" className="navbar-link">
              Categories
            </Link>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/pet-care" className="dropdown-link">
                  Pet Care
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/petdiet" className="dropdown-link">
                  Pet Diet
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/products" className="dropdown-link">
                  Products
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/consultation" className="dropdown-link">
                  Consultation
                </Link>
              </li>
              {/* Add more categories as needed */}
            </ul>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
          <li className="navbar-item dropdown">
            <Link to="#categories" className="navbar-link">
              Account
            </Link>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/profile" className="dropdown-link">
                  Profile
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/orders" className="dropdown-link">
                  Orders
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/bookings" className="dropdown-link">
                  Bookings
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/" className="dropdown-link">
                  Logout
                </Link>
              </li>
              {/* Add more categories as needed */}
            </ul>
          </li>
          
          
          <li className="navbar-item">
            <Link to="/cart" className="navbar-link">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;