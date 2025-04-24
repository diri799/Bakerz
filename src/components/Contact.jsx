import React, { useState } from 'react';
// Use consistent casing for imports (match exact filename casing)
import bobImage from '../assets/bob.png'; // Make sure casing matches your actual file
import aliceImage from '../assets/alice.png'; // Make sure casing matches your actual file
import '../styles/Contact.css';

const customerCare = [
  {
    name: 'Alice Johnson',
    email: 'alice@versaflex.com', // Changed to your domain
    avatar: aliceImage, // Using the imported variable
    role: 'Customer Care Lead',
  },
  {
    name: 'Bob Martinez',
    email: 'bob@versaflex.com', // Changed to your domain
    avatar: bobImage, // Using the imported variable
    role: 'Customer Care Rep',
  }
];

const Contact = () => {
  // ... rest of your component code remains the same ...
  return (
    <div className="contact-page">
      {/* ... other sections ... */}
      <section className="customer-care">
        <h2>Customer Care Team</h2>
        <div className="profiles">
          {customerCare.map((cc) => (
            <div key={cc.email} className="profile-card">
              <img 
                src={cc.avatar} 
                alt={cc.name} 
                className="avatar" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://via.placeholder.com/150'; // Fallback image
                }}
              />
              {/* ... rest of profile card ... */}
            </div>
          ))}
        </div>
      </section>
      {/* ... rest of your component ... */}
    </div>
  );
};

export default Contact;
