import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import TrackOrder from './components/TrackOrder';
import PartnerWithUs from './components/PartnerWithUs';
import LoginForm from './components/LoginForm';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './index.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trackorder" element={<TrackOrder />} />
          <Route path="/partner" element={<PartnerWithUs />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
