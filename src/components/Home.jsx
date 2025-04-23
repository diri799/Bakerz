import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

// Import featured product images
import chocolateFudgeCake from '../assets/chocolatefudgecake.png';
import butterCroissant from '../assets/ButterCroissant.png';
import chocolateChipCookies from '../assets/Chocolate Chip Cookies.png';

// Import pastry images for Weekend Special
import fruitTart from '../assets/FruitTart.png';
import almondDanish from '../assets/AlmondDanish.png';
import chocolateEclair from '../assets/ChocolateÉclair.png';

// Import cake images for Birthday Package
import vanillaBeanCake from '../assets/VanillaBeanCake.png';
import redVelvetCake from '../assets/RedVelvetCake.png';
import birthdayCake from '../assets/birthday.png';
import lemonDrizzleCake from '../assets/LemonDrizzleCake.png';

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="slider-container">
      <img 
        src={images[currentIndex]} 
        alt="Slider" 
        className="slider-image"
      />
      <div className="slider-dots">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const pastryImages = [fruitTart, almondDanish, chocolateEclair, butterCroissant];
  const cakeImages = [birthdayCake, vanillaBeanCake, redVelvetCake, lemonDrizzleCake];

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Bakerz Bites</h1>
          <p>Indulge in our freshly baked delights</p>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src={chocolateFudgeCake} alt="Chocolate Cake" />
            <h3>Chocolate Cake</h3>
            <p>Rich and decadent chocolate layers</p>
          </div>
          <div className="product-card">
            <img src={butterCroissant} alt="Butter Croissant" />
            <h3>Butter Croissant</h3>
            <p>Flaky and buttery perfection</p>
          </div>
          <div className="product-card">
            <img src={chocolateChipCookies} alt="Chocolate Chip Cookies" />
            <h3>Chocolate Chip Cookies</h3>
            <p>Classic homestyle cookies</p>
          </div>
        </div>
      </section>

      <section className="special-offers">
        <h2>Special Offers</h2>
        <div className="offers-container">
          <div className="offer-card">
            <h3>Weekend Special</h3>
            <ImageSlider images={pastryImages} interval={4000} />
            <p>20% off on all pastries</p>
            <Link to="/products/pastries" className="offer-button">View Pastries</Link>
          </div>
          <div className="offer-card">
            <h3>Birthday Package</h3>
            <ImageSlider images={cakeImages} interval={4000} />
            <p>Custom cake + 12 cupcakes</p>
            <Link to="/products/cakes" className="offer-button">View Cakes</Link>
          </div>
        </div>
      </section>

      <section className="categories">
        <h2>Our Categories</h2>
        <div className="category-grid">
          <Link to="/products/cakes" className="category-card">
            <img src={redVelvetCake} alt="Cakes" />
            <h3>Cakes</h3>
          </Link>
          <Link to="/products/pastries" className="category-card">
            <img src={chocolateEclair} alt="Pastries" />
            <h3>Pastries</h3>
          </Link>
          <Link to="/products/cookies" className="category-card">
            <img src={chocolateChipCookies} alt="Cookies" />
            <h3>Cookies</h3>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 