import React from 'react';
import '../styles/CategoryPage.css';

// Import cookie images
import chocolateChipCookies from '../assets/Chocolate Chip Cookies.png';
import oatmealRaisinCookies from '../assets/Oatmeal Raisin Cookies.png';
import shortbreadCookies from '../assets/Shortbread Cookies.png';

const Cookies = () => {
  const cookies = [
    {
      id: 1,
      name: 'Chocolate Chip Cookies',
      price: 11.99,
      image: chocolateChipCookies,
      description: 'Classic cookies with premium chocolate chips'
    },
    {
      id: 2,
      name: 'Oatmeal Raisin Cookies',
      price: 11.99,
      image: oatmealRaisinCookies,
      description: 'Chewy oatmeal cookies with plump raisins'
    },
    {
      id: 3,
      name: 'Shortbread Cookies',
      price: 12.99,
      image: shortbreadCookies,
      description: 'Buttery and crumbly traditional shortbread'
    }
  ];

  return (
    <div className="category-page">
      <h1>Our Cookies</h1>
      <div className="category-grid">
        {cookies.map((cookie) => (
          <div key={cookie.id} className="product-card">
            <img src={cookie.image} alt={cookie.name} />
            <h3>{cookie.name}</h3>
            <p className="description">{cookie.description}</p>
            <p className="price">${cookie.price.toFixed(2)}</p>
            <button className="order-button">Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cookies; 