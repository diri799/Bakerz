import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cakes from './components/Cakes';
import Pastries from './components/Pastries';
import Cookies from './components/Cookies';
import Merchandise from './components/Merchandise';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Simulate visitor count
    setVisitorCount(Math.floor(Math.random() * 1000) + 500);

    // Get geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar visitorCount={visitorCount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/products/cakes" element={<Cakes />} />
          <Route path="/products/pastries" element={<Pastries />} />
          <Route path="/products/cookies" element={<Cookies />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer location={location} />
      </div>
    </Router>
  );
}

export default App;
