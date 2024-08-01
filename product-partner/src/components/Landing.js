import React from 'react';
import '../Assets/css/Landing.css'; // Adjust the path if needed
import ServicesPage from './Services';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1>Its time to make a difference and grow your business!</h1>
        <p>Offer Professional Services To 2 Lakh+ Sellers In India.</p>
        <button className="cta-button">Register as Service partner </button>
      </div>
      {/* <ServicesPage /> */}
    </div>
  );
};

export default LandingPage;
