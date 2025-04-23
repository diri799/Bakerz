import React, { useState } from 'react';
import '../styles/Merchandise.css';
import trayImage from '../assets/Tray.png';
import toteImage from '../assets/Tote.png';
import hotChocolateImage from '../assets/Hot chocolate.png';

const merchandise = [
  {
    id: 1,
    name: 'Bakerz Bites Hot Chocolate Set',
    price: 14.99,
    image: hotChocolateImage,
    description: 'Premium hot chocolate set with Bakerz Bites signature blend',
    details: {
      material: 'Ceramic Mug + Chocolate Mix',
      capacity: '12 oz',
      dishwasherSafe: true,
      microwaveSafe: true
    }
  },
  {
    id: 2,
    name: 'Canvas Tote Bag',
    price: 19.99,
    image: toteImage,
    description: 'Eco-friendly canvas tote with Bakerz Bites design',
    details: {
      material: '100% Cotton Canvas',
      size: '15" x 16"',
      washable: true,
      capacity: '30 lbs'
    }
  },
  {
    id: 3,
    name: 'Serving Tray',
    price: 34.99,
    image: trayImage,
    description: 'Elegant serving tray with Bakerz Bites design',
    details: {
      material: 'Bamboo',
      size: '18" x 12"',
      handWashOnly: true,
      handles: 'Built-in'
    }
  }
];

const Merchandise = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="merchandise-page">
      <div className="merchandise-header">
        <h1>Bakerz Bites Merchandise</h1>
        <p>Take home a piece of our brand</p>
      </div>

      <div className="merchandise-grid">
        {merchandise.map(item => (
          <div key={item.id} className="merchandise-card" onClick={() => openModal(item)}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">${item.price.toFixed(2)}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <div className="modal-body">
              <img src={selectedItem.image} alt={selectedItem.name} />
              <div className="item-details">
                <h2>{selectedItem.name}</h2>
                <p className="price">${selectedItem.price.toFixed(2)}</p>
                <p className="description">{selectedItem.description}</p>
                <div className="specifications">
                  <h3>Product Specifications:</h3>
                  <ul>
                    {Object.entries(selectedItem.details).map(([key, value]) => (
                      <li key={key}>
                        <span className="spec-label">
                          {key.replace(/([A-Z])/g, ' $1').trim().charAt(0).toUpperCase() + 
                           key.replace(/([A-Z])/g, ' $1').trim().slice(1)}:
                        </span>
                        <span className="spec-value">{value.toString()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Merchandise; 