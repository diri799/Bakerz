import React, { useEffect, useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import '../styles/VisitorCounter.css';

const VisitorCounter = () => {
  const [count, setCount] = useState(() => {
    const stored = localStorage.getItem('visit-count');
    return stored ? parseInt(stored) : 0;
  });
  
  useEffect(() => {
    const newCount = count + 1;
    localStorage.setItem('visit-count', newCount);
    setCount(newCount);
  }, []);

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