import React from 'react';
import '../styles/CategoryPage.css';

// Import pastry images
import butterCroissant from '../assets/ButterCroissant.png';
import fruitTart from '../assets/FruitTart.png';
import almondDanish from '../assets/AlmondDanish.png';
import chocolateEclair from '../assets/ChocolateÉclair.png';

const Pastries = () => {
  const pastries = [
    {
      id: 1,
      name: 'Butter Croissant',
      price: 3.99,
      image: butterCroissant,
      description: 'Flaky, buttery French pastry'
    },
    {
      id: 2,
      name: 'Fruit Tart',
      price: 28.99,
      image: fruitTart,
      description: 'Fresh fruit arranged on vanilla custard'
    },
    {
      id: 3,
      name: 'Almond Danish',
      price: 4.99,
      image: almondDanish,
      description: 'Flaky pastry with almond filling'
    },
    {
      id: 4,
      name: 'Chocolate Éclair',
      price: 4.99,
      image: chocolateEclair,
      description: 'Choux pastry filled with cream and topped with chocolate'
    }
  ];

  return (
    <div className="category-page">
      <h1>Our Pastries</h1>
      <div className="category-grid">
        {pastries.map((pastry) => (
          <div key={pastry.id} className="product-card">
            <img src={pastry.image} alt={pastry.name} />
            <h3>{pastry.name}</h3>
            <p className="description">{pastry.description}</p>
            <p className="price">${pastry.price.toFixed(2)}</p>
            <button className="order-button">Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pastries; 