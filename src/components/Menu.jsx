import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../styles/Products.css';

// Import all product images
import vanillaBeanCake from '../assets/VanillaBeanCake.png';
import shortbreadCookies from '../assets/Shortbread Cookies.png';
import redVelvetCake from '../assets/RedVelvetCake.png';
import pecanPie from '../assets/Pecan Pie.png';
import oatmealRaisinCookies from '../assets/Oatmeal Raisin Cookies.png';
import macaron from '../assets/Macaron.png';
import lemonDrizzleCake from '../assets/LemonDrizzleCake.png';
import lemonMeringuePie from '../assets/Lemon Meringue Pie.png';
import fruitTart from '../assets/FruitTart.png';
import chocolateFudgeCake from '../assets/chocolatefudgecake.png';
import chocolateEclair from '../assets/ChocolateÉclair.png';
import chocolateChipCookies from '../assets/Chocolate Chip Cookies.png';
import butterCroissant from '../assets/ButterCroissant.png';
import blueberryPie from '../assets/Blueberry Pie.png';
import birthdayCake from '../assets/birthday.png';
import applePie from '../assets/Apple Pie.png';
import almondDanish from '../assets/AlmondDanish.png';

const products = [
  {
    id: 1,
    name: 'Vanilla Bean Cake',
    price: 32.99,
    image: vanillaBeanCake,
    category: 'cakes',
    description: 'Light and fluffy vanilla cake with real vanilla bean',
    rating: 4.5,
    totalRatings: 128
  },
  {
    id: 2,
    name: 'Shortbread Cookies',
    price: 12.99,
    image: shortbreadCookies,
    category: 'cookies',
    description: 'Buttery and crumbly traditional shortbread',
    rating: 4.8,
    totalRatings: 95
  },
  {
    id: 3,
    name: 'Red Velvet Cake',
    price: 34.99,
    image: redVelvetCake,
    category: 'cakes',
    description: 'Classic red velvet with cream cheese frosting',
    rating: 4.7,
    totalRatings: 78
  },
  {
    id: 4,
    name: 'Pecan Pie',
    price: 24.99,
    image: pecanPie,
    category: 'pies',
    description: 'Rich and nutty Southern classic',
    rating: 4.6,
    totalRatings: 65
  },
  {
    id: 5,
    name: 'Oatmeal Raisin Cookies',
    price: 11.99,
    image: oatmealRaisinCookies,
    category: 'cookies',
    description: 'Chewy oatmeal cookies with plump raisins',
    rating: 4.4,
    totalRatings: 52
  },
  {
    id: 6,
    name: 'Macarons',
    price: 18.99,
    image: macaron,
    category: 'pastries',
    description: 'Delicate French almond meringue cookies',
    rating: 4.3,
    totalRatings: 40
  },
  {
    id: 7,
    name: 'Lemon Drizzle Cake',
    price: 29.99,
    image: lemonDrizzleCake,
    category: 'cakes',
    description: 'Zesty lemon cake with citrus glaze',
    rating: 4.2,
    totalRatings: 35
  },
  {
    id: 8,
    name: 'Lemon Meringue Pie',
    price: 26.99,
    image: lemonMeringuePie,
    category: 'pies',
    description: 'Tangy lemon curd topped with fluffy meringue',
    rating: 4.1,
    totalRatings: 28
  },
  {
    id: 9,
    name: 'Fruit Tart',
    price: 28.99,
    image: fruitTart,
    category: 'pastries',
    description: 'Fresh fruit arranged on vanilla custard',
    rating: 4.0,
    totalRatings: 25
  },
  {
    id: 10,
    name: 'Chocolate Fudge Cake',
    price: 36.99,
    image: chocolateFudgeCake,
    category: 'cakes',
    description: 'Rich chocolate cake with fudge frosting',
    rating: 4.8,
    totalRatings: 100
  },
  {
    id: 11,
    name: 'Chocolate Éclair',
    price: 4.99,
    image: chocolateEclair,
    category: 'pastries',
    description: 'Choux pastry filled with cream and topped with chocolate',
    rating: 4.7,
    totalRatings: 85
  },
  {
    id: 12,
    name: 'Chocolate Chip Cookies',
    price: 11.99,
    image: chocolateChipCookies,
    category: 'cookies',
    description: 'Classic cookies with premium chocolate chips',
    rating: 4.5,
    totalRatings: 70
  },
  {
    id: 13,
    name: 'Butter Croissant',
    price: 3.99,
    image: butterCroissant,
    category: 'pastries',
    description: 'Flaky, buttery French pastry',
    rating: 4.3,
    totalRatings: 50
  },
  {
    id: 14,
    name: 'Blueberry Pie',
    price: 24.99,
    image: blueberryPie,
    category: 'pies',
    description: 'Sweet-tart blueberries in a flaky crust',
    rating: 4.4,
    totalRatings: 60
  },
  {
    id: 15,
    name: 'Birthday Cake',
    price: 39.99,
    image: birthdayCake,
    category: 'cakes',
    description: 'Festive vanilla cake with rainbow sprinkles',
    rating: 4.6,
    totalRatings: 80
  },
  {
    id: 16,
    name: 'Apple Pie',
    price: 24.99,
    image: applePie,
    category: 'pies',
    description: 'Classic apple pie with cinnamon-spiced filling',
    rating: 4.3,
    totalRatings: 55
  },
  {
    id: 17,
    name: 'Almond Danish',
    price: 4.99,
    image: almondDanish,
    category: 'pastries',
    description: 'Flaky pastry with almond filling',
    rating: 4.2,
    totalRatings: 45
  }
];

