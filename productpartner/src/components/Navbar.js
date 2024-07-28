import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../assets/css/Nav.css'; // Correct path to the nav.css file
import logo from '../assets/images/logo.png'; // Import the logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="nav-logo" />
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-button">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-button">About Us</Link>
        </li>
        <li className="nav-item">
        <Link to="/trackorder" className="nav-button">Track Order</Link>
        </li>
        <li className="nav-item">
          <button className="nav-button">Contact Us</button>
        </li>
        <li className="nav-item">
        <Link to="/login" className="nav-button">Login</Link>
        </li>
        <li className="nav-item">
        <Link to="/partner" className="nav-button">PartnerWithUs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
