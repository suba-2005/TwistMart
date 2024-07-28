import React, { useState } from 'react';
import './AddressForm.css'; 

const AddressForm = () => {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Street:', street);
    console.log('City:', city);
    console.log('State:', state);
    console.log('Zip Code:', zipCode);
    console.log('Country:', country);
  };

  return (
    <div className="address-form-container">
      <div className="address-form-header">
        <h2>Address Form</h2>
      </div>
      <form className="address-form" onSubmit={handleSubmit}>
        <label htmlFor="street">Street Address</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          placeholder="Enter your street address"
          required
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter your city"
          required
        />
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Enter your state"
          required
        />
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="Enter your zip code"
          required
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter your country"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddressForm;