const StarRating = ({ rating, totalRatings, onRate }) => {
  const [hover, setHover] = useState(null);

  return (
    <div className="star-rating">
      <div className="stars">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => onRate(ratingValue)}
              />
              <FaStar
                className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={20}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <div className="rating-info">
        <span className="rating-number">{rating.toFixed(1)}</span>
        <span className="rating-count">({totalRatings})</span>
      </div>
    </div>
  );
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [productsState, setProductsState] = useState(products);

  const handleRate = (productId, newRating) => {
    setProductsState(prevProducts => {
      return prevProducts.map(product => {
        if (product.id === productId) {
          const newTotalRatings = product.totalRatings + 1;
          const newAverageRating = (
            (product.rating * product.totalRatings + newRating) / newTotalRatings
          );
          return {
            ...product,
            rating: newAverageRating,
            totalRatings: newTotalRatings
          };
        }
        return product;
      });
    });
  };

  const filteredProducts = productsState.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="products-page">
      <div className="filters">
        <br />
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="category-filters">
          <button
            className={selectedCategory === 'all' ? 'active' : ''}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          <button
            className={selectedCategory === 'cakes' ? 'active' : ''}
            onClick={() => setSelectedCategory('cakes')}
          >
            Cakes
          </button>
          <button
            className={selectedCategory === 'pastries' ? 'active' : ''}
            onClick={() => setSelectedCategory('pastries')}
          >
            Pastries
          </button>
          <button
            className={selectedCategory === 'cookies' ? 'active' : ''}
            onClick={() => setSelectedCategory('cookies')}
          >
            Cookies
          </button>
          <button
            className={selectedCategory === 'pies' ? 'active' : ''}
            onClick={() => setSelectedCategory('pies')}
          >
            Pies
          </button>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image" onClick={() => openModal(product)}>
              <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p className="price">${product.price.toFixed(2)}</p>
            <p className="description">{product.description}</p>
            <StarRating
              rating={product.rating}
              totalRatings={product.totalRatings}
              onRate={(rating) => handleRate(product.id, rating)}
            />
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <div className="modal-body">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <div className="product-details">
                <h2>{selectedProduct.name}</h2>
                <p className="price">${selectedProduct.price.toFixed(2)}</p>
                <p className="description">{selectedProduct.description}</p>
                <StarRating
                  rating={selectedProduct.rating}
                  totalRatings={selectedProduct.totalRatings}
                  onRate={(rating) => {
                    handleRate(selectedProduct.id, rating);
                    setTimeout(closeModal, 500);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu; 