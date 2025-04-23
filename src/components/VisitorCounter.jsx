import React from 'react';
import { FaUsers } from 'react-icons/fa';
import '../styles/VisitorCounter.css';

const VisitorCounter = ({ count }) => {
  return (
    <div className="visitor-counter">
      <span className="visitor-icon">
        <FaUsers />
      </span>
      <span className="visitor-count">{count}</span>
      <span className="visitor-label">visitors</span>
    </div>
  );
};

export default VisitorCounter; 