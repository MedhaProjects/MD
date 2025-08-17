import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OurStoryPage from './pages/Ourstory';
import Offerings from './pages/Offerings';
import StudioCollection from './pages/StudioCollection';
import WhatOurClientsSay from './pages/WhatOurClientsSay';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop'; // <-- Import ScrollToTop

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* <-- Add here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ourstory" element={<OurStoryPage />} />
        <Route path="/offerings" element={<Offerings />} />
        <Route path="/studiocollection" element={<StudioCollection />} />
        <Route path="/whatourclientsay" element={<WhatOurClientsSay />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
