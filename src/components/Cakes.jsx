import React from 'react';
import '../styles/CategoryPage.css';

// Import cake images
import vanillaBeanCake from '../assets/VanillaBeanCake.png';
import redVelvetCake from '../assets/RedVelvetCake.png';
import chocolateFudgeCake from '../assets/chocolatefudgecake.png';
import lemonDrizzleCake from '../assets/LemonDrizzleCake.png';
import birthdayCake from '../assets/birthday.png';

const Cakes = () => {
  const cakes = [
    {
      id: 1,
      name: 'Vanilla Bean Cake',
      price: 32.99,
      image: vanillaBeanCake,
      description: 'Light and fluffy vanilla cake with real vanilla bean'
    },
    {
      id: 2,
      name: 'Red Velvet Cake',
      price: 34.99,
      image: redVelvetCake,
      description: 'Classic red velvet with cream cheese frosting'
    },
    {
      id: 3,
      name: 'Chocolate Fudge Cake',
      price: 36.99,
      image: chocolateFudgeCake,
      description: 'Rich chocolate cake with fudge frosting'
    },
    {
      id: 4,
      name: 'Lemon Drizzle Cake',
      price: 29.99,
      image: lemonDrizzleCake,
      description: 'Zesty lemon cake with citrus glaze'
    },
    {
      id: 5,
      name: 'Birthday Cake',
      price: 39.99,
      image: birthdayCake,
      description: 'Festive vanilla cake with rainbow sprinkles'
    }
  ];

  return (
    <div className="category-page">
      <h1>Our Cakes</h1>
      <div className="category-grid">
        {cakes.map((cake) => (
          <div key={cake.id} className="product-card">
            <img src={cake.image} alt={cake.name} />
            <h3>{cake.name}</h3>
            <p className="description">{cake.description}</p>
            <p className="price">${cake.price.toFixed(2)}</p>
            <button className="order-button">Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cakes; 