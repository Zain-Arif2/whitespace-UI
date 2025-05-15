import React from 'react';
import './App.css';
import Landing from './components/landingPage/landing.jsx'
import Work from './components/Work/Work.jsx';
import Customize from './components/Customize/Customzie.jsx';
import Price from './components/Price/Price.jsx';
import Data from './components/Data/Data.jsx';
import Sponser from './components/Sponser/Sponser.jsx';
import Testimonial from './components/Testimonial/Testimonial.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
      <Landing />
      <Work />
      <Customize />
      <Price />
      <Data />
      <Sponser />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;






