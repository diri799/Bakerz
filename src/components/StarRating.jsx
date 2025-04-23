import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, totalRatings, onRate }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating">
      <div className="stars">
        {stars.map((star) => (
          <label key={star}>
            <input
              type="radio"
              name="rating"
              value={star}
              onChange={() => onRate(star)}
            />
            <FaStar
              className="star"
              color={star <= rating ? "#ffc107" : "#e4e5e9"}
              size={20}
            />
          </label>
        ))}
      </div>
      <div className="rating-info">
        <span className="rating-number">{rating.toFixed(1)}</span>
        <span className="rating-count">({totalRatings} ratings)</span>
      </div>
    </div>
  );
};

export default StarRating; 