import React, { useState } from 'react';
import '../assets/css/TrackOrder.css'; // Import the CSS file
import trackingImage from '../assets/images/trackorder.jpg'; // Import the image

const TrackOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSearch = () => {
    console.log('Tracking number:', trackingNumber);
  };

  return (
    <div className="track-order-container">
      <div className="track-order">
        <h1>Track All Your Orders</h1>

        <div className="tracking-card">
          <h2>Ecommerce Parcel Tracking</h2>
          <p>It's easy to track your order, simply enter your tracking number.</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Enter your tracking number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <button onClick={handleSearch} className="search-button">
              <span className="search-icon">🔍</span>
            </button>
          </div>
        </div>

        <div className="tracking-card">
          <h2>B2B/FTL/PTL or Bulk Shipment Tracking</h2>
          <p>
            It's easy to track your order, just click on the link below to open a new tab where you need to enter your LR Shipment ID.
          </p>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="tracking-link">
            Track B2B/FTL/PTL or Bulk Shipments
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src={trackingImage} alt="Tracking Image" />
      </div>
    </div>
  );
};

export default TrackOrder;
