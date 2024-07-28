import React, { useState } from 'react';
import '../assets/css/PartnerWithUs.css'; // Import the CSS file
import trackingImage from '../assets/images/trackorder.jpg'; // Import the image

const PartnerWithUs = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    contactName: '',
    contactNumber: '',
    contactEmail: '',
    location: '',
    businessType: 'B2C Express' // Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="partner-with-us-container">
      <div className="image-container">
        <img src={trackingImage} alt="Tracking Image" />
      </div>
      <div className="form-container">
        <h1>Start Shipping Now</h1>
        <p><strong>Please do not submit franchisee requests</strong></p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="companyName">Company Name*</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="website">Website*</label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactName">Contact Person Name*</label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactNumber">Contact Person Number*</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactEmail">Contact Email ID</label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location (city)</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="businessType">Business Type</label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
            >
              <option value="B2C Express">B2C Express</option>
              <option value="WAREHOUSING">WAREHOUSING</option>
              <option value="B2B EXPRESS">B2B EXPRESS</option>
              <option value="4PL SOLUTION">4PL SOLUTION</option>
              <option value="COMMUNITY WAREHOUSING">COMMUNITY WAREHOUSING</option>
            </select>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PartnerWithUs;
