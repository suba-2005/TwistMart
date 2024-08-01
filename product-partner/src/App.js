import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/Landing';
import Works from './components/Works';
import Faq from './components/FAQ';
import Card from './components/Partners';
import Profiles from './components/Partners';
import ContactUs from './components/Contact';
import Footer from './components/Footer';
import CardList from './components/Services';
import Services from './components/Services';
import BusinessRegistrationForm from './components/PartnerForm';
import FAQ from './components/FAQ';
import Partners from './components/Partners';

function App() {
  return (
    <>
      <LandingPage />
<Services />
<Works />
<Partners />
<FAQ />
<ContactUs />
<Footer />
<BusinessRegistrationForm />
    </>
  );
}

export default App;
