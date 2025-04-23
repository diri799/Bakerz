import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import './Product.css';

const Product = ({ image, name, description, price, rating, totalRatings, onRate }) => {
  const handleRate = (newRating) => {
    if (onRate) {
      onRate(newRating);
    }
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <StarRating
          rating={rating}
          totalRatings={totalRatings}
          onRate={handleRate}
        />
        <p className="price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  totalRatings: PropTypes.number.isRequired,
  onRate: PropTypes.func
};

Product.defaultProps = {
  rating: 0,
  totalRatings: 0,
  onRate: null
};

export default Product; 